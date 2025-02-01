import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | Shao Xuan",
  description:
    "Shao Xuan is a developer, based in Malaysia, who loves building products and web apps that can impact millions of lives",
};

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
