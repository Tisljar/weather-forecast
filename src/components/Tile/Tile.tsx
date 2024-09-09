import { TileProps } from '../../types'

const Tile = ({  icon, title, info, description }: TileProps): JSX.Element => {
  
    return (
      <article className='w-[140px] text-xs font-bold flex flex-col items-center 
      bg-white bg-opacity-75 backdrop-blur-lg drop-shadow-lg py-4 mx-1 px-2 mb-5'>
        <div className="flex items-center text-center text-sm font-medium">
        <div>{icon}</div>
          <h4 className="font-medium ml-1">{title}</h4>
        </div>
        <h3 className="mt-2 text-lg">{info}</h3>
  
        <div className="text-xs font-medium text-center">{description}</div>
      </article>
    )
  }
  export default Tile