"use client";
import Advertisement from '@/components/Advertisement';
import ContentTextbox from '@/components/textbox/ContentTextbox';

export default function HomePage() {
  return (
    <div>
      <ContentTextbox
        title={<h1>Welcome to Our Site</h1>}
        description={<p>Discover amazing content.</p>}
      >
        <Advertisement />
      </ContentTextbox>
    </div>
  );
}