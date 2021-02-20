function fun1(cb) {
  setTimeout(() => {
    console.log('1');
    cb();
  }, 300);
}

function fun2(cb) {
  setTimeout(() => {
    console.log('2');
    cb();
  }, 250);
}

function fun3(cb) {
  setTimeout(() => {
    console.log('3');
    cb();
  }, 150);
}

function fun4(cb) {
  setTimeout(() => {
    console.log('4');
    cb();
  }, 100);
}

function queue(list, count) {
  let index = count

  const next = () => {
    list[index] && list[index++](next)
  }

  for (let i = 0; i < count; i++) {
    list[i](next)
  }
}

queue([fun1, fun2, fun3, fun4], 2);   // 依次输出 2、1、3
