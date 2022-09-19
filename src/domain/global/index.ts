import dotenv from 'dotenv';

// Carga de archivo de variables de entorno
dotenv.config();

// Interfaces para cargar las variables de entorno
interface ENV {
  NODE_ENV: string | undefined;
  PORT: number | undefined;
}

interface Config {
  NODE_ENV: string;
  PORT: number;
}

// Cargamos process.env como interface ENV
const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined
  };
};

// Verificamos cumplimiento de tipado y contenido de las variables de entorno
const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

// Llamada a funciones para proceso de validación
const config = getConfig();
const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
