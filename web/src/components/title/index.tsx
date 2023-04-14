interface TitleProps{
  text:string;
}

export function Title({text}:TitleProps){
  return <h1 className="text-xl font-bold text-textColor-500 my-9">{text}</h1>
}