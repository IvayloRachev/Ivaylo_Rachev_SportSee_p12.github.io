import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Error() {
    return (
        <main className='error'>
            <h1>La page que vous recherchez n'existe pas.</h1>
            <Link to="/">Retour sur la page d'accueil</Link>
        </main>
    )
}

export default Error;