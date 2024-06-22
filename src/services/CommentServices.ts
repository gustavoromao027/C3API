import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createComment = async (data: { content: string; postId: number; authorId: number }) => {
  return await prisma.comment.create({
    data,
  });
};

export const getCommentsByPost = async (postId: number) => {
  return await prisma.comment.findMany({
    where: { postId },
  });
};

export const getCommentsByUser = async (authorId: number) => {
  return await prisma.comment.findMany({
    where: { authorId },
  });
};