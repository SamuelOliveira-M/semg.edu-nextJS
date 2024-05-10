import { getCalendar } from '../lib/api';
import { Card } from './card';
import { lusitana } from './fonts';

export async function Calendar({ id }: { id: string }){

	const dados = await getCalendar(id)

	return(
		<div>
			<h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Calendário
      </h2>
			<table className="bg-blue-400 rounded-t-md w-full shadow-md ">
				<thead className="text-white ">
					<tr>
						<th scope="col" className="">
							<p>Seg<span className='hidden sm:inline'>unda</span></p>
						</th>
						<th scope="col" className="">
							<p>Ter<span className='hidden sm:inline'>ça</span></p>
						</th>
						<th scope="col" className="">
							<p>Qua<span className='hidden sm:inline'>rta</span></p>
						</th>
						<th scope="col" className="">
							<p>Qui<span className='hidden sm:inline'>nta</span></p>
						</th>
						<th scope="col" className="">
							<p>Sex<span className='hidden sm:inline'>ta</span></p>
						</th>
					</tr>
				</thead>
				<tbody className="bg-gray-100">
    				{dados.map((student, i) => (
						<tr key={i} className="">
							{student.calendario.aulas.map((aula, j) => (
                				<td key={j}>
                    				<Card 
										materia={aula.lotacao.disciplina.nome} 
										professor={aula.lotacao.professor.nome} 
										horario={aula.horario.horarioFim}
									/>
               					 </td>
           					 ))}
						</tr>
    				))}
				</tbody>
			</table>
			</div>
	)
}