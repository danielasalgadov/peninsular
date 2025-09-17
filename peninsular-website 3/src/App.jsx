import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Leaf, Sun, Droplets, Home, Users, Phone, Mail, MapPin, Moon, Calendar, Calculator, Image, ChevronRight } from 'lucide-react'
import './App.css'

// Brand Colors
const brandColors = {
  pastelGreyOrange: '#d8c09a',
  greyBrown: '#6f6648',
  darkOlive: '#5c622a',
  azure: '#104e7f',
  orange: '#fff0d3',
  darkGreyBrown: '#553f24',
  greyYellow: '#bdb499'
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
    const phases = ['full', 'waning', 'new', 'waxing']
    const recommendations = {
      es: {
        full: 'Luna Llena - Sep 7: Eclipse Lunar en Piscis. Momento de máxima energía cósmica. Cosechar hierbas medicinales. Evitar siembras hasta Sep 9.',
        waning: 'Luna Menguante - Sep 14: Cuarto Menguante en Géminis. Tiempo ideal para poda y preparación de terreno. Trabajar con plantas de raíz.',
        new: 'Luna Nueva - Sep 21: Eclipse Solar en Virgo. Nuevo ciclo de siembra. Planificar próximas cosechas y preparar semilleros.',
        waxing: 'Luna Creciente - Sep 29: Cuarto Creciente en Capricornio. Energía ascendente para siembra de hojas verdes y acelgas.'
      },
      en: {
        full: 'Full Moon - Sep 7: Lunar Eclipse in Pisces. Peak cosmic energy moment. Harvest medicinal herbs. Avoid sowing until Sep 9.',
        waning: 'Waning Moon - Sep 14: Last Quarter in Gemini. Ideal time for pruning and soil preparation. Work with root plants.',
        new: 'New Moon - Sep 21: Solar Eclipse in Virgo. New sowing cycle. Plan next harvests and prepare seedbeds.',
        waxing: 'Waxing Moon - Sep 29: First Quarter in Capricorn. Rising energy for sowing leafy greens and chard.'
      }
    }
    
    setRecommendation(recommendations[language][currentPhase])
  }, [currentPhase, language])

  return (
    <Card className="border-2" style={{ borderColor: brandColors.darkOlive, backgroundColor: brandColors.orange }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" style={{ color: brandColors.azure }}>
          <Moon className="h-5 w-5" />
          {language === 'es' ? 'Calendario Biodinámico' : 'Biodynamic Calendar'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <div className="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center" 
               style={{ backgroundColor: brandColors.darkOlive }}>
            <Moon className="h-8 w-8" style={{ color: brandColors.orange }} />
          </div>
          <p className="text-sm" style={{ color: brandColors.darkGreyBrown }}>
            {recommendation}
          </p>
        </div>
        <Button 
          size="sm" 
          className="w-full"
          style={{ backgroundColor: brandColors.greyBrown, color: brandColors.orange }}
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
      <Card className="border-2" style={{ borderColor: brandColors.azure, backgroundColor: brandColors.greyYellow }}>
        <CardHeader>
          <CardTitle style={{ color: brandColors.azure }}>
            {language === 'es' ? 'Tu Nivel de Soberanía' : 'Your Sovereignty Level'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className="text-4xl font-bold mb-2" style={{ color: brandColors.greyBrown }}>
              {score}%
            </div>
            <Progress value={score} className="mb-4" />
            <p className="text-sm mb-4" style={{ color: brandColors.darkGreyBrown }}>
              {language === 'es' 
                ? score > 70 ? 'Excelente nivel de autosuficiencia' : score > 40 ? 'Buen progreso hacia la soberanía' : 'Gran potencial de mejora'
                : score > 70 ? 'Excellent level of self-sufficiency' : score > 40 ? 'Good progress toward sovereignty' : 'Great potential for improvement'
              }
            </p>
            <Button 
              onClick={resetAssessment}
              style={{ backgroundColor: brandColors.darkOlive, color: brandColors.orange }}
            >
              {language === 'es' ? 'Evaluar de Nuevo' : 'Assess Again'}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2" style={{ borderColor: brandColors.azure, backgroundColor: brandColors.greyYellow }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" style={{ color: brandColors.azure }}>
          <Calculator className="h-5 w-5" />
          {language === 'es' ? 'Evaluación de Sustentabilidad' : 'Sustainability Assessment'}
        </CardTitle>
        <CardDescription style={{ color: brandColors.darkGreyBrown }}>
          {language === 'es' ? `Pregunta ${currentQuestion + 1} de ${questions[language].length}` : `Question ${currentQuestion + 1} of ${questions[language].length}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-4" style={{ color: brandColors.azure }}>
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
                  borderColor: brandColors.darkOlive,
                  color: brandColors.darkGreyBrown
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
    <Card className="border-2" style={{ borderColor: brandColors.greyBrown, backgroundColor: brandColors.orange }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" style={{ color: brandColors.azure }}>
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
                <h3 className="font-semibold" style={{ color: brandColors.azure }}>
                  {project.title}
                </h3>
                <p className="text-sm" style={{ color: brandColors.darkGreyBrown }}>
                  {project.description}
                </p>
                <div className="p-3 rounded" style={{ backgroundColor: brandColors.darkOlive + '20' }}>
                  <p className="text-sm font-medium" style={{ color: brandColors.greyBrown }}>
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
        about: 'Filosofía',
        tools: 'Herramientas',
        store: 'Tienda',
        contact: 'Contacto'
      },
      hero: {
        title: 'PENINSULAR',
        subtitle: 'Soluciones Regenerativas Personalizadas',
        description: 'Diseñamos, desarrollamos y ejecutamos soluciones regenerativas únicas para cada cliente. Combinamos permacultura, tecnologías innovadoras y metodologías sustentables para crear sistemas personalizados que se adaptan a tu infraestructura, familia, objetivos y ubicación geográfica específica.',
        cta: 'Explorar Soluciones'
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones regenerativas personalizadas para cada cliente y ubicación',
        assessment: {
          title: 'Evaluación & Diseño',
          description: 'Análisis integral de tu sitio, familia y objetivos para crear un plan regenerativo personalizado. Combinamos permacultura, análisis climático y evaluación de recursos para diseñar sistemas únicos adaptados a tus necesidades específicas.',
          details: '• Análisis de sitio y recursos\n• Evaluación de necesidades familiares\n• Diseño de permacultura personalizado\n• Plan de implementación por fases\n• Consulta de 4 horas + informe detallado'
        },
        implementation: {
          title: 'Implementación Integral',
          description: 'Construcción y establecimiento de sistemas regenerativos completos. Desde producción de alimentos hasta energía renovable, creamos infraestructura sustentable que evoluciona con tus necesidades y se adapta a tu ubicación geográfica.',
          details: '• Sistemas de producción de alimentos\n• Infraestructura de agua y energía\n• Tecnología inteligente integrada\n• Capacitación y transferencia de conocimiento\n• Gestión de proyecto 6-18 meses'
        },
        optimization: {
          title: 'Optimización Continua',
          description: 'Monitoreo, ajuste y mejora continua de tus sistemas regenerativos. Utilizamos tecnología IoT, análisis de datos y metodologías innovadoras para maximizar la eficiencia y productividad de tu ecosistema personalizado.',
          details: '• Monitoreo con tecnología IoT\n• Análisis de rendimiento y optimización\n• Actualizaciones tecnológicas\n• Soporte técnico continuo\n• Membresía comunitaria incluida'
        }
      },
      features: {
        title: 'Nuestra Propuesta Única',
        innovation: {
          title: 'Innovación Personalizada',
          description: 'Cada proyecto es único. Combinamos múltiples metodologías regenerativas - permacultura, biodynamia, tecnologías emergentes - para crear soluciones específicas que se adaptan perfectamente a tu familia, ubicación y objetivos a largo plazo.'
        },
        methodology: {
          title: 'Metodologías Flexibles',
          description: 'No nos limitamos a una sola técnica. Seleccionamos y combinamos las mejores prácticas de permacultura, agricultura regenerativa, biodynamia y tecnologías sustentables según las necesidades específicas de cada cliente y sitio.'
        },
        technology: {
          title: 'Tecnología Inteligente',
          description: 'Integramos IoT, automatización, monitoreo de datos y tecnologías emergentes para optimizar el rendimiento de tus sistemas. Tecnología que aprende y se adapta a los patrones únicos de tu ecosistema regenerativo.'
        },
        community: {
          title: 'Ecosistema Comunitario',
          description: 'Construimos más que proyectos individuales - creamos una red de clientes, proveedores e innovadores que comparten conocimientos, recursos y experiencias para acelerar la transición hacia un futuro regenerativo.'
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
        about: 'Philosophy',
        tools: 'Tools',
        store: 'Store',
        contact: 'Contact'
      },
      hero: {
        title: 'PENINSULAR',
        subtitle: 'Personalized Regenerative Solutions',
        description: 'We design, develop and execute unique regenerative solutions for each client. We combine permaculture, innovative technologies and sustainable methodologies to create personalized systems that adapt to your specific infrastructure, family, objectives and geographic location.',
        cta: 'Explore Solutions'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Design, development and execution of comprehensive sustainable solutions',
        starter: {
          title: 'Bio-Starter',
          description: 'Comprehensive assessment applying Rudolf Steiner\'s anthroposophical principles. Includes living soil analysis, cosmic calendar with preparations 500-501 applications, and transition plan toward a self-sufficient agricultural organism that respects biological and cosmic rhythms.',
          details: '• Biodynamic terrain analysis\n• Cosmic calendar and preparations 500-501\n• Living agricultural organism plan\n• 3-hour consultation + follow-up'
        },
        design: {
          title: 'Holistic Design',
          description: 'Sacred architecture and regenerative landscaping adapted to local climate. We integrate permaculture, water harvesting, solar energy, and bioclimatic design to create your self-sufficient sanctuary with spiritual consciousness.',
          details: '• Bioclimatic architectural design\n• Integral permaculture system\n• Water capture and filtration\n• Off-grid renewable energy\n• 6-12 month project management'
        },
        transformation: {
          title: 'Complete Transformation',
          description: 'Transformation toward a complete biodynamic agricultural organism. Includes on-site production of the nine preparations (500-507), cosmic rhythm implementation, applied anthroposophy training, and development of agriculture as artistic expression that goes beyond mechanical farming.',
          details: '• Turnkey implementation\n• Production of preparations 500-507\n• Applied anthroposophy training\n• Agriculture as creative art\n• 12-24 month accompaniment'
        }
      },
      features: {
        title: 'Our Unique Approach',
        biodynamic: {
          title: 'Regenerative Systems',
          description: 'We integrate biodynamic agriculture, permaculture, renewable energy systems, and comprehensive water management. We design complete ecosystems that self-regulate and improve over time, creating sustainable abundance for the long term.'
        },
        climate: {
          title: 'Climate Adaptation',
          description: 'We develop resilient solutions for hurricanes, extreme droughts, and intense heat. Includes water harvesting systems, natural shelters, backup energy, and emergency protocols to maintain self-sufficiency in any climate crisis.'
        },
        technology: {
          title: 'Advanced Technology',
          description: 'We implement intelligent solar systems, IoT automation, advanced water filtration, geothermal cooling, and bioclimatic architecture. Technology that optimizes resources and connects you with natural cycles.'
        },
        holistic: {
          title: 'Integral Design',
          description: 'We combine modern engineering, ancestral wisdom, cosmic principles, and spiritual consciousness. Each project is designed as a living organism that evolves and adapts, creating true sovereignty and regenerative abundance.'
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
      background: `linear-gradient(135deg, ${brandColors.azure}15 0%, ${brandColors.darkOlive}15 100%)` 
    }}>
      {/* Navigation */}
      <nav className="backdrop-blur-sm shadow-sm sticky top-0 z-50" style={{ 
        backgroundColor: `${brandColors.orange}95` 
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <FarmerIcon className="h-10 w-10" style={{ color: brandColors.darkGreyBrown }} />
              <span className="text-2xl font-bold" style={{ color: brandColors.azure }}>
                PENINSULAR
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="transition-colors hover:opacity-80" 
                 style={{ color: brandColors.darkGreyBrown }}>
                {t.nav.services}
              </a>
              <a href="#about" className="transition-colors hover:opacity-80" 
                 style={{ color: brandColors.darkGreyBrown }}>
                {t.nav.about}
              </a>
              <a href="#tools" className="transition-colors hover:opacity-80" 
                 style={{ color: brandColors.darkGreyBrown }}>
                {t.nav.tools}
              </a>
              <a href="#contact" className="transition-colors hover:opacity-80" 
                 style={{ color: brandColors.darkGreyBrown }}>
                {t.nav.contact}
              </a>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                style={{ 
                  borderColor: brandColors.darkOlive,
                  color: brandColors.darkGreyBrown
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
            backgroundImage: `radial-gradient(circle at 25% 25%, ${brandColors.greyBrown}20 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, ${brandColors.azure}20 0%, transparent 50%)`,
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <FarmerIcon className="h-20 w-20 mx-auto mb-6" style={{ color: brandColors.darkGreyBrown }} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4" 
              style={{ 
                color: brandColors.azure,
                textShadow: `2px 2px 4px ${brandColors.orange}50`
              }}>
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-6" 
             style={{ color: brandColors.darkOlive }}>
            {t.hero.subtitle}
          </p>
          
          <p className="text-lg max-w-4xl mx-auto mb-8 leading-relaxed" 
             style={{ color: brandColors.darkGreyBrown }}>
            {t.hero.description}
          </p>
          
          <Button 
            size="lg" 
            className="px-8 py-3 text-lg font-medium transition-all hover:scale-105"
            style={{ 
              backgroundColor: brandColors.greyBrown,
              color: brandColors.orange,
              border: 'none'
            }}
          >
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" 
               style={{ backgroundColor: brandColors.orange }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: brandColors.azure }}>
              {t.services.title}
            </h2>
            <p className="text-xl" style={{ color: brandColors.darkGreyBrown }}>
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-opacity-60 transition-all hover:shadow-lg" 
                  style={{ 
                    borderColor: brandColors.darkOlive,
                    backgroundColor: brandColors.greyYellow 
                  }}>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: brandColors.azure }}>
                  {t.services.starter.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4" style={{ color: brandColors.darkGreyBrown }}>
                  {t.services.starter.description}
                </CardDescription>
                <div className="text-sm" style={{ color: brandColors.darkOlive }}>
                  {t.services.starter.details.split('\n').map((detail, index) => (
                    <div key={index}>{detail}</div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg transform hover:scale-105" 
                  style={{ 
                    borderColor: brandColors.greyBrown,
                    backgroundColor: brandColors.orange,
                    boxShadow: `0 4px 20px ${brandColors.greyBrown}20`
                  }}>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: brandColors.azure }}>
                  {t.services.design.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4" style={{ color: brandColors.darkGreyBrown }}>
                  {t.services.design.description}
                </CardDescription>
                <div className="text-sm" style={{ color: brandColors.darkOlive }}>
                  {t.services.design.details.split('\n').map((detail, index) => (
                    <div key={index}>{detail}</div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-opacity-60 transition-all hover:shadow-lg" 
                  style={{ 
                    borderColor: brandColors.azure,
                    backgroundColor: brandColors.greyYellow 
                  }}>
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: brandColors.azure }}>
                  {t.services.transformation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4" style={{ color: brandColors.darkGreyBrown }}>
                  {t.services.transformation.description}
                </CardDescription>
                <div className="text-sm" style={{ color: brandColors.darkOlive }}>
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
               style={{ backgroundColor: brandColors.greyYellow }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: brandColors.azure }}>
              {t.tools.title}
            </h2>
            <p className="text-xl" style={{ color: brandColors.darkGreyBrown }}>
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
                 background: `linear-gradient(45deg, ${brandColors.darkOlive}20 0%, ${brandColors.azure}20 100%)` 
               }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: brandColors.azure }}>
              {t.features.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg" 
                 style={{ backgroundColor: `${brandColors.orange}90` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: brandColors.darkOlive }}>
                <Leaf className="h-8 w-8" style={{ color: brandColors.orange }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandColors.azure }}>
                {t.features.biodynamic.title}
              </h3>
              <p style={{ color: brandColors.darkGreyBrown }}>
                {t.features.biodynamic.description}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg" 
                 style={{ backgroundColor: `${brandColors.orange}90` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: brandColors.azure }}>
                <Sun className="h-8 w-8" style={{ color: brandColors.orange }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandColors.azure }}>
                {t.features.climate.title}
              </h3>
              <p style={{ color: brandColors.darkGreyBrown }}>
                {t.features.climate.description}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg" 
                 style={{ backgroundColor: `${brandColors.orange}90` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: brandColors.greyBrown }}>
                <Droplets className="h-8 w-8" style={{ color: brandColors.orange }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandColors.azure }}>
                {t.features.technology.title}
              </h3>
              <p style={{ color: brandColors.darkGreyBrown }}>
                {t.features.technology.description}
              </p>
            </div>

            <div className="text-center p-6 rounded-lg" 
                 style={{ backgroundColor: `${brandColors.orange}90` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                   style={{ backgroundColor: brandColors.darkOlive }}>
                <Home className="h-8 w-8" style={{ color: brandColors.orange }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: brandColors.azure }}>
                {t.features.holistic.title}
              </h3>
              <p style={{ color: brandColors.darkGreyBrown }}>
                {t.features.holistic.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" 
               style={{ backgroundColor: brandColors.greyYellow }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: brandColors.azure }}>
            {t.contact.title}
          </h2>
          <p className="text-xl mb-8" style={{ color: brandColors.darkGreyBrown }}>
            {t.contact.subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" style={{ color: brandColors.greyBrown }} />
              <span style={{ color: brandColors.darkGreyBrown }}>{t.contact.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" style={{ color: brandColors.greyBrown }} />
              <span style={{ color: brandColors.darkGreyBrown }}>info@peninsular.mx</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="px-8 py-3 text-lg font-medium transition-all hover:scale-105"
            style={{ 
              backgroundColor: brandColors.azure,
              color: brandColors.orange,
              border: 'none'
            }}
          >
            {t.contact.cta}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" 
              style={{ backgroundColor: brandColors.azure }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FarmerIcon className="h-8 w-8" style={{ color: brandColors.orange }} />
            <span className="text-2xl font-bold" style={{ color: brandColors.orange }}>
              PENINSULAR
            </span>
          </div>
          <p className="mb-4" style={{ color: brandColors.darkOlive }}>
            {language === 'es' ? 'Vida Sustentable, Futuro Regenerativo' : 'Sustainable Living, Regenerative Future'}
          </p>
          <p className="text-sm" style={{ color: brandColors.greyYellow }}>
            © 2025 Peninsular Consultoría Sustentable. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
