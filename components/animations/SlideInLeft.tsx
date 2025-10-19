"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInLeftProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const SlideInLeft = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: SlideInLeftProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInLeft;
