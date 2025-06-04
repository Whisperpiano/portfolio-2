import AvatarCard from '@/components/home/avatar-card';
import TerminalCard from '@/components/home/terminal-card';
import SocialGrid from '@/components/home/social/social-grid';
import ProjectGrid from '@/components/home/projects/project-grid';
import StackCarousel from '@/components/home/stack/stack-carousel';

export default function Home() {
  return (
    <main className="h-full max-h-dvh min-h-dvh p-4">
      <section className="">
        <section className="col-span-2 grid grid-cols-8 gap-4 rounded-3xl border-2 p-4">
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
      </section>
    </main>
  );
}
