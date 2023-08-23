import { InputFilter } from '../../components'
import { CardGrid } from './components/CardGrid'
import { Title } from './components/Title'
import './styles.css'

export const HomePage = () => {
  return (
    <div
      style={{
        margin: '15px 21px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Title />
      <InputFilter />
      <CardGrid />
    </div>
  )
}
