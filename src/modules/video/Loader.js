/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion';

export default function Loader() {
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
