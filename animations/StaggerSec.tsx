export const StaggerSec = {
  hidden: { y: 50, opacity: 0 },
  visible: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};
