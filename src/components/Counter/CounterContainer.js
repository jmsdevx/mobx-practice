import { observable } from "mobx";
import Counter from "./Counter";
import React from "react";

//separation of concerns, move state outside of component
const appState = observable({
  //observable - decorator, tells mobx to track this value
  count: 0
});

appState.increment = function() {
  appState.count++;
};

appState.decrement = function() {
  appState.count--;
};

const CounterContainer = () => <Counter store={appState} />;

export default CounterContainer;
