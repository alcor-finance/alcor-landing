import React from 'react'
import { memo, useEffect, useMemo, useState } from 'react'
import {useCollapse} from 'react-collapsed'
import cx from 'classnames'

export default function test() {
  const [isExpanded, setExpanded] = useState(false)
  //@ts-ignore
  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded })

  const { onClick: onClickCollapse } = useMemo(
    () =>
      getToggleProps({
        onClick: (e) => {
          // Stop event bubbling
          e.preventDefault()
          e.stopPropagation()

          setExpanded((currentStatus) => !currentStatus)
        },
      }),
    [getToggleProps, setExpanded],
  )
  // @ts-expect-error ref undefined
  const { style: collapseStyles, onTransitionEnd, ref } = useMemo(
    () => getCollapseProps(),
    [getCollapseProps],
  )

  return (
    <section
      aria-hidden="true"
      className={cx(
        'rounded-xl py-3 px-2 mb-2 md:p-4 transition-colors',
        'bg-[#1112150a] dark:bg-[#ffffff0a] hover:bg-[#11121514] dark:hover:bg-[#ffffff14] active:bg-[#11121529] dark:active:bg-[#ffffff29]',
      )}
    >
      <header className="relative flex " onClick={onClickCollapse}>
        <div className="grid grid-cols-6 gap-6 py-3 w-full text-center text-sm md:text-base">
          <div>sdf</div>
          <div className="text-xs md:text-base">sdf</div>
          <div className="text-xs md:text-[15px]">sdf</div>
          <div className="text-[#77DC89]">sdfff</div>
          <div>'sdf'</div>
          <button
            type="button"
            className="mx-auto parent flex h-6 w-6 items-center rounded-md transition-colors hover:bg-[#11121514] active:bg-coal-160 dark:hover:bg-[#ffffff14] dark:active:bg-white-160"
            onClick={onClickCollapse}
            data-testid="button-show-route-details"
          >
            <div className="absolute -inset-y-3 -right-2 w-22 md:-inset-y-4 md:-right-4" />
            <div className="flex h-full w-full items-center justify-center"></div>
          </button>
        </div>
      </header>
      <main {...{ style: collapseStyles, onTransitionEnd }} ref={ref}>
        <div className="grid grid-cols-9">
          <div className="col-span-4"></div>
          <div className="col-span-1 "></div>
          <div className="pt-8 flex flex-col col-span-4 gap-1 text-[8px] sm:text-[15px]">
            <div className="grid grid-cols-2 gap-1.5">
              <div className="col-span-1 justify-self-end ">
              </div>
              <div className="col-span-1 justify-self-end my-4">
                <button className="bg-[#726DA6]/50 rounded-md px-3 py-1.5">
                  <span className="text-[#fff]">click here</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
