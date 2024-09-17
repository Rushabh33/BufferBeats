import clsx from 'clsx';
import { PLAYBACK_OPTION } from './constants';

export default function Title({
  playbackOption,
}: {
  playbackOption: PLAYBACK_OPTION;
}) {
  return (
    <h1
      className={clsx({
        'line-through': playbackOption == PLAYBACK_OPTION.MUTE,
      })}
    >
      Play sounds{' '}
      <span
        className={clsx({
          'line-through': playbackOption !== PLAYBACK_OPTION.WHILE,
        })}
      >
        while
      </span>{' '}
      or{' '}
      <span
        className={clsx({
          'line-through': playbackOption !== PLAYBACK_OPTION.AFTER,
        })}
      >
        after
      </span>{' '}
      ChatGPT generates a response
    </h1>
  );
}
