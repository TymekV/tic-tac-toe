'use client';
import { CellState } from "@/lib/components/Cell";
import Container from "@/lib/components/Container";
import Map from "@/lib/components/Map";
import Title from "@/lib/components/Title";
import { useState } from "react";

export default function Page() {
    const [mapData, setMapData] = useState<CellState[][]>([
        ['o', 'o', 'x'],
        ['x', 'x', 'o'],
        ['x', 'x', 'o'],
    ]);

    return (
        <div>
            <Container>
                <Title size="lg">Tic Tac Toe</Title>
                <Map data={mapData} />
            </Container>
        </div>
    )
}