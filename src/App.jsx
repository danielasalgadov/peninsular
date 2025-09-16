import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Leaf, Sun, Droplets, Home, Users, Phone, Mail, MapPin, Moon, Calendar, Calculator, Image, ChevronRight } from 'lucide-react'
import './App.css'

// Brand Colors from Pinterest Board
const brandColors = {
  oceanBlue: '#2B5F7F',
  deepBlue: '#1A4A5C',
  botanicalRed: '#8B4B5C',
  darkGreen: '#2D4A3A',
  sage: '#7A8471',
  cream: '#F4E6D1',
  warmBeige: '#E8D5B7',
  earthBrown: '#6B5B47'
}

// Farmer Icon Component
const FarmerIcon = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <g>
      <ellipse cx="50" cy="25" rx="20" ry="5" />
      <rect x="30" y="20" width="40" height="10" rx="2" />
      <circle cx="50" cy="35" r="8" />
      <rect x="45" y="43" width="10" height="25" rx="2" />
      <circle cx="50" cy="50" r="3" />
      <line x1="50" y1="47" x2="50" y2="53" strokeWidth="1" stroke="currentColor" />
      <line x1="47" y1="49" x2="53" y2="49" strokeWidth="1" stroke="currentColor" />
      <rect x="35" y="45" width="8" height="3" rx="1" />
      <rect x="57" y="45" width="8" height="3" rx="1" />
      <rect x="67" y="30" width="2" height="40" rx="1" />
      <rect x="42" y="68" width="6" height="15" rx="1" />
      <rect x="52" y="68" width="6" height="15" rx="1" />
      <ellipse cx="45" cy="85" rx="4" ry="2" />
      <ellipse cx="55" cy="85" rx="4" ry="2" />
    </g>
  </svg>
)

