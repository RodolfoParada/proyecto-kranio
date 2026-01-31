import app from './app';
import cors from 'cors';

const PORT = process.env.PORT || 4000;

// Solo escuchamos si NO estamos testeando
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

const corsOptions = {
  // Aquí pondremos la URL que Vercel le asigne en un momento
  origin: ['https://proyecto-kranio-frontend.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));