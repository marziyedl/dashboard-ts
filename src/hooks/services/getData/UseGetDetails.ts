import { Adapter } from "helper/Adapter";
import { useEffect, useRef, useState } from "react";
import { ResponseType } from "utils/types";

const useGetDetails = (
  url: string = "",
  onSuccess: (arg: object) => void = () => {},
  params: object = {},
) => {
  const [result, setResult] = useState<object>({});
  const [loading, setloading] = useState(true);
  const didMount = useRef(false);

  useEffect(() => {
    setloading(false);
    if (didMount.current) {
      getDetails();
    } else {
      didMount.current = true;
    }
  }, [url]);

  const getDetails = async () => {
    try {
      setloading(true);
      await Adapter.get(url, { params: { ...params } }).then(
        (response: ResponseType) => {
          setResult(response.data);
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
