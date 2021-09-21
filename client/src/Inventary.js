import React from "react";

const Inventary = ({ inventary, handleDelete }) => {
  return (
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
              <a href="#" className="btn btn-mini btn-warning">
                <i className="icon-edit"></i>
              </a>
              <span
                className="btn btn-mini btn-danger"
                onClick={(e) => {
                  handleDelete(e, item.id);
                }}
              >
                <i className="icon-trash"></i>
              </span>
            </td>
          </tr>
        ))}
        {/* <tr>
          <td>3 Giugno 2021</td>
          <td>Giulio Mario Martena</td>
          <td>06-06-2021 19:11:50</td>
          <td>
            <a
              href="#"
              className="changeVisibility"
              data-id="2046"
              data-status="1"
              data-titolo="3 Giugno 2021"
            >
              Si
            </a>
          </td>
          <td>
            <a href="podcast.php?edit=2046" className="btn btn-mini btn-warning">
              <i className="icon-edit"></i>
            </a>
            <a
              href="#"
              data-id="2046"
              data-titolo="3 Giugno 2021"
              className="deletePodcast btn btn-mini btn-danger"
            >
              <i className="icon-trash"></i>
            </a>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Inventary;
