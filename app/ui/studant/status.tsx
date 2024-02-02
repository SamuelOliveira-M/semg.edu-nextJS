import clsx from 'clsx';

export function StudantStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        {
          'border-l-2  border-green-600 bg bg-green-200 p-1 rounded-r-md': status === 'Aprovado',
          'border-l-2  border-read-600 bg bg-read-200 p-1 rounded-r-sm': status === 'Reprovado',
        },
      )}
    >
      {status === 'Reprovado' ? (
        <>
          Reprovado
        </>
      ) : null}
      {status === 'Aprovado' ? (
        <>
          Aprovado
        </>
      ) : null}
    </span>
  );
}

export function CheckPassingGrade({ nota }: { nota: number }) {

	const checkGrade: () => "Reprovado" | "Aprovado" = () => {
		if(nota>=6){
			return 'Aprovado'
		}
		return 'Reprovado'
	}

	const status: "Reprovado" | "Aprovado" = checkGrade()

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
          {nota}
        </>
      ) : null}
      {status === 'Aprovado' ? (
        <>
          {nota}
        </>
      ) : null}
    </span>
  );
}
