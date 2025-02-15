export default function Productlayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Featured Product Section</h1>
      {children}
    </div>
  )
}