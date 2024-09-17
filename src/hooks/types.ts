import { PLAYBACK_OPTION } from '../components/features/title/constants';

export enum SETTING_STATE {
  isGenerating = 'isGenerating',
  playbackOption = 'playbackOption',
  numOfPlays = 'numOfPlays',
}

export interface SettingsState {
  isGenerating: boolean | string;
  playbackOption: PLAYBACK_OPTION;
  numOfPlays: number;
}

export type SetSettingsStateProps = {
  [K in keyof SettingsState]: SettingsState[K];
};
