import { useEffect, useRef, useState } from 'react';
import autoplay_site_oss from '/assets/videos/autoplay_site_oss.mp4';
import { SpeakerHighIcon, SpeakerXIcon } from '@phosphor-icons/react';

export const HomePage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;

      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseEnter = () => setShowCustomCursor(true);
    const handleMouseLeave = () => setShowCustomCursor(false);
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('mousemove', handleMouseMove);
      videoElement.addEventListener('mouseenter', handleMouseEnter);
      videoElement.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        videoElement.removeEventListener('mousemove', handleMouseMove);
        videoElement.removeEventListener('mouseenter', handleMouseEnter);
        videoElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <section
      id="home"
      className="relative flex justify-center items-center h-screen w-screen"
      onClick={toggleMute}
    >
      <video
        ref={videoRef}
        src={autoplay_site_oss}
        className="w-screen h-screen max-h-full object-cover cursor-none"
        autoPlay
        loop
        playsInline
        muted={isMuted}
        id="background-video"
      />
      {showCustomCursor && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
          }}
        >
          <div className="flex items-center gap-2 bg-zinc-800/50 text-white px-3 py-2 rounded-lg backdrop-blur-md shadow-lg border border-white/20 whitespace-nowrap">
            {isMuted ? <SpeakerXIcon /> : <SpeakerHighIcon />}
            <span className="text-sm font-medium">
              {isMuted ? 'Sem som' : 'Com som'}
            </span>
          </div>
        </div>
      )}

      <button
        onClick={toggleMute}
        className={`visible lg:hidden absolute bottom-5 right-5 p-3 text-white border border-white/20 rounded-2xl cursor-pointer z-10 text-2xl transition-all duration-300 bg-zinc-800/50 hover:border-[#972620] hover:bg-[#972620] backdrop-blur-md shadow-lg`}
      >
        {isMuted ? <SpeakerHighIcon /> : <SpeakerXIcon />}
      </button>
    </section>
  );
};
