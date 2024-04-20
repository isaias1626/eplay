import Tag from '../Tag'
import Button from '../button'

import { parseToBrl } from '../../utils/index'
import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return (
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia </Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span> {parseToBrl(game.prices.old)} </span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
