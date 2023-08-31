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
    <div className='relative pt-32 max-h-max sm:pt-20 bg-color-background bg-allProducts bg-blend-lighten'>
        <div className=''>
            <button className='flex pl-4 text-xs font-bold text-color-text lg:pl-8 lg:text-xl font-CabinSketch hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-color-secondary hover:text-white'
                onClick={() =>navigate('/all-products')}
            >Back
            </button>
            <h1 className='font-extrabold text-center text-color-text lg:text-5xl font-CabinSketch'>{productName}</h1>
            <div className='relative flex pt-10 lg:px-28 lg:py-5'>
                <img 
                    src={productImage}
                    alt='productImage'
                    className='sm:h-[450px] sm:w-[337.5px] h-[175px] w-[125px] sm:mx-0 sm:mt-0 mx-2 mt-12'
                    loading='lazy'>
                </img>
                <div className='lg:w-[700px] mx-5 sm:mx-0 justify-center w-full p-2 h-auto lg:h-[400px] items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-[25px]  lg:ml-20 lg:p-5 bg-transparent'>
                    <p className='relative text-[15px] text-color-text lg:text-2xl font-CabinSketch font-bold'>Description:</p>
                    <h1 className="items-center justify-center p-2 text-xs text-left lg:text-lg text-color-text lg:p-5 font-CabinSketch">{description}</h1>
                    
                    {productQuantity > 0 ?
                    <div className="flex flex-col items-center justify-center">
                        <h1 className='lg:m-2 lg:text-sm text-[10px] font-bold text-center text-color-text font-CabinSketch'>In Cart: {productQuantity}</h1>
                        <div className="flex items-center justify-center text-sm text-center">
                            <p className="flex justify-center pr-5 font-bold text-color-text font-CabinSketch">Quantity:</p>
                            <div className="flex">
                                <button
                                    className="z-10 pr-2 text-xs font-medium duration-100 cursor-pointer lg:text-xl font-CabinSketch text-color-text hover:text-white"
                                    onClick={() => cart.deleteOneFromCart(id)}
                                >
                                -
                                </button>
                                <input
                                    className="text-center font-CabinSketch font-bold lg:text-sm text-[12px] w-[75px] h-[15px] lg:w-[100px] lg:h-[25px] z-10 rounded-md text-color-text"
                                    value={productQuantity}
                                    onChange={(e) => cart.updateCartItemCount(Number(e.target.value), id)}
                                ></input>
                                <button
                                    className="z-10 pl-2 text-xs font-medium duration-100 cursor-pointer font-CabinSketch lg:text-xl text-color-text hover:text-white"
                                    onClick={() => cart.addOneToCart(id)}
                                >
                                +
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-center py-5 text-center sm:space-x-5'> 
                                <Link to='/cart'>
                                    <button className="flex font-bold justify-center text-center items-center z-10 text-xs  sm:text-sm border-2 font-CabinSketch border-black border-solid min-w-[100px] py-[7px] sm:px-[10px] sm:py-[5px] rounded-lg text-color-text bg-color-primary hover:text-color-text cursor-pointer">
                                        Checkout
                                    </button>
                                </Link>
                                <Link to='/all-products'>
                                    <button className="flex justify-center font-bold text-center items-center z-10 text-xs  sm:text-sm border-2 font-CabinSketch border-black border-solid min-w-[100px]  sm:px-[10px] sm:py-[5px] rounded-lg text-color-text bg-color-secondary hover:text-color-text cursor-pointer">
                                        Continue Shopping
                                    </button>
                                </Link>
                            </div>
                        </div>
                            :
                            <h2 className="flex justify-center text-xs text-center sm:text-sm ">
                                <button className="flex justify-center text-center font-bold items-center bg-color-primary  border-2 font-CabinSketch  border-black border-solid px-[5px] py-[2.5px] sm:min-w-[100px] sm:px-[10px] sm:py-[5px] rounded-lg text-color-text hover:bg-black hover:text-white cursor-pointer "
                                    onClick={() => cart.addOneToCart(id)}
                                    >
                                    Add To Cart {productQuantity> 0 && <> ({productQuantity}) </>}
                                </button>
                            </h2>
                            }
                        </div>
                </div>

                <div className='flex flex-row sm:flex-col justify-center space-x-8 sm:space-x-0 sm:space-y-2 sm:absolute sm:top-[5%] pt-10 sm:right-[7.5%]'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <img src={noGMO} alt='NoGMO' className='relative mb-12 w-28 h-28 sm:scale-110 sm:w-36 sm:h-36' loading='lazy'></img>
                        <p className='absolute pt-20 text-sm font-bold sm:pt-24 text-color-text font-CabinSketch'>Made with</p>
                        <p className='absolute text-sm font-bold pt-28 sm:pt-32 text-color-text font-CabinSketch'>Real Ingredients</p>
                    </div>
                    
                    <div className='flex flex-col items-center justify-center text-center'>
                        <img src={ketoFriendly} alt='NoGMO' className='w-20 h-20 sm:w-28 sm:h-28' loading='lazy'></img>
                        <p className='pt-3 text-sm font-bold text-color-text font-CabinSketch'>Low Carbs</p>
                        <p className='text-sm font-bold text-color-text font-CabinSketch'>No Fillers</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center'>
                        <img src={bakedNotFried} alt='NoGMO' className='w-20 h-20 sm:w-28 sm:h-28 grayscale' loading='lazy'></img>
                        <p className='pt-3 text-sm font-bold text-color-text font-CabinSketch'>Never</p>
                        <p className='text-sm font-bold text-color-text font-CabinSketch'>Deep Fried!</p>
                    </div>
                </div>

                <div className='flex sm:flex-none sm:transform sm:-translate-x-1/2 sm:absolute sm:pr-36 sm:bottom-32 sm:left-1/2'>
                    <div className='flex items-center space-y-2'>
                        <h1 className='flex px-10 font-bold sm:p-5 sm:px-5 text-color-text font-CabinSketch'>Share Product:</h1>
                        <div className='mt-2 space-x-8'>
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
                
                <div className='flex justify-center h-auto px-5 py-2'>
                    <div className='sm:w-3/4 sm:h-[100px] bg-color-secondary border rounded-lg border-black shadow-[0px_3px_15px_rgba(0,0,0,0.2)]'>
                        <h1 className='px-2 text-lg font-bold text-color-text font-CabinSketch'>Ingredients:</h1>
                        <p className='p-2 font-medium text-color-text font-CabinSketch'>{ingredients}</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default IndividualProduct