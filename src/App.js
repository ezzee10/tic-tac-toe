import React, { Fragment } from "react";

import TicProvider from './context/TicProvider';

import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Button3 from './components/Button3';
import Button4 from './components/Button4';
import Button5 from './components/Button5';
import Button6 from './components/Button6';
import Button7 from './components/Button7';
import Button8 from './components/Button8';
import Button9 from './components/Button9';
import Finish from './components/Finish';
import Restart from './components/Restart';

function App() {
  return (
    <Fragment>
      <h1>Tic Tac Toe</h1>
      <div className="container">
        <TicProvider>
          <div className="finished">
            <Finish />
          </div>
          <div className="container-button">
            <Button1 />
            <Button2 />
            <Button3 />
            <Button4 />
            <Button5 />
            <Button6 />
            <Button7 />
            <Button8 />
            <Button9 />
          </div>
          <div className="container-reset">
            <Restart />
          </div>
        </TicProvider>
      </div>
    </Fragment>
  );
}

export default App;
