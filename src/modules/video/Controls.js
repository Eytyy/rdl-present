/** @jsxImportSource theme-ui */
import { CgMaximize } from 'react-icons/cg';
import {
  FaPlay,
  FaStop,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Controls({
  loaded,
  playing,
  play,
  stop,
  allowFullscreen,
  setFullscreen,
  toggleMute,
  muted,
}) {
  const [visible, toggleVisibility] = useState(false);

  return (
    <div
      onClick={() => {
        if (!playing) {
          play();
        } else {
          toggleVisibility((v) => !v);
        }
      }}
      sx={{ variant: 'video.controls', opacity: visible ? '1' : '0' }}
    >
      {allowFullscreen && playing && (
        <Btn onClick={setFullscreen}>
          <CgMaximize />
        </Btn>
      )}
      {loaded ? (
        <>
          <Btn onClick={toggleMute}>
            {muted ? <FaVolumeUp /> : <FaVolumeMute />}
          </Btn>
          {!playing && (
            <Btn onClick={play}>
              <FaPlay />
            </Btn>
          )}
          {playing && (
            <Btn onClick={stop}>
              <FaStop />
            </Btn>
          )}
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
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
