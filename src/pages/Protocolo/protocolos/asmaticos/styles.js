import styled from "styled-components";

export const Container = styled.div`
  display: flex; /* or inline-flex */
`;

export const Box = styled.div`
  padding: 3%;
  .divw {
    display: flex;
    flex-direction: row;

    align-items: center;
}
.whatsapp {
  background-color: #310204;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 5px;
  text-align: center;
  text-decoration: none;
  margin-bottom: 5px;
}
`;
export const Back = styled.div`
  display: flex; /* or inline-flex */
  flex-direction: row;
  margin: 20px;
  border-radius: 15px;
  background: white;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
