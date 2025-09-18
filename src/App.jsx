import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, Moon, Sun, Leaf, Users, Zap, Calendar, Calculator, ShoppingCart, Phone, Mail, MapPin, Globe, Star, ArrowRight, CheckCircle, Target, Heart, Lightbulb } from 'lucide-react'
import './App.css'

// SEO-optimized brand colors
const brandColors = {
  pastelGreyOrange: '#d8c09a',
  greyBrown: '#6f6648', 
  darkOlive: '#5c622a',
  azure: '#104e7f',
  orange: '#fff0d3',
  darkGreyBrown: '#553f24',
  greyYellow: '#bdb499'
}

// UI Components
const Card = ({ children, className = "", style = {}, onClick }) => (
  <div className={`rounded-lg shadow-md p-6 ${className}`} style={style} onClick={onClick}>
    {children}
  </div>
)

const CardHeader = ({ children }) => <div className="mb-4">{children}</div>
const CardTitle = ({ children, className = "", style = {} }) => (
  <h3 className={`text-xl font-semibold ${className}`} style={style}>{children}</h3>
)
const CardDescription = ({ children, style = {} }) => (
  <p className="text-sm opacity-80" style={style}>{children}</p>
)
const CardContent = ({ children, className = "" }) => <div className={className}>{children}</div>

const Button = ({ children, onClick, className = "", style = {}, size = "default", variant = "default" }) => {
  const sizeClasses = {
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  }
  
  return (
    <button 
      onClick={onClick}
      className={`rounded-md font-medium transition-colors ${sizeClasses[size]} ${className}`}
      style={style}
    >
      {children}
    </button>
  )
}

const Badge = ({ children, variant = "default", style = {} }) => (
  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border" style={style}>
    {children}
  </span>
)

const Tabs = ({ children, defaultValue, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)
  
  return (
    <div className={className}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  )
}

