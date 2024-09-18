import styled from "styled-components";
import { motion } from "framer-motion";

const TimelineContainer = styled.section`
  padding: 100px;
  background-color: #e9f7fa;
  text-align: center;
`;

const Module = styled(motion.div)`
  margin: 20px 0;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: inline-block;
  width: 70%;
`;

const Timeline = () => {
  return (
    <TimelineContainer>
      <h2>Course Structure</h2>
      <Module
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Week 1: Listening - Practice audio comprehension.
      </Module>
      <Module
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Week 2: Reading - Improve your medical reading skills.
      </Module>
      <Module
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Week 3: Writing - Learn to write referral letters.
      </Module>
      <Module
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Week 4: Speaking - Practice one-on-one communication.
      </Module>
    </TimelineContainer>
  );
};

export default Timeline;
