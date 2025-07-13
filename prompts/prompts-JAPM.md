# Promtps Principales

Eres un experto en ingenieria de prompts, en Typescript, NodeJs, Express y Prisma
# Contexto inicial
El proyecto abierto es un sistema full-stack para la gestión de talento y procesos de selección, llamado "LTI - Talent Tracking System" y me piden implementar nuevas funcionales en el frontend, antes de esto quiero confirmar si los endpoints que me describen existen en el backend.

# Instrucciones Generales
El objetivo es crear un prompt para Copilot (ChatGPT 4.1) que siga las siguientes instrucciones.

# Instrucciones
1. Confirmar los siguientes endpoints en el backend
1.1 GET /positions/:id/interviewFlow
1.2 GET /positions/:id/candidates
1.3 PUT /candidates/:id/stage
2. Me de un ejemplo de como mandar una petición al endpoint 1.3

# Mejores Practicas
1. Agrega en el prompt el rol para que el chatbot para que actue como experto

# Pautas para generar el contenido
1. El contenido de salida generarlo en formato Markdown para archivos .md

Antes de generar el prompt revisa mis instrucciones ¿hay algo que me este faltando considerar?
Hazme preguntas si necesitas más información.

----------------------------------------------------------------------------------------------------------------------------------------

## Rol
Actúa como un experto en TypeScript, Node.js, Express y Prisma.

## Objetivo
Confirma la existencia de los siguientes endpoints en el backend del proyecto "LTI - Talent Tracking System" y proporciona detalles relevantes.

## Instrucciones

1. **Confirma si existen los siguientes endpoints en el backend:**
   - `GET /positions/:id/interviewFlow`
   - `GET /positions/:id/candidates`
   - `PUT /candidates/:id/stage`

2. **Para cada endpoint:**
   - Indica el archivo específico donde se encuentra implementado.
   - Valida la estructura de los parámetros, el body (si aplica) y la respuesta.
   - Si el endpoint no existe, indícalo explícitamente.

3. **Ejemplo de petición:**
   - Proporciona un ejemplo de cómo mandar una petición al endpoint `PUT /candidates/:id/stage` usando cURL, incluyendo los parámetros y el body esperado.

4. **Recomendaciones:**
   - Sugiere buenas prácticas para documentar los endpoints en el proyecto, incluyendo cómo mantener la trazabilidad y claridad en la documentación.

## Notas
- No consideres autenticación.
- No sugieras cómo crear los endpoints si no existen.
- Limítate a buscar los endpoints en los archivos específicos del backend.

Antes de realizar esta tarea revisa mis instrucciones ¿hay algo que me este faltando considerar?
Realiza preguntas si necesitas más información.

----------------------------------------------------------------------------------------------------------------------------------------


Eres un documentador técnico con experiencia en Typescript, NodeJs y Express
# Contexto inicial
El equipo de frontend requiere la documentación completa para implementar nuevas funcionalidades de un poryecto encargado de gestión de candidatos.

# Instrucciones Generales
Documentar la funcionalidad del metodo GET http://localhost:3010/position/:id/interviewflow con la siguiente información y siguiendo los requerimientos

# Información del metodo
1. URL: GET http://localhost:3010/position/:id/interviewflow , donde :id es el identificador del proceso de contratación de un candidato
2. El metodo devuelve la siguiente información al realizar la petición: 
```json
{"interviewFlow":{"positionName":"Senior Full-Stack Engineer","interviewFlow":{"id":1,"description":"Standard development interview process","interviewSteps":[{"id":1,"interviewFlowId":1,"interviewTypeId":1,"name":"Initial Screening","orderIndex":1},{"id":2,"interviewFlowId":1,"interviewTypeId":2,"name":"Technical Interview","orderIndex":2},{"id":3,"interviewFlowId":1,"interviewTypeId":3,"name":"Manager Interview","orderIndex":2}]}}}
```

# Requerimientos 
1. Agrega la nueva información en la posición que le corresponde 
2. Conserva la estructura de la documentación actual
3. Para documentar los errores del metodo revisa el código

Antes de generar código revisa mis requerimientos ¿hay algo que me este faltando considerar?
Hazme preguntas si necesitas más información.


----------------------------------------------------------------------------------------------------------------------------------------


Eres un experto en ingenieria de prompts, con experiencia en desarrollo Frontend y React
# Contexto inicial
Tenemos un sistema full-stack para la gestión de talento y procesos de selección, llamado "LTI - Talent Tracking System"
Y nos piden la siguiente tarea:

## Tarea
"Tu misión en este ejercicio es crear la interfaz "position", una página en la que poder visualizar y gestionar los diferentes candidatos de una posición específica.

