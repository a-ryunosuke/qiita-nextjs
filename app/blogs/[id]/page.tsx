import { Suspense } from "react";
import axios from "axios";
import Image from "next/image";
import { MicrocmsContent } from "@/domain/Article";
import ReloadButton from "./ReloadButton"

async function BlogContent({ params }: { params: Promise<{ id: string }> }) {
    // next15以降、動的ルートのパラメータは非同期で取得する必要がある。
    // await で受け取る。
    const { id } = await params;

    const response = await axios.get<MicrocmsContent>(
        `https://f5i8lb9k4u.microcms.io/api/v1/blogs/${id}`,
        {
            headers: {
                "X-MICROCMS-API-KEY": `${process.env.MICROCMS_API_KEY}`,
            },
        }
    )

    const blog = response.data;

    return (
        <article>
            <Image
                width={600}
                height={400}
                alt={blog.title}
                src={blog.eyecatch.url}
            />
            <h2>{blog.title}</h2>
            {/* dangerouslySetInnerHTML reactでHTML文字列を直接かける */}
            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            <ReloadButton id={id} />
        </article>
    )
}

export default function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
    return (
        <div>
            <h1>ブログ詳細</h1>
            <Suspense fallback={
                <div>Loading...</div>
            }>
                <BlogContent params={params}></BlogContent>
            </Suspense>
        </div>
    )
}