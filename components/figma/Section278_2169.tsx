const imgGroup17 = "/assets/c014f.svg";
const imgBackgroundImage = "/assets/82ed8.png";
const imgImage = "/assets/87a65.png";
const imgImage1 = "/assets/fb55c.png";
const imgImage2 = "/assets/cd636.png";
const imgImage3 = "/assets/ec7b2.png";
const imgCalloutImage = "/assets/77367.png";
const imgMainImage = "/assets/55c12.png";
const imgBackgroundSquare = "/assets/83953.png";
const imgSectionImage = "/assets/a6e70.png";
const imgGroup = "/assets/3fc7f.svg";
const imgGroup1 = "/assets/b2097.svg";
const imgEllipse41840 = "/assets/eea93.svg";
const imgEllipse41841 = "/assets/d0751.svg";
const imgEllipse41839 = "/assets/99452.svg";
const imgEllipse57 = "/assets/0a9dd.svg";
const imgVector3228 = "/assets/a38f5.svg";

type ButtonProps = {
  className?: string;
  label?: string;
  size?: "Large";
  state?: "Default";
  variant?: "Primary" | "Secondary";
};

function Button({ className, label = "Button", size = "Large", state = "Default", variant = "Primary" }: ButtonProps) {
  const isPrimaryAndLargeAndDefault = variant === "Primary" && size === "Large" && state === "Default";
  const isSecondaryAndLargeAndDefault = variant === "Secondary" && size === "Large" && state === "Default";
  return (
    <div className={className || `content-stretch flex h-[44px] items-center justify-center relative rounded-[10px] ${isSecondaryAndLargeAndDefault ? "bg-[rgba(38,38,38,0.05)] border border-[rgba(38,38,38,0.08)] border-solid pb-[12px] pt-[10px] px-[24px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0)]" : String.raw`bg-[var(--text\/primary,#262626)] drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] gap-[12px] pl-[24px] pr-[20px] py-[12px] w-[122px]`}`} id={isSecondaryAndLargeAndDefault ? "node-242_71" : "node-242_53"}>
      {isPrimaryAndLargeAndDefault && (
        <>
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Plus_Jakarta_Sans'] font-medium leading-[normal] relative shrink-0 text-[15px] text-[color:var(--text\/on-dark,white)] whitespace-nowrap" data-node-id="242:54">
            {label}
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="236:805">
            <div className="absolute h-[11.933px] left-[2.02px] top-[2.03px] w-[11.952px]" data-node-id="236:806">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup17} />
            </div>
          </div>
        </>
      )}
      {isSecondaryAndLargeAndDefault && (
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Plus_Jakarta_Sans'] font-medium leading-[normal] relative shrink-0 text-[15px] text-[color:var(--text\/primary,#262626)] whitespace-nowrap" data-node-id="242:72">
          {label}
        </p>
      )}
    </div>
  );
}

export default function Section278_2169() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center pt-[16px] relative size-full" data-node-id="278:2169" data-name="Container">
      <div className="bg-[var(--background\/white,white)] border border-[var(--border\/light,#e6e6e6)] border-solid content-stretch drop-shadow-[0px_8px_8px_rgba(0,0,0,0.03)] flex items-center justify-between px-[20px] py-[16px] relative rounded-[16px] shrink-0 w-[343px]" data-node-id="278:2170" data-name="Header">
        <div className="h-[24px] overflow-clip relative shrink-0 w-[110.25px]" data-node-id="278:2171" data-name="logo-full 1">
          <div className="absolute contents inset-[0.54%_0.2%_0.54%_0.17%]" data-node-id="278:2172" data-name="Group">
            <div className="absolute inset-[26.15%_0.2%_5.51%_28.52%]" data-node-id="278:2173" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
            </div>
            <div className="absolute inset-[0.54%_78.25%_0.54%_0.17%]" data-node-id="278:2183" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="278:2192" data-name="Menu Icon Container">
          <div className="relative shrink-0 size-[24px]" data-node-id="278:2193" data-name="Menu">
            <div className="absolute inset-0 rounded-[2px]" data-node-id="278:2194" data-name="Menu Button Background" />
            <div className="absolute contents inset-[20.23%_8.33%_20.29%_8.33%]" data-node-id="278:2195" data-name="Menu Icon Lines">
              <div className="absolute bg-[var(--text\/primary,#262626)] inset-[20.23%_8.33%_73.86%_8.33%] rounded-[1.667px]" data-node-id="278:2196" data-name="Menu Line" />
              <div className="absolute bg-[var(--text\/primary,#262626)] inset-[47.02%_8.33%_47.08%_8.33%] rounded-[1.667px]" data-node-id="278:2197" data-name="Menu Line" />
              <div className="absolute bg-[var(--text\/primary,#262626)] inset-[73.8%_8.33%_20.29%_8.33%] rounded-[1.667px]" data-node-id="278:2198" data-name="Menu Line" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-[343px]" data-node-id="278:2199" data-name="Hero Content">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-[335px]" data-node-id="278:2200" data-name="Hero Texts">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="278:2201" data-name="Subheading Container">
            <div className="[word-break:break-word] bg-clip-text flex flex-col font-['Plus_Jakarta_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-[transparent] text-center uppercase whitespace-nowrap" data-node-id="278:2202" style={{ backgroundImage: "var(--section-label-gradient)" }}>
              <p className="leading-[normal]">All-in-one venue platform</p>
            </div>
          </div>
          <h1 className="[word-break:break-word] font-['Plus_Jakarta_Sans'] font-semibold leading-[1.1] relative shrink-0 text-[44px] text-[color:var(--text\/primary,#262626)] text-center tracking-[-1.32px] w-[294px]" data-node-id="278:2203">
            Run screen golf smarter
          </h1>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans'] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-[color:var(--text\/muted,#666)] text-center w-[344px]" data-node-id="278:2204">
            <p className="leading-[1.5]">Everything you need to manage bookings, sell memberships, and grow your venue — without the spreadsheets, phone calls, and busywork.</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="278:2205" data-name="Hero Buttons">
          <Button className="bg-[var(--text\/primary,#262626)] content-stretch drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] flex gap-[12px] h-[44px] items-center justify-center pl-[24px] pr-[20px] py-[12px] relative rounded-[10px] shrink-0 w-[155px]" label="Get started" />
          <Button className="bg-[rgba(38,38,38,0.05)] border border-[rgba(38,38,38,0.08)] border-solid content-stretch flex h-[44px] items-center justify-center pb-[12px] pt-[10px] px-[24px] relative rounded-[10px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0)] shrink-0" label="Book a demo" variant="Secondary" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans'] font-normal justify-center leading-[0] left-[90.5px] text-[12px] text-[color:var(--text\/muted,#666)] text-center top-[302.5px] whitespace-nowrap" data-node-id="278:2208">
          <p className="leading-[normal]">Transition in under a day</p>
        </div>
      </div>
      <div className="h-[320px] overflow-clip relative shrink-0 w-full" data-node-id="278:2209" data-name="Hero Section picture">
        <div className="absolute bg-[var(--border\/light,#e6e6e6)] h-[271.675px] left-[-204.14px] overflow-clip rounded-[21.562px] top-[58.85px] w-[977.276px]" data-node-id="278:2210" data-name="Image Container">
          <div className="absolute flex h-[1391.862px] items-center justify-center left-[-96.76px] top-[-470.58px] w-[1574.336px]" data-node-id="278:2211">
            <div className="flex-none rotate-[122.7deg]">
              <div className="h-[1376.26px] relative w-[770.406px]" data-name="Background Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundImage} />
              </div>
            </div>
          </div>
          <div className="absolute bg-[#079455] border-[#079455] border-[0.539px] border-solid h-[322.345px] left-[47.71px] mix-blend-color opacity-90 top-[-24.26px] w-[929.302px]" data-node-id="278:2212" data-name="Overlay Shape" />
          <div className="absolute flex h-[260.894px] items-center justify-center left-[57.14px] top-0 w-[862.461px]" data-node-id="278:2214">
            <div className="-rotate-90 flex-none">
              <div className="h-[862.461px] relative w-[260.894px]" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[274.37px] items-center justify-center left-[49.59px] top-[-8.62px] w-[533.109px]" data-node-id="278:2215">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[274.37px] relative w-[533.109px]" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage1} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[339.055px] items-center justify-center left-[83.99px] top-[-31.8px] w-[546.585px]" data-node-id="278:2216">
            <div className="flex-none rotate-180">
              <div className="blur-[13.476px] h-[339.055px] relative w-[546.585px]" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage2} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[940.428px] items-center justify-center left-[62px] mix-blend-hue top-[-262.64px] w-[1645.75px]" data-node-id="278:2217">
            <div className="flex-none rotate-180">
              <div className="bg-[#066594] h-[940.428px] opacity-10 relative w-[1645.75px]" data-name="Image" />
            </div>
          </div>
          <div className="absolute flex h-[307.252px] items-center justify-center left-[609.92px] top-[-24.26px] w-[310.113px]" data-node-id="278:2218">
            <div className="-scale-y-100 flex-none">
              <div className="blur-[18.866px] h-[307.252px] relative w-[310.113px]" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage3} />
              </div>
            </div>
          </div>
          <div className="absolute h-[478.127px] left-[550.9px] mix-blend-plus-lighter top-[-102.96px] w-[555.209px]" data-node-id="278:2219">
            <div className="absolute inset-[-0.45%_-0.39%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse41840} />
            </div>
          </div>
          <div className="absolute flex h-[324.105px] items-center justify-center left-[751.8px] mix-blend-overlay top-[140.88px] w-[333.311px]" data-node-id="278:2222">
            <div className="flex-none rotate-[-137.02deg]">
              <div className="h-[140.021px] relative w-[325.13px]">
                <div className="absolute inset-[-38.5%_-16.58%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse41841} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[287.451px] items-center justify-center left-[-103.69px] mix-blend-overlay top-[-190.3px] w-[539.649px]" data-node-id="278:2223">
            <div className="flex-none rotate-[-15.46deg]">
              <div className="h-[155.272px] relative w-[516.965px]">
                <div className="absolute inset-[-34.72%_-10.43%]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse41839} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[98.644px] left-[198.1px] top-[199.44px] w-[89.48px]" data-node-id="278:2225">
            <div className="absolute inset-[-81.1%_-89.41%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse57} />
            </div>
          </div>
        </div>
        <div className="absolute hero-glass h-[1082px] left-[45px] rounded-[20px] shadow-[0px_0px_40px_0px_rgba(10,41,27,0.1),0px_40px_25px_0px_rgba(10,41,27,0.08)] to-[12.751%] to-[rgba(255,255,255,0.05)] top-[28px] w-[1320px]" data-node-id="278:2227" data-name="Background Shape" />
        <div className="-translate-x-1/2 absolute contents left-[calc(50%+227px)] top-[36px]" data-node-id="278:2228" data-name="Feature Image Container">
          <div className="-translate-x-1/2 absolute border-[#e8e9ea] border-[0.874px] border-solid h-[606.804px] left-[calc(50%+227px)] overflow-clip rounded-[12px] shadow-[0px_1.871px_3.743px_0px_rgba(0,0,0,0.2)] top-[36px] w-[723px]" data-node-id="278:2229" data-name="Callout Image">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
              <div className="absolute bg-[var(--background\/white,white)] inset-0 rounded-[12px]" />
              <img alt="" className="absolute max-w-none object-bottom rounded-[12px] size-full" src={imgCalloutImage} />
            </div>
            <div className="absolute h-[612.951px] left-[-197.69px] top-[-91.2px] w-[921.068px]" data-node-id="278:2230" data-name="Main Image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[103.86%] left-0 max-w-none top-[-3.37%] w-[100.21%]" src={imgMainImage} />
              </div>
            </div>
            <div className="absolute contents left-[60.85px] top-[217.21px]" data-node-id="278:2231" data-name="User Container">
              <div className="absolute bg-[var(--background\/blue-tint,#eff8ff)] content-stretch flex h-[9.494px] items-center justify-center left-[60.85px] p-[0.936px] top-[217.21px]" data-node-id="278:2232" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--surface\/blue-link,#175cd2)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2233" style={{ fontVariationSettings: '"wdth" 100' }}>
                  James Fletcher
                </p>
              </div>
            </div>
            <div className="absolute contents left-[62.1px] top-[369.76px]" data-node-id="278:2234" data-name="User Container">
              <div className="absolute bg-[var(--background\/blue-tint,#eff8ff)] content-stretch flex h-[9.494px] items-center justify-center left-[62.1px] p-[0.936px] top-[369.76px]" data-node-id="278:2235" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--surface\/blue-link,#175cd2)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2236" style={{ fontVariationSettings: '"wdth" 100' }}>
                  David Nakamura
                </p>
              </div>
            </div>
            <div className="absolute contents left-[403.06px] top-[258.92px]" data-node-id="278:2237" data-name="User Container">
              <div className="absolute bg-[var(--background\/blue-tint,#eff8ff)] content-stretch flex h-[9.494px] items-center justify-center left-[403.06px] p-[0.936px] top-[258.92px]" data-node-id="278:2238" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--surface\/blue-link,#175cd2)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2239" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Finn Eriksson
                </p>
              </div>
            </div>
            <div className="absolute contents left-[631.28px] top-[258.95px]" data-node-id="278:2240" data-name="User Container">
              <div className="absolute bg-[var(--background\/blue-tint,#eff8ff)] content-stretch flex h-[9.494px] items-center justify-center left-[631.28px] p-[0.936px] top-[258.95px]" data-node-id="278:2241" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--surface\/blue-link,#175cd2)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2242" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Connor Walsh
                </p>
              </div>
            </div>
            <div className="absolute contents left-[631.13px] top-[341.98px]" data-node-id="278:2243" data-name="User Container">
              <div className="absolute bg-[var(--background\/blue-tint,#eff8ff)] content-stretch flex h-[9.494px] items-center justify-center left-[631.13px] p-[0.936px] top-[341.98px]" data-node-id="278:2244" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--surface\/blue-link,#175cd2)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2245" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Carlos Mendes
                </p>
              </div>
            </div>
            <div className="absolute contents left-[288.99px] top-[286.54px]" data-node-id="278:2246" data-name="User Container">
              <div className="absolute bg-[var(--background\/light-gray,#f5f5f5)] content-stretch flex h-[9.494px] items-center justify-center left-[288.99px] p-[0.936px] top-[286.54px]" data-node-id="278:2247" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--text\/ui-label,#414651)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2248" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Isabel Correia
                </p>
              </div>
            </div>
            <div className="absolute contents left-[289.72px] top-[425.31px]" data-node-id="278:2252" data-name="User Container">
              <div className="absolute bg-[var(--background\/green-tint,#eafef3)] content-stretch flex h-[9.494px] items-center justify-center left-[289.72px] p-[0.936px] top-[425.31px]" data-node-id="278:2253" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--brand\/green-dark,#0b7547)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2254" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Ethan Blackwood
                </p>
              </div>
            </div>
            <div className="absolute contents left-[516.86px] top-[203.33px]" data-node-id="278:2255" data-name="User Container">
              <div className="absolute bg-[var(--background\/green-tint,#eafef3)] content-stretch flex h-[9.494px] items-center justify-center left-[516.86px] p-[0.936px] top-[203.33px]" data-node-id="278:2256" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[#0b7547] text-[7.86px] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2257" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Katarina Lindqvist
                </p>
              </div>
            </div>
            <div className="absolute contents left-[175.13px] top-[175.66px]" data-node-id="278:2258" data-name="User Container">
              <div className="absolute bg-[var(--background\/light-gray,#f5f5f5)] content-stretch flex h-[9.494px] items-center justify-center left-[175.13px] p-[0.936px] top-[175.66px]" data-node-id="278:2259" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--text\/ui-label,#414651)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2260" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Tom Caldwell
                </p>
              </div>
            </div>
            <div className="absolute contents left-[175.55px] top-[397.54px]" data-node-id="278:2261" data-name="User Container">
              <div className="absolute bg-[var(--background\/light-gray,#f5f5f5)] content-stretch flex h-[9.494px] items-center justify-center left-[175.55px] p-[0.936px] top-[397.54px]" data-node-id="278:2262" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--text\/ui-label,#414651)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2263" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Elena Vasquez
                </p>
              </div>
            </div>
            <div className="absolute contents left-[403.03px] top-[120.13px]" data-node-id="278:2264" data-name="User Container">
              <div className="absolute bg-[var(--background\/light-gray,#f5f5f5)] content-stretch flex h-[9.494px] items-center justify-center left-[403.03px] p-[0.936px] top-[120.13px]" data-node-id="278:2265" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--text\/ui-label,#414651)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2266" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Camille Rousseau
                </p>
              </div>
            </div>
            <div className="absolute contents left-[403.14px] top-[342.05px]" data-node-id="278:2267" data-name="User Container">
              <div className="absolute bg-[var(--background\/light-gray,#f5f5f5)] content-stretch flex h-[9.494px] items-center justify-center left-[403.14px] p-[0.936px] top-[342.05px]" data-node-id="278:2268" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--text\/ui-label,#414651)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2269" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Ingrid Halvorsen
                </p>
              </div>
            </div>
            <div className="absolute bg-[var(--background\/white,white)] h-[15.906px] left-[4.41px] top-[93.13px] w-[31.812px]" data-node-id="278:2270" data-name="Message Square" />
            <div className="absolute contents left-[516.95px] top-[314.22px]" data-node-id="278:2273" data-name="User Container">
              <div className="absolute bg-[var(--background\/light-gray,#f5f5f5)] content-stretch flex h-[9.494px] items-center justify-center left-[516.95px] p-[0.936px] top-[314.22px]" data-node-id="278:2274" data-name="User Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-semibold leading-[1.15] relative shrink-0 text-[7.86px] text-[color:var(--text\/ui-label,#414651)] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2275" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Kenji Watanabe
                </p>
              </div>
            </div>
            <div className="absolute contents left-[5.14px] top-[96.97px]" data-node-id="278:2276" data-name="Time Container">
              <div className="absolute bg-[var(--background\/white,white)] content-stretch flex h-[9.494px] items-center justify-center left-[5.14px] p-[0.936px] top-[96.97px]" data-node-id="278:2277" data-name="Time Inner Container">
                <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter'] font-medium leading-[1.15] relative shrink-0 text-[#079455] text-[7.86px] tracking-[-0.1572px] whitespace-nowrap" data-node-id="278:2278" style={{ fontVariationSettings: '"wdth" 100' }}>
                  5:11 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[62px] left-0 top-[258px] w-[569px]" data-node-id="278:2279" data-name="Background Square">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundSquare} />
        </div>
        <div className="absolute bg-[var(--background\/white,white)] h-[96px] left-[16px] overflow-clip rounded-[11.778px] shadow-[-15px_24px_48px_0px_rgba(0,0,0,0.12)] top-[167px] w-[151.13px]" data-node-id="278:2280" data-name="Section Image Container">
          <div className="absolute h-[96px] left-0 mix-blend-multiply rounded-[7.163px] shadow-[0px_26.797px_53.595px_0px_rgba(0,0,0,0.12)] top-0 w-[151.13px]" data-node-id="278:2281" data-name="Section Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7.163px]">
              <img alt="" className="absolute h-[431.76%] left-[-105.06%] max-w-none top-[-297.17%] w-[409.63%]" src={imgSectionImage} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[5px] bg-[rgba(0,0,0,0.08)] h-[814.219px] left-0 top-0 w-[375px]" data-node-id="278:2951" />
      <div className="absolute bg-[var(--background\/white,white)] border border-[var(--border\/light,#e6e6e6)] border-solid drop-shadow-[0px_16px_16px_rgba(0,0,0,0.1)] h-[296px] left-[16px] rounded-[16px] top-[16px] w-[343px]" data-node-id="278:2909" data-name="Header">
        <div className="absolute h-[24px] left-[19px] overflow-clip top-[15px] w-[110.25px]" data-node-id="278:2910" data-name="logo-full 1">
          <div className="absolute contents inset-[0.54%_0.2%_0.54%_0.17%]" data-node-id="278:2911" data-name="Group">
            <div className="absolute inset-[26.15%_0.2%_5.51%_28.52%]" data-node-id="278:2912" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
            </div>
            <div className="absolute inset-[0.54%_78.25%_0.54%_0.17%]" data-node-id="278:2922" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
            </div>
          </div>
        </div>
        <div className="absolute left-[298px] size-[24px] top-[15px]" data-node-id="278:2931" data-name="Menu Icon Container">
          <div className="absolute left-0 size-[24px] top-0" data-node-id="278:2932" data-name="Menu">
            <div className="absolute inset-0 rounded-[2px]" data-node-id="278:2933" data-name="Menu Button Background" />
          </div>
          <div className="absolute contents inset-[18.45%]" data-node-id="278:2989" data-name="Menu Icon Lines">
            <div className="absolute flex inset-[18.45%] items-center justify-center" data-node-id="278:2990" style={{ containerType: "size" }}>
              <div className="flex-none h-[hypot(-6.61479cqw,6.61479cqh)] rotate-45 w-[hypot(93.3852cqw,93.3852cqh)]">
                <div className="bg-[var(--text\/primary,#262626)] relative rounded-[1.667px] size-full" data-name="Menu Line" />
              </div>
            </div>
            <div className="absolute flex inset-[18.45%] items-center justify-center" data-node-id="278:2991" style={{ containerType: "size" }}>
              <div className="-rotate-45 flex-none h-[hypot(6.61479cqw,6.61479cqh)] w-[hypot(93.3852cqw,-93.3852cqh)]">
                <div className="bg-[var(--text\/primary,#262626)] relative rounded-[1.667px] size-full" data-name="Menu Line" />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Plus_Jakarta_Sans'] font-medium gap-[24px] items-center justify-center leading-[0] left-1/2 text-[16px] text-[color:var(--text\/primary,#262626)] top-[87px] whitespace-nowrap" data-node-id="278:2942" data-name="Navigation Links">
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="278:2943">
            <p className="leading-[normal]">Pricing</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="278:2944">
            <p className="leading-[normal]">Demo</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0" data-node-id="278:2945">
            <p className="leading-[normal]">Contact</p>
          </div>
        </div>
        <div className="absolute bg-[var(--text\/primary,#262626)] content-stretch drop-shadow-[0px_3px_3px_rgba(0,0,0,0.2)] flex gap-[12px] h-[44px] items-center justify-center left-[15px] px-[24px] py-[12px] rounded-[10px] top-[235px] w-[311px]" data-node-id="278:2947" data-name="Button">
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Plus_Jakarta_Sans'] font-medium leading-[normal] relative shrink-0 text-[15px] text-[color:var(--text\/on-dark,white)] whitespace-nowrap" data-node-id="I278:2947;242:54">
            Get started
          </p>
        </div>
        <div className="absolute h-0 left-[-1px] top-[55px] w-[343px]" data-node-id="278:2952">
          <div className="absolute inset-[-16.5px_-9.33%_-48.5px_-9.33%]">
            <img alt="" className="block max-w-none size-full" src={imgVector3228} />
          </div>
        </div>
      </div>
    </div>
  );
}
