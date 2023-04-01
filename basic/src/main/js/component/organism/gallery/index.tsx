import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IPhoto from "../../../data-models/IPhoto";
import Icon from "../../atoms/icon";
import Image from "../../atoms/image";
import DescriptionContent from "../../moleculs/description";
import ContentInfo from "../content-info";

interface IProps {
  query?: string;
}

export interface IResponse {
  results: IPhoto[];
  total: number;
  total_pages: number;
}

const Gallery = (props: IProps) => {
  const { query = "coffee" } = props;
  const [data, setData] = useState<IPhoto[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPhoto, setCurrentPhoto] = useState<IPhoto>({
    alt_description: "",
    urls: { full: "" },
  } as IPhoto);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // data fetching here
    //  fetch(`https://jsonplaceholder.typicode.com/photos`, {
    //     method: "GET", // default, so we can ignore
    //   })
    const fetchDatas = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`
      );
      if (response.status != 200 || !response.ok) {
        throw new Error(
          `this is an http error: the status is ${response.status}`
        );
      }
      const res = (await response.json()) as Promise<IResponse>;
      console.log("res", res);
      return (await res).results;
    };

    fetchDatas()
      .then((actualData) => {
        if (actualData.length === 0) {
          navigate("/not-found");
        } else {
          setData(actualData);
          setError(null);
          setIndex(0);
          setLoading(false);
          setCurrentPhoto(actualData[index]);
        }
      })
      .catch((error) => {
        setLoading(false);
        setData([]);
        setError(error);
      });
  }, [query]);

  const {} = props;

  return (
    <section className="flex flex-row-reverse mt-12 mx-4 ">
      <div className="relative h-60 w-60">
        <Image className="h-60 w-60" photo={currentPhoto} loading={loading} />
        <div
          className="absolute flex inset-y-[6.75rem] left-[0.25rem] hover:cursor-pointer w-6 h-6 bg-slate-200 rounded-full align-baseline content-between "
          onClick={(e) => {
            if (index === 0) {
              setIndex(data.length - 1);
            } else {
              setIndex(index - 1);
            }
            setCurrentPhoto(data[index]);
          }}
        >
          <Icon className="w-6 h-6" icon={faArrowLeft} />
        </div>
        <div
          className="absolute flex inset-y-[6.75rem] left-[13.25rem] hover:cursor-pointer  w-6 h-6 bg-slate-200 rounded-full align-middle content-between"
          onClick={(e) => {
            if (index === data.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
            setCurrentPhoto(data[index]);
          }}
        >
          <Icon className="w-6 h-6" icon={faArrowRight} />
        </div>
      </div>
      <ContentInfo photo={currentPhoto}></ContentInfo>

      <DescriptionContent />
    </section>
  );
};

export default Gallery;
