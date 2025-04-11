'use client'
import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('http://127.0.0.1:5000/get_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      })

      const data = await res.json()
      setResponse(data.response)
    } catch (error) {
      setResponse('Error fetching data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Crypto Report Chat</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Enter your query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {response && (
        <div className="w-full max-w-2xl mt-6 bg-white p-4 rounded-lg shadow-md whitespace-pre-wrap">
          <h2 className="text-xl font-semibold mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </main>
  )
}
