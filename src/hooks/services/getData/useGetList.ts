import { Adapter } from "helper/Adapter";
import { useCallback, useEffect, useRef, useState } from "react";
import { ResponseType } from "../../../utils/types";

const useGetList = (url: string = "", params: object = {}) => {
  const [items, setItems] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<Array<number>>([]);
  const [totalItemCount, setTotalItemCount] = useState<number>(0);
  const unMount = useRef(true);

  const fetchListData = useCallback(async () => {
    try {
      setLoading(() => true);
      if (unMount.current) {
        await Adapter.get(url, { params: { ...params } }).then(
          (response: ResponseType) => {
            setItems(response.data.items || response.data);
            setTotalPage(response.data.paging.pages);
            setTotalItemCount(response.data.paging.count);
          },
        );
      }
    } catch (err) {
      setLoading(() => false);
    } finally {
      unMount.current && setLoading(() => false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(params)]);

  useEffect(() => {
    unMount.current = true;
    fetchListData();
    return () => {
      unMount.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(params)]);

  return { items, loading, totalPage, totalItemCount, fetchListData };
};

export default useGetList;
