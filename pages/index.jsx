import { motion } from "framer-motion";
import IconSection from "../components/HomePage/IconSection";
import LinkSection from "../components/HomePage/LinkSection";

export default function Home() {
  const container = {
    hidden: { rotate: 10 },
    show: {
      rotate: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <motion.main variants={container} initial="hidden" animate="show">
      <div className="mt-4 container d-flex justify-content-center align-items-center">
        <div className="row">
          <IconSection />
          <LinkSection />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </motion.main>
  );
}
