import app from './app';

const PORT = process.env.PORT || 4000;

// Solo escuchamos si NO estamos testeando
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}
