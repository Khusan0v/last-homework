"use client";

import { Carousel } from "flowbite-react";
import { getFromLocalStorage } from "../utils";

const customTheme = {
  control: {
    base: "hidden",
  },
};

export function Carusel() {
  const countries = getFromLocalStorage('selectedCountries') || [];
  
  // Create chunks of countries with the desired size
  const createChunks = (array, size) => {
    return array.reduce((chunks, item, index) => {
      const chunkIndex = Math.floor(index / size);
      if (!chunks[chunkIndex]) {
        chunks[chunkIndex] = [];
      }
      chunks[chunkIndex].push(item);
      return chunks;
    }, []);
  };

  const countryChunks = createChunks(countries, 4);

  // Conditional rendering
  if (countries.length === 0) {
    return (
      <div className="h-48 sm:h-56 xl:h-64 2xl:h-80 flex items-center justify-center">
        <h1 className="text-4xl mt-7 font-medium">No countries selected</h1>
      </div>
    );
  }

  return (
    <div className="h-48 sm:h-56 xl:h-64 2xl:h-80">
      <Carousel theme={customTheme}>
        {countryChunks.map((chunk, index) => (
          <div key={index} className="flex items-center justify-center gap-12 space-x-4">
            {chunk.map((country) => (
              <div key={country.cca2} className="flex flex-col items-center">
                <p className="text-lg mb-2 font-medium">{country.name.common}</p>
                <img
                  style={{ width: "180px", height: "100px" }}
                  src={country.flags.png}
                  alt={country.name.common}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
