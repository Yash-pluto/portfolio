import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import animePic from "../assets/anime.png";

// --- Timer Helper Components ---

const ElapsedTimer = ({ start }) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const pad = (n) => n.toString().padStart(2, "0");
    return h > 0
      ? `${pad(h)}:${pad(m)}:${pad(s)} elapsed`
      : `${pad(m)}:${pad(s)} elapsed`;
  };

  const elapsed = Math.max(0, now - start);

  return (
    <span className='text-[8px] font-mono text-neutral-400 mt-0.5 block'>
      {format(elapsed)}
    </span>
  );
};

const SpotifyTimer = ({ start, end }) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const elapsed = Math.max(0, now - start);
  const total = end - start;
  const progress = Math.min(100, (elapsed / total) * 100);

  return (
    <div className='flex flex-col gap-1 w-full mt-1'>
      <div className='flex justify-between text-[8px] font-mono text-neutral-400'>
        <span>{format(elapsed)}</span>
        <span>{format(total)}</span>
      </div>
      <div className='w-full h-[2px] bg-neutral-800 rounded-full overflow-hidden'>
        <div
          className='h-full bg-purple-500 transition-all duration-1000 ease-linear'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

// --- Main Component ---

export default function LiveStatus() {
  const [activities, setActivities] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isConnecting, setIsConnecting] = useState(true);

  useEffect(() => {
    const fetchPresence = async () => {
      try {
        const response = await fetch(
          "https://api.lanyard.rest/v1/users/1284436492860653629",
        );
        const { data } = await response.json();
        if (!data) return;

        let newActivities = [];

        // 1. Spotify
        if (data.listening_to_spotify && data.spotify) {
          newActivities.push({
            id: "spotify",
            label: "AUDIO",
            title: data.spotify.song,
            subtitle: data.spotify.artist.split(";").join(", "),
            image: data.spotify.album_art_url,
            isLive: true,
            type: "spotify",
            timestamps: data.spotify.timestamps,
          });
        }

        // 2. Process / VS Code / Games
        if (data.activities && data.activities.length > 0) {
          const processActivity = data.activities.find((a) => a.type === 0);

          if (processActivity) {
            let processImage = null;

            if (processActivity.assets) {
              const imgId =
                processActivity.assets.large_image ||
                processActivity.assets.small_image;

              if (imgId) {
                if (imgId.startsWith("mp:external/")) {
                  // FIX: Appended dimension parameter to resolve image crispness issues
                  processImage =
                    imgId.replace("mp:", "https://media.discordapp.net/") +
                    "?width=128&height=128";
                } else {
                  // FIX: Forced high-res 128px version of the asset from Discord CDN
                  processImage = `https://cdn.discordapp.com/app-assets/${processActivity.application_id}/${imgId}.png?size=128`;
                }
              }
            }

            if (!processImage && processActivity.application_id) {
              processImage = `https://dcdn.dstn.to/app-icons/${processActivity.application_id}`;
            }

            const processSubtitle =
              processActivity.assets?.large_text ||
              processActivity.details ||
              processActivity.state ||
              "Active";

            newActivities.push({
              id: "process",
              label: "PROCESS",
              title: processActivity.name,
              subtitle: processSubtitle,
              image: processImage,
              isLive: true,
              type: "process",
              timestamps: processActivity.timestamps,
            });
          }
        }

        // 3. Fallback
        if (newActivities.length === 0) {
          newActivities.push({
            id: "process",
            label: "PROCESS",
            title:
              data.discord_status === "offline"
                ? "USER OFFLINE"
                : "WATCHING ANIME",
            subtitle: data.discord_status === "offline" ? "Offline" : "Online",
            image: data.discord_status === "offline" ? null : animePic,
            isLive: data.discord_status !== "offline",
            type: "process",
          });
        }

        setActivities(newActivities);
        setIsConnecting(false);

        if (activeIdx >= newActivities.length) {
          setActiveIdx(0);
        }
      } catch (error) {
        setActivities([
          {
            id: "error",
            label: "SYSTEM",
            title: "UPLINK FAILED",
            subtitle: "Offline",
            image: null,
            isLive: false,
            type: "error",
          },
        ]);
        setIsConnecting(false);
      }
    };

    fetchPresence();
    const intervalId = setInterval(fetchPresence, 10000);
    return () => clearInterval(intervalId);
  }, [activeIdx]);

  if (isConnecting || activities.length === 0) {
    return (
      <div className='flex items-center gap-3 h-[52px]'>
        <div className='w-2 h-2 bg-neutral-700 rounded-full animate-pulse'></div>
        <span className='text-[10px] font-mono text-neutral-500'>
          AWAITING UPLINK...
        </span>
      </div>
    );
  }

  const active = activities[activeIdx];

  return (
    <div className='flex flex-col w-full'>
      {/* Tabs Menu */}
      {activities.length > 1 && (
        <div className='flex gap-2 mb-3 border-b border-white/10 pb-2'>
          {activities.map((act, idx) => (
            <button
              key={act.id}
              onClick={() => setActiveIdx(idx)}
              className={`text-[8px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                activeIdx === idx
                  ? "text-white"
                  : "text-neutral-600 hover:text-neutral-400"
              }`}
            >
              {act.label}
            </button>
          ))}
        </div>
      )}

      {/* FIX: Set a strict minimum/standard height to anchor the container sizing layout */}
      <div className='flex items-start gap-3 min-h-[52px]'>
        {/* Visual Indicator */}
        <div className='relative flex items-center justify-center w-8 h-8 flex-shrink-0 mt-0.5'>
          {active.image ? (
            <img
              src={active.image}
              alt='Activity Art'
              className='w-full h-full object-cover rounded-sm border border-white/10 image-render-pixelated'
            />
          ) : active.isLive ? (
            <span className='relative inline-flex rounded-full h-2 w-2 bg-purple-500 shadow-[0_0_8px] shadow-purple-500/50'></span>
          ) : (
            <span className='w-2 h-2 bg-neutral-700 rounded-full'></span>
          )}
        </div>

        {/* Text Readout */}
        <div className='flex flex-col min-w-0 flex-1 overflow-hidden'>
          {activities.length === 1 && (
            <p className='text-[8px] font-bold tracking-[0.2em] uppercase text-neutral-600 mb-0.5 truncate'>
              {active.label}
            </p>
          )}

          <AnimatePresence mode='wait'>
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className='flex flex-col min-w-0'
            >
              <span
                className='text-[10px] font-mono text-white truncate leading-none mb-1'
                title={active.title}
              >
                {active.title}
              </span>
              <span
                className='text-[8px] font-mono text-neutral-500 truncate leading-none'
                title={active.subtitle}
              >
                {active.subtitle}
              </span>

              {/* Dynamic Timers */}
              {active.type === "spotify" &&
                active.timestamps?.start &&
                active.timestamps?.end && (
                  <SpotifyTimer
                    start={active.timestamps.start}
                    end={active.timestamps.end}
                  />
                )}
              {active.type === "process" && active.timestamps?.start && (
                <ElapsedTimer start={active.timestamps.start} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
