// サーバー側でのみ動作する
"use server";

// 指定したパスのキャッシュを削除
import { revalidatePath } from "next/cache";

export async function reloadBlog(formData: FormData) {
    const id = formData.get("id") as string;
    revalidatePath(`/blogs/${id}`);
}