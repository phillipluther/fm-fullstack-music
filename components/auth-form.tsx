import { FC, useState } from 'react';
import { Box, Flex, Input, Button } from '@chakra-ui/react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import { auth } from '../lib/mutations';

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const user = await auth(mode, { email, password });

    setIsLoading(false);

    router.push('/');
  };
  return (
    <Box height="100vh" width="100vw" background="black">
      <Flex justify="center" align="center" height="100px" borderBottom="1px solid white">
        <NextImage src="/trax-logo.svg" width={120} height={60} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" background="gray.900" color="white" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" bg="green.500" isLoading={isLoading}>
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
