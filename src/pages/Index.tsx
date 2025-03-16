import { ArrowRight, Repeat, Heart, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 animate-fadeIn">
              Connect, Exchange, Grow
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Empowering farmers through equipment sharing and community support. Join our platform to exchange machinery, sell crops, and make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Barter Card */}
            <Link 
              to="/barter"
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Repeat className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Barter Equipment</h3>
                <p className="text-gray-600 mb-6">Exchange your farming equipment with other farmers based on matching values.</p>
                <div className="flex items-center text-primary font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            {/* Donations Card */}
            <Link 
              to="/donations"
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Farmers</h3>
                <p className="text-gray-600 mb-6">Contribute to farmers' education, debt relief, and other essential needs.</p>
                <div className="flex items-center text-secondary font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            {/* Sell Card */}
            <Link 
              to="/sell"
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <ShoppingBag className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sell Crops</h3>
                <p className="text-gray-600 mb-6">List and sell your crops directly to buyers in your community.</p>
                <div className="flex items-center text-accent font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in creating a sustainable farming ecosystem where resources are shared efficiently, 
            enabling farmers to grow their operations without the burden of heavy equipment costs. 
            Together, we're building a stronger agricultural community.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
