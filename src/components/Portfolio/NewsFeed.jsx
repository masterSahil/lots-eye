import React from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    title: "SEO Tips for Beginners",
    date: "July 17, 2025",
    description:
      "Discover the basics of SEO and how to optimize your website to rank higher on search engines.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Social Media Strategies for 2025",
    date: "July 10, 2025",
    description:
      "Learn the most effective social media marketing strategies to boost your brand presence this year.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Content Marketing Best Practices",
    date: "July 1, 2025",
    description:
      "Create engaging content that drives traffic, builds trust, and converts visitors into customers.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

const NewsFeed = () => {
  return (
    <section id="news" className="py-20 px-4 md:px-12 lg:px-24 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
      >
        Digital Marketing News
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <a
                href={item.link}
                className="text-sm font-semibold text-gray-900 hover:text-blue-600 inline-flex items-center gap-1"
              >
                Read More <span aria-hidden>↗</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;