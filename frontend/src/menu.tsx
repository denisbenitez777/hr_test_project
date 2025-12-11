
import React from "react";
import ModuleViewer from "./moduleViewer";

export default function Menu(){
  const [module, setModule] = React.useState("employees");

  const modules = [
    "employees",
    "sectors",
    "attendance",
    "documents",
    "vacations",
    "trainings",
    "goals"
  ];

  return (
    <div style={{padding:20,fontFamily:"Arial"}}>
      <h1>HR Frontend</h1>
      <div style={{display:"flex", gap:10, marginBottom:20}}>
        {modules.map(m=>(
          <button key={m} onClick={()=>setModule(m)}>
            {m}
          </button>
        ))}
      </div>
      <ModuleViewer module={module} />
    </div>
  );
}
