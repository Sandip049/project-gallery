import { CombinedPhoto } from "@/models/image";

function getPageNumber (url: string)  {
 const {searchParams} = new URL(url);

  return searchParams.get('page');
};

export default function getPagination(images: CombinedPhoto) {
    const  nextPage = images?.next_page ? getPageNumber(images.next_page) : null;

    const prevPage = images?.prev_page ? getPageNumber(images.prev_page) : null;
    return {prevPage, nextPage}

}


