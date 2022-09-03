import { ButtonWithText } from "components/common/button/ButtonWithText";
import Loading from "components/common/Loading";
import { useGetList } from "hooks";
import { useNavigate } from "react-router-dom";
import { Table } from "reactstrap";
import { GET_SENSOR } from "utils/APIUrls";
function SensorTable() {
  const { items = [], loading, fetchListData }: any = useGetList(GET_SENSOR);
  const navigate = useNavigate();
  return loading ? (
    <Loading />
  ) : (
    <Table striped>
      <tbody>
        {items.results?.map((item: any) => {
          return (
            <tr key={item.device_id}>
              <td className="fw-bold w-25 align-middle">{item.device_id}</td>
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
  );
}

export default SensorTable;
