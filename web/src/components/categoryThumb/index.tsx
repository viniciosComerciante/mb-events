interface CategoryThumbProps{
  title:string;
  imgUrl: string;
}

export function CategoryThumb({title, imgUrl}:CategoryThumbProps){
  return(
    <div className="hover:cursor-pointer">
      <div className={"w-32 h-32 rounded-full overflow-hidden flex items-center relative hover:cursor-pointer m-auto category-wrapper"}>
        <img src={imgUrl} alt="category thumbnail" className="img min-h-full min-w-full shrink-0 hover:scale-110 ease-in-out duration-300 hover:filter" width={400} height={400}/>     
      </div>
      <p className="text-center mt-4 text-textColor-200 text-sm">{title}</p>
    </div>
  )
}