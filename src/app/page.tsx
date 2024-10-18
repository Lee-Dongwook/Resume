import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/ui/blur-fade";
import BlurFadeText from "@/components/ui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { ResumeCard } from "@/components/resume-card";
import { ProjectCard } from "@/components/project-card";
import { Data } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center mt-16 md:mt-28 min-h-screen space-y-10 px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Hero Section */}
      <section id="hero" className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col items-center space-y-10">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
            yOffset={8}
            text={`Hi, I'm ${Data.name} 👋`}
          />
          <BlurFade delay={BLUR_FADE_DELAY}>
            <BlurFadeText
              className="text-lg md:text-2xl text-muted-foreground"
              delay={BLUR_FADE_DELAY}
              text={Data.description}
            />
          </BlurFade>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="w-full max-w-3xl mx-auto space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-4xl font-bold text-center">Work Experience</h2>
        </BlurFade>
        <div className="flex flex-col space-y-4">
          {Data.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                company={work.company}
                title={work.title}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Current"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full max-w-3xl mx-auto space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-4xl font-bold text-center">Education</h2>
        </BlurFade>
        <div className="flex flex-col space-y-4">
          {Data.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                altText={education.school}
                title={education.school}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-3xl mx-auto space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-4xl font-bold text-center">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-5 justify-center">
          {Data.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-3xl mx-auto py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-center">Projects</h2>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {Data.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                title={project.title}
                key={project.title}
                description={project.description}
                dates={project.dates}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-3xl mx-auto text-center py-12"
      >
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-4">
            <div className="inline-block bg-foreground text-background px-3 py-1 text-sm rounded-lg">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Get in Touch
            </h2>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
