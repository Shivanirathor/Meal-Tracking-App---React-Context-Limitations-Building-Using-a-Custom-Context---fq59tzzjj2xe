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
