"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const blogsData: Blog[] = [
  {
    title: "Using Resend with a NestJS Backend: A Step-by-Step Guide",
    description:
      "This guide will walk you through the process of using Resend with a NestJS backend.",
    href: "https://medium.com/@shaoxuandev10/using-resend-with-a-nestjs-backend-a-step-by-step-guide-54a449d1b3d4?sk=d77140c983ecbb2abe4ef8a77a4d92a8",
    date: "2025-01-24",
    slug: "using-resend-with-a-nestjs-backend-a-step-by-step-guide",
    image: "/images/blogs/blog-1.jpeg",
    tags: ["web development", "nestjs", "resend"],
  },
  {
    title: "Master Onboarding: Increase User Stickiness and Reduce Churn",
    description:
      "Great onboarding isn't just a nice-to-have; it's what turns first-time users into loyal customers.",
    href: "https://shaoxuandev10.medium.com/master-onboarding-increase-user-stickiness-and-reduce-churn-148ce711ffe0?sk=0d83dcbacee08f2463a061065067bcbf",
    date: "2025-02-01",
    slug: "master-onboarding-increase-user-stickiness-and-reduce-churn",
    image: "/images/blogs/blog-2.jpg",
    tags: ["web development", "nestjs", "resend"],
  },
];

export const Blogs = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="max-w-5xl mx-auto my-10">
      {blogsData.map((blog, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Link
            key={`blog-${index}`}
            href={blog.href}
            target="_blank"
            className="relative my-10 block"
            onMouseEnter={() => setHovered(blog.slug)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence mode="wait">
              {hovered === blog.slug && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1.05,
                    scaleY: 1.2,
                  }}
                  exit={{
                    opacity: 0,

                    scaleX: 0.95,
                    scaleY: 0.95,
                  }}
                  className="absolute z-0 pointer-events-none bg-gray-50 inset-0 h-full w-full rounded-md "
                />
              )}
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20">
              <Image
                src={blog.image}
                alt="thumbnail"
                height="200"
                width="200"
                objectFit="cover"
                className="rounded-md object-cover h-40 w-60"
              />
              <div className="flex flex-col col-span-3">
                <Heading className="text-lg md:text-lg lg:text-lg">
                  {blog.title}
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2">
                  {blog.description}
                </Paragraph>
                <div className="flex space-x-2 flex-wrap mt-4">
                  {blog.tags?.map((tag, index) => (
                    <span
                      key={`tag-${index}`}
                      className="text-xs px-1 py-0.5 text-secondary border border-neutral-200 bg-white rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pl-1 mt-auto text-xs text-gray-500">
                  <div className="flex items-center">
                    <span className="mr-2">📅</span>
                    {new Date(blog.date).toDateString()}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
