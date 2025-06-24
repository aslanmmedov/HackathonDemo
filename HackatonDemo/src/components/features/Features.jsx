import "./Features.css"

const Features = () => {
  return (
    <section id="features" className="container">
        <div className="row">
            <div className="col-6">
                <div className="features_content">
                    <h5>Local Florist Just For You</h5>
                    <p className="text">Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no. Te tibique intellegam mediocritatem his, est quis.</p>
                    <p className="owner"><i>Mary Byrd, owner</i></p>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
                </div>
            </div>
            <div className="col-6">
                <div className="imges">
                    <img className="img2" src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl2.jpg" alt="" />
                    <img className="img2" src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl1.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features