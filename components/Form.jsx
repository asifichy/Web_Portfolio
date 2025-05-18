"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MailIcon, HomeIcon, PhoneIcon, PhoneCall, ArrowRightIcon, MessageSquare } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input 
          type="text" 
          placeholder="Name" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <User size={20} className="absolute right-6" />
      </div>
      {/* email */}
      <div className="relative flex items-center">
        <Input 
          type="email" 
          placeholder="Email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <MailIcon size={20} className="absolute right-6" />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type your message here..."
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <MessageSquare className="absolute right-6 top-4" />
      </div>
      <Button type="submit" className="flex items-center max-w-[166px]">
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
