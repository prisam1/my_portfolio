import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
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
    <div className="flex items-center bg-lime-600 lg:h-[80vh] h-[91vh] lg:px-10 lg:py-0 px-[16px] py-[16px]">
      <div className=" flex justify-between  bg-white lg:flex-row flex-col rounded-md">
      
        <form className="lg:shadow-xl shadow-sm lg:p-8 p-4 lg:pt-10 max-w-md w-full" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Send A Message
          </h2>
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
        <div className="lg:p-10 p-3">
          <h1 className="text-black lg:text-2xl lg:mt-0 mt-1 font-bold border-b-2 border-blue-700">
            Get in Touch
          </h1>
          <h1 className="lg:mt-10 mt-4 font-sans lg:text-lg md:text-xs lg:font-semibold">
            Whether you want to get in touch, talk about a project
            collaboration, or just say hi, I'd love to hear from you. Simply
            fill the from and send me an email.
          </h1>
        </div>
      </div>
    </div>
  );
};
