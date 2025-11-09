import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Nova Insurance Group - Auto Insurance in South Carolina',
  description: 'Comprehensive auto insurance coverage in Columbia, SC. Get fast quotes and excellent service from Nova Insurance Group.',
  keywords: 'auto insurance, car insurance, South Carolina, Columbia SC, vehicle insurance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
