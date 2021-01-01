import React from "react";

import { createStage } from "../gemehelper";
//component
import Stage from "./tetris_components/Stage";
import Display from "./tetris_components/Display";
import StartButton from "./tetris_components/StatrButton";

const Tetris = () => {
  return (
    <>
      <Stage />
      <aside stage={createStage()}>
        <div>
          <Display text="score" />
          <Display text="rows" />
          <Display text="level" />
        </div>
        <StartButton />
      </aside>
      <div>tetris component</div>
    </>
  );
};

export default Tetris;
