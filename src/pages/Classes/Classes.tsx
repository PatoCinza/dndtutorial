import React from 'react';
import { NavLink } from 'react-router-dom';
import './Classes.css';

import Barbaro from './Detalhes/Barbaro';
import classesJson from './classesJson';

function Classes() {
    const classes = classesJson;

    if (window.location.hash.includes('barbarian')) {
        return (
            <div className="App">
                <NavLink to='/classes'>Voltar</NavLink>
                <Barbaro />
            </div>
        )
    }

    return (
        <div className="App">
            <h1>Capítulo 3 - Classes de Personagens</h1>
            <p>As classes de personagem fornecem as capacidades mais emocionantes de um personagem. Este capítulo oferece doze classes, cada uma contendo quatro subclasses — todas resumidas a seguir.</p>
            
            <div className="classes-grid">
                {classes.map((classInfo) => (
                    <div key={classInfo.name} className="class-card">
                        <div className="class-header">
                            <classInfo.icon className="class-icon" />
                            <h2>{classInfo.name}</h2>
                        </div>
                        <p>{classInfo.description}</p>
                        <div className="subclasses">
                            <h3>Subclasses:</h3>
                            <ul>
                                {classInfo.subclasses.map((subclass) => (
                                    <li key={subclass}>{subclass}</li>
                                ))}
                            </ul>
                        </div>
                        <NavLink to={classInfo.path} className="class-link">
                            Ver detalhes
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Classes;
