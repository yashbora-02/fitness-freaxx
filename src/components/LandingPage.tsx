import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Users, 
  Heart, 
  Target, 
  Clock, 
  Award, 
  DollarSign, 
  Settings,
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Youtube
} from 'lucide-react';
import unleashImage from '../assets/unleash.jpg';
import mImage from '../assets/mukul.jpg';
import aImage from '../assets/amita.jpg';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.webp';
import p5 from '../assets/p5.webp';
import c1 from '../assets/c1.jpeg';
import imageThumb1 from '../assets/t1.png';
import imageThumb2 from '../assets/t2.jpg';
import imageThumb3 from '../assets/t3.jpg';
import imageThumb4 from '../assets/t4.jpg';
import imageThumb5 from '../assets/t5.jpg';
import imageThumb6 from '../assets/t6.jpg';
import imageThumb7 from '../assets/t7.jpg';
import imageThumb8 from '../assets/t8.jpg';
 

const LandingPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Logo */}
      {/* <img src={logo} alt="Fitness Freaxx Logo" className="mx-auto mt-6 mb-2 w-24 h-24 object-contain" /> */}

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-black text-white">FITNESS FREAXX</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-red-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Services</a>
              <a href="#gallery" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Gallery</a>
              <Link to="/contact" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-bold transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            BE <span className="text-red-600">FIT</span>.<br />
            BE <span className="text-red-600">STRONG</span>.<br />
            BE <span className="text-red-600">FREAXX</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            Transform your body, elevate your mind, and unleash your inner beast
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
            JOIN NOW
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tight">
                UNLEASH YOUR <span className="text-red-600">POTENTIAL</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                At Fitness Freaxx, we believe that everyone has an inner champion waiting to be unleashed. 
                Our state-of-the-art facility combines cutting-edge equipment with world-class training 
                methodologies to help you achieve results you never thought possible.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We're not just a gym – we're a community of warriors dedicated to pushing boundaries, 
                breaking limits, and transforming lives through the power of fitness.
              </p>
            </div>
            <div className="relative">
              <img 
                src={unleashImage}
                alt="Fitness Freaxx Training"
                className="rounded-lg shadow-2xl w-full h-60 md:h-[400px] object-contain md:object-cover object-center scale-100"
              />
              <div className="absolute inset-0 bg-red-600/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-12 tracking-tight text-white">
            <span className="text-red-600">Meet</span> Our Trainers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Trainer 1 */}
            <div className="bg-gray-900 rounded-2xl shadow-2xl flex flex-col items-center p-8 border-l-8 border-red-600 hover:scale-105 transition-transform duration-300">
              <img
                src={mImage}
                alt="Mukul Chavariya"
                className="w-40 h-40 object-cover rounded-full border-4 border-red-600 mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Mukul Chavariya</h3>
              <p className="text-red-400 font-semibold mb-4">Head Trainer & Nutritionist</p>
              <ul className="text-gray-300 text-base space-y-1 text-center">
                <li>10 years of experience in training and transforming lives</li>
                <li>Certified Fitness professional from K11 fitness of science</li>
                <li>Certified from Gold's Gym as personal trainer</li>
                <li>Certified Cult Fit personal trainer</li>
                <li>Certified diploma in nutrition</li>
              </ul>
            </div>
            {/* Trainer 2 */}
            <div className="bg-gray-900 rounded-2xl shadow-2xl flex flex-col items-center p-8 border-l-8 border-red-600 hover:scale-105 transition-transform duration-300">
              <img
                src={aImage}
                alt="Amita Godiyaal"
                className="w-40 h-40 object-cover rounded-full border-4 border-red-600 mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-white mb-2">Amita Godiyaal</h3>
              <p className="text-red-400 font-semibold mb-4">Yoga Expert</p>
              <ul className="text-gray-300 text-base space-y-1 text-center">
                <li>4 years of experience in training and transforming lives</li>
                <li>Certified yoga teacher from Rishikesh Yogshala</li>
                <li>K11 certified yoga teacher</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 1-ON-1 PERSONAL TRAINING Section */}
      <section className="py-10 bg-black text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tight">
          1-ON-1 PERSONAL<br />TRAINING
        </h2>
        <div className="flex justify-center mb-6">
          <div className="bg-red-600 w-full max-w-xl py-2 px-4 flex items-center justify-center shadow-lg">
            <span className="text-white text-base md:text-lg font-bold italic tracking-widest uppercase">Training with FitnessFreaxx</span>
          </div>
        </div>
        <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto font-medium">
          Our proven system at FitnessFreaxx combines physical training with comprehensive guidance on sports nutrition and injury prevention. You get more than just workouts – you get a complete fitness strategy designed for lasting results.
        </p>
        <div className="mt-4 border-b-4 border-red-600 w-1/4 mx-auto"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight">
              OUR <span className="text-red-600">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-300">Comprehensive fitness solutions tailored to your goals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 group flex flex-col items-center text-center">
              <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2 md:mb-4">Personal Training</h3>
              <p className="text-gray-300 text-base md:text-lg">One-on-one coaching with certified trainers to maximize your results</p>
            </div>
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 group flex flex-col items-center text-center">
              <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2 md:mb-4">Nutrition Plans</h3>
              <p className="text-gray-300 text-base md:text-lg">Customized meal plans designed to fuel your fitness journey</p>
            </div>
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 group flex flex-col items-center text-center">
              <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2 md:mb-4">Group Workouts</h3>
              <p className="text-gray-300 text-base md:text-lg">High-energy group sessions that build community and motivation</p>
            </div>
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 group flex flex-col items-center text-center">
              <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2 md:mb-4">Strength Conditioning</h3>
              <p className="text-gray-300 text-base md:text-lg">Advanced strength training programs for serious athletes</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET WITH FitnessFreaxx Section (screenshot style) */}
      <section className="py-10 md:py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 space-y-12 md:space-y-20">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Heading, Description, Button */}
            <div>
              <span className="block text-lg italic text-red-600 mb-2 tracking-wide">WHY TRAINING</span>
              <h2 className="text-3xl md:text-6xl font-black italic mb-4 text-black dark:text-white">WHAT YOU GET<br />WITH <span className="italic">FitnessFreaxx</span></h2>
              <p className="mb-4 md:mb-6 text-base md:text-lg text-gray-700 dark:text-gray-200">By signing up with <span className="font-bold">FitnessFreaxx</span>, you gain access to a wide range of exclusive benefits, including.</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-full text-lg md:text-xl tracking-widest transition">GET STARTED</button>
            </div>
            {/* Right: Image, Service Title, Description */}
            <div>
              <img src={p1} alt="Personal Training" className="rounded-lg shadow-xl w-40 h-32 md:w-full md:h-auto object-cover max-h-32 md:max-h-80 mb-4 md:mb-6 mx-auto" />
              <h3 className="font-bold italic text-xl md:text-2xl mb-2 md:mb-3 text-black dark:text-white">Offline Personalized Training Routines</h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-6 md:mb-10">Prefer in-person sessions? Our certified trainers are available for one-on-one coaching at our partner gyms or your preferred location. Each session is tailored to your fitness level and goals.</p>
            </div>
          </div>
          {/* Bottom Row: Two Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Block 1: Nutrition */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <img src={p2} alt="Nutrition Coaching" className="rounded-lg w-40 h-32 md:w-64 md:h-64 object-cover mb-4 md:mb-0 mx-auto md:mx-0" />
              <div className="text-center md:text-left">
                <h4 className="font-bold italic text-xl md:text-2xl mb-2 md:mb-4 text-black dark:text-white">Expert Nutritional Coaching</h4>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-200">Fitness is 70% nutrition and 30% workout. Our certified nutritionists create meal plans tailored to your body type, preferences, and goals.</p>
              </div>
            </div>
            {/* Block 2: Home Training */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <img src={p3} alt="Home Training" className="rounded-lg w-40 h-32 md:w-64 md:h-64 object-cover mb-4 md:mb-0 mx-auto md:mx-0" />
              <div className="text-center md:text-left">
                <h4 className="font-bold italic text-xl md:text-2xl mb-2 md:mb-4 text-black dark:text-white">Home Training</h4>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-200">No gym? No problem! Our home training plans use minimal equipment and are tailored to your schedule. We bring fitness to your living room literally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR FITNESS PROGRAMS Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-10 text-black dark:text-white">POPULAR FITNESS PROGRAMS</h2>
          <p className="text-center text-base md:text-lg text-gray-700 dark:text-gray-200 mb-8 md:mb-14 max-w-2xl mx-auto">Our carefully curated fitness programs have been developed to ensure that every client can find a path that works best for them</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col items-center p-4 md:p-10 min-h-[200px] md:min-h-[400px]">
              <div className="bg-red-600 p-2 md:p-3 rounded-lg mb-4 md:mb-6">
                <img src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&w=400" alt="Yoga" className="w-32 h-32 md:w-56 md:h-56 object-cover rounded-xl" />
              </div>
              <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 text-black dark:text-white">YOGA</h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 text-center">Balance your body, mind, and spirit with our professionally led yoga sessions. Ideal for stress relief, flexibility, and overall well-being.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-black rounded-2xl shadow-2xl flex flex-col items-center p-4 md:p-10 min-h-[200px] md:min-h-[400px] border-4 border-red-600">
              <div className="bg-red-600 p-2 md:p-3 rounded-lg mb-4 md:mb-6">
                <img src={p4} alt="Online Personal Training" className="w-32 h-32 md:w-56 md:h-56 object-cover rounded-xl" />
              </div>
              <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 text-red-600">ONLINE PERSONAL TRAINING</h3>
              <p className="text-base md:text-lg text-gray-200 text-center">No matter where you are, you can train with our expert coaches through video calls and mobile-based fitness plans. Enjoy flexibility and accountability with fully customized workouts designed for your goals.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col items-center p-4 md:p-10 min-h-[200px] md:min-h-[400px]">
              <div className="bg-red-600 p-2 md:p-3 rounded-lg mb-4 md:mb-6">
                <img src={p5} alt="Weight Loss" className="w-32 h-32 md:w-56 md:h-56 object-cover rounded-xl" />
              </div>
              <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 text-black dark:text-white">WEIGHT LOSS PROGRAMS</h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 text-center">Struggling with weight loss? Our comprehensive programs combine diet, exercise, and lifestyle changes to help you burn fat and build lasting habits. No gimmicks, just real, sustainable results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TRANSFORMATIONS Section */}
      <section className="py-20 bg-black dark:bg-black mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white tracking-tight">CLIENT TRANSFORMATIONS</h2>
          <div className="flex justify-center">
            {/* Transformation 1 */}
            <div className="bg-gray-900 rounded-2xl shadow-xl flex flex-col items-center p-3 md:p-4">
              <img src={c1} alt="Client Transformation 1" className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-xl mb-2 md:mb-4" />
              <p className="text-xs md:text-base text-gray-200 text-center italic">"Lost weight and gained confidence! The trainers at FitnessFreaxx changed my life."</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US Section */}
      <section className="py-20 bg-gray-900 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tight text-white">WHY CHOOSE <span className="text-red-600">FREAXX</span>?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Trainers</h3>
              <p className="text-gray-300">Expert guidance from nationally certified fitness professionals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Timing</h3>
              <p className="text-gray-300">24/7 access to fit your busy lifestyle and schedule</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Plans</h3>
              <p className="text-gray-300">Competitive pricing with no hidden fees or long-term contracts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Equipment</h3>
              <p className="text-gray-300">State-of-the-art machinery and tools for optimal performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Section */}
