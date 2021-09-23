import React from "react";
import ModalButton from "./components/service/button";
import FormRow from "./components/service/formRow";

const Inventary = ({
  inventary,
  handleDelete,
  formValues,
  setFormValues,
  handleSubmit,
  resetForm,
  options,
}) => {
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
                <span>
                  <ModalButton
                    style={{ marginLeft: "4px" }}
                    buttonType="warning"
                    targetId={`${item.id}`}
                    labelId={`${item.id}Label`}
                    buttonText={<i className="icon-edit"></i>}
                    mini
                    modalTitle={`Modifica oggetto con ID ${item.legacyId}`}
                    onSave={(e) => handleSubmit(e, formValues)}
                  >
                    <h1
                      className="text-center"
                      style={{ marginBottom: "32px" }}
                    >
                      Inserisci oggetto
                    </h1>
                    <form onSubmit={(e) => handleSubmit(e, formValues)}>
                      <div className="form-horizontal">
                        <FormRow
                          tag="legacyId"
                          label="Legacy ID"
                          type="number"
                          min={0}
                          value={formValues.legacyId}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              legacyId: e.target.value,
                            })
                          }
                        />
                        <FormRow
                          tag="name"
                          label="Oggetto"
                          type="text"
                          required
                          placeholder="Marca e modello"
                          value={formValues.name}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              name: e.target.value,
                            })
                          }
                        />
                        <FormRow
                          tag="description"
                          label="Descrizione"
                          type="text"
                          placeholder="Descrizione sintetica"
                          value={formValues.description}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              description: e.target.value,
                            })
                          }
                        />
                        <FormRow
                          tag="quantity"
                          label="Quantità"
                          type="number"
                          min={1}
                          value={formValues.quantity}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              quantity: e.target.value,
                            })
                          }
                        />
                        <FormRow
                          tag="isDonation"
                          label="Donazione"
                          type="checkbox"
                          value={formValues.isDonation}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              isDonation: e.target.checked,
                            })
                          }
                        />
                        {formValues.isDonation && (
                          <FormRow
                            tag="doner"
                            label="Donatore"
                            type="text"
                            placeholder="Donato da"
                            value={formValues.doner}
                            onChange={(e) =>
                              setFormValues({
                                ...formValues,
                                doner: e.target.value,
                              })
                            }
                          />
                        )}
                        <FormRow
                          tag="isRentable"
                          label="Noleggiabile"
                          type="checkbox"
                          value={formValues.isRentable}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              isRentable: e.target.checked,
                            })
                          }
                        />

                        {formValues.isRentable && (
                          <FormRow
                            tag="isAvailable"
                            label="Disponibile"
                            type="checkbox"
                            value={formValues.isAvailable}
                            onChange={(e) =>
                              setFormValues({
                                ...formValues,
                                isAvailable: e.target.checked,
                              })
                            }
                          />
                        )}
                        <FormRow
                          type="textarea"
                          label="Note"
                          tag="notes"
                          value={formValues.notes}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              notes: e.target.value,
                            })
                          }
                        />
                        <FormRow
                          type="select"
                          tag="buyYear"
                          label="A.A. d'acquisto"
                          value={formValues.buyYear}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              buyYear: e.target.value,
                            })
                          }
                          options={options.academicYears}
                        />
                        <FormRow
                          type="select"
                          tag="replacePriority"
                          label="Priorità sostituzione"
                          value={formValues.replacePriority}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              replacePriority: e.target.value,
                            })
                          }
                          options={options.replaceOptions}
                          lower
                        />
                      </div>
                    </form>
                  </ModalButton>
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
