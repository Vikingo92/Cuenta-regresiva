import React, { useState, useEffect, useRef } from 'react'
import { Container } from './Container'
import { DivStyle, TimerStyle, NumberStyle, CountStyle } from './styles//Card.styles'


export default function Card() {

    // Se asignan variables con la funcion que modifica el estado y se meciona la inicializacion.
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    // Actualizacion de tiempo
    let intervalo = useRef();

    // Funcion para empezar el conteo.
    const startTimer = () => {

        // Fecha desde qu empiza la cuenta regresiva.
        const cuentaRegresiva = new Date('Jun 20, 2022 00:00:00').getTime();

        intervalo = setInterval(() => {
            // Empieza el conteo, se actualiza la fecha.
            const ahora = new Date().getTime();

            // Calcular la diferencia desde la cuenta regresiva a la fecha.
            const distancia = cuentaRegresiva - ahora;

            // Asignacion de valores correspondientes para cada variable constante.
            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distancia % (1000 * 60)) / 1000);


            if (distancia < 0) {
                // Detener el conteo - cuenta regresiva.
                clearInterval(intervalo.current);

            } else {
                // Actualiza el conteto. Si la distancia es mejor a cero se detiene el conteo,
                // de lo contrario se actualiza, por medio de la funcion que modifica el estado.
                setDays(dias);
                setHours(horas);
                setMinutes(minutos);
                setSeconds(segundos);

            }

        }, 1000);
    }

    // Se llama a la funcion para inicializar la cuenta regresiva.
    useEffect(() => {
        startTimer();

        return
        // return () => {
        //     clearInterval(intervalo.current);
        // }
    })


    return (
        <Container>
            <DivStyle>
                <h1>We’re launching soon</h1>
                <TimerStyle>
                    <div>
                        <NumberStyle delay={1500}>{days}</NumberStyle>
                        <CountStyle>Days</CountStyle>
                    </div>
                    <div>
                        <NumberStyle>{hours}</NumberStyle>
                        <CountStyle>Hours</CountStyle>
                    </div>
                    <div>
                        <NumberStyle>{minutes}</NumberStyle>
                        <CountStyle>Minutes</CountStyle>
                    </div>
                    <div>
                        <NumberStyle>{seconds}</NumberStyle>
                        <CountStyle>Seconds</CountStyle>
                    </div>
                </TimerStyle>
            </DivStyle>
        </Container>
    )
}
