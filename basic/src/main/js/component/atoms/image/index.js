import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
export default function Image(props) {
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
    return (_jsx(_Fragment, { children: !loading ? (_jsx("img", { src: photo?.urls.full, alt: photo?.alt_description, className: `${height} ${width} ${className}` })) : (_jsx("div", { className: `animate-spin ${height} ${width} flext content-center rounded-full border-2 border-t-orange-600 border-b-slate-500` })) }));
}
