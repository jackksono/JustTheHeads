import React, { useContext } from 'react'
import { PRODUCTS } from '../ProductsStore'
import { useParams, useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, FacebookMessengerShareButton, FacebookMessengerIcon, WhatsappShareButton, WhatsappIcon } from 'react-share'

const IndividualProduct = (props) => {
    const { webId }  = useParams()
    const cart = useContext(ShopContext)
    const product = PRODUCTS.find((product) => product.webId === webId)
    const { productImage, productName, id, description, ingredients } = product
    const productQuantity = cart.getProductQuantity(id)

    const navigate = useNavigate()

    const shareUrl = "https://justtheheads.com/products/" + webId
    console.log("shareUrl:", shareUrl);

  return (
    <div className='pt-20 overflow-auto bg-orange-200 bg-allProducts bg-blend-overlay'>
        <div className=''>
            <button className='flex pl-4 text-xs lg:pl-8 lg:text-xl hover:text-white'
                onClick={() =>navigate('/all-products')}
            >Back
            </button>
            <h1 className='text-center text-black lg:text-4xl font-Kanit'>{productName}</h1>
            <div className='flex lg:px-28 lg:py-10'>
                <img 
                    src={productImage}
                    alt='productImage'
                    className='lg:h-[450px] lg:w-[337.5px] h-[200px] w-[150px]'>
                </img>
                <div className='lg:w-[700px] justify-center w-[250px] p-2 h-[100px] lg:h-[250px] items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px] lg:m-[30px] lg:p-5 bg-orange-400'>
                    <p className='relative text-[15px] text-black lg:text-2xl font-Kanit'>Description:</p>
                    <h1 className="items-center justify-center text-[10px] lg:text-lg text-center text-black lg:p-5 font-Kanit">{description}</h1>

                    {productQuantity > 0 ?
                    
                    <h2 className="flex justify-center pt-20 text-sm text-center">
                        <button className='cursor-pointer' onClick={() => cart.deleteOneFromCart(id)}> - </button>
                        <input className='text-center ' value={productQuantity} onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}></input>
                        <button className='cursor-pointer' onClick={() => cart.addOneToCart(id)}> + </button>
                    </h2>
                    :
                    <h2 className="flex justify-center pt-16 text-sm text-center">
                        <button className="flex justify-center text-center items-center z-10 bg-transparent text-sm border-2  border-black border-solid min-w-[100px] px-[10px] py-[5px] rounded-lg text-black hover:bg-black hover:text-white cursor-pointer "
                            onClick={() => cart.addOneToCart(id)}
                            >
                            Add To Cart {productQuantity> 0 && <> ({productQuantity}) </>}
                        </button>
                    </h2>
                    }
                </div>
            </div>
            <div className='items-center'>
                <div className='absolute flex-col items-center space-y-2'>
                    <h1 className='p-5 text-black'>Share on:</h1>
                    <div className='mt-2 space-x-5'>
                        <FacebookShareButton shareUrl={shareUrl}>
                            <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>
                        <TwitterShareButton shareUrl={shareUrl}>
                            <TwitterIcon size={40} round={true}/>
                        </TwitterShareButton>
                        <WhatsappShareButton shareUrl={shareUrl}>
                            <WhatsappIcon size={40} round={true}/>
                        </WhatsappShareButton>
                        <FacebookMessengerShareButton shareUrl={shareUrl}>
                            <FacebookMessengerIcon size={40} round={true}/>
                        </FacebookMessengerShareButton>
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-5 py-2'>
                <div className='w-3/4 h-[150px] bg-orange-400 border rounded-lg border-black shadow-[0px_3px_15px_rgba(0,0,0,0.2)]'>
                    <h1 className='px-2 text-lg font-bold text-black'>Ingredients:</h1>
                    <p className='p-2 text-black'>{ingredients}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndividualProduct