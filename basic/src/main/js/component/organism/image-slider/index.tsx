import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Icon from "../../atoms/icon";
import Image from "../../atoms/image";
import IPhoto from "../../../data-models/IPhoto";
interface IProps {
  className?: string;
}
export interface IResponse {
  results: IPhoto[];
  total: number;
  total_pages: number;
}

const ImageSlider = (props: IProps) => {
  const [data, setData] = useState<IPhoto[]>([]);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`
      );
      if (response.status != 200 || !response.ok) {
        throw new Error(
          `this is an http error: the status is ${response.status}`
        );
      }
      const res = (await response.json()) as Promise<IResponse>;
      return (await res).results;
    };

    fetchDatas()
      .then((actualData) => {
        setData(actualData.slice(0, 5));
        console.log("actualData", data);
        setError(null);
      })
      .catch((error) => {
        setData([]);
        setError(error);
      });
  }, []);

  const { className } = props;

  return (
    <section className={`${className} mx-4 `}>
      <div className="relative grid grid-cols-5 gap-4 w-full h-64 grid-rows-1">
        {data.map((photo) => {
          return <Image key={photo.id} className="h-60 w-60 " photo={photo} />;
        })}
        <div
          className="absolute flex inset-y-[6.75rem] left-[0.25rem] hover:cursor-pointer w-6 h-6 bg-slate-200 rounded-full align-baseline content-between "
          onClick={(e) => {
            if (index === 0) {
              setIndex(data.length - 1);
            } else {
              setIndex(index - 1);
            }
          }}
        >
          <Icon className="w-6 h-6" icon={faArrowLeft} />
        </div>
        <div
          className="absolute flex inset-y-[6.75rem] right-[0.25rem] hover:cursor-pointer  w-6 h-6 bg-slate-200 rounded-full align-middle content-between"
          onClick={(e) => {
            if (index === data.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          <Icon className="w-6 h-6" icon={faArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
