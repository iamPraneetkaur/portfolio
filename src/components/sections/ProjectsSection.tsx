import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Strays',
    shortDescription: 'Empathetic Android-based assistance for street animals',
    description: 'Developed an Android-based system designed to facilitate immediate assistance for street animals. By enabling real-time reporting and direct communication with NGOs via integrated call, SMS, and map services, the application transforms concern into action. This project reflects a commitment to leveraging mobile technology for high-impact social welfare and situational empathy.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop',
    tags: ['Android', 'Maps API', 'Social Welfare'],
    skillsDemonstrated: ['Problem Solving', 'Mobile Architecture', 'UX Design'],
    color: 'bg-lavender/20',
    accent: 'text-lavender',
    link: 'https://github.com/iamPraneetkaur',
    github: 'https://github.com/iamPraneetkaur'
  },
  {
    id: 2,
    title: 'AgroInsights',
    shortDescription: 'Integrated soil and crop suitability data analysis',
    description: 'A comprehensive data analysis framework focused on identifying optimal agricultural outcomes. Utilizing interactive Power BI dashboards, the project explores soil conditions and NPK nutrient levels to provide actionable insights on crop suitability. The focus was on creating a data-backed decision-making environment for sustainable farming practices.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
    tags: ['Power BI', 'Data Analysis', 'Visualization'],
    skillsDemonstrated: ['Data Modeling', 'Analytical Thinking', 'Dashboard Design'],
    color: 'bg-pink/20',
    accent: 'text-pink',
    link: 'https://github.com/iamPraneetkaur',
    github: 'https://github.com/iamPraneetkaur'
  },
  {
    id: 3,
    title: 'Sentistat',
    shortDescription: 'Cloud-integrated NLP tweet sentiment analysis',
    description: 'An NLP-driven system designed to classify and analyze sentiment distributions within large-scale social media datasets. By processing tweet text to identify emotional trends and opinion shifts, the project provides a visual window into public perception. It demonstrates the ability to translate raw unstructured data into meaningful, visual opinion trends.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=800&auto=format&fit=crop',
    tags: ['NLP', 'Python', 'Sentiment Analysis'],
    skillsDemonstrated: ['Text Processing', 'Pattern Recognition', 'Statistical Visualization'],
    color: 'bg-blue/20',
    accent: 'text-blue',
    link: 'https://github.com/iamPraneetkaur',
    github: 'https://github.com/iamPraneetkaur'
  },
  {
    id: 4,
    title: 'Doodle',
    shortDescription: 'Creative Java Swing-based drawing architecture',
    description: 'A structural exploration of graphical user interfaces built using Java Swing. Doodle implements dynamic brush customization and color selection through robust mouse event handling. The project serves as a study in building responsive, creative software architectures while maintaining a clean and intuitive user experience for digital sketching.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
    tags: ['Java', 'Swing', 'GUI Design'],
    skillsDemonstrated: ['Interface Logic', 'Event Handling', 'Software Architecture'],
    color: 'bg-lavender/20',
    accent: 'text-lavender',
    link: 'https://github.com/iamPraneetkaur',
    github: 'https://github.com/iamPraneetkaur'
  }
];

const ProjectsSection = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="projects" className="col-span-12 scroll-mt-32">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary"
        >
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender via-pink to-blue">Works</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-text-secondary mt-4 max-w-2xl"
        >
          A collection of projects showcasing my journey in software development, from creative tools to data analysis.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedId(project.id)}
            className="group cursor-pointer relative"
          >
            <div className="absolute inset-0 bg-white/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full flex flex-col bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
              <div className={`h-48 w-full ${project.color} relative overflow-hidden`}>
                <motion.img 
                  layoutId={`image-${project.id}`}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <motion.h3 layoutId={`title-${project.id}`} className="text-2xl font-bold text-text-primary mb-2 group-hover:text-lavender transition-colors">
                  {project.title}
                </motion.h3>
                <p className="text-text-secondary mb-6 flex-grow">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/50 border border-white/60 text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-cream/80 backdrop-blur-md"
          >
            {projects.filter(p => p.id === selectedId).map(project => (
              <motion.div
                key="modal"
                layoutId={`card-${project.id}`}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl bg-white/90 backdrop-blur-2xl border border-white rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-white/50 hover:bg-white backdrop-blur-md rounded-full text-text-secondary transition-colors"
                >
                  <X size={24} />
                </button>

                <div className={`w-full md:w-2/5 h-64 md:h-auto ${project.color} relative`}>
                  <motion.img 
                    layoutId={`image-${project.id}`}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <motion.h3 layoutId={`title-${project.id}`} className="text-3xl md:text-4xl font-bold text-text-primary mb-6 hover:text-lavender transition-colors inline-block">
                      {project.title}
                    </motion.h3>
                  </a>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-3">Project Description</h4>
                      <p className="text-lg text-text-secondary leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-3">Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className={`px-4 py-1.5 text-sm font-medium rounded-full ${project.color} ${project.accent}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-3">Skills Demonstrated</h4>
                        <ul className="text-text-secondary space-y-1 text-sm font-medium">
                          {project.skillsDemonstrated.map(skill => (
                            <li key={skill} className="flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-lavender mr-2" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-text-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
                      >
                        View Project <ExternalLink size={18} className="ml-2" />
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-white border border-text-secondary/20 text-text-primary rounded-full font-medium hover:bg-cream transition-all hover:shadow-md"
                      >
                        <Github size={18} className="mr-2" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
