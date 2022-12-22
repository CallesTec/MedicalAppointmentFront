import React from "react";
import Card from "./Card";

import image1 from "./img/1.jpg";
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'
import image4 from './img/4.jpg'
import image5 from './img/5.jpg'
import image6 from './img/6.jpg'

const cards = [
  {
    id: 1,
    title: "Pacientes",
    image: image1,
    url: "/homePatient",
    text: "El término paciente se aplica a alguien que sufre dolor o malestar (muchas enfermedades causan molestias diversas, y un gran número de pacientes también sufren dolor). Antes de llegar a ser formalmente paciente, un individuo pasa por varias etapas: la identificación de los síntomas, el diagnóstico, el tratamiento y el resultado."
    
  },
  {
    id: 2,
    title: "Doctores",
    image: image2,
    url: "/homeDoctors",
    text: "Diagnosticar y tratar enfermedades, lesiones y demás trastornos de salud. Prescribir tratamientos, medicamentos, cirugías, dietas y/o ejercicios de rehabilitación, según el diagnóstico y condición del paciente. Solicitar exámenes de laboratorio, ultrasonidos, ecocardiogramas, electrocardiogramas, rayos X, entre otros. "
  },
  {
    id: 3,
    title: "Consultas",
    image: image3,
    url: "/homeAppointment",
    text: "La consulta médica es un proceso complejo y multidimensional, centrado en la relación médico-paciente, pero además es pieza clave para brindar el apoyo en cuanto a las necesidades de salud-enfermedad, sufrimiento e incertidumbre que tiene un sujeto cuando se ve afectada su integridad física, humana y emocional "
  },
  {
    id: 4,
    title: "Horarios",
    image: image4,
    url: "/homeHour",
    text: "Si usted o su familia son beneficiarios del Seguro Social y necesitan consultar de emergencia debido a síntomas respiratorios leves debe tomar en cuenta que la institución amplió los horarios de atención en 17 clínicas comunales, varias de ellas corresponden al Área Metropolitana de San Salvador. "
  },
  {
    id: 5,
    title: "Clínicas",
    image: image5,
    url: "/homeClinic",
    text: "Establecimiento sanitario, generalmente privado, donde se diagnostica y trata la enfermedad de un paciente, que puede estar ingresado o ser atendido en forma ambulatoria. "
  },
  {
    id: 6,
    title: "Diagnósticos",
    image: image6,
    url: "/showDiagnostic",
    text: "Proceso en el que se identifica una enfermedad, afección o lesión por sus signos y síntomas. Para ayudar a hacer un diagnóstico, se pueden utilizar los antecedentes de salud o realizar un examen físico y pruebas, como análisis de sangre, pruebas con imágenes y biopsias."
  },

];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, text, id }) => (
          <div className="col-md-4 mb-4" key={id}>
            <Card imageSource={image} title={title} url={url} text={text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;