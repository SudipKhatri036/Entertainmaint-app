import React from "react";

function Loader() {
  return (
    /* From Uiverse.io by Javierrocadev */
    <div className="flex flex-row gap-2 place-self-center">
      <div className="w-4 h-4 rounded-full bg-prime-700 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-prime-700 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-prime-700 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}

export default Loader;
