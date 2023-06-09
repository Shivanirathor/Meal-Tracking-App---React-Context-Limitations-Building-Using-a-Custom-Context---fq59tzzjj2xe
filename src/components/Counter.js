// src/components/Counter/Counter.js
import React, { useContext } from 'react';
import { MealsContext } from '../MealsProvider/MealsProvider';

const Counter = () => {
  const { todaysMeals } = useContext(MealsContext);
  const remainingMeals = todaysMeals.filter((meal) => !meal.ticked);

  return (
    <div>
      <h2>Counter</h2>
      <p>Remaining Meals: {remainingMeals.length}</p>
    </div>
  );
};

export default Counter;
