import { Note,DisciplinaNotas } from "@/app/lib/definitions";
import { CheckPassingGrade,StudantStatus } from "./status";
import { formatText,mediaGeral,organizarNotasPorDisciplina } from "@/app/lib/utils";

import React from "react";
import { studantProfileNotes } from "@/app/lib/api";

export default async function LinhaGrade({ id }: {id:string}) {
  
  
  const dataGrade =  await studantProfileNotes(id)
  
  const notasOrganizadas = organizarNotasPorDisciplina(dataGrade);
  
  const headers = [
    'Matéria', 'MAR', 'ABR', 'MAI', 'JUN', '1ºRS', 'AGO', 'SET', 'OUT', 'NOV', '2ºRS', 'PF', 'MF', 'Resultado'
  ];

  return (
    <div className="overflow-x-auto">
      <table className=" min-w-full text-gray-900 bg bg-gray-200 rounded-t-md">
        <thead className="text-center text-sm font-normal">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="font-medium ">{header}</th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white text-center">
          {notasOrganizadas.map((disciplina) => (
            <tr key={3} className="w-full border-b py-3 text-sm last-of-type:border-none">
              <td className="whitespace-nowrap p-2 border">
                {formatText(disciplina.materia ? disciplina.materia : '')}
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {disciplina[3] ? disciplina[3].nota : 0}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
              <CheckPassingGrade
                  nota= {disciplina[4] ? disciplina[4].nota : 0}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {disciplina[5] ? disciplina[5].nota : 0}
                >
                </CheckPassingGrade>  
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {disciplina[6] ? disciplina[6].nota : 0}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {disciplina[7] ? disciplina[7].nota : 0}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {disciplina[8] ? disciplina[8].nota : 0}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {disciplina[9] ? disciplina[9].nota : 0}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {disciplina[10] ? disciplina[10].nota : 0}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {disciplina[11] ? disciplina[11].nota : 0}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {disciplina[12] ? disciplina[12].nota : 0}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {disciplina[13] ? disciplina[13].nota : 0}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
                <CheckPassingGrade
                  nota= {mediaGeral(disciplina)}
                >
                </CheckPassingGrade>
              </td>
              <td className="whitespace-nowrap p-2 border">
              <StudantStatus 
                media={mediaGeral(disciplina)}
              >
              </StudantStatus>        
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
