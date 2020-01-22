import React from 'react'
import Link from 'next/link'

let globalSetPreviewPath = () => {}

const ParasRealLink = ({ path, children }) => {
  return <Link href={path}>{children}</Link>
}

const ParasPreviewLink = ({ path, children }) => {
  return <a onClick={() => globalSetPreviewPath(path)}>{children}</a>
}

const ParasLink = ({ preview, setPreviewPath }) => {
  globalSetPreviewPath = setPreviewPath
  return preview ? ParasPreviewLink : ParasRealLink
}

export default ParasLink