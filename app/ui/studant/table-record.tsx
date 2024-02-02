import { CheckPassingGrade, StudantStatus } from "./status"

// { params }: { params: { id: string } }

export default function TableRecord() {
	return(
		<div className="overflow-x-auto">
			<table className=" min-w-full text-gray-900 bg bg-gray-200 rounded-t-md">
				<thead className="text-center text-sm font-normal">
					<tr>
						<th scope="col" className="font-medium ">
							Materia
						</th>
						<th scope="col" className="p-4 font-medium">
							MAR
						</th>
						<th scope="col" className="p-4 font-medium">
							ABR
						</th>
						<th scope="col" className="p-4 font-medium">
							MAI
						</th>
						<th scope="col" className="p-4 font-medium">
							JUN
						</th>
						<th scope="col" className="p-4 font-medium">
							1ºRS
						</th>
						<th scope="col" className="p-4 font-medium">
							AGO
						</th>
						<th scope="col" className="p-4 font-medium">
							SET
						</th>
						<th scope="col" className="p-4 font-medium">
							OUT
						</th>
						<th scope="col" className="p-4 font-medium">
							NOV
						</th>
						<th scope="col" className="p-4 font-medium">
							2ºRS
						</th>
						<th scope="col" className="p-4 font-medium">
							PF
						</th>
						<th scope="col" className="p-4 font-medium">
							MF
						</th>
						<th scope="col" className="p-4 font-medium">
						Resultado
						</th>
					</tr>
				</thead>
				<tbody className="bg-white text-center">
					<tr
						key="1223"
						className="w-full border-b py-3 text-sm last-of-type:border-none"
					>
						<td className="whitespace-nowrap p-2 border">
							Português
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap border">
							<CheckPassingGrade nota={4.5}></CheckPassingGrade>
						</td>
						<td className="whitespace-nowrap p-2 border">
							<StudantStatus status="Aprovado"></StudantStatus>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
