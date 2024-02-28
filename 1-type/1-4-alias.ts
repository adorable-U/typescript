{
    /**
     * Type Aliases
     */

    type Text = string; // 직접 타입을 지정 할 수 있음
    const name: Text = "ellie";
    const address: Text = 'korea';
    type Num = number;

    // object 타입도 지정 가능
    type Student = {
        name: string;
        age: number;
    }

    const student: Student = {
        name: 'ellie',
        age: 12,
    }

    /**
     * String Literal Types
     */

    type Name = "name"; // 타입을 문자열로도 지정 가능
    let ellieName: Name; // ellieName에 Name타입을 지정하면
    ellieName = 'name'; // 무조건 name만 할당 가능

    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
    const isCat: Boal = true; // false 가 오면 error
}