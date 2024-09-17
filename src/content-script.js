import browser from 'webextension-polyfill';

let hasPendingMsgSent = false;

const observer = new MutationObserver(() => {
  let stopButtonPresent =
    document.querySelector("button[data-testid='stop-button']") !== null;

  if (stopButtonPresent && !hasPendingMsgSent) {
    hasPendingMsgSent = true;
    browser.storage.local.set({ isGenerating: true });
  }
  if (!stopButtonPresent && hasPendingMsgSent) {
    hasPendingMsgSent = false;
    browser.storage.local.set({ isGenerating: false });
  }
});

document.addEventListener('click', function () {
  browser.runtime.sendMessage({ action: 'chatGptSiteClicked' });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
