import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesContainer = styled.section`
  padding: 100px;
  background-color: #f7f9fc;
  text-align: center;
`;

const Feature = styled.div`
  margin: 20px;
  font-size: 20px;
`;

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <FeaturesContainer>
      <h2 data-aos="fade-up">Course Features</h2>
      <Feature data-aos="fade-right">
        ✔ Comprehensive modules for all sections: Listening, Reading, Writing,
        and Speaking
      </Feature>
      <Feature data-aos="fade-left">✔ Expert guidance and feedback</Feature>
      <Feature data-aos="fade-right">✔ Flexible learning schedule</Feature>
      <Feature data-aos="fade-left">✔ Real-world practice scenarios</Feature>
    </FeaturesContainer>
  );
};

export default Features;
