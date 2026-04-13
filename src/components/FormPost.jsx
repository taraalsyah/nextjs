"use client";

export default function FormPost({ action, defaultData = {} }) {
  return (
    <form action={action}>
      <input
        name="title"
        defaultValue={defaultData?.title}
        placeholder="Title"
      />

      <textarea
        name="content"
        defaultValue={defaultData?.content}
        placeholder="Content"
      />

      <button type="submit">Save</button>
    </form>
  );
}