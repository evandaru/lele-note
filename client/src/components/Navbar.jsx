import React from 'react';

function Navbar({ user }) {
    const handleLogout = () => {
        
        console.log('User logged out');
    };

    return (
        <div className="navbar bg-base-100 flex justify-between items-center p-4 shadow-lg">
            <button className="btn btn-sm btn-ghost text-xl">Lele-Note</button>
            <div className="flex items-center space-x-4">
                <span className="text-lg">Selamat datang, {user}!</span>
                <button
                    className="btn btn-sm btn-outline btn-error"
                    onClick={() => document.getElementById('logout_modal').showModal()}>
                    Logout
                </button>
            </div>

            {/* Modal konfirmasi logout */}
            <dialog id="logout_modal" className="modal">
                <div className="modal-box w-11/12 max-w-sm">
                    <h3 className="font-bold text-lg">Konfirmasi Logout</h3>
                    <p className="py-4">Apakah Anda yakin ingin keluar?</p>
                    <div className="modal-action">
                        <button
                            className="btn "
                            onClick={() => document.getElementById('logout_modal').close()}>
                            Cancel
                        </button>
                        <button
                            className="btn btn-sm btn-error"
                            onClick={handleLogout}>
                            Confirm
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Navbar;
