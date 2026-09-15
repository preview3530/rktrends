import React from 'react';
import { 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  Headphones, 
  Facebook, 
  MessageCircle, 
  ArrowRight, 
  Menu,
  Sparkles,
  Zap,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const fbLink = "https://www.facebook.com/share/19R6xer9pv/";
  const waLink1 = "https://wa.me/919330273530"; // Assumed +91 for standard routing
  const waLink2 = "https://wa.me/918017924481"; 
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              <img 
                src="https://www.image2url.com/r2/default/images/1789403678092-73b1f7e1-5833-4724-8fcb-b7fe0fb9d277.png" 
                alt="RK Trends Logo" 
                className="w-12 h-12 object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-2xl tracking-tight">RK Trends</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">About Us</a>
              <a href="#features" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Why Choose Us</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href={waLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md"
              >
                <MessageCircle size={18} />
                <span>Order on WhatsApp</span>
              </a>
              <button className="md:hidden p-2 text-slate-600">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        {/* Abstract background elements instead of product images */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-slate-100/50 blur-3xl"></div>
          <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-50 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm font-semibold text-slate-700 mb-8 tracking-wide uppercase">
            <Sparkles size={16} className="text-amber-500" />
            <span>Premium Dropshipping</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
            Curated trends for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900">modern lifestyle.</span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover a handpicked selection of top-quality lifestyle essentials. Direct to you, without the markup.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={fbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-600/20"
            >
              <Facebook size={24} />
              <span>Visit our Facebook Page</span>
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section id="products" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Featured Product */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-8 w-full max-w-lg group">
                <img 
                  src="https://www.image2url.com/r2/default/images/1789402206708-7b7984fd-7014-483c-980f-a3ef607f6293.png" 
                  alt="Wireless Handheld Vacuum Cleaner" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-md">
                  Trending Now
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6 uppercase tracking-wider">
                <ShoppingBag size={16} />
                <span>Featured Item</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Wireless Handheld Vacuum Cleaner
              </h2>
              <p className="text-xl sm:text-2xl text-slate-500 font-medium mb-6">
                120W USB Rechargeable | storenzo
              </p>
              
              <div className="flex items-end justify-center lg:justify-start gap-4 mb-8">
                <span className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">₹899</span>
                <span className="text-2xl text-slate-400 line-through font-medium mb-1.5">₹1,499</span>
              </div>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience powerful, cordless cleaning with this 120W rechargeable vacuum. Perfect for car interiors, home furniture, and quick cleanups. Grab this trending item before stock runs out!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href={`${waLink1}?text=${encodeURIComponent("Hi, I want to order the Wireless Handheld Vacuum Cleaner (₹899).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={24} />
                  <span>Buy on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* More Products Grid */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">More Trending Essentials</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">Discover more problem-solving products for your everyday life.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Product 2 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="p-6 bg-white flex items-center justify-center relative overflow-hidden h-56">
                <img 
                  src="https://www.image2url.com/r2/default/images/1789402527464-3f260cf0-0bf9-414f-960f-b00884d2a98c.png" 
                  alt="Kitchen Faucet Sprayer" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <div className="mt-4 mb-2 flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Kitchen</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight flex-grow">
                  Kitchen Faucet Sprayer – 3-Function Pull Down
                </h4>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">₹599</span>
                  <span className="text-sm text-slate-400 line-through font-medium mb-1">₹999</span>
                </div>
                <a 
                  href={`${waLink1}?text=${encodeURIComponent("Hi, I want to order the Kitchen Faucet Sprayer (₹599).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-md shadow-green-500/20"
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="p-6 bg-white flex items-center justify-center relative overflow-hidden h-56">
                <img 
                  src="https://www.image2url.com/r2/default/images/1789402718898-21599d21-e38d-45ee-8d34-1e48675dbaf0.png" 
                  alt="Mini Plastic Bag Sealer" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <div className="mt-4 mb-2 flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Home Utility</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight flex-grow">
                  Mini Plastic Bag Sealer for Airtight Food Freshness
                </h4>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">₹549</span>
                  <span className="text-sm text-slate-400 line-through font-medium mb-1">₹899</span>
                </div>
                <a 
                  href={`${waLink1}?text=${encodeURIComponent("Hi, I want to order the Mini Plastic Bag Sealer (₹549).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-md shadow-green-500/20"
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="p-6 bg-white flex items-center justify-center relative overflow-hidden h-56">
                <img 
                  src="image_230aee.jpg" 
                  alt="Magnetic Car Phone Mount" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <div className="mt-4 mb-2 flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Accessories</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight flex-grow">
                  Magnetic Car Phone Mount
                </h4>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">₹599</span>
                  <span className="text-sm text-slate-400 line-through font-medium mb-1">₹999</span>
                </div>
                <a 
                  href={`${waLink1}?text=${encodeURIComponent("Hi, I want to order the Magnetic Car Phone Mount (₹599).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-md shadow-green-500/20"
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="p-6 bg-white flex items-center justify-center relative overflow-hidden h-56">
                <img 
                  src="image_230af4.png" 
                  alt="Rechargeable USB Lighter" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <div className="mt-4 mb-2 flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Gadgets</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight flex-grow">
                  Rechargeable USB Lighter
                </h4>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">₹649</span>
                  <span className="text-sm text-slate-400 line-through font-medium mb-1">₹1,099</span>
                </div>
                <a 
                  href={`${waLink1}?text=${encodeURIComponent("Hi, I want to order the Rechargeable USB Lighter (₹649).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-md shadow-green-500/20"
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="p-6 bg-white flex items-center justify-center relative overflow-hidden h-56">
                <img 
                  src="image_230b10.jpg" 
                  alt="Pink Travel Jewelry Case" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <div className="mt-4 mb-2 flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Lifestyle</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight flex-grow">
                  Pink Travel Jewelry Case
                </h4>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">₹799</span>
                  <span className="text-sm text-slate-400 line-through font-medium mb-1">₹1,299</span>
                </div>
                <a 
                  href={`${waLink1}?text=${encodeURIComponent("Hi, I want to order the Pink Travel Jewelry Case (₹799).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-md shadow-green-500/20"
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product 7 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="p-6 bg-white flex items-center justify-center relative overflow-hidden h-56">
                <img 
                  src="image_230b2d.jpg" 
                  alt="Compact Makeup Brush Set" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <div className="mt-4 mb-2 flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Beauty</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight flex-grow">
                  Compact Makeup Brush Set
                </h4>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">₹699</span>
                  <span className="text-sm text-slate-400 line-through font-medium mb-1">₹1,199</span>
                </div>
                <a 
                  href={`${waLink1}?text=${encodeURIComponent("Hi, I want to order the Compact Makeup Brush Set (₹699).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-md shadow-green-500/20"
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product 8 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="p-6 bg-white flex items-center justify-center relative overflow-hidden h-56">
                <img 
                  src="image_230b34.jpg" 
                  alt="Blue Sleep Sound Machine" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <div className="mt-4 mb-2 flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Wellness</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight flex-grow">
                  Blue Sleep Sound Machine
                </h4>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">₹1,299</span>
                  <span className="text-sm text-slate-400 line-through font-medium mb-1">₹2,499</span>
                </div>
                <a 
                  href={`${waLink1}?text=${encodeURIComponent("Hi, I want to order the Blue Sleep Sound Machine (₹1299).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-md shadow-green-500/20"
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product 9 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="p-6 bg-white flex items-center justify-center relative overflow-hidden h-56">
                <img 
                  src="image_230b50.png" 
                  alt="Green Neck Massager" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <div className="mt-4 mb-2 flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Wellness</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight flex-grow">
                  Green Neck Massager
                </h4>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">₹1,199</span>
                  <span className="text-sm text-slate-400 line-through font-medium mb-1">₹2,299</span>
                </div>
                <a 
                  href={`${waLink1}?text=${encodeURIComponent("Hi, I want to order the Green Neck Massager (₹1199).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold transition-transform hover:-translate-y-0.5 shadow-md shadow-green-500/20"
                >
                  <MessageCircle size={18} />
                  <span>Buy on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats / Categories Abstract Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Latest Trends</h3>
              <p className="text-slate-400">Always updated with the newest market demands and styles.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Curated Selection</h3>
              <p className="text-slate-400">Carefully chosen products ensuring top-tier quality.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Fast Processing</h3>
              <p className="text-slate-400">Streamlined dropshipping operations for quicker delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why shop with RK Trends?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We prioritize customer satisfaction and product quality above all else. Here is what you can expect when you order from us.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Truck size={28} />, title: "Nationwide Shipping", desc: "Reliable delivery straight to your doorstep." },
              { icon: <ShieldCheck size={28} />, title: "Secure Checkout", desc: "Your transactions and data are always protected." },
              { icon: <Sparkles size={28} />, title: "Premium Quality", desc: "We source only the best products for our customers." },
              { icon: <Headphones size={28} />, title: "Dedicated Support", desc: "We're here to help you via WhatsApp any time." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-800 mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Abstract bg element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-slate-800 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to place an order?</h2>
              <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Reach out to us directly on WhatsApp to inquire about our latest collections, pricing, and availability. We reply promptly!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <a 
                  href={waLink1} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1"
                >
                  <MessageCircle size={28} />
                  <div className="text-left">
                    <div className="text-sm font-medium text-green-100 uppercase tracking-wider">Primary Support</div>
                    <div>9330273530</div>
                  </div>
                </a>
                
                <a 
                  href={waLink2} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-5 rounded-2xl font-bold text-lg transition-transform hover:-translate-y-1"
                >
                  <MessageCircle size={28} />
                  <div className="text-left">
                    <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Secondary Line</div>
                    <div>8017924481</div>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-800">
                <p className="text-slate-400 mb-6 font-medium">Or discover our catalog on Facebook</p>
                <a 
                  href={fbLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-semibold"
                >
                  <Facebook size={24} />
                  <span className="text-xl">RK Trends Official Page</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="https://www.image2url.com/r2/default/images/1789403678092-73b1f7e1-5833-4724-8fcb-b7fe0fb9d277.png" 
              alt="RK Trends Logo" 
              className="w-10 h-10 object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-xl text-slate-900">RK Trends</span>
          </div>
          <p className="text-slate-500 mb-6">
            Premium Dropshipping Solutions. Curated fashion and lifestyle.
          </p>
          <div className="flex justify-center space-x-6">
            <a href={fbLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href={waLink1} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500 transition-colors">
              <MessageCircle size={24} />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
          <div className="mt-8 text-sm text-slate-400">
            &copy; {new Date().getFullYear()} RK Trends. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
