import { Fragment, useEffect, useState } from "react";
import Inventary from "./Inventary";

function App() {
  const anni = [
    "2007/08",
    "2008/09",
    "2009/10",
    "2010/11",
    "2011/12",
    "2012/13",
    "2013/14",
    "2014/15",
    "2015/16",
    "2016/17",
    "2018/19",
    "2019/20",
    "2020/21",
    "2021/22",
  ];

  const replaceOptions = ["Nessuna", "Bassa", "Media", "Alta"];

  const [legacyId, setLegacyId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isDonation, setIsDonation] = useState(false);
  const [doner, setDoner] = useState("");
  const [isRentable, setIsRentable] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [notes, setNotes] = useState("");
  const [replacePriority, setReplacePriority] = useState("nessuna");
  const [buyYear, setBuyYear] = useState("2021/22");

  const [state, setState] = useState({});

  const resetForm = () => {
    setLegacyId(0);
    setName("");
    setDescription("");
    setQuantity(0);
    setIsDonation(false);
    setDoner("");
    setIsRentable(false);
    setIsAvailable(true);
    setNotes("");
    setReplacePriority("nessuna");
    setBuyYear("2021/22");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        legacyId,
        name,
        description,
        quantity,
        isDonation,
        doner,
        isRentable,
        isAvailable,
        notes,
        replacePriority,
        buyYear,
      }),
    })
      .then((res) => {
        setState({
          data: [
            ...state.data,
            {
              legacyId,
              name,
              description,
              quantity,
              isDonation,
              doner,
              isRentable,
              isAvailable,
              notes,
              replacePriority,
              buyYear,
            },
          ],
        });
        resetForm();
      })
      .catch((err) => {
        console.error("There was an error:", err.message);
      });
  };

  const handleDelete = async (e, id) => {
    await fetch("http://localhost:8080/api/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        setState({
          data: state.data,
        });
      })
      .catch((err) => {
        console.error("There was an error:", err.message);
      });
  };

  useEffect(() => {
    async function fetchData() {
      return await fetch("http://localhost:8080/api")
        .then((res) => res.json())
        .then((data) => setState({ data }))
        .catch((e) => console.error(e));
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="span12 widget">
            <div className="widget-control">
              <h1 className="text-center" style={{ marginBottom: "32px" }}>
                Inserisci oggetto
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-horizontal">
                  <div className="control-group">
                    <label htmlFor="legacyId" className="control-label">
                      <strong>Legacy ID</strong>
                    </label>
                    <div className="controls">
                      <input
                        type="number"
                        id="legacyId"
                        min={0}
                        value={legacyId}
                        onChange={(e) => setLegacyId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label htmlFor="name" className="control-label">
                      <strong>Oggetto</strong>
                    </label>
                    <div className="controls">
                      <input
                        type="text"
                        required
                        placeholder="Marca e modello"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label htmlFor="description" className="control-label">
                      <strong>Descrizione</strong>
                    </label>
                    <div className="controls">
                      <input
                        type="text"
                        id="description"
                        placeholder="Descrizione sintetica"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label htmlFor="quantity" className="control-label">
                      <strong>Quantità</strong>
                    </label>
                    <div className="controls">
                      <input
                        type="number"
                        id="quantity"
                        min={0}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label htmlFor="isDonation" className="control-label">
                      <strong>Donazione</strong>
                    </label>
                    <div className="controls">
                      <input
                        type="checkbox"
                        id="isDonation"
                        value={isDonation}
                        onChange={(e) => setIsDonation(e.target.checked)}
                      />
                    </div>
                  </div>
                  {isDonation && (
                    <div className="control-group">
                      <label htmlFor="doner" className="control-label">
                        <strong>Donato da</strong>
                      </label>
                      <div className="controls">
                        <input
                          type="text"
                          id="doner"
                          value={doner}
                          onChange={(e) => setDoner(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                  <div className="control-group">
                    <label htmlFor="isRentable" className="control-label">
                      <strong>Noleggiabile</strong>
                    </label>
                    <div className="controls">
                      <input
                        type="checkbox"
                        id="isRentable"
                        value={isRentable}
                        onChange={(e) => setIsRentable(e.target.checked)}
                      />
                    </div>
                  </div>
                  {isRentable && (
                    <div className="control-group">
                      <label htmlFor="isAvailable" className="control-label">
                        <strong>Disponibile</strong>
                      </label>
                      <div className="controls">
                        <input
                          type="checkbox"
                          id="isAvailable"
                          value={isAvailable}
                          onChange={(e) => setIsAvailable(e.target.checked)}
                        />
                      </div>
                    </div>
                  )}
                  <div className="control-group">
                    <label htmlFor="notes" className="control-label">
                      <strong>Note aggiuntive</strong>
                    </label>
                    <div className="controls">
                      <textarea
                        id="notes"
                        cols="60"
                        rows="5"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label htmlFor="buyYear" className="control-label">
                      <strong>A.A. d'acquisto</strong>
                    </label>
                    <div className="controls">
                      <select
                        value={buyYear}
                        id="buyYear"
                        onChange={(e) => setBuyYear(e.target.value)}
                      >
                        {anni.map((i) => (
                          <option value={i} key={anni.indexOf(i)}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="control-group">
                    <label htmlFor="replacePriority" className="control-label">
                      <strong>Priorità sostituzione</strong>
                    </label>
                    <div className="controls">
                      <select
                        value={replacePriority}
                        id="replacePriority"
                        onChange={(e) => setReplacePriority(e.target.value)}
                      >
                        {replaceOptions.map((i) => (
                          <option
                            value={i.toLowerCase()}
                            key={replaceOptions.indexOf(i)}
                          >
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
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
      <Inventary inventary={state.data || []} handleDelete={handleDelete} />
    </Fragment>
  );
}

export default App;
