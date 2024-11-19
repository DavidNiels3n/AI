import React from 'react';
import "./App.css";


import ImageRecognizerComponent1 from './ImageRecognizerComponent1'
import ImageRecognizerComponent2 from './ImageRecognizerComponent2'
import ImageRecognizerComponent3 from './ImageRecognizerComponent3'
import ImageRecognizerComponent4 from './ImageRecognizerComponent4'
import ImageRecognizerComponent5 from './ImageRecognizerComponent5'
function App() {
  return (
    <div className="app-container">
      <h1>Billedegenkendelse</h1>
      <table>
        <tbody>
          <tr>
            <td><ImageRecognizerComponent1 /></td>
            <td><ImageRecognizerComponent2 /></td>
            <td><ImageRecognizerComponent3 /></td>
            <td><ImageRecognizerComponent4 /></td>
            <td><ImageRecognizerComponent5 /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default App;