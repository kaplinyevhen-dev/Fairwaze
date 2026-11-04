const imgOverlayData = "/assets/ee8ac.png";
const imgMapHeader = "/assets/642a6.png";
const imgStatIcon2 = "/assets/a6e70.png";

export default function Section278_3576() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start px-[16px] py-[40px] relative size-full" data-node-id="278:3576" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 text-center w-full" data-node-id="278:3577" data-name="Main Features Section">
        <div className="bg-clip-text flex flex-col font-['Plus_Jakarta_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-[transparent] tracking-[0.36px] uppercase whitespace-nowrap" data-node-id="278:3578" style={{ backgroundImage: "linear-gradient(91.86297440245914deg, rgb(255, 225, 0) 48.117%, rgb(53, 188, 52) 41.155%, rgb(0, 194, 204) 124.18%, rgb(8, 170, 137) 190.06%, rgb(8, 151, 191) 296.48%)" }}>
          <p className="leading-[normal]">Analytics</p>
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] font-semibold leading-[normal] min-w-full relative shrink-0 text-[36px] text-[color:var(--text\/primary,#262626)] tracking-[-1.08px] w-[min-content]" data-node-id="278:3579">
          Data that drives decisions
        </h2>
        <div className="flex flex-col font-['Plus_Jakarta_Sans'] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[color:var(--text\/muted,#666)] w-[343px]" data-node-id="278:3580">
          <p className="leading-[1.5]">Get clear insights into booking patterns, revenue trends, and bay utilization — and turn them into action, all from one dashboard.</p>
        </div>
      </div>
      <div className="h-[328px] relative rounded-[12.379px] shrink-0 w-full" data-node-id="278:3581" data-name="Picture">
        <div className="absolute bottom-[38.49px] contents left-[0.52px] top-[18.21px]" data-node-id="278:3582" data-name="Map Section">
          <div className="absolute border-[6.189px] border-[var(--background\/white,white)] border-solid bottom-[66.35px] left-[41.26px] overflow-clip rounded-[16.505px] shadow-[0px_1.032px_2.063px_0px_rgba(0,0,0,0.12)] top-[18.2px] w-[273.789px]" data-node-id="278:3583" data-name="Map Image">
            <div className="-translate-x-1/2 absolute aspect-[530.8154296875/407.1439514160156] bottom-0 left-1/2 rounded-bl-[16.505px] rounded-br-[16.505px] rounded-tl-[1.032px] rounded-tr-[1.032px] top-[33.45px]" data-node-id="278:3584" data-name="Overlay Data">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[16.505px] rounded-br-[16.505px] rounded-tl-[1.032px] rounded-tr-[1.032px]">
                <img alt="" className="absolute h-[110.44%] left-[-19.25%] max-w-none top-[-3.57%] w-[142.09%]" src={imgOverlayData} />
              </div>
            </div>
            <div className="absolute bg-[var(--background\/white,white)] inset-[-2.66px_-5.13px_210px_-3.13px]" data-node-id="278:3585" data-name="Map Background" />
            <div className="-translate-x-1/2 absolute aspect-[239.49330139160156/37.83447265625] bottom-[216.52px] left-[calc(50%-54.52px)] top-[3.87px]" data-node-id="278:3586" data-name="Map Header">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[1414.71%] left-[-10.16%] max-w-none top-[-95.96%] w-[271.15%]" src={imgMapHeader} />
              </div>
            </div>
          </div>
          <div className="absolute bg-[var(--background\/white,white)] bottom-[38.49px] left-[208.38px] overflow-clip rounded-[10.552px] shadow-[0px_12.379px_24.758px_0px_rgba(36,66,52,0.14)] top-[204.41px] w-[134.105px]" data-node-id="278:3587" data-name="Stats Card 2">
            <div className="-translate-x-1/2 absolute aspect-[262/166] bottom-[-0.52px] left-1/2 mix-blend-multiply rounded-[6.417px] shadow-[0px_24.008px_48.016px_0px_rgba(0,0,0,0.15)] top-0" data-node-id="278:3588" data-name="Stat Icon 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6.417px]">
                <img alt="" className="absolute h-[433.71%] left-[-105.26%] max-w-none top-[-299.11%] w-[410.42%]" src={imgStatIcon2} />
              </div>
            </div>
          </div>
          <div className="absolute bg-[var(--background\/white,white)] bottom-[130.82px] left-[0.52px] overflow-clip rounded-[10.552px] shadow-[0px_12.379px_24.758px_0px_rgba(36,66,52,0.14)] top-[75.46px] w-[94.905px]" data-node-id="278:3589" data-name="Stats Card 1">
            <div className="-translate-x-1/2 absolute aspect-[197.56973266601562/237] bottom-[-0.52px] left-[calc(50%+3.29px)] mix-blend-multiply rounded-[6.284px] top-0" data-node-id="278:3590" data-name="Stat Icon 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6.284px]">
                <img alt="" className="absolute h-[297.47%] left-[-407.91%] max-w-none top-[-114.25%] w-[532.96%]" src={imgStatIcon2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
