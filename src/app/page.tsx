import { getPosts } from "../services/postService";
import FormPost from "../components/FormPost";
import DeleteButton from "../components/DeleteButton";
import { createPostAction } from "../actions/postActions";
import Link from "next/link";
import { Post } from "@prisma/client";


export default async function Page() {
  const posts: Post[] = await getPosts();
  

  return (
    <div>
      <h1>CRUD MySQL</h1>

      {/* CREATE */}
      <FormPost action={createPostAction} />

      {/* READ */}
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>

          <Link href={`/edit/${post.id}`}>Edit</Link>

          <DeleteButton id={post.id} />
        </div>
      ))}
    </div>
  );
}