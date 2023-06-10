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


