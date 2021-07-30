import React from 'react';
import api from '../../services/api';
import { Formik } from 'formik';
import {CMAContainer} from "./styles"
import Input from "../../components/Input2"
import Button from '../../components/Button';

const CMA = () => (
  <div>
    <CMAContainer>
    <h1>Crea Tu Noticia</h1>
    <Formik
      initialValues={{ title: '', subTitle: '', article: '', image1: '', image2: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        api.post('/articles', {
          title: values.title,
          subTitle: values.subTitle,
          article: values.article,
          image1: values.image1,
          image2: values.image2,
        
    })
    .then(function (response) {
      if (response.status === 201) {
        setSubmitting(false);
        resetForm({ values: '' })
        console.log('Success!');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
      }}
    >
      {({
        resetForm,
        values,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="string"
            name="title"
            onChange={handleChange}
            value={values.title}
            placeholder="Titulo"
          />
          <Input
          type="string"
          name="subTitle"
          onChange={handleChange}
          value={values.subTitle}
          placeholder="Subtitulo"
        />
        <Input
        type="string"
        onChange={handleChange}
        name="article"
        value={values.article}
        placeholder="Noticia"
      />
      <Input
      type="string"
      name="image1"
      onChange={handleChange}
      value={values.image1}
      placeholder="Imagen 1"
    />
          <Input
            type="string"
            name="image2"
            onChange={handleChange}
            value={values.image2}
            placeholder="Imagen 2"
          />
          
          <Button type="submit" color="blue" >
            Submit
          </Button>
        </form>
      )}
    </Formik>
    </CMAContainer>
  </div>
);

export default CMA;
