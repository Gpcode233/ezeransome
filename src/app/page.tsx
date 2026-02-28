/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { Button } from "@/components/ui/button";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-20 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-10">
          <div className="gap-4 gap-y-8 flex flex-col md:flex-row justify-between items-start">
            <div className="gap-4 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl"
                yOffset={8}
                text={DATA.heroTitle ?? `Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[700px] text-xl md:text-2xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 1.2}>
                <div className="flex items-center gap-4 pt-2">
                  <Button asChild size="lg" className="text-lg px-8 h-12">
                    <Link href="#projects">View Projects</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 h-12">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-32 md:size-40 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-3xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty text-lg md:text-xl font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="profile">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-3xl font-bold">Profile</h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.highlights.map((item, index) => (
              <BlurFade
                key={item.title}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <div className="border bg-card rounded-xl p-6 flex flex-col gap-2">
                  <div className="font-semibold text-base text-muted-foreground">
                    {item.title}
                  </div>
                  <div className="font-medium text-xl">{item.value}</div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-11 w-fit px-5 flex items-center gap-2.5">
                  {skill.icon && <skill.icon className="size-5 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-base font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      {DATA.hackathons.length > 0 && (
        <section id="hackathons">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <HackathonsSection />
          </BlurFade>
        </section>
      )}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
