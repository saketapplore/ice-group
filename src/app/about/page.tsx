"use client";

import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function AboutPage() {
  return (
    <div className="container">
      <section style={{ padding: '60px 0' }}>
        <AnimateOnScroll animation="fadeInUp" delay={0.1}>
          <h1 className="text-gradient">About ICE Group</h1>
          <p style={{ maxWidth: '800px', margin: '20px 0', fontSize: '1.2rem', color: '#ccc' }}>
            We are architects of experience. Since 2010, ICE Group has been redefining the landscape of corporate events.
          </p>
        </AnimateOnScroll>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1fr', 
          gap: '40px', 
          marginTop: '40px', 
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(69, 69, 69, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(69, 69, 69, 0.3) 100%)',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <AnimateOnScroll animation="fadeInUp" delay={0.2}>
            <div>
              <p style={{ marginBottom: '20px' }}>
                iCE Group India; a group that has stood for excellence, brilliance and distinction since its inception. June 1, 2010, the day that saw the birth of the group that was to go on to create a revolution in the travel, tourism, events, weddings and exceptional expressions and impressions domain. Ever since, the company has grown leaps and bounds and today has a rich legacy of experience, expertise, skill, competence, and exposure garnered in the decade and plus one year of its operations.
              </p>
              <p>
                Mr. Mohit Khanna is the company&apos;s founder director and CEO and Ms. Disha Shah who joined the company in the year 2015 is the COO and director.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.3}>
            <div style={{ position: 'relative', height: '260px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #222' }}>
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaborating during an event planning session"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </AnimateOnScroll>
        </div>

        <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <AnimateOnScroll animation="fadeInUp" delay={0.2}>
            <div style={{ background: 'linear-gradient(135deg, rgba(69, 69, 69, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)', padding: '20px', borderRadius: '12px', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h2 className="text-gradient" style={{ marginBottom: '12px', fontSize: '1.5rem' }}>Mission</h2>
                <p style={{ marginBottom: '0', fontSize: '0.95rem', lineHeight: '1.5', color: 'white' }}>
                  To provide innovative, effective and pioneering resolutions to our associates which aim at furthering their reach and growing their businesses.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.3}>
            <div style={{ background: 'linear-gradient(135deg, rgba(69, 69, 69, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)', padding: '20px', borderRadius: '12px', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 className="text-gradient" style={{ marginBottom: '12px', fontSize: '1.5rem' }}>Vision</h3>
                <p style={{ color: 'white', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '0' }}>
                  Forming striking connections with our patrons by creating impressions and experiences a global agency par excellence.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div style={{ 
          marginTop: '50px',
          background: 'linear-gradient(135deg, rgba(69, 69, 69, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(69, 69, 69, 0.3) 100%)',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <AnimateOnScroll animation="fadeInUp" delay={0.4}>
            <div>
              <h2 style={{ color: 'white', marginBottom: '24px', fontSize: '2rem' }}>
                <span className="text-gradient">We Are Ingenious We Are Team ice</span>
              </h2>
              <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1rem' }}>
                <p style={{ marginBottom: '20px' }}>
                  We are on a constant quest to deliver superlative impressions and experiences for you. Travel is in our DNA and there is perhaps no corner of the world where we haven&apos;t crafted memories for our patrons. For us it is always time for the next adventure.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Luxe, luxury and opulence have captivated us ever since and with Wedding Knots, we have been able to translate our fascination into work and help make the most memorable even more extraordinary for the bride, groom and everyone attending the wedding.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Travel and events go hand in hand and it was only imperative for us that this was the next progression for us. iCE Events is now a name to reckon with in the events space and how. Large formats bespoke corporate events on all turfs of the globe and in the quest of exploring beyond.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  During the gloomy times of the pandemic, we became the beacon of hope that connected by transcending physical boundaries. iCE CONNECT offers state of the art virtual platforms with integration and interactions, animations, VFX and immersive experiences in the virtual domain.
                </p>
                <p style={{ marginBottom: '0', fontWeight: '600', color: 'var(--color-white)' }}>
                  STAY TUNED TO STAY ABREAST OF LATEST INNOVATIONS AND REVOLUTIONS, AFTER ALL; WE ARE INGENIOUS. WE ARE TEAM ICE!
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

