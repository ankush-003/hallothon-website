import Image from "next/image";
import Link from "next/link";
import Wolf from "../../public/assets/wolf2.png";
function Sponsor() {
  return (
    <div className="w-full flex flex-col justify-center items-center my-20 font-bold">
      <h1 className="text-6xl md:text-step-7">Sponsored By</h1>
      <div className="flex">
        <Link href="https://www.wolfram.com/?source=nav">
          <Image
            src={Wolf}
            className="sponsor-logo"
            alt="Wolfram"
            width={500}
            height={500}
          ></Image>
        </Link>
      </div>
    </div>
  );
}

export default Sponsor;
