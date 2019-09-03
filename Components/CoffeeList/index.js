import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeStore from "../../store/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";

const CoffeeList = props => {
  const { cafes } = coffeeStore;
  let shops;
  if (cafes) {
    shops = cafes.map(cafe => (
      <CoffeeItem cafe={cafe} key={cafe.id} navigation={props.navigation} />
    ));
  }
  return (
    <Content>
      <List>{shops}</List>
    </Content>
  );
};

export default observer(CoffeeList);
