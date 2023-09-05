import React, { useContext, lazy, useState } from 'react'
import { PRODUCTS } from '../ProductsStore'
import { useParams, useNavigate } from 'react-router-dom'
import { ImLink } from 'react-icons/im'
import { ShopContext } from '../Context/ShopContext'
import { FacebookShareButton, 
        FacebookIcon, 
        TwitterShareButton, 
        TwitterIcon, 
        FacebookMessengerShareButton, 
        FacebookMessengerIcon, 
        WhatsappShareButton, 
        WhatsappIcon, 
        RedditShareButton, 
        RedditIcon } from 'react-share'

import noGMO from '../Images/SiteImages/NoGMO.png'
import ketoFriendly from '../Images/SiteImages/KetoFriendly.png'
import bakedNotFried from '../Images/SiteImages/BakedNotFried.png'

const MobileIndividualComponent = lazy(()=>  (import('../Pages/MobileVsNon/MobileIndividualProduct')))
const DesktopIndividualComponent = lazy(() => (import('../Pages/MobileVsNon/DesktopIndividualProduct')))

const IndividualProduct = () => {

    const [ successfullyCopied, setSuccessfullyCopied ] = useState(false)
    const { webId }  = useParams()
    const cart = useContext(ShopContext)
    const product = PRODUCTS.find((product) => product.webId === webId)
    const { productImage, productName, id, description, ingredients } = product
    const productQuantity = cart.getProductQuantity(id)

    const navigate = useNavigate()

    const shareUrl = "https://justtheheads.com/products/" + webId
    const isMobile = window.innerWidth <= 640
    // const IndividualComponent = mobile ? MobileIndividualComponent : DesktopIndividualComponent;

  return (
    <div className='relative w-screen pt-32 bg-center bg-cover max-h-max sm:pt-20 bg-color-background bg-allProducts bg-blend-lighten'>
        <div className=''>
            <button className='flex pl-4 text-xs font-bold text-color-text lg:pl-8 lg:text-xl font-CabinSketch hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-color-secondary hover:text-white'
                onClick={() =>navigate('/all-products')}
            >Back
            </button>
            <h1 className='pt-5 text-3xl font-extrabold text-center lg:pt-0 text-color-text lg:text-5xl font-CabinSketch'>{productName}</h1>
            <div className='relative flex justify-center lg:px-28 lg:py-5 sm:justify-start'>
                <img 
                    src={productImage}
                    alt='productImage'
                    className='sm:h-[450px] sm:w-[337.5px] h-full w-11/12 sm:mx-0 sm:mt-0 mx-2 mt-12'
                    loading='lazy'>
                </img>
                <div>
                    {isMobile ? (
                       null
                    ) : <DesktopIndividualComponent description={description} productQuantity={productQuantity} id={id} cart={cart} ></DesktopIndividualComponent>}
                </div>
            </div>

            <div className='pt-5'>
                {isMobile ? (
                    <MobileIndividualComponent description={description} productQuantity={productQuantity} id={id} cart={cart} ></MobileIndividualComponent>
                ) : null }
            </div>

            <div className='flex flex-row sm:flex-col justify-center space-x-8 sm:space-x-0 sm:space-y-2 sm:absolute sm:top-[5%] pt-10 sm:right-[7.5%]'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <img src={noGMO} alt='NoGMO' className='w-20 h-20 sm:w-28 sm:h-28 grayscale' loading='lazy'></img>
                    <p className='pt-3 text-sm font-bold text-color-text font-CabinSketch'>Made with</p>
                    <p className='text-sm font-bold text-color-text font-CabinSketch'>Real Ingredients</p>
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

            <div className='flex pt-5 sm:flex-none sm:transform sm:-translate-x-1/2 sm:absolute sm:pr-28 sm:bottom-32 sm:left-1/2'>
                <div className='flex items-center space-y-2'>
                
                    <h1 className='flex px-10 font-bold sm:p-5 sm:px-5 text-color-text font-CabinSketch'>Share Product:</h1>
                    
                    <div className='space-x-8 place-content-center'>
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
                        
                    
                        <button onClick={() => { //how can I raise this button to line up with the others
                                navigator.clipboard.writeText(shareUrl);
                                setSuccessfullyCopied(true)}}
                                className='w-10 h-10 text-xs bg-black border border-black rounded-full hover:opacity-80'>
                            <ImLink className='mb-4 ml-2 text-2xl text-white'/>
                        </button>
                  
                        
                        <div>
                            {successfullyCopied ? (
                            <div class="flex px-0 text-sm text-gray-800 rounded-lg bg-gray-50 text-center justify-center " role="alert">
                            <span class="font-medium">Successfully Copied to Clipboard!</span> 
                        </div>
                    ) : null}
                    </div>
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