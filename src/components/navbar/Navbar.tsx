import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@heroui/react";
import Search from "../search/Search";


export default function NavbarComponent() {
  return (
    <Navbar shouldHideOnScroll className="bg-background  w-[90%] mx-auto  py-2 flex justify-between items-center">
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">Image Gallery</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Search />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
