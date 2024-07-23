export function Card({ materia, professor,horarioInicio, horarioFim }: {
	materia: string;
	professor: string,
	horarioInicio:string,
	horarioFim:string 
}){

	return(
		<div
			className=" flex flex-col justify-center border rounded-lg p-1 text-center bg-white"
		>
			<p className="truncate text-xs sm:text-base">{materia}</p>
			
			
			<p className="truncate text-xs sm:text-base">{professor}</p>
			
			<div className="flex justify-around sm:flex flex-col">
				<p className="text-xs sm:text-base">{horarioInicio}</p>	
				<p className="text-xs sm:text-base">{horarioFim}</p>
			</div>
		</div>
	)
}

export function InputCard({
  materia,
  professor,
  horario,
  // handleChange
}: {
  materia: string;
  professor: string;
  horario: string;
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return(
		<div
			className="border rounded-lg p-1 text-center min-h-14 min-w-15 bg-white"
		>
			<div className="relative">
				<input
					id="nome"
					name="nome"
					className="w-full h-5 p-0 rounded-md border-none border-gray-200 text-xs sm:text-base outline-2 placeholder:text-gray-500 text-center"
					defaultValue={materia}
					minLength={3}
					maxLength={100}
				></input>
      </div>
			<div className="relative">
				<input
					id="nome"
					name="nome"
					className="w-full h-5 p-0 rounded-md border-none border-gray-200 text-xs sm:text-base outline-2 placeholder:text-gray-500 text-center"
					defaultValue={professor}
					minLength={3}
					maxLength={100}
				></input>
      </div>
			<div className="relative">
				<input
					id="nome"
					name="nome"
					className="w-full h-5 p-0 rounded-md border-none border-gray-200 text-xs sm:text-base outline-2 placeholder:text-gray-500 text-center"
					defaultValue={horario}
					minLength={3}
					maxLength={100}
				></input>
      </div>
		</div>
	)
}
