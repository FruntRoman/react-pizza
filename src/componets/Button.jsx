import React from "react";
import classNames from "classnames";

export default function Button(props) {
    return (
        <button disabled={props.disabled} onClick={props.onClick} className={classNames('button', props.className, {
            'button--outline': props.outline,
            'button--disabled': props.disabled
        })}>
            {props.children}
        </button>

    )
}
