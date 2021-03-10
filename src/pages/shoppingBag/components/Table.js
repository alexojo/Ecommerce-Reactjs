import React from "react";
import { Table } from "react-bootstrap";
import styles from "../stylesheets/table.module.sass";
import { Button } from "react-bootstrap";
import jumpTo from '../../../modules/Navigation'

export default function BagTable({ items, handleClick, props}) {
  
  return (
    <div className={styles.outbox}>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>Fotos</th>
            <th>Titulo</th>
            <th>Contacto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {Object.keys(items).map((id) => (
            // table row
            <tr key={id}>
              {/* pic */}
              <td>
              <div className={styles.pic_outbox}
                  onClick={() => jumpTo(`/product-overview/${items[id].item._id}`)}>
                  <img src={items[id].item.imagePath} alt="" />
                </div>
              </td>
              {/* title */}
              <td>
                <div className={styles.title_outbox}>
                  <div className={styles.title}>{items[id].item.title}</div>
                  <div className={styles.id_title}>Descripción:</div>
                  <div className={styles.id}>{items[id].item.description}</div>
                </div>
              </td>
              {/* contacto */}
              <td>
                <div className={styles.id}>{items[id].item.cellphone}</div>
              </td>
              {/* price */}
              <td>{items[id].price / items[id].qty}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
