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
      <Box paddingY="20px">
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
      </Box>
    </Box>
  );
};

export default Sidebar;
