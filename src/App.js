
import { useState } from 'react';
import './App.css';
import FoodsJSON from "./foods.json";
import FoodBox from "./components/FoodBox.jsx"
import AddFoodForm from "./components/AddFoodForm.jsx"
import Search from "./components/Search.jsx"
import { Row, Divider, Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(FoodsJSON);

  const deleteHandler = (idFood) => {
    setFoods(foods.filter(food => food.name !== idFood)); //
  }

  const createFood = (food) => {
    setFoods([...foods, food]);
  }

  const filterFood = (text) => {
    setFoods(foods.filter(food => food.name.toLowerCase().includes(text.toLowerCase())));
  }
  return (

    <div className="App">

      <AddFoodForm createFood={createFood} />

      <Button> Hide Form / Add New Food </Button>

      <Search filter={filterFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {FoodsJSON.map(food => <FoodBox name={food.name} calories={food.calories} image={food.image} servings={food.servings} deleteHandler={deleteHandler} key={food.name} />)}
      </Row>
    </div>





  );
}

export default App;
