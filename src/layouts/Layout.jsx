/* eslint-disable react/prop-types */

import ThemeSwitcher from "../component/theme-switcher";

// Layout.jsx
const Layout = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Side Navigation */}
            <div className="w-1/6 bg-themeBackground text-themeForeground">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Dashboard</li>
                </ul>
            </div>
            
            {/* Main Content */}
            <div className="flex-grow">
                {children}
            </div>

            {/* Right Sidebar */}
            <div className="w-1/10 bg-green-400 text-white">
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export default Layout;
