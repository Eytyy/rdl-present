import { CgMaximize } from 'react-icons/cg';
import { useRef, useEffect, useReducer } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function reducer(state, { type, payload }) {
  switch (type) {
    case 'PLAY':
      return {
        ...state,
        playing: true,
        ended: false,
        interacted: true,
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
};

export default function VideoModule({
  url,
  loop,
  autoPlay = false,
  allowFullscreen = false,
}) {
  const video = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { ref, inView } = useInView({ threshold: 0 });

  const { interacted, playing, ended, loaded } = state;

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

  function onLoaded() {
    dispatch({ type: 'LOADED' });
  }

  return (
    <div ref={ref} style={{ height: '100%', overflow: 'hidden' }}>
      {!loaded && <Loader />}
      <video
        onLoadedData={onLoaded}
        onPlaying={() => {
          dispatch({ type: 'AUTO_PLAYED' });
        }}
        onEnded={onEnded}
        ref={video}
        src={url}
        controls
        style={{
          width: 'auto',
          height: '100%',
          display: 'block',
          margin: '0 auto',
        }}
        autoPlay
        playsInline
        muted
      />
      <Controls
        allowFullscreen={allowFullscreen}
        playing={playing}
        loaded={loaded}
        ended={ended}
        play={play}
        stop={stop}
        setFullscreen={setFullscreen}
      />
    </div>
  );
}

function Controls({
  loaded,
  playing,
  play,
  stop,
  allowFullscreen,
  setFullscreen,
}) {
  return (
    <>
      {allowFullscreen && (
        <div
          sx={{ variant: 'video.controls.top' }}
          animate={{ y: '-100%', transition: { duration: 1 } }}
        >
          {playing && (
            <Btn onClick={setFullscreen}>
              <CgMaximize />
            </Btn>
          )}
        </div>
      )}
      <div sx={{ variant: 'video.controls.bottom' }}>
        {loaded ? (
          <motion.div
            style={{ display: 'flex', gap: 4, pt: 2 }}
            animate={{ y: '100%', transition: { duration: 1 } }}
          >
            {!playing && (
              <Btn onClick={play}>
                <span style={{ fontSize: 1 }}>PLAY</span>
              </Btn>
            )}
            {playing && (
              <Btn onClick={stop}>
                <span style={{ fontSize: 1 }}>STOP</span>
              </Btn>
            )}
          </motion.div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </>
  );
}

function Btn({ onClick, children }) {
  return (
    <motion.div
      sx={{ variant: 'video.controls.btn' }}
      whileTap={{
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

function Loader() {
  return (
    <div
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 20,
      }}
    >
      <motion.div
        sx={{
          width: '20px',
          height: '20px',
          background: 'blue',
          borderRadius: '100%',
          position: 'absolute',
          left: '35%',
        }}
        initial={{ x: -20, y: -20 }}
        animate={{
          x: [-20, 20, 20, -20, -20],
          y: [-20, -20, 20, 20, -20],
          scale: [1, 1.25, 1.5, 1.25, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
      />
    </div>
  );
}
