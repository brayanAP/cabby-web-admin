## ¿Cómo probarlo?
Instalar dependencias:
### `npm install`
Correr proyecto:
### `npm run start`

## Tecnologías utilizadas

### Para el manejo de estado se utilizó:
Redux

### Para el ruteo se utilizó:
React Router

### Para librería de componentes:
MUI

### Para promover el estilo extensivo se utilizó:
Styled Components

## Estructurado del proyecto
Para la estructura de componentes se utilizó [diseño anatómico] adaptado para separar componentes base y componentes con lógica de estado y/o lógica de comportamiento.

#### Átomos
Deben ser componentes sin lógica de estado y/o comportamiento, que permitan aplicar diseño extensivo y sean componentes básicos unitarios (label, campos de texto, tarjetas y mas).
#### Moléculas
Deben ser componentes de uso específico, con lógica de estado y/o comportamiento.
#### Organismos
Deben ser componentes complejos en comportamiento y/o lógica de estado.
#### Páginas
Deben ser los componentes que se utilizaran directo en el ruteo.

## Aclaración
La autenticación tiene información [ficticia], sin seguridad o alguna conexión a un servidor, toda la información se maneja en el estado de la aplicación, es decir que no tiene persistencia.