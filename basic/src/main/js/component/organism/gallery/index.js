import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../../atoms/icon";
import Image from "../../atoms/image";
import DescriptionContent from "../../moleculs/description";
import ContentInfo from "../content-info";
const Gallery = (props) => {
    const { query = "coffee" } = props;
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPhoto, setCurrentPhoto] = useState({
        alt_description: "",
        urls: { full: "" },
    });
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        // data fetching here
        //  fetch(`https://jsonplaceholder.typicode.com/photos`, {
        //     method: "GET", // default, so we can ignore
        //   })
        const fetchDatas = async () => {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`);
            if (response.status != 200 || !response.ok) {
                throw new Error(`this is an http error: the status is ${response.status}`);
            }
            const res = (await response.json());
            console.log("res", res);
            return (await res).results;
        };
        fetchDatas()
            .then((actualData) => {
            if (actualData.length === 0) {
                navigate("/not-found");
            }
            else {
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
    return (_jsxs("section", { className: "flex flex-row-reverse mt-12 mx-4 ", children: [_jsxs("div", { className: "relative h-60 w-60", children: [_jsx(Image, { className: "h-60 w-60", photo: currentPhoto, loading: loading }), _jsx("div", { className: "absolute flex inset-y-[6.75rem] left-[0.25rem] hover:cursor-pointer w-6 h-6 bg-slate-200 rounded-full align-baseline content-between ", onClick: (e) => {
                            if (index === 0) {
                                setIndex(data.length - 1);
                            }
                            else {
                                setIndex(index - 1);
                            }
                            setCurrentPhoto(data[index]);
                        }, children: _jsx(Icon, { className: "w-6 h-6", icon: faArrowLeft }) }), _jsx("div", { className: "absolute flex inset-y-[6.75rem] left-[13.25rem] hover:cursor-pointer  w-6 h-6 bg-slate-200 rounded-full align-middle content-between", onClick: (e) => {
                            if (index === data.length - 1) {
                                setIndex(0);
                            }
                            else {
                                setIndex(index + 1);
                            }
                            setCurrentPhoto(data[index]);
                        }, children: _jsx(Icon, { className: "w-6 h-6", icon: faArrowRight }) })] }), _jsx(ContentInfo, { photo: currentPhoto }), _jsx(DescriptionContent, {})] }));
};
export default Gallery;
