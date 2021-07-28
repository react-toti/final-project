import React from 'react';
import axios from 'axios';
import api from '../../services/api';
import { Formik } from 'formik';

const CMA = () => (
  <div>
    <h1>Crea Tu Noticia</h1>
    <Formik
      initialValues={{ title: '', subTitle: '', article: '', image1: '', image2: '' }}
      onSubmit={(values, { setSubmitting }) => {
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
        console.log('Success!');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="string"
            name="title"
            onChange={handleChange}
            value={values.title}
          />
          <input
          type="string"
          name="subTitle"
          onChange={handleChange}
          value={values.subTitle}
        />
        <input
        type="string"
        onChange={handleChange}
        name="article"
        value={values.article}
      />
      <input
      type="string"
      name="image1"
      onChange={handleChange}
      value={values.image1}
    />
          <input
            type="string"
            name="image2"
            onChange={handleChange}
            value={values.image2}
          />
          
          <button type="submit" >
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default CMA;
