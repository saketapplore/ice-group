import Button from '@/components/Button';
import Image from 'next/image';

export default function NewsletterPage() {
    return (
        <div className="container">
            <section style={{ padding: '80px 0', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '40px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'left' }}>
                        <h1 className="text-gradient">Stay Updated</h1>
                        <p style={{ margin: '20px 0 30px', color: '#ccc', fontSize: '1.2rem' }}>
                            Subscribe to our newsletter for the latest trends in corporate events and exclusive insights.
                        </p>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '420px' }}>
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                style={{
                                    padding: '16px',
                                    borderRadius: '50px',
                                    border: '1px solid #333',
                                    background: '#111',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                            <div>
                                <Button variant="primary">Subscribe Now</Button>
                            </div>
                        </form>
                    </div>

                    <div style={{ position: 'relative', height: '260px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #222' }}>
                        <Image
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                            alt="Audience at a corporate event taking notes"
                            fill
                            sizes="(min-width: 1024px) 40vw, 100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

