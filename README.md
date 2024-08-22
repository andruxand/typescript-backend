# Aplicación Backend
Repositorio para prueba técnica de Afex backend


## Pasos para iniciar
1. Instalar las dependencias:
```
npm i
```

2. Copiar archivo /environments/.env.development a la raíz del proyecto y renombrarlo a .env
```
cp ./environments/.env.development .env
```

3. Iniciar la aplicación:
```
npm run dev
```

La aplicación corre en [http://localhost:4000](http://localhost:4000).




## Para desarrollo

Instalar los hooks de Husky para validar conventional commits, EsLint y Prettier:
```
npm run prepare
```



## Otros comando disponibles


### Generar archivos compilados
```
npm run tsc
```

Generará la carpeta build/ con los archivos compilados de la aplicación. La aplicación corre en [http://localhost:4000](http://localhost:4000).



### Ejecutar servidor desde los archivos compilados
```
npm run start
```


### Correr tests
```
npm run test
```


### Correr tests con coverage
```
npm run coverage
```


### Verificar código con EsLint
```
npm run lint
```


### Correr Prettier
```
npm run prettier
```


### Eliminar carpeta build/
```
npm run clean
```
