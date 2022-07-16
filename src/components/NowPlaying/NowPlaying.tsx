import React, { useEffect } from "react";
import { animate } from "motion";
import { PlayingMusicType } from "@interface/data";
import { z } from "zod";
import { fetcher } from "@utils/fetcher";
import useSWR from "swr";
import Spotify from "@components/Icons/Spotify";

type NowPlayingProps = z.infer<typeof PlayingMusicType>;

function AnimatedBars() {
  useEffect(() => {
    animate(
      "#bar1",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(1.5) translateY(-0.082rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ["ease-in-out"],
      },
    );
    animate(
      "#bar2",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(3) translateY(-0.083rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      },
    );
    animate(
      "#bar3",
      {
        transform: [
          "scaleY(1.0)  translateY(0rem)",
          "scaleY(0.5) translateY(0.37rem)",
          "scaleY(1.0)  translateY(0rem)",
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      },
    );
  }, []);

  return (
    <div className="flex items-end space-x-0.5 overflow-hidden">
      <span id="bar1" className="h-1 w-1 bg-green-600/70" />
      <span id="bar2" className="h-2 w-1 bg-green-400/70" />
      <span id="bar3" className="h-3 w-1 bg-green-200/80" />
    </div>
  );
}

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingProps>("/api/now-playing", fetcher);

  return (
    <div className="px-8 font-serif">
      <div className="flex items-center space-x-2">
        {data && data.isPlaying ? (
          <AnimatedBars />
        ) : (
          <Spotify className="mb-0.5 h-6 w-6" />
        )}
        <div className="inline-flex w-full flex-col overflow-hidden whitespace-normal">
          {data && data.isPlaying ? (
            <a
              className="max-w-max text-[12px] font-bold text-[#fafafa] no-underline"
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              🎵{data.title}
              <span className="hidden text-[#fafafa] md:inline">
                {" "}
                - {data.artist}
              </span>
            </a>
          ) : (
            <p className="text-[12px] font-bold text-[#fafafa]">
              Not Playing - Spotify
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
