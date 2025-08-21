import './globals.css';
import FooterLogo from '@/components/footer/FooterLogo';
import RevealFooter from '@/components/footer/RevealFooter';

export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <RevealFooter
        logoSrc="/images/logo.png"
        logoAlt="Company Logo"
        logoWidth={50}
        logoHeight={50}
        columns={[
          { items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] },
          { items: [{ label: 'Terms', onClick: () => {} }, { label: 'Policy', onClick: () => {} }] }
        ]}
        copyrightText="© 2023 Company Name"
      />
    </html>
  );
}