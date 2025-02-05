import { Blog } from "@/types/blog";

export const blogs: Blog[] = [
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

export const blogsData = blogs.reverse();
