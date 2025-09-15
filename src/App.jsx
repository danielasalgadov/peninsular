import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Leaf, Sun, Droplets, Home, Users, Phone, Mail, MapPin } from 'lucide-react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('es')

  const content = {
    es: {
      nav: {
        services: 'Servicios',
        about: 'Nosotros',
        contact: 'Contacto'
      },
      hero: {
        title: 'PENINSULAR',
        subtitle: 'Consultoría Sustentable',
        description: 'Transformamos hogares en santuarios autosuficientes a través de agricultura biodinámica, diseño holístico y tecnología sustentable de vanguardia.',
        cta: 'Comenzar Transformación'
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones integrales para una vida sustentable',
        starter: {
          title: 'Bio-Starter',
          description: 'Consultoría introductoria con evaluación de sustentabilidad y calendario biodinámico básico.',
          price: '$500 - $800 USD'
        },
        design: {
          title: 'Diseño Holístico',
          description: 'Diseño arquitectónico y paisajístico completo con integración de tecnologías sustentables.',
          price: '$3,000 - $8,000 USD'
        },
        transformation: {
          title: 'Transformación Soberana',
          description: 'Solución completa llave en mano para autosuficiencia total con gestión de proyecto incluida.',
          price: '$15,000 - $50,000 USD'
        }
      },
      features: {
        title: 'Nuestra Propuesta Única',
        biodynamic: {
          title: 'Agricultura Biodinámica',
          description: 'Métodos de Rudolf Steiner adaptados al clima de la Península de Yucatán'
        },
        climate: {
          title: 'Adaptación Climática',
          description: 'Soluciones resilientes para eventos climáticos extremos'
        },
        technology: {
          title: 'Tecnología Sustentable',
          description: 'Sistemas off-grid, captación de agua y energías renovables'
        },
        holistic: {
          title: 'Enfoque Holístico',
          description: 'Integración de sabiduría ancestral con innovación moderna'
        }
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
        contact: 'Contact'
      },
      hero: {
        title: 'PENINSULAR',
        subtitle: 'Sustainable Consulting',
        description: 'We transform homes into self-sufficient sanctuaries through biodynamic agriculture, holistic design, and cutting-edge sustainable technology.',
        cta: 'Start Transformation'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive solutions for sustainable living',
        starter: {
          title: 'Bio-Starter',
          description: 'Introductory consultation with sustainability assessment and basic biodynamic calendar.',
          price: '$500 - $800 USD'
        },
        design: {
          title: 'Holistic Design',
          description: 'Complete architectural and landscape design with sustainable technology integration.',
          price: '$3,000 - $8,000 USD'
        },
        transformation: {
          title: 'Sovereign Transformation',
          description: 'Complete turnkey solution for total self-sufficiency with project management included.',
          price: '$15,000 - $50,000 USD'
        }
      },
      features: {
        title: 'Our Unique Approach',
        biodynamic: {
          title: 'Biodynamic Agriculture',
          description: 'Rudolf Steiner methods adapted to Yucatan Peninsula climate'
        },
        climate: {
          title: 'Climate Adaptation',
          description: 'Resilient solutions for extreme weather events'
        },
        technology: {
          title: 'Sustainable Technology',
          description: 'Off-grid systems, water harvesting, and renewable energy'
        },
        holistic: {
          title: 'Holistic Approach',
          description: 'Integration of ancient wisdom with modern innovation'
        }
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">PENINSULAR</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">{t.nav.services}</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">{t.nav.about}</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">{t.nav.contact}</a>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-green-600 font-medium mb-6">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t.hero.description}
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600">{t.services.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{t.services.starter.title}</CardTitle>
                  <Badge variant="secondary">{t.services.starter.price}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t.services.starter.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-300 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{t.services.design.title}</CardTitle>
                  <Badge className="bg-green-600">{t.services.design.price}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t.services.design.description}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{t.services.transformation.title}</CardTitle>
                  <Badge variant="outline">{t.services.transformation.price}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t.services.transformation.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.biodynamic.title}</h3>
              <p className="text-gray-600">{t.features.biodynamic.description}</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.climate.title}</h3>
              <p className="text-gray-600">{t.features.climate.description}</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.technology.title}</h3>
              <p className="text-gray-600">{t.features.technology.description}</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.holistic.title}</h3>
              <p className="text-gray-600">{t.features.holistic.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{t.contact.subtitle}</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">{t.contact.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">info@peninsular.mx</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
            {t.contact.cta}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold">PENINSULAR</span>
          </div>
          <p className="text-gray-400 mb-4">
            {language === 'es' ? 'Vida Sustentable, Futuro Regenerativo' : 'Sustainable Living, Regenerative Future'}
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Peninsular Consultoría Sustentable. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
