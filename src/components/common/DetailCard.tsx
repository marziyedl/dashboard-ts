import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card } from "reactstrap";

type DetailCardProp = {
  text: string;
  icon: IconProp;
  number: number;
};
function DetailCard({ text, icon, number = 0 }: DetailCardProp) {
  return (
    <Card className="d-flex justify-content-between align-items-center flex-row p-3">
      <div>
        <h6>{text}</h6>
        <h6>{number}</h6>
      </div>
      <FontAwesomeIcon icon={icon} size="2x" />
    </Card>
  );
}

export default DetailCard;
