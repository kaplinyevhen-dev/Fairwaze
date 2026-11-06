const imgGroup = "/assets/e3348.svg";
const imgGroup1 = "/assets/07c68.svg";
const imgFrame = "/assets/b43f4.svg";

export default function Section212_624() {
  return (
    <div className="bg-[var(--background\/white,white)] content-stretch flex flex-col gap-[48px] items-start px-[192px] py-[80px] relative size-full" data-node-id="212:624" data-name="Container">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="212:626" data-name="Navigation Bar">
        <div className="h-[40px] overflow-clip relative shrink-0 w-[184px]" data-node-id="212:627" data-name="logo-full 2">
          <div className="absolute contents inset-[0.54%_0.45%_0.2%_-0.1%]" data-node-id="212:628" data-name="Group">
            <div className="absolute inset-[26.25%_0.45%_5.19%_28.28%]" data-node-id="212:629" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
            </div>
            <div className="absolute inset-[0.54%_78.53%_0.2%_-0.1%]" data-node-id="212:639" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex font-['Plus_Jakarta_Sans'] font-medium gap-[40px] items-center leading-[0] relative shrink-0 text-[15px] text-[color:var(--text\/primary,#262626)] whitespace-nowrap" data-node-id="212:648" data-name="Navigation Links">
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="212:649">
            <p className="leading-[normal]">Pricing</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="212:650">
            <p className="leading-[normal]">Demo</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="212:651">
            <p className="leading-[normal]">Contact</p>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#d9d9d9] relative shrink-0 w-full" data-node-id="212:690" aria-hidden="true" />
      <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 w-full" data-node-id="212:681" data-name="Footer">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="212:682" data-name="Copyright Container">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans'] font-normal justify-center relative shrink-0 text-[14px] text-[color:var(--text\/muted,#666)] whitespace-nowrap" data-node-id="212:683">
            <p className="leading-[1.76]">© fairwaze. All rights reserved</p>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="212:684" data-name="Social Icon">
            <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-node-id="212:685" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex font-['Plus_Jakarta_Sans'] font-medium gap-[19.72px] items-start justify-center relative shrink-0 text-[14px] whitespace-nowrap" data-node-id="212:687" data-name="Footer Links">
          <div className="flex flex-col justify-center relative shrink-0 text-[#999]" data-node-id="212:688">
            <p className="leading-[normal]">Privacy Policy</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[color:var(--text\/muted,#666)]" data-node-id="212:689">
            <p className="leading-[normal]">Terms of Service</p>
          </div>
        </div>
      </div>
      <div className="footer-wordmark absolute h-[203px] left-[191.5px] top-[277px] w-[1216px]" data-node-id="236:25" data-name="Bg picture">
        <img alt="fairwaze" className="footer-wordmark-image" src="/assets/footer-wordmark.png" />
      </div>
    </div>
  );
}
