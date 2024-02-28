{
    /**
     * Type Assertions 💩
     */

    function jsStrFunc(): any {
        return 2;
    }

    const result = jsStrFunc();
    // result.length 문자열인지 알수없어서 사용 불가

    //(result as string).length
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 💩

    function findNumbers(): number [] | undefined {
        return undefined;
    }
    const numbers = findNumbers();

    numbers!.push(2); // 💩 !는 장단컨데 확신할때 사용

    const button = document.querySelector('class')!; // 정말 100%일때만 사용해야하지만 사용하지 않는게 좋음
    if (button) {
        button.nodeValue;
    }


}