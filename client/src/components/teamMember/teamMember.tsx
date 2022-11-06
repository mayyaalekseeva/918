import * as React from "react";
import "./teamMember.scss";

interface Props {
  image: any;
  fullName: string;
  position: string;
  description?: string;
}

const TeamMember: React.FC<Props> = ({
  image,
  fullName,
  position,
  description,
}) => {
  return (
    <div className="team-member">
      <img src={image} alt={fullName} className="team-member__img" />
      <h3 className="team-member__fullname">{fullName}</h3>
      <span className="team-member__position">{position}</span>
      <p className="team-member__description">{description}</p>
    </div>
  );
};

export default TeamMember;
