// import Head from 'next/head';
// import Image from 'next/image';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import GradientLayout from '../components/gradient-layout';
import { useMe } from '../lib/hooks';
import prisma from '../lib/prisma';

const Home = ({ artists }) => {
  const { user, isLoading } = useMe();

  return (
    <GradientLayout
      color="gray"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistCount} Public Playlists`}
      image="https://tinted-gym-f99.notion.site/image/https%3A%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png%3Fdl%3D0?table=block&id=33f9771b-0e6f-4a72-832c-69ed2d41f290&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2"
      roundImage
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top Artists This Month
          </Text>
          <Text fontSize="md">Only Visible to You</Text>
        </Box>

        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image src="https://placekitten.com/300/300" borderRadius="100%" />
                <Box marginTop="20px">
                  <Text fontSize="lg">{artist.name}</Text>
                  <Text fontSize="xs">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};

export default Home;
