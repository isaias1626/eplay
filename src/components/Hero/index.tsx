import { Game } from '../../pages/Home'
import Tag from '../Tag'
import Button from '../button'

import * as S from './styles'

import { parseToBrl } from '../../utils/index'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispath = useDispatch()

  const addToCart = () => {
    dispath(add(game))
    dispath(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)} </span>
            )}
            {game.prices.current && (
              <p>por {parseToBrl(game.prices.current)}</p>
            )}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type={'button'}
              title={'Clique aqui para adicionar este jogo ao carrinho'}
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
