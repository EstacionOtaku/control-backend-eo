import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCategories } from "../context/categoryContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function CategoryForm() {
  const { addCategory, getCategory, updateCategory } = useCategories();
  const navigate = useNavigate();
  const params = useParams();
  const [category, setCategory] = useState({
    name: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const category = await getCategory(params.id);
        setCategory(category);
      }
    })();
  }, [getCategory, params.id]);

  return (
    <>
      <Formik
        initialValues={category}
        validationSchema={Yup.object({
          name: Yup.string().required("El nombre es necesario"),
          description: Yup.string().required("La descripción es necesaria"),
        })}
        onSubmit={async (values, actions) => {
          
          if (params.id) {
            await updateCategory(params.id, values)
          } else {
            await addCategory(values);
          }

          navigate("/");
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="name" placeholder="nombre" />
            <ErrorMessage name="name" />
            <Field name="description" placeholder="descripcion" />
            <ErrorMessage name="description" />
            <Field name="image" placeholder="imagen" />
            <button type="submit"> Guardar </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
