import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InfoPanel from 'components/InfoPanel'
import alipay from 'assets/alipay.png'
import vscLogo from 'assets/vsc-logo.svg'

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [content, setShowContent] = useState('donate')

  const icon = content === 'donate' ? 'coffee' : 'terminal'
  const color = content === 'donate' ? 'bg-yellow-100' : 'bg-blue-300'
  const btnColor = content === 'donate' ? 'bg-yellow-300' : 'bg-blue-400'
  const iconColor = content === 'donate' ? 'text-yellow-500' : 'text-blue-600'

  return (
    <>
      <div className="w-full text-sm text-center mt-4 pb-1 ease-in" onClick={(e) => e.currentTarget.blur()}>
        <a href="#" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} className="text-gray-500 dark:text-gray-400 mr-3" />
        </a>
        <span
          className="text-gray-500 dark:text-gray-400 cursor-pointer no-underline hover:no-underline "
          onClick={(e) => {
            setShowContent('donate')
            setShowModal(true)
            e.currentTarget.blur()
          }}
        >
          @ Qwerty Learner
        </span>
      </div>
    </>
  )
}

export default Footer
