{
    // Array
    const fruits: string[] = [🍎, 🍇];
    const scroes: Array<number> = [1,2,3]; //동일한 배열 정의 방식

    function printArray(fruits: readonly string[]) {
        // readonly 무조건 읽을수만 있고 변경은 불가능
        //ex) fruits.push // error
    }

    //Tuple (권장 x) -> interface, type alias, class
    let student: [string, number]; // 두개의 타입이 다른 경우
    student = ['name', 123];
    /*student[0]; // name
    student[1]; // 123*/

    const [name, age] = student; // useState
    // tuple을 가장 잘 활용하는 코드는 react의 useState다.
    // const [id, setid] = useState();

    // 동적으로 리턴하는데 interface, class 사용에는 애매하고 ,
    // 동적으로 뭔가 관리하고, 사용자가 이름을 정의할때는 튜플을 사용해도 되지만 그렇지않을 경우엔 interface, class사용을 우선한다.
}