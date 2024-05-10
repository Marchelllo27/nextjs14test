"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isValidText = text => {
  return !text || text.trim() !== "";
};

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // Validation could be done by more elegant package or solution.
  if (
    !isValidText(meal.title) ||
    !isValidText(meal.summary) ||
    !isValidText(meal.instructions) ||
    !isValidText(meal.creator) ||
    !isValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw an error and the closes error page will be shown
    // or we can return something and catch it in the component
    return {
      message: "Invalid input",
    };
  }

  await saveMeal(meal);

  revalidatePath("/meals", "layout");
  redirect("/meals");
}
