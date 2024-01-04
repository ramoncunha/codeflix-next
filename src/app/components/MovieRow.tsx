import Image from "next/image";

type MovieRowProps = {
    sectionTitle: string
}

type MovieCardProps = {
    index: number
}

const MovieCard = ({ index }: MovieCardProps) => (
    <div key={index} className='group h-28 min-w-[200px] relative
        hover:scale-110 transform transition duration-200 ease-in hover:z-50
        md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]
        bg-gradient-to-t from-transparent to-black
        '>
            <Image 
            src={`/item_${index}.png`}
            alt="Movie"
            fill={true}
            className='rounded'
            />
    </div>
)

export default function MovieRow({ sectionTitle }: MovieRowProps) {
    return (
        <div className='flex-col space-y-4'>
          <div className='flex'>
            <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
              {sectionTitle}
            </h2>
          </div>
          <div className='-ml-8 flex space-x-4 p-6 overflow-x-scroll'>
              {[1, 2, 3, 4, 5].map((index) => (
                <MovieCard key={index} index={index} />
              ))}
          </div>
        </div>
    )
}