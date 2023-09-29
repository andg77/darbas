import React from "react";
import Formik from "formik";

const MyForm = () => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default MyForm;