import useSwr from 'swr';
import fetcher from './fetcher';

export const useMe = () => {
  const { error, data } = useSwr('/me', fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { error, data } = useSwr('/playlist', fetcher);

  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
