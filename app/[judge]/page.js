export function generateStaticParams() {
  return [{ judge: 'shivani-parasnis' }, { judge: 'george-garrastregui' }, { judge: 'jeff-minnichbach' }]
}

export default function Page({ params }) {
  return <div>{params.judge}</div>
}
