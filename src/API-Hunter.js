import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function API_Hunter(){

    const [data, setData]=useState(null)
    const [Load,setLoad]=useState(true)

    useEffect(()=>{
     async function FetchingData(){
        try{
            const response =  await axios.get('https://dummyapi.online/api/pokemon')
            setData(response.data)
        }
        catch(error){
            console.log("Error!!",error)
        }
        finally{
            setLoad(false)
        }
     }
     FetchingData()
    },[])
    

if(Load){
    // return <center><img src='https://css-tricks.com/wp-content/uploads/2011/02/spinnnnnn.gif'/></center>

    return <h1>Loading...</h1>
}
return(
    <>
    <table style={{border:'1px solid black'}}>
        <thead>
            <tr style={{border:'1px solid black'}}>
            <th style={{border:'1px solid black'}}>Id</th>
            <th style={{border:'1px solid black'}}>Image</th>
            <th style={{border:'1px solid black'}}>Pokemon</th>
            <th style={{border:'1px solid black'}}>Type</th>
            <th style={{border:'1px solid black'}}>Abilities</th>
            <th style={{border:'1px solid black'}}>Hitpoints</th>
            {/* <th style={{border:'1px solid black'}}>Evolutions</th> */}
            <th style={{border:'1px solid black'}}>Location</th>
            <th style={{border:'1px solid black'}}>Image_url</th>
            </tr>
        </thead>
        <tbody>
        {data && data.map((e, key) => (
            <tr key={key}>
              <td style={{textAlign:'center',border:'1px solid black'}}>{e.id}</td>
              <td style={{textAlign:'center',border:'1px solid black'}}>
               <img src={e.image_url}/>
              </td>
              <td style={{textAlign:'center',border:'1px solid black'}}>{e.pokemon}</td>
              <td style={{textAlign:'center',border:'1px solid black'}}>{e.type}</td>
              <td style={{textAlign:'center',border:'1px solid black'}}>{e.abilities}</td>
              <td style={{textAlign:'center',border:'1px solid black'}}>{e.hitpoints}</td>
              {/* <td style={{textAlign:'center',border:'1px solid black'}}>{e.evolutions}</td> */}
              <td style={{textAlign:'center',border:'1px solid black'}}>{e.location}</td>
              <td style={{textAlign:'center',border:'1px solid black'}}>{e.image_url}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </>
)
}