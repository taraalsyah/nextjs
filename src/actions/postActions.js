"use server";

import {
  createPost,
  updatePost,
  deletePost,
} from "../services/postService";

import { redirect } from "next/navigation";

export async function createPostAction(formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  await createPost({ title, content });

  redirect("/");
}

export async function updatePostAction(id, formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  await updatePost(id, { title, content });

  redirect("/");
}

export async function deletePostAction(id) {
  await deletePost(id);
}