{
    /**
     * Intersection Type: &
     */

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    // 모든 값을 넘겨야 error 없음
    internWork({
        name: 'ellie',
        score: 1,
        employeeId: 123,
        work: () => {}
    })
}