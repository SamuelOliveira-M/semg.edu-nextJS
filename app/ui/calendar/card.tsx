export function Card({ materia, professor,horarioInicio, horarioFim }: {
	materia: string;
	professor: string,
	horarioInicio:string,
	horarioFim:string 
}){

	return(
		<div
			className="border rounded-lg p-1 text-center bg-white"
		>
			<p className="text-xs sm:text-base">
				{materia.substring(0, 10)}
				
				<span className='text-xs hidden sm:inline sm:text-base'>
					{materia.substring(10, 15)}
				</span>
			</p>
			
			<p className="text-xs sm:text-base">{professor.substring(0, 10)}<span className='text-xs hidden sm:inline sm:text-base'>{professor.substring(10, 15)}</span></p>
			
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
