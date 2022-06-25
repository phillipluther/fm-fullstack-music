import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, 'secret');
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error('User not found');
        }
      } catch (err) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401).json({ error: 'Unauthorized' });
  };
};

export const validateToken = (token) => {
  const user = jwt.verify(token, 'secret');
  return user;
};
