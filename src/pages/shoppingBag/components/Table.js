import React from "react";
import { Table } from "react-bootstrap";
import styles from "../stylesheets/table.module.sass";
import { Button } from "react-bootstrap";
import jumpTo from "../../../modules/Navigation";

export default function BagTable({ items, handleClick, props }) {
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
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {Object.keys(items).map((id) => (
            // table row
            <tr key={id}>
              {/* imagen */}
              <td>
                <div
                  className={styles.pic_outbox}
                  onClick={() =>
                    jumpTo(`/product-overview/${items[id].item._id}`)
                  }
                >
                  <img src={items[id].item.imagePath} alt="" />
                </div>
              </td>
              {/* titulo */}
              <td>
                <div
                  className={styles.title_outbox}
                  onClick={() =>
                    jumpTo(`/product-overview/${items[id].item._id}`)
                  }
                >
                  <div className={styles.title}>{items[id].item.title}</div>
                  <div className={styles.id_title}>Descripción:</div>
                  <div className={styles.id}>{items[id].item.description}</div>
                </div>
              </td>
              {/* contacto */}
              <td
                onClick={() =>
                  jumpTo(`/product-overview/${items[id].item._id}`)
                }
              >
                <div className={styles.id}>{items[id].item.cellphone}</div>
              </td>
              {/* precio */}
              <td
                onClick={() =>
                  jumpTo(`/product-overview/${items[id].item._id}`)
                }
              >
                {items[id].price}
              </td>
              {/* eliminar */}
              <td>
                <div className={styles.qty_outbox}>
                  <Button
                    variant="outline-secondary"
                    className={styles.btn}
                    onClick={() => {
                      handleClick(id, false, true);
                    }}
                  >
                    <span>❌</span>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
