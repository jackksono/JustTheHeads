import React, { useContext } from 'react'
import { PRODUCTS } from '../ProductsStore'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, FacebookMessengerShareButton, FacebookMessengerIcon, 
    WhatsappShareButton, WhatsappIcon, RedditShareButton, RedditIcon } from 'react-share'

import noGMO from '../Images/SiteImages/NoGMO.png'
import ketoFriendly from '../Images/SiteImages/KetoFriendly.png'
import bakedNotFried from '../Images/SiteImages/BakedNotFried.png'

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
    <div className='relative pt-20 bg-orange-200 bg-allProducts bg-blend-overlay'>
        <div className=''>
            <button className='flex pl-4 text-xs text-black lg:pl-8 lg:text-xl hover:text-white'
                onClick={() =>navigate('/all-products')}
            >Back
            </button>
            <h1 className='font-extrabold text-center text-black lg:text-5xl font-CabinSketch'>{productName}</h1>
                <div className='relative flex lg:px-28 lg:py-10'>
                    <img 
                        src={productImage}
                        alt='productImage'
                        className='lg:h-[450px] lg:w-[337.5px] h-[200px] w-[150px]'
                        loading='lazy'>
                    </img>
                    <div className='lg:w-[700px] justify-center w-[250px] p-2 h-[100px] lg:h-[350px] items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px] lg:m-[30px] lg:ml-20 lg:p-5 bg-orange-400'>
                        <p className='relative text-[15px] text-black lg:text-2xl font-CabinSketch'>Description:</p>
                        <h1 className="items-center justify-center text-[10px] lg:text-lg text-black lg:p-5 font-CabinSketch text-left">{description}</h1>
                        
                        {productQuantity > 0 ?
                        <div className="flex flex-col items-center justify-center">
                        <h1 className='lg:m-2 lg:text-sm text-[10px] font-bold text-center text-black z-10'>In Cart: {productQuantity}</h1>
                        <div className="flex items-center justify-center text-sm text-center">
                            <p className="flex justify-center pr-5 text-black font-CabinSketch ">Quantity:</p>
                            <div className="flex">
                                <button
                                className="cursor-pointer lg:text-xl text-[10px] pr-2 z-10 text-black hover:text-white duration-100"
                                onClick={() => cart.deleteOneFromCart(id)}
                                >
                                -
                                </button>
                                <input
                                className="text-center lg:text-sm text-[12px] w-[75px] h-[15px] lg:w-[100px] lg:h-[25px] z-10 rounded-md text-black"
                                value={productQuantity}
                                onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}
                                ></input>
                                <button
                                className="cursor-pointer lg:text-xl text-[10px] z-10 pl-2 text-black hover:text-white duration-100"
                                onClick={() => cart.addOneToCart(id)}
                                >
                                +
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-center py-5 space-x-5 text-center'> 
                                <Link to='/cart'>
                                    <button className="flex justify-center text-center items-center z-10 bg-transparent text-sm border-2 font-CabinSketch border-black border-solid min-w-[100px]  px-[10px] py-[5px] rounded-lg text-black hover:bg-red-600 hover:text-black cursor-pointer">
                                        Checkout
                                    </button>
                                </Link>
                                <Link to='/all-products'>
                                    <button className="flex justify-center text-center items-center z-10 bg-transparent text-sm border-2 font-CabinSketch border-black border-solid min-w-[100px]  px-[10px] py-[5px] rounded-lg text-black hover:bg-red-600 hover:text-black cursor-pointer">
                                        Continue Shopping
                                    </button>
                                </Link>
                            </div>
                    </div>
                        :
                        <h2 className="flex justify-center text-sm text-center ">
                            <button className="flex justify-center text-center items-center z-10 bg-transparent text-sm border-2 font-CabinSketch  border-black border-solid min-w-[100px] px-[10px] py-[5px] rounded-lg text-black hover:bg-black hover:text-white cursor-pointer "
                                onClick={() => cart.addOneToCart(id)}
                                >
                                Add To Cart {productQuantity> 0 && <> ({productQuantity}) </>}
                            </button>
                        </h2>
                        }
                    </div>
                </div>

                <div className='flex flex-col space-y-2 lg:absolute lg:top-24 lg:right-24'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <img src={noGMO} alt='NoGMO' className='scale-110 w-36 h-36' loading='lazy'></img>
                        <p className='text-sm text-black font-CabinSketch'>Made with</p>
                        <p className='text-sm text-black font-CabinSketch'>Real Ingredients</p>
                    </div>
                    
                    <div className='flex flex-col items-center justify-center text-center'>
                        <img src={ketoFriendly} alt='NoGMO' className='lg:w-28 lg:h-28' loading='lazy'></img>
                        <p className='pt-3 text-sm text-black font-CabinSketch'>Low Carbs</p>
                        <p className='text-sm text-black font-CabinSketch'>No Fillers</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center'>
                        <img src={bakedNotFried} alt='NoGMO' className='w-28 h-28 grayscale' loading='lazy'></img>
                        <p className='pt-3 text-sm text-black font-CabinSketch'>Never</p>
                        <p className='text-sm text-black font-CabinSketch'>Deep Fried!</p>
                    </div>
                </div>

                <div className='absolute transform -translate-x-1/2 lg:pr-36 lg:bottom-32 left-1/2'>
                    <div className='flex items-center space-y-2'>
                        <h1 className='flex p-5 text-black font-CabinSketch'>Share Product:</h1>
                        <div className='mt-2 space-x-5'>
                            <FacebookShareButton url={shareUrl} quote={'Check out these Just The Heads Products!'} hashtag='#JustTheHeads'>
                                <FacebookIcon size={40} round={true} className='hover:opacity-80' />
                            </FacebookShareButton>
                            <TwitterShareButton url={shareUrl}>
                                <TwitterIcon size={40} round={true} className='hover:opacity-80'/>
                            </TwitterShareButton>
                            <WhatsappShareButton url={shareUrl}>
                                <WhatsappIcon size={40} round={true} className='hover:opacity-80'/>
                            </WhatsappShareButton>
                            <FacebookMessengerShareButton url={shareUrl}>
                                <FacebookMessengerIcon size={40} round={true} className='hover:opacity-80'/>
                            </FacebookMessengerShareButton>
                            <RedditShareButton url={shareUrl}>
                                <RedditIcon size={40} round={true} className='hover:opacity-80'/>
                            </RedditShareButton>
                        </div>
                    </div>
                </div>
                
                <div className='flex justify-center px-5 py-2'>
                    <div className='w-3/4 h-[100px] bg-orange-400 border rounded-lg border-black shadow-[0px_3px_15px_rgba(0,0,0,0.2)]'>
                        <h1 className='px-2 text-lg font-bold text-black font-CabinSketch'>Ingredients:</h1>
                        <p className='p-2 text-black font-CabinSketch'>{ingredients}</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default IndividualProduct