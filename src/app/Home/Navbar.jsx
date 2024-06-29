import { useState } from "react";
import { Link } from "react-router-dom"


const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [selectedOption, setSelectedOption] = useState(null);

     const toggleDropdown = () => {
          setIsOpen(!isOpen);
     };

     const handleOptionClick = (option) => {
          setSelectedOption(option);
          setIsOpen(false);
     };

     const options = ['Option 1', 'Option 2', 'Option 3'];

     return (
          <div className="bg-[#fff]">
               <div className="max-w-screen-xl mx-auto">
                    <div className="py-2 border-b flex gap-4 justify-between">
                         <div className="w-[170px]">
                              <img src="img/insame_logo.png" alt="" />
                         </div>
                         <div>
                              <ul className="flex gap-8 items-center justify-center text-[#222C34] mt-3 ">
                                   <li>
                                        <Link to="#" className="font-medium text-base leading-8 hover:text-[#AD1A11]">
                                             <div className="relative inline-block text-left">
                                                  <div>
                                                       <button
                                                            type="button"
                                                            className="inline-flex justify-between w-full  "
                                                            onClick={toggleDropdown}
                                                       >
                                                            {selectedOption || 'Select an option'}
                                                            <svg
                                                                 className="w-5 h-5 mt-1"
                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                 viewBox="0 0 20 20"
                                                                 fill="currentColor"
                                                                 aria-hidden="true"
                                                            >
                                                                 <path
                                                                      fillRule="evenodd"
                                                                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                      clipRule="evenodd"
                                                                 />
                                                            </svg>
                                                       </button>
                                                  </div>

                                                  {isOpen && (
                                                       <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                 {options.map((option, index) => (
                                                                      <button
                                                                           key={index}
                                                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                                                                           onClick={() => handleOptionClick(option)}
                                                                           role="menuitem"
                                                                      >
                                                                           {option}
                                                                      </button>
                                                                 ))}
                                                            </div>
                                                       </div>
                                                  )}
                                             </div>
                                        </Link>
                                   </li>
                                   <li>
                                        <Link to={"#"} className="font-medium text-base leading-8 hover:text-[#AD1A11]">
                                             services
                                        </Link>
                                   </li>
                                   <li>
                                        <Link to={"#"} className="font-medium text-base leading-8 hover:text-[#AD1A11]">
                                             About Us
                                        </Link>
                                   </li>
                                   <li>
                                        <Link to={"#"} className="font-medium text-base leading-8 hover:text-[#AD1A11]">

                                             Platform

                                        </Link>
                                   </li>
                                   <li>
                                        <Link to={"#"} className="font-medium text-base leading-8 hover:text-[#AD1A11]">

                                             Partners

                                        </Link>
                                        </li>
                                        <li>
                                             <Link to={"#"} className="font-medium text-base leading-8 hover:text-[#AD1A11]">


                                                  Careers

                                             </Link>
                                        </li>
                              </ul>
                         </div>
                         <div className="flex gap-4">
                              <button className="btn  bg-[#AD1A11] text-white px-5 -py-2 hover:bg-[#164B77] font-medium text-base">See our Softwer</button>
                              <button className="btn  bg-[#AD1A11] text-white px-5 -py-2 hover:bg-[#164B77] font-medium text-base">Hardware solution</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar
