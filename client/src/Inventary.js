import React from "react";

const Inventary = ({ inventary, handleDelete }) => {
  return (
    <section
      className="container"
      style={{ marginTop: "32px", padding: "8px" }}
    >
      <table className="table table-hover table-striped">
        <thead>
          <th>ID</th>
          <th>Modello</th>
          <th>Descrizione</th>
          <th>Quantità</th>
          <th>Donazione</th>
          <th>Donatore</th>
          <th>Noleggiabile</th>
          <th>Disponibile</th>
          <th>Anno d'acquisto</th>
          <th>Priorità sostituzione</th>
          <th>Note</th>
        </thead>
        <tbody>
          {inventary.map((item) => (
            <tr key={item.id}>
              <td>{item.legacyId}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.isDonation ? "✔" : ""}</td>
              <td>{item.doner}</td>
              <td>{item.isRentable ? "✔" : ""}</td>
              <td>{item.isAvailable ? "✔" : ""}</td>
              <td>{item.buyYear}</td>
              <td>{item.replacePriority}</td>
              <td>{item.notes}</td>
              <td>
                <span
                  className="btn btn-mini btn-warning"
                  style={{ marginLeft: "4px" }}
                >
                  <i className="icon-edit"></i>
                </span>
                <span
                  className="btn btn-mini btn-danger"
                  style={{ marginLeft: "4px" }}
                  onClick={(e) => {
                    handleDelete(e, item.id);
                  }}
                >
                  <i className="icon-trash"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Inventary;
