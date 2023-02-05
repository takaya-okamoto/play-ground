import { Flex, SimpleGrid } from "./components";
import { useMainLinks } from "@/app/hooks/logic/useMainLinks";
import { MainLinkCard } from "@/app/components/card/mainLinkCard";

export default function Home() {
  const mainLinks = useMainLinks();
  return (
    <Flex direction={"column"} gap={5}>
      <SimpleGrid columns={[2, 4, 8]} spacing={"2rem"}>
        {mainLinks.map((link, index) => {
          return (
            <MainLinkCard
              key={index}
              name={link.name}
              link={link.link}
              icon={link.icon}
            />
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}
