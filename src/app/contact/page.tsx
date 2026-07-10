import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">Contact Us</h1>
        <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        <p className="mt-6 text-xl text-brand-text/80 max-w-2xl mx-auto">Have questions? We are here to help. Reach out to us through any of the following channels.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-6 items-start">
            <div className="w-12 h-12 bg-brand-secondary/20 text-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-dark mb-2">Campus Address</h3>
              <p className="text-brand-text/80 leading-relaxed">
                M.A.M. College of Engineering,<br />
                Trichy-Chennai Trunk Road,<br />
                Siruganur, Tiruchirappalli - 621 105.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-6 items-start">
            <div className="w-12 h-12 bg-brand-secondary/20 text-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-dark mb-2">Phone</h3>
              <p className="text-brand-text/80 leading-relaxed">
                +91 7305092313<br />
                +91 8015211313
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-6 items-start">
            <div className="w-12 h-12 bg-brand-secondary/20 text-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-dark mb-2">Email</h3>
              <p className="text-brand-text/80 leading-relaxed">
                info@mamce.org<br />
                admissions@mamce.org
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
          <h2 className="text-2xl font-bold text-text-dark mb-6 border-b-2 border-brand-secondary/50 pb-2 inline-block">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-text/90 mb-1">Full Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-text/90 mb-1">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-text/90 mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
