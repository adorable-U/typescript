{ // 블럭 작성이유, 충돌을 피하기 위함

    // JavaScript
   /*
   function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript
    function jsFetchNum(id) {

        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // TypeScript
    function fetchNum(id: string): Promise<number> {
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }
    */

    // javaScript => TypeScript
    // Optional parameter
    function printName(firstName: string, lastName?: string){
        //lastName? 전달 받을수도 있고 아닐수도 있고
        console.log(firstName);
        console.log(lastName); // undefined
    }
    printName('steve', 'jobs');
    printName('Ellie');
    printName('anna', undefined);

    //Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage(); // 값을 전달하지 않을경우 default 값을 출력함

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a,b) => a + b);
        // reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
    }

    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,3,4,5));


}