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
    tags: ["web development", "ux-design", "saas"],
  },
  {
    title:
      "Step-by-Step Guide: Enhancing UX with Parallel Routes & Interceptors in Next.js",
    description:
      "Learn how to combine Next.js Parallel Routes and Interceptors to create seamless and dynamic user experiences.",
    href: "https://shaoxuandev10.medium.com/step-by-step-guide-enhancing-ux-with-parallel-routes-interceptors-in-next-js-9bac4a34e4ff?sk=7b9de9f376cc8b12e85e010982aed34d",
    date: "2025-02-11",
    slug: "step-by-step-guide-enhancing-ux-with-parallel-routes-interceptors-in-next-js",
    image: "/images/blogs/blog-3.png",
    tags: ["web development", "nextjs", "frontend"],
  },
];

export const blogsData = blogs.reverse();
