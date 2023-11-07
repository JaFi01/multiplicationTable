export function GeneratedTable({ wysokosc, szerokosc, kolor }: { wysokosc: number; szerokosc: number; kolor: string; }) {
    const generateMultiplicationTable = () => {
        const table = [];
        for (let i = 1; i <= wysokosc; i++) {
            const row = [];
            for (let j = 1; j <= szerokosc; j++) {
                row.push(i * j);
            }
            table.push(row);
        }
        return table;
    };

    const multiplicationTable = generateMultiplicationTable();

    return (
        <div>
            <table>
                <tbody>
                    {multiplicationTable.map((rzad, nrRzedu) => (
                        <tr key={nrRzedu}>
                            {rzad.map((element, numerKolumny) => (
                                <td
                                    key={numerKolumny}
                                    style={{ backgroundColor: element % 2 === 0 ? kolor : 'transparent' }}
                                >
                                    {element}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Wysokość: {wysokosc}</p>
            <p>Szerokość: {szerokosc}</p>
        </div>
    );
}
