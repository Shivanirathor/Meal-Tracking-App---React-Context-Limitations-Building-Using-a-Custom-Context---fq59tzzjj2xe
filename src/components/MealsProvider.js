// src/components/MealsProvider/MealsProvider.js
import React, { createContext, useState } from 'react';

export const MealsContext = createContext();

const MealsProvider = ({ children }) => {
  const [todaysMeals, setTodaysMeals] = useState([
    { id: 1, name: 'Breakfast', ticked: false },
    { id: 2, name: 'Lunch', ticked: false },
    { id: 3, name: 'Dinner', ticked: false },
  ]);

  const tickMeal = (mealId) => {
    setTodaysMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === mealId ? { ...meal, ticked: !meal.ticked } : meal
      )
    );
  };

  return (
    <MealsContext.Provider value={{ todaysMeals, tickMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
