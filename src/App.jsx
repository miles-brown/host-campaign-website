import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Home, 
  FileText, 
  MessageSquare, 
  Users, 
  Newspaper, 
  Info, 
  Shield, 
  Scale,
  Menu,
  X,
  ExternalLink,
  Share2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Download,
  ChevronRight,
  ArrowUp
} from 'lucide-react'
import './App.css'
import ScrollToTop from './ScrollToTop'

// Import assets
import hostLogoMain from './assets/host_logo_main.png'
import hostLogoHorizontal from './assets/host_logo_horizontal.png'
import hostLogoStacked from './assets/host_logo_stacked.png'

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = location.pathname === '/'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'nav-scrolled' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src={isScrolled || !isHomePage ? hostLogoHorizontal : hostLogoMain} 
              alt="HOST Campaign" 
              className={`transition-all duration-300 ${
                isScrolled || !isHomePage ? 'h-8' : 'h-12'
              }`} 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`font-medium transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'
            }`}>Home</Link>
            <Link to="/about" className={`font-medium transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'
            }`}>About</Link>
            <Link to="/news" className={`font-medium transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'
            }`}>News</Link>
            <Link to="/landlords" className={`font-medium transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'
            }`}>For Landlords</Link>
            <Link to="/media" className={`font-medium transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'
            }`}>Media Centre</Link>
            <Link to="/get-involved" className={`font-medium transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'
            }`}>Get Involved</Link>
            <Link to="/report" className="cta-button text-sm">
              Report Property
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600">About</Link>
              <Link to="/news" className="text-gray-700 hover:text-red-600">News</Link>
              <Link to="/landlords" className="text-gray-700 hover:text-red-600">For Landlords</Link>
              <Link to="/media" className="text-gray-700 hover:text-red-600">Media Centre</Link>
              <Link to="/get-involved" className="text-gray-700 hover:text-red-600">Get Involved</Link>
              <Link to="/report" className="cta-button text-sm w-fit">Report Property</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Homepage Components
const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="hero-content container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Stop Airbnb Destroying London Housing
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animate-delay-200">
            45,000 homes lost to short-term rentals. 571% increase since 2014. Time to fight back.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in-up animate-delay-400">
            <div className="text-center">
              <div className="stat-number">45K</div>
              <div className="stat-label">Homes Lost</div>
            </div>
            <div className="text-center">
              <div className="stat-number">571%</div>
              <div className="stat-label">Increase</div>
            </div>
            <div className="text-center">
              <div className="stat-number">32</div>
              <div className="stat-label">Boroughs Affected</div>
            </div>
            <div className="text-center">
              <div className="stat-number">30%</div>
              <div className="stat-label">Rent Increase</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up animate-delay-600">
            <Link to="/report" className="cta-button text-center">
              <FileText className="inline-block mr-2" size={20} />
              Report a Property
            </Link>
            <Link to="/contact-mp" className="cta-button-secondary text-center">
              <MessageSquare className="inline-block mr-2" size={20} />
              Contact Your MP
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const MissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            HOST campaigns to end the conversion of London's residential properties into short-term holiday rentals. 
            We fight for stronger regulation, better enforcement, and housing that serves residents, not tourists.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="campaign-card text-center">
              <Scale className="mx-auto mb-4 host-red" size={48} />
              <h3 className="text-xl font-semibold mb-4 host-navy">Stronger Regulation</h3>
              <p className="text-gray-600">
                Advocate for comprehensive licensing schemes and planning controls to limit short-term rentals in residential areas.
              </p>
            </div>
            <div className="campaign-card text-center">
              <Shield className="mx-auto mb-4 host-red" size={48} />
              <h3 className="text-xl font-semibold mb-4 host-navy">Better Enforcement</h3>
              <p className="text-gray-600">
                Push for proper enforcement of existing rules and penalties for illegal short-term rental operations.
              </p>
            </div>
            <div className="campaign-card text-center">
              <Home className="mx-auto mb-4 host-red" size={48} />
              <h3 className="text-xl font-semibold mb-4 host-navy">Housing Justice</h3>
              <p className="text-gray-600">
                Restore thousands of properties to the long-term rental market to help solve London's housing crisis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const LandlordSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="campaign-card">
            <h2 className="section-title text-center">Landlords: You Can Be Part of the Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 host-navy">The Community Impact</h3>
                <p className="text-gray-600 mb-4">
                  Short-term rentals are hollowing out London's communities. Families are being displaced, 
                  neighbourhoods are losing their character, and the housing crisis is getting worse.
                </p>
                <p className="text-gray-600 mb-6">
                  As a property owner, you have the power to choose housing over profits. 
                  Long-term rentals provide stable communities and help solve the housing crisis.
                </p>
                <Link to="/landlords" className="cta-button">
                  Learn More <ChevronRight className="ml-2" size={16} />
                </Link>
              </div>
              <div className="bg-host-navy text-white p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Legal Requirements</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Planning permission may be required</li>
                  <li>• Business rates instead of council tax</li>
                  <li>• Fire safety regulations compliance</li>
                  <li>• Licensing schemes in many boroughs</li>
                  <li>• Potential enforcement action</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SuccessStoriesSection = () => {
  const successStories = [
    {
      borough: "Camden",
      action: "Short-term rental licensing scheme",
      impact: "40% reduction in illegal listings",
      description: "Comprehensive licensing with regular inspections and community reporting system."
    },
    {
      borough: "Westminster", 
      action: "Planning enforcement actions",
      impact: "200+ properties returned to residential use",
      description: "Strict enforcement of planning laws and prosecution of illegal operators."
    },
    {
      borough: "Hackney",
      action: "Community-led reporting initiative", 
      impact: "85% increase in successful enforcement",
      description: "Resident reporting system with dedicated enforcement team."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Borough Success Stories</h2>
          <p className="section-subtitle text-center">
            See how London boroughs are taking action to protect their communities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="campaign-card">
                <h3 className="text-xl font-semibold mb-2 host-navy">{story.borough}</h3>
                <h4 className="text-lg font-medium mb-4 host-red">{story.action}</h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="text-2xl font-bold host-red">{story.impact}</div>
                </div>
                <p className="text-gray-600 text-sm">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Homepage Component
const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <LandlordSection />
      <SuccessStoriesSection />
    </div>
  )
}

// About Page
// About Page with Sub-Navigation
const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('story')

  const aboutSections = [
    { id: 'story', title: 'Campaign Story', icon: FileText },
    { id: 'mission', title: 'Mission & Values', icon: Users },
    { id: 'background', title: 'Background & Research', icon: Info },
    { id: 'team', title: 'Team', icon: Users },
    { id: 'how-we-work', title: 'How We Work', icon: MessageSquare }
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title text-center">About HOST</h1>
          <p className="section-subtitle text-center">
            Housing Over Short-Term Lets - Fighting for London's Communities
          </p>

          {/* About Navigation Dashboard */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {aboutSections.map((section) => {
                  const IconComponent = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`p-4 rounded-lg text-center transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-host-red text-white shadow-lg transform scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                      }`}
                    >
                      <IconComponent className="mx-auto mb-2" size={24} />
                      <div className="text-sm font-medium">{section.title}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* About Content Sections */}
          <div className="campaign-card">
            {activeSection === 'story' && <AboutStorySection />}
            {activeSection === 'mission' && <AboutMissionSection />}
            {activeSection === 'background' && <AboutBackgroundSection />}
            {activeSection === 'team' && <AboutTeamSection />}
            {activeSection === 'how-we-work' && <AboutHowWeWorkSection />}
          </div>
        </div>
      </div>
    </div>
  )
}

// About Story Section
const AboutStorySection = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold host-navy mb-6">Our Campaign Story</h2>
      
      <div className="bg-gradient-to-r from-host-red/10 to-host-navy/10 p-6 rounded-lg mb-8">
        <p className="text-xl font-medium text-gray-800 mb-4">
          HOST began when ordinary Londoners realised that their neighbourhoods were disappearing,
          one Airbnb listing at a time.
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">The Spark</h3>
      <p className="mb-6">
        In 2023, residents across London began noticing the same troubling pattern. Long-term neighbours were
        disappearing, replaced by a constant stream of tourists wheeling suitcases through residential buildings. 
        Families who had lived in communities for decades were being priced out, while entire apartment blocks 
        transformed into informal hotels.
      </p>

      <p className="mb-6">
        The breaking point came when data revealed the staggering scale of the problem: since 2014, Airbnb 
        listings in London had increased by 571%, removing over 45,000 entire properties from the long-term 
        rental market. This wasn't just about housing numbers – it was about the systematic destruction of 
        London's residential communities.
      </p>

      <h3 className="text-2xl font-semibold host-navy mb-4">From Frustration to Action</h3>
      <p className="mb-6">
        What started as individual complaints about noise, safety concerns, and displacement evolved into 
        something much larger. Residents began connecting across borough boundaries, sharing stories and 
        data that painted a clear picture: short-term rentals weren't just a nuisance – they were a 
        fundamental threat to London's character as a place where people actually live.
      </p>

      <p className="mb-6">
        HOST emerged from this grassroots movement, combining the passion of affected residents with 
        rigorous research and policy expertise. We realised that scattered individual complaints would
        never create the systemic change needed. Instead, we needed to organise, document, and advocate
        for comprehensive solutions.
      </p>

      <h3 className="text-2xl font-semibold host-navy mb-4">Building the Movement</h3>
      <p className="mb-6">
        Our campaign brings together residents, housing advocates, local councillors, and policy experts 
        who share a common vision: London should be a city for Londoners, not a playground for tourists 
        at the expense of local communities.
      </p>

      <p className="mb-6">
        We've seen the power of organised community action. When Westminster Council began serious
        enforcement against illegal short-term rentals, they returned 50 properties to residential use 
        in just one month. This success story proves that change is possible when communities demand it.
      </p>

      <div className="bg-host-navy text-white p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-3">Why HOST Matters</h4>
        <p className="mb-4">
          We're not anti-tourism or anti-innovation. We're pro-community, pro-housing, and pro-sustainability. 
          London's strength has always been its diverse, vibrant neighbourhoods where people build lives,
          raise families, and create lasting communities.
        </p>
        <p>
          HOST exists to ensure that London remains a place where ordinary people can afford to live, 
          work, and thrive – not just visit.
        </p>
      </div>
    </div>
  )
}

// About Mission Section
const AboutMissionSection = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold host-navy mb-6">Mission & Values</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-host-red text-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg">
            To restore London's housing stock to its primary purpose: providing homes for residents, 
            not profits for platforms.
          </p>
        </div>
        <div className="bg-host-navy text-white p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-lg">
            A London where every neighbourhood thrives with permanent residents, where housing is
            affordable, and where communities are built to last.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Core Values</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-semibold host-red mb-3">Community First</h4>
          <p>
            We believe that housing policy should prioritize the needs of permanent residents and 
            local communities over short-term profit maximisation.
          </p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-semibold host-red mb-3">Evidence-Based Advocacy</h4>
          <p>
            Our campaigns are grounded in rigorous research, data analysis, and documented community 
            impact, not ideology or speculation.
          </p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-semibold host-red mb-3">Inclusive Organizing</h4>
          <p>
            We welcome all Londoners affected by the housing crisis, regardless of tenure, income, 
            or background. Housing is a universal concern.
          </p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-semibold host-red mb-3">Practical Solutions</h4>
          <p>
            We focus on achievable policy changes and enforcement mechanisms that can create 
            immediate and lasting impact for communities.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">What We Stand For</h3>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-host-red rounded-full mt-3"></div>
          <p>
            <strong>Housing as a Human Right:</strong> Everyone deserves access to stable, affordable housing 
            in the communities where they work and build their lives.
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-host-red rounded-full mt-3"></div>
          <p>
            <strong>Sustainable Tourism:</strong> London should welcome visitors in ways that support, 
            rather than undermine, local communities and housing availability.
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-host-red rounded-full mt-3"></div>
          <p>
            <strong>Democratic Participation:</strong> Residents should have a meaningful voice in decisions 
            that affect their neighbourhoods and housing security.
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-host-red rounded-full mt-3"></div>
          <p>
            <strong>Corporate Accountability:</strong> Platform companies profiting from housing scarcity 
            must be held responsible for their impact on communities.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold host-navy mb-3">Our Commitment</h4>
        <p className="mb-4">
          HOST is committed to transparent, accountable campaigning that puts community needs first. 
          We work collaboratively with local authorities, housing organisations, and resident groups 
          to build broad coalitions for change.
        </p>
        <p>
          We measure our success not just in policy wins, but in the number of families who can 
          remain in their communities, the strength of neighbourhood connections, and the long-term
          sustainability of London as a place where people live, not just visit.
        </p>
      </div>
    </div>
  )
}

// About Background Section
const AboutBackgroundSection = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold host-navy mb-6">Background & Research</h2>

      <div className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-semibold host-navy mb-4">The Scale of the Problem</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold host-red mb-2">571%</div>
            <div className="text-sm text-gray-600">Increase in Airbnb listings since 2014</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold host-red mb-2">45,000</div>
            <div className="text-sm text-gray-600">Entire properties removed from rental market</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold host-red mb-2">£2.1B</div>
            <div className="text-sm text-gray-600">Annual revenue from London short-term rentals</div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Research Methodology</h3>
      <p className="mb-6">
        Our research combines multiple data sources to provide a comprehensive picture of short-term 
        rental impact on London's housing market. We analyse platform data, planning applications, 
        council enforcement records, and community reports to track trends and identify hotspots.
      </p>

      <h4 className="text-xl font-semibold host-red mb-3">Data Sources</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 p-4 rounded-lg">
          <h5 className="font-semibold mb-2">Platform Monitoring</h5>
          <p className="text-sm text-gray-600">
            Daily tracking of Airbnb, Booking.com, and other platform listings across all London boroughs, 
            including pricing, availability, and property characteristics.
          </p>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg">
          <h5 className="font-semibold mb-2">Planning Data</h5>
          <p className="text-sm text-gray-600">
            Analysis of planning applications for change of use from residential to commercial, 
            enforcement actions, and permitted development rights usage.
          </p>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg">
          <h5 className="font-semibold mb-2">Community Reports</h5>
          <p className="text-sm text-gray-600">
            Direct reports from residents about suspected illegal operations, community impact, 
            and enforcement needs in their neighbourhoods.
          </p>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg">
          <h5 className="font-semibold mb-2">Policy Analysis</h5>
          <p className="text-sm text-gray-600">
            Comparative analysis of regulatory approaches across London boroughs and international 
            cities to identify best practices.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Key Findings</h3>

      <h4 className="text-xl font-semibold host-red mb-3">Geographic Concentration</h4>
      <p className="mb-4">
        Short-term rentals are not evenly distributed across London. Central boroughs like Westminster, 
        Camden, and Kensington & Chelsea show the highest concentrations, with some areas seeing over 
        20% of residential properties converted to short-term use.
      </p>

      <h4 className="text-xl font-semibold host-red mb-3">Market Distortion</h4>
      <p className="mb-4">
        Properties operating as short-term rentals can generate 200-400% more revenue than traditional 
        long-term rentals, creating powerful financial incentives for conversion that distort the 
        housing market.
      </p>

      <h4 className="text-xl font-semibold host-red mb-3">Community Impact</h4>
      <p className="mb-6">
        Beyond housing numbers, our research documents significant impacts on community cohesion, 
        local services, and neighbourhood character. Areas with high short-term rental concentrations 
        report increased antisocial behaviour, reduced community participation, and loss of local amenities.
      </p>

      <h3 className="text-2xl font-semibold host-navy mb-4">International Context</h3>
      <p className="mb-6">
        London's experience mirrors patterns seen in other major cities worldwide. Cities like Barcelona, 
        Amsterdam, and New York have implemented various regulatory approaches, from outright bans in 
        certain areas to strict licensing and enforcement regimes.
      </p>

      <div className="bg-host-navy text-white p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-3">Research Impact</h4>
        <p className="mb-4">
          Our research has been cited in parliamentary debates, council policy documents, and media 
          coverage of London's housing crisis. We provide evidence-based support for policy makers 
          and community advocates working to address short-term rental impacts.
        </p>
        <p>
          All our research is conducted transparently and made available to support broader efforts 
          to understand and address housing challenges in London.
        </p>
      </div>
    </div>
  )
}

