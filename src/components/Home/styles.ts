import styled from "styled-components";

export const Preload = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
`

export const Container = styled.div`
  width: 600px;
  padding: 25px;
  display: flex;
  margin: 150px auto;
  background: #fff;
  height: auto;
  border-radius: 0.30rem;
  flex-direction: column;
  box-shadow: 3px 2px 7px 3px rgba(0,0,0,0.1);
  
  h2{
    font-size: 1.5rem;
    margin: 0.5rem 0;
    
  }
  

  h5{
    margin: 0.7rem 0 0;
    font-size: 1rem;
    color: var(--textColor);
  }
  
  p{
    color: var(--default);
  }
  

  
  button{
    background-color: var(--success);
    padding: 0.8rem 0;
    transition: filter 0.2s;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    
    &:hover{
      filter: brightness(0.9);
    }
   
    
  }
  
`