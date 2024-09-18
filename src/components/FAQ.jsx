import { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.section`
  padding: 50px;
  background-color: #f1f1f1;
`;

const Question = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: #007bff;
  color: white;
  margin: 10px 0;
`;

const Answer = styled.div`
  padding: 10px;
  background-color: white;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const FAQ = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <FAQContainer>
      <h2>Frequently Asked Questions</h2>
      <Question onClick={toggleAnswer}>What is the OET exam?</Question>
      <Answer show={showAnswer}>
        The OET is an English test for healthcare professionals.
      </Answer>
    </FAQContainer>
  );
};

export default FAQ;
