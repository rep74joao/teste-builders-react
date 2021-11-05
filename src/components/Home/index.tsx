import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Preload} from './styles'

interface Climate {
    alerts: {
        description: string,
        event: string,
        sender_name: string,
    },
    daily:[
        {
            humidity:number,
            uvi:number,

            weather:[
                {
                    description:string,
                    icon:string,
                    main:string
                }
            ],
            temp:{
                day:number,
                max:number,
                min:number
            }
        }
    ],
}

interface GeoProps {
       coords:{
            latitude:number,
            longitude:number
        }

}

interface CityData {
        display_name:string,
}

const apiKey = 'eaddcb816f743477b7ddf14bab6773cd';

export function Home(){
    const [dados, setDados] = useState<Climate>(Object);
    const [city, setCity] = useState<CityData>(Object);
    const [preload, setPreload] = useState<boolean>(false);

    useEffect(() => {
       getLocation();
    },[])

    function getLocation(){
        setPreload(true);
        setCity(Object);
        setDados(Object);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert('navegador sem suporte Geolocalização!')
        }
    }

    async function showPosition(position: GeoProps) {

       try {
           const r = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
           setCity(r.data)

           const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=current&appid=${apiKey}`)
           setDados(data);
       }catch (e) {
           console.log(e)
       }
       setPreload(false)
    }

    async function getClimate(){
        getLocation();
    }

    return(
        <>
            <Container>
                {preload && <Preload>Carregando...</Preload>}
                <h2>Dados do endereço: </h2>
                <p>{city ? city?.display_name : `Voce precisa ativar a localizacao!`}</p>
                <h2>Ùltimos dados climáticos</h2>
                <h5>Alertas:</h5>
                <div>
                    {dados?.alerts ? (
                       <>
                           <p>{dados?.alerts.description}</p>
                           <p>{dados?.alerts.event}</p>
                           <p>{dados?.alerts.sender_name}</p>
                       </>
                    ) : <p>Sem alertas para região!</p> }
                </div>
                <h5>Temperaturas:</h5>
                <div>
                    {dados?.daily ? (
                        <>
                            <p>Umidade: {dados?.daily[0].humidity}%</p>
                            <p>UVA: {dados?.daily[0].uvi}</p>
                            <p>Temp. Atual: {dados?.daily[0].temp.day}</p>
                            <p>Temp. Máx: {dados?.daily[0].temp.max}</p>
                            <p>Temp. Min: {dados?.daily[0].temp.min}</p>
                        </>
                    ) : <p>Erro ao buscar os dados!</p> }
                </div>
                <h5>Clima:</h5>
                <div>
                    {dados?.daily ? (
                        <>
                            <p>{dados?.daily[0].weather[0].description}</p>
                            <p>{dados?.daily[0].weather[0].main}</p>
                        </>
                    ) : <p>Erro ao buscar os dados!</p> }
                </div>
                <button type={'button'} onClick={() => getClimate()}>ATUALIZAR DADOS</button>
            </Container>
        </>
    )
}