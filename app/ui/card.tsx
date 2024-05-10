export function Card({ materia, professor,horario }: { materia: string; professor: string,horario:string }){

	return(
		<div
			className="border rounded-lg p-1 text-center min-h-14 min-w-15 bg-white"
		>
			<p className="text-xs sm:text-base">{materia}</p>
			<p className="text-xs sm:text-base">{professor}</p>
			<p className="text-xs sm:text-base">{horario}</p>
		</div>
	)
}