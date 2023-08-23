const SaladImage = require('../../../assets/images/salad.jpg')

export const Card = () => {
  return (
    <div className='home__card'>
      <div className='home__card_header'>
        <img src={SaladImage} alt='Salad' />
      </div>

      <div className='home__card_content'>
        <h3>
          Sunt aut facere repellat provident occaecati excepturi optio reprehenderit
        </h3>
        <p>
          In laborum do adipisicing do deserunt occaecat. Adipisicing qui elit laboris
          Lorem veniam id reprehenderit velit amet laborum do pariatur. Est cillum
          excepteur et magna esse mollit ex in. Occaecat mollit eiusmod veniam occaecat
          incididunt elit commodo commodo proident nisi. Magna consequat deserunt sunt
          ipsum culpa enim voluptate Lorem in irure amet magna sint.
        </p>
      </div>
    </div>
  )
}
