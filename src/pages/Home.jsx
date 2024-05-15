import SlickSlider from '../components/SlickSlider'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div>
        <p>Etusivu pälä pälä höpö höpö</p>
        <br /> 
        <SlickSlider />
        <br />
        <br />
        <div className="product_row">

        {/* kehityksenaikainen koodi, kunnes tietokanta kytketty yms,. */}

        <div>
          {Array(2).fill().map((_, i) => (
            <div className="product_row" key={i}>
              {Array(3).fill().map((_, j) => (
                <ProductCard key={j} />
              ))}
            </div>
          ))}
        </div>

          {/* kun tietokanta kytkettynä ym, voi tuotteet mäppää esim suurinpiirtein näin: 
              <div
                className="product_row">
                {products?.map((p) => (
                  <div className="col-md-3" key={p._id}>
                    <ProductCard p={p} />
                  </div>
                ))}
              </div>*/}
              </div>
      </div>
  )
}

export default Home