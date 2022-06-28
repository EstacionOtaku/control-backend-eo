import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useEpisodes } from "../context/episodeContext";

export function EpisodeForm() {
  const { addEpisode, getEpisode, updateEpisode } = useEpisodes();
  const navigate = useNavigate();
  const params = useParams();
  const [episode, setEpisode] = useState({
    name: "",
    episode_number: "",
    description: "",
    duration: "",
    image: "",
    url: "",
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const episode = await getEpisode(params.id);
        setEpisode(episode);
      }
    })();
  }, [getEpisode, params.id]);

  return (
    <>
      <Formik
        initialValues={episode}
        validationSchema={Yup.object({
          name: Yup.string().required("El nombre es necesario"),
          episode_number: Yup.string().required("El numero de episodio es necesario"),
          description: Yup.string().required("La descripción es necesaria"),
          duration: Yup.string().required("La duración del video es necesaria"),
          image: Yup.string().required("La imagen es necesaria"),
          url: Yup.string().required("El url es necesario"),
        })}
        onSubmit={async (values, actions) => {
          
          if (params.id) {
            await updateEpisode(params.id, values)
          } else {
            await addEpisode(values);
          }

          navigate("/");
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="name" placeholder="nombre" />
            <ErrorMessage name="name" />

            <Field name="episode_number" placeholder="episodio" />
            <ErrorMessage name="episode_number" />
            
            <Field name="description" placeholder="descripcion" />
            <ErrorMessage name="description" />

            <Field name="duration" placeholder="dduración" />
            <ErrorMessage name="duration" />

            <Field name="image" placeholder="imagen" />
            <Field name="url" placeholder="url" />
            <button type="submit"> Guardar </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
