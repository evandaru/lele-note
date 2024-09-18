import Footer from "../components/Footer"

function Home() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Lele-Note</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className="flex justify-center gap-5">
                            <button className="btn btn-secondary btn-wide">Login</button>
                            <button className="btn  btn-outline btn-wide">Register</button>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

        </div>)
}

export default Home