## Factory Functions

Una buena práctica es combinar esto con el patrón adaptador, ya que:

1. Usamos dependencias externas de manera escalable y segura, pero nos encontramos con el mismo problema: empezamos a llamar este adaptador en muchos lugares.

2. Creamos una función factory que recibe inicialmente dependencias (en este caso, adaptadores). Esta función puede tener tantos procesos como sean necesarios dentro de ella y luego nos retorna una función accesora que simplifica todo sin tener que llamar a los adaptadores una y otra vez. 😊👍
