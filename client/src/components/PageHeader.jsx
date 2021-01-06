

export default function PageHeader({ title }) {
  return (
    <header style={{ marginBottom: "0.25rem", fontSize: "1.5rem", letterSpacing: "0.5rem" }}>
      <h1>{title}</h1>
      {/* <PageDesc /> */}
    </header>
  )
}