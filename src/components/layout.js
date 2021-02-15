import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Chart, Pullquote } from "./ui"
import { Message } from "theme-ui"
import '../CHANGELOG.md';
const shortcodes = { Chart, Pullquote, Message }
export default function Layout({ children }) {
   return (
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
   )
}