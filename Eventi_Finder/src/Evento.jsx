import { useState } from "react";
import { useEffect } from "react";

export default function Evento() {
        // USE STATE
    // Task 1: Inserimento
    const NOME_LISTA = "Eventi"
    const[eventi, setEventi] = useState(()=> {
        const eventiPresenti = localStorage.getItem(NOME_LISTA);
        return eventiPresenti ? JSON.parse(eventiPresenti) : [];
    });

    const [titolo, setTitolo] = useState("");
    const [luogo, setLuogo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [prezzo, setPrezzo] = useState("");
    const [data, setData] = useState("");

    // USE EFFECT
    useEffect(() => {
        localStorage.setItem(NOME_LISTA, JSON.stringify(eventi));
    },[eventi]);

    function aggiungiEvento() {
        if(!titolo.trim() || !luogo.trim() || !categoria.trim() || !prezzo || !data.trim() ) return;
        const nuovoEvento = {
            titolo: titolo.trim(),
            luogo: luogo.trim(),
            categoria: categoria.trim(),
            prezzo: Number(prezzo),
            data: data.trim(),
        };
    }

        return(
            <div>
                <input type="text" value={titolo} placeholder="Inserisci il titolo" onChange={(e)=> setTitolo(e.target.value)} required />
                 <input type="text" value={luogo} placeholder="Inserisci il luogo" onChange={(e)=> setLuogo(e.target.value)} required  />
                  <input type="text" value={categoria} placeholder="Inserisci la categoria" onChange={(e)=> setCategoria(e.target.value)} required />
                   <input type="number" value={prezzo} placeholder="Inserisci il prezzo" onChange={(e)=> setPrezzo(e.target.value)} required />
                    <input type="text" value={data} placeholder="Inserisci la data" onChange={(e)=> setData(e.target.value)} required />
            </div>
        ); 

    
}