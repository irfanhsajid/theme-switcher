

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Welcome to TaskList Pro</h1>
        <p className="text-gray-600 mb-6">Enter your email address to get started</p>
        <div className="mb-4">
          <input
            type="email"
            placeholder="name@yourcompany.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 w-full mb-4">
          Continue with Email
        </button>
        <div className="flex justify-center items-center mb-4">
          <span className="text-gray-500 mr-2">OR</span>
          <div className="h-px bg-gray-300 flex-grow"></div>
          <span className="text-gray-500 ml-2">Continue with</span>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-white border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
              className="h-5 w-5 mr-2"
            />
            Google
          </button>
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300 flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/640px-Apple_logo_black.svg.png"
              alt="Apple Logo"
              className="h-5 w-5 mr-2"
            />
            Apple
          </button>
        </div>
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            Already have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;