export default function Page({ params }: { params: { id: string } }) {
    return <div>View: {params.id}</div>
}