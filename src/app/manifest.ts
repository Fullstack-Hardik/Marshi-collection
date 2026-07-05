import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Marshi Collection',
    short_name: 'Marshi',
    description: 'Your complete fashion destination for premium Ladies Dresses, Abayas, Kids Wear, and Custom Apparel in Pakistan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#ff0a40',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
