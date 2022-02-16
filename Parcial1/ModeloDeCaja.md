# **Modelo de caja**!

El modelo de cajas o  _"box model"_  es seguramente la característica más importante del lenguaje de hojas de estilos CSS, ya que condiciona el diseño de todas las páginas web. El modelo de cajas es el comportamiento de CSS que hace que todos los elementos de las páginas se representen mediante cajas rectangulares.

Las cajas de una página se crean automáticamente. Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento.
Las cajas de las páginas no son visibles a simple vista porque inicialmente no muestran ningún color de fondo ni ningún borde


# Las partes que componen cada caja y su orden de visualización desde el punto de vista del usuario son las siguientes:



## 1.-Contenido (_content_)

se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)

## 2.- Relleno (_padding_)

espacio libre opcional existente entre el contenido y el borde.

## 3.-Borde (_border_)

línea que encierra completamente el contenido y su relleno.

##  4.-Imagen de fondo (_background image_)

Imagen que se muestra por detrás del contenido y el espacio de relleno.

## 5.-Color de fondo (_background color_)

color que se muestra por detrás del contenido y el espacio de relleno


## 6.-Margen (_margin_)

separación opcional existente entre la caja y el resto de cajas adyacentes.


**El relleno y el margen son transparentes, por lo que en el espacio ocupado por el relleno se muestra el color o imagen de fondo (si están definidos) y en el espacio ocupado por el margen se muestra el color o imagen de fondo de su elemento padre (si están definidos). Si ningún elemento padre tiene definido un color o imagen de fondo, se muestra el color o imagen de fondo de la propia página (si están definidos). Si una caja define tanto un color como una imagen de fondo, la imagen tiene más prioridad y es la que se visualiza. No obstante, si la imagen de fondo no cubre totalmente la caja del elemento o si la imagen tiene zonas transparentes, también se visualiza el color de fondo. Combinando imagenes transparentes y colores de fondo se pueden lograr efectos gráficos muy interesantes**
