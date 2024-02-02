import { Suspense } from "react";
import ProfilePicture from "@/app/ui/profile-picture";
import { uniqueFetchRegistrationById } from "@/app/lib/api";
import notFound from "@/app/dashboard/teacher/[id]/edit/not-found";
import { Grid } from '@tremor/react';
import TableRecord from "@/app/ui/studant/table-record";


export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id;   
  
  const schoolClass = await uniqueFetchRegistrationById(id)

  if (!schoolClass) {
    notFound();
  }
  
  const img:string = schoolClass.aluno.url_image

  return (
    <main>
      <div className="flex justify-end items-center">
        <Suspense fallback={<p>....</p>}>
          <ProfilePicture imageUrl={img}/>
        </Suspense>
      </div>
      <h2 className="mb-6 text-xl md:text-1xl"><strong>Dados Pessoais</strong></h2>
      <dl className="w-full mb-10 list-none ">
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
      <h2 className="mb-6 text-xl md:text-1xl"><strong>Redimento</strong></h2>
      <TableRecord></TableRecord>
    </main>
  )  
}

