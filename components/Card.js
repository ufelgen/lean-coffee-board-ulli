import styled from "styled-components";
import { CiCircleRemove } from "react-icons/ci";

export default function Card({ name, thoughts, id, onRemoveCard }) {
  return (
    <StyledCard>
      <h4>{name} is thinking about...</h4>
      <p>{thoughts}</p>
      <button onClick={() => onRemoveCard(id)}>
        <CiCircleRemove />
      </button>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background-color: lightgrey;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
