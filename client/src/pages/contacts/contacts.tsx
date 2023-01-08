import * as React from "react";
import { defineMessages, useIntl } from "react-intl";
import "./contacts.scss";

const messages = defineMessages({
  contactsInfoTitle: {
    id: "contactsInfoTitle",
    defaultMessage: "We are glad to see you soon!",
  },
  contactsAddressCity: {
    id: "contactsAddressCity",
    defaultMessage: "Nizhny Novgorod",
  },
  contactsAddressStreet: {
    id: "contactsAddressStreet",
    defaultMessage: "Rozhdestvenskaya, 9",
  },
  contactsWorkingHours: {
    id: "contactsWorkingHours",
    defaultMessage: "Working Hours",
  },
  contactsDays: {
    id: "contactsDays",
    defaultMessage: "Mon - Sun from 8 AM till 10 PM",
  },
});

const Contacts: React.FC = () => {
  const intl = useIntl();
  const contactNumber: string = "+7 (986) 769-00-99";

  return (
    <section className="contacts">
      <div className="contacts-map">
        <div className="contacts-map_wrp">
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CCUvAEQWSC"
            allowFullScreen
            className="contacts-map__iframe"
          ></iframe>
        </div>
      </div>
      <div className="contacts-info">
        <h4 className="contacts-info__title">
          {intl.formatMessage(messages.contactsInfoTitle)}
        </h4>
        <span className="contacts-info__address">
          {intl.formatMessage(messages.contactsAddressStreet)},{" "}
          {intl.formatMessage(messages.contactsAddressCity)}
        </span>
        <div className="contacts-info__hours">
          <span>{intl.formatMessage(messages.contactsWorkingHours)}: </span>
          <span>{intl.formatMessage(messages.contactsDays)}</span>
        </div>
        <span className="contacts-info__number">{contactNumber}</span>
      </div>
    </section>
  );
};

export default Contacts;
