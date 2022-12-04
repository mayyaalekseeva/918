import * as React from "react";
import Svg from "@app/components/svg";
import Vk from "@assets/svg/vk.svg";
import Insta from "@assets/svg/instagram.svg";
import Mail from "@assets/svg/mail.svg";
import Tg from "@assets/svg/telegram.svg";

import "./footer.scss";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  footerAddressCity: {
    id: "footerAddressCity",
    defaultMessage: "Nizhny Novgorod",
  },
  footerAddressStreet: {
    id: "footerAddressStreet",
    defaultMessage: "Rozhdestvenskaya, 9",
  },
  footerWorkingHours: {
    id: "footerWorkingHours",
    defaultMessage: "Working Hours",
  },
  footerDays: {
    id: "footerDays",
    defaultMessage: "Mon - Sun from 8 AM till 10 PM",
  },
});

const Footer: React.FC = () => {
  const intl = useIntl();

  const contactNumber: string = "+7 (831) 222-22-22";

  return (
    <footer className="footer">
      <div className="footer-wrp">
        <div className="footer-contacts">
          <span>
            {intl.formatMessage(messages.footerAddressCity)},{" "}
            {intl.formatMessage(messages.footerAddressStreet)}
          </span>
          <span>{contactNumber}</span>
        </div>
        <div className="footer-hours">
          <span>{intl.formatMessage(messages.footerWorkingHours)}</span>
          <span>{intl.formatMessage(messages.footerDays)}</span>
        </div>
      </div>
      <div className="footer-socials">
        <a href="https://vk.com/bistro918" target="_blank">
          <Svg content={Vk} />
        </a>
        <a href="https://instagram.com/9.18bistro" target="_blank">
          <Svg content={Insta} />
        </a>
        <a href="#">
          <Svg content={Mail} />
        </a>
        <a href="#">
          <Svg content={Tg} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
