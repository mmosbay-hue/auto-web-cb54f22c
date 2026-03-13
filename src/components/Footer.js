import React from 'react';
import { Github, Linkedin, Twitter, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-indigo-400" />
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Alex Doe. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Github size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Twitter size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}