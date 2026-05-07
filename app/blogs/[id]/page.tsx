async function BlogContent({ params }: { params: Promise<{ id: string }> }) {
    // next15以降、動的ルートのパラメータは非同期で取得する必要がある。
    // await で受け取る。
    const { id } = await params;
    return (
        <div>
            <h1>BlogDetailページ</h1>
            <p>ID: {id}</p>
        </div>
    )
}

export default function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
    return <BlogContent params={params} />
}