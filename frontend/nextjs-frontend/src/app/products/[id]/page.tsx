// this uses the concept of dynamic routing in Next.js i.e. using square brackets [] to create dynamic routes.
// you can test the dynamic routing by visiting http://localhost:3000/products/car or http://localhost:3000/products/iphone

export default async function Product({params}: {params: {id: string}}) {
  const { id } = await params;
  return <h1>Product: {id}</h1>;
}