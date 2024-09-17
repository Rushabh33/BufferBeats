import Title from './components/features/title/Title';
import { Tracker } from './components/features/tracker/Tracker';
import { SETTING_STATE } from './hooks/types';
import useSettings from './hooks/useSettings';
import browser from 'webextension-polyfill';

function App() {
  const { settings, setSettingsState } = useSettings();

  const handleClick = () => {
    setSettingsState({ numOfPlays: settings.numOfPlays++ });
  };

  browser.storage.onChanged.addListener((changes) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      if (key === SETTING_STATE.isGenerating) {
        console.log('oldValue: newvalue ', oldValue);
        console.log('newValue: ', newValue);
        // setSettingsState({ numOfPlays: settings.numOfPlays++ });
      }
    }
  });

  return (
    <div className='h-[400px] w-[300px] bg-buttercream text-beetroot'>
      <ul>
        {Object.entries(settings).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>set state 0000000000</button>
      <Title playbackOption={settings.playbackOption} />
      <Tracker
        numOfPlays={settings.numOfPlays}
        isGenerating={settings.isGenerating}
      />
    </div>
  );
}

export default App;
