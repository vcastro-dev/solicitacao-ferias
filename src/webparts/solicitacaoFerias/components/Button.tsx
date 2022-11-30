import * as React from 'react';

interface IButtonProps {
    displayText: string
}

export default function Button ( props : IButtonProps ) : JSX.Element {
    const {
        displayText
    } = props

    return <button>{ displayText }</button>
}