"use client"
import ContentTextbox from '@/components/textbox/ContentTextbox';
import HorizontalTextbox from '@/components/textbox/HorizontalTextbox';
import SimpleFooter from '@/components/footer/SimpleFooter';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section id="hero" className="bg-[#F5F7FA] p-8">
        <ContentTextbox
          title={<h1 className="text-4xl font-bold">Welcome to Our Service</h1>}
          description={<p className="text-lg">Delivering simple solutions for your needs.</p>}
          className="text-center"
        >
          <Image src="/images/logo.svg" alt="Company Logo" width={150} height={150} />
        </ContentTextbox>
      </section>

      <section id="about" className="bg-white p-8">
        <HorizontalTextbox
          title={<h2 className="text-3xl font-bold">About Us</h2>}
          description={<p className="text-lg">We are committed to providing the best service.</p>}
          className="text-center"
        />
      </section>

      <section id="terms" className="bg-white p-8">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">Terms of Service</h2>}
          description={<p className="text-lg">Brief overview of our terms.</p>}
          className="text-center"
        >
          <Link href="#" className="text-blue-500">Read full terms</Link>
        </ContentTextbox>
      </section>

      <section id="policy" className="bg-white p-8">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">Privacy Policy</h2>}
          description={<p className="text-lg">Summary of our privacy policy.</p>}
          className="text-center"
        >
          <Link href="#" className="text-blue-500">Read full policy</Link>
        </ContentTextbox>
      </section>

      <section id="contact" className="bg-[#F5F7FA] p-8">
        <ContentTextbox
          title={<h2 className="text-3xl font-bold">Contact Us</h2>}
          description={<p className="text-lg">We&apos;d love to hear from you. Fill in the form below!</p>}
          className="text-center"
        >
          <form className="flex flex-col items-center">
            <input type="text" placeholder="Name" className="mb-4 p-2 border rounded" required />
            <input type="email" placeholder="Email" className="mb-4 p-2 border rounded" required />
            <textarea placeholder="Your Message" className="mb-4 p-2 border rounded" required></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
          </form>
        </ContentTextbox>
      </section>

      <SimpleFooter
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={50}
        columns={[
          { items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] },
          { items: [{ label: 'Terms', onClick: () => {} }, { label: 'Policy', onClick: () => {} }] },
        ]}
        copyrightText="© 2023 Company Name"
        privacyButtonClassName="text-blue-500"
      />
    </div>
  );
}