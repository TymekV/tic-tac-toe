import { css } from "@/styled-system/css";
import Cell, { CellState } from "../Cell"
import { horizontalDivider, verticalDivider } from "./styles";

export type MapProps = {
    data: CellState[][];
    onCellClick?: (i: number, j: number) => void;
}

export default function Map({ data, onCellClick }: MapProps) {
    return (
        <div className={map}>
            {data.map((row, i) => <div key={i}>
                <div className={rowStyles}>
                    {row.map((cell, j) => <div className={rowStyles} key={j}>
                        <Cell state={cell} onClick={() => typeof onCellClick == 'function' ? onCellClick(i, j) : null} />
                        {j != row.length - 1 && <div className={verticalDivider} />}
                    </div>)}
                </div>
                {i != data.length - 1 && <div className={horizontalDivider} />}
            </div>)}
        </div>
    )
}

const rowStyles = css({
    display: 'flex',
    alignItems: 'center',
});

const map = css({
    marginTop: '15px',
    borderRadius: '10px',
    overflow: 'hidden',
});