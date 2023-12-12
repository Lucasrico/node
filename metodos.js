// includes()
// El método includes() se enfoca en averiguar si una matriz (una estructura de datos que comprende una lista de elementos, cada uno de los cuales almacena varios elementos en una sola variable) contiene un valor específico dentro de su lista y luego responde con verdadero o falso. Es vital recordar que includes() distingue entre mayúsculas y minúsculas cuando se busca una respuesta específica.




// some()
// Los tests del método some() son responsables de encontrar si al menos un elemento de la matriz pasa la prueba realizada por la función de devolución de llamada. La función de devolución de llamada (callback) acepta solo tres respuestas: el elemento, el índice y la matriz completa.



// every()
// El método every() utiliza un proceso similar al de some(), con una diferencia. Todos los elementos de la matriz pasan la prueba mediante la función de devolución de llamada.



// filter()
// El método filter(), uno de los favoritos de muchos desarrolladores, funciona mediante la creación de una nueva matriz a través del uso de elementos de matrices preexistentes, mediante una prueba realizada por la función de devolución de llamada.



// map()
// El método map(), al igual que el método filter(), crea una nueva matriz utilizando los resultados de la función de devolución de llamada para cada elemento de la matriz. La función de devolución de llamada recibe uno de tres argumentos: currentValue, index o array. Al igual que reduce(), la función de devolución de llamada busca índices (la ubicación del elemento) de la matriz con valores asignados, incluso si no está definido.



// flatMap()
// El método flatMap() toma una función (una tarea que usa una palabra clave específica) para cada elemento junto con la matriz y luego “aplana” (o cambia) el resultado en una nueva matriz. Este método combina flat() y map() en una función, que es más eficiente que ingresar dos métodos diferentes por separado.



// reduce()
// El método reduce() usa la función de devolución de llamada para cada valor dentro de la matriz usando los cuatro argumentos clave: acumulator, currentValue, currentInfex o array. Durante la primera devolución de llamada, el acumulator y currentValue darán como resultado el valor inicial (initialValue) si está disponible; si no, aparecerá el primer valor de la matriz.
// La función reduce () tiene varias capacidades: tomar la suma de todos los valores dentro de la matriz o en una matriz de objetos, contar elementos particulares en la matriz, agrupar objetos, fusionar matrices contenidas en la matriz de objetos o incluso eliminar duplicados.



// reverse()
// El método reverse() toma una matriz e invierte su orden. Esta función toma el primer elemento junto con la matriz y lo convierte en el último, y la última matriz se convierte en el primer elemento.



// sort()
// El método sort(), uno de los más comunes, se enfoca en clasificar los elementos de una matriz en su lugar y luego devolver la matriz completa, configurada por defecto en orden ascendente. Este método no siempre garantiza resultados perfectos, dependiendo de la complejidad de la tarea.



// flat()
// El método flat() funciona para crear una nueva matriz utilizando todos los elementos de la sub-matriz vinculados a una profundidad específica. Una vez que se complete este método, aplanará la matriz en un nivel.



// fill()
// El método fill() es responsable de cambiar todos los elementos de la matriz a un valor estático, comenzando desde el primer índice (establecido como 0) hasta el último. Durante este proceso, las actualizaciones finalizarán y devolverán una matriz de referencia al original.



// find()
// El método find(), similar al método findIndex(), es diferente en que el valor del primer elemento busca satisfacer la función de devolución de llamada como un índice. Si el índice no puede cumplir con la función de devolución, regresa como “indefinido”.



// findIndex()
// El método findIndex() devuelve el índice al primer elemento de la matriz si puede pasar la función de devolución de llamada. Si falla la función de devolución, seguirá un -1. findIndex() es diferente de otros métodos porque realiza la función de devolución incluso para índices a los que no se les asigna un valor.



// forEach()
// El método forEach() proporciona una función específica para cada elemento de la matriz. Este método tiene dos consideraciones especiales: no tiene forma de detener o interrumpir un método forEach() más que ingresar una nueva excepción. La segunda es que forEach() espera una devolución de llamada sincronizada; no se detendrá hasta obtener una respuesta sino que seguirá moviéndose al siguiente elemento.



// concat()
// El método concat(), uno de los más sencillos de esta lista, funciona fusionando dos o más matrices en una nueva matriz.