import AvatarCard from '@/components/home/avatar-card';
import TerminalCard from '@/components/home/terminal-card';
import SocialGrid from '@/components/home/social/social-grid';
import ProjectGrid from '@/components/home/projects/project-grid';
import StackCarousel from '@/components/home/stack/stack-carousel';

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full p-4">
      <section className="grid h-full min-h-[calc(100vh-32px)] w-full grid-cols-12 grid-rows-[1fr_1fr_173px] gap-4 rounded-3xl border-1 p-4">
        {/* Picture card */}
        <AvatarCard src="/images/profile.png" />

        {/* Intro card */}
        <TerminalCard />

        {/* Social grid */}
        <SocialGrid />

        {/* Project grid */}
        <ProjectGrid />

        {/* Stack */}
        <StackCarousel />
      </section>
    </main>
  );
}
