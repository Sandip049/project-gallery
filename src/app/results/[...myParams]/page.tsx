import Gallery from "@/components/gallery/gallery";


type Props = {
    params: {
        myParams: (string | undefined)[];
    }
}

export async function generateMetadata({ params }: Props) {
    const { myParams } = await params;
    const topic = myParams?.[0] ?? "curated";
    const page = myParams?.[1] ?? "1";
    return {
        title:  `Results for ${topic}- page ${page}`,
    }
}

export default async function SearchResults({ params}: Props) {
    const { myParams } = await params;
    const topic = myParams?.[0] ?? "curated";
    const page = myParams?.[1] ?? "1";
    return <Gallery search={topic} page={page} />
}