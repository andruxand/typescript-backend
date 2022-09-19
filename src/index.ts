import app from './server';
import config from './domain/global';

// inicio constantes
const port: number = config.PORT;

// Inicio express server
app.listen(port, () => {
  // Imprimir initialización
  console.log('****************************');
  console.log('*    Prueba Backend AFEX');
  console.log('*    Starting Server');
  console.log('*    Version: 1.0.0');
  console.log(`*    Port: ${port}`);
  console.log(`*    Port: ${config.NODE_ENV}`);
  console.log('****************************');
});

export default app;
