"use client"
import { Grid } from '@tremor/react';
import { Card } from './card';
import { formatDaysweek } from '../lib/utils';
import { lusitana } from './fonts';

export function Calendar(){

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
					<tr
						key='asdsa'
						className=""
					>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Ens. Religioso' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
					</tr>
					<tr
						key='asdsa'
						className=""
					>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Ens. Religioso' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
					</tr>
					<tr
						key='asdsa'
						className=""
					>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Ens. Religioso' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
					</tr>
					<tr
						key='asdsa'
						className=""
					>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Ens. Religioso' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
					</tr>
					<tr
						key='asdsa'
						className=""
					>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Ens. Religioso' professor='Samuel'></Card>
						</td>
						<td className="">
							<Card materia='Português' professor='Samuel'></Card>
						</td>
					</tr>

				</tbody>
			</table>
			</div>
	)
}