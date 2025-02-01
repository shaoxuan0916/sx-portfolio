import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] p-4">
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Shao Xuan</Heading>
      <Paragraph className="max-w-xl mt-8">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a software engineer with{" "}
        <Highlight>3 years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
    </div>
  );
}
