import db from "@/database";
import { CategoryThumb } from "../categoryThumb";
import { Title } from "../title";


export function Categories(){
  return(
    <section className="w-full">
      <div className="max-w-6xl h-10 m-auto">
       <Title text="Sua carreira merece, vamos nessa! 🚀"/>
        <div className="grid grid-cols-8">
          {db.categories.map((category)=> <CategoryThumb title={category.title} key={category.id} imgUrl={category.img}/> )}
        </div>
      </div>
    </section>
  )
}