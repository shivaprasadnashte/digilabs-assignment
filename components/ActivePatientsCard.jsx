import React from 'react'
import { IoMdAlarm } from "react-icons/io";

function ActivePatientsCard() {
    return (
        <>
            <div className=' bg-[#1B2C4F] text-xs sm:text-sm  rounded-3xl flex flex-col gap-2 p-2'>
                <div className=' flex items-center gap-4 justify-evenly'>
                    <p>
                        08:00 am
                    </p>
                    <div className=' relative  h-14  flex  items-center'>
                        -----------------------------------
                        <div className='bg-[#F5E5E5] sm:w-3/4 text-black left-4 flex absolute rounded-full p-1 '>
                            <div className=' bg-white w-10 h-10 overflow-hidden flex justify-center rounded-full'>
                                <img src="https://s3-alpha-sig.figma.com/img/8188/ea25/526e9a7c831b0e2bab81659c8eb0b0a0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kKb1Rp4IX1zuiy6QfkWfua1LTcjoqvNzVb4CYGyCRbHjhJHA37vARJ5UIeWUPSVeEDrXC40gSKX7vtBSF-B76XgXNH-zQJuhcxFcIaP-zlsbQ4GLdYDtGLd9EZgiH7CWgrPRLEO1EtZgx8q~eFiQ~maByKEeLaUn4YSlQQpRi7usxNbzYMS-eFRVHenJOBfxJ1Uefg2zIYC7TkjxVthiOIP6-tk8-nj-mVeQWOwKNLPffnoJYhDBGDA2i6PEbcuxi~-9PhqqnVtlRDlNmdnMhlzYGUIJbkyTvDi83Tby8GZDURxjELhq1~p43zpAGcXHAcK3DDRfGL4KipJzmUUOhw__"
                                    alt="prof_img" />
                            </div>
                            <div>
                                <p className=' font-bold '>Mark Jaxon</p>
                                <div className=' flex text-xs items-center gap-1'>
                                    <IoMdAlarm />
                                    <p>08:00-09:00 am</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className=' flex items-center justify-evenly'>
                    <p>
                        09:00 am
                    </p>
                    <div className=' relative  h-14 flex justify-end items-center'>
                        -----------------------------------
                        <div className='bg-[#E5F5E6] sm:w-3/4 text-black  flex absolute rounded-full p-1 '>
                            <div className=' bg-white w-10 h-10 overflow-hidden flex justify-center rounded-full'>
                                <img src="https://s3-alpha-sig.figma.com/img/5a4e/063a/657a9761fafc59051e7854809d98f287?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYdQxb8xdKafq0GwGruXCwZybYwcc5cuK8Exbt0MdfOEncfwxDwORC0jxBl7D~DTvaEI~A5jWCftQouzXVRie6zWo-FXIKP9iKSzzl7ocFD3ofjFf8LjZhHZJ0dts7fsj~Nvq4rJ8pNvA1Lckft3X6eIkValUKJIj5lMI0xpJuOeSco3y8lKqxV5THzsl6vLavK9xcaPbU35bw-d7slzEh2iTF4sUe05Un6~YyvD3QgdAk16~PY9vTvRt5fRQae~FBhuD9QySBwTh9h~xIQeyCbststvmHDWCSWPzmRpJ7DpLb035ap1q3Ingu7N5CGibEA2g7YfzGmOv8rWU7jpSQ__"
                                    alt="prof_img" />
                            </div>
                            <div>
                                <p className=' font-bold'>Maira Khan</p>
                                <div className=' flex text-xs items-center gap-1'>
                                    <IoMdAlarm />
                                    <p>09:00-10:00 am</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                <div className=' flex items-center justify-evenly'>
                    <p>
                        10:00 am
                    </p>
                    <div className=' relative  h-14 flex justify-start items-center'>
                        -----------------------------------
                        <div className='bg-[#C9F3EC] sm:w-3/4 text-black  flex absolute rounded-full p-1 '>
                            <div className=' bg-white w-10 h-10 overflow-hidden flex justify-center rounded-full'>
                                <img src="https://s3-alpha-sig.figma.com/img/ecc3/f4d5/8ea858251bb3a26c2c6991921dc7e074?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMTyOXe~oC9C~qrTlroukAItaTha4wUK5j5l4qSQoUejoUt29PAcZBvv0L5womA8vi3ZOh~t8dxJZ4FTaP7MihWpxx48CcZh48bwfngjSuRg1v19GK3HjBZFoaIMST3jRnlyrhweIEtVJhlIvyvo8QHaCltAKFQaq1iueyWlecHLyO-z~NlmoC8D4aR8TXYYqzUDWfffjMUAOgSsX2wa3qnLIKnH4JCgZJqUaRzerNXo2t9hMkTYuOzhwmxGZ5QRq8bdZfn0e14VLy1qdj4r2bFEfPzOXyd8em4YsABPvx5M9hFSkBtl3mX-iQlbgDPO8Nb3bP4s2GyyQ2NcxZBwiA__"
                                    alt="prof_img" />
                            </div>
                            <div>
                                <p className=' font-bold'>Brick Zon</p>
                                <div className=' flex text-xs items-center gap-1'>
                                    <IoMdAlarm />
                                    <p>10:00-11:00 am</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className=' flex items-center justify-evenly'>
                    <p>
                        11:00 am
                    </p>
                    <div className=' relative  h-14 flex  justify-center items-center'>
                        -----------------------------------
                        <div className='bg-[#111729] w-3/4 text-black  flex absolute rounded-full p-1 '>
                            <div className=' w-full justify-center flex text-white'>
                                Break Time
                            </div>
                        </div>
                    </div>

                </div>


                <div className=' flex items-center justify-evenly'>
                    <p>
                        12:00 am
                    </p>
                    <div className=' relative  h-14 flex  items-center'>
                        -----------------------------------
                        <div className='bg-[#F5E5E5] sm:w-3/4 text-black right-4 flex absolute rounded-full p-1 '>
                            <div className=' bg-white w-10 h-10 overflow-hidden flex justify-center rounded-full'>
                                <img src="https://s3-alpha-sig.figma.com/img/8014/985c/dae4c93a3cbc0642a8d459d32918c0aa?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqbU9VOu3LAOdnP92XBBZHwkpeJozYQRjNCBnHYfY7v7Bk4YwqmoyhlJ9vMlDGkpVsey8EL7eAvjwVJvOrLG4OoX99DXRZiv2oHvPKQGAw6rwW-bqquMLeZ3xVh0aQALxGrmd1QOh1sWf47Uro32W04OSp0C-LUuJgrvyIyr9lipgvPdy4pKuvpJE-iaXqOy09M25ckw3aT7NXo0b1kHOAAdA~SoUnMzJZ0ST5ShBrqGMQGBO4kCzOwWqn4~-xciCHwF8Gu940qa2gNLGzuHPG3A93lxgAdP3R9zMmJVwLcDB6aMHnx-sqYFSoK1eUkjXoBpuT7~WftGDKZMqSInNQ__"
                                    alt="prof_img" />
                            </div>
                            <div>
                                <p className=' font-bold'>Alexa Max</p>
                                <div className=' flex text-xs items-center gap-1'>
                                    <IoMdAlarm />
                                    <p>12:00-13:00 am</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ActivePatientsCard