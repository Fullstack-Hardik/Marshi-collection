import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Marshi Collection and our journey.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
        About Marshi Collection
      </h1>
      
      <div className="prose prose-invert prose-pink max-w-none text-gray-300 space-y-6 text-lg text-center">
        <p>
          Welcome to Marshi Collection, your ultimate destination for premium fashion. 
          We believe in bringing elegance and style to everyone, offering a carefully curated selection of Ladies Dresses, Gents Wear, Kids Clothing, Abayas, and Exquisite Jewelry.
        </p>
        <p>
          Our journey started with a simple vision: to make high-quality, fashionable clothing accessible to our community. Every piece in our collection is handpicked to ensure the finest quality, comfort, and trend-setting design.
        </p>
        <p>
          Whether you are looking for everyday wear, a special occasion outfit, or the perfect accessory to complete your look, Marshi Collection has something for you.
        </p>
      </div>
    </div>
  );
}
