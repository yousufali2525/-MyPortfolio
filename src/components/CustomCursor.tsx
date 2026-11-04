
import { useEffect, useRef, useState } from 'react';
import { useCursor, type CursorVariant } from '../context/CursorContext';

export const CustomCursor = () => {
  const {
    variant,
    setVariant,
    cursorText,
    setCursorText,
    settings,
    isTouchDevice,
  } = useCursor();

  const mousePos = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });
  const isVisibleRef = useRef(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
  const [touchActive, setTouchActive] = useState(false);
  const [touchKey, setTouchKey] = useState(0);

  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTouchDevice || !settings.enabled) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'button, a, input, textarea, select, [role="button"], [data-cursor]'
      ) as HTMLElement | null;

      if (!interactiveEl) return;

      const customType = interactiveEl.getAttribute('data-cursor') as CursorVariant | null;
      const customText = interactiveEl.getAttribute('data-cursor-text') || '';

      setVariant(customType || 'hover');
      setCursorText(customText);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'button, a, input, textarea, select, [role="button"], [data-cursor]'
      );

      if (!interactiveEl) return;

      const related = e.relatedTarget as HTMLElement | null;

      if (!related || !interactiveEl.contains(related)) {
        setVariant('default');
        setCursorText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isTouchDevice, settings.enabled, setVariant, setCursorText]);

  useEffect(() => {
    if (isTouchDevice || !settings.enabled) return;

    let animId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      if (mousePos.current.x !== -100) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const animate = () => {
      const speed = settings.lerpSpeed;

      circlePos.current.x +=
        (mousePos.current.x - circlePos.current.x) * speed;

      circlePos.current.y +=
        (mousePos.current.y - circlePos.current.y) * speed;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('blur', onMouseUp);

    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('blur', onMouseUp);

      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);

      cancelAnimationFrame(animId);
    };
  }, [isTouchDevice, settings.enabled, settings.lerpSpeed]);

  useEffect(() => {
    if (!isTouchDevice || !settings.enabled) return;

    const handleTouch = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      if (!touch) return;

      setTouchPosition({
        x: touch.clientX,
        y: touch.clientY,
      });

      setTouchKey((prev) => prev + 1);
      setTouchActive(true);
    };

    const handleTouchEnd = () => {
      setTouchActive(false);
    };

    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isTouchDevice, settings.enabled]);

  if (!settings.enabled) return null;

  if (isTouchDevice) {
    return (
      <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        {touchActive && (
          <div
            key={touchKey}
            className="absolute h-12 w-12 rounded-full border-2 border-red-500 bg-red-500/15 animate-ping"
            style={{
              left: touchPosition.x,
              top: touchPosition.y,
              transform: 'translate(-50%, -50%)',
              animationDuration: '0.7s',
            }}
          />
        )}
        <div
          className="absolute h-3 w-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.7)]"
          style={{
            left: touchPosition.x,
            top: touchPosition.y,
            transform: 'translate(-50%, -50%)',
            opacity: touchActive ? 1 : 0,
          }}
        />
      </div>
    );
  }

  let circleScale = 1;
  let dotScale = 1;
  let circleInnerClass = 'border border-zinc-900/80 bg-transparent';

  const dotBgClass = 'bg-red-500';

  if (isClicked) {
    circleScale = 0.75;
    dotScale = 0.6;
  } else if (variant === 'hover' || variant === 'button') {
    circleScale = 1.9;
    dotScale = 0.4;
    circleInnerClass = 'border border-red-500 bg-red-500/10 backdrop-blur-[1px]';
  } else if (variant === 'view') {
    circleScale = 2.4;
    dotScale = 0;
    circleInnerClass = 'bg-[#101012] border-2 border-red-500 shadow-2xl shadow-red-500/30';
  } else if (variant === 'text') {
    circleScale = 0.5;
    dotScale = 1.2;
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={circleRef}
        style={{
          width: `${settings.outerSize}px`,
          height: `${settings.outerSize}px`,
          marginLeft: `-${settings.outerSize / 2}px`,
          marginTop: `-${settings.outerSize / 2}px`,
          transform: 'translate3d(-100px, -100px, 0)',
        }}
        className="fixed top-0 left-0 pointer-events-none will-change-transform flex items-center justify-center"
      >
        <div
          style={{
            transform: `scale(${circleScale})`,
            transition:
              'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s, border-color 0.2s',
          }}
          className={`w-full h-full rounded-full flex items-center justify-center will-change-transform ${circleInnerClass}`}
        >
          {variant === 'view' && cursorText && (
            <span className="text-[7.5px] font-black tracking-wider uppercase text-amber-400 select-none pointer-events-none flex items-center gap-0.5">
              <span>{cursorText}</span>
              <span className="text-red-500 text-[8px] font-bold">↗</span>
            </span>
          )}
        </div>
      </div>

      <div
        ref={dotRef}
        style={{
          width: `${settings.dotSize}px`,
          height: `${settings.dotSize}px`,
          marginLeft: `-${settings.dotSize / 2}px`,
          marginTop: `-${settings.dotSize / 2}px`,
          transform: 'translate3d(-100px, -100px, 0)',
          opacity: dotScale === 0 ? 0 : 1,
        }}
        className={`fixed top-0 left-0 rounded-full will-change-transform ${dotBgClass}`}
      >
        <div
          style={{
            transform: `scale(${dotScale})`,
            transition: 'transform 0.15s ease-out',
          }}
          className="w-full h-full rounded-full"
        />
      </div>
    </div>
  );
};
