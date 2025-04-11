import './globals.css'; // Make sure to import global CSS here (Tailwind)

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>AI Agent App</title>
      </head>
      <body className="bg-gray-50">
        <div className="max-w-4xl mx-auto py-10">
          <header className="mb-6">
            <h1 className="text-3xl font-semibold">AI Agent</h1>
          </header>
          
          {/* Main content rendered here */}
          <main>{children}</main>

          <footer className="mt-6 text-center">
            <p>&copy; 2025 AI Agent App</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
