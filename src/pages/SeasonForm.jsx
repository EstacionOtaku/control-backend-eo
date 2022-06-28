import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSeasons } from "../context/seasonContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export function SeasonForm() {
  const { addSeason, getSeason, updateSeason } = useSeasons();
  const navigate = useNavigate();
  const params = useParams();
  const [season, setSeason] = useState({
    name: ""
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const season = await getSeason(params.id);
        setSeason(season);
      }
    })();
  }, [getSeason, params.id]);

  return (
  <>
      <Formik
        initialValues={season}
        validationSchema={Yup.object({
          name: Yup.string().required("Texto requerido"),
        })}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateSeason(params.id, values);
            navigate("/");
            window.location.reload();
          } else {
            await addSeason(values);
          }
          navigate("/");
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="title">Temporada 1 :</label>
            <Field name="name" placeholder="ingrese un texto" />
            <ErrorMessage component="p" name="name" />

            <label htmlFor="title">Temporada 2 :</label>
            <Field name="name" placeholder="ingrese un texto" />
            <ErrorMessage component="p" name="name" />

            <button type="submit"> Guardar </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
