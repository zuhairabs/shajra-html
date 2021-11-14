import Image from "next/image"
import TreeImage from '../../assets/tree.png';

export default function IconSection() {
  return (
    <div className="mt-md-4 mt-4 col-sm-12 col-md-6">
      <Image className="img-fluid" src={TreeImage} alt="tree-vector" />
    </div>
  );
}
