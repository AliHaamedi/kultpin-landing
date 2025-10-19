"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInRightProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const SlideInRight = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: SlideInRightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInRight;
