import { SpeakerXIcon } from "@phosphor-icons/react";
import { SpeakerHighIcon } from "@phosphor-icons/react/dist/ssr";
import { useRef, useState } from "react";
import autoplay_site_oss from "/assets/videos/autoplay_site_oss.mp4";

export const HomePage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="home"
      className="relative flex justify-center items-center h-screen w-screen"
    >
      <video
        ref={videoRef}
        src={autoplay_site_oss}
        className="w-screen h-screen max-h-full object-cover"
        autoPlay
        loop
        playsInline
        muted={isMuted}
      />

      <button
        onClick={toggleMute}
        className={`absolute bottom-5 right-5 p-3 text-white border border-white/20 rounded-2xl cursor-pointer z-10 text-2xl transition-all duration-300 bg-zinc-900/80 hover:border-[#972620] hover:bg-[#972620] backdrop-blur-md shadow-lg ${
          isMuted ? "block" : "block"
        }`}
      >
        {isMuted ? <SpeakerHighIcon /> : <SpeakerXIcon />}
      </button>
    </section>
  );
};
