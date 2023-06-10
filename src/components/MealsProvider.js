import React, { useState } from "react";
import { createContext } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans', checked: false },
    { id: 2, name: 'Baked Sweet Potatoes', checked: false },
    { id: 3, name: 'Baked Potatoes', checked: false }
];

const MealsContext = createContext();

const MealsProvider = ({ children }) => {

    const [meals, setMeals] = useState(todaysMeals);

    const tickMeal = (event) => {
        const value = event.target.value;

        const checkedMeal = meals.map((meal) => {
            if (meal.id === Number(value)) {
                return {
                    ...meal,
                    checked: !meal.checked
                }
            }

            return meal;
        });

        setMeals(checkedMeal);
    };

    return (
        <div>
            <MealsContext.Provider value={{ meals, tickMeal }}>
                {children}
            </MealsContext.Provider>
        </div>
    );
};

export { MealsContext };
export default MealsProvider;

//Counter.js

import React from "react";
import { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const Counter = () => {

    const { meals } = useContext(MealsContext);

    const remainingMealsCount = meals.filter((meal) => meal.checked === false).length;

    return (
        <div>
            <h3>Meals Remaining: {remainingMealsCount}</h3>
        </div>
    )
}

export default Counter;

//MealList.js

import React from "react";
import { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const MealsList = () => {

    const { meals, tickMeal } = useContext(MealsContext);

    return (
        <div>
            <h2>Meals:</h2>
            <ul>
                {meals.map((meal) => {
                    return <li key={meal.id}><input type="checkbox" value={meal.id} checked={meal.checked} onChange={tickMeal} />{meal.name}</li>
                })}
            </ul>
        </div>
    )
}

export default MealsList;