// About Team Section
const AboutTeamSection = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold host-navy mb-6">Our Team</h2>

      <div className="bg-gradient-to-r from-host-red/10 to-host-navy/10 p-6 rounded-lg mb-8">
        <p className="text-xl font-medium text-gray-800">
          HOST is powered by a diverse team of residents, researchers, policy experts, and community
          organisers united by a shared commitment to housing justice in London.
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Core Team</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-semibold host-red mb-2">Campaign Coordination</h4>
          <p className="text-gray-600 mb-4">
            Our campaign coordinators bring together community organising experience, policy expertise,
            and deep knowledge of London's housing landscape.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Strategic campaign planning and execution</li>
            <li>• Stakeholder engagement and coalition building</li>
            <li>• Media relations and public communications</li>
          </ul>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-semibold host-red mb-2">Research & Data</h4>
          <p className="text-gray-600 mb-4">
            Our research team combines academic expertise with practical policy analysis to provide 
            evidence-based foundations for our advocacy work.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Data collection and analysis</li>
            <li>• Policy research and comparative studies</li>
            <li>• Impact assessment and monitoring</li>
          </ul>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-semibold host-red mb-2">Community Organising</h4>
          <p className="text-gray-600 mb-4">
            Experienced community organisers help residents connect, share experiences, and take
            collective action for housing justice.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Resident engagement and support</li>
            <li>• Local campaign development</li>
            <li>• Training and capacity building</li>
          </ul>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-semibold host-red mb-2">Legal & Policy</h4>
          <p className="text-gray-600 mb-4">
            Legal and policy experts provide guidance on regulatory frameworks, enforcement mechanisms, 
            and strategic litigation opportunities.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Legal analysis and advice</li>
            <li>• Policy development and review</li>
            <li>• Enforcement strategy support</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Advisory Network</h3>
      <p className="mb-6">
        HOST works with an extensive network of advisors including housing researchers, local councillors, 
        tenant advocates, and community leaders who provide expertise and guidance on our campaigns.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold host-navy mb-2">Academic Partners</h4>
          <p className="text-sm text-gray-600">
            Housing researchers from London universities providing analytical support and peer review.
          </p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold host-navy mb-2">Policy Experts</h4>
          <p className="text-sm text-gray-600">
            Former civil servants and policy professionals with deep knowledge of housing regulation.
          </p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold host-navy mb-2">Community Leaders</h4>
          <p className="text-sm text-gray-600">
            Residents and advocates with extensive experience in local organising and community development.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Volunteer Network</h3>
      <p className="mb-6">
        The heart of HOST is our volunteer network of residents across London who contribute their time, 
        skills, and local knowledge to build stronger communities and advocate for housing justice.
      </p>

      <div className="bg-host-red text-white p-6 rounded-lg mb-8">
        <h4 className="text-xl font-semibold mb-3">Join Our Team</h4>
        <p className="mb-4">
          We're always looking for passionate individuals who want to make a difference in London's 
          housing landscape. Whether you have professional expertise or simply care about your community, 
          there's a place for you in the HOST movement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Skills We Need:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Research and data analysis</li>
              <li>• Community organising</li>
              <li>• Communications and media</li>
              <li>• Legal and policy expertise</li>
            </ul>
          </div>
          <div>
            <strong>Ways to Contribute:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Local area monitoring</li>
              <li>• Event organising</li>
              <li>• Social media support</li>
              <li>• Translation services</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold host-navy mb-3">Our Commitment to Diversity</h4>
        <p>
          HOST is committed to building an inclusive movement that reflects London's diversity. We actively 
          work to ensure that our team, advisory network, and campaigns represent the full range of 
          communities affected by the housing crisis, regardless of background, tenure, or income level.
        </p>
      </div>
    </div>
  )
}

// About How We Work Section
const AboutHowWeWorkSection = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold host-navy mb-6">How We Work</h2>

      <div className="bg-gradient-to-r from-host-red/10 to-host-navy/10 p-6 rounded-lg mb-8">
        <p className="text-xl font-medium text-gray-800">
          HOST combines grassroots organising with evidence-based advocacy to create lasting change
          in London's housing landscape.
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Our Approach</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="border-l-4 border-host-red pl-6">
          <h4 className="text-xl font-semibold host-navy mb-3">Community-Led</h4>
          <p className="mb-4">
            Our campaigns start with residents who are directly affected by short-term rental impacts. 
            We provide tools, resources, and support to help communities organise and advocate for themselves.
          </p>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Resident-led problem identification</li>
            <li>• Community-driven solution development</li>
            <li>• Local leadership development and support</li>
          </ul>
        </div>

        <div className="border-l-4 border-host-navy pl-6">
          <h4 className="text-xl font-semibold host-navy mb-3">Evidence-Based</h4>
          <p className="mb-4">
            Every campaign is grounded in rigorous research and data analysis. We document problems, 
            track trends, and measure impact to ensure our advocacy is credible and effective.
          </p>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Comprehensive data collection and analysis</li>
            <li>• Peer-reviewed research methodologies</li>
            <li>• Transparent reporting and accountability</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Campaign Methodology</h3>

      <div className="space-y-6 mb-8">
        <div className="flex items-start space-x-4">
          <div className="bg-host-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
          <div>
            <h4 className="text-lg font-semibold host-navy mb-2">Research & Documentation</h4>
            <p className="text-gray-600">
              We begin by thoroughly documenting the scope and impact of short-term rental activity 
              in specific areas, combining platform data with community reports and official records.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-host-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
          <div>
            <h4 className="text-lg font-semibold host-navy mb-2">Community Engagement</h4>
            <p className="text-gray-600">
              We work with affected residents to understand their experiences, build local networks, 
              and develop community-led responses to identified problems.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-host-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
          <div>
            <h4 className="text-lg font-semibold host-navy mb-2">Policy Development</h4>
            <p className="text-gray-600">
              Based on research and community input, we develop specific policy recommendations 
              and work with local authorities to implement effective solutions.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-host-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
          <div>
            <h4 className="text-lg font-semibold host-navy mb-2">Advocacy & Implementation</h4>
            <p className="text-gray-600">
              We support communities in advocating for policy changes and work with authorities 
              to ensure effective implementation and enforcement.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-host-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">5</div>
          <div>
            <h4 className="text-lg font-semibold host-navy mb-2">Monitoring & Evaluation</h4>
            <p className="text-gray-600">
              We track the impact of policy changes and continue monitoring to ensure long-term 
              effectiveness and identify areas for further improvement.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Tools & Resources</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Digital Platform</h4>
          <p className="text-gray-600 mb-4">
            Our website provides tools for residents to report problems, contact their MPs, 
            and access resources for community organising.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Property reporting system</li>
            <li>• MP contact tool with personalized messaging</li>
            <li>• Resource library and campaign materials</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Community Support</h4>
          <p className="text-gray-600 mb-4">
            We provide direct support to communities developing local campaigns, including 
            training, resources, and strategic guidance.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Organizing workshops and training</li>
            <li>• Campaign strategy development</li>
            <li>• Media and communications support</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Partnerships & Collaboration</h3>
      <p className="mb-6">
        HOST works collaboratively with a wide range of organisations and stakeholders to build 
        broad coalitions for change. We believe that sustainable solutions require diverse perspectives 
        and shared commitment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <h4 className="font-semibold host-navy mb-2">Local Authorities</h4>
          <p className="text-sm text-gray-600">
            Working with councils on policy development, enforcement strategies, and community engagement.
          </p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <h4 className="font-semibold host-navy mb-2">Housing Organizations</h4>
          <p className="text-sm text-gray-600">
            Collaborating with housing charities, tenant groups, and advocacy organisations.
          </p>
        </div>
        <div className="text-center p-4 border border-gray-200 rounded-lg">
          <h4 className="font-semibold host-navy mb-2">Research Institutions</h4>
          <p className="text-sm text-gray-600">
            Partnering with universities and think tanks on research and policy analysis.
          </p>
        </div>
      </div>

      <div className="bg-host-navy text-white p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-3">Transparency & Accountability</h4>
        <p className="mb-4">
          HOST is committed to transparent operations and accountable advocacy. We regularly 
          report on our activities, funding, and impact to ensure public trust and community confidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Financial Transparency:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Annual financial reporting</li>
              <li>• Clear funding source disclosure</li>
              <li>• No corporate or platform funding</li>
            </ul>
          </div>
          <div>
            <strong>Campaign Accountability:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Regular progress reporting</li>
              <li>• Community feedback mechanisms</li>
              <li>• Independent evaluation processes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// News Page with Categories and Comprehensive Content
