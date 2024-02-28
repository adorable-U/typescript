{
    /**
     * Enum: 여러가지 관련된 상수값들을 한곳에 모아서 정의 할 수 있게 도와주는 타입
     */

    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;

    const DAYS_ENUM = Object.freeze({"MONDAY": 0,"TUESDAY": 1, "WEDNESDAY": 2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    enum Days { // 값을 지정하지않으면 0 부터 증가, 원치않으면 값 지정하기
        Monday = 1,
        Tuesday,
        Wednesday
    }

    console.log(Days.Monday);
    // const day = Days.Tuesday;
    let day: Days = Days.Tuesday;
    day = Days.Tuesday;
    day = 10; // Enum의 문제점. 값을 지정해도 값이 보장되지 않는다.

    // 권장하지 않기 때문에 union 으로 지정해서 사용하길 권장함.
    type daysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let daysOfWeek = 'Wednesday';

    // enum 사용 권장인 경우: 모바일 ios, aos 등 전달 해야 할 경우 네이티브에서 이해할수 있는 enum을 사용하지만 웹에선 굳이 사용 x

}