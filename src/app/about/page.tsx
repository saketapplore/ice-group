import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container">
      <section style={{ padding: '60px 0' }}>
        <h1 className="text-gradient">About ICE Group</h1>
        <p style={{ maxWidth: '800px', margin: '20px 0', fontSize: '1.2rem', color: '#ccc' }}>
          We are architects of experience. Since 2010, ICE Group has been redefining the landscape of corporate events.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', marginTop: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Our Story</h2>
            <p style={{ marginBottom: '20px' }}>
              Founded on the belief that every event should tell a story, we started as a small boutique agency and have grown into a global powerhouse.
              Our team consists of creative strategists, logistical wizards, and technical experts who work in harmony to deliver perfection.
            </p>
            <p>
              We believe in the power of face-to-face connection in an increasingly digital world.
            </p>
          </div>
          <div style={{ position: 'relative', height: '260px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #222' }}>
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating during an event planning session"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div style={{ background: '#111', padding: '30px', borderRadius: '20px' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Our Vision</h2>
            <p style={{ marginBottom: '20px' }}>
              To be the world&apos;s most trusted partner for transformative corporate experiences.
            </p>
            <Link href="/contact">
              <Button variant="primary">Work With Us</Button>
            </Link>
          </div>
          <div style={{ background: '#050505', padding: '30px', borderRadius: '20px', border: '1px dashed #333' }}>
            <h3 style={{ color: 'white', marginBottom: '12px' }}>Global Footprint</h3>
            <p style={{ color: '#bbb' }}>
              From regional activations to international congresses, our teams operate across key markets in the Middle East and beyond.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

