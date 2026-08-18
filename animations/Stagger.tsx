export const StaggerChildren = () => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut",
      },
    },
  };
};
