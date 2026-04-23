import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { portfolioData } from "../mock";
import luffy from '../assets/images/monkeydluffy.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_q60ypoo",
        "template_osxnrks",
        form.current,
        "6XlxIrBnJBYI1hA_X",
      );

      console.log("Email sent!", result.text);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log("Error:", error.text);
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Let's Talk</h3>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 group-hover:border-red-500/50 transition-all duration-300">
                  <Mail className="text-orange-400" size={20} />
                </div>
                <div>
                  <h4 className="text-black font-semibold mb-1">Email</h4>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="text-gray-600 hover:text-orange-400 transition-colors duration-300"
                  >
                    {portfolioData.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 group"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                  <MapPin className="text-orange-400" size={20} />
                </div>
                <div>
                  <h4 className="text-black font-semibold mb-1">Location</h4>
                  <p className="text-gray-600">{portfolioData.location}</p>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-black/5 backdrop-blur-sm border border-black/10 rounded-2xl p-6">
                <p className="text-gray-700 italic">
                  “No matter how hard or impossible it is, never lose sight of your goal.” 
                </p>
                <div className="flex items-center">
                <p className="text-orange-400 mt-2 font-semibold px-4">
                  ~ Monkey D. Luffy
                </p>
                <img src={luffy} alt="Monkey D. Luffy" className="size-12 rounded-full object-cover"/>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
