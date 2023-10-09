"use client"

import { CustomButtonProps } from "@/types"

 function CustomButton({ title, handleClick, containerStyles, btnType }: CustomButtonProps) {
  return (
    <button disabled={false} type={btnType} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
        <span className='flex-1'>
            {title}
        </span>
    </button>
  )
}

export default CustomButton