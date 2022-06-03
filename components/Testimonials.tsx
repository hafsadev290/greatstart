import Link from "next/link"
import React from "react"

const Testimonials = () => {
    return (
        <div className="items-center p-4 text-gray-800 bg-white rounded-lg shadow dark:bg-black ">
            <div className="mb-8 text-center">
                <h2 id="testi" className="text-4xl font-bold text-red-600">Testimonials</h2>
                <p className="text-lg text-gray-600 dark:text-white">What others say about me</p>
            </div>
            <div className="mb-2 border-t border-t-orange-400">
                <div className="h-3 text-3xl text-left text-orange-600">“</div>
                <p className="px-4 text-center text-gray-600 dark:text-white">
                    Hafsa is a dynamic, serious person with a great organizational capacity.
                    I can only praise her ability to contribute ideas that are undeniably his great asset, having masteorange all the complexity of our work tools in a short time and then become an expert in turn in Python libraries and scrapping methodologies.
                    Its capacity for technical evolution and analysis of the existing facilitates its integration into any new project and professional context.
                </p>
                <div className="h-3 text-3xl text-right text-orange-600">”</div>
                <div className="text-center">
                    <h5 className="font-bold text-orange-600">Youssef BOUBIA</h5>
                    <p className="text-sm text-gray-600 dark:text-white">CEO & Founder of <a
                        href="https://www.numericway.net/"
                        className="font-bold transition-colors hover:text-orange-500" target="_blank"
                        rel="noopener">NumericWay</a></p>
                </div>
            </div>


            <div className="mb-2 border-t border-t-orange-400">
                <div className="h-3 text-3xl text-left text-orange-600 ">“</div>
                <p className="px-4 text-center text-gray-600 dark:text-white">
                    Hafsa is very quick learning and is able to proactively look and test potential solutions. She does not hesitate to ask for help when needed. Hafsa writes very clean code and is commenting on it in a way future developers can easily continue based on her work.

                    From a personality perspective I find Hafsa very enthusiastic, detailed and trustworthy. [...] I have been working with different developers from a client perspective for at least 15 years now. She was one of the best and I will be keeping in touch with her if more changes are needed for this particular project.
                </p>
                <div className="h-3 text-3xl text-right text-orange-600 ">”</div>
                <div className="text-center">
                    <h5 className="font-bold text-orange-600">Dennis PEETERS</h5>
                    <p className="text-sm text-gray-600 dark:text-white">Client from Belgium</p>
                </div>
            </div>


            <div className="mb-2 border-t border-t-orange-400">
                <div className="h-3 text-3xl text-left text-orange-600 ">“</div>
                <p className="px-4 text-center text-gray-600 dark:text-white">
                During the course of his duties, Hafsa demonstrated outstanding professional diligence and intellectual commitment; having demonstrated a real ability to work dynamically and constructively in an R&D project, in the field of software development.
                    </p>
                <div className="h-3 text-3xl text-right text-orange-600 ">”</div>
                <div className="text-center">
                    <h5 className="font-bold text-orange-600">Jamal BENHAMOU</h5>
                    <p className="text-sm text-gray-600 dark:text-white">CEO of <a
                        href="https://ma.linkedin.com/in/soft-centre-a5159540"
                        className="font-bold transition-colors hover:text-orange-500" target="_blank"
                        rel="noopener">SoftCentre</a></p>
                </div>
            </div>

            
        </div>


    )
}

export default Testimonials;