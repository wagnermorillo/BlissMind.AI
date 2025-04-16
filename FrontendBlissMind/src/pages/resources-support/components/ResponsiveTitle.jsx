import styled from "styled-components";

const ResponsiveTitle = styled.p`
  color: #2e186a;
  font-weight: bold;
  font-size: 1.1rem;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
export default ResponsiveTitle;