import { DotsNineIcon } from '@phosphor-icons/react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Menu } from './Menu';
import logo from '/assets/logo.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldInvertColors, setShouldInvertColors] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastCheckTimeRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const lastBrightnessRef = useRef<number>(-1);
  const stableCountRef = useRef<number>(0);
  const navigate = useNavigate();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const initCanvas = useCallback(() => {
    if (!canvasRef.current) {
      canvasRef.current = document.createElement('canvas');
      ctxRef.current = canvasRef.current.getContext('2d', {
        willReadFrequently: true,
        alpha: false,
      });
      canvasRef.current.width = 100;
      canvasRef.current.height = 100;
    }
  }, []);

  const checkVideoColor = useCallback(() => {
    const now = Date.now();

    if (now - lastCheckTimeRef.current < 100) {
      animationFrameRef.current = requestAnimationFrame(checkVideoColor);
      return;
    }

    lastCheckTimeRef.current = now;

    const video = document.getElementById(
      'background-video',
    ) as HTMLVideoElement;

    if (
      !video ||
      video.readyState < 2 ||
      video.paused ||
      !ctxRef.current ||
      !canvasRef.current
    ) {
      animationFrameRef.current = requestAnimationFrame(checkVideoColor);
      return;
    }

    try {
      ctxRef.current.drawImage(video, 0, 0, 100, 100);

      const imageData = ctxRef.current.getImageData(40, 20, 20, 10);
      const data = imageData.data;

      let totalBrightness = 0;
      let pixelCount = 0;

      for (let i = 0; i < data.length; i += 16) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (r !== undefined && g !== undefined && b !== undefined) {
          totalBrightness += r * 0.299 + g * 0.587 + b * 0.114;
          pixelCount++;
        }
      }

      if (pixelCount > 0) {
        const brightness = totalBrightness / pixelCount / 255;
        const shouldInvert = brightness > 0.5;

        if (Math.abs(brightness - lastBrightnessRef.current) > 0.15) {
          lastBrightnessRef.current = brightness;
          stableCountRef.current = 1;
        } else if (lastBrightnessRef.current >= 0) {
          stableCountRef.current++;

          if (stableCountRef.current >= 3) {
            setShouldInvertColors(shouldInvert);
            stableCountRef.current = 0;
          }
        }
      }
    } catch (error) {}

    animationFrameRef.current = requestAnimationFrame(checkVideoColor);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target?.closest('.menu') && !target?.closest('.menu-icon')) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, [closeMenu]);

  useEffect(() => {
    const video = document.getElementById(
      'background-video',
    ) as HTMLVideoElement;
    if (!video) return;

    initCanvas();

    const startDetection = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(checkVideoColor);
    };

    if (video.readyState >= 2) {
      startDetection();
    } else {
      video.addEventListener('canplay', startDetection, { once: true });
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [initCanvas, checkVideoColor]);

  return (
    <>
      <header
        ref={headerRef}
        className="backdrop-blur-xl md:backdrop-blur-none md:bg-transparent fixed top-0 w-full flex justify-between rounded-xl items-center px-6 md:px-24 py-6 md:py-8 z-40"
      >
        <a
          onClick={() => navigate('/')}
          className="navbar-brand cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo"
            width="137"
            height="39"
            className="inline-block align-top transition-all duration-500"
            style={{
              filter: shouldInvertColors ? 'invert(1)' : 'none',
            }}
          />
        </a>
        <div
          className="menu-icon cursor-pointer text-4xl animate-pulse transition-all duration-500 hover:text-[#972620]"
          style={{
            color: shouldInvertColors ? '#000' : '#fff',
          }}
          onClick={toggleMenu}
        >
          <DotsNineIcon size={32} />
        </div>
      </header>
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};
