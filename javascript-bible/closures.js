function outerFn() {
    const a = 10;

    function innerFn(b) {
        return a + b;
    }
    return innerFn;
}

const res = outerFn();
console.log(res(20));