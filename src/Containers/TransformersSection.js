import React, { Component } from 'react';
import Transformer from '../Components/Transformer.js'

function TransformersSection(props) {

    return (
      <section className = "transformers-section">
        <Transformer url={props.urls[0]} />
        <Transformer url={props.urls[1]} />
        <Transformer url={props.urls[2]} />
      </section>
    );
}

export default TransformersSection;
