// RootLayout.tsx
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // Import the Navbar component
import "./globals.css";

interface Category {
  id: number;
  title: string;
  slug: string;
}

// Metadata for the document
export const metadata: Metadata = {
  title: "Ajker Saradin",
  description: "Ajker Saradin",
  icons: "/favicon.ico",
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "Hasib", url: "https://ajkersaradin.com" }],
  keywords: ["News", "Sports", "Entertainment", "Politics", "Business", "Tech", "Science"],
};

// Fetch categories from API
async function fetchCategories(): Promise<Category[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await fetch(`${apiUrl}/categories/`, {
      method: "GET",
      headers: apiKey ? { "X-API-KEY": apiKey || "" } : {},
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to fetch categories: ${response.status} ${errorMessage}`);
    }

    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return an empty array if an error occurs
  }
}

// Root layout component
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const categories = await fetchCategories(); // Fetch categories on the server side

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Use the Navbar component */}
        <Navbar categories={categories} />

        {/* Main content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-6">
          {children}
        </main>

        {/* Footer */}
        <Footer categories={categories} />
      </body>
    </html>
  );
}