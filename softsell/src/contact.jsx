import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaPaperPlane } from "react-icons/fa";
import ExampleImage from "./assets/img2.jpg";

// Animations
const shiny = keyframes`
  0% { border-color: rgba(255, 255, 255, 0.2); }
  50% { border-color: rgba(255, 255, 255, 0.6); }
  100% { border-color: rgba(255, 255, 255, 0.2); }
`;

const zoomIn = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.1); }
`;

// Styled Components
const Background = styled.div`
  width: 1360px;
  height: 700px;
  background:rgb(14, 112, 98);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-left: -35px;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  left: 200px;
  top: 55%;
  transform: translateY(-50%);
  width: 450px;
  height: 380px;
  border-radius: 30px;
  overflow: hidden;
  background: rgba(107, 22, 187, 0.05);
  border: 1px solid rgba(100, 9, 9, 0.2);
  backdrop-filter: blur(30px);
  box-shadow: 0 20px 40px rgba(255, 255, 255, 0.3), 0 30px 30px rgba(255,255,255,0.05);
  z-index: 3;

  &:hover img {
    animation: ${zoomIn} 0.5s forwards;
  }
`;

const StyledImage = styled.img`
  width: 450px;
  height: 100%;
  object-fit: cover;
  filter: brightness(1.2) contrast(1.2);
  transition: transform 0.5s ease;
`;

const FormCard = styled.div`
  width: 500px;
  padding: 40px;
  background: #1c1c1c;
  color: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;
  left: 200px;
  top: 30px;

`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: 700;
  font-family: Montaga;
  position: absolute;
  left: 800px;
  top: -20px;
  color: white;
  opacity: 0.2;
  z-index: 0;
`;

const Input = styled.input`
  width: 90%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  outline: none;
  margin-left: 50px;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  animation: ${shiny} 2s infinite;

  &::placeholder {
    color: #bbb;
  }
`;

const Select = styled.select`
  width: 95%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  outline: none;
  margin-left: 50px;
  backdrop-filter: blur(4px);
  animation: ${shiny} 2s infinite;

  option {
    color: black;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  height: 80px;
  resize: none;
  outline: none;
  margin-left: 50px;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  animation: ${shiny} 2s infinite;

  &::placeholder {
    color: #bbb;
  }
`;

const SubmitButton = styled.button`
  margin-top: 15px;
  width: 40%;
  padding: 12px 16px;
  background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(220,220,220,0.85));
  color: #1c1c1c;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: inset 0 0 20px rgba(255,255,255,0.3), 0 10px 30px rgba(255,255,255,0.1);
  animation: ${shiny} 2s infinite;

  &:hover {
    transform: scale(1.07);
    background: linear-gradient(145deg, rgba(255,255,255,1), rgba(230,230,230,0.95));
  }
`;

// Component Logic
const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isValid = () =>
    formData.name &&
    formData.email.includes("@") &&
    formData.company &&
    formData.license &&
    formData.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      alert("Message sent successfully!");
      // You could also clear the form here
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <Background>
      <StyledImageWrapper>
        <StyledImage src={ExampleImage} alt="decor" />
      </StyledImageWrapper>

      <Title>LEAD</Title>

      <FormCard>
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="company"
            type="text"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
          />
          <Select
            name="license"
            value={formData.license}
            onChange={handleChange}
          >
            <option value="">Select License Type</option>
            <option value="free">Free</option>
            <option value="basic">Basic</option>
            <option value="enterprise">Enterprise</option>
          </Select>
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <SubmitButton type="submit">
            Send Message <FaPaperPlane />
          </SubmitButton>
        </form>
      </FormCard>
    </Background>
  );
};

export default LeadForm;
