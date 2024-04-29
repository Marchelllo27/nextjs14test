import Image from "next/image";

import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

const MealDetailsPage = async ({ params }) => {
  const { title, image, creator_email, creator, instructions, summary } = await getMeal(params.mealSlug);

  console.log(instructions);
  const instr = instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instr,
          }}
        ></p>
      </main>
    </>
  );
};
export default MealDetailsPage;
