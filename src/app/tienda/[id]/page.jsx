export default function Producto({ params }) {
  const { id } = params;
  return (
    <main>
      <h1>Artículo {id}</h1>
    </main>
  );
}
