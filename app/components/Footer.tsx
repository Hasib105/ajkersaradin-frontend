import React from "react";
import Link from "next/link"; // Import Link from next/link

interface Category {
  id: number;
  title: string;
  slug: string;
}

interface FooterProps {
  categories: Category[];
}

const Footer: React.FC<FooterProps> = ({ categories }) => {
  const displayedCategories = categories.slice(0, 3); // Show only the first 3 categories

  return (
    <footer>
      {/* Red Row with Logo */}
      <div className="bg-red-700 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-2xl text-white font-semibold">Newssite</span>
        </div>
      </div>

      {/* Gray Background Row */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h5 className="font-bold mb-4">About Us</h5>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:underline">Our Story</Link></li>
                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>

            {/* Dynamic Categories */}
            <div>
              <h5 className="font-bold mb-4">Categories</h5>
              <ul className="space-y-2">
                {displayedCategories.map((category) => (
                  <li key={category.id}>
                    <Link href={`/category/${category.slug}`} className="hover:underline">
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h5 className="font-bold mb-4">Follow Us</h5>
              <ul className="flex space-x-4">
                <li><Link href="#"><img src="facebook.png" alt="Facebook" className="w-6 h-6" /></Link></li>
                <li><Link href="#"><img src="twitter.png" alt="Twitter" className="w-6 h-6" /></Link></li>
                <li><Link href="#"><img src="instagram.png" alt="Instagram" className="w-6 h-6" /></Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="font-bold mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-600 pt-4 text-center">
            <p>© 2024 Newssite. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
