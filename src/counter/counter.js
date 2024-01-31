import { useReducer } from 'react';
function Counter() {

  const initialState = 0;
  const reducer = (state, action) => {

    switch (action) {
      case "Increment":
        return state + 1
      case "Decrement":
        return state - 1
      default:
        return state
    }
  }


  const [count, dispatch] = useReducer(reducer, initialState)
  // dispatch call krta hia reducer() function ko usko batata hia action ki , kiya  action perform karna hai us action ke basis per hamra state update ho jata hai. Aur usme jo value hai wo store ho jati hai

  return (<>


    <h2>count {count}</h2>


    <button onClick={() => dispatch("Increment")}>Increment</button>
    <button onClick={() => dispatch("Decrement")}>Deccrement</button>
  </>)
}

export default Counter;