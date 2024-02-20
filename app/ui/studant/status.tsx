import clsx from 'clsx';
import { string } from 'prop-types';

export function StudantStatus({ media }: { media: number }) {
  console.log(media)
  return (
    <span
      className={clsx(
        {
          'border-l-2  border-green-600 bg bg-green-200 p-1 rounded-r-md': media > 5,
          'border-l-2  border-read-600 bg bg-read-200 p-1 rounded-r-sm': media <6,
          'border-l-2  border-gray-600 bg bg-gray-200 p-1 rounded-r-sm': media===0,
        },
      )}
    >
      {media < 6 && media>0 ? (
        <>
          Reprovado
        </>
      ) : null}
      {media > 5 ? (
        <>
          Aprovado
        </>
      ) : null}
      {media === 0 ? (
        <>
          Cursando
        </>
      ) : null}
    </span>
  );
}

export function CheckPassingGrade(nota: number ) {

	const checkGrade: () => "Reprovado" | "Aprovado" | "Vazio" = () => {
    
    if(nota===0){
      return 'Vazio'
    }
		if(nota>=6){
			return 'Aprovado'
		}
		return 'Reprovado'
	}

	const status: "Reprovado" | "Aprovado" | "Vazio"= checkGrade()

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          '': status === 'Aprovado',
          'text-red-500': status === 'Reprovado',
        },
      )}
    >
      {status === 'Reprovado' ? (
        <>
          {nota.toFixed(1)}
        </>
      ) : null}
      {status === 'Aprovado' ? (
        <>
          {nota.toFixed(1)}
        </>
      ) : null}
      {status === 'Vazio' ? (
        <>
          
        </>
      ) : null}
    </span>
  );
}
