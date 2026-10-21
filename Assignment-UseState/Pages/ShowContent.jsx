import React, { useState } from "react";

const ShowContent = () => {
    const[show, setShow] = useState(false)
  return (
    <div>
      <h1>Q5</h1>
       <h1>This is React!</h1>

      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Details' : 'Show Details'}
      </button>

      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Amet deserunt excepturi harum quas doloremque mollitia
          sunt voluptatum culpa soluta, vel maiores, vitae corporis
          accusantium iure illo commodi hic nostrum vero nemo.
          Blanditiis quis voluptatem tempore. Molestiae quod quam
          aperiam magni!
        </p>
      )}
    </div>
  );
};

export default ShowContent;
