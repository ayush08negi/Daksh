import React from 'react'
import Layout from '../../components/Layout'
import  { TiTick } from "react-icons/ti";

const Partner = () => {
    return (
        <Layout>
            <div>
                <div className="h-[600px] md:min-h-[650px] bg-fixed bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: "url(" + "/sponserbg.webp" + ")",
                    }}

                >
                    {/* <div className='w-full h-[800px]'
                        style={{ background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))' }}
                    >

                    </div> */}
                </div>

                <div className='sm:h-[600px] flex flex-col items-center md:min-h-[650px] bg-fixed bg-center bg-cover bg-no-repeat '
                    style={{
                        backgroundImage: "url(" + "/sponserbg.webp" + ")",
                    }}
                >
                    <table class="table-auto md:w-[70%] bg-transparent sm:mb-0 mb-10">
                        <tbody className='text-white text-sm sm:text-lg '
                            style={{ background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.433),rgba(2, 2, 2, 0.433))' }}
                        >
                            <tr>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600 md:w-[600px] h-20  text-center">Criteria</td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600">Platinum Sponsor Rs 100k+</td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600">Gold Sponsor Rs 50k+</td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600">Silver Sponsor Rs 20k+</td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600">Sponsor less than Rs 20k</td>
                            </tr>
                            <tr class="">
                                <td class="border px-1 sm:px-4 py-2 md:w-[600px] h-16  text-center">Logo on uniform</td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2"></td>
                                <td class="border px-1 sm:px-4 py-2"></td>
                                <td class="border px-1 sm:px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td class="border px-1 sm:px-4 py-2 md:w-[600px] h-16  text-center">Recognition in news coverage</td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2"></td>
                                <td class="border px-1 sm:px-4 py-2"></td>
                                <td class="border px-1 sm:px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td class="border px-1 sm:px-4 py-2 md:w-[600px] h-16  text-center">Appreciation in our videos</td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2"></td>
                                <td class="border px-1 sm:px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td class="border px-1 sm:px-4 py-2 md:w-[600px] h-16  text-center">Logo on Vehicle</td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td class="border px-1 sm:px-4 py-2 md:w-[600px] h-16  text-center">Recognition amongst other companies at the event site and the college</td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2"></td>
                            </tr>
                            <tr>
                                <td class="border px-1 sm:px-4 py-2 md:w-[600px] h-16  text-center">Appreciation posts on our social media handles</td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                                <td class="border px-1 sm:px-4 py-2 text-lime-600"><TiTick size={30}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Partner
