import React from "react";

function MovieCardContainer({ children }) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 movie-grid">
      {children}
    </div>
  );
}

export default MovieCardContainer;
