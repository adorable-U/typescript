{

    /**
     * JavaScript
     * primitive: number, string, boolean, bigint(더 큰 숫자 범위 할당), symbol, null, undefined (원시적 타입들)
     * object: function, array...
     */

    // Number
    //const num:number = 'd'// error
    const num: number = 5;

    // String
    const str: string = 'hello';

    // boolean
    const boal: boolean = true;

    // undefined 값이 있는지 없는지 명시되지 않은 타입
    // let name:undefined; // 💩
    let age: number | undefined; // number가 담기거나 undefined가 올수 있음
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return 1;
        //return  undefined;
    }

    // null 값이 이미 비어있는 타입
    let person : null;
    let person2: string | null; // string 이 오거나 null 값이 올수 있음

    // 보편적으로는 타입 | undefined 를 사용함,
    // 데이터가 있거나 없거나 할 경우엔 null 사용

    // unknown (알수없는) 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any (어떤것이든) 💩
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
        // 아무것도 리턴하지 않을 경우 void (생략 가능)
    }

    let unusable: void = undefined; // 💩 void는 undefined 밖에 할당 안됨, 사용하지 않음

    // never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        // return 하는 값이 없음, never 할당할 경우 절대절대 리턴할수 없음

        // 혹은
        while (true) {}
        // while 문과 같이 뱅글뱅글 도는 코드 작성시 사용
    }

    let neverEnding: never; // 💩

    //objet
    let obj: object; // 💩
    function acceptSomeObject(obj: object) {

    }

    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({animal: 'dog'});
    // 모든 원시적 타입 제외 모든 object 타입을 담을수 있음

}
