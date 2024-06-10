const Footer = () => {
    return (
        <div
            className="relative h-[700px] bg-slate-200 shadow-inner"
            style={{ clipPath: "polygon(0% 0,100% 0%,100% 100%,0 100%)" }}
        >
            <div className="relative h-[calc(100svh+700px)] -top-[100svh]">
                <div className="sticky top-[calc(100svh-700px)] h-[700px]">

                    <div className="w-full h-full flex justify-center pt-48"
                    >
                        <div className="w-2/3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, expedita aliquam excepturi eligendi ratione inventore! Excepturi cum soluta, cupiditate, at ex deserunt ipsam repudiandae corporis minima provident, magni animi dolorum?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ut, voluptatibus animi quidem suscipit ullam quaerat, deserunt facere perferendis esse laudantium, debitis a nisi eos illo repudiandae voluptatem! Minima, quam!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cumque modi inventore nesciunt, natus accusamus voluptatum, ratione beatae eum molestiae aut amet animi deserunt sunt velit laudantium sit officia aliquid!
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Footer