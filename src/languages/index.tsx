import React from "react"
import { IntlProvider } from "react-intl"
import enMessages from "src/languages/messages/en.json"
import arMessages from "src/languages/messages/ar.json"

const allMessages = {
  en: enMessages,
  ar: arMessages,
}

export default function I18nProvider({ children }: any) {
  const messages = allMessages.en
  return (
    <IntlProvider locale="en" messages={messages}>
      {children}
    </IntlProvider>
  )
}