const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', title: 'All Stories', count: 15 },
    { id: 'policy', title: 'Policy Updates', count: 4 },
    { id: 'success', title: 'Borough Success', count: 3 },
    { id: 'personal', title: 'Personal Stories', count: 4 },
    { id: 'disaster', title: 'Airbnb Disasters', count: 2 },
    { id: 'research', title: 'Research & Data', count: 2 }
  ]

  const newsItems = [
    // Policy Updates
    {
      id: 1,
      title: "Westminster Council Returns 50 Properties to Residential Use",
      date: "2025-01-15",
      summary: "Landmark enforcement action sees illegal short-term rentals converted back to homes for local residents in first month of new policy.",
      category: "policy",
      categoryLabel: "Policy Update",
      readTime: "4 min read",
      featured: true,
      content: `Westminster Council's new enforcement strategy has achieved remarkable results in its first month, returning 50 illegally operated short-term rental properties to residential use. The council's dedicated enforcement team, working with planning officers and legal experts, has systematically targeted properties operating without proper permissions.

The success comes after Westminster implemented stricter licensing requirements and increased penalties for non-compliance. Properties found operating as short-term rentals without planning permission now face fines of up to £20,000, with repeat offenders facing prosecution.

"This is exactly the kind of decisive action we need to see across London," said HOST campaign coordinator. "Westminster's approach proves that when councils take enforcement seriously, they can quickly restore housing to communities."

The 50 properties returned to residential use represent homes for approximately 150 residents, based on average occupancy rates. The council estimates this enforcement action has added £2.3 million worth of residential rental capacity back to the local market.

Westminster's enforcement strategy includes regular monitoring of short-term rental platforms, cross-referencing listings with planning permissions, and responding rapidly to community reports. The council has also established a dedicated hotline for residents to report suspected illegal operations.

Other London boroughs are now studying Westminster's approach, with Camden and Islington both announcing plans to adopt similar enforcement strategies. The success demonstrates that effective regulation of short-term rentals is both possible and immediately impactful for housing availability.`
    },
    {
      id: 2,
      title: "New London-Wide Short-Term Rental Registration System Announced",
      date: "2025-01-12",
      summary: "Mayor announces comprehensive registration system requiring all short-term rentals to obtain permits, with enforcement beginning April 2025.",
      category: "policy",
      categoryLabel: "Policy Update",
      readTime: "3 min read",
      content: `The Mayor of London has announced a groundbreaking new registration system that will require all short-term rental operators to obtain permits before listing properties on platforms like Airbnb and Booking.com. The system, set to launch in April 2025, represents the most comprehensive regulatory approach to short-term rentals in London's history.

Under the new system, property owners must demonstrate compliance with planning permissions, fire safety regulations, and local licensing requirements before receiving a registration number. This number must be displayed on all platform listings, making it easy for enforcement officers to identify non-compliant properties.

The registration system will be managed by a new London Short-Term Rental Authority, working in partnership with all 32 London boroughs. The authority will maintain a public database of registered properties, allowing residents to verify the legal status of short-term rentals in their area.

"This system will finally give us the tools we need to distinguish between legitimate, compliant short-term rentals and the thousands of illegal operations that are removing homes from our communities," explained the Mayor's housing advisor.

Platform companies will be required to remove listings that cannot provide valid registration numbers within 30 days of the system launch. Penalties for non-compliance include fines of up to £30,000 and potential criminal prosecution for repeat offenders.

The announcement follows successful lobbying by housing campaigners, including HOST, who have long argued for comprehensive regulation rather than piecemeal enforcement. The system is expected to significantly reduce the number of illegal short-term rentals while ensuring legitimate operators can continue to serve visitors to London.`
    },
    {
      id: 3,
      title: "Camden Introduces 90-Day Annual Limit for Short-Term Rentals",
      date: "2025-01-08",
      summary: "Following successful pilot programme, Camden Council implements strict annual limits on short-term rental operations to protect residential communities.",
      category: "policy",
      categoryLabel: "Policy Update",
      readTime: "3 min read",
      content: `Camden Council has become the first London borough to implement a strict 90-day annual limit on short-term rental operations, following the success of a pilot programme in the King's Cross area. The new policy, which takes effect immediately, aims to prevent the wholesale conversion of residential properties to tourist accommodation.

The 90-day limit applies to entire properties rented as short-term accommodation, with property owners required to demonstrate compliance through detailed booking records. Properties exceeding the limit will be considered to have changed use from residential to commercial, requiring planning permission.

Camden's pilot programme in King's Cross, running since September 2024, saw a 40% reduction in short-term rental listings and a corresponding increase in long-term rental availability. Local estate agents reported increased interest from long-term tenants and stabilizing rental prices in the area.

"The pilot results clearly demonstrate that sensible limits on short-term rentals can restore housing to communities without eliminating tourism accommodation entirely," said Camden's Cabinet Member for Housing.

The council will enforce the new limits through regular monitoring of platform listings, cross-referencing with council tax and business rates records, and investigating community reports. Property owners found in breach face enforcement action including planning enforcement notices and potential prosecution.

The 90-day limit aligns with similar restrictions in cities like Amsterdam and Barcelona, which have successfully used annual limits to balance tourism with residential housing needs. Other London boroughs are closely watching Camden's implementation, with several indicating they may adopt similar measures.

Camden has also announced additional support for residents affected by short-term rental conversions, including priority access to social housing and assistance with finding alternative accommodation.`
    },
    {
      id: 4,
      title: "Government Announces National Review of Short-Term Rental Regulation",
      date: "2025-01-05",
      summary: "Department for Levelling Up launches comprehensive review of short-term rental impacts on housing, with potential for national legislation.",
      category: "policy",
      categoryLabel: "Policy Update",
      readTime: "5 min read",
      content: `The Department for Levelling Up, Housing and Communities has announced a comprehensive national review of short-term rental regulation, responding to growing concerns about the impact on housing availability across the UK. The review will examine the effectiveness of current local authority powers and consider the need for national legislation.

The announcement follows mounting pressure from housing campaigners, local authorities, and MPs representing constituencies with high concentrations of short-term rentals. London MPs have been particularly vocal, citing the HOST campaign's research showing over 45,000 properties removed from the long-term rental market.

The review will examine several key areas: the adequacy of current planning and licensing powers, the effectiveness of enforcement mechanisms, the economic impact on local communities, and the balance between tourism benefits and housing needs. International best practices from cities like Barcelona, Amsterdam, and New York will also be studied.

"We're committed to ensuring that the growth of short-term rentals doesn't come at the expense of local housing needs," said the Housing Minister. "This review will provide the evidence base for any necessary changes to national policy."

The review team will include representatives from local government, the tourism industry, housing organisations, and platform companies. Public consultation will begin in March 2025, with particular focus on gathering evidence from affected communities.

Potential outcomes include national registration requirements, standardized annual limits, enhanced enforcement powers for local authorities, and mandatory data sharing from platform companies. The review is expected to report by the end of 2025, with any legislative changes potentially taking effect in 2026.

Housing campaigners have welcomed the review while emphasizing the need for immediate action. "While we support this comprehensive approach, communities are being displaced right now," said a HOST spokesperson. "We need urgent interim measures while the review proceeds."`
    },

    // Borough Success Stories
    {
      id: 5,
      title: "Hackney's Licensing Scheme Reduces Illegal Airbnb Operations by 60%",
      date: "2025-01-10",
      summary: "Comprehensive licensing and enforcement programme demonstrates how local action can effectively regulate short-term rentals while supporting communities.",
      category: "success",
      categoryLabel: "Borough Success",
      readTime: "4 min read",
      featured: true,
      content: `Hackney Council's innovative licensing scheme has achieved a 60% reduction in illegal short-term rental operations over the past 18 months, demonstrating how comprehensive local regulation can effectively balance tourism with community housing needs.

The scheme, launched in July 2023, requires all short-term rental operators to obtain licences demonstrating compliance with planning, fire safety, and community standards. The licensing process includes neighbour consultation, property inspections, and ongoing monitoring requirements.

"The results speak for themselves," said Hackney's Cabinet Member for Housing. "We've seen hundreds of properties return to the long-term rental market while maintaining space for legitimate, well-managed short-term accommodation."

The licensing scheme includes several innovative features: mandatory neighbour notification for all applications, annual compliance checks, a community reporting system, and penalties including licence revocation for non-compliance. Licence fees are set at cost-recovery levels, ensuring the scheme is self-funding.

Data from the first 18 months shows 847 properties applied for licences, with 623 approved and 224 refused or withdrawn. Of the refused applications, 180 properties have returned to long-term residential use, providing homes for an estimated 540 residents.

The scheme has also improved the quality of legitimate short-term rentals, with licensed properties required to meet higher standards for fire safety, noise management, and waste disposal. Neighbour complaints about short-term rentals have decreased by 75% since the scheme's introduction.

Hackney's approach has attracted attention from across London and beyond, with delegations from other councils visiting to study the implementation. The council has published a detailed guide to help other authorities develop similar schemes.

"This proves that local authorities don't need to wait for national legislation," explained a housing policy expert. "With political will and community support, councils can take effective action now."`
    },
    {
      id: 6,
      title: "Southwark's Community-Led Enforcement Returns 30 Properties to Families",
      date: "2025-01-07",
      summary: "Innovative partnership between council and residents creates effective monitoring system that prioritizes community needs over platform profits.",
      category: "success",
      categoryLabel: "Borough Success",
      readTime: "3 min read",
      content: `Southwark Council's community-led enforcement programme has successfully returned 30 illegally operated short-term rental properties to residential use, demonstrating the power of partnership between local authorities and engaged residents.

The programme, launched in partnership with local tenant and resident associations, trains community volunteers to identify and report suspected illegal short-term rental operations. Volunteers receive training on planning law, evidence gathering, and the reporting process.

"Residents know their neighbourhoods better than anyone," said Southwark's enforcement team leader. "By working with communities, we can identify problems quickly and take targeted action."

The programme operates through a network of 45 trained community monitors across the borough, each responsible for a specific area. Monitors use a dedicated app to report suspected illegal operations, providing photos, platform listings, and witness statements.

Since the programme's launch in September 2024, community monitors have submitted 127 reports, leading to formal investigations of 89 properties. Of these, 30 have been confirmed as illegal operations and returned to residential use, while others have obtained proper permissions or ceased short-term rental operations.

The success rate reflects the quality of community reporting and the council's commitment to rapid response. The average time from initial report to enforcement action has been reduced from six months to six weeks.

The programme has also strengthened community cohesion, with residents reporting increased confidence in their ability to influence local housing issues. Several resident associations have expanded their activities to include broader housing advocacy.

"This shows what's possible when councils trust residents and provide them with the tools to protect their communities," said a programme participant. "We're not anti-tourism, but we want tourism that works for everyone."

Other councils are now developing similar community-led programmes, with Southwark providing training and support to help replicate the model across London.`
    },
    {
      id: 7,
      title: "Tower Hamlets Enforcement Success: 40 Properties Returned in Six Months",
      date: "2025-01-03",
      summary: "Targeted enforcement in Canary Wharf and Bethnal Green areas demonstrates rapid impact of focused regulatory action on housing availability.",
      category: "success",
      categoryLabel: "Borough Success",
      readTime: "3 min read",
      content: `Tower Hamlets Council has achieved remarkable success in its targeted enforcement campaign, returning 40 illegally operated short-term rental properties to residential use in just six months. The campaign focused on areas with high concentrations of suspected illegal operations, particularly around Canary Wharf and Bethnal Green.

The enforcement strategy combined data analysis, community reporting, and rapid legal action to identify and address non-compliant properties. The council's planning enforcement team worked closely with legal services to ensure swift action against property owners operating without proper permissions.

"We took a zero-tolerance approach to illegal short-term rentals," explained Tower Hamlets' Head of Planning Enforcement. "Property owners had clear opportunities to comply with regulations, but those who chose to ignore the law faced immediate consequences."

The campaign began with comprehensive mapping of short-term rental listings across the borough, cross-referenced with planning permissions and licensing records. This identified over 200 potentially non-compliant properties, which were then investigated systematically.

Of the 40 properties returned to residential use, 25 were in purpose-built apartment blocks where short-term rentals were explicitly prohibited by lease conditions. The remaining 15 were houses converted to short-term use without planning permission.

The enforcement action has had immediate impact on local housing availability, with several of the returned properties already re-let to long-term tenants. Local estate agents report increased availability and stabilizing rents in the targeted areas.

The council has also worked with platform companies to remove non-compliant listings, with Airbnb and Booking.com both cooperating with enforcement requests. This partnership approach has helped prevent re-listing of properties under different names.

"This success demonstrates that effective enforcement is possible when councils commit resources and take systematic action," said a housing policy analyst. "Tower Hamlets has shown other authorities what can be achieved with focused effort."`
    },

    // Personal Stories
    {
      id: 8,
      title: "Sarah's Story: From Family Home to Tourist Flat in 30 Days",
      date: "2025-01-11",
      summary: "A mother of two describes how her landlord's sudden conversion to Airbnb left her family homeless and searching for affordable housing in London.",
      category: "personal",
      categoryLabel: "Personal Story",
      readTime: "5 min read",
      featured: true,
      content: `Sarah Martinez thought she had found stability for her family when she signed a two-year lease on a three-bedroom flat in Bethnal Green. Eight months later, she received 30 days' notice that her landlord was converting the property to short-term rental accommodation.

"I couldn't believe it," Sarah recalls. "We had made this place our home. My children had settled into local schools, we knew our neighbours, we were part of the community. Then suddenly we were told we had to leave so the flat could become a holiday rental."

Sarah's landlord, who owns several properties in the area, explained that he could earn three times more from short-term rentals than from long-term tenants. Despite Sarah's offer to pay increased rent, he proceeded with the conversion.

The family's search for alternative accommodation revealed the harsh reality of London's housing crisis. Properties in their price range were scarce, and many landlords were reluctant to rent to families with children. After viewing dozens of unsuitable properties, Sarah was forced to accept a smaller, more expensive flat in a different borough.

"My children had to change schools, leave their friends, start over completely," Sarah explains. "My daughter, who's 12, was devastated. She'd finally settled in after our previous move, and now she had to go through it all again."

The financial impact was severe. The new flat cost £400 more per month, and the family faced additional costs for new school uniforms, transport, and deposits. Sarah, who works as a teaching assistant, had to take on evening cleaning work to cover the increased expenses.

"What hurts most is knowing that our old flat sits empty most of the time," Sarah says. "I walk past it sometimes, and I can see it's not being used. Meanwhile, we're struggling to afford our new place, and there are families on the council waiting list who could have lived there."

Sarah's story is increasingly common across London. HOST campaign data shows that family-sized properties are disproportionately targeted for short-term rental conversion, as they command higher nightly rates from tourist groups.

"Sarah's experience shows the human cost of treating housing as a commodity rather than a home," said a HOST spokesperson. "Every property converted to short-term rental represents a family displaced, children changing schools, communities broken apart."

Sarah has since become involved with local housing campaigns, sharing her story to highlight the need for stronger tenant protections and regulation of short-term rentals. "I don't want other families to go through what we did," she says. "Housing should be for living in, not for profit."`
    },
    {
      id: 9,
      title: "Marcus: 'I Lost My Community When My Building Became a Hotel'",
      date: "2025-01-09",
      summary: "Long-term resident describes the isolation and safety concerns as his apartment building transformed into an informal tourist accommodation.",
      category: "personal",
      categoryLabel: "Personal Story",
      readTime: "4 min read",
      content: `Marcus Thompson has lived in the same Bloomsbury apartment building for 15 years, watching it transform from a close-knit residential community into what he describes as "an informal hotel with no management."

When Marcus first moved to the Victorian conversion in 2010, he knew all his neighbours. The building had eight flats, housing a mix of young professionals, families, and retirees who looked out for each other. Today, only Marcus and one elderly neighbour remain as permanent residents.

"It happened gradually, then all at once," Marcus explains. "First one flat became an Airbnb, then another. The landlords realised they could make much more money from tourists than from tenants like us."

The transformation has brought daily challenges Marcus never anticipated. The building's entrance is constantly busy with tourists arriving and departing with luggage, often late at night or early in the morning. The shared hallways are frequently cluttered with suitcases and delivery packages.

"I used to feel safe here," Marcus says. "I knew who belonged in the building and who didn't. Now there are strangers coming and going constantly. I don't know if someone's a legitimate guest or if they're supposed to be here."

The sense of community that Marcus valued has completely disappeared. Where neighbours once helped each other with packages, shared information about local issues, and socialized in the communal garden, there's now only the constant turnover of temporary visitors.

"The worst part is the noise," Marcus explains. "These aren't people living here, they're people on holiday. They don't understand that others are trying to sleep, work from home, or just have some peace. I've had to call the police several times about parties that went on until 3 AM."

The building's infrastructure is also suffering. The shared washing machine breaks down frequently from overuse, the internet is constantly overloaded, and the communal areas are often left messy by departing guests who have no investment in maintaining the space.

Marcus has considered moving but faces the same challenges as other long-term tenants: high rents, limited availability, and competition from other displaced residents. At 58, he's reluctant to start over in a new area where he has no connections.

"This used to be my home, my community," Marcus reflects. "Now I feel like a guest in my own building. I'm the one who doesn't belong anymore."

Marcus's experience illustrates the broader community impact of short-term rental conversions, extending beyond housing numbers to questions of neighbourhood character, safety, and social cohesion.`
    },
    {
      id: 10,
      title: "Emma's Fight: Evicted So Landlord Could 'Maximise Returns'",
      date: "2025-01-06",
      summary: "Young professional's battle against eviction for Airbnb conversion highlights the vulnerability of tenants in London's housing market.",
      category: "personal",
      categoryLabel: "Personal Story",
      readTime: "4 min read",
      content: `Emma Chen's two-year battle to keep her Shoreditch flat demonstrates the lengths some landlords will go to convert properties to short-term rentals, and the limited protections available to tenants facing such conversions.

Emma, a 29-year-old graphic designer, had lived in her one-bedroom flat for three years when her landlord first mentioned "maximising the property's potential." Initially, she thought this meant cosmetic improvements or rent increases, not complete displacement.

"He started by suggesting I might want to move somewhere 'more suitable for a young professional,'" Emma recalls. "When I said I was happy where I was, he became more direct about his plans to convert the flat for short-term rental."

The landlord initially offered Emma £2,000 to vacate voluntarily, which she refused. He then began a campaign of harassment designed to force her out: unnecessary property inspections, refusal to carry out repairs, and threats of eviction for minor lease violations.

"He would show up with potential Airbnb photographers, claiming he needed to 'document the property condition,'" Emma explains. "He'd schedule these visits during my work calls or late in the evening, clearly trying to make my life difficult."

When Emma refused to leave, the landlord served a Section 21 no-fault eviction notice, giving her two months to vacate. Emma challenged the notice through legal aid, discovering that the landlord had failed to protect her deposit properly and hadn't provided required safety certificates.

The legal challenge delayed the eviction by eight months, during which Emma documented the landlord's harassment and gathered evidence of his short-term rental plans. She found advertisements for the flat on Airbnb dated before her eviction notice, proving premeditation.

"The stress was overwhelming," Emma says. "I was trying to work, fight the eviction, and find alternative housing all at the same time. The uncertainty affected my mental health, my relationships, my career."

Despite winning several legal battles, Emma ultimately lost the war. The landlord corrected the technical issues with her tenancy and served a new, valid eviction notice. Facing mounting legal costs and the emotional toll of the fight, Emma accepted a settlement and moved out.

"The system is stacked against tenants," Emma reflects. "Even when landlords break the rules, they can usually find a way to get what they want eventually. The legal process is expensive and stressful, and most tenants can't sustain a long fight."

Emma's former flat is now listed on Airbnb for £150 per night, generating approximately £4,000 per month compared to the £1,200 rent Emma was paying. The landlord's "maximised returns" came at the cost of displacing a long-term resident and removing another property from London's rental market.

Emma now lives in a shared house in Zone 4, paying more for less space and facing a much longer commute to work. "I lost my home, my neighbourhood, and my faith in the rental system," she says. "All so someone could make more money from tourists."`
    },
    {
      id: 11,
      title: "David's Dilemma: Priced Out by Airbnb Boom in His Own Neighbourhood",
      date: "2025-01-02",
      summary: "Local teacher forced to leave the community where he works as short-term rentals drive up housing costs beyond his reach.",
      category: "personal",
      categoryLabel: "Personal Story",
      readTime: "4 min read",
      content: `David Williams has taught at the same primary school in Clapham for eight years, but he can no longer afford to live in the community where he works. The proliferation of short-term rentals in the area has driven rental prices beyond the reach of local workers like him.

"I used to live a 10-minute walk from school," David explains. "I knew the families, I was part of the community. Now I commute an hour each way from Zone 5 because that's all I can afford."

David's housing journey reflects the broader impact of short-term rentals on local workers. When his previous landlord converted his flat to Airbnb in 2023, David began searching for alternative accommodation in the same area. What he found shocked him.

"Rents had increased by 40% in just two years," David says. "Properties that were £1,400 per month when I first moved to the area were now £2,000 or more. On a teacher's salary, that's simply impossible."

The rental market had fundamentally changed. Many properties that would previously have been available for long-term rental were now operating as short-term accommodation, reducing supply and driving up prices for remaining properties.

David's search revealed the extent of the transformation. In his preferred area, he found 47 active Airbnb listings but only 12 properties available for long-term rental. Estate agents told him that many landlords had switched to short-term rentals because of the higher returns.

"I was competing with other displaced residents for a handful of properties," David recalls. "Viewings had 20 or 30 people, all desperate for somewhere to live. Landlords could pick and choose, often demanding six months' rent in advance."

The financial pressure forced David to expand his search further from his workplace. He eventually found a flat in Croydon, doubling his commute time and adding £200 per month in transport costs to his budget.

"The irony is that I'm now spending more on transport than I was saving on rent," David explains. "Plus I've lost two hours a day to commuting, which affects my ability to do my job properly."

The impact extends beyond David's personal circumstances. As a teacher, he previously participated in after-school activities, parent meetings, and community events. The long commute has forced him to reduce these commitments.

"I used to coach the school football team and run a homework club," David says. "Now I have to rush to catch my train. The children are losing out because their teachers can't afford to live in the community."

David's story is increasingly common among public sector workers in London. Teachers, nurses, police officers, and other essential workers are being priced out of the communities they serve, creating recruitment and retention challenges for public services.

"We talk about the importance of community schools and local services," David reflects. "But how can we maintain that when the people providing those services can't afford to live locally? Short-term rentals aren't just changing housing – they're changing the entire character of our communities."`
    },

    // Airbnb Disasters
    {
      id: 12,
      title: "Party House Horror: £15,000 Damage and Neighbours Flee Building",
      date: "2025-01-08",
      summary: "Illegal Airbnb party in Hackney results in massive property damage, police intervention, and long-term residents considering moving away.",
      category: "disaster",
      categoryLabel: "Airbnb Disaster",
      readTime: "4 min read",
      content: `A weekend party at an illegal Airbnb in Hackney resulted in £15,000 worth of damage to a Victorian terrace house and has prompted several long-term residents to consider leaving the area permanently.

The property, a four-bedroom house that had been operating as a short-term rental without planning permission, was booked by a group claiming to be "celebrating a birthday." Instead, they organised a party for over 50 people that lasted from Friday evening until Sunday morning.

"It was absolute chaos," said neighbour Janet Morrison, who lives next door with her elderly mother. "The music was so loud our windows were shaking. There were people in our garden, using our bins, urinating in the street. We called the police six times over the weekend."

The party caused extensive damage to the property: broken windows, holes punched in walls, damaged flooring, and a completely destroyed kitchen. The garden was left littered with bottles, drug paraphernalia, and human waste. The smell was so bad that neighbouring properties had to keep windows closed for weeks.

Police eventually intervened on Sunday morning after reports of a fight involving weapons. Three people were arrested, and the remaining party-goers were dispersed. The property was left in such poor condition that it required professional cleaning and extensive repairs.

"The worst part was feeling completely helpless," explained neighbour Tom Chen. "We couldn't sleep, couldn't use our garden, couldn't have our windows open. And we knew this could happen again the next weekend."

The incident revealed that the property had been operating illegally for over a year, generating complaints from neighbours that had been ignored by the platform and the property owner. The house had no proper licensing, no noise management plan, and no local contact for emergencies.

Local councillor Sarah Ahmed visited the scene and described it as "the worst example of irresponsible short-term rental operation" she had encountered. The council immediately began enforcement action against the property owner and contacted Airbnb to demand removal of the listing.

The impact on the community has been lasting. Three elderly residents have contacted the council about moving to sheltered accommodation, citing fear of future incidents. Property values in the immediate area have been affected, with one house sale falling through after buyers learned about the Airbnb operation.

"This is what happens when there's no proper regulation or oversight," said a housing campaigner. "Platforms and property owners profit while communities pay the price in safety, security, and quality of life."

The property owner, who lives abroad, initially refused to take responsibility for the damage or compensate affected neighbours. Only after legal action was threatened did they agree to cover repair costs and cease short-term rental operations.

The incident has become a rallying point for local residents demanding stricter regulation of short-term rentals and better enforcement of existing rules.`
    },
    {
      id: 13,
      title: "Fire Safety Nightmare: Illegal Airbnb Lacks Basic Safety Equipment",
      date: "2025-01-04",
      summary: "London Fire Brigade discovers dangerous safety violations at unlicensed short-term rental, highlighting risks to guests and neighbours.",
      category: "disaster",
      categoryLabel: "Airbnb Disaster",
      readTime: "3 min read",
      content: `London Fire Brigade's inspection of an illegal Airbnb operation in Tower Hamlets revealed shocking safety violations that put both guests and neighbouring residents at serious risk of injury or death in the event of a fire.

The property, a converted Victorian house operating as multiple short-term rental units, was investigated following a small kitchen fire that required emergency response. What firefighters discovered was a catalogue of safety failures that violated multiple regulations.

"This was one of the most dangerous properties I've inspected in 20 years of service," said Station Manager David Roberts. "The fire safety violations were so extensive that we had to immediately prohibit occupation of the building."

The violations included: no working smoke detectors, blocked fire exits, inadequate escape routes, overloaded electrical systems, and no fire safety information for guests. The property was accommodating up to 16 people across four converted units, none of which met basic safety standards.

The kitchen fire, caused by faulty wiring, could have been catastrophic. Guests reported that they couldn't find fire exits in the dark, smoke detectors didn't activate, and there was no emergency lighting. Only quick action by a guest who happened to be a trained first-aider prevented serious injuries.

"We were staying on the third floor and couldn't see how to get out," said guest Maria Santos. "The stairs were blocked with luggage, there was no emergency lighting, and we could smell smoke but didn't know where it was coming from. It was terrifying."

The property had been operating for over two years, hosting hundreds of guests who were unknowingly staying in dangerous conditions. Reviews on the platform made no mention of safety concerns, and the listing included false claims about "full safety compliance."

Fire Brigade investigations revealed that the property owner had deliberately removed safety equipment to "improve the aesthetic" of the accommodation. Smoke detectors were disconnected because guests complained about false alarms from cooking, and fire doors were propped open to "improve airflow."

The incident highlighted broader concerns about safety oversight in the short-term rental sector. Unlike hotels, which face regular safety inspections, many short-term rentals operate without any safety oversight or compliance checking.

"This case demonstrates the life-threatening risks when properties operate outside proper regulatory frameworks," explained a fire safety expert. "Guests have no way of knowing whether basic safety measures are in place."

The property owner faces prosecution for multiple safety violations and has been banned from operating short-term rentals. The platform removed the listing only after being contacted by the Fire Brigade, despite the property operating illegally for years.

Local residents have called for mandatory safety inspections for all short-term rentals, arguing that the current system puts both guests and communities at unacceptable risk.`
    },

    // Research & Data
    {
      id: 14,
      title: "New Research: Short-Term Rentals Remove 45,000 Homes from London Market",
      date: "2025-01-13",
      summary: "Comprehensive study reveals the true scale of housing loss to platforms like Airbnb, with some boroughs losing over 20% of rental stock.",
      category: "research",
      categoryLabel: "Research & Data",
      readTime: "5 min read",
      content: `A comprehensive new study by the London Housing Research Institute has quantified the impact of short-term rentals on London's housing market, revealing that over 45,000 entire properties have been removed from the long-term rental market since 2014.

The research, based on analysis of platform data, planning records, and housing statistics, provides the most detailed picture yet of how short-term rentals are affecting housing availability across London's 32 boroughs.

"The scale of housing loss is staggering," said lead researcher Dr. Amanda Foster. "We're not talking about spare rooms or occasional rentals – these are entire properties that would otherwise house London residents permanently."

The study found significant variation across boroughs, with Westminster, Camden, and Kensington & Chelsea showing the highest concentrations of short-term rentals. In some areas of central London, over 20% of the residential housing stock is now operating as short-term accommodation.

The research methodology combined multiple data sources: daily monitoring of Airbnb and other platform listings, cross-referencing with Land Registry data, analysis of planning applications and enforcement records, and surveys of displaced residents.

Key findings include a 571% increase in entire property listings since 2014, with the steepest growth occurring in 2018-2020. The average short-term rental generates 2.8 times more revenue than long-term rental, creating powerful financial incentives for conversion.

The study also examined the characteristics of converted properties, finding that family-sized homes (3+ bedrooms) are disproportionately targeted for conversion. These properties, which are most needed by families with children, command the highest nightly rates from tourist groups.

"We're seeing the systematic removal of family housing from communities," explained Dr. Foster. "This isn't just about numbers – it's about the type of housing being lost and the impact on community composition."

The research estimated that the 45,000 converted properties could house approximately 135,000 residents based on average occupancy rates. This represents a significant portion of London's housing shortage, which is estimated at 66,000 homes annually.

The economic analysis revealed that while short-term rentals generate substantial revenue for property owners and platforms, the broader economic impact on communities is negative. Displaced residents face higher housing costs, longer commutes, and reduced spending in local businesses.

The study also examined enforcement effectiveness, finding that only 12% of potentially illegal short-term rentals face any enforcement action. This low enforcement rate reflects limited local authority resources and the difficulty of monitoring platform listings.

"The current regulatory framework is clearly inadequate," concluded Dr. Foster. "Without significant policy changes, we can expect continued growth in short-term rentals and further displacement of London residents."

The research has been submitted to the government's national review of short-term rental regulation and is being used by local authorities to develop more effective enforcement strategies.`
    },
    {
      id: 15,
      title: "Platform Data Analysis Reveals Hidden Scale of Illegal Operations",
      date: "2025-01-01",
      summary: "Advanced data analysis techniques uncover thousands of short-term rentals operating without proper permissions across London.",
      category: "research",
      categoryLabel: "Research & Data",
      readTime: "4 min read",
      content: `A sophisticated data analysis project has revealed that up to 60% of short-term rental listings in London may be operating without proper planning permissions or licences, highlighting the massive scale of illegal operations across the capital.

The research, conducted by data scientists working with housing campaigners, used advanced algorithms to cross-reference platform listings with official planning and licensing databases. The results suggest that illegal operations far exceed previous estimates.

"We developed machine learning models to identify patterns that indicate illegal operations," explained data scientist Dr. James Liu. "By analysing listing characteristics, booking patterns, and regulatory compliance, we can predict with high accuracy which properties are operating illegally."

The analysis examined over 80,000 active listings across Airbnb, Booking.com, and other platforms, comparing them with planning permissions, licensing records, and council tax databases. The sophisticated matching process accounted for address variations, multiple listings for the same property, and attempts to obscure property locations.

Key indicators of illegal operations include: properties listed as entire homes in areas where short-term rentals require planning permission, listings with no valid licence numbers in boroughs with licensing schemes, properties with multiple listings under different names, and booking patterns suggesting permanent commercial operation.

The research found that illegal operations are concentrated in specific areas, with some neighbourhoods showing illegal operation rates of over 80%. These areas typically have high tourist demand but limited enforcement resources.

"The scale of illegal operations is far beyond what most people realise," said Dr. Liu. "We're not talking about occasional rule-breaking – this is systematic non-compliance with planning and licensing requirements."

The analysis also revealed sophisticated attempts to evade detection and enforcement. These include: using multiple platform accounts to list the same property, deliberately obscuring exact addresses, rotating listings between different platforms, and using corporate structures to hide beneficial ownership.

The research identified approximately 27,000 listings that show strong indicators of illegal operation, representing potential housing for over 80,000 residents. The concentration of illegal operations in high-demand areas suggests that enforcement efforts should be targeted geographically for maximum impact.

Platform cooperation emerged as a critical factor in enforcement effectiveness. The research found that platforms vary significantly in their willingness to share data with local authorities and remove non-compliant listings.

"Effective regulation requires platforms to take responsibility for ensuring compliance," argued Dr. Liu. "The current system places the burden entirely on under-resourced local authorities."

The research methodology has been shared with local authorities across London to help them identify and prioritize enforcement action. Several councils have already begun using the techniques to target their limited enforcement resources more effectively.

The findings have also been submitted to the government's national review, providing evidence for the need for stronger platform accountability and enhanced local authority powers.`
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory)

  const featuredItems = newsItems.filter(item => item.featured)

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title text-center">News & Stories</h1>
          <p className="section-subtitle text-center">
            Latest updates, success stories, and voices from communities affected by short-term rentals
          </p>

          {/* Featured Stories */}
          {activeCategory === 'all' && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold host-navy mb-6">Featured Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredItems.map((item) => (
                  <div key={item.id} className="campaign-card hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-host-red text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.categoryLabel}
                      </span>
                      <span className="text-gray-500 text-sm">{item.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 host-navy line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <Button variant="outline" size="sm" className="text-host-red border-host-red hover:bg-host-red hover:text-white">
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`p-3 rounded-lg text-center transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-host-red text-white shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                    }`}
                  >
                    <div className="text-sm font-medium">{category.title}</div>
                    <div className="text-xs opacity-75">({category.count})</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* News Articles */}
          <div className="space-y-6">
            {filteredItems.map((item) => (
              <article key={item.id} className="campaign-card hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <span className="bg-host-red text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.categoryLabel}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar className="mr-1" size={16} />
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    <span className="text-gray-500 text-sm">{item.readTime}</span>
                  </div>
                  {item.featured && (
                    <span className="bg-host-navy text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <h2 className="text-xl font-semibold mb-3 host-navy">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                
                {item.content && (
                  <div className="prose prose-sm max-w-none text-gray-700 mb-4">
                    <p>{item.content.substring(0, 300)}...</p>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="text-host-red border-host-red hover:bg-host-red hover:text-white">
                      Read Full Article <ChevronRight className="ml-2" size={16} />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-host-red">
                      <Share2 size={16} />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-host-navy text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Share Your Story</h3>
            <p className="mb-6">
              Have you been affected by short-term rentals in your community? Your story could help others 
              and contribute to policy change. We'd like to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-host-navy hover:bg-gray-100">
                <Mail className="mr-2" size={16} />
                Share Your Story
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-host-navy">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// For Landlords Page - Comprehensive Direct Messaging
const LandlordsPage = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Overview', icon: Info },
    { id: 'legal', title: 'Legal Requirements', icon: Scale },
    { id: 'financial', title: 'Financial Reality', icon: FileText },
    { id: 'community', title: 'Community Impact', icon: Users },
    { id: 'alternatives', title: 'Better Alternatives', icon: Home }
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="section-title">A Message to London's Landlords</h1>
            <p className="section-subtitle">
              Your property decisions shape London's future. Let's work together for sustainable communities.
            </p>
          </div>

          {/* Direct Message Hero */}
          <div className="bg-gradient-to-r from-host-red to-host-navy text-white p-8 rounded-xl mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">We're Not Your Enemy</h2>
              <p className="text-xl mb-6">
                We understand you're running a business and need to maximise returns. But there's a better way 
                to achieve financial success while supporting the communities that make London special.
              </p>
              <p className="text-lg opacity-90">
                This page explains the legal requirements, financial realities, and community impact of 
                short-term rentals – plus profitable alternatives that benefit everyone.
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {sections.map((section) => {
                  const IconComponent = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`p-4 rounded-lg text-center transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-host-red text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                      }`}
                    >
                      <IconComponent className="mx-auto mb-2" size={20} />
                      <div className="text-sm font-medium">{section.title}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="campaign-card">
            {activeSection === 'overview' && <LandlordOverviewSection />}
            {activeSection === 'legal' && <LandlordLegalSection />}
            {activeSection === 'financial' && <LandlordFinancialSection />}
            {activeSection === 'community' && <LandlordCommunitySection />}
            {activeSection === 'alternatives' && <LandlordAlternativesSection />}
          </div>
        </div>
      </div>
    </div>
  )
}

// Landlord Overview Section
const LandlordOverviewSection = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold host-navy mb-6">The Reality Check You Need</h2>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
        <h3 className="text-xl font-semibold text-yellow-800 mb-3">Before You Convert to Short-Term Rental</h3>
        <p className="text-yellow-700">
          Many landlords jump into short-term rentals attracted by headline figures of £200+ per night. 
          But the reality is more complex, with hidden costs, legal risks, and community consequences 
          that can seriously impact your investment.
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">What This Page Will Tell You</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Legal Requirements</h4>
          <p className="text-gray-600">
            The complex web of planning permissions, licensing requirements, fire safety regulations, 
            and tax obligations that many operators ignore – at their peril.
          </p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Financial Reality</h4>
          <p className="text-gray-600">
            The true costs of short-term rental operation, including hidden expenses that can 
            eliminate the profit advantage over long-term letting.
          </p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Community Impact</h4>
          <p className="text-gray-600">
            How your property decisions affect your neighbours, local services, and the long-term 
            sustainability of the communities where you invest.
          </p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Better Alternatives</h4>
          <p className="text-gray-600">
            Profitable, sustainable approaches to property investment that support communities 
            while delivering strong returns with less risk and hassle.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Our Approach</h3>
      <p className="mb-6">
        We're not anti-landlord or anti-business. Many of our supporters are property owners themselves. 
        We believe in profitable property investment that works for everyone – investors, residents, 
        and communities.
      </p>

      <p className="mb-6">
        What we oppose is the systematic conversion of residential housing to tourist accommodation 
        without proper oversight, community consultation, or regard for the broader impact on London's 
        housing crisis.
      </p>

      <div className="bg-host-navy text-white p-6 rounded-lg mb-8">
        <h4 className="text-xl font-semibold mb-3">The Bottom Line</h4>
        <p className="mb-4">
          Short-term rentals can be profitable, but they're not the easy money many people think. 
          The legal requirements are complex, the operational demands are significant, and the 
          community backlash is growing.
        </p>
        <p>
          Smart landlords are looking at sustainable alternatives that provide steady returns 
          without the legal risks, operational headaches, or community conflicts that come 
          with short-term rentals.
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">What We're Asking</h3>
      <p className="mb-6">
        We're asking you to make informed decisions based on complete information, not just 
        platform marketing materials. Consider the legal requirements, true costs, and community 
        impact before converting residential properties to short-term use.
      </p>

      <p className="mb-6">
        If you do operate short-term rentals, do it legally, responsibly, and with consideration 
        for your neighbours. If you're considering it, explore the alternatives first – you might 
        find they offer better returns with less risk.
      </p>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold host-navy mb-3">Ready to Learn More?</h4>
        <p className="mb-4">
          Use the tabs above to explore each section in detail. We've provided comprehensive 
          information to help you make the best decision for your investment and your community.
        </p>
        <p className="text-sm text-gray-600">
          All information is based on current regulations and industry data. We recommend 
          consulting with legal and financial professionals before making property investment decisions.
        </p>
      </div>
    </div>
  )
}

// Landlord Legal Section
const LandlordLegalSection = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold host-navy mb-6">Legal Requirements: What You Must Know</h2>
      
      <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
        <h3 className="text-xl font-semibold text-red-800 mb-3">Warning: Ignorance Is Not a Defense</h3>
        <p className="text-red-700">
          Many landlords operate short-term rentals illegally, often unknowingly. Enforcement is 
          increasing rapidly, and penalties can include fines up to £30,000, prosecution, and 
          forced closure of your operation.
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Planning Permission Requirements</h3>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold host-red mb-3">When You Need Planning Permission</h4>
        <div className="space-y-3">
          <p><strong>Always Required:</strong> Converting entire properties to short-term use</p>
          <p><strong>Usually Required:</strong> Operating more than 90 days per year</p>
          <p><strong>Often Required:</strong> Properties in conservation areas or listed buildings</p>
          <p><strong>Check Required:</strong> Any commercial use of residential property</p>
        </div>
      </div>

      <p className="mb-6">
        The 90-day rule is widely misunderstood. It applies to <em>some</em> properties in <em>some</em> 
        circumstances, but many short-term rentals require planning permission regardless of duration. 
        Each borough has different rules, and many are tightening regulations rapidly.
      </p>

      <h4 className="text-xl font-semibold host-red mb-3">Enforcement Reality</h4>
      <p className="mb-6">
        Westminster Council returned 50 properties to residential use in one month. Tower Hamlets 
        closed 40 illegal operations in six months. Hackney's licensing scheme reduced illegal 
        operations by 60%. Enforcement is no longer theoretical – it's happening now.
      </p>

      <h3 className="text-2xl font-semibold host-navy mb-4">Licensing Requirements</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-200 p-4 rounded-lg">
          <h4 className="font-semibold host-navy mb-2">Boroughs with Licensing</h4>
          <ul className="text-sm space-y-1">
            <li>• Hackney (comprehensive scheme)</li>
            <li>• Camden (selective licensing)</li>
            <li>• Westminster (registration required)</li>
            <li>• Southwark (pilot programme)</li>
            <li>• Tower Hamlets (under development)</li>
          </ul>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg">
          <h4 className="font-semibold host-navy mb-2">Typical Requirements</h4>
          <ul className="text-sm space-y-1">
            <li>• Planning permission verification</li>
            <li>• Fire safety compliance</li>
            <li>• Neighbour consultation</li>
            <li>• Annual compliance checks</li>
            <li>• Fees: £500-£2,000 annually</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Fire Safety Obligations</h3>
      <p className="mb-6">
        Short-term rentals are commercial operations subject to commercial fire safety standards. 
        This is not optional – it's a legal requirement that can result in criminal prosecution 
        if ignored.
      </p>

      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold text-yellow-800 mb-3">Required Safety Measures</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Detection & Alarm:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Interlinked smoke detectors</li>
              <li>• Heat detectors in kitchens</li>
              <li>• Carbon monoxide detectors</li>
              <li>• Emergency lighting</li>
            </ul>
          </div>
          <div>
            <strong>Escape & Access:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Clear escape routes</li>
              <li>• Fire doors where required</li>
              <li>• Emergency action plans</li>
              <li>• Regular safety checks</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Tax and Business Rates</h3>
      <p className="mb-6">
        Short-term rentals are businesses, not residential lettings. This has significant tax 
        implications that many operators ignore until they receive enforcement notices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-200 p-4 rounded-lg">
          <h4 className="font-semibold host-red mb-2">Business Rates</h4>
          <p className="text-sm text-gray-600 mb-3">
            Properties operating commercially are liable for business rates instead of council tax.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Rates: 40-50% of rateable value</li>
            <li>• No small business relief for most STRs</li>
            <li>• Backdated bills for illegal operations</li>
            <li>• Penalties for non-declaration</li>
          </ul>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg">
          <h4 className="font-semibold host-red mb-2">Income Tax</h4>
          <p className="text-sm text-gray-600 mb-3">
            Short-term rental income is business income with different tax treatment.
          </p>
          <ul className="text-sm space-y-1">
            <li>• No rent-a-room relief</li>
            <li>• Business expense rules apply</li>
            <li>• Potential VAT registration</li>
            <li>• Self-employment obligations</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Insurance and Liability</h3>
      <p className="mb-6">
        Standard buy-to-let insurance does not cover short-term rental operations. Operating 
        without proper insurance can void your coverage entirely, leaving you personally liable 
        for damages, injuries, or losses.
      </p>

      <div className="bg-red-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold text-red-800 mb-3">Insurance Requirements</h4>
        <ul className="text-red-700 space-y-2">
          <li>• Commercial property insurance</li>
          <li>• Public liability insurance (minimum £2M)</li>
          <li>• Employer's liability if you have staff</li>
          <li>• Contents insurance for furnished properties</li>
          <li>• Business interruption insurance</li>
        </ul>
        <p className="text-red-700 mt-4 font-medium">
          Cost: £2,000-£5,000 annually vs. £300-£800 for standard buy-to-let insurance
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Platform Responsibilities</h3>
      <p className="mb-6">
        Don't rely on platforms to ensure your compliance. Airbnb, Booking.com, and others 
        explicitly state that hosts are responsible for all legal requirements. Platform 
        suspension or removal offers no protection from enforcement action.
      </p>

      <div className="bg-host-navy text-white p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-3">Legal Compliance Checklist</h4>
        <p className="mb-4">
          Before operating any short-term rental, ensure you have:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <ul className="space-y-2">
              <li>✓ Planning permission (if required)</li>
              <li>✓ Local authority licence (if required)</li>
              <li>✓ Fire safety compliance certificate</li>
              <li>✓ Commercial insurance coverage</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>✓ Business rates registration</li>
              <li>✓ Tax compliance setup</li>
              <li>✓ Health and safety assessment</li>
              <li>✓ Neighbour notification (where required)</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm opacity-90">
          Failure to comply with any of these requirements can result in enforcement action, 
          fines, and forced closure of your operation.
        </p>
      </div>
    </div>
  )
}

// Landlord Financial Section
const LandlordFinancialSection = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold host-navy mb-6">Financial Reality: The True Cost of Short-Term Rentals</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">The £200/Night Myth</h3>
        <p className="text-blue-700">
          Platform marketing focuses on peak rates, but successful short-term rental operation 
          requires understanding occupancy rates, seasonal variations, hidden costs, and the 
          significant time investment required for management.
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Revenue Reality Check</h3>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold host-red mb-4">London Short-Term Rental Performance (2024 Data)</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold host-navy mb-2">62%</div>
            <div className="text-sm text-gray-600">Average annual occupancy rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold host-navy mb-2">£127</div>
            <div className="text-sm text-gray-600">Average nightly rate (after platform fees)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold host-navy mb-2">£28,800</div>
            <div className="text-sm text-gray-600">Average gross annual revenue</div>
          </div>
        </div>
      </div>

      <p className="mb-6">
        These figures represent the reality for most operators, not the cherry-picked success 
        stories used in platform marketing. Peak summer rates of £200+ are offset by winter 
        periods with 30-40% occupancy and significantly lower rates.
      </p>

      <h3 className="text-2xl font-semibold host-navy mb-4">Hidden Costs Analysis</h3>
      
      <div className="space-y-6 mb-8">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Platform and Payment Fees</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Typical fee structure:</p>
              <ul className="text-sm space-y-1">
                <li>• Airbnb host fee: 3%</li>
                <li>• Guest service fee: 14-16%</li>
                <li>• Payment processing: 3%</li>
                <li>• Currency conversion: 1-2%</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Annual impact on £30k revenue:</p>
              <ul className="text-sm space-y-1">
                <li>• Total platform fees: £5,400</li>
                <li>• Net revenue: £24,600</li>
                <li>• Effective fee rate: 18%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Operational Costs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Essential services:</p>
              <ul className="text-sm space-y-1">
                <li>• Professional cleaning: £3,600/year</li>
                <li>• Linen and supplies: £1,200/year</li>
                <li>• Utilities (higher usage): £2,400/year</li>
                <li>• Internet and TV: £600/year</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Management and maintenance:</p>
              <ul className="text-sm space-y-1">
                <li>• Key management/lockbox: £480/year</li>
                <li>• Increased maintenance: £1,800/year</li>
                <li>• Guest communication: 10-15 hrs/week</li>
                <li>• Emergency callouts: £800/year</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Legal and Compliance Costs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Mandatory requirements:</p>
              <ul className="text-sm space-y-1">
                <li>• Commercial insurance: £3,000/year</li>
                <li>• Business rates: £2,500/year</li>
                <li>• Licensing fees: £1,000/year</li>
                <li>• Fire safety compliance: £800/year</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Professional services:</p>
              <ul className="text-sm space-y-1">
                <li>• Accountancy: £1,200/year</li>
                <li>• Legal advice: £800/year</li>
                <li>• Planning applications: £500/year</li>
                <li>• Safety inspections: £400/year</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">True Profit Comparison</h3>
      
      <div className="bg-white border-2 border-host-red p-6 rounded-lg mb-6">
        <h4 className="text-xl font-semibold host-navy mb-4">Annual Profit Analysis: 2-Bedroom Flat in Zone 2</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-lg font-semibold host-red mb-3">Short-Term Rental</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Gross Revenue (62% occupancy)</span>
                <span>£28,800</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fees (18%)</span>
                <span>-£5,184</span>
              </div>
              <div className="flex justify-between">
                <span>Operational Costs</span>
                <span>-£10,880</span>
              </div>
              <div className="flex justify-between">
                <span>Legal/Compliance</span>
                <span>-£9,700</span>
              </div>
              <div className="flex justify-between">
                <span>Additional Tax</span>
                <span>-£1,200</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold">
                <span>Net Annual Profit</span>
                <span>£1,836</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Monthly Profit</span>
                <span>£153</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold host-navy mb-3">Long-Term Rental</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Annual Rent</span>
                <span>£24,000</span>
              </div>
              <div className="flex justify-between">
                <span>Agent Fees (10%)</span>
                <span>-£2,400</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance</span>
                <span>-£600</span>
              </div>
              <div className="flex justify-between">
                <span>Maintenance</span>
                <span>-£800</span>
              </div>
              <div className="flex justify-between">
                <span>Void Periods</span>
                <span>-£1,200</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold">
                <span>Net Annual Profit</span>
                <span>£19,000</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Monthly Profit</span>
                <span>£1,583</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-host-navy text-white rounded-lg">
          <p className="text-center font-semibold">
            Long-term rental profit: <span className="text-2xl">10x higher</span> with significantly less work and risk
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Time Investment Reality</h3>
      <p className="mb-6">
        Short-term rentals are not passive investments. Successful operation requires significant 
        time commitment that many landlords underestimate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-200 p-4 rounded-lg">
          <h4 className="font-semibold host-red mb-2">Daily Tasks</h4>
          <ul className="text-sm space-y-1">
            <li>• Guest communication and inquiries</li>
            <li>• Booking management and calendar updates</li>
            <li>• Cleaning coordination and quality checks</li>
            <li>• Problem resolution and emergency response</li>
            <li>• Review management and guest feedback</li>
          </ul>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg">
          <h4 className="font-semibold host-red mb-2">Weekly/Monthly Tasks</h4>
          <ul className="text-sm space-y-1">
            <li>• Financial reporting and tax preparation</li>
            <li>• Maintenance scheduling and oversight</li>
            <li>• Inventory management and restocking</li>
            <li>• Marketing optimization and pricing updates</li>
            <li>• Compliance monitoring and documentation</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold text-yellow-800 mb-3">Time Investment: 15-25 Hours Per Week</h4>
        <p className="text-yellow-700 mb-3">
          Based on industry surveys, successful short-term rental operation requires 15-25 hours 
          per week of active management. This includes guest communication, cleaning coordination, 
          maintenance oversight, and administrative tasks.
        </p>
        <p className="text-yellow-700">
          <strong>Hourly rate based on net profit:</strong> £1,836 ÷ 1,000 hours = £1.84 per hour
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Risk Factors</h3>
      
      <div className="space-y-4 mb-8">
        <div className="border-l-4 border-red-400 pl-4">
          <h4 className="font-semibold host-red mb-2">Regulatory Risk</h4>
          <p className="text-sm text-gray-600">
            Increasing enforcement, changing regulations, and potential bans could eliminate 
            your investment overnight. Westminster returned 50 properties to residential use 
            in one month alone.
          </p>
        </div>
        <div className="border-l-4 border-red-400 pl-4">
          <h4 className="font-semibold host-red mb-2">Market Risk</h4>
          <p className="text-sm text-gray-600">
            Tourism fluctuations, economic downturns, and increased competition can dramatically 
            reduce occupancy and rates. COVID-19 showed how quickly the market can collapse.
          </p>
        </div>
        <div className="border-l-4 border-red-400 pl-4">
          <h4 className="font-semibold host-red mb-2">Property Risk</h4>
          <p className="text-sm text-gray-600">
            Higher wear and tear, potential damage from parties, and increased maintenance 
            costs can significantly impact your property value and ongoing expenses.
          </p>
        </div>
      </div>

      <div className="bg-host-red text-white p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-3">Financial Reality Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <strong>Short-Term Rental:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Net profit: £153/month</li>
              <li>• Time required: 15-25 hrs/week</li>
              <li>• High operational complexity</li>
              <li>• Significant regulatory risk</li>
              <li>• Hourly rate: £1.84</li>
            </ul>
          </div>
          <div>
            <strong>Long-Term Rental:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Net profit: £1,583/month</li>
              <li>• Time required: 2-5 hrs/month</li>
              <li>• Low operational complexity</li>
              <li>• Stable regulatory environment</li>
              <li>• Hourly rate: £95</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 font-medium text-center">
          The numbers speak for themselves: long-term rental is more profitable, 
          less risky, and requires far less time investment.
        </p>
      </div>
    </div>
  )
}

// Landlord Community Section
const LandlordCommunitySection = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold host-navy mb-6">Community Impact: Why It Matters to Your Investment</h2>
      
      <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
        <h3 className="text-xl font-semibold text-green-800 mb-3">Your Investment Depends on Community Health</h3>
        <p className="text-green-700">
          Strong, stable communities drive property values, attract quality tenants, and create 
          sustainable investment environments. Short-term rentals that damage community cohesion 
          ultimately harm your own investment prospects.
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">The Community-Investment Connection</h3>
      <p className="mb-6">
        As a property investor, you have a stake in the long-term health of the areas where you 
        own assets. Communities with strong social cohesion, good local services, and stable 
        residential populations consistently outperform areas with high transience and weak 
        community ties.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Strong Communities Drive Value</h4>
          <ul className="text-sm space-y-2">
            <li>• Higher property appreciation rates</li>
            <li>• Lower crime and antisocial behaviour</li>
            <li>• Better maintained public spaces</li>
            <li>• Stronger local businesses and services</li>
            <li>• More attractive to quality tenants</li>
            <li>• Greater resilience during market downturns</li>
          </ul>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Weak Communities Drive Down Value</h4>
          <ul className="text-sm space-y-2">
            <li>• Declining property values</li>
            <li>• Increased crime and disorder</li>
            <li>• Deteriorating public spaces</li>
            <li>• Loss of local businesses</li>
            <li>• Difficulty attracting stable tenants</li>
            <li>• Greater vulnerability to market shocks</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">How Short-Term Rentals Damage Communities</h3>
      
      <div className="space-y-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Displacement and Housing Pressure</h4>
          <p className="mb-4">
            Every property converted to short-term rental removes a home from the residential 
            market, forcing families to move further away or pay higher rents. This displacement 
            weakens the social fabric that makes neighbourhoods desirable places to live and invest.
          </p>
          <div className="bg-white p-4 rounded border-l-4 border-host-red">
            <p className="text-sm font-medium">Real Example:</p>
            <p className="text-sm text-gray-600">
              "Sarah's Story: From Family Home to Tourist Flat in 30 Days" - A mother of two 
              forced to move boroughs when her landlord converted to Airbnb, disrupting her 
              children's education and community connections.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Loss of Community Cohesion</h4>
          <p className="mb-4">
            Permanent residents build relationships, participate in local activities, and invest 
            in their neighbourhoods. Short-term visitors have no stake in community wellbeing, 
            leading to isolation and breakdown of social networks.
          </p>
          <div className="bg-white p-4 rounded border-l-4 border-host-red">
            <p className="text-sm font-medium">Real Example:</p>
            <p className="text-sm text-gray-600">
              Marcus Thompson's building went from a close-knit community where neighbours knew 
              each other to "an informal hotel with no management" where he feels unsafe and 
              isolated in his own home.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Infrastructure and Service Strain</h4>
          <p className="mb-4">
            Short-term rentals create different usage patterns that strain local infrastructure. 
            Higher turnover means more waste, more deliveries, more noise, and more wear on 
            shared facilities, while contributing less to local tax revenue.
          </p>
          <div className="bg-white p-4 rounded border-l-4 border-host-red">
            <p className="text-sm font-medium">Real Example:</p>
            <p className="text-sm text-gray-600">
              A Hackney party house caused £15,000 in damage and prompted three elderly residents 
              to consider moving to sheltered accommodation due to safety concerns.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">The Business Case for Community Responsibility</h3>
      
      <div className="bg-host-navy text-white p-6 rounded-lg mb-6">
        <h4 className="text-xl font-semibold mb-3">Why Smart Investors Choose Community</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <strong>Long-term Value Creation:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Sustainable property appreciation</li>
              <li>• Stable tenant demand</li>
              <li>• Lower management costs</li>
              <li>• Reduced regulatory risk</li>
            </ul>
          </div>
          <div>
            <strong>Risk Mitigation:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Community support for responsible landlords</li>
              <li>• Better relationships with local authorities</li>
              <li>• Reduced enforcement targeting</li>
              <li>• Protection from policy backlash</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">What Responsible Landlords Do</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">If You Must Operate Short-Term Rentals</h4>
          <ul className="text-sm space-y-2">
            <li>• Obtain all required permissions and licences</li>
            <li>• Implement strict noise and behaviour policies</li>
            <li>• Provide 24/7 contact for neighbour concerns</li>
            <li>• Limit group sizes and party bookings</li>
            <li>• Contribute to local community initiatives</li>
            <li>• Work with neighbours to address issues</li>
          </ul>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Better: Choose Long-Term Rental</h4>
          <ul className="text-sm space-y-2">
            <li>• Provide stable homes for local families</li>
            <li>• Support community schools and services</li>
            <li>• Contribute to neighbourhood stability</li>
            <li>• Build positive relationships with residents</li>
            <li>• Invest in property improvements</li>
            <li>• Support local businesses and services</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Community Voices: What Your Neighbours Are Saying</h3>
      
      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-host-red">
          <p className="text-sm italic mb-2">
            "We used to have a real community here. People looked out for each other, children 
            played together, we had street parties. Now it's just tourists with suitcases. 
            My elderly mother doesn't feel safe anymore."
          </p>
          <p className="text-xs text-gray-600">- Janet Morrison, Hackney resident</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-host-red">
          <p className="text-sm italic mb-2">
            "I'm a teacher in the community where I used to live. Now I commute an hour each 
            way because I can't afford to live where I work. The children are losing out because 
            their teachers can't afford to be part of the community."
          </p>
          <p className="text-xs text-gray-600">- David Williams, Primary School Teacher</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-host-red">
          <p className="text-sm italic mb-2">
            "I've lived here 15 years and watched my building become a hotel. I don't know 
            who belongs here anymore. The sense of community that made this place special 
            is completely gone."
          </p>
          <p className="text-xs text-gray-600">- Marcus Thompson, Bloomsbury resident</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">The Growing Backlash</h3>
      <p className="mb-6">
        Community opposition to short-term rentals is intensifying across London. Residents 
        are organising, councils are taking enforcement action, and politicians are responding 
        with stricter regulations. Landlords who ignore community concerns face increasing 
        regulatory and social pressure.
      </p>

      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold text-yellow-800 mb-3">Recent Community Actions</h4>
        <ul className="text-yellow-700 space-y-2 text-sm">
          <li>• Southwark's community-led enforcement programme returned 30 properties to residential use</li>
          <li>• Hackney residents successfully lobbied for comprehensive licensing scheme</li>
          <li>• Westminster community reports led to 50 properties being returned to housing</li>
          <li>• Camden residents' pilot programme resulted in borough-wide 90-day limits</li>
        </ul>
      </div>

      <div className="bg-host-red text-white p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-3">The Choice Is Yours</h4>
        <p className="mb-4">
          You can be part of the problem or part of the solution. You can extract maximum 
          short-term profit while damaging the communities that make your investments valuable, 
          or you can build long-term wealth while supporting the neighbourhoods where you invest.
        </p>
        <p className="mb-4">
          Smart investors understand that sustainable returns come from sustainable communities. 
          The most successful property investors are those who work with communities, not against them.
        </p>
        <p className="font-medium">
          Choose community. Choose sustainability. Choose long-term success over short-term profit.
        </p>
      </div>
    </div>
  )
}

