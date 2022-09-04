import { ButtonWithText } from "components/common/button/ButtonWithText";
import Loading from "components/common/Loading";
import { useGetList } from "hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";
import { GET_SENSOR } from "utils/APIUrls";
import PerfectScrollbar from "react-perfect-scrollbar";
import { TimestampToDate } from "utils/helpers";
import moment from "moment";

type sensorListType = {
  device_id: string;
  last_online: string;
  last_temp: 0;
  customer: string;
  location: string;
};
function SensorTable() {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    items = [],
    loading,
    totalPage,
  } = useGetList(GET_SENSOR, { page: pageNumber });
  const navigate = useNavigate();
  return loading ? (
    <Loading />
  ) : (
    <>
      <PerfectScrollbar>
        <Table striped>
          <tbody>
            {items?.map((item: sensorListType, i: number) => {
              return (
                <tr key={item.device_id + i}>
                  <td className="fw-bold w-25 align-middle">
                    {item.device_id}
                  </td>
                  <td>
                    <p className="mb-0">{item.last_temp}</p>
                    <p className="mb-0 text-muted">Temp</p>
                  </td>
                  <td>
                    <p className="mb-0">
                      {item.last_online
                        ? moment(TimestampToDate(item.last_online)).format(
                            "MMM DD YYYY",
                          )
                        : "---"}
                    </p>
                    <p className="mb-0 text-muted">Last Online</p>
                  </td>
                  <td>
                    <p className="mb-0">{item.location}</p>
                    <p className="mb-0 text-muted">Location</p>
                  </td>
                  <td>
                    <ButtonWithText
                      onClick={() => navigate(`editSensor/${item.device_id}`)}
                      type="primary"
                      className="me-2 col-5"
                      text="Edit sensor"
                    />
                    <ButtonWithText
                      onClick={() => navigate(`sensorDetail/${item.device_id}`)}
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
      <Pagination className="mt-2">
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
