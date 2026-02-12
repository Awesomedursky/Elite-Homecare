import Image from "next/image";
import logo from "@/public/images/logo.png";

export const Navbar = () => {
  //   const navItems = ["Home","Services":['Personalized Homecare','Household Support','Companionship','Mobility Support','Palliative Support'],'How it works', 'About Us','Careers'];
  return (
    <div>
      {/* logo */}
      <div>
        <Image src={logo} alt="Elite-Homecare" loading="lazy" />
      </div>
      {/* navlinks */}
      <div></div>

      {/* call to action */}
      <div>
        <button className=" ">Request Consultation</button>
      </div>
    </div>
  );
};
