import styles from "./nav.module.css";
import Link from "next/link";

const routes = [
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "Tienda",
    path: "/tienda",
  },
  {
    label: "Contacto",
    path: "/contacto",
  },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {routes.map((route) => {
        return (
          <Link key={route.label} href={route.path}>
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
}
