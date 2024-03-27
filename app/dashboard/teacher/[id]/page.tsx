import BannerTeacher from "@/app/ui/teacher/banner-teacher";
import SchoolClassCard from "@/app/ui/teacher/teacher-classses-cards";

export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id;   

  return (
    <>
      <div className="border-b border-gray-300 mb-4">
        <BannerTeacher id={id}></BannerTeacher>
      </div>
      <SchoolClassCard id={id}></SchoolClassCard>
    </>
  )  
}

