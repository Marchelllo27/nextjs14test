import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  console.log(meals);
  return (
    <ul className={classes.meals}>
      {meals.map(meal => (
        <li key={meals.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};
export default MealsGrid;
