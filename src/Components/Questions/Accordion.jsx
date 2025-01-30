import React from 'react';
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

const Accordion = ({title, desc, active, setActive}) => {

  return (
    <div className='accordionContainer' data-aos='fade-up'>
        <span className='title flex'>
            {title}
            <span onClick={()=>setActive(title)}>
                {active === title 
                  ? <FaCircleArrowDown className='icon'/>
                  : <FaCircleArrowUp className='icon'/>}
            </span>
        </span>
        <p className={(active === title ? 'show' : '') + ' description'}>
            {desc}
        </p>
    </div>
  )
};

export default Accordion;