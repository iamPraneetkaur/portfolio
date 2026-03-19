import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', color: 'bg-lavender/30' },
      { name: 'Python', color: 'bg-pink/30' },
      { name: 'Kotlin', color: 'bg-blue/30' },
      { name: 'SQL', color: 'bg-lavender/30' }
    ]
  },
  {
    title: 'Development',
    skills: [
      { name: 'Android (Jetpack Compose)', color: 'bg-pink/30' },
      { name: 'UI Design', color: 'bg-blue/30' },
      { name: 'XML', color: 'bg-lavender/30' }
    ]
  },
  {
    title: 'Data & Analysis',
    skills: [
      { name: 'Pandas', color: 'bg-blue/30' },
      { name: 'NumPy', color: 'bg-lavender/30' },
      { name: 'Scikit-learn', color: 'bg-pink/30' },
      { name: 'Matplotlib', color: 'bg-blue/30' },
      { name: 'Seaborn', color: 'bg-lavender/30' },
      { name: 'Plotly', color: 'bg-pink/30' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Power BI', color: 'bg-lavender/30' },
      { name: 'Git & GitHub', color: 'bg-pink/30' },
      { name: 'Android Studio', color: 'bg-blue/30' },
      { name: 'Excel', color: 'bg-lavender/30' }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="col-span-12 scroll-mt-32">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-pink">Toolbox</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto"
        >
          A collection of technologies I use to bridge the gap between imagination and implementation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 mb-20">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="bg-white/90 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-lavender mr-3"></span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-2xl border border-white/50 text-sm font-medium text-text-primary shadow-sm transition-all duration-300 ${skill.color}`}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[32px] overflow-hidden shadow-xl">
          <div className="px-8 py-6 bg-gradient-to-r from-lavender/10 to-pink/10 border-b border-white/60">
            <h3 className="text-xl font-bold text-text-primary">Tools & Platforms Summary</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/60">
                  <th className="px-8 py-4 text-sm font-semibold text-text-secondary uppercase tracking-wider w-1/3">Category</th>
                  <th className="px-8 py-4 text-sm font-semibold text-text-secondary uppercase tracking-wider">Tools & Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/40">
                {skillCategories.map((cat) => (
                  <tr key={cat.title} className="hover:bg-white/40 transition-colors">
                    <td className="px-8 py-5 text-text-primary font-bold">{cat.title}</td>
                    <td className="px-8 py-5 text-text-secondary">{cat.skills.map(s => s.name).join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
