import React, { useEffect, useState } from 'react';
import "./WordSpace.css";

export default function WordSpace(props) {

    

    return (
        <div className='word_space'>
            <div className='word_space_header'>
                <h1>Word</h1>
                <h1>Meaning</h1>
            </div>
            <div className='word_space_body'>
            {
                props.word && props.word.map((word , idx) => {
                    return (
                        <div onDoubleClick={()=>props.handleShowUpdateModal(word)} key={idx} className='word_space_item'>
                            <div className='word_space_item_word'>{idx+1}- {word.word}</div>
                            <div className='word_space_item_translation'>{word.translation}</div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
