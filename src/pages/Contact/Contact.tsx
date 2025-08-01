import { useState } from "react";
import emailjs from "emailjs-com";
import { ScrollAnimation } from "../../components/ScrollAnimation";
import StarryNetworkBackground from "../../components/StarBackground";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("All fields are required!");
      return;
    }
    // console.log("Form Data Sent to EmailJS:", formData);

    emailjs
      .send(
        "service_5gvfxpi",
        "template_t03iyof",
        formData,
        "MJYnYNVAmxQAxfPL4"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          //  console.error("Failed to send message:", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="relative flex items-center justify-center bg-[#030014] min-h-screen lg:px-10 lg:py-0 px-[16px] py-[16px]">

      <div className="absolute z-0 h-full w-full">
        <StarryNetworkBackground />
      </div>

      <ScrollAnimation direction="up">
        <div className="relative z-10 flex justify-between border border-gray-400  lg:flex-row flex-col rounded-xl">
          <form className="lg:shadow-xl shadow-sm lg:p-8 p-4 lg:pt-10 w-full max-w-sm sm:max-w-lg lg:max-w-2xl" onSubmit={handleSubmit}>
            <h2 className="text-white text-2xl font-bold mb-6 text-center">
              Send A Message
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full mb-3 p-4 rounded-xl border font-robotoMono border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mb-3 p-4 rounded-xl border font-robotoMono border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full mb-3 p-4 rounded-xl border font-robotoMono border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full mb-3 p-4 rounded-xl h-64 border resize-none font-robotoMono border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-4 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
          <div className="lg:p-10 p-3">
            <h1 className="text-white lg:text-2xl lg:mt-0 mt-1 font-bold border-b-2 border-blue-700">
              Get in Touch
            </h1>
            <h1 className="text-white lg:mt-10 mt-4 font-sans lg:text-lg md:text-xs lg:font-semibold">
              Whether you want to get in touch, talk about a project
              collaboration, or just say hi, I'd love to hear from you. Simply
              fill the from and send me an email.
            </h1>
          </div>
        </div>

        <h1 className="mt-20 text-white text-center text-xl font-semibold">Made by Pritam Kumar Samaddar with ❤️</h1>

      </ScrollAnimation>
    </div>
  );
};
