# Egochallenge

Stack: Este proyecto se ha realizado con el framework Angular 20.0.1, se ha usado Ngrx para manejar un store y estados, se ha utilizado axios para realizar peticiones a la api.
Infrastructura de la app: Se ha organizado la app usando una estructura DDD (domain driven design) lo que facilita la escabilidad del proyecto.
Librerias: Para el slideshow se ha utilizado swiper en una version Swiper Element que es compatible con la versión de Angular utilizada en el proyecto.

Descripción del proyecto:
A la hora de realizar la aplicación se han seguido todos los lineamientos planteados, solo por una cuestión de probar en diferentes resoluciones se han hecho correcciones minimas a la apariencia de ciertos componentes, textos, imagenes etc.

## Correr la aplicación

Para poder levantar la aplicación es necesario clonarse el repositorio y luego realizar desde el raiz un:

```bash
npm install
```
Luego para correrlo ejecutar:

```bash
npm run start
```

Una vez que haya levantado la aplicación se podrá ver em `http://localhost:4200/`.

## Desarrollo y funcionalidades

La aplicación se ha realizado completamente responsive y siguiendo los lineamientos solicitados. 
Dejo a continuación algunos screenshots con algunas especificaciones del desarrollo:

Menu en abierto en Chrome
<img width="954" height="723" alt="imagen" src="https://github.com/user-attachments/assets/f5dbcfc3-7d41-44c4-a084-25fddbf1e69f" />

Menu abierto en Firefox
<img width="652" height="903" alt="imagen" src="https://github.com/user-attachments/assets/507a66be-7b26-4ba1-989b-67ad95fe3c3b" />
<img width="269" height="344" alt="imagen" src="https://github.com/user-attachments/assets/1839145d-d024-4e13-b2c2-352bfba2d2d1" />

Se configuro una barra de navegación para poder filtrar los autos dependiendo el tipo:
<img width="1239" height="774" alt="imagen" src="https://github.com/user-attachments/assets/74eaa115-eb6f-4b25-af86-5c3b91a61457" />

Se configuro el filtro de order by para poder ordenar de manera ascendente,descendente, por más nuevos y por más viejos:
<img width="967" height="553" alt="imagen" src="https://github.com/user-attachments/assets/d70d4ea7-a566-46e9-b6a8-d1f76cd8eb73" />

Se agrego funcionalidad para poder visitar la ficha de cada modelo del auto utilizando la información de la api brindada:
<img width="1225" height="863" alt="imagen" src="https://github.com/user-attachments/assets/3e5dace7-bb5d-4725-bb39-f4a7630c3987" />

Se agrego slideshow que al cambiar la resolución se ajusta a la cantidad de slides a mostrar:
<img width="763" height="1007" alt="imagen" src="https://github.com/user-attachments/assets/7be02d37-5b60-4c5b-a746-eb1ac4c49df8" />



