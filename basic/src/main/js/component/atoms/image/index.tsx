import { useEffect, useState } from "react";
import IPhoto from "../../../data-models/IPhoto";

interface IProps {
  // image?: string;
  photo?: IPhoto;
  data?: string;
  width?: string;
  height?: string;
  className?: string;
  loading?: boolean;
}
export default function Image(props: IProps) {
  const { photo, width = "w-32", height = "h-32", className, loading } = props;

  const [content, setContent] = useState("");

  // useEffect(() => {
  //   console.log("photo", photo);
  //   setLoading(true);
  //   const fetchDatas = async () => {
  //     const response = await fetch(`${photo?.urls?.full}`);
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }

  //     return URL.createObjectURL(await response.blob());
  //   };

  //   fetchDatas().then((x) => {
  //     setLoading(false);
  //     setContent(x);
  //   });
  // }, [photo]);

  return (
    <>
      {!loading ? (
        <img
          src={photo?.urls.full}
          alt={photo?.alt_description}
          className={`${height} ${width} ${className}`}
        />
      ) : (
        <div
          className={`animate-spin ${height} ${width} flext content-center rounded-full border-2 border-t-orange-600 border-b-slate-500`}
        ></div>
      )}
    </>
  );
}
