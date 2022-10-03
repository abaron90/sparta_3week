import React, { useState } from "react";
import "./style.css";

let number = 3;                               /* 기존에 완료1, 진행1이 존재 함으로 3번 부터 id 시작 */
function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,                                    /* id  */
    title: "",                                /* 제목 */  
    body: "",                                 /* 내용 */
    isDone: false,                            /* 처음 입력시 Working 부분에 입력 true면 완료로 입력 */
  };

  console.log(todos);                                 /* default 내용 콘슬 확인 */

  const [todo, setTodo] = useState(initialState);     /* todo, setTodo 변수 넣을 변수 지정 */
  const onChangeHandler = (event) => {                /* 이벤트 발생시 */
    const { name, value } = event.target;             /* name, value 값을 event.target으로 가지고 온다? */
    setTodo({ ...todo, [name]: value });              /* 입력이 나오는 부분 set */
  };

  const onSubmitHandler = (event) => {                /* 이벤트 발생 */
    event.preventDefault();                           /* 이벤트 추가부분 */
    if (todo.title.trim() === "" || todo.body.trim() === "") /* 양쪽 공백 지우기 */
    return;                                           
    setTodos([...todos, { ...todo, id: number }]);    /* 빈칸이 아니니까 내용 추가 */
    setTodo(initialState);                            /* Form으로 전송 */
    number++;                                         /* id : number 숫자 +1 */
  };
  
  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
          required
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
          required
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
