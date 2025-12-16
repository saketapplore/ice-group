import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import styles from './services.module.css';

export default function ServicesPage() {
  const services = [
    {
      title: "Conferences & Summits",
      description: "From venue selection to keynote speaker management, we handle every detail of your large-scale industry gatherings.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Product Launches",
      description: "Create buzz and excitement with immersive launch events that showcase your innovation to the world.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Award Ceremonies",
      description: "Celebrate excellence with gala dinners and award shows that honor achievement in style.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Incentive Programs",
      description: "Motivate your team with unforgettable travel experiences and luxury retreats.",
      image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Exhibitions & Trade Shows",
      description: "Design impactful booths and manage logistics for a standout presence on the trade floor.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Virtual & Hybrid Events",
      description: "Seamlessly blend physical and digital experiences to reach a global audience.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="container">
      <section style={{ padding: '60px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '40px', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 className="text-gradient" style={{ marginBottom: '16px' }}>Our Services</h1>
            <p style={{ color: '#ccc', maxWidth: '560px' }}>
              End-to-end event strategy, design, production, and delivery for brands that expect more than just a venue and a stage.
            </p>
          </div>
          <div style={{ position: 'relative', height: '220px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #222' }}>
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
              alt="Vibrant corporate event with stage lighting"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.hoverOverlay}>
                  <p>{service.description}</p>
                </div>
              </div>
              <div className={styles.body}>
                <h3>{service.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Need a custom solution?</h2>
          <Link href="/contact">
            <Button variant="outline">Consult Our Experts</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

