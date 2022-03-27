import React from "react";
import Link from "../Link/Link";

const NavBar = () => {
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "shop", link: "/shop" },
    { id: 3, name: "deals", link: "/deals" },
    { id: 4, name: "contacts", link: "/contacts" },
    { id: 5, name: "cupons", link: "/cupons" },
  ];
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
