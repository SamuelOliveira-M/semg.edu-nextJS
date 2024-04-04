import {
  PresentationChartBarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  studant: AcademicCapIcon,
  studentsWithdrawn:ArrowTrendingDownIcon,
  teacher: UserGroupIcon,
  class: PresentationChartBarIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
      <Card title="Alunos" value={totalPaidInvoices} type="studant" />
      <Card title="Professores" value={totalPendingInvoices} type="teacher" />
      <Card title="Turmas" value={numberOfInvoices} type="class" />
      <Card
        title="Alunos Desligados"
        value={numberOfCustomers}
        type="studentsWithdrawn"
      /> 
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'class' | 'studentsWithdrawn' | 'teacher' | 'studant';
}) {
  const Icon = iconMap[type];
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex justify-center p-4 ">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
