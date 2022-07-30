import {useState} from "react";
import env from '../env.json'
import Spinner from "./Spinner";

function Create() {
    const [url, setUrl] = useState()
    const [lineClass, setLineClass] = useState('hide') // hide url
    const [formClass, setFormClass] = useState('') // hide url
    const [spinner, setSpinner] = useState('hide')

    const sendData = (obj) => {
        setFormClass('hide')
        setSpinner('')
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.result) {
                    setUrl(env.url + '/' + response.url)
                    setLineClass('')
                    setSpinner('hide')
                }
            })
    }

    const loadDataFromForm = (e) => {
        e.preventDefault()
        let note = e.target.elements.note.value
        note = note.trim()
        if (note === '') {
            alert('Enter the field')
            return false
        }
        sendData({'note': note})
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='form-floating'>
                    <div className='container-fluid'>
                        <form onSubmit={loadDataFromForm} className={formClass}
                              style={{width: '500px', marginTop: '50px'}}>
                            <label htmlFor="" style={{marginBottom: '10px'}}>Write a note</label>
                            <textarea maxLength="1000" placeholder="Leave a note here" className='form-control'
                                      name="note"
                                      id="floatingTextarea"></textarea>
                            <p style={{marginTop: '5px'}} className='little'><b>Alert!</b> Max length of note 1000
                                symbols
                            </p>
                            <button className='btn btn-primary' type='submit'>Create</button>
                        </form>
                        {(spinner === '') ? <Spinner/> :
                            (
                                <div className='container-fluid'>
                                    <div className='size-block'>
                                        <div className={lineClass} style={{marginTop: '50px'}}>
                                            <div style={{
                                                padding: '10px 20px 10px 20px',
                                                background: '#D0E3C4',
                                                width: 'max-content',
                                                borderRadius: '5px'
                                            }}>{url}</div>
                                            <div>
                                                <button style={{marginTop: '20px'}} className='btn btn-primary'
                                                        onClick={() => window.location.reload()}>Create a new note
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default Create;