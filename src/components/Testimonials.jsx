import styled from "styled-components";

const TestimonialsContainer = styled.section`
  padding: 100px;
  background-image: url("https://appinventiv.com/wp-content/uploads/2020/06/A-pocket-guide-to-healthcare-compliances-01-scaled.webp");
  background-size: cover;
  color: white;
  text-align: center;
`;

const Testimonial = styled.div`
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
  animation: fadeIn 2s ease-in-out;
`;

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <h2>What Our Students Say</h2>
      <Testimonial>
        "This course helped me pass OET with flying colors!"
      </Testimonial>
      <Testimonial>
        "Great content and even better support from tutors."
      </Testimonial>
    </TestimonialsContainer>
  );
};

export default Testimonials;
