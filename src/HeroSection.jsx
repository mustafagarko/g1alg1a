import bg from "../src/assets/bg1.jpeg";
import tower from "../src/assets/tower.png";
import tower2 from "../src/assets/tower2.png";
import cloud1 from "../src/assets/cloud1.png";
import { motion } from "framer-motion";

function HeroSection() {
  document.addEventListener(`mousemove`, (e) => {
    Object.assign(document.documentElement, {
      style: `
              --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
              --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
              `,
    });
  });
  return (
    <section className="layers">
      <div className="layers__container flex text-center items-center justify-center">
        <div className="layers__item layer-1 w-[100vw]">
          <img src={bg} />
        </div>
        <div className="layers__item layer-2">
          <motion.div
            className="hero-content"
            initial={{ y: "100vh" }}
            animate={{ y: "0vw" }}
            transition={{
              ease: "easeInOut",
              duration: 4,
            }}
          >
            <h1>
              Г1алг1ай<span> мохк</span>
            </h1>
          </motion.div>
        </div>

        <div className="layers__item layer-3 right-[-5vw]">
          <img src={tower} />
        </div>
        <div className="layers__item layer-4 bottom-[-15vh] left-10">
          <img src={tower2} />
        </div>
        <div className="layers__item layer-3">
          <img src={cloud1} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
