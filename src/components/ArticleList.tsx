interface Props {
  title: string;
  description: string;
  listItems: string[];
}

const ArticleList = ({title, description, listItems}: Props) => {
  return <div className="mt-[2.5rem] flex flex-col">
    <h4 className="text-[1.25rem] font-bold text-[#19202D] dark:text-white capitalize mb-[1.75rem]">{title}</h4>
    <p className="text-[1rem] font-medium leading-[1.625rem] text-[#9DAEC2]">{description}</p>
    <div className="mt-[2rem] sm:mt-[1.5rem] flex flex-col space-y-[.5rem]">
      {listItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-[2rem]" >
          <span className="min-w-[.25rem] min-h-[.25rem] w-[.25rem] h-[.25rem] bg-[#5964E0] rounded-full" />
          <p className="text-[1rem] font-medium leading-[1.625rem] text-[#9DAEC2]">{item}</p>
        </div>
      ))}
    </div>
  </div>;
};

export default ArticleList;
