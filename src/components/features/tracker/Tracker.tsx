// import { SettingsState } from '../../../types';

import { SettingsState } from '../../../hooks/types';

export function Tracker({ numOfPlays, isGenerating }: Partial<SettingsState>) {
  const caption = isGenerating
    ? 'Enjoy your beets!'
    : 'Total times you’ve enjoyed the buffer with some beets';

  return (
    <div>
      <h2>{numOfPlays}</h2>
      <p>{caption}</p>
    </div>
  );
}
