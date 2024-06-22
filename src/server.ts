import express from 'express';
import AuthRoutes from './routes/AuthRoutes';
import UserRoutes from './routes/UserRoutes';
import { authMiddleware } from './middleware/Auth';

const app = express();
app.use(express.json());

app.use('/auth', AuthRoutes);
app.use('/users', authMiddleware, UserRoutes); // Protegendo as rotas de usuário

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});