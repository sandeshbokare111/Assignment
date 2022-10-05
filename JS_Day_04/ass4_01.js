//setTimeout of 1ms.
function Func() {
    setTimeout(() => {
        for (var i = 1; i <= 10; i++) {
            console.log(i);
        }
    }, 1000);//delay time
}
Func();
