export enum Paises {
  COL = 'Colombia',
  CL = 'Chile'
}

export enum Tipos {
  Basic = 'Básico',
  Medium = 'Intermedio',
  Premium = 'Avanzado'
}

export enum Estados {
  VC = 'Valle del Cauca',
  SC = 'Santiago de Chile',
  ANT = 'Antioquia'
}

export interface itemsInterface {
  id: number;
  fecha: string;
  nombreCompleto: string;
  monto: number;
  pais: Paises;
  tipo: Tipos;
  estado: Estados;
}
