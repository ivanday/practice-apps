import React, {useState, useEffect} from "react";
import WordItem from './WordItem.jsx';

function WordList({words}) {
  return (
    <div>
      {words.map((word) => {
        return (
          <div>
            <WordItem word={word} />
          </div>
        )
      })}
    </div>
  )
}

export default WordList;