Se ha decidido que la interfaz sea tipo kanban, mostrando los candidatos como tarjetas en diferentes columnas que representan las fases del proceso de contratación, y pudiendo actualizar la fase en la que se encuentra un candidato solo arrastrando su tarjeta.Aquí tienes un ejemplo de interfaz posible."

He adjuntado una imagen de como se espera que se vea la implemetación.

# Instrucciones Generales
El objetivo es crear un prompt para Copilot (ChatGPT 4.1) que implemente los siguientes requerimientos

# Requerimientos
- Se debe mostrar el título de la posición en la parte superior, para dar contexto
- Añadir una flecha a la izquierda del título que permita volver al listado de posiciones
- Deben mostrarse tantas columnas como fases haya en el proceso
- La tarjeta de cada candidato/a debe situarse en la fase correspondiente, y debe mostrar su nombre completo y su puntuación media
- Si es posible, debe mostrarse adecuadamente en móvil (las fases en vertical ocupando todo el ancho)


# Información adicional
- Asume que la página de posiciones la encuentras 
- Asume que existe la estructura global de la página, la cual incluye los elementos comunes como menú superior y footer. Lo que estás creando es el contenido interno de la página.
- Considera los siguientes endpoints para realizar la implementación: /position/{id}/interviewflow, /position/{id}/candidates, /candidates/{id}

# Mejores Practicas
1. En el prompt incluye el rol con el cual el Chatbot debe actuar para ejecutar la tarea

# Pautas para generar el contenido
1. El contenido de salida generarlo en formato Markdown para archivos .md

Antes de generar el prompt revisa mis instrucciones ¿hay algo que me este faltando considerar?
Hazme preguntas si necesitas más información.


----------------------------------------------------------------------------------------------------------------------------------------


## Rol  
Actúa como un experto en desarrollo Frontend y React.

## Contexto  
Estás trabajando en el sistema "LTI - Talent Tracking System", un sistema full-stack para la gestión de talento y procesos de selección. Debes implementar la interfaz interna de la página "position", que permite visualizar y gestionar los candidatos de una posición específica.

## Referencia  
Consulta la documentación del API adjunta (`api-spec.yaml`) para conocer la estructura de los endpoints y los datos que debes consumir.

## Requerimientos

- Muestra el título de la posición en la parte superior, con una flecha a la izquierda que permita volver al listado de posiciones.
- Muestra tantas columnas como fases haya en el proceso de contratación (según el flujo de entrevista).
- Cada candidato debe aparecer como una tarjeta en la columna correspondiente a su fase, mostrando su nombre completo y su puntuación media.
- Permite actualizar la fase de un candidato arrastrando su tarjeta a otra columna (drag & drop).
- La vista debe ser responsive: en móvil, las fases deben mostrarse en vertical ocupando todo el ancho.
- Reutiliza los estilos ya definidos en el proyecto.
- Incluye manejo de loading y errores al consumir los endpoints.
- Utiliza solo React, JavaScript y CSS (sin librerías externas para drag & drop).
- Utiliza los siguientes endpoints para obtener y actualizar datos:
  - `/position/{id}/interviewflow`
  - `/position/{id}/candidates`
  - `/candidates/{id}` (PUT para actualizar fase)

## Sugerencias y Buenas Prácticas

- Indica cómo actualizar el estado del candidato al mover la tarjeta (llamada al endpoint PUT).
- Sugiere cómo estructurar el componente para facilitar la gestión de estado y la actualización de la UI.
- Explica cómo hacer la vista responsive reutilizando los estilos existentes.
- Incluye ejemplos de manejo de loading y errores.
- Mantén el contenido y los textos en español.
- Si necesitas detalles sobre los endpoints o los datos, consulta la documentación del API adjunta.
- Utiliza la imagen [] como guia para implementación visual

## Notas

- La estructura global de la página (menú superior, footer) ya existe; solo implementa el contenido interno.
- No incluyas pruebas unitarias.
- No utilices librerías externas para drag & drop.

# Pautas para generar el contenido:
- Genera una lista de pasos para realizar la implementación
- Cada paso se va ejecutar de manera individual por lo que me tienes que preguntar si podemos pasar al siguiente
- En cada paso de la lista menciona el archivo que se va a crear o modificar e incluye el código que se va agregar

Antes de realizar la tarea revisa mis requisitos ¿hay algo que me este faltando considerar?
Hazme preguntas si necesitas más información.

----------------------------------------------------------------------------------------------------------------------------------------


Tenemos los siguientes problemas en la implementación:
1. En la ruta "/positions" no funciona el botón "Ver proceso"
1.1 Lo que se espera: Al hacer clic en el botón "Ver proceso" de cualquiera de las posiciones, nos lleve a la vista de detalle de cada posición, denominada "position".
2. La vista "/position/:id" no carga ninguna información, solo se muestra "Sin Titulo" y un boton de back
2.1 En la consola del navegador si veo que se consultan los siguientes endpoints: http://localhost:3010/position/1/interviewflow, http://localhost:3010/position/1/candidates
2.2 Se espera que se vea algo similar a la imagen

