import { createStackNavigator } from "react-navigation";

import CoffeeList from "../Components/CoffeeList";
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import HomePage from "../Components/HomePage";

const MyStack = createStackNavigator(
  {
    List: CoffeeList,
    Detail: CoffeeDetail,
    Login: Login
  },
  {
    initialRouteName: "Login"
  }
);

export default MyStack;
