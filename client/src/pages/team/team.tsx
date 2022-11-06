import { TeamMember } from "@app/components";
import * as React from "react";
import { defineMessages, useIntl } from "react-intl";
import Chef from "@assets/img/Chef.jpg";
import "./team.scss";

const messages = defineMessages({
  teamTitle: {
    id: "teamTitle",
    defaultMessage: "Our Team",
  },
  teamChefFullName: {
    id: "teamChefFullName",
    defaultMessage: "Danila Alpatov",
  },
  teamChefPosition: {
    id: "teamChefPosition",
    defaultMessage: "Chef",
  },
  teamChefDescription: {
    id: "teamChefDescription",
    defaultMessage: "Party Maker",
  },
});

const Team: React.FC = () => {
  const intl = useIntl();

  const teamMembers = [
    {
      image: Chef,
      fullName: intl.formatMessage(messages.teamChefFullName),
      position: intl.formatMessage(messages.teamChefPosition),
      description: intl.formatMessage(messages.teamChefDescription),
    },
    {
      image: Chef,
      fullName: intl.formatMessage(messages.teamChefFullName),
      position: intl.formatMessage(messages.teamChefPosition),
      description: intl.formatMessage(messages.teamChefDescription),
    },
    {
      image: Chef,
      fullName: intl.formatMessage(messages.teamChefFullName),
      position: intl.formatMessage(messages.teamChefPosition),
      description: intl.formatMessage(messages.teamChefDescription),
    },
    {
      image: Chef,
      fullName: intl.formatMessage(messages.teamChefFullName),
      position: intl.formatMessage(messages.teamChefPosition),
      description: intl.formatMessage(messages.teamChefDescription),
    },
    {
      image: Chef,
      fullName: intl.formatMessage(messages.teamChefFullName),
      position: intl.formatMessage(messages.teamChefPosition),
      description: intl.formatMessage(messages.teamChefDescription),
    },
  ];

  const members = teamMembers.map((item, i) => (
    <TeamMember
      image={item.image}
      fullName={item.fullName}
      position={item.position}
      description={item.description}
      key={i}
    />
  ));

  return (
    <section className="team">
      <div className="team-bcg" />
      <h3 className="team-title">{intl.formatMessage(messages.teamTitle)}</h3>
      <div className="team_members-wrp">{members}</div>
    </section>
  );
};

export default Team;