// Landlord Alternatives Section
const LandlordAlternativesSection = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold host-navy mb-6">Better Alternatives: Profitable, Sustainable Property Investment</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Smart Landlords Are Choosing Sustainability</h3>
        <p className="text-blue-700">
          The most successful property investors focus on long-term value creation through 
          sustainable rental strategies that support communities while delivering strong, 
          stable returns with lower risk and less management overhead.
        </p>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Premium Long-Term Rental Strategy</h3>
      
      <div className="bg-white border-2 border-host-navy p-6 rounded-lg mb-6">
        <h4 className="text-xl font-semibold host-navy mb-4">The Professional Landlord Approach</h4>
        <p className="mb-4">
          Instead of competing in the oversaturated short-term rental market, smart landlords 
          are focusing on providing high-quality, long-term accommodation that commands premium 
          rents while building lasting tenant relationships.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold host-red mb-3">Key Strategies:</h5>
            <ul className="text-sm space-y-2">
              <li>• High-quality furnishing and appliances</li>
              <li>• Professional property management</li>
              <li>• Responsive maintenance and improvements</li>
              <li>• Competitive but sustainable pricing</li>
              <li>• Long-term tenant retention programmes</li>
              <li>• Energy efficiency improvements</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold host-red mb-3">Benefits:</h5>
            <ul className="text-sm space-y-2">
              <li>• 15-25% premium rents for quality properties</li>
              <li>• Lower void periods and tenant turnover</li>
              <li>• Reduced management time and stress</li>
              <li>• Stable, predictable income stream</li>
              <li>• Positive community relationships</li>
              <li>• Long-term property value appreciation</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Specialized Rental Markets</h3>
      
      <div className="space-y-6 mb-8">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Corporate and Professional Accommodation</h4>
          <p className="mb-4">
            Target business travellers, relocating professionals, and corporate clients who need 
            medium-term accommodation (1-12 months). This market offers higher rates than 
            standard rental with more stability than short-term letting.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Target Market:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Relocating executives and professionals</li>
                <li>• Corporate project teams</li>
                <li>• International business travellers</li>
                <li>• Temporary workers and contractors</li>
              </ul>
            </div>
            <div>
              <strong>Financial Benefits:</strong>
              <ul className="mt-2 space-y-1">
                <li>• 20-40% premium over standard rental</li>
                <li>• Corporate guarantees reduce risk</li>
                <li>• Longer booking periods (1-6 months)</li>
                <li>• Professional, respectful tenants</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Student and Young Professional Housing</h4>
          <p className="mb-4">
            London's universities and growing tech sector create strong demand for quality 
            accommodation. Purpose-built student accommodation (PBSA) and young professional 
            housing offer stable returns with strong capital growth potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Market Advantages:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Consistent annual demand</li>
                <li>• Parental guarantees for students</li>
                <li>• Group bookings reduce void risk</li>
                <li>• Strong rental growth in university areas</li>
              </ul>
            </div>
            <div>
              <strong>Investment Returns:</strong>
              <ul className="mt-2 space-y-1">
                <li>• 5-8% gross yields typical</li>
                <li>• Strong capital appreciation near universities</li>
                <li>• Lower management overhead than STR</li>
                <li>• Positive community contribution</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Build-to-Rent and Co-Living</h4>
          <p className="mb-4">
            The build-to-rent sector is booming in London, offering opportunities for landlords 
            to participate in purpose-built rental developments or convert properties to 
            co-living arrangements that maximise income while providing community-focused housing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Co-Living Benefits:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Higher per-room rental rates</li>
                <li>• Shared facilities reduce per-tenant costs</li>
                <li>• Strong demand from young professionals</li>
                <li>• Community-building focus</li>
              </ul>
            </div>
            <div>
              <strong>BTR Opportunities:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Institutional-grade investment returns</li>
                <li>• Professional management partnerships</li>
                <li>• Long-term capital appreciation</li>
                <li>• Positive planning policy support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Property Improvement and Value-Add Strategies</h3>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold host-red mb-4">Sustainable Value Creation</h4>
        <p className="mb-4">
          Instead of converting to short-term rental, invest in property improvements that 
          increase rental income and capital value while supporting long-term tenants and 
          community stability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold host-navy mb-2">Energy Efficiency</h5>
            <ul className="text-sm space-y-1">
              <li>• Heat pumps and insulation</li>
              <li>• Smart heating controls</li>
              <li>• LED lighting upgrades</li>
              <li>• Double/triple glazing</li>
              <li>• Solar panels where suitable</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">ROI: 8-15% through rent premiums and reduced void periods</p>
          </div>
          <div>
            <h5 className="font-semibold host-navy mb-2">Technology Integration</h5>
            <ul className="text-sm space-y-1">
              <li>• High-speed fiber internet</li>
              <li>• Smart home systems</li>
              <li>• Security and access control</li>
              <li>• Integrated appliances</li>
              <li>• EV charging points</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">ROI: 10-20% through premium positioning</p>
          </div>
          <div>
            <h5 className="font-semibold host-navy mb-2">Space Optimization</h5>
            <ul className="text-sm space-y-1">
              <li>• Loft conversions</li>
              <li>• Basement developments</li>
              <li>• Garden studios/offices</li>
              <li>• Storage solutions</li>
              <li>• Flexible living spaces</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">ROI: 15-25% through additional rental income</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Portfolio Diversification Strategies</h3>
      
      <div className="space-y-4 mb-8">
        <div className="border-l-4 border-host-navy pl-4">
          <h4 className="font-semibold host-red mb-2">Geographic Diversification</h4>
          <p className="text-sm text-gray-600">
            Spread investments across different London boroughs and property types to reduce 
            concentration risk and capture growth in emerging areas with strong transport links 
            and regeneration plans.
          </p>
        </div>
        <div className="border-l-4 border-host-navy pl-4">
          <h4 className="font-semibold host-red mb-2">Tenure Mix Strategy</h4>
          <p className="text-sm text-gray-600">
            Combine different rental strategies within your portfolio: premium long-term rentals, 
            corporate accommodation, student housing, and co-living to optimize returns while 
            spreading risk.
          </p>
        </div>
        <div className="border-l-4 border-host-navy pl-4">
          <h4 className="font-semibold host-red mb-2">Partnership Opportunities</h4>
          <p className="text-sm text-gray-600">
            Work with housing associations, corporate relocation services, universities, and 
            co-living operators to secure guaranteed income streams and professional management 
            support.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Financial Comparison: Sustainable vs. Short-Term</h3>
      
      <div className="bg-white border-2 border-host-red p-6 rounded-lg mb-6">
        <h4 className="text-xl font-semibold host-navy mb-4">10-Year Investment Projection</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-lg font-semibold host-red mb-3">Short-Term Rental Path</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Annual Net Income (Year 1)</span>
                <span>£1,836</span>
              </div>
              <div className="flex justify-between">
                <span>Regulatory Risk Impact</span>
                <span>-30%</span>
              </div>
              <div className="flex justify-between">
                <span>Market Saturation Impact</span>
                <span>-20%</span>
              </div>
              <div className="flex justify-between">
                <span>Projected Year 10 Income</span>
                <span>£1,285</span>
              </div>
              <div className="flex justify-between">
                <span>Property Value Impact</span>
                <span>-5%</span>
              </div>
              <div className="flex justify-between">
                <span>Total 10-Year Return</span>
                <span>£15,600</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Risk Level</span>
                <span>High</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold host-navy mb-3">Sustainable Rental Path</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Annual Net Income (Year 1)</span>
                <span>£19,000</span>
              </div>
              <div className="flex justify-between">
                <span>Rent Growth (3% annually)</span>
                <span>+34%</span>
              </div>
              <div className="flex justify-between">
                <span>Property Improvements ROI</span>
                <span>+15%</span>
              </div>
              <div className="flex justify-between">
                <span>Projected Year 10 Income</span>
                <span>£29,400</span>
              </div>
              <div className="flex justify-between">
                <span>Property Value Growth</span>
                <span>+45%</span>
              </div>
              <div className="flex justify-between">
                <span>Total 10-Year Return</span>
                <span>£245,000</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Risk Level</span>
                <span>Low</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-host-navy text-white rounded-lg">
          <p className="text-center font-semibold">
            Sustainable rental strategy: <span className="text-2xl">15x higher</span> 10-year returns with lower risk
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold host-navy mb-4">Getting Started with Sustainable Investment</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Immediate Actions</h4>
          <ul className="text-sm space-y-2">
            <li>• Assess your current portfolio performance</li>
            <li>• Research local rental markets and demand</li>
            <li>• Identify improvement opportunities</li>
            <li>• Connect with professional letting agents</li>
            <li>• Explore corporate accommodation partnerships</li>
            <li>• Plan energy efficiency upgrades</li>
          </ul>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg">
          <h4 className="text-lg font-semibold host-red mb-3">Professional Support</h4>
          <ul className="text-sm space-y-2">
            <li>• Property investment advisors</li>
            <li>• Specialist letting agents</li>
            <li>• Energy efficiency consultants</li>
            <li>• Tax and financial planning experts</li>
            <li>• Property management companies</li>
            <li>• Local authority liaison services</li>
          </ul>
        </div>
      </div>

      <div className="bg-host-red text-white p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-3">Join the Sustainable Investment Movement</h4>
        <p className="mb-4">
          Smart landlords across London are choosing sustainable investment strategies that 
          deliver superior returns while supporting the communities that make their investments 
          valuable. You can be part of this movement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <strong>What You Gain:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Higher, more stable returns</li>
              <li>• Lower risk and stress</li>
              <li>• Positive community relationships</li>
              <li>• Long-term value creation</li>
              <li>• Professional reputation</li>
            </ul>
          </div>
          <div>
            <strong>What Communities Gain:</strong>
            <ul className="mt-2 space-y-1">
              <li>• Stable housing for families</li>
              <li>• Support for local services</li>
              <li>• Community cohesion</li>
              <li>• Economic sustainability</li>
              <li>• Quality of life improvements</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button className="bg-white text-host-red hover:bg-gray-100 font-semibold">
            <Mail className="mr-2" size={16} />
            Contact Us for Investment Guidance
          </Button>
        </div>
      </div>
    </div>
  )
}

