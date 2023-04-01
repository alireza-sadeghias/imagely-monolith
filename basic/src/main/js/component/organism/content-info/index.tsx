import Button from "../../atoms/button";
import Typography from "../../atoms/typography";
import WordCloud from "../../moleculs/word-cloud";
import IPhoto from "../../../data-models/IPhoto";

interface IProps {
  photo: IPhoto;
}

export default function ContentInfo(props: IProps) {
  const { photo } = props;

  return (
    <div className="p-4 border-2 border-slate-400 mx-4 rounded-md">
      <Typography
        className="font-extrabold w-full sm:w-12 md:w-24 lg:w-36 xl:w-64 break-keep mx-4"
        value={photo.alt_description}
      />
      <WordCloud wordCloud={photo.alt_description.split(" ")} />
      <div className="mt-4 items-baseline px-2">
        <Button
          value="افزودن به سبد خرید"
          type="button"
          className="py-3 px-3 rounded-lg shadow-lg bg-fuchsia-500 text-slate-100 font-semibold"
        ></Button>
        <div className="inline-flex mx-8">
          <p className="mx-1">ریال</p>
          <p className="font-semibold text-center">1,000</p>
        </div>
      </div>
    </div>
  );
}
