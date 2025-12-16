import Button from '@/components/Button';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <div className="container">
            <section style={{ padding: '60px 0' }}>
                <h1 className="text-gradient" style={{ marginBottom: '40px' }}>Contact Us</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
                    {/* Contact Info + Visual */}
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Let&apos;s Plan Your Next Event</h2>
                        <p style={{ color: '#ccc', marginBottom: '30px', lineHeight: '1.6' }}>
                            Ready to create something unforgettable? Reach out to our team of experts today.
                        </p>

                        <div style={{ position: 'relative', height: '220px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #222', marginBottom: '30px' }}>
                            <Image
                                src="https://images.unsplash.com/photo-1521737604893-ff996a0ec29e?auto=format&fit=crop&w=1200&q=80"
                                alt="Client meeting with event planners"
                                fill
                                sizes="(min-width: 1024px) 40vw, 100vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '10px' }}>Headquarters</h3>
                            <p style={{ color: '#888' }}>123 Corporate Plaza, Suite 400<br />New York, NY 10001</p>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '10px' }}>Email Used</h3>
                            <p style={{ color: '#888' }}>info@icegroup.com</p>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '10px' }}>Phone</h3>
                            <p style={{ color: '#888' }}>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form style={{ background: '#111', padding: '40px', borderRadius: '24px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: 'white', marginBottom: '8px' }}>Name</label>
                            <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #333', background: '#000', color: 'white' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: 'white', marginBottom: '8px' }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #333', background: '#000', color: 'white' }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: 'white', marginBottom: '8px' }}>Message</label>
                            <textarea rows={4} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #333', background: '#000', color: 'white' }}></textarea>
                        </div>
                        <Button variant="primary">Send Message</Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
