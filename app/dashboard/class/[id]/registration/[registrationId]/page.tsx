import { Suspense } from "react";
import ProfilePicture from "@/app/ui/profile-picture";
import { uniqueFetchRegistrationById } from "@/app/lib/api";
import notFound from "@/app/dashboard/teacher/[id]/edit/not-found";
import { Grid } from '@tremor/react';


export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id;   
  
  const schoolClass = await uniqueFetchRegistrationById(id)

  if (!schoolClass) {
    notFound();
  }
  
  const img:string = schoolClass.aluno.url_image

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>
      <strong> Perfil do Aluno </strong>
      </h1>
      <div className="flex justify-end items-center">
        <Suspense fallback={<p>....</p>}>
          <ProfilePicture imageUrl={img}/>
        </Suspense>
      </div>
      <h2 className="mb-4 text-xl md:text-1xl">Dados Pessoais</h2>
      <dl className="w-full mt-10 mb-10 list-none ">
        <Grid numItemsSm={2} numItemsLg={30} className="gap-6">
        <div className="list-item flex-basis-50 border-b ">
          <dt>Nome:</dt>
          <dd className="pl-2 text-sm">Samuel Oliveira</dd>
        </div>
        <div className="list-item flex-basis-50 border-b ">
          <dt>Data Nascimento::</dt>
          <dd className="pl-2 text-sm">22/08/2003</dd>
        </div>
        <div className="list-item flex-basis-50 border-b ">
          <dt>Naturalidade:</dt>
          <dd className="pl-2 text-sm">Picos-PI</dd>
        </div>
        <div className="list-item flex-basis-50 border-b ">
          <dt>Matrícula:</dt>
          <dd className="pl-2 text-sm">2021118TADS0211</dd>
        </div>
        <div className="list-item flex-basis-50 border-b ">
          <dt>Cpf:</dt>
          <dd className="pl-2 text-sm">08721588376</dd>
        </div>
        <div className="list-item flex-basis-50 border-b ">
          <dt>Localidade:</dt>
          <dd className="pl-2 text-sm">Sede</dd>
        </div>
        <div className="list-item flex-basis-50 border-b ">
          <dt>Nome do pai:</dt>
          <dd className="pl-2 text-sm">Francisco Antonio de Moura</dd>
        </div>
        <div className="list-item flex-basis-50 border-b ">
          <dt>Nome da mãe:</dt>
          <dd className="pl-2 text-sm">Aldenira oliveira de moura</dd>
        </div>
        <div className="list-item flex-basis-50 border-b ">
          <dt>Turma:</dt>
          <dd className="pl-2 text-sm">9° Ano</dd>
        </div>
        </Grid>
      </dl>
      <h2 className="mb-4 text-xl md:text-1xl">Redimento</h2>
      <div className="overflow-x-auto">
        <table className=" min-w-full text-gray-900 md:table border ">
          <thead className="rounded-lg text-center text-sm font-normal border">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6 border">
                Materia
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
                MAR
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
                ABR
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
                MAI
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
                JUN
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
                1ºRS
              </th><th scope="col" className="px-3 py-5 font-medium border">
                AGO
              </th>
              
              <th scope="col" className="px-3 py-5 font-medium border">
                SET
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
                OUT
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
                NOV
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
                2ºRS
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
                PF
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
                MF
              </th>
              <th scope="col" className="px-3 py-5 font-medium border">
              Resultado
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-center">
            <tr
              key="1223"
              className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className="whitespace-nowrap py-3 pl-6 pr-3 border">
                Português
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                4.3
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                6.6
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                7.7
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                8.7
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                9.8
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                9.4
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                9.3
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                9.6
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                9.8
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                10.0
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                10.0
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                10.0
              </td>
              <td className="whitespace-nowrap px-3 py-3 border">
                AP
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )  
}