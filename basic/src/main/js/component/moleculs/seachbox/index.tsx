import { Navigate, useNavigate } from "react-router-dom";

interface IProps {
  className: string;
}

export default function SearchBox(props: IProps) {
  const { className } = props;
  const navigate = useNavigate();
  return (
    <input
      className={`${className} w-96 rounded-xl text-end py-2 px-4 text-sm focus-visible:outline-none`}
      placeholder="تصویر خود را جست و جو کنید"
      type={"text"}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          navigate(`/search/${e.currentTarget.value}`);
        }
        // if(e.key.===13)
      }}
    />
  );
}
