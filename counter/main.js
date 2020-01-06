let inc = document.querySelector(".Increment");
let dec = document.querySelector(".Decrement");
let res = document.querySelector(".Reset");
let h1 = document.querySelector("h1");

function reducer(state = 0, action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "res":
      return 0;
    default:
      return state;
  }
}
let state = Redux.createStore(reducer);

inc.addEventListener("click", () => {
  state.dispatch({ type: "inc" });
  h1.innerText = state.getState();
});
dec.addEventListener("click", () => {
  state.dispatch({ type: "dec" });
  h1.innerText = state.getState();
});
res.addEventListener("click", () => {
  state.dispatch({ type: "res" });
  h1.innerText = state.getState();
});
h1.innerText = state.getState();
