import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import React from 'react'
import {useNavigate} from 'react-router-dom';

function Search() {
    const [input, setInput] = useState("");
    const  navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    }
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input 
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                value={input}
                placeholder="search recipes" 
            />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 2rem 3rem;
    position: relative;
    
    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        font-size: 1.5rem;
        color: white;
        padding: 1rem  3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search