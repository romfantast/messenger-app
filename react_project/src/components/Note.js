import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import env from "../env.json";
import Spinner from "./Spinner";

function Note() {
    let {noteUrl} = useParams()
    const [noteText, setNoteText] = useState('')
    const [lineClass, setLineClass] = useState('hide')
    const [formClass, setFormClass] = useState('hide') // hide url
    const [errorClass, setErrorClass] = useState('hide') // hide url
    const [spinner, setSpinner] = useState('')

    useEffect(() => {

        if (noteUrl !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({"url": noteUrl})
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    if (response.result) {
                        setNoteText(response.note)
                        setLineClass('')
                        setFormClass('hide')
                        setErrorClass('hide')
                        setSpinner('hide')
                    } else if (!response.result) {
                        setLineClass('hide')
                        setFormClass('hide')
                        setErrorClass('')
                        setSpinner('hide')
                    }
                })
        } else {
            setLineClass('hide')
            setFormClass('')
            setErrorClass('hide')
            setSpinner('hide')
        }
    }, [noteUrl])

    function getNote(e) {
        e.preventDefault();
        let url = e.target.elements.url.value
        url = url.trim()
        if (url === '') {
            alert('Enter the field')
            return false
        }
        noteUrl = url
        window.location.href = env.url + '/' + url
    }

    function searchNote() {
        window.location.href = env.url
    }

    return (
        <div>
            <div className={lineClass} style={{width: '500px', marginTop: '50px'}}>
                <div className='alert alert-success'>
                    <h4 style={{marginBottom: '10px'}}>Note url: {noteUrl}</h4>
                    <p>{noteText}</p>
                    <hr/>
                    <p className='little-att'><b>Attention!</b> Copy the link. After reload the note will delete!</p>
                </div>
                <div style={{textAlign: 'right'}}>
                    <button style={{marginTop: '20px'}} className='btn btn-primary' onClick={searchNote}>Look for
                        another notes
                    </button>
                </div>
            </div>
            {(spinner === '') ? <Spinner/> : (
                <div className={errorClass} style={{maxWidth: '500px'}}>
                    <p className='alert alert-danger' style={{width: '500px', marginTop: '50px'}}>
                        Something was wrong, the hash not found...
                    </p>
                    <p style={{textAlign: 'right'}}>
                        <button style={{marginTop: '20px'}} className='btn btn-primary' onClick={searchNote}>Look for
                            another notes
                        </button>
                    </p>
                </div>
            )}
            <div className='container-fluid'>
                <div className={formClass} style={{width: '500px', marginTop: '50px'}}>
                    <div className='size-block'>
                        <form action="" onSubmit={getNote}>
                            <label htmlFor="url" style={{marginBottom: '10px'}}>Enter here the message's hash</label>
                            <input type="text" name='url' id='url' className='form-control'/>
                            <button type='submit' className='btn btn-primary' style={{marginTop: '20px'}}>Search Note
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Note;