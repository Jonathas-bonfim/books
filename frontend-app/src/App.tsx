import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { BookProvider } from './Hooks/context/useBook'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BookProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BookProvider>
    </ThemeProvider>
  )
}
export default App
