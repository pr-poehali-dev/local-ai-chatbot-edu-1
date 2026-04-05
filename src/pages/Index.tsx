import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import ChatbotSection from '@/components/ChatbotSection';
import ContactsSection from '@/components/ContactsSection';
import FooterSection from '@/components/FooterSection';

const sectionIds = ['home', 'courses', 'chatbot', 'contacts'];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="noise min-h-screen bg-background">
      <NavBar activeSection={activeSection} onNavigate={handleNavigate} />
      <HeroSection onNavigate={handleNavigate} />
      <CoursesSection />
      <ChatbotSection />
      <ContactsSection />
      <FooterSection />
    </div>
  );
}
