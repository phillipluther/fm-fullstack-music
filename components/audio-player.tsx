import { Box, Flex, Text } from '@chakra-ui/react';
import AudioPlayerControls from './audio-player-controls';

export const audioPlayerHeight = '100px';

const AudioPlayer = () => {
  return (
    <Box
      position="absolute"
      bottom="0px"
      left="0px"
      width="100vw"
      height={audioPlayerHeight}
      bg="gray.900"
      padding="10px"
    >
      <Flex align="center">
        <Box padding="20px" color="white" width="30%">
          <Text fontSize="lg">Song Name</Text>
          <Text fontSize="sm">Artist Name</Text>
        </Box>

        <Box width="40%">
          <AudioPlayerControls />
        </Box>
      </Flex>
    </Box>
  );
};

export default AudioPlayer;
