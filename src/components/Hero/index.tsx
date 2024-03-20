import bannerImg from '../../Assets/images/fundo_hogwarts.png'
import Tag from '../Tag'
import Button from '../button'

import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>

      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Button
          variant="primary"
          type={'button'}
          title={'Clique aqui para adicionar este jogo ao carrinho'}
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
