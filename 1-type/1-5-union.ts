{
    /**
     * ⭐️ Union Types: OR
     */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('right');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16; // 지정해준 값에서만 할당 가능

    // 예제) 로그인 할 경우, 로그인 성공 / 실패 할 수 있다
    // function: login -> success, fail
    type SuccessState = {
        response: {
            body: string; // 임의
        }
    };

    type FailState = {
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    function login(id: string, password: string): LoginState /**Promise<LoginState>*/ {
        return {
            response: {
                body: 'logged in',
            }
        }
    }

    // printLoginState(state: LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state: LoginState) {
        if('response' in state) {
            console.log(`🎉${state.response.body}`);
        }else {
            console.log(`😭 ${state.reason}`);
        }
    }
}