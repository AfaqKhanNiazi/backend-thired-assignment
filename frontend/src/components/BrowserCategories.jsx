// import { CiMobile3 } from "react-icons/ci";
// import { RiComputerLine } from "react-icons/ri";
// import { BsSmartwatch } from "react-icons/bs";
// import { CiCamera } from "react-icons/ci";
// import { FiHeadphones } from "react-icons/fi";
// import { TbDeviceGamepad } from "react-icons/tb";
// import { BsArrowLeftShort } from "react-icons/bs";
// import { BsArrowRightShort } from "react-icons/bs";

// function Test(Props) {
//   return (
//     <div className=" border border-[#0000004D] w-[170px] h-36 rounded flex flex-col text-center items-center pt-6 gap-4">
//       <span className="text-6xl">{Props.CategoriesIcon}</span>
//       <p className="font-medium">{Props.CategoriesName}</p>
//     </div>
//   );
// }

// export default function BrowserCategories() {
//   return (
//     <>
//       <div className="container-x mt-32">
//         <div className="flex gap-4 items-center">
//           <span className="bg-primary py-5 px-[10px] rounded"></span>
//           <span className="text-primary font-semibold text-base">
//             Categories
//           </span>
//         </div>

//         <div className="flex justify-between items-center text-center mt-5 ">
//           <div className="flex items-center gap-5 ">
//             <p className="text-4xl font-semibold ">Browse By Category</p>
//           </div>

//           <div className=" flex  gap-2 text-4xl -mt-3">
//             <BsArrowLeftShort className="arrow" />
//             <BsArrowRightShort className="arrow" />
//           </div>
//         </div>
//       </div>
//       <div className="flex container-x my-5 pt-10 gap-8">
//         <Test CategoriesIcon={<CiMobile3 />} CategoriesName="Phones" />
//         <Test CategoriesIcon={<RiComputerLine />} CategoriesName="Computers" />
//         <Test CategoriesIcon={<BsSmartwatch />} CategoriesName="SmartWatch" />
//         <Test CategoriesIcon={<CiCamera />} CategoriesName="Camera" />
//         <Test CategoriesIcon={<FiHeadphones />} CategoriesName="HeadPhones" />
//         <Test CategoriesIcon={<TbDeviceGamepad />} CategoriesName="Gaming" />
//       </div>
//       <div className="border-b border-y-[#0000004D] mb-5 container-x pt-10"></div>
//     </>
//   );
// }