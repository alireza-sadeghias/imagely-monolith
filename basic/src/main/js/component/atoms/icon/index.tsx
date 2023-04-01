import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  icon: IconDefinition;
  className?: string;
  onClick?: () => void;
}

const Icon = (props: IProps) => {
  const { icon, className, onClick = () => {} } = props;
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      onClick={() => onClick()}
    />
  );
};

export default Icon;
