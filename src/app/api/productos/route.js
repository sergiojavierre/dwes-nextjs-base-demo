export async function GET(request) {
  const products = [
    {
      id: 1,
      name: "curso next.js",
    },
  ];
  return Response.json(products);
}
