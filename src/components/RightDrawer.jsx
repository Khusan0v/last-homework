
"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { getFromLocalStorage } from "../utils";
export function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const countries = getFromLocalStorage('selectedCountries') || [];
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex  items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Selected Countries</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Drawer" />
        <Drawer.Items>
         
          <div className="grid">
          <ul className=" flex flex-wrap  gap-2">
              {countries.map((country) => (
                <li key={country.cca2} className="mb-2 w-32 h-32 ">
                  <p>{country.name.common}</p>
                  <div>
                  <img style={{width:"120px", height:"80px"}} src={country.flags.png} alt={country.name.common} />
                </div>
                </li>
              
              ))}
            </ul>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
