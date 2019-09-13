import React from 'react'
import {
  initReactI18next,
  I18nextProvider,
  Trans,
  withTranslation,
} from 'react-i18next'
import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {render as rtlRender, fireEvent} from '@testing-library/react'

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
    },
  },
  pt: {
    translation: {
      'Welcome to React': 'Bem vindo ao React e ao react-i18next',
    },
  },
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: resources.en,
      pt: resources.pt,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

const MainView = withTranslation()(props => {
  return (
    <React.Fragment>
      <div className="App-header">
        <button onClick={() => props.i18n.changeLanguage('pt')}>pt</button>
        <button onClick={() => props.i18n.changeLanguage('en')}>en</button>
      </div>
      <h1>
        <Trans>Welcome to React</Trans>
      </h1>
    </React.Fragment>
  )
})

function render(ui, options) {
  function Wrapper({children}) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
  }
  return {
    ...rtlRender(ui, {wrapper: Wrapper, ...options}),
  }
}

test('it should test lang', () => {
  const {getByRole, getByText} = render(<MainView useSuspense={false} />)
  const heading = getByRole('heading')
  const pt = getByText('pt')
  const en = getByText('en')

  expect(heading).toHaveTextContent('Welcome to React and react-i18next')
  fireEvent.click(pt)
  expect(heading).toHaveTextContent('Bem vindo ao React e ao react-i18next')
  fireEvent.click(en)
  expect(heading).toHaveTextContent('Welcome to React and react-i18next')
})
