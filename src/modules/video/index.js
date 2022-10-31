/** @jsxImportSource theme-ui */
import { useRef, useEffect, useReducer } from 'react';
import { useInView } from 'react-intersection-observer';
import Controls from './Controls';
import Loader from './Loader';

export default function VideoModule({
  url,
  loop,
  autoPlay = false,
  allowFullscreen = false,
  format = 'landscape',
}) {
  const video = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { ref, inView } = useInView({ threshold: 0 });

  const { interacted, playing, ended, loaded, muted } = state;

  /**
   * Decide whether the video should auto play when in view;
   * for it to auto-play it has to be:
   * - in view && autoplay is true
   * - && has loaded && is not playing
   * - && user didn't interact with it "clicked on one of the controls"
   * - && if it's either a loop || hasn't finished playing
   */
  const shouldAutoPlay = autoPlay && inView;
  useEffect(() => {
    if (
      shouldAutoPlay &&
      loaded &&
      !interacted &&
      !playing &&
      (!ended || loop)
    ) {
      dispatch({ type: 'AUTO_PLAYED' });
      video.current.play();
    } else if (!shouldAutoPlay && playing) {
      dispatch({ type: 'AUTO_PAUSED' });
      video.current.pause();
    }
  }, [shouldAutoPlay, loaded, playing, interacted, ended, loop]);

  function play() {
    dispatch({ type: 'PLAY' });
    video.current.play();
  }

  function stop() {
    dispatch({ type: 'PAUSE' });
    video.current.pause();
  }

  function setFullscreen() {
    video.current.requestFullscreen();
  }

  function onEnded() {
    dispatch({ type: 'ENDED' });
  }

  function toggleMute() {
    dispatch({ type: 'TOGGLE_MUTE' });
  }

  function onLoaded() {
    dispatch({ type: 'LOADED' });
  }
  return (
    <div ref={ref} sx={{ variant: `video.${format}` }}>
      {!loaded && <Loader />}
      <video
        onLoadedData={onLoaded}
        onPlaying={() => {
          dispatch({ type: 'AUTO_PLAYED' });
        }}
        onEnded={onEnded}
        ref={video}
        src={url}
        playsInline
        muted={muted}
      />
      <Controls
        allowFullscreen={allowFullscreen}
        toggleMute={toggleMute}
        playing={playing}
        loaded={loaded}
        ended={ended}
        muted={muted}
        play={play}
        stop={stop}
        setFullscreen={setFullscreen}
      />
    </div>
  );
}

function reducer(state, { type }) {
  switch (type) {
    case 'PLAY':
      return {
        ...state,
        playing: true,
        ended: false,
        interacted: true,
      };
    case 'TOGGLE_MUTE':
      return {
        ...state,
        muted: !state.muted,
      };
    case 'PAUSE':
      return { ...state, playing: false, interacted: true };
    case 'AUTO_PLAYED':
      return { ...state, playing: true };
    case 'AUTO_PAUSED':
      return { ...state, playing: false };
    case 'ENDED':
      return { ...state, ended: true, playing: false };
    case 'LOADED':
      return { ...state, loaded: true };
    default:
      return state;
  }
}

const initialState = {
  playing: false,
  interacted: false,
  ended: false,
  loaded: false,
  muted: true,
};
