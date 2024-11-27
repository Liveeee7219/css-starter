import { css as transformStyleObject } from '@theme-ui/css'
import { css as createClassName } from '@emotion/css'

const root = document.getElementById('root')

/** @type {import("@theme-ui/css").Theme} */
const theme = {
  colors: {
    text: '#21',
  },
  fonts: {
    mono: 'monospace',
  },
  space: {
    sm: '1rem',
    md: '2rem',
  },
}

const styles = transformStyleObject({
  padding: ['sm', 'md'],
  border: ({ colors }) => `2px solid ${colors.text}`,
  h1: {
    fontFamily: 'mono',
    color: 'text',
  },
})(theme)

root.classList.add(createClassName(styles))
root.innerHTML = `
<h1>You can use <code>@theme-ui/css</code> in Vanilla JS!</h1>

theme.util.gx('color1', 'color2')
`