// Media Centre Page - Comprehensive Press Resources
const MediaPage = () => {
  const [activeTab, setActiveTab] = useState('press')

  const tabs = [
    { id: 'press', title: 'Press Releases', icon: Newspaper },
    { id: 'resources', title: 'Download Resources', icon: Download },
    { id: 'contact', title: 'Media Contact', icon: Mail },
    { id: 'data', title: 'Data & Research', icon: FileText }
  ]

  const pressReleases = [
    {
      date: '2024-12-15',
      title: 'Westminster Council Returns 50 Properties to Residential Use in First Month of New Enforcement',
      summary: 'Landmark enforcement action sees illegal short-term rentals converted back to homes for local residents.',
      category: 'Enforcement Success',
      downloadUrl: '#'
    },
    {
      date: '2024-12-10',
      title: 'Mayor Announces Comprehensive Registration System for Short-Term Rentals',
      summary: 'New permit system will require all operators to register with authorities before listing properties.',
      category: 'Policy Update',
      downloadUrl: '#'
    },
    {
      date: '2024-12-05',
      title: 'Camden Implements 90-Day Annual Limit Following Successful Pilot Programme',
      summary: 'First London borough to implement strict annual limits on short-term rental operations.',
      category: 'Borough Success',
      downloadUrl: '#'
    },
    {
      date: '2024-11-28',
      title: 'HOST Campaign Launches Borough Action Toolkit for Community Groups',
      summary: 'New resources help residents organise effective local campaigns against illegal short-term rentals.',
      category: 'Campaign Update',
      downloadUrl: '#'
    },
    {
      date: '2024-11-20',
      title: 'New Research Shows 571% Increase in London Airbnb Listings Since 2015',
      summary: 'Comprehensive data analysis reveals scale of short-term rental growth across London boroughs.',
      category: 'Research',
      downloadUrl: '#'
    }
  ]

  const downloadableResources = [
    {
      category: 'Brand Assets',
      items: [
        {
          title: 'HOST Campaign Logo Pack',
          description: 'High-resolution logos in PNG, SVG, and EPS formats. Includes main logo, horizontal, stacked, and greyscale versions.',
          fileSize: '2.4 MB',
          format: 'ZIP',
          downloadUrl: '#'
        },
        {
          title: 'Brand Guidelines',
          description: 'Complete brand identity guidelines including logo usage, colour palette, typography, and design principles.',
          fileSize: '1.8 MB',
          format: 'PDF',
          downloadUrl: '#'
        }
      ]
    },
    {
      category: 'Research & Data',
      items: [
        {
          title: 'London Housing Crisis Fact Sheet',
          description: 'Key statistics, data visualizations, and infographics on short-term rental impact across London.',
          fileSize: '3.2 MB',
          format: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'Borough-by-Borough Analysis',
          description: 'Detailed breakdown of short-term rental concentrations, enforcement actions, and policy responses by borough.',
          fileSize: '5.1 MB',
          format: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'Community Impact Report',
          description: 'Comprehensive study on the social and economic effects of short-term rentals on London communities.',
          fileSize: '4.7 MB',
          format: 'PDF',
          downloadUrl: '#'
        }
      ]
    },
    {
      category: 'Campaign Materials',
      items: [
        {
          title: 'Social Media Graphics Pack',
          description: 'Ready-to-use graphics for Twitter, Facebook, Instagram, and LinkedIn. Includes templates and key messages.',
          fileSize: '8.3 MB',
          format: 'ZIP',
          downloadUrl: '#'
        },
        {
          title: 'Community Action Toolkit',
          description: 'Step-by-step guide for organising local campaigns, including templates, checklists, and best practices.',
          fileSize: '2.9 MB',
          format: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'Presentation Templates',
          description: 'PowerPoint and Keynote templates for community presentations and council meetings.',
          fileSize: '6.1 MB',
          format: 'ZIP',
          downloadUrl: '#'
        }
      ]
    },
    {
      category: 'Legal Resources',
      items: [
        {
          title: 'Planning Law Guide',
          description: 'Comprehensive guide to planning permissions, enforcement procedures, and legal requirements.',
          fileSize: '3.8 MB',
          format: 'PDF',
          downloadUrl: '#'
        },
        {
          title: 'Enforcement Template Letters',
          description: 'Template letters for reporting violations to councils, MPs, and enforcement agencies.',
          fileSize: '1.2 MB',
          format: 'DOCX',
          downloadUrl: '#'
        }
      ]
    }
  ]

  const keyData = [
    {
      title: 'London Short-Term Rental Statistics',
      stats: [
        { label: 'Total Airbnb Listings', value: '87,000+', change: '+571% since 2015' },
        { label: 'Entire Homes Listed', value: '52,000+', change: '+680% since 2015' },
        { label: 'Properties Returned to Housing', value: '340+', change: 'In 2024 alone' },
        { label: 'Boroughs with New Regulations', value: '15', change: '+8 this year' }
      ]
    },
    {
      title: 'Community Impact Metrics',
      stats: [
        { label: 'Families Displaced', value: '12,000+', change: 'Estimated annually' },
        { label: 'Average Rent Increase', value: '23%', change: 'In high-STR areas' },
        { label: 'Community Groups Active', value: '50+', change: 'Across London' },
        { label: 'Properties Reported', value: '2,400+', change: 'Via HOST platform' }
      ]
    }
  ]

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="section-title mb-6">Media Centre</h1>
            <p className="section-subtitle mb-8">
              Press resources, downloadable materials, and media contact information for journalists and supporters
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`p-4 rounded-lg text-center transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-host-red text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                      }`}
                    >
                      <IconComponent className="mx-auto mb-2" size={20} />
                      <div className="text-sm font-medium">{tab.title}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            {activeTab === 'press' && (
              <div>
                <h2 className="text-3xl font-bold host-navy mb-8">Press Releases</h2>
                
                <div className="space-y-6">
                  {pressReleases.map((release, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="mb-2 md:mb-0">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            release.category === 'Enforcement Success' ? 'bg-green-100 text-green-800' :
                            release.category === 'Policy Update' ? 'bg-blue-100 text-blue-800' :
                            release.category === 'Borough Success' ? 'bg-purple-100 text-purple-800' :
                            release.category === 'Campaign Update' ? 'bg-orange-100 text-orange-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {release.category}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(release.date).toLocaleDateString('en-GB', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold host-navy mb-3">{release.title}</h3>
                      <p className="text-gray-600 mb-4">{release.summary}</p>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="text-host-red border-host-red hover:bg-host-red hover:text-white">
                          <Download className="mr-2" size={16} />
                          Download PDF
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="mr-2" size={16} />
                          View Online
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-host-navy text-white rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Media Alert Subscription</h3>
                  <p className="mb-4">
                    Stay updated with the latest press releases and campaign developments. 
                    Subscribe to our media alerts for journalists and news organisations.
                  </p>
                  <div className="flex gap-3">
                    <Input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="flex-1 bg-white text-gray-900"
                    />
                    <Button className="bg-host-red hover:bg-red-700 text-white">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div>
                <h2 className="text-3xl font-bold host-navy mb-8">Downloadable Resources</h2>
                
                <div className="space-y-8">
                  {downloadableResources.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h3 className="text-2xl font-semibold host-red mb-6">{category.category}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="text-lg font-semibold host-navy">{item.title}</h4>
                              <div className="text-right text-sm text-gray-500">
                                <div>{item.format}</div>
                                <div>{item.fileSize}</div>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                            <Button className="bg-host-red hover:bg-red-700 text-white w-full">
                              <Download className="mr-2" size={16} />
                              Download {item.format}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div>
                <h2 className="text-3xl font-bold host-navy mb-8">Media Contact Information</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-semibold host-red mb-4">Press Enquiries</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Mail className="mr-3 text-host-red" size={20} />
                          <div>
                            <div className="font-medium">press@hostcampaign.org</div>
                            <div className="text-sm text-gray-600">Primary media contact</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Phone className="mr-3 text-host-red" size={20} />
                          <div>
                            <div className="font-medium">+44 20 7946 0958</div>
                            <div className="text-sm text-gray-600">Available 9am-6pm, Mon-Fri</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold host-red mb-4">Response Times</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Standard enquiries:</span>
                          <span className="font-medium">Within 4 hours</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Breaking news:</span>
                          <span className="font-medium">Within 1 hour</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Interview requests:</span>
                          <span className="font-medium">Same day</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Weekend/evening:</span>
                          <span className="font-medium">Emergency only</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="bg-host-navy text-white rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-semibold mb-4">Spokesperson Available</h3>
                      <p className="mb-4">
                        Campaign representatives are available for interviews, expert commentary, 
                        and background briefings on:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• London housing crisis and short-term rentals</li>
                        <li>• Community impact and displacement</li>
                        <li>• Planning law and enforcement</li>
                        <li>• Borough-specific policy developments</li>
                        <li>• Regulatory solutions and best practices</li>
                        <li>• Community organising and grassroots campaigns</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold host-red mb-4">Social Media</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Twitter:</span>
                          <a href="#" className="text-host-red hover:underline">@HOSTCampaign</a>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>LinkedIn:</span>
                          <a href="#" className="text-host-red hover:underline">HOST Campaign</a>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Instagram:</span>
                          <a href="#" className="text-host-red hover:underline">@hostcampaign</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'data' && (
              <div>
                <h2 className="text-3xl font-bold host-navy mb-8">Data & Research</h2>
                
                <div className="space-y-8">
                  {keyData.map((section, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-2xl font-semibold host-red mb-6">{section.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {section.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="bg-white rounded-lg p-4 text-center">
                            <div className="text-3xl font-bold host-navy mb-2">{stat.value}</div>
                            <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                            <div className="text-xs text-gray-500">{stat.change}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white border-2 border-host-red rounded-lg">
                  <h3 className="text-xl font-semibold host-navy mb-4">Research Methodology</h3>
                  <p className="text-gray-600 mb-4">
                    Our data is compiled from multiple sources including Airbnb listings, council enforcement 
                    records, planning applications, and community reports. All statistics are verified and 
                    updated monthly.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Data Sources:</strong>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li>• Airbnb public listings</li>
                        <li>• Council enforcement data</li>
                        <li>• Planning application records</li>
                        <li>• Community reporting platform</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Update Frequency:</strong>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li>• Listings data: Weekly</li>
                        <li>• Enforcement data: Monthly</li>
                        <li>• Policy updates: Real-time</li>
                        <li>• Community reports: Daily</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Quality Assurance:</strong>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li>• Cross-source verification</li>
                        <li>• Regular data audits</li>
                        <li>• Transparent methodology</li>
                        <li>• Peer review process</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Get Involved Page - Illustrated Building Blocks Design
const GetInvolvedPage = () => {
  const [selectedBlock, setSelectedBlock] = useState(null)
  const [animateBlocks, setAnimateBlocks] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBlocks(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const buildingBlocks = [
    {
      id: 'report',
      title: 'Report Properties',
      icon: Home,
      color: 'bg-red-500',
      description: 'Identify and report illegal short-term rentals in your area',
      impact: 'Foundation Block',
      actions: [
        'Report suspicious properties using our tool',
        'Upload evidence and documentation',
        'Track enforcement progress',
        'Connect with local enforcement teams'
      ],
      stats: '500+ properties reported this month',
      link: '/report'
    },
    {
      id: 'contact-mp',
      title: 'Contact Your MP',
      icon: MessageSquare,
      color: 'bg-blue-600',
      description: 'Make your voice heard by your elected representatives',
      impact: 'Policy Block',
      actions: [
        'Find your MP using our lookup tool',
        'Send personalized campaign emails',
        'Request meetings and responses',
        'Track MP voting records on housing'
      ],
      stats: '1,200+ MPs contacted this year',
      link: '/contact-mp'
    },
    {
      id: 'community',
      title: 'Build Community',
      icon: Users,
      color: 'bg-green-600',
      description: 'Connect with neighbours and organise local action',
      impact: 'Community Block',
      actions: [
        'Join local resident groups',
        'Organise neighbourhood meetings',
        'Share experiences and strategies',
        'Coordinate collective action'
      ],
      stats: '50+ active community groups',
      link: '#community'
    },
    {
      id: 'advocate',
      title: 'Advocate for Change',
      icon: Scale,
      color: 'bg-purple-600',
      description: 'Support policy changes and regulatory improvements',
      impact: 'Advocacy Block',
      actions: [
        'Attend council meetings',
        'Submit planning objections',
        'Support regulatory campaigns',
        'Lobby for stronger enforcement'
      ],
      stats: '15 boroughs with new regulations',
      link: '#advocate'
    },
    {
      id: 'share',
      title: 'Share the Message',
      icon: Share2,
      color: 'bg-orange-500',
      description: 'Spread awareness through social media and networks',
      impact: 'Awareness Block',
      actions: [
        'Share campaign content on social media',
        'Tell friends and family about the issue',
        'Write to local newspapers',
        'Organise awareness events'
      ],
      stats: '100K+ social media impressions',
      link: '#share'
    },
    {
      id: 'volunteer',
      title: 'Volunteer Time',
      icon: Calendar,
      color: 'bg-teal-600',
      description: 'Contribute your skills and time to the campaign',
      impact: 'Action Block',
      actions: [
        'Help with research and data collection',
        'Assist with community outreach',
        'Support campaign events',
        'Provide professional expertise'
      ],
      stats: '200+ active volunteers',
      link: '#volunteer'
    }
  ]

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="section-title mb-6">Build London's Housing Future</h1>
            <p className="section-subtitle mb-8">
              Every action you take is a building block for stronger communities. 
              Choose how you want to contribute to the fight for housing justice.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold host-navy mb-4">The Building Blocks of Change</h2>
              <p className="text-gray-600 text-lg">
                Like constructing a building, creating lasting change requires many different components 
                working together. Each person who gets involved adds another block to our foundation, 
                making our campaign stronger and more effective.
              </p>
            </div>
          </div>

          {/* Interactive Building Blocks Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center host-navy mb-12">Choose Your Building Block</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildingBlocks.map((block, index) => {
                const IconComponent = block.icon
                return (
                  <div
                    key={block.id}
                    className={`relative transform transition-all duration-500 hover:scale-105 cursor-pointer ${
                      animateBlocks ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedBlock(selectedBlock === block.id ? null : block.id)}
                  >
                    {/* Building Block Card */}
                    <div className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 ${
                      selectedBlock === block.id ? 'border-host-red shadow-xl' : 'border-gray-100 hover:border-gray-200'
                    }`}>
                      {/* Block Header */}
                      <div className={`${block.color} text-white p-6 rounded-t-xl relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                        <div className="relative z-10">
                          <IconComponent className="mb-3" size={32} />
                          <h3 className="text-xl font-bold mb-2">{block.title}</h3>
                          <div className="text-sm opacity-90 font-medium">{block.impact}</div>
                        </div>
                      </div>

                      {/* Block Content */}
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">{block.description}</p>
                        
                        {/* Stats Badge */}
                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                          <div className="text-sm text-gray-500 mb-1">Impact So Far:</div>
                          <div className="font-semibold host-navy">{block.stats}</div>
                        </div>

                        {/* Expandable Actions */}
                        {selectedBlock === block.id && (
                          <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fadeIn">
                            <h4 className="font-semibold host-navy mb-3">How You Can Help:</h4>
                            <ul className="space-y-2 mb-4">
                              {block.actions.map((action, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-host-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-600">{action}</span>
                                </li>
                              ))}
                            </ul>
                            {block.link.startsWith('/') ? (
                              <Link to={block.link} className="cta-button text-sm">
                                Get Started
                              </Link>
                            ) : (
                              <button className="cta-button text-sm">
                                Learn More
                              </button>
                            )}
                          </div>
                        )}

                        {/* Click to Expand Hint */}
                        {selectedBlock !== block.id && (
                          <div className="text-center mt-4">
                            <div className="text-sm text-gray-400">Click to see how you can help</div>
                            <ChevronRight className="mx-auto mt-1 text-gray-400" size={16} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Community Building Visualization */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-16">
            <h2 className="text-3xl font-bold text-center host-navy mb-8">Building Stronger Communities Together</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Visual Building Blocks Illustration */}
              <div className="relative">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold host-navy mb-2">Your Contribution Matters</h3>
                  <p className="text-gray-600">Every action builds toward lasting change</p>
                </div>
                
                {/* Stacked Building Blocks Animation */}
                <div className="relative mx-auto w-80 h-64">
                  {/* Foundation */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg flex items-center justify-center text-white font-semibold">
                    Community Foundation
                  </div>
                  
                  {/* Building Blocks */}
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-56 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white font-medium text-sm">
                    Policy & Advocacy
                  </div>
                  
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg flex items-center justify-center text-white font-medium text-sm">
                    Local Action
                  </div>
                  
                  <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-40 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center text-white font-medium text-sm">
                    Awareness
                  </div>
                  
                  <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 w-32 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg flex items-center justify-center text-white font-medium text-sm">
                    Change
                  </div>
                  
                  {/* Crown/Success */}
                  <div className="absolute bottom-44 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xs">
                    Success!
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div>
                <h3 className="text-xl font-semibold host-navy mb-6">Real Impact from Real People</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-700 mb-2">Westminster Success</h4>
                    <p className="text-sm text-gray-600">
                      "Thanks to community reports, Westminster Council returned 50 illegal short-term 
                      rentals to residential use in just one month. Our neighbourhood feels like home again."
                    </p>
                    <div className="text-xs text-gray-500 mt-2">- Sarah M., Westminster Resident</div>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700 mb-2">Policy Victory</h4>
                    <p className="text-sm text-gray-600">
                      "After hundreds of residents contacted their MPs, Camden implemented a 90-day 
                      annual limit on short-term rentals. Democracy works when we use it."
                    </p>
                    <div className="text-xs text-gray-500 mt-2">- Marcus T., Camden Resident</div>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-700 mb-2">Community Building</h4>
                    <p className="text-sm text-gray-600">
                      "Our resident group started with 5 people concerned about Airbnb. Now we're 
                      200 strong and have helped return 15 properties to families."
                    </p>
                    <div className="text-xs text-gray-500 mt-2">- Janet R., Hackney Resident</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Center */}
          <div className="bg-gradient-to-r from-host-red to-host-navy text-white rounded-xl p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Start Building Today</h2>
              <p className="text-xl opacity-90">
                Choose your first action and become part of the solution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                <Home className="mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-3">Report a Property</h3>
                <p className="text-sm opacity-90 mb-4">
                  Spotted an illegal short-term rental? Report it now and help enforcement teams take action.
                </p>
                <Link to="/report" className="bg-white text-host-navy px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Report Now
                </Link>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                <MessageSquare className="mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-3">Contact Your MP</h3>
                <p className="text-sm opacity-90 mb-4">
                  Make your voice heard by your elected representative. Send a personalized message today.
                </p>
                <Link to="/contact-mp" className="bg-white text-host-navy px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Find My MP
                </Link>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                <Share2 className="mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-3">Share the Campaign</h3>
                <p className="text-sm opacity-90 mb-4">
                  Help spread awareness by sharing our message with friends, family, and social networks.
                </p>
                <button className="bg-white text-host-navy px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Share Now
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center">
            <h2 className="text-2xl font-bold host-navy mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of housing advocates. Get campaign updates, success stories, 
              and opportunities to make a difference delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button className="bg-host-red hover:bg-red-700 text-white px-6">
                  Join Us
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Report Property Page
const ReportPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Report a Short-Term Let Property</h1>
          <p className="section-subtitle text-center">
            Help us document properties being removed from London's rental market. 
            Your reports build evidence for policy change.
          </p>
          
          {/* Google Form Embed */}
          <div className="campaign-card">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSc6XZRgpSnzPtwWmRX4nts-xHfEu0wd6EaTenFsEZPmysE0Zw/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Report Short-Term Rental Property"
              className="w-full rounded-lg"
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

// Contact MP Page with Functional MP Lookup
const ContactMPPage = () => {
  const [postcode, setPostcode] = useState('')
  const [mpData, setMpData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(1)
  const [selectedIssues, setSelectedIssues] = useState([])
  const [personalImpact, setPersonalImpact] = useState('')
  const [generatedEmail, setGeneratedEmail] = useState(null)

  const issues = [
    { id: 'housing_shortage', label: 'Loss of affordable rental properties' },
    { id: 'community_breakdown', label: 'Community breakdown and isolation' },
    { id: 'noise_antisocial', label: 'Noise and antisocial behaviour' },
    { id: 'safety_concerns', label: 'Safety concerns from unknown visitors' },
    { id: 'planning_violations', label: 'Illegal conversions and planning violations' }
  ]

  const lookupMP = async () => {
    if (!postcode.trim()) {
      setError('Please enter a postcode')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:5000/api/mp/lookup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postcode: postcode.trim() })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to lookup MP')
      }

      setMpData(data)
      setStep(2)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleIssueToggle = (issueId) => {
    setSelectedIssues(prev => 
      prev.includes(issueId) 
        ? prev.filter(id => id !== issueId)
        : [...prev, issueId]
    )
  }

  const generateEmail = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:5000/api/mp/generate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mp_name: mpData.mp.name,
          constituency: mpData.constituency,
          issues: selectedIssues,
          personal_impact: personalImpact
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate email')
      }

      setGeneratedEmail(data)
      setStep(3)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const openEmailClient = () => {
    const subject = encodeURIComponent(generatedEmail.subject)
    const body = encodeURIComponent(generatedEmail.body)
    const to = encodeURIComponent(generatedEmail.mp_email)
    window.open(`mailto:${to}?subject=${subject}&body=${body}`)
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Contact Your MP</h1>
          <p className="section-subtitle text-center">
            Find your MP and send a personalized message about short-term rentals
          </p>

          {/* Step 1: Postcode Lookup */}
          {step === 1 && (
            <div className="campaign-card">
              <h3 className="text-xl font-semibold mb-4 host-navy">Find Your MP</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Enter your postcode:</label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                      placeholder="e.g. SW1A 1AA"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-host-red focus:border-transparent"
                      onKeyPress={(e) => e.key === 'Enter' && lookupMP()}
                    />
                    <Button 
                      onClick={lookupMP}
                      disabled={loading}
                      className="bg-host-red hover:bg-red-700 text-white px-6"
                    >
                      {loading ? 'Looking up...' : 'Find My MP'}
                    </Button>
                  </div>
                </div>
                {error && (
                  <div className="text-red-600 text-sm">{error}</div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Issue Selection */}
          {step === 2 && mpData && (
            <div className="space-y-6">
              <div className="campaign-card">
                <h3 className="text-xl font-semibold mb-4 host-navy">Your MP</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong>Name:</strong> {mpData.mp.name}
                    </div>
                    <div>
                      <strong>Party:</strong> {mpData.mp.party}
                    </div>
                    <div>
                      <strong>Constituency:</strong> {mpData.constituency}
                    </div>
                    <div>
                      <strong>Postcode:</strong> {mpData.postcode}
                    </div>
                  </div>
                </div>
              </div>

              <div className="campaign-card">
                <h3 className="text-xl font-semibold mb-4 host-navy">Select Your Concerns</h3>
                <p className="text-gray-600 mb-4">
                  Choose the issues that matter most to you (select multiple):
                </p>
                <div className="space-y-3">
                  {issues.map((issue) => (
                    <label key={issue.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedIssues.includes(issue.id)}
                        onChange={() => handleIssueToggle(issue.id)}
                        className="w-4 h-4 text-host-red border-gray-300 rounded focus:ring-host-red"
                      />
                      <span className="text-gray-700">{issue.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="campaign-card">
                <h3 className="text-xl font-semibold mb-4 host-navy">Personal Impact (Optional)</h3>
                <p className="text-gray-600 mb-4">
                  Share how short-term rentals have affected you personally:
                </p>
                <textarea
                  value={personalImpact}
                  onChange={(e) => setPersonalImpact(e.target.value)}
                  placeholder="e.g. I've been priced out of my neighbourhood, experienced noise issues, or seen my community change..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-host-red focus:border-transparent"
                  rows="4"
                />
              </div>

              <div className="text-center">
                <Button 
                  onClick={generateEmail}
                  disabled={loading || selectedIssues.length === 0}
                  className="bg-host-red hover:bg-red-700 text-white px-8 py-3"
                >
                  {loading ? 'Generating Email...' : 'Generate Email'}
                </Button>
                {selectedIssues.length === 0 && (
                  <p className="text-sm text-gray-500 mt-2">Please select at least one concern</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Generated Email */}
          {step === 3 && generatedEmail && (
            <div className="campaign-card">
              <h3 className="text-xl font-semibold mb-4 host-navy">Your Personalized Email</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">To:</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={generatedEmail.mp_email}
                      readOnly
                      className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded"
                    />
                    <Button
                      onClick={() => copyToClipboard(generatedEmail.mp_email)}
                      variant="outline"
                      size="sm"
                    >
                      Copy
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject:</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={generatedEmail.subject}
                      readOnly
                      className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded"
                    />
                    <Button
                      onClick={() => copyToClipboard(generatedEmail.subject)}
                      variant="outline"
                      size="sm"
                    >
                      Copy
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Body:</label>
                  <div className="relative">
                    <textarea
                      value={generatedEmail.body}
                      readOnly
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded h-96"
                    />
                    <Button
                      onClick={() => copyToClipboard(generatedEmail.body)}
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                    >
                      Copy
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={openEmailClient}
                    className="bg-host-red hover:bg-red-700 text-white px-6"
                  >
                    <Mail className="mr-2" size={16} />
                    Open Email Client
                  </Button>
                  <Button
                    onClick={() => copyToClipboard(generatedEmail.body)}
                    variant="outline"
                    className="text-host-red border-host-red"
                  >
                    Copy All Text
                  </Button>
                  <Button
                    onClick={() => {
                      setStep(1)
                      setMpData(null)
                      setSelectedIssues([])
                      setPersonalImpact('')
                      setGeneratedEmail(null)
                      setPostcode('')
                    }}
                    variant="outline"
                  >
                    Start Over
                  </Button>
                </div>
              </div>
            </div>
          )}

          {error && step > 1 && (
            <div className="campaign-card bg-red-50 border-red-200">
              <div className="text-red-600">{error}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Privacy Policy Page
const PrivacyPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center mb-8">Privacy Policy</h1>
          <div className="text-sm text-gray-500 text-center mb-12">
            Last updated: December 2024
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold host-navy mb-6">Introduction</h2>
              <p className="mb-6">
                The HOST (Housing Over Short-Term Lets) Campaign is committed to protecting your privacy 
                and ensuring the security of your personal information. This Privacy Policy explains how 
                we collect, use, store, and protect your information when you use our website, reporting 
                tools, and campaign services.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold host-red mb-4">Information You Provide</h3>
              <p className="mb-4">
                When you use our services, you may provide us with the following information:
              </p>
              <ul className="mb-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and postal address when you sign up for newsletters, contact us, or report properties</li>
                <li><strong>Property Reports:</strong> Addresses, descriptions, evidence, and supporting documentation when using our property reporting tool</li>
                <li><strong>MP Contact Tool:</strong> Your postcode and constituency information to help you contact your Member of Parliament</li>
                <li><strong>Communications:</strong> Messages, feedback, and correspondence you send to us</li>
                <li><strong>Survey Responses:</strong> Information provided through questionnaires and feedback forms</li>
              </ul>

              <h3 className="text-xl font-semibold host-red mb-4">Information We Collect Automatically</h3>
              <p className="mb-4">
                When you visit our website, we automatically collect certain technical information:
              </p>
              <ul className="mb-6 space-y-2">
                <li><strong>Usage Data:</strong> Pages visited, time spent on site, click patterns, and navigation paths</li>
                <li><strong>Device Information:</strong> Browser type, operating system, device type, and screen resolution</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address (city/region level only)</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to improve site functionality</li>
              </ul>

              <h2 className="text-2xl font-bold host-navy mb-6">How We Use Your Information</h2>
              <p className="mb-4">We use your information for the following purposes:</p>
              <ul className="mb-6 space-y-2">
                <li><strong>Campaign Operations:</strong> Processing property reports, coordinating enforcement actions, and tracking campaign effectiveness</li>
                <li><strong>Communication:</strong> Sending newsletters, campaign updates, and responding to your inquiries</li>
                <li><strong>MP Contact Service:</strong> Helping you identify and contact your local Member of Parliament</li>
                <li><strong>Website Improvement:</strong> Analyzing usage patterns to enhance user experience and site functionality</li>
                <li><strong>Legal Compliance:</strong> Meeting legal obligations and protecting our rights and interests</li>
                <li><strong>Research:</strong> Conducting anonymized research on housing issues and campaign effectiveness</li>
              </ul>

              <h2 className="text-2xl font-bold host-navy mb-6">Information Sharing</h2>
              <p className="mb-4">
                We may share your information in the following limited circumstances:
              </p>
              <ul className="mb-6 space-y-2">
                <li><strong>Enforcement Authorities:</strong> Property reports may be shared with local councils, planning enforcement teams, and relevant regulatory bodies</li>
                <li><strong>Service Providers:</strong> Third-party services that help us operate our website and campaign (email providers, hosting services, analytics tools)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our legal rights</li>
                <li><strong>Aggregated Data:</strong> Anonymous, aggregated statistics for research and advocacy purposes</li>
              </ul>
              <p className="mb-6">
                We never sell your personal information to third parties or use it for commercial marketing purposes.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organisational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. This includes encryption of 
                sensitive data, secure hosting infrastructure, regular security audits, and access controls limiting 
                who can view your information.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Your Rights</h2>
              <p className="mb-4">Under UK data protection law, you have the following rights:</p>
              <ul className="mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Rectification:</strong> Ask us to correct inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information in certain circumstances</li>
                <li><strong>Restriction:</strong> Ask us to limit how we use your information</li>
                <li><strong>Portability:</strong> Request your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain uses of your information</li>
                <li><strong>Withdrawal:</strong> Withdraw consent where we rely on consent to process your data</li>
              </ul>

              <h2 className="text-2xl font-bold host-navy mb-6">Cookies and Tracking</h2>
              <p className="mb-6">
                We use essential cookies to ensure our website functions properly and analytics cookies to understand 
                how visitors use our site. You can control cookie settings through your browser preferences. Disabling 
                cookies may affect some website functionality.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Data Retention</h2>
              <p className="mb-6">
                We retain your personal information only as long as necessary for the purposes outlined in this policy 
                or as required by law. Property reports may be retained for ongoing enforcement actions. Newsletter 
                subscriptions are kept until you unsubscribe. Website analytics data is typically retained for 2 years.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or wish to exercise your data protection rights, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@hostcampaign.org</p>
                <p><strong>Post:</strong> HOST Campaign Privacy Team, [Address to be confirmed]</p>
                <p><strong>Response Time:</strong> We aim to respond to all privacy inquiries within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Terms of Use Page
const TermsPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center mb-8">Terms of Use</h1>
          <div className="text-sm text-gray-500 text-center mb-12">
            Last updated: December 2024
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold host-navy mb-6">Agreement to Terms</h2>
              <p className="mb-6">
                By accessing and using the HOST Campaign website and services, you agree to be bound by these 
                Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">About HOST Campaign</h2>
              <p className="mb-6">
                The HOST (Housing Over Short-Term Lets) Campaign is a grassroots advocacy organisation working 
                to address the impact of short-term rentals on London's housing market. We provide information, 
                tools, and resources to help residents, policymakers, and communities understand and respond to 
                housing challenges.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Use of Our Services</h2>
              
              <h3 className="text-xl font-semibold host-red mb-4">Permitted Uses</h3>
              <p className="mb-4">You may use our services to:</p>
              <ul className="mb-6 space-y-2">
                <li>Report suspected violations of short-term rental regulations</li>
                <li>Access information about housing policy and advocacy</li>
                <li>Contact your Member of Parliament about housing issues</li>
                <li>Download campaign materials and resources</li>
                <li>Subscribe to newsletters and updates</li>
                <li>Participate in community organising activities</li>
              </ul>

              <h3 className="text-xl font-semibold host-red mb-4">Prohibited Uses</h3>
              <p className="mb-4">You may not use our services to:</p>
              <ul className="mb-6 space-y-2">
                <li>Submit false, misleading, or malicious reports</li>
                <li>Harass, threaten, or intimidate individuals or organisations</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Interfere with the operation of our website or services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services for commercial purposes without permission</li>
              </ul>

              <h2 className="text-2xl font-bold host-navy mb-6">Property Reporting Service</h2>
              <p className="mb-4">
                Our property reporting tool allows users to report suspected violations of short-term rental 
                regulations. By using this service, you agree that:
              </p>
              <ul className="mb-6 space-y-2">
                <li>You will provide accurate and truthful information to the best of your knowledge</li>
                <li>You have a legitimate basis for making the report</li>
                <li>You understand that reports may be shared with enforcement authorities</li>
                <li>You will not use the service to make vexatious or malicious reports</li>
                <li>You are responsible for any consequences of false or misleading reports</li>
              </ul>

              <h2 className="text-2xl font-bold host-navy mb-6">MP Contact Service</h2>
              <p className="mb-6">
                Our MP contact tool helps you identify and communicate with your Member of Parliament. This service 
                is provided for informational purposes only. We are not responsible for the accuracy of MP contact 
                information or their responses to your communications.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Content and Intellectual Property</h2>
              <p className="mb-4">
                All content on our website, including text, images, logos, and design elements, is owned by 
                the HOST Campaign or used with permission. You may:
              </p>
              <ul className="mb-6 space-y-2">
                <li>Share our content for non-commercial advocacy purposes</li>
                <li>Download and use our campaign materials as intended</li>
                <li>Quote our research and reports with proper attribution</li>
              </ul>
              <p className="mb-6">
                You may not reproduce, modify, or distribute our content for commercial purposes without written permission.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Disclaimers</h2>
              
              <h3 className="text-xl font-semibold host-red mb-4">Information Accuracy</h3>
              <p className="mb-6">
                While we strive to provide accurate and up-to-date information, we make no warranties about the 
                completeness, accuracy, or reliability of any information on our website. Housing laws and 
                regulations change frequently, and you should verify current requirements with relevant authorities.
              </p>

              <h3 className="text-xl font-semibold host-red mb-4">Legal Advice</h3>
              <p className="mb-6">
                Nothing on our website constitutes legal advice. The information provided is for general 
                educational purposes only. You should consult with qualified legal professionals for advice 
                on specific situations.
              </p>

              <h3 className="text-xl font-semibold host-red mb-4">Third-Party Services</h3>
              <p className="mb-6">
                Our website may integrate with third-party services (such as Google Forms, mapping services, 
                or social media platforms). We are not responsible for the availability, content, or privacy 
                practices of these external services.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Limitation of Liability</h2>
              <p className="mb-6">
                To the fullest extent permitted by law, the HOST Campaign and its volunteers shall not be 
                liable for any direct, indirect, incidental, special, or consequential damages arising from 
                your use of our services, even if we have been advised of the possibility of such damages.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Modifications to Terms</h2>
              <p className="mb-6">
                We may update these Terms of Use from time to time. Changes will be posted on this page with 
                an updated date. Your continued use of our services after changes are posted constitutes 
                acceptance of the new terms.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Contact Information</h2>
              <p className="mb-4">
                If you have questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> legal@hostcampaign.org</p>
                <p><strong>Website:</strong> www.hostcampaign.org</p>
                <p><strong>Response Time:</strong> We aim to respond to all inquiries within 5 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Legal Status Page
const LegalPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center mb-8">Legal Status</h1>
          <div className="text-sm text-gray-500 text-center mb-12">
            Last updated: December 2024
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold host-navy mb-6">Organization Status</h2>
              <p className="mb-6">
                The HOST (Housing Over Short-Term Lets) Campaign is an unincorporated grassroots advocacy 
                organisation operating in England and Wales. We are a volunteer-led campaign focused on 
                housing policy advocacy and community organising.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Non-Profit Nature</h2>
              <p className="mb-6">
                HOST Campaign operates as a non-profit advocacy organisation. We do not seek to generate 
                profits for private benefit. Any funds received are used solely to support our campaign 
                activities, including website maintenance, research, and community organising efforts.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Funding and Donations</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Notice</h3>
                <p className="text-blue-700">
                  HOST Campaign does not currently accept monetary donations or fundraising. We are a 
                  volunteer-led organisation that operates through community support and donated time.
                </p>
              </div>

              <p className="mb-6">
                If we decide to accept donations in the future, we will update this page with information 
                about our funding policies, transparency measures, and any regulatory registrations that 
                may be required.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Regulatory Compliance</h2>
              
              <h3 className="text-xl font-semibold host-red mb-4">Data Protection</h3>
              <p className="mb-6">
                We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection 
                Act 2018 in our handling of personal information. See our Privacy Policy for detailed 
                information about how we collect, use, and protect your data.
              </p>

              <h3 className="text-xl font-semibold host-red mb-4">Electoral Law</h3>
              <p className="mb-6">
                HOST Campaign engages in policy advocacy and may encourage supporters to contact elected 
                officials. We do not endorse specific political candidates or parties. Our activities are 
                focused on housing policy issues rather than electoral campaigning.
              </p>

              <h3 className="text-xl font-semibold host-red mb-4">Lobbying Regulations</h3>
              <p className="mb-6">
                Our advocacy activities may include meetings with government officials, MPs, and local 
                councillors. We monitor our activities to ensure compliance with relevant lobbying 
                transparency requirements and will register as required if our activities meet statutory thresholds.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Volunteer Structure</h2>
              <p className="mb-6">
                HOST Campaign is run entirely by volunteers who donate their time and expertise to advance 
                our mission. We do not have paid staff or formal employment relationships. Volunteers 
                participate in various capacities including research, community organising, communications, 
                and website maintenance.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Partnerships and Affiliations</h2>
              <p className="mb-6">
                HOST Campaign may work with other housing advocacy organisations, community groups, and 
                research institutions on shared objectives. We maintain our independence and do not have 
                formal affiliations with political parties or commercial organisations.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Transparency and Accountability</h2>
              <p className="mb-4">
                We are committed to transparency in our operations and advocacy work. This includes:
              </p>
              <ul className="mb-6 space-y-2">
                <li>Publishing information about our mission, activities, and positions</li>
                <li>Maintaining clear policies on data protection and user rights</li>
                <li>Providing accessible contact information for inquiries and complaints</li>
                <li>Operating our reporting and advocacy tools in a fair and transparent manner</li>
              </ul>

              <h2 className="text-2xl font-bold host-navy mb-6">Limitation of Liability</h2>
              <p className="mb-6">
                As an unincorporated organisation, HOST Campaign's liability is limited. Individual 
                volunteers act in good faith to advance our mission but cannot be held personally liable 
                for campaign activities undertaken in their volunteer capacity, except in cases of 
                intentional wrongdoing or gross negligence.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Dispute Resolution</h2>
              <p className="mb-6">
                We encourage anyone with concerns about our activities to contact us directly. We are 
                committed to addressing complaints fairly and promptly. For disputes that cannot be 
                resolved through direct communication, we will consider appropriate alternative dispute 
                resolution mechanisms.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Future Organisational Changes</h2>
              <p className="mb-6">
                HOST Campaign may consider formal incorporation as a Community Interest Company (CIC), 
                charitable organisation, or other legal structure if our activities expand significantly. 
                Any such changes will be communicated clearly to our supporters and reflected in updates 
                to this legal status page.
              </p>

              <h2 className="text-2xl font-bold host-navy mb-6">Contact Information</h2>
              <p className="mb-4">
                For questions about our legal status or organisational structure:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> legal@hostcampaign.org</p>
                <p><strong>General Inquiries:</strong> info@hostcampaign.org</p>
                <p><strong>Website:</strong> www.hostcampaign.org</p>
                <p><strong>Response Time:</strong> We aim to respond to all legal inquiries within 5 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-host-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={hostLogoStacked} alt="HOST Campaign" className="h-20 mb-4 brightness-0 invert" />
            <p className="text-gray-300 mb-4">
              Fighting for housing justice in London. Homes for residents, not profits.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-host-red">
                <Mail size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-host-red">
                <Share2 size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Take Action</h4>
            <ul className="space-y-2">
              <li><Link to="/report" className="text-gray-300 hover:text-white">Report Property</Link></li>
              <li><Link to="/contact-mp" className="text-gray-300 hover:text-white">Contact MP</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white">Get Involved</Link></li>
              <li><Link to="/landlords" className="text-gray-300 hover:text-white">For Landlords</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About HOST</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white">News & Stories</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-white">Media Centre</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Use</Link></li>
              <li><Link to="/legal" className="text-gray-300 hover:text-white">Legal Status</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 HOST Campaign. All rights reserved. Fighting for London's housing future.</p>
        </div>
      </div>
    </footer>
  )
}

// Scroll to Top Button
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-host-red text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/landlords" element={<LandlordsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/contact-mp" element={<ContactMPPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App
