import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Ball = styled(motion.div)`
  background-color: blue;
  height: 100px;
  width: 100px;
  border-radius: 100%;
`;

function App() {
  return (
    <>
      <Ball
        drag={true}
        dragConstraints={true}
        onDrag={(event, info) => console.log(info.point.x, info.point.y)}
      />
    </>
  );
}

export default App;
