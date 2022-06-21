import NextImage from 'next/image';
import NextLink from 'next/link';
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/layout';
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from 'react-icons/md';
import { audioPlayerHeight } from './audio-player';

export const sidebarWidth = '240px';
export const sidebarMenuItems = [
  {
    label: 'Home',
    href: '/',
    icon: MdHome,
  },
  {
    label: 'Search',
    href: '/search',
    icon: MdSearch,
  },
  {
    label: 'Your Library',
    href: '/library',
    icon: MdLibraryMusic,
  },
];

export const sidebarMusicMenu = [
  {
    label: 'Create Playlist',
    href: '/',
    icon: MdPlaylistAdd,
  },
  {
    label: 'Liked Songs',
    href: '/',
    icon: MdFavorite,
  },
];

const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <Box
      position="absolute"
      top="0px"
      left="0px"
      width={sidebarWidth}
      height={`calc(100vh - ${audioPlayerHeight})`}
      background="black"
      color="gray"
      paddingX="5px"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/trax-logo.svg" height={60} width={120} />
        </Box>

        {/* Primary Navigation */}
        <Box marginBottom="20px">
          <List spacing={2}>
            {sidebarMenuItems.map(({ label, href, icon }) => (
              <ListItem paddingX="20px" fontSize="16px" key={label}>
                <LinkBox>
                  <NextLink href={href} passHref>
                    <LinkOverlay>
                      <ListIcon as={icon} color="white" marginRight="20px" />
                      {label}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Music Menu */}
        <Box marginBottom="20px">
          <List spacing={2}>
            {sidebarMusicMenu.map(({ label, href, icon }) => (
              <ListItem paddingX="20px" fontSize="16px" key={label}>
                <LinkBox>
                  <NextLink href={href} passHref>
                    <LinkOverlay>
                      <ListIcon as={icon} color="white" marginRight="20px" />
                      {label}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider marginY="20px" color="gray.800" />

        {/* Playlists */}
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlist.map((list) => (
              <ListItem paddingX="20px" fontSize="16px" key={list}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{list}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
