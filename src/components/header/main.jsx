import QRCode from "./QRCode/main";

export default function App() {
    return (
        <div className="w-full p-2">
            <div className="flex flex-col items-start mx-4 mt-8">
                <div className="flex justify-between w-full"> {/* Adjust the flex container to space between */}
                    <div className="flex flex-col items-start">
                        <h1 className="text-5xl font-bold">ARTHUR EMBRY</h1>
                        <p className="text-2xl mt-2">Full Stack Software Developer</p>
                        <div className="flex flex-wrap items-center mt-4"> {/* Use flex-wrap for responsiveness */}
                            {/*<div className="flex items-center mr-6">
                                <i className="fas fa-phone-alt mr-2"></i>
                                <span>+1 (512) 825-7586</span>
                            </div>
                            <div className="flex items-center mr-6">
                                <i className="fa fa-envelope mr-2"></i>
                                <span>arthur@operatorai.com</span>
                            </div>*/}
                        </div>
                        <div className="flex flex-wrap items-center mt-4"> {/* Use flex-wrap for responsiveness */}
                            <div className="flex items-center mr-6">
                                <i className="fa-brands fa-linkedin mr-2"></i>
                                <a
                                    href="https://www.linkedin.com/in/arthur-embry/"
                                    className="text-blue-300 hover:text-blue-200"
                                    target="_blank"
                                    rel="noopener noreferrer" // Added for security
                                >
                                    https://www.linkedin.com/in/arthur-embry/
                                </a>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                <span>Austin</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0"> {/* Prevent QR code from shrinking */}
                        <QRCode />
                        <div className="text-center">OperatorAI</div>

                    </div>
                </div>
            </div>
        </div>
    );
}
