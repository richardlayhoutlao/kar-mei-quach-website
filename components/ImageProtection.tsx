"use client"

import NextImage, { ImageProps } from "next/image"

const prevent = (e: React.MouseEvent | React.DragEvent) => e.preventDefault()

export default function ProtectedImage(props: ImageProps) {
  return <NextImage {...props} onContextMenu={prevent} onDragStart={prevent} />
}