Tu tarea es explicarme el por qué de cada problema.
Genera una lista numerada.

----------------------------------------------------------------------------------------------------------------------------------------

Eres un experto en ingenieria de prompts, en desarrollo Frontend, React y Bootstrapt
# Contexto inicial
Tengo una vista que muestra las fases de contratación de candidatos, tiene la funcionalidad de drag&drop que permite mover a un candito de una fase a otra.

# Instrucciones Generales
El objetivo es crear un prompt para Copilot (<chatbot> <versión>) que implemente los siguientes requerimientos

# Requerimientos
1. Para la vista en responsive cada fase de la entrevista ocupe una fila en la pantalla, de tal forma que no se vea encimada.
2. En modo desktop cada fase ocupe una columna
3. Estas modifaciones no deben modificar la funcionalidad actual de drag&drop, solo son cambios en la visualización.

# Mejores Practicas
1. Incluye el rol con el que el chatbot debe actuar para resolver el problema.

# Pautas para generar el contenido
1. El contenido de salida generarlo en formato Markdown para archivos .md

Antes de generar el prompt revisa mis instrucciones ¿hay algo que me este faltando considerar?
Hazme preguntas si necesitas más información.

----------------------------------------------------------------------------------------------------------------------------------------

## Rol  
Actúa como un experto en desarrollo Frontend, React y Bootstrap.

## Objetivo  
Realiza los cambios necesarios en el archivo CSS para que la vista de fases de entrevista sea completamente responsive, cumpliendo los siguientes requerimientos:

## Requerimientos

1. En modo responsive (pantallas pequeñas), cada fase de la entrevista debe ocupar una fila completa en la pantalla, evitando que se vean encimadas.
1.1 Solo puede haber una fase por fila
2. En modo desktop (pantallas grandes), cada fase debe ocupar una columna.
3. No se debe modificar la funcionalidad actual de drag&drop, solo realizar cambios en la visualización mediante CSS.
4. Utiliza las clases y estructura existentes en el proyecto.

## Notas

- El unico cambio se deberá realizar en la vista: "/position/:id"

## Pautas para generar el contenido:
- Genera una lista de pasos para realizar la implementación
- Cada paso se va ejecutar de manera individual por lo que me tienes que preguntar si podemos pasar al siguiente
- En cada paso de la lista menciona el archivo que se va a crear o modificar e incluye el código que se va agregar

Antes de realizar la tarea revisa mis requisitos ¿hay algo que me este faltando considerar?
Hazme preguntas si necesitas más información.

----------------------------------------------------------------------------------------------------------------------------------------

# Prompts complementarios

1. Dame los detalles del proyecto abierto y dime los pasos para poder iniciarlo
2. Eres un experto en desarrollo frontend. Dame los detalles del proyecto, así como las librerias usadas. El objetivo es tener información del proyecto frontend para realizar nuevas modificaciones. El contenido es para un desarrollador de software sin experiencia en frontend. Tus pautas para generar el contenido es en forma de lista.
3. Ahora tenemos un problema, cuando doy clic en el bóton "Ver Proceso" se abre la vista "position/1" pero se queda en la fase de carga "Cargando información..." y no muestra la información.
En la consola de desarrollo veo la petición hacia "http://localhost:3010/position/:id/interviewflow"
Explica por qué sucede este comportamiento y como lo arreglamos.
4. He realizado las modificaciones, ahora tengo el siguiente problema:

Se cargan las fases sin embargo me muestra la leyenda "Sin candidatos"
Te puedo confirmar lo siguiente:

Se realiza correctamente las peticiones hacia "/position/:id/interviewflow" y "/position/:id/candidates"
Tengo las siguientes respuestas:
"/position/1/interviewflow"
"/position/1/candidates"

Explicame porque tengo ese problema.

6. La implementación esta hecha y ya veo los candidatos en cada fase de la entrevista. Ahora el problema es al intentar arrastrar un candidato de una fase a otra muestra el siguiente mensaje: "Error al actualizar la fase del candidato"
La petición la mandamos de la siguiente manera:
PUT http://localhost:3010/candidates/1

y obtenemos la siguiente respuesta:

¿como lo solucionamos?

7. La implementación ya es correcta. Hagamos un ultimo cambio:
- En lugar de mostrar la leyenda "Puntación media" y su cantidad correspondiente utiliza el emoji "🟢" para indicar su puntuación.

Genera el nuevo código e indicame en donde sustituirlo.
¿tienes alguna pregunta antes de mostrarme el código modificado?


