// 'use client';
import React from 'react'
import Image from 'next/image'
import { CombinedPhoto } from '@/models/image'
import { fetchImages } from '@/services/api/fetchImages'
import addBlurredDataUrls from '@/services/blurData/blurData'
import Link from 'next/link'

type GalleryProps = {
    search?: string | undefined
}

export default async function Gallery( { search }: GalleryProps ) {

    const url = search ? `https://api.pexels.com/v1/search?query=${search}` :'https://api.pexels.com/v1/curated'

    const images: CombinedPhoto | undefined = await fetchImages(url)

    if (!images) {
        return <div className='text-2xl text-red-500 flex justify-center items-center m-4 font-bold'>No images found</div>
    }

    const photosWithBlur = await addBlurredDataUrls(images)
    // console.log(photosWithBlur, 'photosWithBlur');

    const photoData = photosWithBlur.map((photo) => {
        const widthHeightRatio = photo.height / photo.width
        const galleryHeight = Math.ceil(250 * widthHeightRatio)
        const photoSpans = Math.ceil(galleryHeight / 10) + 1
        return { ...photo, photoSpans };
    });
    return (
        <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
                {photoData.map((photo) => (
                    <div key={photo.id} className="w-[245px] justify-self-center"
                    style={{ gridRow: `span ${photo.photoSpans}` }}>
                        <Link href={photo.url} target='_blank' className="grid place-content-center">
                        <div className="rounded-xl overflow-hidden group">
                            <Image
                                src={photo.src.large}
                                alt={photo.alt}
                                width={photo.width}
                                height={photo.height}
                                sizes='245px'
                                placeholder='blur'
                                blurDataURL={photo.blurredDataUrl}
                                className="group-hover:scale-105 transition-transform "
                            />
                        </div>
                        </Link>
                        {/* <h2 className="text-lg font-bold">{photo.alt}</h2> */}
                    </div>
                ))}
        </section>
    );

}