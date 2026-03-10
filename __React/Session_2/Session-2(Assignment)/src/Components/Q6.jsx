// 6. **Self-study hooks (useRef, useReducer)**
    
//     Add these to your assignment: build at least one small example using **useRef** (e.g. focus an input, or store a value that doesn’t need to trigger re-renders) and one using **useReducer** (e.g. a simple counter or form with multiple fields). See the **Self-study: more hooks** section above for a short description of each.


import { useRef } from "react";

function Q5() {

  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef Example</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default Q5;