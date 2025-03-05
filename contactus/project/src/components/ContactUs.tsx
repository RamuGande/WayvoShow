import { useState } from "react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  PhoneIcon, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle 
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const faqItems = [
    { question: "How can I cancel my booking?", answer: "You can cancel your booking up to 4 hours before showtime through your account dashboard." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and gift cards." },
    { question: "How do I get my e-tickets?", answer: "E-tickets are sent to your email and are available in your account under 'My Bookings'." },
    { question: "Can I change my seat after booking?", answer: "Yes, you can change your seat up to 2 hours before showtime, subject to availability." },
    { question: "Do you offer group discounts?", answer: "Yes, we offer special rates for groups of 10 or more. Contact our customer service team for details." }
  ];

  return (
    <div className="min-h-screen bg-[#00baf2] py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Have questions about your booking or need assistance? We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="bg-white text-black border border-gray-200 shadow-md">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription className="text-gray-600">
                Reach out to us through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-5 w-5 text-[#00baf2]" />
                <div>
                  <h3 className="font-medium">Phone Support</h3>
                  <p className="text-sm">+1 (800) 123-4567</p>
                  <p className="text-sm">+1 (800) 765-4321</p>
                </div>
              </div>
              
              {/* Updated Email Section with Gmail Redirect */}
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#00baf2]" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm">
                    <a href="mailto:support@moviebookings.com" className="text-[#00baf2] underline hover:text-blue-700">
                      support@moviebookings.com
                    </a>
                  </p>
                  <p className="text-sm">
                    <a href="mailto:info@moviebookings.com" className="text-[#00baf2] underline hover:text-blue-700">
                      info@moviebookings.com
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Updated Address Section with Google Maps Redirect */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#00baf2]" />
                <div>
                  <h3 className="font-medium">Main Office</h3>
                  <p className="text-sm">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=123+Cinema+Street,+Hollywood,+CA+90028" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#00baf2] underline hover:text-blue-700"
                    >
                      123 Cinema Street, Suite 100<br />
                      Hollywood, CA 90028
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-[#00baf2]" />
                <div>
                  <h3 className="font-medium">Hours of Operation</h3>
                  <p className="text-sm">Monday - Friday: 9AM - 8PM</p>
                  <p className="text-sm">Saturday - Sunday: 10AM - 6PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Accordion */}
          <Card className="bg-white text-black border border-gray-200 shadow-md">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium bg-gray-100 px-4 py-2 rounded-md">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 px-4 py-3 bg-gray-50 rounded-md">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="bg-white text-black border border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription className="text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-xl font-medium">Thank You!</h3>
                <p className="text-center text-gray-600 mt-2">
                  Your message has been sent successfully. We'll respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="border-gray-300" />
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="border-gray-300" />
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="border-gray-300" />
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={4} required className="border-gray-300" />
                <Button type="submit" className="w-full bg-[#00baf2] text-white hover:bg-[#0099d6]">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;

export { ContactUs }