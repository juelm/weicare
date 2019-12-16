import React from 'react';
import Paper from '@material-ui/core/Paper'; 

function Contact() {
    return (
    <Paper style={{magrinTop: 10, padding:80}}>
      <div>
        <h2>
          Petite Ecole des Grandes Découvertes <br />
          Little school of big discoveries
        </h2>
        <p>2140 Lucien-Thimens, St Laurent, H4R 1L1</p>
        <p>Tel: 514-303-8949</p>
        <p>Email:pegdgarderie2140@gmail.com</p>
        <p>Facebook Page: www.facebook.com/ptitecolemtl</p>
        <p>
          MaGarderie:
          http://www.magarderie.com/garderie/11783-petite-ecole-des-grandes-decouvertes.html
        </p>
      </div>
      </Paper>
    );
}

export default Contact;