<section id="gallery" className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight">
        <span className="text-red-600">FREAXX</span> IN ACTION
      </h2>
      <p className="text-xl text-gray-300">See our community crushing their goals</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
        { link: 'https://www.instagram.com/p/DEg-RRWpInR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: imageThumb1 },
        { link: 'https://www.instagram.com/reel/CjzRY5_pYQJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: imageThumb2 },
        { link: 'https://www.instagram.com/reel/C3ZcfZzt_e2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: imageThumb3 },
        { link: 'https://www.instagram.com/reel/C295LSBpaiF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: imageThumb4 },
        { link: 'https://www.instagram.com/reel/Cx2Gn9YpVGV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: imageThumb5 },
        { link: 'https://www.instagram.com/p/Cs-l4ZTSwb2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: imageThumb6 },
        { link: 'https://www.instagram.com/reel/CwWk1L9J-2h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: imageThumb7 },
        { link: 'https://www.instagram.com/p/CvwTugjp97W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', thumb: imageThumb8 },
      ].map(({ link, thumb }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden rounded-lg aspect-square block"
        >
          <img 
            src={thumb}
            alt={`Fitness Freaxx Gallery ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Instagram className="h-8 w-8 text-white" />
          </div>
        </a>
      ))}
    </div>
  </div>
</section>


      {/* YouTube Shorts Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-10 tracking-tight text-center text-white">
            Watch Our Latest Shorts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12">
            <div className="w-full h-40 md:h-96">
              <iframe className="rounded-xl w-full h-full" src="https://www.youtube.com/embed/4rOFS3dpA-M" title="YouTube Short 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="w-full h-40 md:h-96">
              <iframe className="rounded-xl w-full h-full" src="https://www.youtube.com/embed/TCcnDa-P3Zg" title="YouTube Short 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="w-full h-40 md:h-96">
              <iframe className="rounded-xl w-full h-full" src="https://www.youtube.com/embed/1ZJyIU6KzBk" title="YouTube Short 3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="w-full h-40 md:h-96">
              <iframe className="rounded-xl w-full h-full" src="https://www.youtube.com/embed/jgWskS0fnOY" title="YouTube Short 4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-8 md:py-20 bg-red-600 min-h-[200px] flex items-center">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-2xl md:text-5xl font-black uppercase mb-4 md:mb-6 tracking-tight text-white">
            BOOK YOUR FREE TRIAL TODAY!
          </h2>
          <p className="text-base md:text-xl text-red-100 mb-6 md:mb-8">
            Ready to transform your life? Start your journey with us today.
          </p>
          <Link to="/contact">
            <button className="bg-black hover:bg-gray-800 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              GET STARTED NOW
            </button>
          </Link>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="block text-base md:text-xl italic text-white mb-2 tracking-wide">WHAT THEY'RE SAYING</span>
            <div className="flex flex-col items-center">
              <div className="w-12 md:w-16 h-1 bg-red-600 mb-4"></div>
            </div>
            <h2 className="text-2xl md:text-6xl font-black italic text-white mb-8 md:mb-12 tracking-tight">CLIENT TESTIMONIALS</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            {/* Testimonial 1 */}
            <div className="p-4 md:p-8 bg-gray-900 rounded-xl">
              <p className="text-base md:text-xl text-white mb-4 md:mb-6">“I lost 12 kgs in just 4 months with the online training program! The workouts were fun and the diet plan was easy to follow. FitnessFreaxx changed my life.”</p>
              <span className="text-red-600 font-bold tracking-wide text-xs md:text-base">Ritika Sharma – Online Training Client</span>
            </div>
            {/* Testimonial 2 */}
            <div className="p-4 md:p-8 bg-gray-900 rounded-xl">
              <p className="text-base md:text-xl text-white mb-4 md:mb-6">“I have a hectic job, but the home training plan fit perfectly into my routine. The trainer was super professional and always motivated me to push harder.”</p>
              <span className="text-red-600 font-bold tracking-wide text-xs md:text-base">Arun Mehta – Home Training Client</span>
            </div>
            {/* Testimonial 3 */}
            <div className="p-4 md:p-8 bg-gray-900 rounded-xl">
              <p className="text-base md:text-xl text-white mb-4 md:mb-6">“I struggled with weight for years. The personalized nutrition plan, combined with weekly check-ins, helped me drop 10 kgs and keep it off!”</p>
              <span className="text-red-600 font-bold tracking-wide text-xs md:text-base">Rahul Verma – Nutrition & Weight Loss Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#18181b] border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-8 w-8 text-red-600" />
                <span className="text-2xl font-black text-white">FITNESS FREAXX</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Unleash your potential with premium fitness facilities, expert training, and a community that supports your journey to greatness.
              </p>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/mukulfitnessfreax?mibextid=wwXIfr&rdid=k0OegsmmnvdjNUUp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1J4zrj7JBr%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition-colors">
                  <Facebook className="h-7 w-7" fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/fitnessfrea_xx/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition-colors">
                  <Instagram className="h-7 w-7" />
                </a>
                <a href="https://www.youtube.com/@Fitnessfreaxx" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition-colors">
                  <Youtube className="h-7 w-7" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=917830356468&text=Hi%20FitnessFreaxx%20%F0%9F%92%AA%2C%20I%20would%20like%20to%20transform%20%F0%9F%94%A5.%20Please%20help%20me%20with%20how%20to%20get%20started%20%F0%9F%99%8C.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.647.86 5.1 2.33 7.13L4 29l7.13-2.33A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.47-.46-4.95-1.32l-.35-.2-4.23 1.38 1.38-4.23-.2-.35A9.96 9.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-6.25c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.13-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.56.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.02 4.22.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.75-.72 2-1.41.25-.69.25-1.28.18-1.41-.07-.13-.25-.2-.53-.34z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-red-600 transition-colors">About Us</a>
                <a href="#services" className="block text-gray-300 hover:text-red-600 transition-colors">Services</a>
                <a href="#gallery" className="block text-gray-300 hover:text-red-600 transition-colors">Gallery</a>
                <Link to="/contact" className="block text-gray-300 hover:text-red-600 transition-colors">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="text-gray-300">123 Fitness Street, Muscle City, MC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span className="text-gray-300"> +91 7830356468</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <span className="text-gray-300">Mukulchavariya.14@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-12 text-center">
            <p className="text-gray-400">&copy; Copyright © 2025 FitnessFreaxx. All rights reserved. Be Fit. Be Strong. Be Freaxx.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;