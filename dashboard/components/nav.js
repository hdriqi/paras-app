import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
} from 'react-share'

const Nav = ({ toggleProfileSidebar }) => {
  const [showSocialShare, setSocialShare] = useState(false)
  const identifier = useSelector(state => state.auth.identifier)
  const shareMsg = `Check out my personal website by Paras!`

  return (
    <nav className="border-solid border-b border-gray-300 ">
      <div className="h-full w-full max-w-6xl relative mx-auto py-2 px-4">
        <ul className="h-full flex items-center justify-between">
          <li>
            <div className="flex relative" onClick={() => setSocialShare(!showSocialShare)} >
              <p className="cursor-pointer mr-2">{identifier && `${identifier}.paras.id`}</p>
              <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14 6C14 6.28742 14.0303 6.56777 14.0879 6.83801L9.01694 9.3735C8.28363 8.53189 7.20393 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16C7.20393 16 8.28363 15.4681 9.01694 14.6265L14.0879 17.162C14.0303 17.4322 14 17.7126 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C16.7961 14 15.7164 14.5319 14.9831 15.3735L9.91208 12.838C9.96968 12.5678 10 12.2874 10 12C10 11.7126 9.96968 11.4322 9.91208 11.162L14.9831 8.6265C15.7164 9.46811 16.7961 10 18 10C20.2091 10 22 8.20914 22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6ZM8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12ZM18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8ZM20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18C16 16.8954 16.8954 16 18 16C19.1046 16 20 16.8954 20 18Z" fill="#1a202c"/>
              </svg>
              {
                showSocialShare && (
                  <div className="absolute bg-white rounded-lg shadow-lg p-2" style={{
                    top: `24px`,
                    right: `-12px`
                  }}>
                    <div className="mb-2 bg-gray-900 rounded-full flex items-center justify-center" style={{
                      width: `32px`,
                      height: `32px`
                    }}>
                      <a href={`https://${identifier}.paras.id`} target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM3.06565 10.9074C3.35719 11.2805 4.16782 11.758 5.40826 12.1475C5.89668 12.3009 6.4316 12.4357 7.00555 12.5502C7.00186 12.3679 7 12.1844 7 12C7 8.67236 7.60556 5.6673 8.65455 3.64231C5.66412 4.84042 3.46628 7.59699 3.06565 10.9074ZM7.12914 14.6108C5.52334 14.3317 4.14644 13.9093 3.10296 13.3658C3.58837 16.5542 5.74677 19.1927 8.65455 20.3577C7.88867 18.8792 7.35916 16.8783 7.12914 14.6108ZM9.17891 14.8773C10.076 14.9581 11.0209 15 12 15C12.9633 15 13.9124 14.9454 14.8253 14.8441C14.3742 18.4417 13.127 21 12 21C10.8765 21 9.63347 18.4574 9.17891 14.8773ZM14.9863 12.8045C14.0367 12.9275 13.028 13 12 13C10.9558 13 9.95341 12.9483 9.01531 12.8502C9.00522 12.5706 9 12.287 9 12C9 6.98399 10.5936 3 12 3C13.4064 3 15 6.98399 15 12C15 12.2713 14.9953 12.5397 14.9863 12.8045ZM16.8792 14.5269C16.6539 16.8289 16.1208 18.861 15.3454 20.3577C18.3046 19.1721 20.4876 16.4606 20.9212 13.1964C19.861 13.7479 18.4647 14.209 16.8792 14.5269ZM20.9285 10.8601C20.458 11.3883 18.9737 12.0157 16.9962 12.4541C16.9987 12.3035 17 12.1521 17 12C17 8.67236 16.3944 5.6673 15.3454 3.64231C18.3216 4.83471 20.5128 7.57077 20.9285 10.8601Z" fill="white"/>
                        </svg>
                      </a>
                    </div>
                    <FacebookShareButton className="mb-2" quote={shareMsg} url={`https://${identifier}.paras.id`}>
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton className="mb-2" title={shareMsg} url={`https://${identifier}.paras.id`}>
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <RedditShareButton className="mb-2" title={shareMsg} url={`https://${identifier}.paras.id`}>
                      <RedditIcon size={32} round />
                    </RedditShareButton>
                    <TelegramShareButton className="mb-2" title={shareMsg} url={`https://${identifier}.paras.id`}>
                      <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <WhatsappShareButton title={shareMsg} url={`https://${identifier}.paras.id`}>
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </div>
                )
              }
            </div>
          </li>
          <li >
            <a onClick={() => toggleProfileSidebar()} className="text-center cursor-pointer" >
              <svg className="m-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.3623 27.481L25.6459 4.49962" stroke="black" strokeWidth="2.5"/>
                <path d="M1 22.9814C5.51844 17.5966 12.5702 9.19265 12.5702 9.19265" stroke="black" strokeWidth="2.5"/>
                <path d="M19.438 22.7878L31.0082 8.99904" stroke="black" strokeWidth="2.5"/>
              </svg>
              <p className="text-sm font-medium">MENU</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
