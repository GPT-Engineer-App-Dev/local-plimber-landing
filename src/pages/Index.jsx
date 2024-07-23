import React from 'react';
import { Wrench, Phone, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const PlumberLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Joe's Plumbing Services</h1>
          <p className="text-xl mb-8">Your Trusted Local Plumber for All Your Needs</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
            Call Now
          </Button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Emergency Repairs', 'Pipe Installation', 'Drain Cleaning'].map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Wrench className="mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold">{service}</h3>
                </CardHeader>
                <CardContent>
                  <p>Professional and reliable {service.toLowerCase()} services for your home or business.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: '24/7 Availability', description: 'We're here for you any time, day or night.' },
              { icon: Star, title: 'Experienced Team', description: 'Our plumbers have years of experience and expertise.' },
              { icon: Phone, title: 'Quick Response', description: 'We respond promptly to all service calls.' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <item.icon size={48} className="mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
          <p className="text-xl mb-8">Need a plumber? We're just a phone call away!</p>
          <div className="flex justify-center items-center space-x-4">
            <Phone size={24} className="text-blue-600" />
            <span className="text-2xl font-bold">123-456-7890</span>
          </div>
          <Button size="lg" className="mt-8 bg-blue-600 text-white hover:bg-blue-700">
            Schedule Service
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Joe's Plumbing Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PlumberLandingPage;