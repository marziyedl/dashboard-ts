import { Adapter } from "helper/Adapter";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { IusePut, ResponseType } from "utils/types";

const UsePut = (
  data: IusePut = {
    url: "",
    callBack: (res) => {},
    body: {},
    hideToast: false,
    onError: (err) => {},
    Trigger: false,
  },
) => {
  const [editLoading, setEditLoading] = useState(false);

  useEffect(() => {
    debugger;
    if (data.Trigger) {
      editItem();
    }
  }, [JSON.stringify(data)]);

  const editItem = async () => {
    setEditLoading(true);

    try {
      await Adapter.put(data.url, data.body).then((response: ResponseType) => {
        if (data.hideToast) {
          toast.success("Item edited successfully!");
        }
        if (data.callBack) {
          data.callBack(response.data);
        }
        setEditLoading(false);
      });
    } catch (error) {
      setEditLoading(false);
    }
  };

  return { editLoading, editItem };
};

export default UsePut;
