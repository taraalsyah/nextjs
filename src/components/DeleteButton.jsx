"use client";

import { deletePostAction } from "../actions/postActions";

export default function DeleteButton({ id }) {
  return (
    <button onClick={() => deletePostAction(id)}>
      Delete
    </button>
  );
}