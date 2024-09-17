import browser from 'webextension-polyfill';

const YELLOW_ICON = 'yellowIcon.png';
const RED_ICON = 'redIcon.png';
const GREEN_ICON = 'greenIcon.png';

browser.storage.onChanged.addListener((changes) => {
  for (let [key, { _oldValue, newValue }] of Object.entries(changes)) {
    if (key === 'isGenerating' && newValue) {
      updateExtensionIcon(YELLOW_ICON);
    }
    if (key === 'isGenerating' && !newValue) {
      updateExtensionIcon(GREEN_ICON);
    }
  }
});

browser.runtime.onMessage.addListener(
  async (message, _sender, _sendResponse) => {
    if (message.action === 'chatGptSiteClicked') {
      try {
        const result = await browser.storage.local.get('isGenerating');
        if (result.isGenerating === false) {
          updateExtensionIcon(RED_ICON);
        }
      } catch (error) {
        console.error('Error handling document click:', error);
      }
    }
  }
);

function updateExtensionIcon(fileName) {
  browser.action.setIcon({ path: `./${fileName}` });
}
