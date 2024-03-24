import BannerTeacher from "@/app/ui/teacher/banner-teacher";
import SubjectGradeGrid from "@/app/ui/teacher/subject-grade-grid";

export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id;   

  return (
    <>
      <div className="border-b border-gray-300 mb-4">
        <BannerTeacher id={id}></BannerTeacher>
      </div>
      <SubjectGradeGrid id={id}></SubjectGradeGrid>
    </>
  )  
}

