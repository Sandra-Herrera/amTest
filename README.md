# amTest
## Evalución frontend

Desarrolle la aplicación apegándome al diseño que se me proporcionó en figma, respetando estilos, funcionalidad y diseño responsivo.
* Para dar la funcional utilice React con Redux.
* Mediante JSON server con el uso de FETCH realice peticiones a la data utilizando los métodos GET, POST, PUT.
* Para asignar los estilos y diseño responsivo utilice SASS, Flexbox y Media Queries.
* Para el control de versión de código utilice Git.

### Las instrucciones para levantar el proyecto.
1.- Primero se debe clonar el repositorio, creamos una carpeta en un directorio.

2.- En dicha carpeta con un click derecho abrimos una ventana de Git Bash Here

3.- En esa ventana copiamos el siguiente comando para clonar el repositorio: git clone https://github.com/Sandra-Herrera/amTest.git

4.- Una vez clonado el repositorio, abrir Visual Studio code, después seleccionar “open folder” y con la ruta de la carpeta creada donde se copió el repositorio, se ejecuta la carpeta raíz del proyecto. 

5.- Una vez abierto la carpeta en Visual Studio abrir una nueva terminal donde se debe se realizará la instalación, colocar el siguiente comando y ejecutarlo: npm install 

6.- Después abrir otra terminal y colocar el comando: npm start

7.- Para correr la API se debe abrir otra terminal y correr el comando: npm run api

8.- Con esto estaremos ejecutando nuestro proyecto, por lo que se abrirá una ventana en el navegador de internet (Google Chrome) en donde podremos ver nuestro proyecto y operarlo.

### ¿Qué es lo que más te gustó de tu desarrollo?
Lo que más me gusto fue poder asignar estilos correspondientes a cada casa y poder manejarlos mediante React, también disfrute el poder hacer el diseño responsivo para mobile utilizando Media Queries.

### Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras
hecho? De haber tenido mas tiempo me hubiese gustado realizar las pruebas unitarias. 




### Descríbenos un pain point o bug con el que te hayas encontrado y como lo
No me permitía hacer POST me lanzaba un error 500, me percate de este error porque revise la consola del developer tools  en el navegador y después vi en la terminal de la API que mencionaba que faltaba un ID.
Lo solucione dándole un ID empleando un useEffect cada vez que el modal modifica su estado de visibilidad se crea un ID nuevo para cada personaje que se agrega.

A continuación adjunto imágenes del proyecto y su diseño responsivo:

![Desktop interfaz1](https://user-images.githubusercontent.com/97549362/181368565-88cae57e-dd81-45e6-b403-121fdd3645c1.JPG)
![mobile1](https://user-images.githubusercontent.com/97549362/181368622-955923f1-0f38-4d14-8b43-39703b36ddb5.JPG)
![tablet1](https://user-images.githubusercontent.com/97549362/181368666-8d1372c3-688f-47f5-9532-2c3bffe42799.JPG)
![Desktop interfaz2](https://user-images.githubusercontent.com/97549362/181368706-671b2d2e-18f3-4fc9-b2f6-c8a604bfec4d.JPG)
![mobile2](https://user-images.githubusercontent.com/97549362/181368735-7e037928-3087-4bba-a57f-370afcb28914.JPG)
![tablet2](https://user-images.githubusercontent.com/97549362/181368780-5b31bf38-feba-47f7-8a5d-348600bf378c.JPG)








