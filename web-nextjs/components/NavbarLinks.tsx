import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Button,
  Box,
  MenuItem,
} from "@chakra-ui/react";

const NavbarLinks = () => {
  return (
    <Box display="flex" flexWrap="wrap">
      <Box>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} variant="ghost">
            Product
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup title="Notion For" type="radio">
              <MenuItemOption>Teams</MenuItemOption>
              <MenuItemOption>Enterprise</MenuItemOption>
              <MenuItemOption>Remote Work</MenuItemOption>
              <MenuItemOption>Personal Use</MenuItemOption>
              <MenuItemOption>Startups</MenuItemOption>
              <MenuItemOption>Students</MenuItemOption>
              <MenuItemOption>Educators</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Switch From" type="checkbox">
              <MenuItemOption>Evernote</MenuItemOption>
              <MenuItemOption>Confluence</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} variant="ghost">
            Download
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuItem>iOS & Android</MenuItem>
            <MenuItem>Mac & Windows</MenuItem>
            <MenuItem>Web Clipper</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} variant="ghost">
            Enterprise
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuItem>Enterprise</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} variant="ghost">
            Resources
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuItem>Resources</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} variant="ghost">
            Pricing
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuItem>Pricing</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} variant="ghost">
            Careers
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuItem>Careers</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default NavbarLinks;
