const About = () => {
    return (
        <section className="py-20 px-6 bg-linear-to-r from-[#01191d] to-[#022c2b]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">About <span className="text-outline">Me</span></h2>
                <p className="text-gray-500 text-center mb-12">Get to know more about my background and experiance.</p>
                <div className="bg-[#022c2b] backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Who am I?</h3>
                        <p className="text-slate-300 mb-4">
                            I'm a passionate web developer
                        </p>
                        <p className="text-slate-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut est iaculis, condimentum magna in, elementum odio. Praesent tristique, dolor vel accumsan venenatis, augue mi vestibulum lectus, et bibendum diam lorem a arcu. Vivamus pulvinar nulla sem, vulputate imperdiet dolor gravida id. Pellentesque sed mattis mauris. Aenean vel tellus blandit, viverra justo nec, ultricies est. Suspendisse posuere, diam at consectetur consectetur, metus elit cursus libero, vel eleifend nisi est a eros. Nullam auctor, metus vel vehicula accumsan, nulla lacus aliquet sem, eget aliquet justo nibh et lorem. Donec et semper diam, placerat tincidunt erat. Etiam interdum ornare leo lobortis viverra.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-4 text-gray-300">
                            <div>
                                <p>Name:</p>
                                <p className="font-medium text-white">TESTING</p>
                            </div>
                            <div>
                                <p>Email:</p>
                                <p className="font-medium text-white">TESTING</p>
                            </div>
                            <div>
                                <p>Phone No:</p>
                                <p className="font-medium text-white">TESTING</p>
                            </div>
                            <div>
                                <p>Availabilty:</p>
                                <p className="font-medium text-white">TESTING</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">
                            My Experience
                        </h3>

                        <div className="space-y-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-white">
                                            Senior Developer
                                        </h4>
                                        <p className="text-teal-400 text-sm">Tect IT Solution</p>
                                    </div>

                                    <span className="px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-[10px] sm:text-sm">
                                        2012-2025
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-white">
                                            Senior Developer
                                        </h4>
                                        <p className="text-teal-400 text-sm">Tect IT Solution</p>
                                    </div>

                                    <span className="px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-[10px] sm:text-sm">
                                        2012-2025
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;