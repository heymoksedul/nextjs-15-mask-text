"use client";
import useMousePosition from "@/utils/maskText/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./mask-text.module.scss";

export default function MaskText({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const mouseX = x ?? 0;
  const mouseY = y ?? 0;

  const size = isHovered ? 400 : 20;

  return (
    <div>
      <motion.div
        className={styles.maskBox}
        animate={{
          top: `${mouseY - size / 2}px`,
          left: `${mouseX - size / 2}px`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      ></motion.div>

      <div className={styles.maskBody}>
        {children}
        <div
          className={styles.mask}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
