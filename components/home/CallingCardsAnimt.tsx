// "use client";
// import CallingCard from "@/constants/container/CallingCard";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// const CallingCardsAnimt = ({ callingCards }: any) => {
//   const cardVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeInOut" },
//     },
//   };

//   return (
//     <section className="relative bg-gray-100">
//       <div className="sticky h-screen">
//         {callingCards?.map((data: any, index: number) => {
//           const controls = useAnimation();
//           const { ref, inView } = useInView({
//             threshold: 0.5,
//             triggerOnce: false,
//           });

//           useEffect(() => {
//             if (inView) {
//               controls.start("visible");
//             } else {
//               controls.start("hidden");
//             }
//           }, [inView, controls]);

//           return (
//             <motion.div
//               key={index}
//               ref={ref}
//               variants={cardVariants}
//               initial="hidden"
//               animate={controls}
//               className="h-screen flex items-center justify-center"
//             >
//               <CallingCard callingCardData={data} />
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default CallingCardsAnimt;
