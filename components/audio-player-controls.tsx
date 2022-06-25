import {
  Box,
  ButtonGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  IconButton,
  Center,
  Flex,
  Text,
} from '@chakra-ui/react';
import ReactHowler from 'react-howler';
import { useEffect, useRef, useState } from 'react';
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from 'react-icons/md';
import { useStoreAction } from 'easy-peasy';

const AudioPlayerControls = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [playhead, setPlayhead] = useState(0.0);
  const [seeking, setSeeking] = useState(false);
  const [repeating, setRepeating] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);

  const setPlayState = (val) => {
    setPlaying(val);
  };

  const onShuffle = () => {
    setShuffle((state) => !state);
  };

  const onRepeat = () => {
    setRepeating((state) => !state);
  };

  return (
    <Box>
      <Box>{/* <ReactHowler playing={playing} src={activeSong?.url} /> */}</Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            color={shuffle ? 'white' : 'gray.600'}
            outline="none"
            variant="link"
            aria-label="Shuffle"
            icon={<MdShuffle />}
            onClick={onShuffle}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="Skip Previous"
            icon={<MdSkipPrevious />}
          />

          {playing ? (
            <IconButton
              outline="none"
              variant="link"
              color="white"
              fontSize="40px"
              aria-label="Pause"
              icon={<MdOutlinePauseCircleFilled />}
              onClick={() => setPlayState(false)}
            />
          ) : (
            <IconButton
              outline="none"
              variant="link"
              aria-label="Play"
              icon={<MdOutlinePlayCircleFilled />}
              fontSize="40px"
              color="white"
              onClick={() => setPlayState(true)}
            />
          )}
          <IconButton outline="none" variant="link" aria-label="Skip Next" icon={<MdSkipNext />} />
          <IconButton
            color={repeating ? 'white' : 'gray.600'}
            outline="none"
            variant="link"
            aria-label="Repeat"
            icon={<MdOutlineRepeat />}
            onClick={onRepeat}
          />
        </ButtonGroup>
      </Center>

      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="xs">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider aria-label={['min', 'max']} step={0.1} min={0} max={321} id="playerRange">
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="xs">3:10</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AudioPlayerControls;
