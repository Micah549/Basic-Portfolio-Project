
import JSON_File from '../../txt.json';
import React, { useEffect, useState } from "react";


export default function Main() {

    const [arrState, setArr] = useState([]);

  useEffect(() => { startup(); }, []);

  function startup() {
    let arr = [];
    //iterating over data arrays map, forEach
    JSON_File.map((entry, index) => {
      console.log(index, "entry", entry);
      arr.push({ name: entry.name, email: entry.email, content: entry.body });
      return arr;
    });

    setArr(arr);
  }
    
    return (
        <>
      <h1>POSTS BY PEOPLE</h1>

      <ol>
        {arrState.map((entry) => {
          return (
            <li>
              <h3>{entry.name}</h3>
              <h4>{entry.email}</h4>
              <p>{entry.content}</p>
            </li>
          );
        })}
      </ol>
    </>
      );
}


    