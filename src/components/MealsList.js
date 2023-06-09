// src/components/MealsList/MealsList.js
import React, { useContext } from 'react';
import { MealsContext } from '../MealsProvider/MealsProvider';

const MealsList = () => {
  const { todaysMeals, tickMeal } = useContext(MealsContext);

  return (
    <div>
      <h2>Meals List</h2>
      {todaysMeals.map((meal) => (
        <div key={meal.id}>
          <input
            type="checkbox"
            checked={meal.ticked}
            onChange={() => tickMeal(meal.id)}
          />
          <span>{meal.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MealsList;
