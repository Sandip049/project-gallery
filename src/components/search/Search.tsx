'use client';

import { useState, FormEvent } from "react";
import {useRouter} from "next/navigation";
import { CiSearch } from "react-icons/ci";

export default function Search() {
    const [query, setQuery] = useState("");

    const router = useRouter();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/results/${query}`);
        setQuery("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex relative items-center">
            <CiSearch className="text-black absolute mx-1 text-xl" />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for images"
                className="border border-gray-300 rounded-lg p-2 text-black px-8 pr-2 w-44 sm:w-60"
            />
        </form>
    );
}