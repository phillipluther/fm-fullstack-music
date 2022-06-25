import { validateToken } from '../../lib/auth';
import prisma from '../../lib/prisma';
import GradientLayout from '../../components/gradient-layout';
import SongsTable from '../../components/songs-table';

const getBgColor = (id) => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'teal'];
  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  return (
    <GradientLayout
      color={getBgColor(playlist.id)}
      title={playlist.name}
      subtitle="Playlist"
      description={`${playlist.songs.length} Songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
      roundImage={false}
    >
      <SongsTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { playlist },
  };
};

export default Playlist;
