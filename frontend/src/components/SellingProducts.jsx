// // // import ProductCard from "./productCard";
// // import coat_img from "../assets/images/card_images/coat.png";
// // import bag_img from "../assets/images/card_images/bag.png";
// // import cpu_img from "../assets/images/card_images/cpu.png";
// // import bookself_img from "../assets/images/card_images/bookself.png";

// export default function SellingProduct() {
//   return (
//     <div>
//       <div className="container-x pt-12">
//         <div className="flex gap-4 items-center">
//           <span className="bg-primary py-5 px-[10px] rounded"></span>
//           <span className="text-primary font-semibold text-base">
//             This Month
//           </span>
//         </div>

//         <div className="flex justify-between items-center text-center mt-5 ">
//           <div className="flex items-center gap-5 ">
//             <p className="text-4xl font-semibold ">Best Selling Products</p>
//           </div>

//           <div className="bg-primary w-40 h-14 rounded text-white text-center pt-4 -mt-3 hover:cursor-pointer">
//             <button>View All</button>
//           </div>
//         </div>
//       </div>
//       <div className="flex container-x gap-7 pt-7">
//         <ProductCard
//           cardImage={coat_img}
//           cardName="The north coat"
//           discountedRate="$260"
//           oldRate="$360"
//           percent="65"
//         />
//         <ProductCard
//           cardImage={bag_img}
//           cardName="Gucci duffle bag"
//           discountedRate="$960"
//           oldRate="$1160"
//           percent="65"
//         />
//         <ProductCard
//           cardImage={cpu_img}
//           cardName="RGB liquid CPU Cooler"
//           discountedRate="$160"
//           oldRate="$170"
//           percent="65"
//         />
//         <ProductCard
//           cardImage={bookself_img}
//           cardName="Small BookSelf"
//           discountedRate="$300"
//           percent="65"
//         />
//       </div>
//     </div>
//   );
// }