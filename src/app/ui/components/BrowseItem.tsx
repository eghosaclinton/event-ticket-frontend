import Image from 'next/image'
import { type BrowseProps } from '@/app/utils/types'
import { browseData } from '@/app/utils/placeholder'

function Browse({ category, categoryImg }: BrowseProps) {
    return (
        <div className="relative flex flex-col items-center">
            <div className="outline-4 outline outline-white flex justify-center font-semibold absolute -bottom-4 w-3/5 bg-[#04092C] rounded-full p-2 text-white">
                {category}
            </div>
            <Image src={categoryImg} alt="" />
        </div>
    )
}

export default function BrowseItems() {
    const BrowseArr = browseData.map((element) => {
        const { index, category, categoryImg } = element
        return (
            <Browse key={index} category={category} categoryImg={categoryImg} />
        )
    })
    return (
        <section>
            <div className="heading flex justify-between items-center border-b-[1.5px] border-[#D9D9D9] p-4">
                <h3 className="text-2xl font-bold">Browse By Category</h3>
                <button className="text-white bg-[#2C9CF0] font-medium px-4 py-2 rounded-full">
                    See more
                </button>
            </div>
            <div className="items flex gap-4">{BrowseArr}</div>
        </section>
    )
}
