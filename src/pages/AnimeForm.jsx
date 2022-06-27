import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAnime } from "../context/animeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export function AnimeForm() {
  const { createAnime, getAnime, updateAnime } = useAnime();
  const navigate = useNavigate();
  const params = useParams();
  const [anime, setAnimes] = useState({
    name: "",
    description: "",
    front_image: "",
    sample_image: "",
    category_id: "",
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const anime = await getAnime(params.id);
        setAnimes(anime);
      }
    })();
  }, [getAnime, params.id]);

  return (
  <>
      <Formik
        initialValues={anime}
        validationSchema={Yup.object({
          name: Yup.string().required("Texto requerido"),
          description: Yup.string().required("Texto requerido"),
          front_image: Yup.string().required("Texto requerido"),
          sample_image: Yup.string().required("Texto requerido"),
          category_id: Yup.string().required("Texto requerido"),
        })}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateAnime(params.id, values);
            navigate("/");
            window.location.reload();
          } else {
            await createAnime(values);
          }
          navigate("/");
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="title">Nombre:</label>
            <Field name="name" placeholder="ingrese un texto" />
            <ErrorMessage component="p" name="name" />

            <label htmlFor="title">Descripción:</label>
            <Field name="description" placeholder="ingrese un texto" />
            <ErrorMessage name="description" />

            <label htmlFor="title">Imagen Principal:</label>
            <Field name="front_image" placeholder="ingrese un texto" />
            <ErrorMessage name="front_image" />

            <label htmlFor="title">Imagen Secundaria:</label>
            <Field name="sample_image" placeholder="ingrese un texto" />
            <ErrorMessage name="sample_image" />

            <label htmlFor="title">Categoria:</label>
            <Field name="category_id" placeholder="ingrese un texto" />
            <ErrorMessage name="category_id" />

            <button type="submit"> Guardar </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
