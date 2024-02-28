{
    /**
     * ⭐️ Discriminated Union Types: 차별화 하는, 구분화하는
     */

    // 예제) 로그인 할 경우, 로그인 성공 / 실패 할 수 있다
    // function: login -> success, fail
    type SuccessState = {
        result: 'success';
        response: {
            body: string; // 임의
        }
    };

    type FailState = {
        result: 'fail';
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    function login(id: string, password: string): LoginState /**Promise<LoginState>*/ {
        return {
            result: 'success', // 공통적인 property
            response: {
                body: 'logged in',
            }
        }
    }

    // printLoginState(state: LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state: LoginState) {
        /*if('response' in state) {
            console.log(`🎉${state.response.body}`);
        }else {
            console.log(`😭 ${state.reason}`);
        }*/

        // 조금 더 직관적인 소스코드 가능
        if (state.result === 'success') {
            console.log(`🎉${state.response.body}`);
        }else {
            console.log(`😭 ${state.reason}`);
        }
    }






}