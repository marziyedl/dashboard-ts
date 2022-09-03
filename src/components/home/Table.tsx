import { ButtonWithText } from "components/common/button/ButtonWithText";
import { useGetList } from "hooks";
import { Table } from "reactstrap";
import { GET_SENSOR } from "utils/APIUrls";
function SensorTable() {
  const { items = [], loading, fetchListData }: any = useGetList(GET_SENSOR);
  return (
    <Table hover>
      <tbody>
        {items.results?.map((item: any) => {
          return (
            <tr>
              <td className="fw-bold w-25">{item.device_id}</td>
              <td className="w-25">{item.last_temp}</td>
              <td className="w-25"> {item.location}</td>
              <td className="w-25">
                <ButtonWithText
                  type="primary"
                  className="me-2 col-5"
                  text="Add sensor"
                />
                <ButtonWithText
                  //onClick={() => navigate("/")}
                  type="danger"
                  className="col-5"
                  text="Cancel"
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
