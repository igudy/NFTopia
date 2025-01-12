import { motion } from "framer-motion";

const Divider = () => {
  return (
    <div className="my-20">
      {/* First Divider: Animates from left to right with color change */}
      <motion.div
        className="w-full h-[0.5px]"
        initial={{ width: "0%", backgroundColor: "#FF90E8"  }} 
        animate={{ width: "100%",  backgroundColor: "#6B7280"}} 
        transition={{ duration: 10, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Divider;
