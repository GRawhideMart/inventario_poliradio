import React from "react";
import FormRow from "../service/formRow/formRow.component";
import PropTypes from "prop-types";

const Form = ({
  formValues,
  setFormValues,
  handleSubmit,
  options,
  resetForm,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="span12 widget">
          <div className="widget-control">
            <h1 className="text-center" style={{ marginBottom: "32px" }}>
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
                    setFormValues({ ...formValues, legacyId: e.target.value })
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
                    setFormValues({ ...formValues, name: e.target.value })
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
                  label="Quantity"
                  type="number"
                  min={1}
                  value={formValues.quantity}
                  onChange={(e) =>
                    setFormValues({ ...formValues, quantity: e.target.value })
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
                      setFormValues({ ...formValues, doner: e.target.value })
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
                    setFormValues({ ...formValues, notes: e.target.value })
                  }
                />
                <FormRow
                  type="select"
                  tag="buyYear"
                  label="A.A. d'acquisto"
                  value={formValues.buyYear}
                  onChange={(e) =>
                    setFormValues({ ...formValues, buyYear: e.target.value })
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
                <div className="control-group">
                  <div className="controls">
                    <button
                      type="submit"
                      className="btn btn-primary btn-medium"
                    >
                      Inserisci
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default Form;
