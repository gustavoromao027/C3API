import { Request, Response } from 'express';
import { createComment, getCommentsByPost, getCommentsByUser } from '../services/CommentServices';

export const addComment = async (req: Request, res: Response) => {
  const { content, postId, authorId } = req.body;
  try {
    const newComment = await createComment({ content, postId, authorId });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const fetchCommentsByPost = async (req: Request, res: Response) => {
  const { postId } = req.params;
  try {
    const comments = await getCommentsByPost(Number(postId));
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const fetchCommentsByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const comments = await getCommentsByUser(Number(userId));
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
