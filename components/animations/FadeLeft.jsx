"use client";

import { motion } from "framer-motion";

export default function FadeLeft({
  children,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}