const TabsList = ({ children, style = {}, activeTab, setActiveTab }) => (
  <div className="flex space-x-1 rounded-lg p-1" style={style}>
    {React.Children.map(children, child => 
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
)

const TabsTrigger = ({ value, children, style = {}, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      activeTab === value ? 'bg-white shadow-sm' : 'hover:bg-white/50'
    }`}
    style={style}
  >
    {children}
  </button>
)

const TabsContent = ({ value, children, activeTab }) => 
  activeTab === value ? <div>{children}</div> : null

function App() {
  const [language, setLanguage] = useState('es')
  const [currentSection, setCurrentSection] = useState('home')
  const [currentPhase, setCurrentPhase] = useState(0)
  const [assessmentStep, setAssessmentStep] = useState(0)
  const [assessmentAnswers, setAssessmentAnswers] = useState([])
  const [assessmentScore, setAssessmentScore] = useState(0)

  // SEO-optimized content structure with completed content
  const content = {
    es: {
      // SEO Meta Information
      meta: {
        title: "PENINSULAR - Consultoría Regenerativa y Permacultura México | Soluciones Sustentables",
        description: "Diseñamos, desarrollamos y ejecutamos soluciones regenerativas personalizadas. Permacultura, agricultura regenerativa y tecnologías sustentables para tu hogar en México.",
        keywords: "permacultura México, consultoría regenerativa, agricultura sustentable, soluciones ecológicas, diseño regenerativo, Yucatán"
      },
      
      // Navigation
      nav: {
        home: 'Inicio',
        services: 'Servicios', 
        philosophy: 'Filosofía',
        tools: 'Herramientas',
        store: 'Tienda',
        contact: 'Contacto'
      },

      // Hero Section - SEO optimized
      hero: {
        title: 'PENINSULAR',
        subtitle: 'Soluciones Regenerativas',
        description: 'Creamos soluciones autosuficientes que te liberan del sistema convencional. Aplicamos metodologías biodinámicas, sabiduría ancestral y tecnología regenerativa para diseñar tu santuario sustentable en total armonía con los ritmos cósmicos y la tierra.',
        cta: 'Inicia Tu Viaje Regenerativo'
      },

      // Home Overview Cards
      homeCards: [
        {
          title: 'Servicios',
          description: 'Soluciones regenerativas personalizadas que evolucionan contigo',
          icon: Target
        },
        {
          title: 'Filosofía', 
          description: 'Regeneración como filosofía viva, no técnica fija',
          icon: Heart
        },
        {
          title: 'Herramientas',
          description: 'Calculadoras interactivas y recursos curados',
          icon: Calculator
        },
        {
          title: 'Tienda',
          description: 'Productos, sistemas y servicios para tu transformación',
          icon: ShoppingCart
        },
        {
          title: 'Contacto',
          description: 'Acceso fácil para clientes y colaboraciones innovadoras',
          icon: Phone
        }
      ],

      // Services Section - SEO optimized for permaculture keywords
      services: {
        title: 'Servicios',
        subtitle: 'Tres pilares de soluciones regenerativas para un futuro regenerativo',
        items: [
          {
            title: 'Evaluación & Diseño',
            description: 'Mapeo de sitio, análisis de suelo y agua, y planos regenerativos personalizados. Análisis integral de tu espacio, familia y objetivos para crear un plan regenerativo que se adapte perfectamente a tus necesidades específicas.',
            details: [
              'Mapeo detallado del sitio y análisis de recursos',
              'Evaluación de necesidades familiares y objetivos', 
              'Análisis de suelo y sistemas de agua',
              'Diseño de agricultura biodinámica personalizado',
              'Plan de implementación por fases',
              'Consulta de 4 horas + informe detallado'
            ],
            icon: Target
          },
          {
            title: 'Implementación Integral',
            description: 'Sistemas completos para alimentos (jardines, bosques, compost), agua (captación, filtración, aguas grises), y energía (solar, biogás, diseño adaptado al clima local). Construcción y establecimiento de infraestructura regenerativa que evoluciona con tus necesidades.',
            details: [
              'Sistemas de producción de alimentos (jardines, bosques comestibles)',
              'Infraestructura de agua (captación, filtración, aguas grises)',
              'Sistemas de energía (solar, biogás, diseño bioclimático)',
              'Tecnología inteligente integrada',
              'Capacitación y transferencia de conocimiento',
              'Gestión de proyecto 6-18 meses'
            ],
            icon: Leaf
          },
          {
            title: 'Transformación Completa',
            description: 'Acompañamiento personal continuo: guía uno-a-uno, recalibración estacional, coaching regenerativo, y mejora continua del sistema. Utilizamos tecnología IoT y metodologías innovadoras para maximizar la eficiencia de tu ecosistema personalizado.',
            details: [
              'Acompañamiento personal uno-a-uno',
              'Recalibración estacional de sistemas',
              'Coaching regenerativo continuo',
              'Monitoreo con tecnología IoT',
              'Análisis de rendimiento y optimización',
              'Actualizaciones tecnológicas',
              'Soporte técnico continuo',
              'Membresía en comunidad regenerativa incluida'
            ],
            icon: Zap
          }
        ]
      },

      // Philosophy Section - Completed content
      philosophy: {
        title: 'Nuestra Filosofía',
        subtitle: 'La visión regenerativa que construimos juntos como co-creadores',
        vision: {
          title: 'Nuestra Visión',
          short: 'Hogares como sistemas vivos que dan más de lo que toman. Abundancia en lugar de agotamiento. Prosperidad medida en bienestar y resiliencia.',
          expanded: 'Imaginamos un futuro donde cada hogar se convierta en un sistema vivo que da más de lo que toma. Un futuro en el que la abundancia reemplaza al agotamiento, y la prosperidad se mide en bienestar, resiliencia y armonía con los ciclos naturales. Invertir en regeneración es invertir en la vida misma: una decisión consciente de honrar la Tierra, a nuestros ancestros y a las generaciones por venir.'
        },
        approach: {
          title: 'Filosofía',
          short: 'La regeneración no es una técnica fija, sino una filosofía viva. Diseñamos soluciones únicas que combinan sabiduría ancestral e innovación moderna, adaptándose a tu familia, tu espacio y tu futuro.',
          expanded: 'Para nosotros, la regeneración no es una técnica fija, sino una filosofía viva. Nos movemos más allá de etiquetas y metodologías únicas: mezclamos conocimiento ancestral con innovación contemporánea para diseñar soluciones que evolucionan junto a cada familia y espacio. Regenerar significa escuchar, adaptarse y co-crear, reconociendo que cada hogar y cada ecosistema son únicos.'
        },
        community: {
          title: 'Enfoque Comunitario',
          short: 'Cada cliente es un co-creador. PENINSULAR conecta familias, proveedores e innovadores en un ecosistema vivo de conocimiento y colaboración.',
          expanded: 'Cada cliente es un co-creador. Más que proyectos individuales, construimos un ecosistema vivo de personas, familias y aliados que comparten conocimiento, recursos y experiencias. PENINSULAR es un puente entre clientes, proveedores e innovadores: una red colaborativa que acelera la transición hacia un futuro regenerativo.'
        },
        innovation: {
          title: 'Compromiso con la Innovación',
          short: 'La innovación es adaptación continua. Cada solución evoluciona contigo, priorizando el acompañamiento humano y el equilibrio con la naturaleza.',
          expanded: 'La innovación no es un fin en sí mismo, sino un camino de adaptación continua. Nuestros proyectos no se limitan a una técnica: cada solución se ajusta a las necesidades del cliente, evolucionando con el tiempo. Integramos tecnologías sustentables cuando son necesarias, pero siempre priorizamos el acompañamiento humano y el equilibrio con la naturaleza.'
        },
        team: {
          title: 'Equipo y Experiencia',
          short: 'Nuestro equipo reúne especialistas en permacultura, agricultura regenerativa, energía renovable y diseño ecológico. Unidos por una visión: regenerar la Tierra, comenzando desde cada hogar.',
          expanded: 'PENINSULAR nace de la convergencia entre diseño regenerativo, saberes ancestrales y prácticas contemporáneas de sostenibilidad. Nuestro equipo reúne especialistas en permacultura, agricultura regenerativa, energía renovable y diseño ecológico, unidos por una misma visión: regenerar la Tierra comenzando desde cada hogar.'
        }
      },

      // Tools Section - Completed content
      tools: {
        title: 'Herramientas Interactivas',
        subtitle: 'Calculadoras, guías educativas y recursos curados para tu transformación',
        apps: [
          {
            title: 'Calendario Regenerativo',
            description: 'Un calendario interactivo que integra fases lunares y estaciones para guiarte en el momento ideal de sembrar, podar, cosechar o recalibrar tus sistemas. Te conecta con los ritmos de la naturaleza y te ayuda a anticipar las necesidades de tu ecosistema regenerativo.',
            icon: Calendar
          },
          {
            title: 'Evaluación de Sustentabilidad', 
            description: 'Una herramienta de autoevaluación que mide tu consumo actual de agua, energía y recursos, identificando oportunidades de mejora. Te entrega un perfil regenerativo inicial y recomendaciones específicas para tu hogar.',
            icon: CheckCircle
          },
          {
            title: 'Calculadora de Capacidad',
            description: 'Una calculadora interactiva que estima la capacidad de tu terreno o casa para generar agua captada, energía renovable y producción de alimentos. Te permite visualizar escenarios de autosuficiencia y diseñar metas realistas.',
            icon: Calculator
          },
          {
            title: 'Calculadora de Adaptación Climática',
            description: 'Una herramienta diseñada para analizar riesgos climáticos en tu región — sequías, calor extremo, lluvias intensas — y adaptar tus sistemas regenerativos para resistir y prosperar bajo condiciones cambiantes.',
            icon: Globe
          }
        ]
      },

      // Store Section - Completed content
      store: {
        title: 'Tienda Peninsular',
        subtitle: 'Productos, sistemas y servicios para tu transformación regenerativa',
        categories: [
          {
            title: 'Mercancía',
            description: 'Nuestra línea de mercancía conecta estilo con propósito: ropa, accesorios y materiales educativos que inspiran conversación y financian proyectos regenerativos. Cada compra es una semilla para el futuro.',
            icon: Star
          },
          {
            title: 'Productos de Jardinería',
            description: 'Semillas, preparados y herramientas que apoyan sistemas vivos. Diseñados para quienes buscan implementar prácticas regenerativas desde su propio huerto o patio.',
            icon: Leaf
          },
          {
            title: 'Sistemas Listos para Usar',
            description: 'Infraestructura regenerativa en kits accesibles: compostaje, agua, energía y cultivos. Diseñados para implementarse en hogares, escuelas o comunidades con mínima complejidad técnica.',
            icon: Zap
          },
          {
            title: 'Paquetes de Servicios',
            description: 'Paquetes diseñados para acercarte a la regeneración sin compromisos grandes. Desde consultas rápidas hasta evaluaciones completas de sitio, con acompañamiento experto.',
            icon: Users
          },
          {
            title: 'Productos Digitales',
            description: 'Cursos, apps y comunidades en línea que te brindan acceso inmediato a conocimiento regenerativo. Ideal para quienes quieren iniciar su camino digitalmente o complementar proyectos existentes.',
            icon: Globe
          }
        ]
      },

      // Contact Section - Completed content
      contact: {
        title: 'Contacto',
        subtitle: 'Acceso fácil para clientes y colaboraciones innovadoras para proveedores',
        clients: {
          title: 'Para Clientes',
          description: 'Estamos aquí para acompañarte en cada etapa de tu viaje regenerativo. Desde la primera consulta hasta el acompañamiento continuo, ofrecemos un canal directo para resolver dudas, agendar evaluaciones y acceder a la comunidad PENINSULAR.',
          services: [
            'Cotizaciones de proyectos con acceso fácil',
            'Solicitudes de evaluación de sitio',
            'Consultas y soporte técnico',
            'Membresía en comunidad regenerativa',
            'Talleres y educación continua'
          ]
        },
        suppliers: {
          title: 'Para Proveedores',
          description: 'Buscamos proveedores, instaladores e innovadores comprometidos con un futuro regenerativo. Ofrecemos un canal exclusivo para alianzas estratégicas, abastecimiento de productos, acuerdos de distribución y colaboraciones en innovación.',
          opportunities: [
            'Solicitudes de asociación',
            'Abastecimiento de productos', 
            'Acuerdos de distribución',
            'Colaboraciones de innovación',
            'Red de instaladores certificados'
          ]
        }
      },

      // Unique Features - Completed content
      features: {
        title: 'Nuestra Propuesta Única',
        items: [
          {
            title: 'Innovación Personalizada',
            description: 'Cada proyecto es único, diseñado contigo y para ti. Combinamos metodologías regenerativas como permacultura, biodinamia y tecnologías emergentes para crear soluciones personalizadas.',
            icon: Lightbulb
          },
          {
            title: 'Metodologías Flexibles',
            description: 'Más allá de lo biodinámico: elegimos lo que mejor funciona para ti. No nos limitamos a una técnica, seleccionamos y combinamos lo mejor según las necesidades de cada sitio.',
            icon: Target
          },
          {
            title: 'Acompañamiento Personal',
            description: 'Tecnología humana: guía y cuidado directo en cada etapa. Reemplazamos el monitoreo frío por acompañamiento humano con coaching regenerativo.',
            icon: Heart
          },
          {
            title: 'Ecosistema Comunitario',
            description: 'Construimos redes vivas que van más allá de cada proyecto. Una comunidad que evoluciona junta hacia un futuro regenerativo compartiendo recursos y experiencias.',
            icon: Users
          }
        ]
      }
    },

    en: {
      // SEO Meta Information
      meta: {
        title: "PENINSULAR - Regenerative Consulting & Permaculture Mexico | Sustainable Solutions",
        description: "We design, develop and execute personalized regenerative solutions. Permaculture, regenerative agriculture and sustainable technologies for your home in Mexico.",
        keywords: "permaculture Mexico, regenerative consulting, sustainable agriculture, ecological solutions, regenerative design, Yucatan"
      },

      // Navigation
      nav: {
        home: 'Home',
        services: 'Services',
        philosophy: 'Philosophy', 
        tools: 'Tools',
        store: 'Store',
        contact: 'Contact'
      },

      // Hero Section
      hero: {
        title: 'PENINSULAR',
        subtitle: 'Regenerative Solutions',
        description: 'We create self-sufficient solutions that free you from conventional systems. We apply biodynamic methodologies, ancestral wisdom and regenerative technology to design your sustainable sanctuary in total harmony with cosmic rhythms and the earth.',
        cta: 'Start Your Regenerative Journey'
      },

      // Home Overview Cards
      homeCards: [
        {
          title: 'Services',
          description: 'Personalized regenerative solutions that evolve with you',
          icon: Target
        },
        {
          title: 'Philosophy',
          description: 'Regeneration as living philosophy, not fixed technique',
          icon: Heart
        },
        {
          title: 'Tools',
          description: 'Interactive calculators and curated resources',
          icon: Calculator
        },
        {
          title: 'Store',
          description: 'Products, systems and services for your transformation',
          icon: ShoppingCart
        },
        {
          title: 'Contact',
          description: 'Easy access for clients and innovative collaborations',
          icon: Phone
        }
      ],

      // Services Section
      services: {
        title: 'Services',
        subtitle: 'Three pillars of regenerative solutions for a regenerative future',
        items: [
          {
            title: 'Assessment & Design',
            description: 'Site mapping, soil & water analysis, and tailored regenerative blueprints. Comprehensive analysis of your space, family and objectives to create a regenerative plan that perfectly adapts to your specific needs.',
            details: [
              'Detailed site mapping and resource analysis',
              'Family needs and objectives assessment',
              'Soil and water systems analysis',
              'Personalized biodynamic agriculture design',
              'Phased implementation plan',
              '4-hour consultation + detailed report'
            ],
            icon: Target
          },
          {
            title: 'Comprehensive Implementation',
            description: 'Complete systems for food (gardens, forests, compost), water (harvesting, filtration, greywater), and energy (solar, biogas, local climate-adapted design). Construction and establishment of regenerative infrastructure that evolves with your needs.',
            details: [
              'Food production systems (gardens, food forests)',
              'Water infrastructure (harvesting, filtration, greywater)',
              'Energy systems (solar, biogas, bioclimatic design)',
              'Integrated smart technology',
              'Training and knowledge transfer',
              '6-18 month project management'
            ],
            icon: Leaf
          },
          {
            title: 'Complete Transformation',
            description: 'Continuous personal guidance: one-on-one accompaniment, seasonal recalibration, regenerative coaching, and continuous system improvement. We use IoT technology and innovative methodologies to maximize the efficiency of your personalized ecosystem.',
            details: [
              'One-on-one personal accompaniment',
              'Seasonal system recalibration',
              'Continuous regenerative coaching',
              'IoT technology monitoring',
              'Performance analysis and optimization',
              'Technology updates',
              'Continuous technical support',
              'Regenerative community membership included'
            ],
            icon: Zap
          }
        ]
      },

      // Philosophy Section
      philosophy: {
        title: 'Our Philosophy',
        subtitle: 'The regenerative vision we build together as co-creators',
        vision: {
          title: 'Our Vision',
          short: 'Homes as living systems that give back more than they take. Abundance instead of depletion. Prosperity measured in well-being and resilience.',
          expanded: 'We envision a future where every home becomes a living system that gives back more than it takes. A future where abundance replaces depletion, and prosperity is measured in well-being, resilience, and harmony with natural cycles. To invest in regeneration is to invest in life itself: a conscious choice to honor the Earth, our ancestors, and the generations to come.'
        },
        approach: {
          title: 'Philosophy',
          short: 'Regeneration is not a fixed technique, but a living philosophy. We design unique solutions that blend ancestral wisdom and modern innovation, adapting to your family, your space, and your future.',
          expanded: 'For us, regeneration is not a fixed technique, but a living philosophy. We move beyond labels and single methodologies: blending ancestral knowledge with contemporary innovation to design solutions that evolve alongside each family and space. To regenerate is to listen, adapt, and co-create — recognizing that every household and every ecosystem is unique.'
        },
        community: {
          title: 'Community Focus',
          short: 'Every client is a co-creator. PENINSULAR connects families, suppliers, and innovators in a living ecosystem of knowledge and collaboration.',
          expanded: 'Every client is a co-creator. Beyond individual projects, we build a living ecosystem of people, families, and partners who share knowledge, resources, and experiences. PENINSULAR is a bridge between clients, suppliers, and innovators: a collaborative network that accelerates the transition toward a regenerative future.'
        },
        innovation: {
          title: 'Innovation Commitment',
          short: 'Innovation is continuous adaptation. Every solution evolves with you, prioritizing human guidance and balance with nature.',
          expanded: 'Innovation is not an end in itself, but a path of continuous adaptation. Our projects are never bound to a single technique: each solution adapts to the client\'s needs, evolving over time. We integrate sustainable technologies when needed, but always prioritize human accompaniment and balance with nature.'
        },
        team: {
          title: 'Team & Expertise',
          short: 'Our team brings together specialists in permaculture, regenerative agriculture, renewable energy, and ecological design. United by one vision: regenerating the Earth, starting from every home.',
          expanded: 'PENINSULAR was born from the convergence of regenerative design, ancestral knowledge, and contemporary sustainability practices. Our team brings together specialists in permaculture, regenerative agriculture, renewable energy, and ecological design, united by one vision: to regenerate the Earth, starting with every home.'
        }
      },

      // Tools Section
      tools: {
        title: 'Interactive Tools',
        subtitle: 'Calculators, educational guides and curated resources for your transformation',
        apps: [
          {
            title: 'Regenerative Calendar',
            description: 'An interactive calendar integrating moon phases and seasonal shifts to guide the best times to plant, prune, harvest, or recalibrate your systems. It connects you with the rhythms of nature and helps anticipate the needs of your regenerative ecosystem.',
            icon: Calendar
          },
          {
            title: 'Sustainability Assessment',
            description: 'A self-assessment tool that measures your current water, energy, and resource use, identifying areas for improvement. It provides an initial regenerative profile and specific recommendations for your home.',
            icon: CheckCircle
          },
          {
            title: 'Capacity Calculator',
            description: 'An interactive calculator that estimates your land or home\'s capacity for harvested water, renewable energy, and food production. It allows you to visualize self-sufficiency scenarios and design realistic goals.',
            icon: Calculator
          },
          {
            title: 'Climate Adaptation Calculator',
            description: 'A tool designed to analyze climate risks in your region — droughts, heat waves, heavy rains — and adapt your regenerative systems to withstand and thrive under changing conditions.',
            icon: Globe
          }
        ]
      },

      // Store Section
      store: {
        title: 'Peninsular Store',
        subtitle: 'Products, systems and services for your regenerative transformation',
        categories: [
          {
            title: 'Merchandise',
            description: 'Our merchandise line connects style with purpose: clothing, accessories, and educational materials that inspire conversation and fund regenerative projects. Each purchase is a seed for the future.',
            icon: Star
          },
          {
            title: 'Gardening Products',
            description: 'Seeds, preparations, and tools that support living systems. Designed for those who want to implement regenerative practices in their own garden or backyard.',
            icon: Leaf
          },
          {
            title: 'Ready-to-Go Systems',
            description: 'Regenerative infrastructure in accessible kits: composting, water, energy, and crops. Designed for implementation in homes, schools, or communities with minimal technical complexity.',
            icon: Zap
          },
          {
            title: 'Service Packages',
            description: 'Packages designed to bring you into regeneration without major commitments. From quick consultations to full site assessments, with expert guidance.',
            icon: Users
          },
          {
            title: 'Digital Products',
            description: 'Courses, apps, and online communities giving you immediate access to regenerative knowledge. Perfect for those who want to start digitally or complement existing projects.',
            icon: Globe
          }
        ]
      },

      // Contact Section
      contact: {
        title: 'Contact',
        subtitle: 'Easy access for clients and innovative collaborations for suppliers',
        clients: {
          title: 'For Clients',
          description: 'We are here to accompany you at every stage of your regenerative journey. From the first consultation to continuous support, we provide a direct channel to answer questions, schedule assessments, and access the PENINSULAR community.',
          services: [
            'Project quotes with easy access',
            'Site assessment requests',
            'Consultations and technical support',
            'Regenerative community membership',
            'Workshops and continuing education'
          ]
        },
        suppliers: {
          title: 'For Suppliers',
          description: 'We are looking for suppliers, installers, and innovators committed to a regenerative future. We provide an exclusive channel for strategic partnerships, product sourcing, distribution agreements, and innovation collaborations.',
          opportunities: [
            'Partnership requests',
            'Product sourcing',
            'Distribution agreements',
            'Innovation collaborations',
            'Certified installer network'
          ]
        }
      },

      // Unique Features
      features: {
        title: 'Our Unique Approach',
        items: [
          {
            title: 'Personalized Innovation',
            description: 'Every project is unique, designed with you and for you. We combine regenerative methodologies like permaculture, biodynamics, and emerging technologies to create personalized solutions.',
            icon: Lightbulb
          },
          {
            title: 'Flexible Methodologies',
            description: 'Beyond biodynamic: we choose what works best for you. We don\'t limit ourselves to a single technique, selecting and combining the best according to each site\'s needs.',
            icon: Target
          },
          {
            title: 'Personal Accompaniment',
            description: 'Human technology: direct guidance and care at every stage. We replace cold monitoring with human accompaniment through regenerative coaching.',
            icon: Heart
          },
          {
            title: 'Community Ecosystem',
            description: 'We build living networks that go beyond each project. A community that evolves together toward a regenerative future sharing resources and experiences.',
            icon: Users
          }
        ]
      }
    }
  }

  // Real September 2025 moon phases for biodynamic calendar
  const moonPhases = [
    {
      date: 'Sep 7, 2025',
      phase: 'Luna Llena',
      phaseEn: 'Full Moon',
      sign: 'Piscis',
      signEn: 'Pisces',
      recommendation: 'Ideal para cosecha de frutos y hierbas medicinales. Energía máxima para recolección.',
      recommendationEn: 'Ideal for harvesting fruits and medicinal herbs. Maximum energy for collection.',
      color: brandColors.azure
    },
    {
      date: 'Sep 14, 2025',
      phase: 'Luna Menguante',
      phaseEn: 'Waning Moon',
      sign: 'Géminis',
      signEn: 'Gemini',
      recommendation: 'Tiempo de poda y preparación del suelo. Reducir actividades de siembra.',
      recommendationEn: 'Time for pruning and soil preparation. Reduce planting activities.',
      color: brandColors.greyBrown
    },
    {
      date: 'Sep 21, 2025',
      phase: 'Luna Nueva',
      phaseEn: 'New Moon',
      sign: 'Virgo',
      signEn: 'Virgo',
      recommendation: 'Eclipse Solar - Momento poderoso para nuevos comienzos y siembra de raíces.',
      recommendationEn: 'Solar Eclipse - Powerful moment for new beginnings and root planting.',
      color: brandColors.darkOlive
    },
    {
      date: 'Sep 29, 2025',
      phase: 'Luna Creciente',
      phaseEn: 'Waxing Moon',
      sign: 'Sagitario',
      signEn: 'Sagittarius',
      recommendation: 'Excelente para siembra de hojas verdes y trasplantes. Energía ascendente.',
      recommendationEn: 'Excellent for planting leafy greens and transplanting. Rising energy.',
      color: brandColors.pastelGreyOrange
    }
  ]

  // Sustainability assessment questions
  const assessmentQuestions = [
    {
      question: '¿Qué porcentaje de tu energía es renovable?',
      questionEn: 'What percentage of your energy is renewable?',
      options: ['0-25%', '25-50%', '50-75%', '75-100%'],
      scores: [1, 2, 3, 4]
    },
    {
      question: '¿Tienes sistema de captación de agua de lluvia?',
      questionEn: 'Do you have a rainwater harvesting system?',
      options: ['No', 'Básico', 'Intermedio', 'Completo'],
      optionsEn: ['No', 'Basic', 'Intermediate', 'Complete'],
      scores: [1, 2, 3, 4]
    },
    {
      question: '¿Qué porcentaje de tus alimentos produces en casa?',
      questionEn: 'What percentage of your food do you produce at home?',
      options: ['0-10%', '10-30%', '30-60%', '60%+'],
      scores: [1, 2, 3, 4]
    },
    {
      question: '¿Cómo manejas los residuos orgánicos?',
      questionEn: 'How do you handle organic waste?',
      options: ['Basura', 'Compost básico', 'Compost avanzado', 'Sistema integral'],
      optionsEn: ['Trash', 'Basic compost', 'Advanced compost', 'Integral system'],
      scores: [1, 2, 3, 4]
    }
  ]

  // Project gallery data
  const projectGallery = [
    {
      title: 'Casa Autosuficiente Mérida',
      titleEn: 'Self-Sufficient House Mérida',
      description: 'Transformación completa con sistemas de agua, energía y alimentos',
      descriptionEn: 'Complete transformation with water, energy and food systems',
      before: 'Casa convencional con dependencia total de servicios públicos',
      beforeEn: 'Conventional house with total dependence on public services',
      after: '85% autosuficiencia energética, 60% producción de alimentos, 100% captación de agua',
      afterEn: '85% energy self-sufficiency, 60% food production, 100% water harvesting',
      impact: 'Reducción 70% en costos de servicios, mejora en calidad de vida familiar',
      impactEn: '70% reduction in service costs, improvement in family quality of life'
    },
    {
      title: 'Granja Regenerativa Valladolid',
      titleEn: 'Regenerative Farm Valladolid',
      description: 'Diseño de permacultura para producción comercial sustentable',
      descriptionEn: 'Permaculture design for sustainable commercial production',
      before: 'Terreno degradado con baja productividad',
      beforeEn: 'Degraded land with low productivity',
      after: 'Sistema diversificado con 12 cultivos, mejora del suelo, biodiversidad restaurada',
      afterEn: 'Diversified system with 12 crops, soil improvement, restored biodiversity',
      impact: 'Aumento 200% en productividad, regeneración del ecosistema local',
      impactEn: '200% increase in productivity, local ecosystem regeneration'
    },
    {
      title: 'Comunidad Eco-Residencial',
      titleEn: 'Eco-Residential Community',
      description: 'Desarrollo comunitario con infraestructura regenerativa compartida',
      descriptionEn: 'Community development with shared regenerative infrastructure',
      before: 'Desarrollo convencional sin consideraciones ambientales',
      beforeEn: 'Conventional development without environmental considerations',
      after: 'Sistemas compartidos de energía, agua y alimentos para 25 familias',
      afterEn: 'Shared energy, water and food systems for 25 families',
      impact: 'Modelo replicable de vida comunitaria sustentable',
      impactEn: 'Replicable model of sustainable community living'
    }
  ]

  // Navigation handler
  const handleNavigation = (section) => {
    setCurrentSection(section)
  }

  // Assessment handlers
  const handleAssessmentAnswer = (score) => {
    const newAnswers = [...assessmentAnswers, score]
    setAssessmentAnswers(newAnswers)
    
    if (assessmentStep < assessmentQuestions.length - 1) {
      setAssessmentStep(assessmentStep + 1)
    } else {
      const totalScore = newAnswers.reduce((sum, score) => sum + score, 0)
      const maxScore = assessmentQuestions.length * 4
      const percentage = Math.round((totalScore / maxScore) * 100)
      setAssessmentScore(percentage)
    }
  }

  const resetAssessment = () => {
    setAssessmentStep(0)
    setAssessmentAnswers([])
    setAssessmentScore(0)
  }

  // Current content based on language
  const t = content[language]

  // SEO-optimized document head
  useEffect(() => {
    document.title = t.meta.title
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = t.meta.description

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = t.meta.keywords

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PENINSULAR",
      "description": t.meta.description,
      "url": "https://peninsular.mx",
      "sameAs": [
        "https://peninsular.life"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MX",
        "addressRegion": "Yucatán"
      },
      "serviceArea": {
        "@type": "Place",
        "name": "México"
      },
      "services": [
        "Permaculture Consulting",
        "Regenerative Agriculture",
        "Sustainable Design",
        "Ecological Systems"
      ]
    }

    let scriptTag = document.querySelector('script[type="application/ld+json"]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.type = 'application/ld+json'
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(structuredData)
  }, [language, t])

  return (
    <div className="min-h-screen" style={{ backgroundColor: brandColors.orange, color: brandColors.darkGreyBrown }}>
      {/* SEO-optimized Navigation */}
      <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: brandColors.azure, borderColor: brandColors.greyBrown }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColors.pastelGreyOrange }}>
                <Leaf className="w-6 h-6" style={{ color: brandColors.azure }} />
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{ color: brandColors.orange }}>PENINSULAR</h1>
                <p className="text-sm" style={{ color: brandColors.greyYellow }}>
                  {t.hero.subtitle}
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => handleNavigation(key)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === key 
                      ? 'text-white' 
                      : 'hover:text-white'
                  }`}
                  style={{ 
                    color: currentSection === key ? brandColors.orange : brandColors.greyYellow,
                    backgroundColor: currentSection === key ? brandColors.darkOlive : 'transparent'
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="px-3 py-1 rounded-md text-sm font-medium transition-colors"
                style={{ 
                  backgroundColor: brandColors.pastelGreyOrange,
                  color: brandColors.azure
                }}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* HOME SECTION */}
        {currentSection === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="py-20 px-4" style={{ backgroundColor: brandColors.azure }}>
              <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: brandColors.orange }}>
                  {t.hero.title}
                </h1>
                <h2 className="text-2xl md:text-3xl mb-8" style={{ color: brandColors.greyYellow }}>
                  {t.hero.subtitle}
                </h2>
                <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: brandColors.orange }}>
                  {t.hero.description}
                </p>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  style={{ 
                    backgroundColor: brandColors.pastelGreyOrange,
                    color: brandColors.azure,
                    border: 'none'
                  }}
                  onClick={() => handleNavigation('services')}
                >
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </section>

            {/* Overview Cards */}
            <section className="py-16 px-4">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {t.homeCards.map((card, index) => {
                    const IconComponent = card.icon
                    return (
                      <Card 
                        key={index} 
                        className="cursor-pointer transition-all duration-300 hover:scale-105 border-2"
                        style={{ 
                          backgroundColor: brandColors.pastelGreyOrange,
                          borderColor: brandColors.greyBrown
                        }}
                        onClick={() => handleNavigation(Object.keys(t.nav)[index + 1])}
                      >
                        <CardHeader>
                          <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColors.azure }}>
                            <IconComponent className="w-6 h-6" style={{ color: brandColors.orange }} />
                          </div>
                          <CardTitle style={{ color: brandColors.darkGreyBrown }}>{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-center text-sm" style={{ color: brandColors.greyBrown }}>
                            {card.description}
                          </p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* SERVICES SECTION */}
        {currentSection === 'services' && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.azure }}>
                  {t.services.title}
                </h1>
                <p className="text-xl" style={{ color: brandColors.greyBrown }}>
                  {t.services.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {t.services.items.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <Card 
                      key={index} 
                      className="border-2 h-full"
                      style={{ 
                        backgroundColor: brandColors.pastelGreyOrange,
                        borderColor: brandColors.greyBrown
                      }}
                    >
                      <CardHeader>
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColors.azure }}>
                          <IconComponent className="w-8 h-8" style={{ color: brandColors.orange }} />
                        </div>
                        <CardTitle className="text-center text-xl" style={{ color: brandColors.darkGreyBrown }}>
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p style={{ color: brandColors.greyBrown }}>
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: brandColors.darkOlive }} />
                              <span className="text-sm" style={{ color: brandColors.greyBrown }}>
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* PHILOSOPHY SECTION */}
        {currentSection === 'philosophy' && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.azure }}>
                  {t.philosophy.title}
                </h1>
                <p className="text-xl" style={{ color: brandColors.greyBrown }}>
                  {t.philosophy.subtitle}
                </p>
              </div>

              <div className="space-y-12">
                {/* Vision */}
                <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ color: brandColors.azure }}>
                      {t.philosophy.vision.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg font-medium" style={{ color: brandColors.darkGreyBrown }}>
                      {t.philosophy.vision.short}
                    </p>
                    <p style={{ color: brandColors.greyBrown }}>
                      {t.philosophy.vision.expanded}
                    </p>
                  </CardContent>
                </Card>

                {/* Philosophy */}
                <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ color: brandColors.azure }}>
                      {t.philosophy.approach.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg font-medium" style={{ color: brandColors.darkGreyBrown }}>
                      {t.philosophy.approach.short}
                    </p>
                    <p style={{ color: brandColors.greyBrown }}>
                      {t.philosophy.approach.expanded}
                    </p>
                  </CardContent>
                </Card>

                {/* Community */}
                <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ color: brandColors.azure }}>
                      {t.philosophy.community.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg font-medium" style={{ color: brandColors.darkGreyBrown }}>
                      {t.philosophy.community.short}
                    </p>
                    <p style={{ color: brandColors.greyBrown }}>
                      {t.philosophy.community.expanded}
                    </p>
                  </CardContent>
                </Card>

                {/* Innovation */}
                <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ color: brandColors.azure }}>
                      {t.philosophy.innovation.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg font-medium" style={{ color: brandColors.darkGreyBrown }}>
                      {t.philosophy.innovation.short}
                    </p>
                    <p style={{ color: brandColors.greyBrown }}>
                      {t.philosophy.innovation.expanded}
                    </p>
                  </CardContent>
                </Card>

                {/* Team */}
                <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                  <CardHeader>
                    <CardTitle className="text-2xl" style={{ color: brandColors.azure }}>
                      {t.philosophy.team.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg font-medium" style={{ color: brandColors.darkGreyBrown }}>
                      {t.philosophy.team.short}
                    </p>
                    <p style={{ color: brandColors.greyBrown }}>
                      {t.philosophy.team.expanded}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* TOOLS SECTION */}
        {currentSection === 'tools' && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.azure }}>
                  {t.tools.title}
                </h1>
                <p className="text-xl" style={{ color: brandColors.greyBrown }}>
                  {t.tools.subtitle}
                </p>
              </div>

              <Tabs defaultValue="calendar" className="space-y-8">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: brandColors.pastelGreyOrange }}>
                  <TabsTrigger value="calendar" style={{ color: brandColors.darkGreyBrown }}>
                    {language === 'es' ? 'Calendario' : 'Calendar'}
                  </TabsTrigger>
                  <TabsTrigger value="assessment" style={{ color: brandColors.darkGreyBrown }}>
                    {language === 'es' ? 'Evaluación' : 'Assessment'}
                  </TabsTrigger>
                  <TabsTrigger value="calculator" style={{ color: brandColors.darkGreyBrown }}>
                    {language === 'es' ? 'Calculadora' : 'Calculator'}
                  </TabsTrigger>
                  <TabsTrigger value="gallery" style={{ color: brandColors.darkGreyBrown }}>
                    {language === 'es' ? 'Galería' : 'Gallery'}
                  </TabsTrigger>
                </TabsList>

                {/* Regenerative Calendar */}
                <TabsContent value="calendar">
                  <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                    <CardHeader>
                      <CardTitle className="text-2xl" style={{ color: brandColors.azure }}>
                        {t.tools.apps[0].title}
                      </CardTitle>
                      <CardDescription style={{ color: brandColors.greyBrown }}>
                        {t.tools.apps[0].description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {moonPhases.map((phase, index) => (
                          <Card 
                            key={index} 
                            className="border cursor-pointer transition-all duration-300 hover:scale-105"
                            style={{ 
                              backgroundColor: brandColors.orange,
                              borderColor: phase.color
                            }}
                            onClick={() => setCurrentPhase(index)}
                          >
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <div>
                                  <CardTitle className="text-lg" style={{ color: brandColors.darkGreyBrown }}>
                                    {language === 'es' ? phase.phase : phase.phaseEn}
                                  </CardTitle>
                                  <p className="text-sm" style={{ color: brandColors.greyBrown }}>
                                    {phase.date} - {language === 'es' ? phase.sign : phase.signEn}
                                  </p>
                                </div>
                                <Moon className="w-8 h-8" style={{ color: phase.color }} />
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm" style={{ color: brandColors.greyBrown }}>
                                {language === 'es' ? phase.recommendation : phase.recommendationEn}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Sustainability Assessment */}
                <TabsContent value="assessment">
                  <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                    <CardHeader>
                      <CardTitle className="text-2xl" style={{ color: brandColors.azure }}>
                        {t.tools.apps[1].title}
                      </CardTitle>
                      <CardDescription style={{ color: brandColors.greyBrown }}>
                        {t.tools.apps[1].description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {assessmentScore === 0 ? (
                        <div className="space-y-6">
                          <div className="text-center">
                            <h3 className="text-lg font-medium mb-2" style={{ color: brandColors.darkGreyBrown }}>
                              {language === 'es' ? 'Pregunta' : 'Question'} {assessmentStep + 1} {language === 'es' ? 'de' : 'of'} {assessmentQuestions.length}
                            </h3>
                            <p className="text-xl mb-6" style={{ color: brandColors.greyBrown }}>
                              {language === 'es' ? assessmentQuestions[assessmentStep].question : assessmentQuestions[assessmentStep].questionEn}
                            </p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {assessmentQuestions[assessmentStep].options.map((option, index) => (
                              <Button
                                key={index}
                                className="p-4 h-auto text-left border"
                                style={{ 
                                  borderColor: brandColors.greyBrown,
                                  color: brandColors.darkGreyBrown,
                                  backgroundColor: brandColors.orange
                                }}
                                onClick={() => handleAssessmentAnswer(assessmentQuestions[assessmentStep].scores[index])}
                              >
                                {language === 'es' ? option : (assessmentQuestions[assessmentStep].optionsEn?.[index] || option)}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center space-y-6">
                          <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl font-bold" 
                               style={{ backgroundColor: brandColors.azure, color: brandColors.orange }}>
                            {assessmentScore}%
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-2" style={{ color: brandColors.azure }}>
                              {language === 'es' ? 'Tu Nivel de Soberanía' : 'Your Sovereignty Level'}
                            </h3>
                            <p className="text-lg" style={{ color: brandColors.greyBrown }}>
                              {assessmentScore < 40 
                                ? (language === 'es' ? 'Iniciando el camino regenerativo' : 'Starting the regenerative journey')
                                : assessmentScore < 70
                                ? (language === 'es' ? 'Progreso significativo hacia la autonomía' : 'Significant progress towards autonomy')
                                : (language === 'es' ? 'Excelente nivel de soberanía regenerativa' : 'Excellent level of regenerative sovereignty')
                              }
                            </p>
                          </div>
                          <Button 
                            onClick={resetAssessment}
                            style={{ 
                              backgroundColor: brandColors.azure,
                              color: brandColors.orange,
                              border: 'none'
                            }}
                          >
                            {language === 'es' ? 'Evaluar de Nuevo' : 'Assess Again'}
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Capacity Calculator */}
                <TabsContent value="calculator">
                  <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                    <CardHeader>
                      <CardTitle className="text-2xl" style={{ color: brandColors.azure }}>
                        {t.tools.apps[2].title}
                      </CardTitle>
                      <CardDescription style={{ color: brandColors.greyBrown }}>
                        {t.tools.apps[2].description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border" style={{ backgroundColor: brandColors.orange, borderColor: brandColors.greyBrown }}>
                          <CardHeader>
                            <CardTitle className="text-lg" style={{ color: brandColors.azure }}>
                              {language === 'es' ? 'Agua' : 'Water'}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <p className="text-sm" style={{ color: brandColors.greyBrown }}>
                                {language === 'es' ? 'Captación anual estimada:' : 'Estimated annual harvesting:'}
                              </p>
                              <p className="text-2xl font-bold" style={{ color: brandColors.azure }}>
                                15,000L
                              </p>
                              <p className="text-xs" style={{ color: brandColors.greyBrown }}>
                                {language === 'es' ? 'Basado en 100m² de techo' : 'Based on 100m² roof area'}
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border" style={{ backgroundColor: brandColors.orange, borderColor: brandColors.greyBrown }}>
                          <CardHeader>
                            <CardTitle className="text-lg" style={{ color: brandColors.azure }}>
                              {language === 'es' ? 'Energía' : 'Energy'}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <p className="text-sm" style={{ color: brandColors.greyBrown }}>
                                {language === 'es' ? 'Generación solar anual:' : 'Annual solar generation:'}
                              </p>
                              <p className="text-2xl font-bold" style={{ color: brandColors.azure }}>
                                8,500 kWh
                              </p>
                              <p className="text-xs" style={{ color: brandColors.greyBrown }}>
                                {language === 'es' ? 'Sistema de 5kW instalado' : '5kW system installed'}
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border" style={{ backgroundColor: brandColors.orange, borderColor: brandColors.greyBrown }}>
                          <CardHeader>
                            <CardTitle className="text-lg" style={{ color: brandColors.azure }}>
                              {language === 'es' ? 'Alimentos' : 'Food'}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <p className="text-sm" style={{ color: brandColors.greyBrown }}>
                                {language === 'es' ? 'Producción anual estimada:' : 'Estimated annual production:'}
                              </p>
                              <p className="text-2xl font-bold" style={{ color: brandColors.azure }}>
                                450 kg
                              </p>
                              <p className="text-xs" style={{ color: brandColors.greyBrown }}>
                                {language === 'es' ? 'En 50m² de huerto intensivo' : 'In 50m² intensive garden'}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Project Gallery */}
                <TabsContent value="gallery">
                  <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                    <CardHeader>
                      <CardTitle className="text-2xl" style={{ color: brandColors.azure }}>
                        {language === 'es' ? 'Galería de Proyectos' : 'Project Gallery'}
                      </CardTitle>
                      <CardDescription style={{ color: brandColors.greyBrown }}>
                        {language === 'es' ? 'Casos de éxito y transformaciones reales' : 'Success cases and real transformations'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {projectGallery.map((project, index) => (
                          <Card key={index} className="border" style={{ backgroundColor: brandColors.orange, borderColor: brandColors.greyBrown }}>
                            <CardHeader>
                              <CardTitle style={{ color: brandColors.azure }}>
                                {language === 'es' ? project.title : project.titleEn}
                              </CardTitle>
                              <CardDescription style={{ color: brandColors.greyBrown }}>
                                {language === 'es' ? project.description : project.descriptionEn}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <Tabs defaultValue="before" className="space-y-4">
                                <TabsList style={{ backgroundColor: brandColors.pastelGreyOrange }}>
                                  <TabsTrigger value="before" style={{ color: brandColors.darkGreyBrown }}>
                                    {language === 'es' ? 'Antes' : 'Before'}
                                  </TabsTrigger>
                                  <TabsTrigger value="after" style={{ color: brandColors.darkGreyBrown }}>
                                    {language === 'es' ? 'Después' : 'After'}
                                  </TabsTrigger>
                                  <TabsTrigger value="impact" style={{ color: brandColors.darkGreyBrown }}>
                                    {language === 'es' ? 'Impacto' : 'Impact'}
                                  </TabsTrigger>
                                </TabsList>
                                <TabsContent value="before">
                                  <p style={{ color: brandColors.greyBrown }}>
                                    {language === 'es' ? project.before : project.beforeEn}
                                  </p>
                                </TabsContent>
                                <TabsContent value="after">
                                  <p style={{ color: brandColors.greyBrown }}>
                                    {language === 'es' ? project.after : project.afterEn}
                                  </p>
                                </TabsContent>
                                <TabsContent value="impact">
                                  <p style={{ color: brandColors.greyBrown }}>
                                    {language === 'es' ? project.impact : project.impactEn}
                                  </p>
                                </TabsContent>
                              </Tabs>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {/* STORE SECTION */}
        {currentSection === 'store' && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.azure }}>
                  {t.store.title}
                </h1>
                <p className="text-xl" style={{ color: brandColors.greyBrown }}>
                  {t.store.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.store.categories.map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <Card 
                      key={index} 
                      className="border-2 h-full cursor-pointer transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: brandColors.pastelGreyOrange,
                        borderColor: brandColors.greyBrown
                      }}
                    >
                      <CardHeader>
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColors.azure }}>
                          <IconComponent className="w-8 h-8" style={{ color: brandColors.orange }} />
                        </div>
                        <CardTitle className="text-center text-xl" style={{ color: brandColors.darkGreyBrown }}>
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p style={{ color: brandColors.greyBrown }}>
                          {category.description}
                        </p>
                        <div className="mt-4 text-center">
                          <Badge 
                            style={{ 
                              borderColor: brandColors.azure,
                              color: brandColors.azure
                            }}
                          >
                            {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* CONTACT SECTION */}
        {currentSection === 'contact' && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColors.azure }}>
                  {t.contact.title}
                </h1>
                <p className="text-xl" style={{ color: brandColors.greyBrown }}>
                  {t.contact.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* For Clients */}
                <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColors.azure }}>
                      <Users className="w-8 h-8" style={{ color: brandColors.orange }} />
                    </div>
                    <CardTitle className="text-center text-2xl" style={{ color: brandColors.azure }}>
                      {t.contact.clients.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p style={{ color: brandColors.greyBrown }}>
                      {t.contact.clients.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium" style={{ color: brandColors.darkGreyBrown }}>
                        {language === 'es' ? 'Servicios Disponibles:' : 'Available Services:'}
                      </h4>
                      {t.contact.clients.services.map((service, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: brandColors.darkOlive }} />
                          <span className="text-sm" style={{ color: brandColors.greyBrown }}>
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3 pt-4 border-t" style={{ borderColor: brandColors.greyBrown }}>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5" style={{ color: brandColors.azure }} />
                        <span style={{ color: brandColors.greyBrown }}>clientes@peninsular.mx</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5" style={{ color: brandColors.azure }} />
                        <span style={{ color: brandColors.greyBrown }}>+52 999 XXX XXXX</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5" style={{ color: brandColors.azure }} />
                        <span style={{ color: brandColors.greyBrown }}>Mérida, Yucatán, México</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* For Suppliers */}
                <Card className="border-2" style={{ backgroundColor: brandColors.pastelGreyOrange, borderColor: brandColors.greyBrown }}>
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColors.azure }}>
                      <Zap className="w-8 h-8" style={{ color: brandColors.orange }} />
                    </div>
                    <CardTitle className="text-center text-2xl" style={{ color: brandColors.azure }}>
                      {t.contact.suppliers.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p style={{ color: brandColors.greyBrown }}>
                      {t.contact.suppliers.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium" style={{ color: brandColors.darkGreyBrown }}>
                        {language === 'es' ? 'Oportunidades Disponibles:' : 'Available Opportunities:'}
                      </h4>
                      {t.contact.suppliers.opportunities.map((opportunity, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: brandColors.darkOlive }} />
                          <span className="text-sm" style={{ color: brandColors.greyBrown }}>
                            {opportunity}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3 pt-4 border-t" style={{ borderColor: brandColors.greyBrown }}>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5" style={{ color: brandColors.azure }} />
                        <span style={{ color: brandColors.greyBrown }}>proveedores@peninsular.mx</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5" style={{ color: brandColors.azure }} />
                        <span style={{ color: brandColors.greyBrown }}>+52 999 XXX XXXX</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5" style={{ color: brandColors.azure }} />
                        <span style={{ color: brandColors.greyBrown }}>peninsular.mx/proveedores</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Unique Features Section (shown on all pages) */}
        <section className="py-16 px-4" style={{ backgroundColor: brandColors.azure }}>
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brandColors.orange }}>
                {t.features.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.features.items.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card 
                    key={index} 
                    className="border-2 text-center"
                    style={{ 
                      backgroundColor: brandColors.pastelGreyOrange,
                      borderColor: brandColors.greyBrown
                    }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColors.azure }}>
                        <IconComponent className="w-6 h-6" style={{ color: brandColors.orange }} />
                      </div>
                      <CardTitle className="text-lg" style={{ color: brandColors.darkGreyBrown }}>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm" style={{ color: brandColors.greyBrown }}>
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      {/* SEO-optimized Footer */}
      <footer className="py-12 px-4 border-t" style={{ backgroundColor: brandColors.darkGreyBrown, borderColor: brandColors.greyBrown }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: brandColors.pastelGreyOrange }}>
                  <Leaf className="w-5 h-5" style={{ color: brandColors.azure }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: brandColors.orange }}>PENINSULAR</h3>
                  <p className="text-sm" style={{ color: brandColors.greyYellow }}>
                    {t.hero.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-sm" style={{ color: brandColors.greyYellow }}>
                {language === 'es' 
                  ? 'Liderando la transformación regenerativa en México y el mundo.'
                  : 'Leading regenerative transformation in Mexico and the world.'
                }
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-4" style={{ color: brandColors.orange }}>
                {language === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
              </h4>
              <div className="space-y-2">
                {Object.entries(t.nav).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => handleNavigation(key)}
                    className="block text-sm hover:underline transition-colors"
                    style={{ color: brandColors.greyYellow }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-medium mb-4" style={{ color: brandColors.orange }}>
                {language === 'es' ? 'Contacto' : 'Contact'}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" style={{ color: brandColors.greyYellow }} />
                  <span className="text-sm" style={{ color: brandColors.greyYellow }}>
                    info@peninsular.mx
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" style={{ color: brandColors.greyYellow }} />
                  <span className="text-sm" style={{ color: brandColors.greyYellow }}>
                    peninsular.mx | peninsular.life
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" style={{ color: brandColors.greyYellow }} />
                  <span className="text-sm" style={{ color: brandColors.greyYellow }}>
                    Yucatán, México
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: brandColors.greyBrown }}>
            <p className="text-sm" style={{ color: brandColors.greyYellow }}>
              © 2025 PENINSULAR. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
