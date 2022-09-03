import { Adapter } from "helper/Adapter";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { IusePost, ResponseType } from "utils/types";

const UsePost = (
  data: IusePost = {
    url: "",
    callBack: (res) => {},
    body: {},
    hideToast: false,
    onError: (err) => {},
  },
) => {
  const [postLoading, setPostLoading] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const didMount = useRef(false);
  
  useEffect(() => {
    if (didMount.current) {
      if (!isCanceled) {
        postItem();
      }
    } else {
      didMount.current = true;
    }

    return () => {
      setIsCanceled(true);
    };
  }, [data]);

  const postItem = async () => {
    setPostLoading(true);
    try {
      await Adapter.post(data.url, data.body).then((response: ResponseType) => {
        if (data.hideToast) {
          toast.success("action was succeessfully!");
        }
        if (data.callBack) {
          data.callBack(response.data);
        }
        setPostLoading(false);
      });
    } catch (error) {
      if (data.onError) {
        data.onError(error);
      }
      setPostLoading(false);
    } finally {
      setIsCanceled(false);
    }
  };

  return { postLoading, postItem };
};

export default UsePost;
