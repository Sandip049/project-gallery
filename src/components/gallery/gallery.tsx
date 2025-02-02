// 'use client';
import React from 'react'
import Image from 'next/image'
import { CombinedPhoto } from '@/models/image'
import { fetchImages } from '@/services/api/fetchImages'
import addBlurredDataUrls from '@/services/blurData/blurData'
import Link from 'next/link'
import getPagination from '@/lib/getpagination'
import Footer from '../footer/footer'

type GalleryProps = {
    search?: string | undefined
    page?: string | undefined
}

export default async function Gallery( { search ='curated', page }: GalleryProps ) {

    let url
    if (search == 'curated' && page) {
        url = `https://api.pexels.com/v1/curated?page=${page}`
    } else if (search == 'curated') {
        url = 'https://api.pexels.com/v1/curated'
    } else if (!page) {
        url = `https://api.pexels.com/v1/search?query=${search}`
    } else {
        url = `https://api.pexels.com/v1/search?query=${search}&page=${page}`
    }


    const images: CombinedPhoto | undefined = await fetchImages(url)

    if (!images || images.per_page === 0) {
        return <div className='text-2xl text-red-500 flex justify-center items-center m-4 font-bold'>No images found</div>
    }

    const photosWithBlur = await addBlurredDataUrls(images)

    const photoData = photosWithBlur.map((photo) => {
        const widthHeightRatio = photo.height / photo.width
        const galleryHeight = Math.ceil(250 * widthHeightRatio)
        const photoSpans = Math.ceil(galleryHeight / 10) + 1
        return { ...photo, photoSpans };
    });
    const {prevPage, nextPage }  = getPagination(images)
    console.log(images.next_page ,"next", images.prev_page, "prev");
    

    const FooterProps = {search, page, nextPage, prevPage}


    return (
        <>
        <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px] w-[90%] mx-auto">
                {photoData.map((photo) => (
                    <div key={photo.id} className="w-[250px] justify-self-center"
                    style={{ gridRow: `span ${photo.photoSpans}` }}>
                        <Link href={photo.url} target='_blank' className="grid place-content-center">
                        <div className="rounded-xl overflow-hidden group">
                            <Image
                                src={photo.src.large}
                                alt={photo.alt}
                                width={photo.width}
                                height={photo.height}
                                sizes='250px'
                                placeholder='blur'
                                blurDataURL={photo.blurredDataUrl}
                                className="group-hover:scale-105 transition-transform "
                            />
                        </div>
                        </Link>
                    </div>
                ))}
        </section>
        <Footer {...FooterProps} />
        </>
    );

}