import { ButtonWithText } from "components/common/button/ButtonWithText";
import Loading from "components/common/Loading";
import { useGetList } from "hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";
import { GET_SENSOR } from "utils/APIUrls";
import PerfectScrollbar from "react-perfect-scrollbar";
function SensorTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    items = [],
    loading,
    totalPage,
  }: any = useGetList(GET_SENSOR, { page: pageNumber });
  const navigate = useNavigate();
  return loading ? (
    <Loading />
  ) : (
    <>
      <PerfectScrollbar>
        <Table striped>
          <tbody>
            {items.results?.map((item: any) => {
              return (
                <tr key={item.device_id}>
                  <td className="fw-bold w-25 align-middle">
                    {item.device_id}
                  </td>
                  <td className="w-25">
                    <p className="mb-0">{item.last_temp}</p>
                    <p className="mb-0 text-muted">Temp</p>
                  </td>
                  <td className="w-25">
                    <p className="mb-0">{item.location}</p>
                    <p className="mb-0 text-muted">Location</p>
                  </td>
                  <td className="w-25">
                    <ButtonWithText
                      onClick={() => navigate(`editSensor/${item.device_id}`)}
                      type="primary"
                      className="me-2 col-5"
                      text="Edit sensor"
                    />
                    <ButtonWithText
                      //onClick={() => navigate("/")}
                      type="info"
                      className="col-5"
                      text="Details"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </PerfectScrollbar>
      <Pagination>
        {console.log(totalPage)}
        {totalPage?.map((num: number) => {
          return (
            <PaginationItem key={num} onClick={() => setPageNumber(num)}>
              <PaginationLink>{num}</PaginationLink>
            </PaginationItem>
          );
        })}
      </Pagination>
    </>
  );
}

export default SensorTable;
