import { Box } from '@chakra-ui/react';

export const audioPlayerHeight = '90px';

const AudioPlayer = () => {
  return (
    <Box
      background="blue"
      position="absolute"
      bottom="0px"
      left="0px"
      width="100vw"
      height={audioPlayerHeight}
    >
      Audio Player
    </Box>
  );
};

export default AudioPlayer;
