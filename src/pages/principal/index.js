import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import {Container} from './style';

function Principal(){

    

    const [notes, setNote] = useState([]);
    const [newNote, setNewNote] = useState('');

    async function handleAdd(){
        
        const {data} = await api.post('/create', {text: newNote});
        console.log(data);
        setNote([...notes, data]);
        setNewNote('');

    }

    async function handleDelete(id) {
        await api.delete(`/deletar/${id}`);
        const object = notes.find((note) => {if(note._id === id){
            return note;
        }else{
            return console.log('nota não encontrada');
        }})

        const novoEstado = [...notes];
        novoEstado.splice(object, 1)

        setNote(novoEstado);
        
        
    }

    async function handleCreate() {
        const storageNotes = await (await api.get('/all')).data;

        if(storageNotes){
            await setNote(storageNotes);

         }

        
    }

    useEffect (() => {

         handleCreate();

    }, [])


    return(
        <>
        <Container>
            <div className="pageHeader">
                <h1>TodoList</h1>
            </div>
            <div className="digitNotes">
                <input maxLength={600} value={newNote} onChange={e => setNewNote(e.target.value)} type='text' placeholder='Digite ToDo (Máximo de 600 caracteres)'></input>
                <button className="buttonInput" type='button' onClick={handleAdd}>Adc</button>
            </div>
            
            <ul >
                {notes.map(
                    n => 
                    <div className="note"  key={n._id}><li key={n._id}>{n.text}</li>
                    <button className="buttonDelete" type='button' onClick={() => {handleDelete(n._id)}}>Del</button>
                    </div>)
                }

            </ul>
        </Container>
    
        </>
    )
}

export default Principal;