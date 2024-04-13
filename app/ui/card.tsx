export function Card({ materia, professor }: { materia: string; professor: string }){

	return(
		<div
			className="border rounded-lg p-1 text-center h-14 w-15 bg-white"
		>
			<p className="text-xs sm:text-lg">{materia}</p>
			<p className="text-xs sm:text-base">{professor}</p>
		</div>
	)
}