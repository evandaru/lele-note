function Login() {

    return (
        <div className="flex justify-center items-center h-screen relative">
            {/* Tombol di pojok kiri atas */}
            <div className="absolute top-14 left-14 space-x-2">
                <button className="btn btn-sm btn-circle btn-outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Card Login */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <label className="form-control w-full max-w-xs">
                        <input type="text" placeholder="Enter your username" className="input input-bordered w-full max-w-xs" />
                    </label>

                    <label className="form-control w-full max-w-xs mt-4">
                        <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                    </label>

                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-sm btn-secondary w-full">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
