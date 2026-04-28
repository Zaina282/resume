/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Languages,
  Mail,
  MapPin,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  Instagram,
  Phone
} from "lucide-react";
import profileImg from './profile.jpeg';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="h-screen w-full bg-dark text-ink font-sans overflow-hidden flex flex-col selection:bg-accent selection:text-dark">
      {/* Top Navigation */}
      <nav className="h-20 border-b thin-line flex items-center justify-between px-12 shrink-0 bg-dark z-50">
        <div className="flex items-center gap-3">
          <span className="font-bold tracking-[0.3em] text-xs">ZAINA.MANAL</span>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Column: Vertical Rail */}
        <aside className="w-24 border-r thin-line flex flex-col items-center justify-center relative bg-darker overflow-hidden">
          <div className="rotate-[-90deg] whitespace-nowrap text-[9px] tracking-[0.8em] uppercase text-white/20 absolute flex gap-12 font-medium">
            <span>MODEL</span>
            <span>&bull;</span>
            <span>CREATIVE</span>
            <span>&bull;</span>
            <span>MULTILINGUAL</span>
          </div>
        </aside>

        {/* Global Split Container */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-white/5 scroll-smooth flex flex-col">
          
          <div className="md:grid md:grid-cols-12 md:gap-px flex-none">
            {/* Main Info Section (7 Col) */}
            <section id="profile" className="col-span-7 bg-dark p-8 md:p-20 flex flex-col justify-between min-h-screen md:min-h-0 relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >


              <motion.h1 variants={itemVariants} className="text-7xl md:text-[10rem] font-light leading-[0.85] tracking-tighter mb-8 lowercase text-white">
                Zaina <br />
                <span className="font-medium text-accent italic">Manal.</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-white/60 max-w-lg text-xl md:text-2xl leading-relaxed font-light">
                Motivated and creative individual with strong communication and organizational skills. Seeking roles that utilize my creativity, interpersonal abilities, and technical knowledge.
              </motion.p>
            </motion.div>

            {/* Metrics/Secondary Data */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t thin-line pt-12 mt-20">
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="label-caps">Education</h3>
                <div className="space-y-4">
                  <p className="text-sm font-medium leading-tight">Svyasa Deemed To Be University<br />
                    <span className="text-white/40 text-[11px] font-normal tracking-wide">Currently Enrolled</span>
                  </p>
                  <p className="text-sm font-medium leading-tight">Carmel Pre-University College<br />
                    <span className="text-white/40 text-[11px] font-normal tracking-wide">2nd PUC (State Board)</span>
                  </p>
                  <p className="text-sm font-medium leading-tight">The New Cambridge English School<br />
                    <span className="text-white/40 text-[11px] font-normal tracking-wide">SSLC (ICSE Board)</span>
                  </p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="label-caps">Strengths</h3>
                <ul className="text-sm font-medium space-y-2 text-white/80 list-none p-0">
                  <li className="flex items-start gap-2 before:content-['•'] before:text-accent">Good communication & interpersonal skills</li>
                  <li className="flex items-start gap-2 before:content-['•'] before:text-accent">Creative and expressive personality</li>
                  <li className="flex items-start gap-2 before:content-['•'] before:text-accent">Adaptable and quick learner</li>
                  <li className="flex items-start gap-2 before:content-['•'] before:text-accent">Team player with a positive attitude</li>
                </ul>
              </motion.div>
            </motion.div>
          </section>

          {/* Side Info Section (5 Col) */}
          <section className="col-span-5 bg-surface flex flex-col min-h-screen md:min-h-0 border-t md:border-t-0 thin-line">

            {/* Professional Portrait Section */}
            <div className="p-8 md:p-16 border-b thin-line bg-darker flex flex-col items-center">
              <div className="w-full max-w-sm aspect-[3/4] bg-surface relative group overflow-hidden border border-white/5">
                <img
                  src={profileImg}
                  alt="Zaina Manal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-[20px] border-dark/20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 py-2 px-4 bg-dark/60 backdrop-blur-md text-[9px] uppercase tracking-[0.3em] font-bold text-center border border-white/10">
                  Professional Visual Identity
                </div>
              </div>
            </div>

            {/* Language Architecture */}
            <div id="expertise" className="p-8 md:p-16 border-b thin-line bg-dark hover:bg-surface-hover transition-colors duration-500">
              <div className="flex items-center justify-between mb-8">
                <h3 className="label-caps">Linguistic Intelligence</h3>
                <Languages className="w-4 h-4 text-white/20" />
              </div>
              <div className="space-y-6">
                {[
                  { lang: "English", level: "Fluent", sub: "Global Communication", score: "0.95", serif: false },
                  { lang: "Hindi", level: "Fluent", sub: "National Connectivity (हिंदी)", serif: true, score: "0.90" },
                  { lang: "Kannada", level: "Fluent", sub: "Regional Connectivity (ಕನ್ನಡ)", score: "0.85", serif: false }
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex justify-between items-end mb-2">
                      <span className={`text-2xl ${item.serif ? 'font-serif' : 'font-medium'} tracking-tight group-hover:text-accent transition-colors`}>{item.lang}</span>
                      <div className="flex gap-1 mb-1.5">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full ${dot <= (parseFloat(item.score) * 5) ? 'bg-accent' : 'bg-white/10'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-white/20 uppercase tracking-widest">
                      <span>{item.level}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent/60">Level {item.score}</span>
                    </div>
                    <div className="h-px w-full bg-white/5 mt-4 relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-accent/20 transition-transform duration-1000 ease-out origin-left"
                        style={{ transform: `scaleX(${item.score})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Action */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-between">
              <div className="space-y-12">
                <div id="contact" className="flex flex-col gap-4">
                  <h3 className="label-caps">Connect</h3>
                  <a href="mailto:zainamanal1190@gmail.com" className="flex items-center justify-between text-white/60 hover:text-white transition-colors group">
                    <span className="text-sm md:text-base font-light flex items-center gap-3">
                      <Mail className="w-4 h-4 opacity-30" /> zainamanal1190@gmail.com
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                  <a href="https://instagram.com/_zaina_manal" target="_blank" rel="noreferrer" className="flex items-center justify-between text-white/60 hover:text-white transition-colors group">
                    <span className="text-sm md:text-base font-light flex items-center gap-3">
                      <Instagram className="w-4 h-4 opacity-30" /> @_zaina_manal
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                  <div className="flex items-center gap-3 text-white/40 text-sm mt-2">
                    <MapPin className="w-4 h-4 opacity-80" /> Karnataka, India
                  </div>
                </div>
              </div>

              <div className="mt-16 border-t thin-line pt-8">
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium leading-relaxed">
                  Available for immediate professional recruitment within corporate administration and professional sectors.
                </p>
              </div>
            </div>

          </section>
          </div>

          {/* Full Width Skills & Activities */}
          <section className="bg-darker p-8 md:p-20 border-t thin-line md:grid md:grid-cols-2 gap-12 md:gap-20 flex-none relative overflow-hidden">
            <div id="skills" className="space-y-8 z-10 relative">
              <h3 className="label-caps">Professional Skills</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-px bg-white/10 group-hover:bg-accent transition-colors"></div>
                  <div className="pt-1 pb-1">
                    <h4 className="text-base font-bold uppercase tracking-[0.1em] mb-2">Management & Leadership</h4>
                    <p className="text-sm text-white/70 leading-relaxed max-w-md font-light">
                      Volunteer at IBM Hackathon. Assisted in organizing and managing event activities, coordinating with participants. Developed teamwork and problem-solving skills.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-px bg-white/10 group-hover:bg-accent transition-colors"></div>
                  <div className="pt-1 pb-1">
                    <h4 className="text-base font-bold uppercase tracking-[0.1em] mb-2">Designing & Creativity</h4>
                    <p className="text-sm text-white/70 leading-relaxed max-w-md font-light italic font-serif">
                      Interest in fashion and outfit modelling. Basic understanding of styling, presentation, and aesthetics. Creative mindset with attention to visual detail.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-px bg-white/10 group-hover:bg-accent transition-colors"></div>
                  <div className="pt-1 pb-1">
                    <h4 className="text-base font-bold uppercase tracking-[0.1em] mb-2">Technical Skills</h4>
                    <p className="text-sm text-white/70 leading-relaxed max-w-md font-light">
                      Basic knowledge of coding concepts and fundamental computer operations. Quick learner in adapting to new technologies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-px bg-white/10 group-hover:bg-accent transition-colors"></div>
                  <div className="pt-1 pb-1">
                    <h4 className="text-base font-bold uppercase tracking-[0.1em] mb-2">Social Media Skills</h4>
                    <p className="text-sm text-white/70 leading-relaxed max-w-md font-light">
                      Active on Instagram. Basic understanding of content creation, personal branding, and audience engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="activities" className="space-y-8 mt-12 md:mt-0 z-10 relative">
              <h3 className="label-caps">Activities & Interests</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-px bg-white/10 group-hover:bg-accent transition-colors"></div>
                  <div className="pt-1 pb-1">
                    <h4 className="text-base font-bold uppercase tracking-[0.1em] mb-2">Fashion & Content</h4>
                    <p className="text-sm text-white/70 leading-relaxed max-w-md font-light">
                      Fashion and styling. Social media content creation and personal branding development.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-px bg-white/10 group-hover:bg-accent transition-colors"></div>
                  <div className="pt-1 pb-1">
                    <h4 className="text-base font-bold uppercase tracking-[0.1em] mb-2">Community Engagement</h4>
                    <p className="text-sm text-white/70 leading-relaxed max-w-md font-light">
                      Event participation and active volunteering in academic and technical events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] tracking-tighter pointer-events-none whitespace-nowrap">
              ZAINA
            </div>
          </section>
        </div>
      </div>

      {/* Footer System Status */}
      <footer className="h-12 border-t thin-line flex items-center px-12 justify-between text-[9px] tracking-[0.4em] text-white/20 uppercase font-bold bg-darker">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          System Status: Active Portfolios
        </div>
        <div className="flex gap-8 group">
          <span className="hover:text-white transition-colors cursor-help">REF // ZM-2026-FSHN</span>
          <span>&copy; 2026 ZAINA.MANAL</span>
        </div>
      </footer>
    </div>
  );
}

