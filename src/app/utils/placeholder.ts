import { type CarouselArr, type BrowseArr } from '@/app/utils/types'
import concertImg from '@/app/ui/assets/concert-image.svg'
import sportsImg from '@/app/ui/assets/sports-image.svg'
import theaterImg from '@/app/ui/assets/theater-image.svg'
import familyImg from '@/app/ui/assets/family-image.svg'

export const carouselData: CarouselArr[] = [
    {
        index: 0,
        festivalName: 'Music Event',
        bgUrl: '',
    },
    {
        index: 1,
        festivalName: 'Sports Event',
        bgUrl: '',
    },
    {
        index: 2,
        festivalName: 'Family Event',
        bgUrl: '',
    },
]

export const browseData: BrowseArr[] = [
    {
        index: 0,
        category: 'Concert',
        categoryImg: concertImg,
    },
    {
        index: 1,
        category: 'Sports',
        categoryImg: sportsImg,
    },
    {
        index: 2,
        category: 'Theater',
        categoryImg: theaterImg,
    },
    {
        index: 3,
        category: 'Family',
        categoryImg: familyImg,
    },
]
