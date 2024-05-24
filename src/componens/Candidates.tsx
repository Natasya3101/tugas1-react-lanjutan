export interface Candidate {
    id: number;
    name: string;
    photo: string;
    number: number;
    batch: string;
}

export const candidates: Candidate[] = [
    {
        id: 1,
        name: "Woso Wisesa",
        photo: "/pak_woso.jpeg", 
        number: 1,
        batch: "2024"
    },
    {
        id: 2,
        name: "Jamal Mahesa",
        photo: "/pak_jamal.jpeg", 
        number: 2,
        batch: "2024"
    }
];
