"use client"
import Link from "next/link"
import Image from "next/image"
import { Headphones, Mic, FileText, Mail, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Mic className="h-5 w-5 text-amber-600" />
            <span>Steven's Voice</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#samples" className="text-muted-foreground hover:text-foreground transition-colors">
              Voice Samples
            </Link>
            <Link href="#resume" className="text-muted-foreground hover:text-foreground transition-colors">
              Resume
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:flex bg-amber-600 hover:bg-amber-700">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100/30 to-amber-50/10 -z-10"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>

          {/* Sound wave decorative element */}
          <div className="absolute left-0 right-0 bottom-0 h-16 opacity-10 -z-10">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,64 C48,42.6666667 96,32 144,32 C192,32 240,42.6666667 288,64 C336,85.3333333 384,96 432,96 C480,96 528,85.3333333 576,64 C624,42.6666667 672,32 720,32 C768,32 816,42.6666667 864,64 C912,85.3333333 960,96 1008,96 C1056,96 1104,85.3333333 1152,64 C1200,42.6666667 1248,32 1296,32 C1344,32 1392,42.6666667 1440,64 L1440,120 L0,120 Z"
                fill="#B45309"
              />
            </svg>
          </div>

          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-4">
              <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-2">
                Professional Voice Talent
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Clear, Warm, <span className="text-amber-600">Confident</span> Voice Delivery
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Professional voice-over talent specializing in audiobooks, narration, and explainer videos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="#samples">
                    <Headphones className="mr-2 h-5 w-5" />
                    Listen to Samples
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  asChild
                >
                  <Link href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/steven-profile.png"
                  alt="Steven's professional headshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-50/50 to-white -z-10"></div>

          {/* Decorative microphone icon */}
          <div className="absolute right-10 top-20 text-amber-100 opacity-20 -z-10">
            <Mic className="w-64 h-64" />
          </div>

          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg">
              <p>
                Hi, I'm Steven — a reliable, articulate voice-over talent with a clear, expressive voice and over 20
                years of experience in communication-heavy roles. I bring a calm, professional presence to every
                project, whether it's narrating training materials, voicing audiobooks, or delivering clean, engaging
                reads for explainer videos.
              </p>
              <p>
                I'm tech-savvy, punctual, and easy to work with. I take direction well and pride myself on delivering
                high-quality audio with a fast turnaround. If you're looking for a mature, steady voice that's
                trustworthy and grounded, I'd love to help bring your script to life.
              </p>
              <p className="font-medium">Let's work together to make your message stand out.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-amber-100 hover:border-amber-300 transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Audiobooks</h3>
                <p className="text-muted-foreground">
                  Engaging narration that brings stories to life with the perfect tone and pacing.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-amber-100 hover:border-amber-300 transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">E-Learning</h3>
                <p className="text-muted-foreground">
                  Clear, instructional voice for training materials and educational content.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-amber-100 hover:border-amber-300 transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Explainer Videos</h3>
                <p className="text-muted-foreground">
                  Professional narration that explains complex concepts with clarity and confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Samples Section */}
        <section id="samples" className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-50/80 -z-10"></div>

          {/* Decorative sound wave */}
          <div className="absolute left-0 right-0 top-0 h-32 opacity-10 -z-10">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                fill="#B45309"
              />
            </svg>
          </div>

          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Voice Samples</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Listen to samples of my voice work across different genres and styles. Each sample demonstrates my
              versatility and ability to adapt to various project requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AudioSample
                title="Audiobook Narration"
                description="Fiction sample with character voices and emotional delivery"
                category="Audiobook"
                duration="1:24"
                icon={<Book />}
              />audioSrc="C:\Users\sltlm\Documents\Sound Recordings\voice-samples-website\audiobook-narration-sample.mp3"
              <AudioSample
                title="Corporate Explainer"
                description="Professional and clear explanation of business concepts"
                category="Explainer"
                duration="0:58"
                icon={<Presentation />}
              />audioSrc="C:\Users\sltlm\Documents\Sound Recordings\voice-samples-website\corporate-explainer-sample.mp3"
              <AudioSample
                title="E-Learning Module"
                description="Instructional content with engaging delivery"
                category="E-Learning"
                duration="1:12"
                icon={<GraduationCap />}
              />audioSrc="C:\Users\sltlm\Documents\Sound Recordings\voice-samples-website\E-learning-module-sample.mp3"
              <AudioSample
                title="Documentary Style"
                description="Authoritative and informative narration"
                category="Documentary"
                duration="1:36"
                icon={<Film />}
              />audioSrc="C:\Users\sltlm\Documents\Sound Recordings\voice-samples-website\Documentary-Style-sample.mp3"
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-white -z-10"></div>

          {/* Decorative elements */}
          <div className="absolute top-40 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl -z-10"></div>

          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Professional Experience</h2>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-amber-100">
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-amber-700">Professional Summary</h3>
                <p className="text-muted-foreground">
                  Versatile professional with 20+ years in operations, supervision, and client service. Strong
                  communication, presentation, and tech skills. A clear, expressive speaking voice, disciplined work
                  ethic, and interest in narration and voice-over projects. Seeking to transition into remote creative
                  roles that utilize vocal delivery, clarity, and storytelling.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-amber-700">Core Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Skill title="Voice Clarity & Articulation" />
                  <Skill title="Narration & Public Speaking" />
                  <Skill title="Audio Recording" />
                  <Skill title="Client Communication" />
                  <Skill title="Attention to Detail" />
                  <Skill title="Tech-Friendly" />
                  <Skill title="Remote Work Discipline" />
                  <Skill title="Script Interpretation" />
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-amber-700">Work Experience</h3>

                <div className="space-y-8">
                  <WorkExperience
                    company="Shiroki North America"
                    position="Machine Operator"
                    period="2023–2024"
                    responsibilities={[
                      "Precision in fast-paced settings, alert to cues and timing.",
                      "Operated heavy machinery safely and consistently.",
                    ]}
                  />

                  <WorkExperience
                    company="Baby Nov North America"
                    position="Production Supervisor"
                    period="2021–2022"
                    responsibilities={[
                      "Led production teams, communicated directions clearly.",
                      "Maintained quality and consistency under pressure.",
                    ]}
                  />

                  <WorkExperience
                    company="Lowe's Home Improvement"
                    position="Department Supervisor"
                    period="2007–2015"
                    responsibilities={[
                      "Led customer-facing teams in multiple departments.",
                      "Solved problems with clear, patient communication.",
                    ]}
                  />
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-amber-700">Voice-Over Fit</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Long experience speaking clearly and confidently in supervision roles</li>
                  <li>Familiarity with scripts and procedural communication</li>
                  <li>Strong work ethic, patience, and attention to inflection and tone</li>
                  <li>Desire to build portfolio in audiobooks, explainer videos, or e-learning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-amber-700">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium">Dyersburg State Community College</h4>
                    <p className="text-muted-foreground">A.A.S. in IT & Business Communication – GPA: 4.0</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Other Coursework:</h4>
                    <p className="text-muted-foreground">University of Kansas, Wichita State, EKU – Business & Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-amber-100/50 to-white -z-10"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-32 overflow-hidden -z-10">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#FEF3C7"
                fillOpacity="0.3"
              ></path>
            </svg>
          </div>

          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Interested in working together? Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-amber-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your name"
                      className="flex h-10 w-full rounded-md border border-amber-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="flex h-10 w-full rounded-md border border-amber-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium">
                      Project Type
                    </label>
                    <select
                      id="project"
                      className="flex h-10 w-full rounded-md border border-amber-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select project type</option>
                      <option value="audiobook">Audiobook</option>
                      <option value="elearning">E-Learning</option>
                      <option value="explainer">Explainer Video</option>
                      <option value="commercial">Commercial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell me about your project"
                      className="flex min-h-[120px] w-full rounded-md border border-amber-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8 bg-amber-50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 font-semibold">
            <Mic className="h-5 w-5 text-amber-600" />
            <span>Steven's Voice</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Steven's Voice-Over Services. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-amber-600 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-amber-600 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AudioSample({ title, description, category, duration, icon, audioSrc = "" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="bg-white rounded-lg border border-amber-100 p-6 shadow-lg hover:border-amber-300 transition-all hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 text-amber-500">{icon}</div>
          <div>
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">{category}</span>
      </div>
      <div className="bg-amber-50 rounded-md p-3 flex items-center gap-3">
        <Button
          size="sm"
          variant="secondary"
          className="h-8 w-8 rounded-full p-0 flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <Play className="h-4 w-4" />
          )}
          <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
        </Button>
        <div className="h-2 flex-1 bg-amber-200 rounded-full overflow-hidden">
          <div
            className="bg-amber-600 h-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-xs text-muted-foreground">{duration}</span>

        {/* Hidden audio element */}
        {audioSrc && (
          <audio
            ref={audioRef}
            src={audioSrc}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            className="hidden"
          />
        )}
      </div>
    </div>
  );
}
  )
}

function Skill({ title }) {
  return (
    <div className="bg-amber-50 text-amber-800 rounded-md px-3 py-2 text-sm font-medium text-center border border-amber-100">
      {title}
    </div>
  )
}

function WorkExperience({ company, position, period, responsibilities }) {
  return (
    <div className="border-l-2 border-amber-300 pl-4">
      <h4 className="text-lg font-medium">{company}</h4>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-amber-600">{position}</span>
        <span className="text-muted-foreground">{period}</span>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function Book() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
    </svg>
  )
}

function Presentation() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h20"></path>
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
      <path d="m7 21 5-5 5 5"></path>
    </svg>
  )
}

function GraduationCap() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  )
}

function Film() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"></rect>
      <line x1="7" x2="7" y1="2" y2="22"></line>
      <line x1="17" x2="17" y1="2" y2="22"></line>
      <line x1="2" x2="22" y1="12" y2="12"></line>
      <line x1="2" x2="7" y1="7" y2="7"></line>
      <line x1="2" x2="7" y1="17" y2="17"></line>
      <line x1="17" x2="22" y1="17" y2="17"></line>
      <line x1="17" x2="22" y1="7" y2="7"></line>
    </svg>
  )
}
