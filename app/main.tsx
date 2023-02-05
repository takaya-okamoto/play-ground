import { Flex } from "./components";

export default function Main({ children }: { children: React.ReactNode }) {
  return <Flex mx={"10%"}>{children}</Flex>;
}
