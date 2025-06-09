import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TextAnimate = React.forwardRef(
  (
    {
      children,
      className,
      by = "word",
      as: Tag = "div",
      variants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: (i = 0) => ({
          filter: "blur(0px)",
          opacity: 1,
          transition: {
            delay: i * 0.05,
            duration: 0.4,
            ease: "easeOut",
          },
        }),
      },
      ...props
    },
    ref
  ) => {
    // If children is not a string, animate it as a single block.
    if (typeof children !== "string") {
      return (
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={variants}
          className={className}
        >
          {children}
        </motion.div>
      );
    }

    const text = children;
    const parts = React.useMemo(() => {
      if (by === "word") {
        return text.split(" ");
      }
      return text.split("");
    }, [text, by]);

    return (
      <Tag className={cn("overflow-hidden", className)} ref={ref} {...props}>
        <span className="sr-only">{text}</span>
        <motion.span
          aria-hidden
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {parts.map((part, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={variants}
              custom={i}
              style={{ paddingRight: by === "word" ? "0.25em" : "0" }}
            >
              {part}
            </motion.span>
          ))}
        </motion.span>
      </Tag>
    );
  }
);

TextAnimate.displayName = "TextAnimate";

export { TextAnimate }; 