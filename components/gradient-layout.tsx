import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { audioPlayerHeight } from './audio-player';

const GradientLayout = ({ color, children, image, subtitle, title, description, roundImage }) => {
  return (
    <Box
      height={`calc(100vh - ${audioPlayerHeight})`}
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0, 0, 0, 0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? '100%' : '2px'}
          />
        </Box>
        <Box padding="20px" lineHeight="40px" color="white">
          <Text fontSize="xs" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl">{title}</Text>
          <Text fontSize="xs">{description}</Text>
        </Box>
      </Flex>

      <Box paddingY="50px">{children}</Box>
    </Box>
  );
};

export default GradientLayout;
