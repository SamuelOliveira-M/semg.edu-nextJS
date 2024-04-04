import { CheckPassingGrade,StudantStatus } from "./status";
import { formatText } from "@/app/lib/utils";

import React from "react";
import { studantProfileNotes } from "@/app/lib/api";

export default async function LinhaGrade({ id }: {id:string}) {
  
  const dataGrade =  await studantProfileNotes(id)
  
  const headers = [
    'Matéria', 'MAR', 'ABR', 'MAI', 'JUN', '1ºRS', 'AGO', 'SET', 'OUT', 'NOV', '2ºRS', 'PF', 'MF', 'Resultado'
  ];

  return (
    <div className="overflow-x-auto">
      <table className=" min-w-full text-gray-900 bg-blue-300 rounded-t-md">
        <thead className="text-center text-sm font-normal">
          <tr >
            {headers.map((header, index) => (
              index === 0 ? (
                <th key={index} scope="col" className="font-medium p-1 sticky left-0 z-10 bg-blue-300">{header}</th>
              ) : <th key={index} scope="col" className="font-medium p-1">{header}</th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white text-center">
          {dataGrade.map((disciplina) => (
            <tr key={3} className="w-full border-b py-3 text-sm last-of-type:border-none">
              <td className="whitespace-nowrap p-1 border sticky left-0 z-10 bg-gray-50">
                {formatText(disciplina.materia ? disciplina.materia : '')}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.marco ? disciplina.marco :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.abril ? disciplina.abril :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.maio ? disciplina.maio :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.junho ? disciplina.junho :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.recup1 ? disciplina.recup1 :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.agosto ? disciplina.agosto :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.setembro ? disciplina.setembro :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.outubro ? disciplina.outubro :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.novembro ? disciplina.novembro :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.recup2 ? disciplina.recup2 :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.provaFinal ? disciplina.provaFinal :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {CheckPassingGrade(disciplina.media ? disciplina.media :0)}
              </td>
              <td className="whitespace-nowrap p-1 border">
                {StudantStatus(disciplina.aprovacao ? disciplina.aprovacao :'')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
