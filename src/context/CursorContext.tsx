
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

export type CursorVariant = 'default' | 'hover' | 'view' | 'drag' | 'text' | 'button';
export type CursorTheme = 'classic' | 'difference' | 'minimal' | 'ring-only';

export interface CursorSettings {
  enabled: boolean;
  hideNative: boolean;
  theme: CursorTheme;
  outerSize: number;
  dotSize: number;
  lerpSpeed: number;
  magnetic: boolean;
}

interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
  settings: CursorSettings;
  updateSettings: (newSettings: Partial<CursorSettings>) => void;
  isTouchDevice: boolean;
}

interface CursorProviderProps {
  children: ReactNode;
}

const defaultSettings: CursorSettings = {
  enabled: true,
  hideNative: false,
  theme: 'classic',
  outerSize: 36,
  dotSize: 6,
  lerpSpeed: 0.16,
  magnetic: true,
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState('');
  const [settings, setSettings] = useState<CursorSettings>(defaultSettings);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      const isTouch =
        window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window;

      setIsTouchDevice(isTouch);
    };

    checkTouch();

    window.addEventListener('resize', checkTouch);

    return () => {
      window.removeEventListener('resize', checkTouch);
    };
  }, []);

  const updateSettings = (newSettings: Partial<CursorSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <CursorContext.Provider
      value={{
        variant,
        setVariant,
        cursorText,
        setCursorText,
        settings,
        updateSettings,
        isTouchDevice,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }

  return context;
};
