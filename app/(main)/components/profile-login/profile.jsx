"use client";

import React, { useState } from "react";
import {
  FaPlay,
  FaEllipsisV,
  FaHeart,
  FaMusic,
} from "react-icons/fa";


export default function Profile() {
  const [activeTab, setActiveTab] = useState("saved"); // "saved" | "liked"
  const [playingId, setPlayingId] = useState(null);


  const savedSongs = [
    { id: 11, title: "Chill Vibes", artist: "DJ Relax", time: "3:45" },
    { id: 12, title: "Morning Flow", artist: "Lo-Fi Beats", time: "2:58" },
    { id: 13, title: "Moonlight Drive", artist: "Synth Wave", time: "4:12" },
    { id: 14, title: "Nightwalker", artist: "Dreamcast", time: "3:30" },
  ];

  const likedSongs = [
    { id: 21, title: "Rock On", artist: "The Guitars", time: "3:50" },
    { id: 22, title: "Summer Nights", artist: "Pop Star", time: "3:10" },
    { id: 23, title: "Electric Dreams", artist: "Retro Future", time: "4:01" },
    { id: 24, title: "Pulse", artist: "Electronica", time: "3:20" },
  ];

  const list = activeTab === "saved" ? savedSongs : likedSongs;

  const handlePlayToggle = (id) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  const current = playingId ? list.find((s) => s.id === playingId) : null;

  return (
    <div className="w-[80%] h-[85%] relative rounded-[20px] border border-[#ffffff12] bg-gradient-to-b from-[#0b0b0b] to-[#0f0f0f] p-6 flex flex-col shadow-xl">

      <div className="flex items-center gap-5 mb-6">

        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff6a00] to-[#ff3c00] flex items-center justify-center text-white text-4xl shadow-[0_6px_30px_rgba(255,106,0,0.18)]">
            <FaMusic />
          </div>
        </div>


        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">John Doe</h2>
              <p className="text-sm text-gray-400 mt-1">johndoe@email.com</p>
            </div>


            <button
              type="button"
              className="px-3 py-1 text-sm rounded-md bg-white/6 text-[#ff6a00] border border-[#ff6a00]/20 hover:bg-white/10 transition"
              aria-label="Change password"
            >
              Change password
            </button>
          </div>

        
        </div>
      </div>

      <div className="flex items-center gap-3 border-b border-[#ffffff0a] pb-3 mb-4">
        <button
          onClick={() => setActiveTab("saved")}
          className={`relative px-4 py-2 text-sm font-medium rounded-md transition ${
            activeTab === "saved"
              ? "text-[#ff6a00] after:absolute after:-bottom-[10px] after:left-1/2 after:-translate-x-1/2 after:w-14 after:h-1 after:bg-[#ff6a00] after:rounded-full"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Saved
        </button>

        <button
          onClick={() => setActiveTab("liked")}
          className={`relative px-4 py-2 text-sm font-medium rounded-md transition ${
            activeTab === "liked"
              ? "text-[#ff6a00] after:absolute after:-bottom-[10px] after:left-1/2 after:-translate-x-1/2 after:w-14 after:h-1 after:bg-[#ff6a00] after:rounded-full"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Liked
        </button>

        <div className="ml-auto text-xs text-gray-400">Showing {list.length} tracks</div>
      </div>


      <div className="flex-1 overflow-y-auto space-y-3 pr-2 pb-4">
        {list.map((song) => (
          <div
            key={song.id}
            className="group flex items-center justify-between gap-4 p-3 rounded-lg bg-gradient-to-b from-[#0f0f0f] to-[#141414] hover:from-[#151515] hover:to-[#161616] transition"
            role="listitem"
          >
            <div className="flex items-center gap-3">
 
              <div className="w-14 h-14 rounded-md bg-gradient-to-br from-[#1f1f1f] to-[#131313] flex items-center justify-center text-[#ff6a00] text-lg font-semibold">
     
                {song.title.split(" ").slice(0, 2).map((w) => w[0]).join("")}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="text-white font-medium">{song.title}</p>
                  {playingId === song.id && (
                    <span className="text-xs text-[#ff6a00]">Playing</span>
                  )}
                </div>
                <p className="text-xs text-gray-400">{song.artist}</p>
              </div>
            </div>


            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={() => handlePlayToggle(song.id)}
                aria-label={playingId === song.id ? "Pause" : "Play"}
                className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                  playingId === song.id
                    ? "bg-[#ff6a00] text-black border-transparent shadow-lg"
                    : "bg-white/3 text-[#ff6a00] border-[#ff6a00]/20 hover:bg-[#ff6a00] hover:text-black"
                } transition`}
              >
                <FaPlay />
              </button>

              <button
                aria-label="Like"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-[#ff6a00] transition"
                title="Like"
              >
                <FaHeart />
              </button>

              <button
                aria-label="More"
                className="w-8 h-8 rounded flex items-center justify-center text-gray-400 hover:text-gray-200 transition"
                title="More"
              >
                <FaEllipsisV />
              </button>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-4 border-t border-[#ffffff08] pt-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-[#111] flex items-center justify-center text-[#ff6a00]">
            {playingId ? "▶" : "♪"}
          </div>
          <div>
            <p className="text-sm text-white font-medium">
              {playingId ? current?.title : "No track playing"}
            </p>
            <p className="text-xs text-gray-400">{playingId ? current?.artist : "—"}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-3 py-1 text-sm rounded-md bg-white/6 text-[#ff6a00] border border-[#ff6a00]/20 hover:bg-white/10 transition">
            Shuffle
          </button>
          <button className="px-3 py-1 text-sm rounded-md bg-[#ff6a00] text-black hover:bg-[#e55c00] transition">
            Play all
          </button>
        </div>
      </div>
    </div>
  );
}
