import React from 'react'


const Accordion = (props) => {
    const [isShow, setShow] = React.useState(false);
    return (
        <div>
            <h2 onClick={(event)=>setShow(!isShow)} className="pointer" style={{'marginBottom': '1rem'}}>
                <div className={`plus-minus ${isShow? 'minus': null}`}></div> {props.question}
            </h2>
            <div className={`expanding ${isShow? 'show': null}`} style={{'margin': '0 0 0 2rem'}}>
                {props.children}
            </div>
        </div>
    )
}

export default Accordion;