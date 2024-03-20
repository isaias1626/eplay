import Section from '../Section'
import { Item, Itens, Action, Modal, ModalContent } from './styles'

import play from '../../Assets/images/botao-play1.svg'
import zoom from '../../Assets/images/mais-zoom1.svg'
import hogwarts from '../../Assets/images/fundo_hogwarts.png'
import hogwarts1 from '../../Assets/images/image_10.png'
import fechar from '../../Assets/images/close_1.svg'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: hogwarts1
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=m7RWlX2P8fbvaOQx'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (Item: GalleryItem) => {
    if (Item.type === 'image') return Item.url

    return defaultCover
  }

  const getMediaIcon = (Item: GalleryItem) => {
    if (Item.type === 'image') return zoom

    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Itens>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="icone de fechar" />
          </header>
          <img src={hogwarts1} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
