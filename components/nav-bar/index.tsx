import Link from "next/link";

const NavBarItem = ({ route, name }) => {
  return (
    <li>
      <Link href={route} className="text-orange-800 hover:underline">
        {name}
      </Link>
    </li>
  );
};

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <NavBarItem route="/" name="Home" />
        <NavBarItem route="/reviews" name="Reviews" />
        <NavBarItem route="/about" name="About" />
      </ul>
    </nav>
  );
};

export default NavBar;
