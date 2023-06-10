
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
