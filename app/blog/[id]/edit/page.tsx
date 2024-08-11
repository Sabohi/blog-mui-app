export default function Page({ params }: { params: { id: string } }) {
    return <div>Edit: {params.id}</div>
}