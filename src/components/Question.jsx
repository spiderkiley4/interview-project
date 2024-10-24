import VideoPlayer from "./VideoPlayer";

function Question({ src, type, num, children, darkMode, ...props }) {
    return(
        <div className="flex-1 mb-6">
            <h2 className={'text-2xl fond-bold text-center transition-colors duration-1000' + (darkMode ? " text-white" : "")}>{num}</h2>
            <p className={'mb-2 text-xl text-center transition-colors duration-1000' + (darkMode ? " text-white" : "")}>{children}</p>
            <VideoPlayer src={src} type={type} />
        </div>
    );
}

export default Question;