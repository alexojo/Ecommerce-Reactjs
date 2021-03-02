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