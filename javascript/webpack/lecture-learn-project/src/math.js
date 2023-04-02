var math = math || {};

(function() {
    function sum(a, b) {
        console.log(`요청 값의 합 : ${a + b}`)
    }

    math.sum = sum;
})();