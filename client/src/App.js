import { Fragment, useEffect, useState } from "react";
import Form from "./components/form/form.component";
import Inventary from "./Inventary";

function App() {
  const selectOptions = {
    academicYears: [
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
    ],
    replaceOptions: ["Nessuna", "Bassa", "Media", "Alta"],
  };

  const [state, setState] = useState({});

  const [formValues, setFormValues] = useState({
    legacyId: 0,
    name: "",
    description: "",
    quantity: 1,
    isDonation: false,
    doner: "",
    isRentable: false,
    isAvailable: false,
    notes: "",
    replacePriority: "nessuna",
    buyYear: "2021/22",
  });

  const resetForm = () => {
    setFormValues({
      legacyId: 0,
      name: "",
      description: "",
      quantity: 1,
      isDonation: false,
      doner: "",
      isRentable: false,
      isAvailable: false,
      notes: "",
      replacePriority: "nessuna",
      buyYear: "2021/22",
    });
  };

  const handleSubmit = async (e, body) => {
    e.preventDefault();
    await fetch("http://localhost:8080/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        setState({ data: [...state.data, formValues] });
        setFormValues(formValues);
        resetForm();
      })
      .catch((err) => {
        console.error("There was an error:", err.message);
      });
  };

  const handleDelete = async (e, id) => {
    setState({
      data: state.data.filter((item) => item.id !== id),
    });
    await fetch("http://localhost:8080/api/" + id, {
      method: "DELETE",
    })
      .then((res) => {})
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
      <Form
        formValues={formValues}
        setFormValues={setFormValues}
        handleSubmit={handleSubmit}
        resetForm={resetForm}
        options={selectOptions}
      />
      <Inventary inventary={state.data || []} handleDelete={handleDelete} />
    </Fragment>
  );
}

export default App;
