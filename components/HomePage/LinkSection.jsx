import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoSmall from "../../assets/logo-small.png";

export default function LinkSection() {
  const itemA = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 0 },
  };

  const itemB = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: 0 },
  };

  const itemC = {
    hidden: { scale: 0, top: 300 },
    show: { scale: 1, top: 0 },
  };

  return (
    <div className="spaceTop col-md-6 col-sm-12 home">
      <Link href="trees/prophet">
        <motion.div className="card" variants={itemA}>
          <div className="d-flex card-body">
            <Image className="img-fluid" src={LogoSmall} alt="tree" />
            <p>Prophet Muhammad (saw)</p>
            <i className="linearicons-arrow-right-circle"></i>
          </div>
        </motion.div>
      </Link>
      <Link href="trees/ahlulbayt">
        <motion.div className="mt-4 card" variants={itemB}>
          <div className="d-flex card-body">
            <Image className="img-fluid" src={LogoSmall} alt="tree" />
            <p>Ahlulbayt (as)</p>
            <i className="linearicons-arrow-right-circle"></i>
          </div>
        </motion.div>
      </Link>
      <Link href="trees/zuhair">
        <motion.div className="mt-4 card" variants={itemC}>
          <div className="d-flex card-body">
            <Image className="img-fluid" src={LogoSmall} alt="tree" />
            <p>Abidi (Zuhair Abbas)</p>
            <i className="linearicons-arrow-right-circle"></i>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
