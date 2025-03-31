import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./store";

const Counter = () => {
  // 🔹 Redux 상태 가져오기
  const cnt = useSelector((s) => s.count.cnt);

  // 🔹 Redux 액션 실행 함수 가져오기
  const dispatch = useDispatch();

  return (
    <div>
      <h2>카운트: {cnt}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
    </div>
  );
};

export default Counter;