import { Drawer, DrawerContent } from "@chakra-ui/react";

import { SidebarContent } from "./AppLayoutSidebar";

export const AppLayoutDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer
      autoFocus={false}
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      returnFocusOnClose={false}
      onOverlayClick={onClose}
      size="full"
    >
      <DrawerContent>
        <SidebarContent onClose={onClose} />
      </DrawerContent>
    </Drawer>
  );
};
