import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const lang = "vi"; // "en" or "vi"

const NotFound = ({ language, sendDataToApp }) => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    // Show Vietnamese content
    if (lang.trim() === 'vi') {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold">404</h1>
                    <p className="mb-4 text-xl text-gray-600">Trang này không tồn tại</p>
                    <a href="/" className="text-blue-500 underline hover:text-blue-700">
                        Về trang chủ
                    </a>
                </div>
            </div>
        );
    } else {
        // Show English content
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold">404</h1>
                    <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
                    <a href="/" className="text-blue-500 underline hover:text-blue-700">
                        Return to Home
                    </a>
                </div>
            </div>
        );
    }
};

export default NotFound;
