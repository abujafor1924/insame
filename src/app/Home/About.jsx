import { FaCircleNotch, FaDropbox } from "react-icons/fa"
import { TbBulb } from "react-icons/tb"
import "../../index.css"

const About = () => {
     return (
          <div className="bg-[#fff]">
               <div className="max-w-screen-xl mx-auto">
                    <div className="py-20 grid grid-cols-2 gap-10 ">
                         <div >
                              <div className="flex gap-2  ">
                                   <p className="w-2 h-2 bg-[#AD1A11] mt-2"></p>
                                   <p className="uppercase font-bold hover:text-[#AD1A11]">About us</p>
                              </div>
                              <h1 className="text-2xl font-semibold my-2">WHO WE ARE</h1>
                              <div className="mt-10">
                                   <div className="collapse collapse-arrow bg-base-200 mb-5">
                                        <input type="radio" name="my-accordion-2" defaultChecked />
                                        <div className="collapse-title text-xl font-medium flex"><TbBulb className="text-4xl  text-gray-300 font-thin" />   <h1 className="text-lg font-thin mt-2">OUR VISION</h1></div>
                                        <div className="collapse-content">
                                             <p>To become a significant player of IT in Bangladesh and thereby contribute to the country’s economic growth. We aim to become a leading corporation with a clear focus on each company.</p>
                                        </div>
                                   </div>
                                   <div className="collapse collapse-arrow bg-base-200">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium flex gap-2"><FaDropbox className="text-3xl  text-gray-300 font-thin" />   <h1 className="text-lg font-thin mt-1">OUR VALUES</h1></div>
                                        <div className="collapse-content">
                                             <p>The Company Values of ''INSAME" were established with the creation of our Group of Companies. They reflect not only who we are and how we operate, but, even more, they constitute a fundamental unswerving philosophy</p>
                                        </div>
                                   </div>
                                   <div className="collapse collapse-arrow bg-base-200">
                                        <input type="radio" name="my-accordion-2" />
                                        <div className="collapse-title text-xl font-medium flex gap-2"><FaCircleNotch className="text-3xl  text-gray-300 font-thin" />   <h1 className="text-lg font-thin mt-1">OUR MISSION</h1></div>
                                        <div className="collapse-content">
                                             <p>
                                                  To become a "trusted partner" with our customers in an ever-changing Digitalizing Environment. Our mission involves surpassing the demands of our customers and stakeholders, through the quality and innovation of our products and services.
                                             </p>
                                        </div>
                                   </div>
                              </div>

                         </div>
                         <div>
                              <h1 className="text-2xl font-semibold mb-4">HELLO WE, ARE INSAME</h1>
                              <p className="leading-7">
                                   Founded in 2011.Insame Technologies Limited, a leading IT company, has been at the lead of Technological Innovation for over 13 years. Specializing in a wide range of services, Insame has established itself as a trusted provider in various sectors. With over a decade of experience, Insame has consistently adapted to industry changes, delivering high-quality solutions and fostering long-lasting partnerships.
                              </p>
                              <div className="flex gap-6 my-4">
                                   <p className="text-2xl font-semibold">We Make Your Business Smoother</p>
                                   <p className="w-4 h-4 bg-[#AD1A11] mt-3"></p>
                              </div>
                              <p className="font-bold">Quality is our Priority</p>
                              <div className="flex gap-4 border rounded-lg p-5 mt-5">
                                   <p className="large-number ">13 </p>
                                   <p className="flex flex-col items-center justify-center text-2xl font-semibold">YEARS OF <br />
                                        DIGITAL EXPERIENCE</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default About
