import React from "react";
import { Restarunt } from "./Restarunt";

export const Restarunts = (props) => {
  
  return (
    <div className="container divider">
      <div className="cards">
        {
          props.restarunts.map(restarunts => (
            <Restarunt key={restarunts.id} restarunts={restarunts}/>
          ))
        }
       
       
      </div>
    </div>
  );
};
