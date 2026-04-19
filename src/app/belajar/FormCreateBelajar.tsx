'use client'

import { useActionState } from 'react'
import { createUser, type FormState } from './actions'

const initialState: FormState = { success: false, message: '' }

export default function UserForm() {
  const [state, formAction, isPending] = useActionState(createUser, initialState)

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nama
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Budi Santoso"
          className="w-full border rounded-md px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="budi@email.com"
          className="w-full border rounded-md px-3 py-2 text-sm"
        />
      </div>

      {/* Pesan sukses / error dari server */}
      {state.message && (
        <p className={`text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm disabled:opacity-50"
      >
        {isPending ? 'Menyimpan...' : 'Simpan User'}
      </button>
    </form>
  )
}