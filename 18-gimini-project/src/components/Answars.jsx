import React, { useEffect, useState } from 'react'
import { checkHead, replaceHeading } from './helper'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/light'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from "react-markdown";

const Answars = ({ ans, index, totalResult }) => {

    const [heading, setHeading] = useState(false)
    const [answer, setAnswer] = useState(ans)
    console.log(index)

    useEffect(() => {
        if (checkHead(ans)) {
            setHeading(true)
            setAnswer(replaceHeading(ans))
        }

    }, [])


    const randrer = {
        code({ node, inline, className, childern, ...props }) {
            const match = /langusge-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    {...props}
                    childern={String(childern).replace(/\n$/, '')}
                    language={match[1]}
                    style={dark[1]}
                    preTag="div"
                />


            ):(
                <code {...props} className={className}>
                    {childern}
                </code>
            )
    }
    }

    return (
        <>
            {
                index == 0 ? <span className='text-2xl '>
                    {answer}
                </span> :
                    heading ? <span className="pt-3 block font-bold text-lg pl-4">{answer}</span> : <span className='pl-8 '>
                        <ReactMarkdown component={randrer}>{answer}</ReactMarkdown></span>
            }

        </>
    )
}

export default Answars