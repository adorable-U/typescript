{
    /**
     * Type Inference
     */

    let text = 'hello'; // string으로 지정한 경우 자동으로 string으로 자동 지정됨
    text = 'hi';
    // text = 1; error

    function print(message = 'hello') {
        console.log(message);
    }

    function add(x: number, y: number){
        return x + y; // x와 y값을 number로 지정해 두었기때문에 결과값도 number로 자동 추론됨
    }

    const result = add(1, 2);
}