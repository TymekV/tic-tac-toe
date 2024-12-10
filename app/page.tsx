'use client';
import { CellState } from "@/lib/components/Cell";
import Container from "@/lib/components/Container";
import Map from "@/lib/components/Map";
import Subtitle from "@/lib/components/Subtitle";
import Title from "@/lib/components/Title";
import { useCallback, useState } from "react";

type WinState = CellState | 'draw' | null;

export default function Page() {
    const [mapData, setMapData] = useState<CellState[][]>([
        ['empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty'],
        ['empty', 'empty', 'empty'],
    ]);

    const [currentPlayer, setCurrentPlayer] = useState<'o' | 'x'>('o');

    const [winState, setWinState] = useState<WinState>()

    const checkIfWon = useCallback((mapData: CellState[][]): WinState => {
        for (const row of mapData) {
            if (row[0] != 'empty' && row[0] == row[1] && row[1] == row[2]) {
                return row[0];
            }
        }

        for (let col = 0; col < 3; col++) {
            if (mapData[0][col] != 'empty' && mapData[0][col] == mapData[1][col] && mapData[1][col] == mapData[2][col]) {
                return mapData[0][col];
            }
        }

        if (mapData[0][0] != 'empty' && mapData[0][0] == mapData[1][1] && mapData[1][1] == mapData[2][2]) {
            return mapData[0][0];
        }

        if (mapData[0][2] != 'empty' && mapData[0][2] == mapData[1][1] && mapData[1][1] == mapData[2][0]) {
            return mapData[0][2];
        }

        const isDraw = mapData.every(row => row.every(cell => cell != 'empty'));
        if (isDraw) return 'draw';

        return null;
    }, []);

    const handleClick = useCallback((i: number, j: number) => {
        setMapData(md => {
            const d = [...md];
            if (d[i][j] == 'empty') {
                d[i][j] = currentPlayer;
                setCurrentPlayer(currentPlayer == 'x' ? 'o' : 'x');
            }

            const won = checkIfWon(md);
            setWinState(won);

            return d;
        });
    }, [currentPlayer, checkIfWon]);

    return (
        <div>
            <Container>
                <Title size="lg">Tic Tac Toe</Title>
                <Subtitle size="lg">{winState == null ? `It's Player ${currentPlayer == 'o' ? 1 : 2}'s turn!` : winState == 'draw' ? 'It\'s a draw!' : `Player ${winState == 'o' ? 1 : 2} won!`}</Subtitle>
                <Map data={mapData} onCellClick={winState != null ? () => { } : handleClick} />
            </Container>
        </div>
    )
}