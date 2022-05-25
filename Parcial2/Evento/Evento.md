# **Captura y propagación Bubbling de eventos en JavaScript**

**Captura y propagación Bubbling de eventos en JavaScript**

Event Bubbling es el término que las personas deben encontrar al desarrollar una aplicación web o una página web utilizando . Básicamente, el Event Bubbling es una técnica en la que se llama a los controladores de eventos cuando un elemento está anidado en otro elemento y debe ser del mismo evento. Es similar a la encapsulación.
 
# **Que es la propagación de eventos**
La propagación de eventos se puede comparar como término principal con la propagación y captura de eventos como su hijo. Si hace clic en cualquier imagen, no solo generará un evento de clic, sino que pasará al padre 'a' y al abuelo 'li'. De esta forma se produce la propagación de la función.
Se ignora cualquier modificación del árbol que ocurra durante el evento. Aquí la propagación es bidireccional, es decir, va desde la ventana al objetivo del evento y vuelve. Aquí, la propagación se clasifica ampliamente en tres tipos principales. Esos son:

1.  **La fase de captura:**  Pasando de la ventana a la fase objetivo del evento.
2.  **La fase objetivo:**  Es la fase objetivo.
3.  **La fase de la burbuja:**  Desde el padre objetivo del evento hasta la ventana.


# **¿Qué es la captura de eventos?**
En esta fase, se llama a los oyentes capturadores cuyo valor se ha registrado como 'verdadero'. Está escrito como:

el.addEventListener('click', listener, true)

Aquí, el valor de escucha se ha registrado como 'verdadero', por lo que se captura este evento. Si no había ningún valor, el valor predeterminado era falso y el evento no se capturaría. Entonces, en esta fase, ese evento cuyo valor es verdadero solo se abre camino desde la ventana y es llamado y capturado.

Luego, en la fase de destino del evento, se llama a todos los oyentes registrados independientemente de que el estado de su bandera sea verdadero o falso.




## ****Uso de generación de eventos y captura de eventos en JavaScript****

En la fase de burbujeo, solo se llama al no capturador, es decir, los eventos que tienen el valor de la bandera como 'falso'. La propagación de eventos y la captura de eventos son muy útiles e importantes en la terminología DOM (Document Object Model).

el.addEventListener ('click', oyente, falso) // el oyente no captura el.addEventListener ('click', oyente) // el oyente no captura

El fragmento de código anterior muestra el funcionamiento de la fase de burbujeo y captura. No todos los eventos van al destino del evento. Algunos de ellos no se llenan de burbujas. Su viaje se detiene después de la fase objetivo. El flujo de tres fases de eventos se ilustra en el siguiente diagrama:

El burbujeo de eventos no funciona en todos los tipos de eventos, sin embargo, el oyente debe poseer  _'.burbuja_  ”Propiedad booleana del objeto de evento. Algunas de las otras propiedades incluyen:

1.  **e.target:**  que hace referencia al objetivo del evento.
2.  **e.currentTarget:**  es el modo en el que están registrados los oyentes actuales. Aquí se hace referencia al valor usando  **_esta_** palabra clave.
3.  **e.eventPhase:**  Es un número entero que se refiere a otras tres palabras clave como  **_Capturing_phase, Bubbling_phase, AT_Target_** fase.


Event Bubbling es el término que las personas deben encontrar al desarrollar una aplicación web o una página web utilizando . Básicamente, el Event Bubbling es una técnica en la que se llama a los controladores de eventos cuando un elemento está anidado en otro elemento y debe ser del mismo evento. Es similar a la encapsulación.
 
# **Que es la propagación de eventos**
La propagación de eventos se puede comparar como término principal con la propagación y captura de eventos como su hijo. Si hace clic en cualquier imagen, no solo generará un evento de clic, sino que pasará al padre 'a' y al abuelo 'li'. De esta forma se produce la propagación de la función.
Se ignora cualquier modificación del árbol que ocurra durante el evento. Aquí la propagación es bidireccional, es decir, va desde la ventana al objetivo del evento y vuelve. Aquí, la propagación se clasifica ampliamente en tres tipos principales. Esos son:

1.  **La fase de captura:**  Pasando de la ventana a la fase objetivo del evento.
2.  **La fase objetivo:**  Es la fase objetivo.
3.  **La fase de la burbuja:**  Desde el padre objetivo del evento hasta la ventana.


# **¿Qué es la captura de eventos?**
En esta fase, se llama a los oyentes capturadores cuyo valor se ha registrado como 'verdadero'. Está escrito como:

el.addEventListener('click', listener, true)

Aquí, el valor de escucha se ha registrado como 'verdadero', por lo que se captura este evento. Si no había ningún valor, el valor predeterminado era falso y el evento no se capturaría. Entonces, en esta fase, ese evento cuyo valor es verdadero solo se abre camino desde la ventana y es llamado y capturado.

Luego, en la fase de destino del evento, se llama a todos los oyentes registrados independientemente de que el estado de su bandera sea verdadero o falso.


## ****Uso de generación de eventos y captura de eventos en JavaScript****

En la fase de burbujeo, solo se llama al no capturador, es decir, los eventos que tienen el valor de la bandera como 'falso'. La propagación de eventos y la captura de eventos son muy útiles e importantes en la terminología DOM (Document Object Model).

el.addEventListener ('click', oyente, falso) // el oyente no captura el.addEventListener ('click', oyente) // el oyente no captura

El fragmento de código anterior muestra el funcionamiento de la fase de burbujeo y captura. No todos los eventos van al destino del evento. Algunos de ellos no se llenan de burbujas. Su viaje se detiene después de la fase objetivo. El flujo de tres fases de eventos se ilustra en el siguiente diagrama:

El burbujeo de eventos no funciona en todos los tipos de eventos, sin embargo, el oyente debe poseer  _'.burbuja_  ”Propiedad booleana del objeto de evento. Algunas de las otras propiedades incluyen:

1.  **e.target:**  que hace referencia al objetivo del evento.
2.  **e.currentTarget:**  es el modo en el que están registrados los oyentes actuales. Aquí se hace referencia al valor usando  **_esta_** palabra clave.
3.  **e.eventPhase:**  Es un número entero que se refiere a otras tres palabras clave como  **_Capturing_phase, Bubbling_phase, AT_Target_** fase.




