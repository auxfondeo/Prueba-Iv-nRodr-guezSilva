# Weather App

Esta es una aplicación de pronóstico del clima simple que te permite obtener información meteorológica para diferentes ciudades con un buscador.

## Versiones utilizadas
- Node v20.12.2
- React v18.2.0

## Características

- Consulta el clima actual y pronóstico extendido para cualquier ciudad.
- Visualiza la temperatura actual, mínima y máxima, así como otras métricas importantes como humedad, velocidad del viento y presión atmosférica.
- Valida la entrada de ciudad con un mínimo de 3 caracteres.
- Utiliza imágenes proporcionadas por la API y otras personalizadas para el fondo del Card principal.
- Interfaz fácil de usar y atractiva.
- Diseño responsivo para escritorio, tablet y movil.

## Características adicionales
1. Pronóstico extendido a 3 días
2. Posibilidad de intercambiar entre sistema métrico e imperial (Celsius, m/s y Farenheit, mph) respectivamente.
3. Búsqueda de ciudades utilizando Geocode API (listado por coincidencia).

## Tecnologías utilizadas

- React.js: Para construir la interfaz de usuario y manejar la lógica del frontend.
- Tailwind CSS: Para estilizar y dar formato a los componentes de manera rápida y eficiente.
- OpenWeatherMap API: Para obtener datos meteorológicos en tiempo real y pronósticos extendidos.
- Geocode API: Para obtener datos de ciudades por nombre.

## Configuración

1. Abre una terminal en la raíz del proyecto.
2. Instala las dependencias del proyecto ejecutando `npm install`.
3. Ejecuta el comando `npm run dev`, se abrirá un puerto en local y se podrá visualizar la aplicación.

## Uso
1. Permite el acceso a la ubicación en el navegador.
2. Por defecto, traerá tu ubicación con el pronóstico.
3. Busca una ciudad, país, etc. Entre más específico encontrarás el resultado óptimo.
4. Selecciona de la lista la ciudad deseada, en caso de no encontrar dejará "Sin resultados."

## Consideraciones
Se están usando API KEYS propias, las cuales tienen un límite de uso gratuito (OpenWeatherMap) y Geocode que si es de paga.
Quedan al rededor de 350 peticiones para evitar un cobro extra.




