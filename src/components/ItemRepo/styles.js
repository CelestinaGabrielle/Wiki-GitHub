import styled from "styled-components";

export const ItemContainer = styled.div`
          width: 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 15px;
          

    h3 {
        font-size: 34px;
        color: #FAFAFA;
    }

    p {
        font-size: 18px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    button {
      font-size: 16px;
      background-color: #000000;
      color: #FAFAFA;
      width: 250px;
      height: 40px;
      border-radius: 2px;
      border: 1px solid #FAFAFA;
      border-radius: 20px;
      margin-left: 50px;
      margin-right: 50px;
    }
    
    button.view-repo {
     &: hover {
        background-color: #22C55E;
        cursor: pointer;}
    }

    button.remove{
     &: hover {
        background-color: #EF4444;
        cursor: pointer;}
    }
`
