import Gallery from "@/components/gallery/gallery";


type Props = {
    params: {
        term: string;
    }
}

export async function generateMetadata({ params }: Props) {
    const { term } = await params;
    return {
        title:  `Results for ${term}`
    }
}

export default async function SearchResults({ params}: Props) {
    const { term } = await params;
    return <Gallery search={term} />
}