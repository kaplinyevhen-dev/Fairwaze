const imgOverlayData = "/assets/ee8ac.png";
const imgMapHeader = "/assets/642a6.png";
const imgStatIcon2 = "/assets/a6e70.png";

export default function Section236_18() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center py-[80px] relative size-full" data-node-id="236:18" data-name="Container">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[488px]" data-node-id="212:429" data-name="Feature Content">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="212:430" data-name="Feature Texts">
          <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] bg-clip-text flex flex-col font-['Plus_Jakarta_Sans'] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-[transparent] text-center tracking-[0.42px] uppercase whitespace-nowrap" data-node-id="212:431" style={{ backgroundImage: "linear-gradient(92.66490482390614deg, rgb(189, 167, 0) 54.913%, rgb(127, 193, 21) 7.8911%, rgb(53, 188, 52) 22.693%, rgb(7, 181, 104) 56.78%, rgb(8, 170, 137) 99.485%, rgb(8, 151, 191) 168.47%)", fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
            <p className="leading-[1.45]">Analytics</p>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] font-semibold leading-[normal] min-w-full relative shrink-0 text-[52px] text-[color:var(--text\/primary,#262626)] tracking-[-1.56px] w-[min-content]" data-node-id="212:432">
            Data that drives decisions
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[1.5] relative shrink-0 text-[18px] text-[color:var(--text\/muted,#666)] w-[415.546px]" data-node-id="212:433">
            Get clear insights into booking patterns, revenue trends, and bay utilization — and turn them into action, all from one dashboard.
          </p>
        </div>
      </div>
      <div className="h-[600px] relative rounded-[24px] shrink-0 w-[700px]" data-node-id="212:434" data-name="Picture">
        <div className="absolute bottom-[37px] contents left-[18.5px] top-[37px]" data-node-id="236:30" data-name="Map Section">
          <div className="absolute border-12 border-[var(--background\/white,white)] border-solid bottom-[91.01px] left-[97.5px] overflow-clip rounded-[32px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)] top-[37px] w-[530.815px]" data-node-id="212:439" data-name="Map Image">
            <div className="-translate-x-1/2 absolute aspect-[530.8154296875/407.1439514160156] bottom-0 left-1/2 rounded-bl-[32px] rounded-br-[32px] rounded-tl-[2px] rounded-tr-[2px] top-[64.85px]" data-node-id="212:440" data-name="Overlay Data">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[32px] rounded-br-[32px] rounded-tl-[2px] rounded-tr-[2px]">
                <img alt="" className="absolute h-[110.44%] left-[-19.25%] max-w-none top-[-3.57%] w-[142.09%]" src={imgOverlayData} />
              </div>
            </div>
            <div className="absolute bg-[var(--background\/white,white)] inset-[-5.15px_-9.94px_407.14px_-6.07px]" data-node-id="212:441" data-name="Map Background" />
            <div className="-translate-x-1/2 absolute aspect-[239.49330139160156/37.83447265625] bottom-[419.79px] left-[calc(50%-105.7px)] top-[7.49px]" data-node-id="212:442" data-name="Map Header">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[1414.71%] left-[-10.16%] max-w-none top-[-95.96%] w-[271.15%]" src={imgMapHeader} />
              </div>
            </div>
          </div>
          <div className="absolute bg-[var(--background\/white,white)] bottom-[37px] left-[421.5px] overflow-clip rounded-[20.459px] shadow-[0px_24px_48px_0px_rgba(36,66,52,0.14)] top-[398px] w-[260px]" data-node-id="212:443" data-name="Stats Card 2">
            <div className="-translate-x-1/2 absolute aspect-[262/166] bottom-[-1px] left-1/2 mix-blend-multiply rounded-[12.442px] shadow-[0px_46.546px_93.092px_0px_rgba(0,0,0,0.15)] top-0" data-node-id="212:444" data-name="Stat Icon 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12.442px]">
                <img alt="" className="absolute h-[433.71%] left-[-105.26%] max-w-none top-[-299.11%] w-[410.42%]" src={imgStatIcon2} />
              </div>
            </div>
          </div>
          <div className="absolute bg-[var(--background\/white,white)] bottom-[216px] left-[18.5px] overflow-clip rounded-[20.459px] shadow-[0px_24px_48px_0px_rgba(36,66,52,0.14)] top-[148px] w-[184px]" data-node-id="212:445" data-name="Stats Card 1">
            <div className="-translate-x-1/2 absolute aspect-[197.56973266601562/237] bottom-[-1px] left-[calc(50%+6.38px)] mix-blend-multiply rounded-[12.184px] top-0" data-node-id="212:446" data-name="Stat Icon 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12.184px]">
                <img alt="" className="absolute h-[297.47%] left-[-407.91%] max-w-none top-[-114.25%] w-[532.96%]" src={imgStatIcon2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
