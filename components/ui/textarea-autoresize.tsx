"use client"
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

interface TextAreaProps{
    className?:string,
}
export default function TextareaAutoresize({ className }:TextAreaProps) {
    return (
        <TextareaAutosize maxRows={10} className={className} />
    )
}
