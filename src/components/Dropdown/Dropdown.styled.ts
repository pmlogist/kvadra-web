import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { styled } from "@/lib/styles/stitches";

const Arrow = styled(DropdownMenu.Arrow, {
  fill: "white",
});

const baseMenuStyles = {
  minWidth: 120,
  backgroundColor: "white",
  borderRadius: 6,
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
};

const Content = styled(DropdownMenu.Content, { ...baseMenuStyles });

const SubContent = styled(DropdownMenu.SubContent, { ...baseMenuStyles });

export const BaseDropdownMenu = {
  Arrow,
  Content,
  SubContent,
};
