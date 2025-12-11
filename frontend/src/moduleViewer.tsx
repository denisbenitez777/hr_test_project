
import React from "react";

export default function ModuleViewer({module}){
  const [items, setItems] = React.useState([]);
  const [input, setInput] = React.useState({});

  const load = async () => {
    const r = await fetch(`http://localhost:3000/api/${module}`);
    setItems(await r.json());
  };

  const send = async () => {
    await fetch(`http://localhost:3000/api/${module}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(input)
    });
    setInput({});
    load();
  };

  React.useEffect(()=>{ load(); }, [module]);

  return (
    <div>
      <h2>{module.toUpperCase()}</h2>

      <h3>Crear {module}</h3>
      <textarea 
        rows={5}
        style={{width:"100%"}}
        placeholder="JSON data"
        value={JSON.stringify(input,null,2)}
        onChange={e=>{
          try{ setInput(JSON.parse(e.target.value)); }
          catch{}
        }}
      />

      <button style={{marginTop:10}} onClick={send}>Enviar</button>

      <h3>Listado</h3>
      <pre>{JSON.stringify(items,null,2)}</pre>
    </div>
  );
}
