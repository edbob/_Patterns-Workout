//если пространство имен с заданным именем
//уже существует, оно не будет создано заново!

let App = {};

App.define = function (namespace) {
  let parts = namespace.split("."),
    parent = App, i;
  // отбросить начальный префикс – имя глобального объекта
  if (parts[0] === "App") {
    parts = parts.slice(1);
  }
  for (i = 0; i < parts.length; i += 1) {
    // создать свойство, если оно отсутствует
    if (typeof parent[parts[i]] == "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
};

App.define("util.calc");

App.util.calc = (() => {
  let x, y;
  return {
    add: () => {
      return x + y;
    },
    setX: (val) => {
      x = val;
    },
    setY: (val) => {
      y = val;
    }
  }
})();

(function () {
  let calc = App.util.calc;
  calc.setX(3);
  calc.setY(3);
  console.log(calc.add());
})();