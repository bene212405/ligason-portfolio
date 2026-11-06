import { motion } from 'framer-motion'

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const skills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS',
  'Vite', 'Git & GitHub', 'Figma', 'Responsive Design', 'PHP',
  'MySQL', 'REST APIs', 'Node.js (basics)', 'Vercel',
]

const education = [
  {
    degree: 'Bachelor of Science in Web Systems Technology',
    school: 'College of Information & Communications Technology',
    period: '2022 – Present',
    note: 'Focused coursework: Web Systems & Technologies, Database Management, UI/UX Design, Front-End Frameworks',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <FadeIn className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-purple-500 uppercase mb-2">Get to know me</p>
          <h2 className="section-title">About Me</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <FadeIn delay={0.1}>
            <div className="space-y-5">
              <p className="text-gray-600 leading-relaxed text-base">
                Hi! I'm <span className="font-semibold text-purple-600">Krishamae Ligason</span>, a
                passionate Web Systems Technology student with a love for building beautiful,
                functional web applications. I enjoy turning ideas into reality through clean code
                and thoughtful design.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                I'm detail-oriented, a fast learner, and always excited to explore new
                technologies. When I'm not coding, I'm probably helping teammates debug, sketching
                UI wireframes, or studying the latest front-end trends.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                One of my proudest projects is a <span className="font-semibold text-pink-500">Study Habit Tracker</span> — a
                web app designed to help students (like me!) stay consistent and productive. It
                reflects my belief that technology should solve real problems for real people.
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: 'Role',      value: 'Frontend Developer' },
                  { label: 'Status',    value: 'Open to Internship' },
                  { label: 'Location',  value: 'Philippines 🇵🇭' },
                  { label: 'Degree',    value: 'BS Web Systems Tech' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{label}</p>
                    <p className="text-sm font-semibold text-gray-700 mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Skills + Education */}
          <div className="space-y-10">
            {/* Skills */}
            <FadeIn delay={0.2}>
              <h3
                className="text-lg font-bold text-gray-700 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </FadeIn>

            {/* Education */}
            <FadeIn delay={0.3}>
              <h3
                className="text-lg font-bold text-gray-700 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Education
              </h3>
              <div className="space-y-4">
                {education.map(e => (
                  <div
                    key={e.degree}
                    className="relative pl-5 border-l-2 border-purple-200"
                  >
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-purple-400" />
                    <p className="text-sm font-bold text-gray-700">{e.degree}</p>
                    <p className="text-sm text-purple-500 font-medium">{e.school}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{e.period}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{e.note}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
