import React, { useRef, useState, Component} from "react"

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

import jumpTo from '../../../modules/Navigation';

import styles from '../stylesheets/Modal.sass'


// A exportar
var Pregunta1=[];
var Pregunta2=[];



const outStyle={
  width:'80%',
  height:'30px',
  marginBottom:'10px',
  marginTop:'20px'
}
const btnStyle={
  width:'100%',
  height:'100%',
  borderRadius:'7px',
  background:'#680d0f',
  color:'white',
  fontFamily:'Roboto sans-serif',
  fontSize:'15px'
}

function Boton({ button_title,onClick}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const aux = () =>{
    onClick();
  }
  const handleClose = () => {
    setOpen(false);
    //aux();
    jumpTo('/dashboard')
  };

  const Preguntas = [
    {
      Id: 'G_01',
      encabezado: 'Mientras usaba el producto...',    
      preguntaI: '...actue deliberadamente',
      preguntaF: '...actue impulsivamente'
  
    },
    {
      Id: 'E_01',
      encabezado: 'Mientras usaba el producto...', 
      preguntaI: '...me tomo demasiado esfuerzo alcanzar mi objetivo',
      preguntaF: '...alcance mi objetivo sin esfuerzo',
    },
  ]
  

  const numeros = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 7,
      label: '7',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  
  const [valor, setValor]=useState(0)
  const handleValor =(event, newValue)=>{
    setValor(newValue);
    
  }
  const [valor2, setValor2]=useState(0)

  const handleValor2 =(event, newValue)=>{
    setValor2(newValue);
  }
  Pregunta1[0]=valor;
  Pregunta2[0]=valor2;
  Pregunta1[1]=Preguntas[0].Id;
  Pregunta2[1]=Preguntas[1].Id;

 

  return (
    <div className="forminput_button" style={outStyle}>
      <input type="button" value={button_title} style={btnStyle} onClick={()=>{handleClickOpen()}}/>

      <Dialog    
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={styles.contenido} >
          <h3>AYUDANOS A SEGUIR MEJORANDO!</h3>

          <Typography id="discrete-slider" gutterBottom>
            Cuando estaba utilizando el producto:
          </Typography>
          
          <div style={{display: 'flex',justifyContent: "space-between",flexDirection: 'row', minWidth: 600+'px'}}>
            <Typography
            style={{width:100+'px'}}
            >{Preguntas[0].preguntaI}</Typography>
            <Slider style={{width:200+'px'}}
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleValor}
              step={1}
              marks = {numeros}
              min={0}
              max={7}
            />
            <Typography style={{width:100+'px'}}>{Preguntas[0].preguntaF}</Typography>
          </div>

          <Typography id="discrete-slider" gutterBottom>
            Cuando estaba utilizando el producto:
          </Typography>

          <div style={{display: 'flex',justifyContent: "space-between", flexDirection: 'row', minWidth: 600+'px'}}>
            <Typography style={{width:100+'px'}}>{Preguntas[1].preguntaI}</Typography>
            <Slider style={{width:200+'px'}}
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleValor2}
              step={1}
              marks = {numeros}
              min={0}
              max={7}
            />
            <Typography style={{width:100+'px'}}>{Preguntas[1].preguntaF}</Typography>
          </div>

          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </div>
        
      </Dialog>

    </div>
    
  )
}
export {Boton, Pregunta1, Pregunta2}