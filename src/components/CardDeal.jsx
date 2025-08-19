import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets"; 

const CardDeal = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Easily explore and choose from the top card offers, designed to give
          you better rewards, lower fees, and maximum savings.
        </p>

        <Button
          styles={`mt-10 rounded-10 hover:scale-110 transition-transform duration-300`}
        />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        <img src={card} alt="card" className="w-[100%] h-[100%] animate-slow-pulse" />
      </div>
    </section>
  );
};

export default CardDeal;
