import React from "react";
import { isEmpty } from "lodash";

interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}
const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
          {title}
        </p>
        <div>
          {data.map((movie) => (
            <div key={movie.id}>movie</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
