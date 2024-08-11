export default function Page({ params }: { params: { id: string } }) {
    return <div>New: {params.id}</div>
}