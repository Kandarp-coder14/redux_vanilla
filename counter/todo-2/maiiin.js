let inc = document.querySelector(".Increment");
let dec = document.querySelector(".Decrement");
let res = document.querySelector(".Reset");
let h1 = document.querySelector("h1");
let plusFive = document.querySelector(".plusFive");
let plusEight = document.querySelector(".plusEight");
let plusTen = document.querySelector(".plusTen");
let plusTwelve = document.querySelector(".plusTwelve");
let plusFourteen = document.querySelector(".plusFourteen");
let plusSixteen = document.querySelector(".plusSixteen");

let state = Redux.createStore(reducer);

function reducer(state = 0, action) {
  switch (action.type) {
    case "Increment":
      if (state >= 100) {
        alert("cannot exceed");
        return state;
      } else {
        return state + action.payload;
      }
    case "Decrement":
      if (state <= -1) {
        alert("cannot decrement");
        return state;
      } else {
        return state - action.payload;
      }
    case "res":
      return (state = 0);
    default:
      return state;
  }
}
var number = 1;

function Increase(number) {
  return state.dispatch({ type: "Increment", payload: number });
}

function Decrease(number) {
  return state.dispatch({ type: "Decrement", payload: number });
}

inc.addEventListener("click", () => Increase(number));

dec.addEventListener("click", () => Decrease(number));

plusFive.addEventListener("click", () => (number = 5));
plusEight.addEventListener("click", () => (number = 8));
plusTen.addEventListener("click", () => (number = 10));
plusTwelve.addEventListener("click", () => (number = 12));
plusFourteen.addEventListener("click", () => (number = 14));
plusSixteen.addEventListener("click", () => (number = 16));

res.addEventListener("click", () => {
  state.dispatch({ type: "res" });
});

state.subscribe(() => {
  h1.innerText = state.getState();
});
