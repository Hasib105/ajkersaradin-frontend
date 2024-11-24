// components/Navbar.tsx
import Link from "next/link";

interface Category {
  id: number;
  title: string;
  slug: string;
}

interface NavbarProps {
  categories: Category[];
}

const Navbar: React.FC<NavbarProps> = ({ categories }) => {
  return (
    <nav className="bg-red-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <Link href="/" className="text-2xl text-white font-semibold">Ajker Saradin</Link>
          </div>
        </div>
      </div>

      {/* Dynamic categories in navigation */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center space-x-4 py-4">
            <Link href="/" className="text-gray-700 hover:text-red-700">Home</Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="text-gray-700 hover:text-red-700"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;