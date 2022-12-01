import styled from "styled-components";

export default function Card() {
  return (
    <StyledCard>
      <h4>Ulli is thinking about...</h4>
      <p>coffee</p>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background-color: lightgrey;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
