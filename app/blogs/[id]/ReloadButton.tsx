"use client"

import { reloadBlog } from "./actions";

export default function ReloadButton({ id }: { id: string }) {
    return (
        // Server Action サーバー側関数、呼び出し可能にする
        <form action={reloadBlog}>
            <input type="hidden" name="id" value={id} />
            <button type="submit">再読み込み</button>
        </form>
    )
}

// Server Action