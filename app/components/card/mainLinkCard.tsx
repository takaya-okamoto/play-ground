import { MainLinkType } from "@/app/types/card/mainLinkType";
import { Flex, Link, Text } from "app/components/index";
import NextLink from "next/link";

export function MainLinkCard(props: MainLinkType) {
  return (
    <Link as={NextLink} href={props.link} _hover={{ textDecoration: "none" }}>
      <Flex
        p={"1rem"}
        w={"145px"}
        shadow={"md"}
        direction={"column"}
        alignItems={"center"}
        borderWidth={"2px"}
        borderRadius={"5px"}
        borderColor={"gray.400"}
        transition={".4s"}
        _hover={{ borderColor: "blue.600", transform: "scale(1.02)" }}
      >
        <props.icon size={"80px"} />
        <Text
          textAlign={"center"}
          mt={"1rem"}
          w={"130px"}
          color={"blackAlpha.800"}
          fontWeight={"bold"}
        >
          {props.name}
        </Text>
      </Flex>
    </Link>
  );
}
