"use client";

import Image from "next/image";
import React from "react";

export default function Tes() {
  return (
    <div className="relative w-full h-screen flex flex-col sm:max-w-[390px] sm:mx-auto sm:shadow bg-white">
      <main className="w-full min-h-screen flex flex-col py-1 overflow-auto bg-[#191919]">
        <header className="flex flex-col gap-0 p-1">
          <section className="shrink-0 flex flex-col justify-center">
            <div className="">
              <Image src="/earth-europe.png" alt="earth-europe" width={432} height={432} className="w-[432px] h-auto" />
            </div>
          </section>
        </header>

        <section className="flex-1 flex flex-col gap-1 px-6 p-1">
          <form action="" className="flex flex-col gap-6 mb-8">
            <div className="flex flex-col gap-8">
              <div className="space-y-2">
                <div className="transition duration-200 relative group: w-full flex items-center border border-transparent h-10 rounded gap-2 px-2.5 bg-secondary-50 hover:bg-secondary-100 focus:focus-within:bg-secondary-100">
                  <input
                    type="email"
                    placeholder="econev@gmail.com"
                    className="flex-1 w-full text-[#fff] text-[14px] font-semibold h-[56px] bg-[#000000] rounded-[12px] outline-none placeholder-[#AEA8B2] text-sm -mx-2.5 px-3 border border-transparent focus:border-[#E25319] active:border-[#E25319]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="transition duration-200 relative group: w-full flex items-center border border-transparent h-10 rounded gap-2 px-2.5 bg-secondary-50 hover:bg-secondary-100 focus:focus-within:bg-secondary-100">
                  <input
                    type="password"
                    placeholder="password"
                    className="flex-1 w-full text-[#AEA8B2] text-[14px] font-semibold h-[56px] bg-[#000000] rounded-[12px] outline-none placeholder-[#AEA8B2] text-sm -mx-2.5 px-3 border border-transparent focus:border-[#E25319] active:border-[#E25319]"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="rememberMe" className="hidden peer" />
                <label htmlFor="rememberMe" className="w-6 h-6 bg-[#E25319] rounded-md flex items-center justify-center peer-checked:bg-[#E25319] peer-checked:border-none peer-checked:text-white text-transparent font-bold">
                  ✓
                </label>
                <span className="text-sm text-[14px] font-normal text-white">Remember Me</span>
              </div>
              <div className="">
                <button className="text-sm text-[14px] font-normal text-[#E25319] bg-transparent border-none outline-none" type="button">
                  Forgot Password ?
                </button>
              </div>
            </div>

            <div className="flex flex-col w-full h-auto">
              <button
                className="transition ease-out duration-200 w-auto inline-flex items-center justify-center py-0 rounded-[12px] text-center font-semibold outline-none border border-transparent focus-visible:ring-2 disabled:cursor-not-allowed disabled:bg-neutral-200 bg-[#E25319] text-white text-[18px] bg-primary h-[56px]"
                type="button"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center w-full h-auto gap-5 bg-transparent mb-2">
            <div className="hr-cs text-red-600"></div>
            <p className="w-full text-[#4B576B] text-[12px] font-normal">Or continue with</p>
            <div className="hr-cs text-red-600"></div>
          </div>

          <div className="flex items-center justify-center w-full h-auto gap-4 mb-8">
            <button
              type="button" className="h-[72px] w-full flex items-center justify-center bg-[#000000] rounded-[12px]"
              style={{
                border: "1px solid transparent",
                borderRadius: "12px",
                backgroundImage: "linear-gradient(#000, #000), linear-gradient(45deg, #535E6E, #2B3744)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2043_770)">
                  <path
                    d="M7.09188 19.3382L5.978 23.4964L1.90681 23.5825C0.690125 21.3259 0 18.7439 0 16.0002C0 13.347 0.64525 10.845 1.789 8.64192H1.78988L5.41437 9.30642L7.00212 12.9092C6.66981 13.878 6.48869 14.918 6.48869 16.0002C6.48881 17.1747 6.70156 18.3 7.09188 19.3382Z"
                    fill="#FBBB00"
                  />
                  <path
                    d="M31.7203 13.0111C31.904 13.9789 31.9998 14.9785 31.9998 16.0001C31.9998 17.1456 31.8794 18.2629 31.6499 19.3407C30.8711 23.0084 28.8359 26.2111 26.0166 28.4774L26.0157 28.4766L21.4504 28.2436L20.8043 24.2102C22.6751 23.1131 24.1371 21.3961 24.9072 19.3407H16.3516V13.0111H25.032H31.7203Z"
                    fill="#518EF8"
                  />
                  <path
                    d="M26.0152 28.4763L26.0161 28.4772C23.2742 30.6811 19.7911 31.9998 15.9994 31.9998C9.90625 31.9998 4.60869 28.5941 1.90625 23.5823L7.09131 19.3379C8.4425 22.944 11.9212 25.5111 15.9994 25.5111C17.7524 25.5111 19.3946 25.0372 20.8038 24.21L26.0152 28.4763Z"
                    fill="#28B446"
                  />
                  <path
                    d="M26.2128 3.6835L21.0295 7.927C19.5711 7.01538 17.8471 6.48875 16.0001 6.48875C11.8295 6.48875 8.28575 9.17356 7.00225 12.909L1.78994 8.64175H1.78906C4.45194 3.50769 9.81631 0 16.0001 0C19.8823 0 23.4418 1.38287 26.2128 3.6835Z"
                    fill="#F14336"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2043_770">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              type="button" className="h-[72px] w-full flex items-center justify-center bg-[#000000] rounded-[12px]"
              style={{
                border: "1px solid transparent",
                borderRadius: "12px",
                backgroundImage: "linear-gradient(#000, #000), linear-gradient(45deg, #535E6E, #2B3744)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path
                    d="M31.9265 16.1288C31.9265 24.274 25.8598 30.9834 18.0199 31.9831V19.5566H21.7957H21.8604L21.8687 19.4925L22.446 15.0037L22.4567 14.9208H22.3731H18.0199V12.1295C18.0199 11.4829 18.1098 10.9599 18.4135 10.5973C18.7147 10.2377 19.2415 10.0187 20.1593 10.0187H20.1593L22.5258 10.0175L22.5993 10.0175V9.94399V5.92979V5.86533L22.5354 5.85688C22.1241 5.80255 20.7165 5.68011 19.0795 5.68011C17.3584 5.68011 15.9013 6.20817 14.8742 7.2279C13.847 8.24781 13.2581 9.75149 13.2581 11.6868V14.9231H9.47191H9.39838V14.9966V19.4854V19.5589H9.47191H13.2581V31.8718C5.77191 30.5663 0.0735341 24.0254 0.0735341 16.1334C0.0735341 7.30026 7.20448 0.13994 16.0001 0.13994C24.7955 0.13994 31.9265 7.30027 31.9265 16.1288Z"
                    fill="#6B9CFF"
                    stroke="#6B9CFF"
                    strokeWidth="0.147068"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              type="button" className="h-[72px] w-full flex items-center justify-center bg-[#000000] rounded-[12px]"
              style={{
                border: "1px solid transparent",
                borderRadius: "12px",
                backgroundImage: "linear-gradient(#000, #000), linear-gradient(45deg, #535E6E, #2B3744)",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path
                    d="M32 3.18129C30.8018 3.71213 29.5308 4.06057 28.2292 4.21504C29.5849 3.40254 30.6257 2.11591 31.1159 0.582909C29.8272 1.34764 28.4172 1.88644 26.947 2.17604C25.7494 0.900159 24.0432 0.102783 22.1549 0.102783C18.5291 0.102783 15.5895 3.04229 15.5895 6.66779C15.5895 7.18241 15.6476 7.68341 15.7595 8.16404C10.3032 7.89016 5.46575 5.27654 2.22762 1.30454C1.66262 2.27416 1.33888 3.40204 1.33888 4.60504C1.33888 6.88279 2.498 8.89216 4.2595 10.0695C3.21694 10.0369 2.19731 9.7553 1.28575 9.24829C1.28537 9.27579 1.28537 9.30329 1.28537 9.33091C1.28537 12.5118 3.54837 15.1653 6.55162 15.7684C5.58486 16.0314 4.57079 16.0699 3.58687 15.8809C4.42225 18.4891 6.84688 20.3871 9.71963 20.4403C7.47275 22.201 4.64188 23.2506 1.56613 23.2506C1.03613 23.2506 0.513625 23.2195 0 23.1589C2.90538 25.0216 6.35625 26.1085 10.0638 26.1085C22.1396 26.1085 28.743 16.1046 28.743 7.42916C28.743 7.14441 28.7368 6.86129 28.724 6.57979C30.0093 5.65064 31.1186 4.4998 32 3.18129Z"
                    fill="#55ACEE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="32" height="26.125" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

            <div className="flex items-center justify-center w-full h-auto gap-2">
              <p className="text-[#fff] text-[14px] font-normal">New User?</p>
              <button type="button" className="text-[#E25319] text-[14px] font-normal bg-transparent border-none outline-none">
                Sign Up
              </button>
            </div>
          <div className="flex items-center justify-center w-full h-auto gap-5 bg-transparent mb-2">
          </div>

        </section>
      </main>
    </div>
  );
}
