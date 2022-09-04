import { Adapter } from "helper/Adapter";
import { useEffect, useState } from "react";
import { ResponseType } from "utils/types";

const useGetDetails = (
  url: string = "",
  onSuccess: (arg: object) => void = () => {},
  params: object = {},
) => {
  const [result, setResult] = useState<any>({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(false);
    getDetails();
  }, [url]);

  const getDetails = async () => {
    try {
      setloading(true);
      await Adapter.get(url, { params: { ...params } }).then(
        (response: ResponseType) => {
          setResult(response.data.result);
          onSuccess(response.data);
        },
      );
    } finally {
      setloading(false);
    }
  };

  return { result, loading, getDetails };
};

export default useGetDetails;
