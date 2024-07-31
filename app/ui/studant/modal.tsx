'use client'

import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { DeleteStudant } from "./buttons";
import { deleteStudant } from "@/app/lib/actions";

export function DeleteStudantModel({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteStudant.bind(null, id);

  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  const handleClose = () => {
    setShowComponent(false);
  };

  return (
    <div>
      <button 
        className="rounded-md border p-2 hover:bg-gray-50"
        onClick={handleClick}
      >
        <span className="sr-only sm:hidden">Delete</span>
        <TrashIcon className="w-5" />
      </button>

      {showComponent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h1>Tem certeza que deseja apagar este dado?</h1>
            <div className="m-4 flex justify-around">
              <button 
                className="rounded-md border p-2 bg-gray-50 hover:bg-red-100 border-red-400 text-red-700"
                onClick={handleClose}
              >
                Não
              </button>
              <form action={deleteInvoiceWithId}>
                <button className="rounded-md border p-2 bg-gray-50 hover:bg-green-100 border-green-400 text-green-700">
                  Sim
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


