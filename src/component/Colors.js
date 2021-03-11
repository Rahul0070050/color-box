import React, { useState, useEffect } from 'react';
import { colors } from './SRC';
import '../App.css'

export default function Colors() {
    const [box, setBox] = useState([])
    console.log();
    useEffect(() => {
        const interval = setInterval(() => {
            setBox(oldBox => {
                return [...oldBox, { color: colors[Math.floor(Math.random() * 39)] }]
            })
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className="container">
            {box && box.map((item, index) => {
                const { color } = item;
                console.log(color);
                return <div className={`box`} key={index} style={{ backgroundColor: color }}> </div>
            })}
        </div >
    )
}
