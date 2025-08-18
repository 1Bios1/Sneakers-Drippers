
import './Drawer.scss'

export default function Drawer() {
    return (
        <div style={{ display: 'none' }} className="drawer">
				<div className="drawer__container p-20 d-flex justify-between flex-column">
					
					<div className="mb-30 d-flex justify-between align-center">
						<h2>Корзина</h2>
						<img className='removeBtn cu-p' src="../img/Remove.svg" alt="remove" />
					</div>
					
					<div className="drawer__items flex mb-50">
						<div className="drawer-itm p-15 mb-5 d-flex flex-row align-center">
								<img 
									className='mr-30' 
									width={70} height={70} 
									src="../img/productsIMG//nike.jpg" 
									alt="drawerITMimg" 
								/>
								<div className="d-flex flex-column mr-20">
									<p className='drawer-itm__name mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
									<b>12 999 руб.</b>
								</div>
								<img className='removeBtn' src="../img/Remove.svg" alt="remove" />
						</div>
							
						<div className="drawer-itm p-15 mb-5 d-flex flex-row align-center">
								<img 
									className='mr-30' 
									width={70} height={70} 
									src="../img/productsIMG//nike.jpg" 
									alt="drawerITMimg" 
								/>
								<div className="d-flex flex-column mr-20">
									<p className='drawer-itm__name mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
									<b>12 999 руб.</b>
								</div>
								<img className='removeBtn' src="../img/Remove.svg" alt="remove" />
						</div>

						<div className="drawer-itm p-15 mb-5 d-flex flex-row align-center">
								<img 
									className='mr-30' 
									width={70} height={70} 
									src="../img/productsIMG//nike.jpg" 
									alt="drawerITMimg" 
								/>
								<div className="d-flex flex-column mr-20">
									<p className='drawer-itm__name mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
									<b>12 999 руб.</b>
								</div>
								<img className='removeBtn' src="../img/Remove.svg" alt="remove" />
						</div>
					</div>
	
					<div className="drawer__bottom d-flex justify-center flex-column">
						<div className="drawer__price">

							<div className="price d-flex flex-row justify-between align-center">
								<h3>Итого:</h3>
								<div className="dashed-line"></div>
								<b>21 408 руб.</b>
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
				</div>
			</div>
    )
}