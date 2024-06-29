import { FaArrowRight } from "react-icons/fa"


const SmartMod = () => {
     return (
          <div className="bg-[#fff]">
               <div className="max-w-screen-xl mx-auto">
                    <div >
                         <div className="grid grid-cols-2">
                              <div className="mt-20" >
                                   <h1 className="text-3xl font-medium">ERP Simplified Smart. Modern.</h1>
                                   <p className="text-xl my-2">One Platform. Many Mission</p>
                                   <div className="w-20 h-1 bg-[#AD1A11]"></div>
                                   <p className="text-lg my-5">Insame Technologies Limited, a leading IT company, has been at the lead of Technological Innovation for over 13 years. Specializing in a wide range of services, Insame has established itself as a trusted provider in various sectors.

                                        See Our Approach
                                   </p>
                                   <button className="btn  bg-[#AD1A11] text-white px-5 -py-2 hover:bg-[#164B77] font-medium text-base">See our Approach</button>
                              </div>
                              <div className=" mt-20">
                              <img className="h-full w-full" src="../../../public/img/1.png" alt="" />
                         </div>
                            
                         </div>
                         
                        
                    </div>
                    <div className="flex gap-8 -mt-16">
                                   <div className={`bg-[#406F81] w-48 h-48 flex flex-col items-center justify-center`}>
                                        <div className="">
                                             <img className="mx-auto" src="img/software-60.png" alt="" />
                                             <div className="flex gap-2 text-center">
                                                  <p className="text-lg font-medium text-white">Software</p>
                                                  <FaArrowRight className="mt-2 text-white" />
                                             </div>
                                        </div>
                                   </div>
                                   <div className={`bg-[#794694] w-48 h-48 flex flex-col items-center justify-center`}>
                                        <div className="">
                                             <img className="mx-auto" src="img/hardware-60.png" alt="" />
                                             <div className="flex gap-2 text-center">
                                                  <p className="text-lg font-medium text-white">Hardware</p>
                                                  <FaArrowRight className="mt-2 text-white" />
                                             </div>
                                        </div>
                                   </div>
                                   <div className={`bg-[#627EA2] w-48 h-48 flex flex-col items-center justify-center`}>
                                        <div className="">
                                             <img className="mx-auto" src="img/marketing-60.png" alt="" />
                                             <div className="flex gap-2 text-center">
                                                  <p className="text-lg font-medium text-white">Marketing</p>
                                                  <FaArrowRight className="mt-2 text-white" />
                                             </div>
                                        </div>
                                   </div>
                                   <div className={`bg-[#1495EF] w-48 h-48 flex flex-col items-center justify-center`}>
                                        <div className="">
                                             <img className="mx-auto" src="img/cloud-60.png" alt="" />
                                             <div className="flex gap-2 text-center">
                                                  <p className="text-lg font-medium text-white">Cloud</p>
                                                  <FaArrowRight className="mt-2 text-white" />
                                             </div>
                                        </div>
                                   </div>
                              </div>

               </div>
          </div>
     )
}

export default SmartMod
