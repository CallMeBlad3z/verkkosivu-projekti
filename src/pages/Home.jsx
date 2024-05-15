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
        <ProductCard> </ProductCard>
        {/*<div
              className="row"
              style={{ height: "100vh", overflow: "scroll" }}
            >
              {products?.map((p) => (
                <div className="col-md-4" key={p._id}>
                  <ProductCard p={p} />
                </div>
              ))}
            </div>*/}
    </div>
  )
}

export default Home