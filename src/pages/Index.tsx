import { motion } from "framer-motion"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Shield, Network, Code, Settings, Server, Tv, DollarSign, ArrowRight, CheckCircle, Menu } from "lucide-react"

// Add this component after the imports and before the services array
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!hasAnimated) {
      const duration = 3000 // 3 seconds
      const steps = 60
      const increment = target / steps
      const stepDuration = duration / steps

      let currentCount = 0
      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= target) {
          setCount(target)
          setHasAnimated(true)
          clearInterval(timer)
        } else {
          setCount(Math.floor(currentCount))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [target, hasAnimated])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const services = [
  {
    icon: Globe,
    title: "Broadband Internet",
    description:
      "We Provide High Speed Broadband Internet connection to Corporate and Home Users.",
  },
  {
    icon: Shield,
    title: "VPN",
    description: "We Provide High Speed Virtual Private Network Service to Corporate Clients.",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "We Provide end-to-end network Infrastructure Solution.",
  },
  {
    icon: Code,
    title: "Software LifeCycle",
    description: "We Design, Develop, Maintain Software, throughout the lifecycle.",
  },
  {
    icon: Settings,
    title: "Server Farm",
    description: "We Provide super-amazing server farm solutions.",
  },
  {
    icon: Server,
    title: "IP TV & OTT",
    description: "We Provide super-amazing video streaming.",
  },
  {
    icon: Server,
    title: "Pricing like no other",
    description: "Our prices are best in the market. No cap, no lock, no credit card required.",
  },
  {
    icon: DollarSign,
    title: "IT Service Management Lifecycle",
    description: "We Manage Lifecycle of IT Service. Demand analysis to Strategy design to Implement. Operation & Maintenance.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
}

const words = ["better", "awesome", "modern"];

function RandomWordSwitcher() {
  const [word, setWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(words[Math.floor(Math.random() * words.length)]);
    }, 1000); // Change word every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group cursor-pointer">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
      <div className="relative px-6 sm:px-12 py-4 sm:py-6 bg-slate-900 rounded-2xl leading-5 flex items-center">
        <span className="text-blue-400 text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-500">{word}.</span>
      </div>
    </div>
  );
}

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Header */}
      <motion.header
        className="relative z-10 flex items-center justify-between p-6 lg:px-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
         <img
            src="softcrop.png"
            alt="SoftCrop IT LLP Internet Services"
            className="h-16 w-auto object-contain"
          />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Services", href: "#services" },
            { name: "Pricing", href: "#pricing" },
            { name: "About", href: "#footer" },
            { name: "Contact", href: "#footer" },
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={(e: any) => {
                e.preventDefault()
                document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Book a Call
            </Button>
          </motion.div>
        </nav>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7 text-white" />
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center md:hidden">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <nav className="flex flex-col space-y-8 items-center">
            {[
              { name: "Services", href: "#services" },
              { name: "Pricing", href: "#pricing" },
              { name: "About", href: "#footer" },
              { name: "Contact", href: "#footer" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white text-2xl font-semibold"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white w-48 text-lg"
              onClick={(e: any) => {
                e.preventDefault()
                setMobileMenuOpen(false)
                document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Book a Call
            </Button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4 sm:space-y-6">
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
                <span className="text-white block">Get the best IT</span>
                <span className="text-white block">Infrastructure</span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  for your business
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block"
              >
                <RandomWordSwitcher />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Amazing Services for you</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={cardVariants} whileHover="hover" className="group">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </motion.div>

                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-normal text-sm sm:text-base">
                      {service.description}
                    </p>

                    <motion.div
                      className="flex items-center justify-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { number: 2200, suffix: "+", label: "Happy Clients", icon: "👥" },
              { number: 99, suffix: "%", label: "Uptime Guarantee", icon: "⚡" },
              { number: 24, suffix: "/7", label: "Support Available", icon: "🛠️" },
              { number: 22, suffix: "+", label: "Years Experience", icon: "🏆" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-4xl mb-2">{stat.icon}</div>
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                  >
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </motion.span>
                </motion.div>
                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                SoftCrop?
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "Enterprise-Grade Security",
                  description:
                    "Advanced encryption and security protocols to protect your business data and operations.",
                },
                {
                  title: "Scalable Solutions",
                  description: "Infrastructure that grows with your business, from startup to enterprise level.",
                },
                {
                  title: "Expert Support Team",
                  description: "Dedicated technical experts available around the clock to ensure smooth operations.",
                },
                {
                  title: "Cost-Effective Pricing",
                  description:
                    "Transparent pricing with no hidden fees and flexible payment options to suit your budget.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-semibold">System Performance</div>
                    <div className="text-green-400">98.7%</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "98.7%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-white font-semibold">Network Uptime</div>
                    <div className="text-green-400">99.9%</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.9%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-white font-semibold">Client Satisfaction</div>
                    <div className="text-green-400">96.2%</div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "96.2%" }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Simple, transparent pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whatever your status, our offers evolve according to your needs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "SME User",
                price: "₹999",
                subtitle: "Starter",
                features: ["30 Days", "50 MBPS", "Unlimited Bandwidth"],
                popular: false,
              },
              {
                title: "SME User",
                price: "₹1399",
                subtitle: "Standard",
                features: ["30 Days", "100 MBPS", "Unlimited Bandwidth"],
                popular: true,
              },
              {
                title: "SME User",
                price: "₹1799",
                subtitle: "Premium",
                features: ["30 Days", "150 MBPS", "Unlimited Bandwidth"],
                popular: false,
              },
              {
                title: "Corporate",
                price: "Let's talk",
                subtitle: "Corporate Custom",
                features: ["Custom", "Scalable", "Unlimited Bandwidth"],
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div key={plan.title + index} variants={cardVariants} className="relative">
                <Card
                  className={`bg-gray-900/80 backdrop-blur-sm h-full transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "border-2 border-purple-500/50 bg-gray-800/80"
                      : "border border-gray-700/50 hover:border-gray-600/50"
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">{plan.title}</h3>
                      <div className="mb-4">
                        <span className="text-4xl lg:text-5xl font-bold text-white">{plan.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-purple-400" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-purple-600 hover:bg-purple-700 border-purple-500"
                          : "bg-transparent hover:bg-purple-600/10 border-purple-500/50"
                      } text-white border transition-all duration-300`}
                    >
                      Get started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-8">
              Trusted by Open Source, enterprise,
              <span className="block text-white font-bold">and more than 99,000 of you</span>
            </h4>
          </motion.div>

          {/* Infinite horizontal scrolling logos */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              className="flex gap-6 sm:gap-8 items-center"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: "200%" }}
            >
              {/* First set of logos */}
              {[
                "/logo/KFC_logo.svg.png",
                "/logo/ustm.webp",
                "/logo/gnrc.jpg",
                "/logo/dps.png",
                "/logo/samsung.jpg",
                "/logo/glowing-apple-logo-black-background-iphone-iwatch-macbook-m-white-293390115.webp",
                "/logo/pvr.jpg",
                "/logo/PW.jpg",
                "/logo/blinkit.jpg",
                "/logo/delivery.jpg",
                "/logo/instacart.webp",
                "/logo/dy365.png",
                "/logo/pratidin.png",
              ].map((src, idx) => (
                <img
                  key={src + idx}
                  src={src}
                  alt={`Logo ${idx + 1}`}
                  className="h-20 w-20 object-cover rounded-full bg-white/10"
                  draggable={false}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                "/logo/KFC_logo.svg.png",
                "/logo/ustm.webp",
                "/logo/gnrc.jpg",
                "/logo/dps.png",
                "/logo/samsung.jpg",
                "/logo/glowing-apple-logo-black-background-iphone-iwatch-macbook-m-white-293390115.webp",
                "/logo/pvr.jpg",
                "/logo/PW.jpg",
                "/logo/blinkit.jpg",
                "/logo/delivery.jpg",
                "/logo/instacart.webp",
                "/logo/dy365.png",
                "/logo/pratidin.png",
              ].map((src, idx) => (
                <img
                  key={src + "dup" + idx}
                  src={src}
                  alt={`Logo ${idx + 1}`}
                  className="h-20 w-20 object-cover rounded-full bg-white/10"
                  draggable={false}
                />
              ))}
            </motion.div>
          </div>
          {/* Add "Many More" below the scrolling logos */}
          <div className="text-center mt-6">
            <span className="text-lg text-gray-400 font-semibold">+ Many More</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-4 sm:space-x-6 items-center"
              animate={{
                x: [0, -2400],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              style={{ width: "calc(200% + 24px)" }}
            >
              {/* First set of testimonials */}
              {[
                {
                  name: "USTM",
                  content:
                    "SoftCrop Solutions transformed our entire IT infrastructure. Their expertise and support have been invaluable to our growth.",
                  rating: 5,
                },
                {
                  name: "GNRC",
                  content:
                    "Outstanding service and competitive pricing. They delivered exactly what they promised and exceeded our expectations.",
                  rating: 5,
                },
                {
                  name: "DY365",
                  content:
                    "The 24/7 support and proactive monitoring have given us peace of mind. Highly recommend their services.",
                  rating: 5,
                },
                {
                  name: "KFC",
                  content:
                    "Their cloud infrastructure solutions scaled perfectly with our rapid growth. Exceptional technical expertise.",
                  rating: 5,
                },
                {
                  name: "DPS",
                  content:
                    "Security was our top priority and SoftCrop delivered beyond expectations. Professional and reliable.",
                  rating: 5,
                },
                {
                  name: "PRATIDIN TIMES",
                  content:
                    "The migration to their network infrastructure was seamless. Zero downtime and improved performance.",
                  rating: 5,
                },
                {
                  name: "PVR CINEMA",
                  content:
                    "Cost-effective solutions without compromising quality. Their support team is always responsive.",
                  rating: 5,
                },
                {
                  name: "APPLE",
                  content:
                    "Innovative approach to our complex requirements. They understand enterprise-level challenges.",
                  rating: 5,
                },
                {
                  name: "SAMSUNG",
                  content: "Partnership that goes beyond service delivery. They're invested in our long-term success.",
                  rating: 5,
                },
                {
                  name: "BLINKIT",
                  content:
                    "Transparent pricing and clear communication throughout. Highly recommend for any business size.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={`first-${testimonial.name}`}
                  className="flex-shrink-0 w-72 sm:w-80"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            ⭐
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 sm:mb-6 italic text-sm leading-5">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[
                {
                  name: "USTM",
                  content:
                    "SoftCrop Solutions transformed our entire IT infrastructure. Their expertise and support have been invaluable to our growth.",
                  rating: 5,
                },
                {
                  name: "GNRC",
                  content:
                    "Outstanding service and competitive pricing. They delivered exactly what they promised and exceeded our expectations.",
                  rating: 5,
                },
                {
                  name: "DY365",
                  content:
                    "The 24/7 support and proactive monitoring have given us peace of mind. Highly recommend their services.",
                  rating: 5,
                },
                {
                  name: "KFC",
                  content:
                    "Their cloud infrastructure solutions scaled perfectly with our rapid growth. Exceptional technical expertise.",
                  rating: 5,
                },
                {
                  name: "DPS",
                  content:
                    "Security was our top priority and SoftCrop delivered beyond expectations. Professional and reliable.",
                  rating: 5,
                },
                {
                  name: "PRATIDIN TIMES",
                  content:
                    "The migration to their network infrastructure was seamless. Zero downtime and improved performance.",
                  rating: 5,
                },
                {
                  name: "PVR CINEMA",
                  content:
                    "Cost-effective solutions without compromising quality. Their support team is always responsive.",
                  rating: 5,
                },
                {
                  name: "APPLE",
                  content:
                    "Innovative approach to our complex requirements. They understand enterprise-level challenges.",
                  rating: 5,
                },
                {
                  name: "SAMSUNG",
                  content: "Partnership that goes beyond service delivery. They're invested in our long-term success.",
                  rating: 5,
                },
                {
                  name: "BLINKIT",
                  content:
                    "Transparent pricing and clear communication throughout. Highly recommend for any business size.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={`second-${testimonial.name}`}
                  className="flex-shrink-0 w-72 sm:w-80"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            ⭐
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 sm:mb-6 italic text-sm leading-5">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 bg-slate-900/90 border-t border-white/10 px-4 sm:px-6 lg:px-12 py-8 sm:py-12" id="footer">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Company Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">About Our Company</h3>
              <p className="text-gray-400 leading-5 text-sm">
                Since 2005, we have been dedicated to delivering high-quality services to our valued customers, earning their trust through consistency, reliability, and a strong commitment to excellence. Over the years, we have built lasting relationships with a diverse range of clients, including home users, small and medium enterprises (SMEs), multinational brands, financial institutions, hotels, universities, hospitals, and many others. Our ability to adapt to the unique needs of each customer segment, combined with our focus on innovation and customer satisfaction, has allowed us to grow steadily and maintain a strong reputation in the industry. Whether it's a household seeking dependable solutions or a large corporation requiring tailored support, we strive to exceed expectations and ensure long-term satisfaction for every client we serve.
              </p>
            </div>

            {/* About Us Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">About Us</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">Services</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-400">2nd Floor, Prag Plaza, GS Rd, Bhangagarh, GS Road, Guwahati, Assam 781005</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-400">9864272137 / 8749822449</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-400">softcropit@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-400">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 SoftCrop IT LLP. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
