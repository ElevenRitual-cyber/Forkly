export default function AuthDrawer({
    isOpen,
    mode,
    onClose,
    switchMode,
}) {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`
          fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300
          ${isOpen
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }
        `}
            />

            {/* Drawer */}
            <div
                className={`
          fixed top-0 right-0
          h-screen
          bg-white
          z-50
          shadow-2xl

          transition-transform
          duration-300
          ease-in-out

          w-full
          sm:w-[450px]

          ${isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
        `}
            >
                <div className="relative h-full overflow-y-auto p-8">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="
              absolute
              top-4
              right-4
              text-2xl
              cursor-pointer
            "
                    >
                        ✕
                    </button>

                    {mode === "signup" ? (
                        <>
                            <h2 className="text-3xl font-bold">
                                Sign Up
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Create an account to get started
                            </p>

                            <form className="mt-8 space-y-5">
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="
                      w-full
                      p-3
                      rounded-lg
                      bg-gray-100
                      outline-none
                    "
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="
                      w-full
                      p-3
                      rounded-lg
                      bg-gray-100
                      outline-none
                    "
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Phone
                                    </label>

                                    <div className="flex gap-2">
                                        <input
                                            value="+91"
                                            readOnly
                                            className="
                        w-20
                        p-3
                        rounded-lg
                        bg-gray-100
                      "
                                        />

                                        <input
                                            type="text"
                                            placeholder="Enter phone number"
                                            className="
                        flex-1
                        p-3
                        rounded-lg
                        bg-gray-100
                        outline-none
                      "
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Create password"
                                        className="
                      w-full
                      p-3
                      rounded-lg
                      bg-gray-100
                      outline-none
                    "
                                    />
                                </div>

                                <button
                                    className="
                    w-full
                    py-4
                    rounded-xl
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    font-semibold
                  "
                                >
                                    Sign Up
                                </button>
                            </form>

                            <p className="text-center mt-6">
                                Already have an account?

                                <span
                                    onClick={() =>
                                        switchMode("login")
                                    }
                                    className="
                    text-red-500
                    ml-1
                    cursor-pointer
                  "
                                >
                                    Login
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-3xl font-bold">
                                Login
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Welcome back
                            </p>

                            <form className="mt-8 space-y-5">
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        className="
                      w-full
                      p-3
                      rounded-lg
                      bg-gray-100
                      outline-none
                    "
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                        className="
                      w-full
                      p-3
                      rounded-lg
                      bg-gray-100
                      outline-none
                    "
                                    />
                                </div>

                                <button
                                    className="
                    w-full
                    py-4
                    rounded-xl
                    bg-black
                    text-white
                    font-semibold
                  "
                                >
                                    Login
                                </button>
                            </form>

                            <p className="text-center mt-6">
                                Don't have an account?

                                <span
                                    onClick={() =>
                                        switchMode("signup")
                                    }
                                    className="
                    text-red-500
                    ml-1
                    cursor-pointer
                  "
                                >
                                    Sign Up
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}