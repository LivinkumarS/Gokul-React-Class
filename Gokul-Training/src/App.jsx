import React, { useEffect, useState } from "react";
import Student from "./Student";

export default function App() {
  const [students, setStudents] = useState([
    { name: "Gokul", isPresent: true },
    { name: "Tharick", isPresent: true },
    { name: "Livin", isPresent: false },
  ]);

  const [keyword, setKeyWord] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    
    if(keyword==="all"){


    }
    else if(keyword==="present"){


    }else{

      
    }

  }, [keyword]);

  return (
    <div>
      <button>Present</button>
      <button>Absent</button>
      <button>All</button>

      {students.map((ele, ind) => {
        return <Student Name={ele.name} IsPresent={ele.isPresent} />;
      })}

      <button
        onClick={() => {
          setStudents([]);
        }}
      >
        click
      </button>
    </div>
  );
}
