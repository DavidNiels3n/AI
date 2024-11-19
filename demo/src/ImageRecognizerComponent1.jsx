import React, { useRef } from 'react';
import exampleImage from './assets/u1.jpg';
import * as tf from '@tensorflow/tfjs';

let model = null;
tf.loadLayersModel('/model.json').then(loadedModel => {
    model = loadedModel;
}).catch(error => console.error('Failed to load model', error));

// Class labels extracted from your metadata
const classNames = ["skildpadder", "otters", "giraffer"];

function ImageRecognizerComponent1() {
    const imageRef = useRef(null);

    async function recognizeImage() {
        if (!model) {
            console.log('Model not loaded yet');
            return;
        }

        const tensor = tf.browser.fromPixels(imageRef.current)
            .resizeNearestNeighbor([224, 224]) // Use the image size from metadata
            .toFloat()
            .expandDims(0);

        try {
            const prediction = await model.predict(tensor);
            const predictedIndex = prediction.argMax(1).dataSync()[0];

            // Get the class name using the predicted index
            const predictedClassName = classNames[predictedIndex];
            
            // Display the class name in the input field
            document.getElementById('i1').value = predictedClassName;
        } catch (error) {
            console.error('Error during prediction', error);
        }
    }

    return (
        <div>
            <h5>Ukendt billede #1</h5>
            <img ref={imageRef} src={exampleImage} width="224" height="224" alt="Input" /> <br />
            <button onClick={recognizeImage}>Kør billedegenkendelse...</button> <br />
            <input id="i1" type="text" readOnly />
        </div>
    );
}

export default ImageRecognizerComponent1;
