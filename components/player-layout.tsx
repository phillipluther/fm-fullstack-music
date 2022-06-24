import { Box } from '@chakra-ui/react';
import Sidebar, { sidebarWidth } from './sidebar';
import AudioPlayer, { audioPlayerHeight } from './audio-player';

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Sidebar />
      <Box
        marginLeft={sidebarWidth}
        marginBottom={audioPlayerHeight}
        width={`calc(100vw - ${sidebarWidth})`}
        height={`calc(100vh - ${audioPlayerHeight})`}
      >
        {children}
      </Box>
      <AudioPlayer />
    </Box>
  );
};

export default PlayerLayout;
