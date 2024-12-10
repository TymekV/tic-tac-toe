import { css } from "@/styled-system/css";
import { token } from "@/styled-system/tokens";
import { IconCircle, IconX } from "@tabler/icons-react";
import React from "react";

export type CellState = 'empty' | 'o' | 'x';

export interface CellProps extends React.HTMLAttributes<HTMLDivElement> {
    state: CellState;
}

export default function Cell({ state, ...props }: CellProps) {
    const Icon = state == 'o' ? IconCircle : state == 'x' ? IconX : undefined;

    return (
        <div className={cellStyles} {...props}>
            {Icon && <Icon color={token(`colors.${state == 'o' ? 'green' : 'red'}.7`)} size={40} />}
        </div>
    )
}

const cellStyles = css({
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'tile.0',
    }
});