import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background: linear-gradient(135deg, #00b4db, #0083b0);
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  animation: fadeIn 2s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CTAButton = styled(motion.button)`
  padding: 15px 30px;
  font-size: 20px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ff8533;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>OET Preparation for Healthcare Professionals</Title>
      <p>
        Join the course to boost your career as a healthcare professional by
        mastering the OET exam.
      </p>
      <CTAButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Enroll Now
      </CTAButton>
    </HeaderContainer>
  );
};

export default Header;
