import { PropsWithChildren } from "react"


export const Wrapper = ({children}: (PropsWithChildren)) => {
  return (
      <div className=' flex justify-between items-center max-w-[1400px] mx-auto w-full px-4'>{children}</div>
  )
}
