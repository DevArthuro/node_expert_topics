console.log("Inicio de programa"); // 1 1

setTimeout(() => {
  console.log("Primer TimeOut"); // 5 5
}, 3000);

setTimeout(() => {
  console.log("Segundo TimeOut"); // 3 3
}, 100);

setTimeout(() => {
  console.log("Tercer TimeOut"); // 2 4
}, 0);

console.log("Fin del programa"); // 4  2
