
import { useEffect, useState } from 'react'
import axios from 'axios';
import './Drawer.scss'

export default function Drawer({ onCloseCart, cartItms, setCartItms }) {

	const [totalPrice, setTotalPrice] = useState(0);

	function removeItmFromCart(id) {
		const itmToRemove = cartItms.find(itm => itm.id === id)
	
		if (itmToRemove) {
			axios.delete(`https://68aaa9f9909a5835049cb81d.mockapi.io/productsInCart/${id}`)
			setCartItms(prev => [...prev.filter(itm => itm.id !== itmToRemove.id)])
		} else {
			return
		}
	}
	
	useEffect(() => {
		const total = cartItms.reduce((globalSum, itm) => {
			return globalSum += itm.price;
		}, 0)

		setTotalPrice(total)
	}, [cartItms])

    return (
        <div className="drawer">
				<div className="drawer__container p-20 d-flex justify-between flex-column">

					<div className="mb-30 d-flex justify-between align-center">
						<h2>Корзина</h2>
						<img onClick={onCloseCart} className='removeBtn cu-p' src="../img/Remove.svg" alt="remove" />
					</div>

					{
						cartItms.length > 0 ? (
							<>
								<div className="drawer__items flex mb-50">
									{
										cartItms.map(itm => {
											return  <div key={itm.id} className="drawer-itm p-15 mb-5 d-flex flex-row align-center">
														<img 
															className='mr-30' 
															width={70} height={70} 
															src={itm.imgURL}
															alt="drawerITMimg" 
														/>
														<div className="d-flex flex-column mr-20">
															<p className='drawer-itm__name mb-5'>{itm.name}</p>
															<b>{itm.price} руб.</b>
														</div>
														<img onClick={() => removeItmFromCart(itm.id)} className='removeBtn' src="../img/Remove.svg" alt="remove" />
													</div>
										})
									}
								</div>

								<div className="drawer__bottom d-flex justify-center flex-column">
									<div className="drawer__price">

										<div className="price d-flex flex-row justify-between align-center">
											<h3>Итого:</h3>
											<div className="dashed-line"></div>

											<b>{ totalPrice }</b>
										</div>

										<div className="discount d-flex flex-row justify-between align-center">
											<h3>Налог 5%</h3>
											<div className="dashed-line"></div>
											<b>500 руб.</b>
										</div>
										
									</div>
									<button className='greenbtn d-flex flex-row justify-center align-center'>
										Оформить заказ
										<div className="arrowRight">
											<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
									</button>
								</div>
							</>
						) : (
							<div className="drawer-empty d-flex flex justify-center align-center">
								<div className="drawer-empty__container d-flex align-center justify-center flex-column">
									<img src="../../../img/box.svg" alt="drawerEmpty" />
									<div className="text">
										<h1>Корзина пуста</h1>
										<p className='opacity-5'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
									</div>
									<button onClick={onCloseCart} className='greenbtn d-flex flex-row justify-center align-center'>
										Вернуться
										<div className="arrowLeft">
											<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												<path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
										</div>
									</button>
								</div>
							</div>
						)
					}

				</div>
			</div>
    )
}