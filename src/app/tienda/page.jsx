import Link from "next/link";
//con use client se va a ejecutar en el navegador del cliente
/*
"use client";
import { useEffect, useState } from "react";

export default function Tienda() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then((res) => res.json())
      .then((response) => setProductos(response));
  }, []);

  return (
    <main>
      <h1>Productos</h1>
      {productos.map((producto) => {
        return (
          <Link key={producto.id} href={`/tienda/${producto.id}`}>
            {producto.name}
          </Link>
        );
      })}
    </main>
  );
}
*/

//con este enfoque lo devuelve renderizado desde el servidor
const fetchProductos = () => {
  return fetch("http://localhost:3000/api/productos").then((res) => res.json());
};

export default async function Tienda() {
  const productos = await fetchProductos();
  return (
    <main>
      <h1>Productos</h1>
      {productos.map((producto) => {
        return (
          <Link key={producto.id} href={`/tienda/${producto.id}`}>
            {producto.name}
          </Link>
        );
      })}
    </main>
  );
}
