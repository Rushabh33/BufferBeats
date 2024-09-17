import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import browser from 'webextension-polyfill';
import { PLAYBACK_OPTION } from '../components/features/title/constants';
import { SetSettingsStateProps, SettingsState } from './types';

export interface SettingsContextProps {
  settings: SettingsState;
  setSettingsState: (
    updatedKeyValuePairs: Partial<SetSettingsStateProps>
  ) => void;
}

const SettingsContext = createContext<SettingsContextProps>(
  {} as SettingsContextProps
);

export function SettingsContextProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SettingsState>({
    isGenerating: false,
    playbackOption: PLAYBACK_OPTION.WHILE,
    numOfPlays: 9,
  });

  useEffect(() => {
    browser.storage.local.get().then((storage) => {
      setSettings({
        ...settings,
        ...storage,
      });
    });
  }, []);

  function setSettingsState(
    updatedKeyValuePairs: Partial<SetSettingsStateProps>
  ) {
    browser.storage.local.set(updatedKeyValuePairs).then(() => {
      setSettings({
        ...settings,
        ...updatedKeyValuePairs,
      });
    });
  }

  return (
    <SettingsContext.Provider value={{ settings, setSettingsState }}>
      {children}
    </SettingsContext.Provider>
  );
}

export default function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}
