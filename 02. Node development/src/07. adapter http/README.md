# Http con adapter and factory functions

En el ejemplo propuesto, podemos ver la combinación del patrón adaptador con factory functions en peticiones HTTP dinámicas que controlan errores globales, lo que facilita pruebas, registros, captura de errores especializados, etc.

Podemos identificar rutas privadas y públicas, y podemos establecer encabezados dinámicos o por defecto, lo que facilita las peticiones. De cierta manera, tenemos un proveedor HTTP.

La manera de mejorarlo es adaptarlo a cada petición.