// Biodynamic Calendar Component
const BiodynamicCalendar = ({ language }) => {
  const [currentPhase, setCurrentPhase] = useState('waxing')
  const [recommendation, setRecommendation] = useState('')

  useEffect(() => {
    // Simulate lunar phase calculation
    const phases = ['new', 'waxing', 'full', 'waning']
    const recommendations = {
      es: {
        new: 'Luna Nueva: Tiempo de siembra de raíces y tubérculos. Aplicar preparado 500.',
        waxing: 'Luna Creciente: Ideal para siembra de hojas verdes. Preparar compost biodinámico.',
        full: 'Luna Llena: Cosecha de frutos y aplicación de preparado 501 al amanecer.',
        waning: 'Luna Menguante: Poda y preparación de preparados herbales 502-507.'
      },
      en: {
        new: 'New Moon: Time for sowing roots and tubers. Apply preparation 500.',
        waxing: 'Waxing Moon: Ideal for sowing leafy greens. Prepare biodynamic compost.',
        full: 'Full Moon: Harvest fruits and apply preparation 501 at dawn.',
        waning: 'Waning Moon: Pruning and preparation of herbal preparations 502-507.'
      }
    }
    
    setRecommendation(recommendations[language][currentPhase])
  }, [currentPhase, language])

  return (
    <Card className="border-2" style={{ borderColor: brandColors.sage, backgroundColor: brandColors.cream }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" style={{ color: brandColors.deepBlue }}>
          <Moon className="h-5 w-5" />
          {language === 'es' ? 'Calendario Biodinámico' : 'Biodynamic Calendar'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center" 
               style={{ backgroundColor: brandColors.sage }}>
            <Moon className="h-8 w-8" style={{ color: brandColors.cream }} />
          </div>
          <p className="text-sm" style={{ color: brandColors.earthBrown }}>
            {recommendation}
          </p>
        </div>
        <Button 
          size="sm" 
          className="w-full"
          style={{ backgroundColor: brandColors.botanicalRed, color: brandColors.cream }}
          onClick={() => {
            const phases = ['new', 'waxing', 'full', 'waning']
            const currentIndex = phases.indexOf(currentPhase)
            setCurrentPhase(phases[(currentIndex + 1) % phases.length])
          }}
        >
          {language === 'es' ? 'Siguiente Fase' : 'Next Phase'}
        </Button>
      </CardContent>
    </Card>
  )
}

// Sustainability Assessment Component
const SustainabilityAssessment = ({ language }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const questions = {
    es: [
      {
        question: "¿Qué porcentaje de tu comida produces actualmente?",
        options: ["0-25%", "25-50%", "50-75%", "75-100%"],
        scores: [1, 2, 3, 4]
      },
      {
        question: "¿Tienes sistema de captación de agua de lluvia?",
        options: ["No", "Parcial", "Completo", "Con filtración"],
        scores: [1, 2, 3, 4]
      },
      {
        question: "¿Qué tipo de energía utilizas principalmente?",
        options: ["Red eléctrica", "Híbrido", "Solar parcial", "100% renovable"],
        scores: [1, 2, 3, 4]
      }
    ],
    en: [
      {
        question: "What percentage of your food do you currently produce?",
        options: ["0-25%", "25-50%", "50-75%", "75-100%"],
        scores: [1, 2, 3, 4]
      },
      {
        question: "Do you have a rainwater harvesting system?",
        options: ["No", "Partial", "Complete", "With filtration"],
        scores: [1, 2, 3, 4]
      },
      {
        question: "What type of energy do you mainly use?",
        options: ["Grid electricity", "Hybrid", "Partial solar", "100% renewable"],
        scores: [1, 2, 3, 4]
      }
    ]
  }

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)
    
    if (currentQuestion < questions[language].length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate score
      const totalScore = newAnswers.reduce((sum, answer, index) => {
        return sum + questions[language][index].scores[answer]
      }, 0)
      setScore(Math.round((totalScore / (questions[language].length * 4)) * 100))
      setShowResults(true)
    }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    return (
      <Card className="border-2" style={{ borderColor: brandColors.oceanBlue, backgroundColor: brandColors.warmBeige }}>
        <CardHeader>
          <CardTitle style={{ color: brandColors.deepBlue }}>
            {language === 'es' ? 'Tu Nivel de Soberanía' : 'Your Sovereignty Level'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className="text-4xl font-bold mb-2" style={{ color: brandColors.botanicalRed }}>
              {score}%
            </div>
            <Progress value={score} className="mb-4" />
            <p className="text-sm mb-4" style={{ color: brandColors.earthBrown }}>
              {language === 'es' 
                ? score > 70 ? 'Excelente nivel de autosuficiencia' : score > 40 ? 'Buen progreso hacia la soberanía' : 'Gran potencial de mejora'
                : score > 70 ? 'Excellent level of self-sufficiency' : score > 40 ? 'Good progress toward sovereignty' : 'Great potential for improvement'
              }
            </p>
            <Button 
              onClick={resetAssessment}
              style={{ backgroundColor: brandColors.sage, color: brandColors.cream }}
            >
              {language === 'es' ? 'Evaluar de Nuevo' : 'Assess Again'}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2" style={{ borderColor: brandColors.oceanBlue, backgroundColor: brandColors.warmBeige }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" style={{ color: brandColors.deepBlue }}>
          <Calculator className="h-5 w-5" />
          {language === 'es' ? 'Evaluación de Sustentabilidad' : 'Sustainability Assessment'}
        </CardTitle>
        <CardDescription style={{ color: brandColors.earthBrown }}>
          {language === 'es' ? `Pregunta ${currentQuestion + 1} de ${questions[language].length}` : `Question ${currentQuestion + 1} of ${questions[language].length}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-4" style={{ color: brandColors.deepBlue }}>
            {questions[language][currentQuestion].question}
          </h3>
          <div className="space-y-2">
            {questions[language][currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleAnswer(index)}
                style={{ 
                  borderColor: brandColors.sage,
                  color: brandColors.earthBrown
                }}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Project Gallery Component
const ProjectGallery = ({ language }) => {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = {
    es: [
      {
        title: "Casa Autosuficiente Mérida",
        description: "Transformación completa de 2 hectáreas con huerto biodinámico, captación de agua y energía solar.",
        results: "100% autosuficiencia alimentaria, 80% reducción en costos energéticos"
      },
      {
        title: "Eco-Villa Tulum",
        description: "Diseño regenerativo con arquitectura maya moderna, sistemas off-grid y permacultura integral.",
        results: "Resistencia total a huracanes, soberanía hídrica completa"
      },
      {
        title: "Refugio Climático Valladolid",
        description: "Preparación para crisis climática con sistemas de emergencia y producción de alimentos resiliente.",
        results: "Preparación para 6 meses de autonomía total"
      }
    ],
    en: [
      {
        title: "Self-Sufficient House Mérida",
        description: "Complete transformation of 2 hectares with biodynamic garden, water harvesting and solar energy.",
        results: "100% food self-sufficiency, 80% reduction in energy costs"
      },
      {
        title: "Eco-Villa Tulum",
        description: "Regenerative design with modern Mayan architecture, off-grid systems and integral permaculture.",
        results: "Total hurricane resistance, complete water sovereignty"
      },
      {
        title: "Climate Refuge Valladolid",
        description: "Climate crisis preparation with emergency systems and resilient food production.",
        results: "Preparation for 6 months of total autonomy"
      }
    ]
  }

  return (
    <Card className="border-2" style={{ borderColor: brandColors.botanicalRed, backgroundColor: brandColors.cream }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" style={{ color: brandColors.deepBlue }}>
          <Image className="h-5 w-5" />
          {language === 'es' ? 'Proyectos Realizados' : 'Completed Projects'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedProject.toString()} onValueChange={(value) => setSelectedProject(parseInt(value))}>
          <TabsList className="grid w-full grid-cols-3">
            {projects[language].map((_, index) => (
              <TabsTrigger key={index} value={index.toString()}>
                {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>
          {projects[language].map((project, index) => (
            <TabsContent key={index} value={index.toString()}>
              <div className="space-y-3">
                <h3 className="font-semibold" style={{ color: brandColors.deepBlue }}>
                  {project.title}
                </h3>
                <p className="text-sm" style={{ color: brandColors.earthBrown }}>
                  {project.description}
                </p>
                <div className="p-3 rounded" style={{ backgroundColor: brandColors.sage + '20' }}>
                  <p className="text-sm font-medium" style={{ color: brandColors.botanicalRed }}>
                    {language === 'es' ? 'Resultados:' : 'Results:'} {project.results}
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

function App() {
  const [language, setLanguage] = useState('es')

  const content = {
    es: {
      nav: {
        services: 'Servicios',
        about: 'Nosotros',
        contact: 'Contacto',
        tools: 'Herramientas'
      },
      hero: {
        title: 'PENINSULAR',
        subtitle: 'Consultoría Sustentable',
        description: 'Creamos santuarios autosuficientes que te liberan del sistema convencional. Aplicamos metodologías biodinámicas de Rudolf Steiner, sabiduría maya ancestral y tecnología regenerativa para diseñar tu independencia total en armonía con los ritmos cósmicos y la tierra sagrada de Yucatán.',
        cta: 'Iniciar Soberanía'
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Metodologías biodinámicas y diseño consciente para la soberanía alimentaria',
        starter: {
          title: 'Bio-Starter',
          description: 'Evaluación integral de tu espacio aplicando principios de Rudolf Steiner. Incluye análisis de suelo biodinámico, calendario lunar personalizado, y plan de transición hacia la autosuficiencia. Perfecto para iniciar tu desconexión del sistema convencional.',
          details: '• Análisis biodinámico del terreno\n• Calendario lunar personalizado\n• Plan de siembra estacional\n• Consulta de 3 horas + seguimiento'
        },
        design: {
          title: 'Diseño Holístico',
          description: 'Arquitectura sagrada y paisajismo regenerativo adaptado al clima extremo de Yucatán. Integramos permacultura, captación de agua, energía solar y diseño bioclimático para crear tu santuario autosuficiente con conciencia espiritual.',
          details: '• Diseño arquitectónico bioclimático\n• Sistema de permacultura integral\n• Captación y filtrado de agua\n• Energía renovable off-grid\n• Gestión de proyecto 6-12 meses'
        },
        transformation: {
          title: 'Transformación Soberana',
          description: 'Revolución completa hacia la independencia total. Desde huertos biodinámicos hasta sistemas off-grid, creamos tu ecosistema autosuficiente. Incluye formación en metodologías Steiner, manejo de crisis climáticas y soberanía alimentaria permanente.',
          details: '• Implementación llave en mano\n• Formación en biodynamia avanzada\n• Sistemas de emergencia climática\n• Soberanía alimentaria completa\n• Acompañamiento 12-24 meses'
        }
      },
      features: {
        title: 'Nuestra Propuesta Única',
        biodynamic: {
          title: 'Agricultura Biodinámica',
          description: 'Aplicamos las preparaciones biodinámicas de Steiner (500-508) adaptadas al suelo calcáreo yucateco. Trabajamos con ritmos cósmicos, compostaje vivo y preparados herbales para regenerar la tierra y crear alimentos con fuerza vital superior.'
        },
        climate: {
          title: 'Adaptación Climática',
          description: 'Diseñamos sistemas resilientes para huracanes, sequías extremas y calor intenso. Incluye captación de agua de lluvia, refugios naturales, cultivos resistentes y protocolos de emergencia para mantener la autosuficiencia en cualquier crisis.'
        },
        technology: {
          title: 'Tecnología Sustentable',
          description: 'Sistemas solares off-grid, biodigestores, filtros de agua naturales, refrigeración subterránea y arquitectura bioclimática. Tecnología que te libera de la dependencia energética y te conecta con los ciclos naturales.'
        },
        holistic: {
          title: 'Enfoque Holístico',
          description: 'Integramos conocimiento maya ancestral, principios antroposóficos de Steiner, permacultura moderna y conciencia espiritual. Cada proyecto honra la conexión sagrada entre humano, tierra y cosmos para crear verdadera abundancia.'
        }
      },
      tools: {
        title: 'Herramientas Interactivas',
        subtitle: 'Explora tu potencial de transformación'
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Comienza tu transformación hacia la vida sustentable',
        location: 'Península de Yucatán, México',
        cta: 'Solicitar Consulta'
      }
    },
    en: {
      nav: {
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        tools: 'Tools'
      },
      hero: {
        title: 'PENINSULAR',
        subtitle: 'Sustainable Consulting',
        description: 'We create self-sufficient sanctuaries that liberate you from conventional systems. Applying Rudolf Steiner\'s biodynamic methodologies, ancestral Mayan wisdom, and regenerative technology to design your total independence in harmony with cosmic rhythms and Yucatan\'s sacred land.',
        cta: 'Begin Sovereignty'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Biodynamic methodologies and conscious design for food sovereignty',
        starter: {
          title: 'Bio-Starter',
          description: 'Comprehensive space assessment applying Rudolf Steiner principles. Includes biodynamic soil analysis, personalized lunar calendar, and transition plan toward self-sufficiency. Perfect for beginning your disconnection from conventional systems.',
          details: '• Biodynamic terrain analysis\n• Personalized lunar calendar\n• Seasonal planting plan\n• 3-hour consultation + follow-up'
        },
        design: {
          title: 'Holistic Design',
          description: 'Sacred architecture and regenerative landscaping adapted to Yucatan\'s extreme climate. We integrate permaculture, water harvesting, solar energy, and bioclimatic design to create your self-sufficient sanctuary with spiritual consciousness.',
          details: '• Bioclimatic architectural design\n• Integral permaculture system\n• Water capture and filtration\n• Off-grid renewable energy\n• 6-12 month project management'
        },
        transformation: {
          title: 'Sovereign Transformation',
          description: 'Complete revolution toward total independence. From biodynamic gardens to off-grid systems, we create your self-sufficient ecosystem. Includes Steiner methodology training, climate crisis management, and permanent food sovereignty.',
          details: '• Turnkey implementation\n• Advanced biodynamic training\n• Climate emergency systems\n• Complete food sovereignty\n• 12-24 month accompaniment'
        }
      },
      features: {
        title: 'Our Unique Approach',
        biodynamic: {
          title: 'Biodynamic Agriculture',
          description: 'We apply Steiner\'s biodynamic preparations (500-508) adapted to Yucatecan limestone soil. Working with cosmic rhythms, living compost, and herbal preparations to regenerate earth and create foods with superior life force.'
        },
        climate: {
          title: 'Climate Adaptation',
          description: 'We design resilient systems for hurricanes, extreme droughts, and intense heat. Includes rainwater harvesting, natural shelters, resistant crops, and emergency protocols to maintain self-sufficiency through any crisis.'
        },
        technology: {
          title: 'Sustainable Technology',
          description: 'Off-grid solar systems, biodigesters, natural water filters, underground cooling, and bioclimatic architecture. Technology that frees you from energy dependence and connects you with natural cycles.'
        },
        holistic: {
          title: 'Holistic Approach',
          description: 'We integrate ancestral Mayan knowledge, Steiner\'s anthroposophical principles, modern permaculture, and spiritual consciousness. Each project honors the sacred connection between human, earth, and cosmos to create true abundance.'
        }
      },
      tools: {
        title: 'Interactive Tools',
        subtitle: 'Explore your transformation potential'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Begin your transformation to sustainable living',
        location: 'Yucatan Peninsula, Mexico',
        cta: 'Request Consultation'
      }
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen" style={{ 
      background: `linear-gradient(135deg, ${brandColors.oceanBlue}15 0%, ${brandColors.sage}15 100%)` 
    }}>
      {/* Navigation */}
      <nav className="backdrop-blur-sm shadow-sm sticky top-0 z-50" style={{ 
        backgroundColor: `${brandColors.cream}95` 
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <FarmerIcon className="h-10 w-10" style={{ color: brandColors.earthBrown }} />
              <span className="text-2xl font-bold" style={{ color: brandColors.deepBlue }}>
                PENINSULAR
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="transition-colors hover:opacity-80" 
                 style={{ color: brandColors.earthBrown }}>
                {t.nav.services}
              </a>
              <a href="#about" className="transition-colors hover:opacity-80" 
                 style={{ color: brandColors.earthBrown }}>
                {t.nav.about}
              </a>
              <a href="#tools" className="transition-colors hover:opacity-80" 
                 style={{ color: brandColors.earthBrown }}>
                {t.nav.tools}
              </a>
              <a href="#contact" className="transition-colors hover:opacity-80" 
                 style={{ color: brandColors.earthBrown }}>
                {t.nav.contact}
              </a>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                style={{ 
                  borderColor: brandColors.sage,
                  color: brandColors.earthBrown
                }}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${brandColors.botanicalRed}20 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, ${brandColors.oceanBlue}20 0%, transparent 50%)`,
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <FarmerIcon className="h-20 w-20 mx-auto mb-6" style={{ color: brandColors.earthBrown }} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4" 
              style={{ 
                color: brandColors.deepBlue,
                textShadow: `2px 2px 4px ${brandColors.cream}50`
              }}>
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-6" 
             style={{ color: brandColors.sage }}>
            {t.hero.subtitle}
          </p>
          
          <p className="text-lg max-w-4xl mx-auto mb-8 leading-relaxed" 
             style={{ color: brandColors.earthBrown }}>
            {t.hero.description}
          </p>
          
          <Button 
            size="lg" 
            className="px-8 py-3 text-lg font-medium transition-all hover:scale-105"
            style={{ 
              backgroundColor: brandColors.botanicalRed,
              color: brandColors.cream,
              border: 'none'
            }}
          >
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" 
               style={{ backgroundColor: brandColors.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: brandColors.deepBlue }}>
              {t.services.title}
            </h2>
            <p className="text-xl" style={{ color: brandColors.earthBrown }}>
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-opacity-60 transition-all hover:shadow-lg" 
                  style={{ 
                    borderColor: brandColors.sage,
                    backgroundColor: brandColors.warmBeige 
                  }}>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: brandColors.deepBlue }}>
                  {t.services.starter.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4" style={{ color: brandColors.earthBrown }}>
                  {t.services.starter.description}
                </CardDescription>
                <div className="text-sm" style={{ color: brandColors.sage }}>
                  {t.services.starter.details.split('\n').map((detail, index) => (
                    <div key={index}>{detail}</div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg transform hover:scale-105" 
                  style={{ 
                    borderColor: brandColors.botanicalRed,
                    backgroundColor: brandColors.cream,
                    boxShadow: `0 4px 20px ${brandColors.botanicalRed}20`
                  }}>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: brandColors.deepBlue }}>
                  {t.services.design.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4" style={{ color: brandColors.earthBrown }}>
                  {t.services.design.description}
                </CardDescription>
                <div className="text-sm" style={{ color: brandColors.sage }}>
                  {t.services.design.details.split('\n').map((detail, index) => (
                    <div key={index}>{detail}</div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-opacity-60 transition-all hover:shadow-lg" 
                  style={{ 
                    borderColor: brandColors.oceanBlue,
                    backgroundColor: brandColors.warmBeige 
                  }}>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: brandColors.deepBlue }}>
                  {t.services.transformation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4" style={{ color: brandColors.earthBrown }}>
                  {t.services.transformation.description}
                </CardDescription>
                <div className="text-sm" style={{ color: brandColors.sage }}>
                  {t.services.transformation.details.split('\n').map((detail, index) => (
                    <div key={index}>{detail}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8" 
               style={{ backgroundColor: brandColors.warmBeige }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: brandColors.deepBlue }}>
              {t.tools.title}
            </h2>
            <p className="text-xl" style={{ color: brandColors.earthBrown }}>
              {t.tools.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BiodynamicCalendar language={language} />
            <SustainabilityAssessment language={language} />
            <ProjectGallery language={language} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" 
               style={{ 
                 background: `linear-gradient(45deg, ${brandColors.sage}20 0%, ${brandColors.oceanBlue}20 100%)` 
               }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: brandColors.deepBlue }}>
              {t.features.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg" 
                 style={{ backgroundColor: `${brandColors.cream}90` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: brandColors.sage }}>
                <Leaf className="h-8 w-8" style={{ color: brandColors.cream }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandColors.deepBlue }}>
                {t.features.biodynamic.title}
              </h3>
              <p style={{ color: brandColors.earthBrown }}>
                {t.features.biodynamic.description}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg" 
                 style={{ backgroundColor: `${brandColors.cream}90` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: brandColors.oceanBlue }}>
                <Sun className="h-8 w-8" style={{ color: brandColors.cream }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandColors.deepBlue }}>
                {t.features.climate.title}
              </h3>
              <p style={{ color: brandColors.earthBrown }}>
                {t.features.climate.description}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg" 
                 style={{ backgroundColor: `${brandColors.cream}90` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: brandColors.botanicalRed }}>
                <Droplets className="h-8 w-8" style={{ color: brandColors.cream }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandColors.deepBlue }}>
                {t.features.technology.title}
              </h3>
              <p style={{ color: brandColors.earthBrown }}>
                {t.features.technology.description}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg" 
                 style={{ backgroundColor: `${brandColors.cream}90` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: brandColors.sage }}>
                <Home className="h-8 w-8" style={{ color: brandColors.cream }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandColors.deepBlue }}>
                {t.features.holistic.title}
              </h3>
              <p style={{ color: brandColors.earthBrown }}>
                {t.features.holistic.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" 
               style={{ backgroundColor: brandColors.warmBeige }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: brandColors.deepBlue }}>
            {t.contact.title}
          </h2>
          <p className="text-xl mb-8" style={{ color: brandColors.earthBrown }}>
            {t.contact.subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" style={{ color: brandColors.botanicalRed }} />
              <span style={{ color: brandColors.earthBrown }}>{t.contact.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" style={{ color: brandColors.botanicalRed }} />
              <span style={{ color: brandColors.earthBrown }}>info@peninsular.mx</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="px-8 py-3 text-lg font-medium transition-all hover:scale-105"
            style={{ 
              backgroundColor: brandColors.oceanBlue,
              color: brandColors.cream,
              border: 'none'
            }}
          >
            {t.contact.cta}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" 
              style={{ backgroundColor: brandColors.deepBlue }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FarmerIcon className="h-8 w-8" style={{ color: brandColors.cream }} />
            <span className="text-2xl font-bold" style={{ color: brandColors.cream }}>
              PENINSULAR
            </span>
          </div>
          <p className="mb-4" style={{ color: brandColors.sage }}>
            {language === 'es' ? 'Vida Sustentable, Futuro Regenerativo' : 'Sustainable Living, Regenerative Future'}
          </p>
          <p className="text-sm" style={{ color: brandColors.warmBeige }}>
            © 2025 Peninsular Consultoría Sustentable. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
