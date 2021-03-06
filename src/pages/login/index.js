import React, { useState } from 'react'
import api from '../../service/api'

export default function DashBoard({ history }){
    const [email, setEmail] = useState('')

    async function handleSubmit(e){
        e.preventDefault()

        const response = await api.post('/sessions',{email})

        const { _id } = response.data

        localStorage.setItem('user', _id);

        history.push('/dashboard')
    }

    return (
        <>
            <p>ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    />

                <button className="btn" type="submit" >Entrar</button>
            </form>
        </>
    )
}