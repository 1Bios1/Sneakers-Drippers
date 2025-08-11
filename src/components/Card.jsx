
export default function Card({ name, price, imgURL, isFavorite }) {

    return (
        <div className="product-card p-20">
			<div className="product-card__container p-30 d-flex flex-column">

                {
                    isFavorite ? (
                        <div className="favorite d-flex align-left">
					        <img width={26} height={24} src="../img/favor-active.svg" alt="favorActive" />
				        </div>
                    ) : (
                        <div className="favorite d-flex align-left">
					        <img width={26} height={24} src="../../img/favor-unactive.svg" alt="favorUnActive" />
				        </div>
                    )     
                }

								
				<img width={133} height={112} className='product-card__image' src={imgURL} alt="sneakerPhoto" />
                <h5 className="product-card__name">{name}</h5>

				<div className='d-flex justify-between align-center'>
					<div className='d-flex flex-column'>
						<span className="product-card__price">Цена:</span>
						<b>{price}</b>
					</div>
					<button className="product-card__buy-btn">
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
    )
}