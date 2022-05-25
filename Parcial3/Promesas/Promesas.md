# **Promesas en Java Script**

Las  **promesas**  son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que, por ejemplo, utilizando  [funciones callbacks](https://lenguajejs.com/javascript/asincronia/callbacks/)  directamente.

Como su propio nombre indica, una  **promesa**  es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas

 ![enter image description here](https://lenguajejs.com/javascript/asincronia/promesas/promises.png)

-   La promesa  **se cumple**  (_promesa resuelta_)
-   La promesa  **no se cumple**  (_promesa se rechaza_)
-   La promesa se queda en un  **estado incierto**  indefinidamente (_promesa pendiente_)

Con estas sencillas bases, podemos entender el funcionamiento de una promesa en Javascript. Antes de empezar, también debemos tener claro que existen dos partes importantes de las promesas:  **como consumirlas**  (_utilizar promesas_) y  **como crearlas**  (_preparar una función para que use promesas y se puedan consumir_).


# *Funcion*
Las **promesas** en Javascript se representan a través de un , y cada **promesa** estará en un estado concreto: `pendiente`, `aceptada` o `rechazada`. Además, cada **promesa** tiene los siguientes métodos, que podremos utilizar para utilizarla:

`.then(``resolve)`

Ejecuta la función callback  `resolve`  cuando la promesa se cumple.


`.catch(``reject)`

Ejecuta la función callback  `reject`  cuando la promesa se rechaza.


`.then(``resolve,``reject)`

Método equivalente a las dos anteriores en el mismo  `.then()`.


`.finally(``end)`

Ejecuta la función callback  `end`  tanto si se cumple como si se rechaza.


# **Terminología asociada a las Promesas**
Tenemos muchos términos relacionados a lo que son Promesas en Javascript. A continuación veamos lo más básico.

Una promesa puede presentar los siguientes estados:

-   `fulfilled`  - La acción relacionada a la promesa se llevó a cabo con éxito
-   `rejected`  - La acción relacionada a la promesa falló
-   `pending`  - Aún no se ha determinado si la promesa fue  `fulfilled`  o  `rejected`
-   `settled`  - Ya se ha determinado si la promesa fue  `fulfilled`  o  `rejected`

También se suele usar el término  `thenable`, para indicar que un objeto tiene disponible un método "then" (y que por tanto está relacionado con Promesas).




## ****Estado de una promesa en JavaScript****
Existen tres estados posibles para una promesa y estos son:

-   **Pendiente.** De base todas las promesas están pendientes.

-   **Resuelta.** Estará resuelta en el momento que llamemos a  _resolve_  y a continuación se ejecuta la función que pasamos al método ._then_. Debemos de tener en cuenta que una vez resuelta no podremos modificar el valor de la promesa, aunque si podríamos correr la misma instrucción para obtener un valor distinto y hacerlo las veces que deseemos.

-   **Rechazada.** Pasará a estar rechazada cuando llamemos a  _reject_  y obtengamos un error que nos indicará ese rechazo, pasando a continuación a ejecutar la función que pasamos a  _.catch_.



## ****Conclusion****
Las Promesas en JavaScript son acciones que se resolverán a futuro (cuando se pueda) y que sabremos si se llevaron a cabo con éxito o no.