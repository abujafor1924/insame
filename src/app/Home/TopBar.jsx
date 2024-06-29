import { FaBlog, FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbMessageCircle2Filled } from "react-icons/tb";
const TopBar = () => {
     return (
          <div className="bg-[#fff]">
               <div className="max-w-screen-xl mx-auto">
                    <div className="border-b py-2">
                         <ul className="flex justify-end gap-4">
                              <li className="flex gap-1 ">
                                   <FaFile className="mt-1" />
                                   <Link to={"#"}>Resources</Link>
                              </li>
                              <li className="flex gap-1 ">
                                   <FaBlog className="mt-1" />
                                   <Link to={"#"}>Blog</Link>
                              </li>
                              <li className="flex gap-1 ">
                                   <TbMessageCircle2Filled className="mt-1" />
                                   <Link to={"#"}>Customer Center</Link>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>


     )
}

export default TopBar
