// import myvideo from "@/public/video/La-Baraka-2024-03-22-part1.mp4";

import { Url } from "next/dist/shared/lib/router/router";

// import myvideomp4 from "../../public/video/La-Baraka-2024-03-22-part1.mp4";
interface VideoProps {
  videoUrl: string;
}

export function Video({ videoUrl }: VideoProps) {
  return (
    <video
      width="320"
      height="240"
      // controls
      autoPlay
      loop
      muted
      preload="auto" // none, metadata, auto
      playsInline
      className="w-full"
    >
      <source src={videoUrl} type="video/mp4" />
      <track
      // src="/path/to/captions.vtt"
      // kind="subtitles"
      // srcLang="en"
      // label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
