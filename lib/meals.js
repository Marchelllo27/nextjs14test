import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 3000)); // async if we want to use promise

  // throw new Error("An error occured");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
//all() because we are fetching all data.
