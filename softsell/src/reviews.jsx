import React, { useState } from "react";
import styled from "styled-components";

import john from "./assets/john.jpg";
import jane from "./assets/jane.jpg";
import alice from "./assets/alice.jpg";

// Styled Components
const Container = styled.div`
  background-color:rgb(4, 24, 53);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 1320px;
  margin-left: -35px;
  padding: 60px 20px;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  color: white;
  margin-bottom: 20px;
  font-family: "Monatga", sans-serif;
  margin-top: -50px;
`;

const Description = styled.p`
  font-size: 22px;
  color: #d1d5db;
  margin-bottom: 50px;
  max-width: 1100px;
  text-align: center;
  font-family: "Montaga", sans-serif;
`;

const CardWrapper = styled.div`
  position: relative;
  width: 1100px;
  height: 330px;
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.4s ease, z-index 0.4s;

  ${(props) =>
    props.isActive
      ? `z-index: 10; transform: scale(1);`
      : `z-index: 0; transform: scale(0.9) translate(30px, 30px);`}
`;

const ImageSection = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid rgb(4, 12, 53);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const InfoSection = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -30px;
`;

const ReviewerName = styled.h3`
  font-size: 36px;
  color: rgb(7, 27, 141);
  margin-bottom: 4px;
`;

const ReviewerRole = styled.span`
  font-size: 20px;
  color: #475569;
  margin-bottom: 10px;
`;

const Review = styled.p`
  font-size: 18px;
  color: #333;
`;

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Tech Corp",
    review:
      "This service is amazing! It helped us improve our workflow and boost productivity.",
    image: john,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Director, MarketPro",
    review:
      "Highly recommend! Their customer support is top-notch, and the platform is very user-friendly.",
    image: jane,
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Product Manager, InnoTech",
    review:
      "The quality of service and the level of customization is just what we were looking for.",
    image: alice,
  },
];

const TestimonialCard = () => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Container>
      <Title>Customer Testimonials</Title>
      <Description>
        Hear from our valued clients about how our services made a difference in their work and success.
      </Description>
      <CardWrapper>
        {testimonials.map((testimonial, i) => (
          <Card
            key={testimonial.id}
            isActive={i === index}
            onClick={handleClick}
          >
            <ImageSection>
              <ProfileImage src={testimonial.image} alt={testimonial.name} />
            </ImageSection>
            <InfoSection>
              <ReviewerName>{testimonial.name}</ReviewerName>
              <ReviewerRole>{testimonial.role}</ReviewerRole>
              <Review>{testimonial.review}</Review>
            </InfoSection>
          </Card>
        ))}
      </CardWrapper>
    </Container>
  );
};

export default TestimonialCard;
