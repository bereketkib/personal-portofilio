"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BsSend, BsClock, BsGeoAlt } from "react-icons/bs";
import { FiMail, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/bereketkib",
      description: "Check out my code repositories",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bereket-jenay-2107821b8/",
      description: "Connect with me professionally",
    },
    {
      icon: FiMail,
      label: "Email",
      href: "mailto:bekibreab@gmail.com",
      description: "Send me an email directly",
    },
    {
      icon: FiPhone,
      label: "Phone",
      href: "tel:+971501234567",
      description: "Call or WhatsApp me",
    },
  ];

  const contactInfo = [
    {
      icon: BsGeoAlt,
      title: "Location",
      details: "Dubai, United Arab Emirates",
    },
    {
      icon: BsClock,
      title: "Available Hours",
      details: "9:00 AM - 6:00 PM GST",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Add your form submission logic here
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated delay
      console.log(formData);
      // Reset form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen pb-24 pt-64 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Animated background elements with improved visibility */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute -inset-[100px] opacity-[0.15] dark:opacity-[0.08]"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-blue-500 dark:border-blue-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Section with enhanced contrast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 space-y-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 dark:from-blue-400/20 dark:to-cyan-400/20 flex items-center justify-center ring-2 ring-blue-500/20 dark:ring-blue-400/20"
            >
              <HiOutlineSparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Let&apos;s Create Something{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Amazing Together
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to chat? I&apos;m always
              excited to connect with fellow developers and potential
              collaborators!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form Section with improved contrast and focus states */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* ... existing form fields with updated styles ... */}
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Name Input */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                          required
                        />
                      </div>
                      {/* Email Input */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                          required
                        />
                      </div>
                    </div>
                    {/* Subject Input */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-gray-500"
                        required
                      />
                    </div>
                    {/* Message Input */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white transition-all duration-200 disabled:opacity-70"
                  >
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity" />
                    <span className="relative flex items-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <BsSend
                        className={`w-4 h-4 transition-transform ${
                          isSubmitting ? "" : "group-hover:translate-x-1"
                        }`}
                      />
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links Section with improved visibility */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 dark:from-blue-400/20 dark:to-cyan-400/20">
                        <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links with improved hover states */}
              <div className="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Connect with me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50/80 dark:bg-gray-700/80 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-cyan-600/10 dark:hover:from-blue-400/10 dark:hover:to-cyan-400/10 transition-all"
                      whileHover={{ x: 8 }}
                    >
                      <span className="p-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 dark:from-blue-400/20 dark:to-cyan-400/20">
                        <link.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </span>
                      <div>
                        <span className="block font-medium text-gray-900 dark:text-white">
                          {link.label}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {link.description}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section with improved contrast */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-px rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              <div className="px-6 py-2 rounded-full bg-white dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-300">
                Looking forward to collaborating with you!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
