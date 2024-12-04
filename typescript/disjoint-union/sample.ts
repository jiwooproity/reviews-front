/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
 */

enum Role {
  ADMIN,
  MEMBER,
  GUEST,
}

type Admin = {
  tag: Role.ADMIN;
  name: string;
  kickCount: number; // 강퇴한 횟수
};

type Member = {
  tag: Role.MEMBER;
  name: string;
  point: number; // 마일리지와 같은 개념
};

type Guest = {
  tag: Role.GUEST;
  name: string;
  visitCount: number; // 방문한 횟수
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case Role.ADMIN:
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다.`);
      break;
    case Role.MEMBER:
      console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
      break;
    case Role.GUEST:
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하였습니다.`);
      break;
    default:
      break;
  }
}

/**
 * 비동기 작업 상황의 예시
 */

enum State {
  LOADING,
  FAILED,
  SUCCESS,
}

type LoadingTask = {
  state: State.LOADING;
};

type FailedTask = {
  state: State.FAILED;
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: State.SUCCESS;
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case State.LOADING:
      console.log("Loading ...");
      break;
    case State.FAILED:
      console.log(`Failed ... ${task.error.message}`);
      break;
    case State.SUCCESS:
      console.log(`Success ... ${task.response.data}`);
    default:
      break;
  }
}

const loading: AsyncTask = {
  state: State.LOADING,
};

const failed: AsyncTask = {
  state: State.FAILED,
  error: {
    message: "실패!",
  },
};

const success: AsyncTask = {
  state: State.SUCCESS,
  response: {
    data: "성공!",
  },
};
