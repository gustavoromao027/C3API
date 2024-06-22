import { Router } from 'express';
import { addComment, fetchCommentsByPost, fetchCommentsByUser } from '../controllers/CommentController';

const router = Router();

router.post('/comments', addComment);
router.get('/posts/:postId/comments', fetchCommentsByPost);
router.get('/users/:userId/comments', fetchCommentsByUser);

export default router;
