// console.log("1");
// setTimeout(function(){
//     console.log("2");
// }, 3000);

// console.log("3");
// setTimeout(
//     function(){console.log("4");
// }, 1000);

let myFirstPromise = new Promise((resolve, reject) => {
    // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
    // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код. 
    // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
    setTimeout(function(){
      resolve("Opss"); // Ура! Всё прошло хорошо!
    }, 3000);
  });
  
  myFirstPromise.then((successMessage) => {
    // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
    // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
    console.log(successMessage);
  });