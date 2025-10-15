import { useState } from "react";
import { useEffect } from "react";

export default function Evento() {
        // USE STATE
    // Task 1: Inserimento
    const NOME_LISTA = "Eventi"
    const NOME_LISTA_PREFERITI = "Preferiti"
    const[eventi, setEventi] = useState(()=> {
        const eventiPresenti = localStorage.getItem(NOME_LISTA);
        return eventiPresenti ? JSON.parse(eventiPresenti) : [];
    });

    const [preferiti, setPreferiti] = useState(()=>{
        const eventiPreferiti = localStorage.getItem(NOME_LISTA_PREFERITI)
        return eventiPreferiti ? JSON.parse(eventiPreferiti) : [];
    });

    const [titolo, setTitolo] = useState("");
    const [luogo, setLuogo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [prezzo, setPrezzo] = useState("");
    const [data, setData] = useState("");
    const [modalitaModifica, setModalitaModifica] = useState(false);
    const [modalitaPreferiti,setmodalitaPreferiti] = useState(false)
    const [indiceModifica, setIndiceModifica] = useState("");

    // USE EFFECT
    useEffect(() => {
        localStorage.setItem(NOME_LISTA, JSON.stringify(eventi));
    },[eventi]);

    useEffect(() => {
        localStorage.setItem(NOME_LISTA_PREFERITI, JSON.stringify(preferiti));
    },[preferiti]);

    function aggiungiEvento() {
        if(!titolo.trim() || !luogo.trim() || !categoria.trim() || !prezzo || !data.trim() ) return;
        const nuovoEvento = {
            titolo: titolo.trim(),
            luogo: luogo.trim(),
            categoria: categoria.trim(),
            prezzo: Number(prezzo),
            data: data.trim(),
        }

            if(modalitaModifica) {
            setEventi(arrayPrecedentementeSalvato =>
                arrayPrecedentementeSalvato.map((evento,indice) => (indice === indiceModifica) ? nuovoEvento : evento)
            );
            setModalitaModifica(false);
        } else {
            setEventi(arrayPrecedentementeSalvato => [...arrayPrecedentementeSalvato, nuovoEvento]);
        }

        // svuoto i campi di input
        setTitolo("");
        setLuogo("");
        setCategoria("");
        setPrezzo("");
        setData("");

    };

    function eliminaEvento(index) {
        if(window.confirm("Sei sicuro di eliminare questo utente?")) {
            setEventi(arrayPrecedentementeSalvato => arrayPrecedentementeSalvato.filter((_,i) => i !== index));
        }
    }

    function modificaEvento(indice) {
        setModalitaModifica(true);
        console.log(modalitaModifica);
        const eventoDaModificare = eventi[indice];
        setTitolo(eventoDaModificare.titolo);
        setLuogo(eventoDaModificare.luogo);
        setCategoria(eventoDaModificare.categoria);
        setPrezzo(eventoDaModificare.prezzo);
        setData(eventoDaModificare.data);
        setIndiceModifica(indice);
    }

    
    function aggiungiPreferiti(){
                if(!titolo.trim() || !luogo.trim() || !categoria.trim() || !prezzo || !data.trim() ) return;
        const nuovoEventoPREFERITO = {
            titolo: titolo.trim(),
            luogo: luogo.trim(),
            categoria: categoria.trim(),
            prezzo: Number(prezzo),
            data: data.trim(),
            // setPreferiti(arrayPrecedentementeSalvato => [...arrayPrecedentementeSalvato, nuovoEventoPREFERITO]);

        }
    }
        


        return(
            <div>
                <input type="text" value={titolo} placeholder="Inserisci il titolo" onChange={(e)=> setTitolo(e.target.value)} required />
                <input type="text" value={luogo} placeholder="Inserisci il luogo" onChange={(e)=> setLuogo(e.target.value)} required  />
                <input type="text" value={categoria} placeholder="Inserisci la categoria" onChange={(e)=> setCategoria(e.target.value)} required />
                <input type="number" value={prezzo} placeholder="Inserisci il prezzo" onChange={(e)=> setPrezzo(e.target.value)} required />
                <input type="text" value={data} placeholder="Inserisci la data" onChange={(e)=> setData(e.target.value)} required />
                
                {modalitaModifica ?
                    <button onClick={aggiungiEvento}>Aggiorna evento</button>
                :
                    <button onClick={aggiungiEvento}>Aggiungi evento</button>
                }


                <table border="1" style={{"padding":"10px"}}>
                <thead>
                    <tr>
                        <th>Titolo</th>
                        <th>Luogo</th>
                        <th>Categoria</th>
                        <th>Prezzo</th>
                        <th>Data</th>
                        <th>Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {eventi.map((evento,indice) => (
                        <tr key={indice}>
                            <td>{evento.titolo}</td>
                            <td>{evento.luogo}</td>
                            <td>{evento.categoria}</td>
                            <td>{evento.prezzo}</td>
                            <td>{evento.data}</td>
                            <td>
                                <button onClick={() => modificaEvento(indice)}>Modifica</button>
                                <button onClick={() => eliminaEvento(indice)}>Elimina</button>
                                <button onClick={() => aggiungiPreferiti(indice)}>Preferiti</button>

                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <thead>
                <tr>
                    <th>Titolo</th>
                        <th>Luogo</th>
                        <th>Categoria</th>
                        <th>Prezzo</th>
                        <th>Data</th>
                        <th>Azioni</th>
                </tr>
            </thead>
            <tbody>
                                 {preferiti.map((preferito,indice) => (
                        <tr key={indice}>
                            <td>{preferito.titolo}</td>
                            <td>{preferito.luogo}</td>
                            <td>{preferito.categoria}</td>
                            <td>{preferito.prezzo}</td>
                            <td>{preferito.data}</td>
                            </tr>

                            ))} 
            </tbody>
            </div>
        ); 

    
}