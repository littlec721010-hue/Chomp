const assetPathPrefix = "https://www.figma.com/api/mcp/asset/8971b4a1-c475-452c-84b3-c5ed1523b339";
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;
const imgWeuiBackFilled = `${assetPathPrefix}/6145e.svg`;
const imgBackground = `${assetPathPrefix}/3eb93.svg`;
const imgContainer = `${assetPathPrefix}/36920.svg`;
const imgContainer1 = `${assetPathPrefix}/61292.svg`;
const imgContainer2 = `${assetPathPrefix}/684da.svg`;
const imgContainer3 = `${assetPathPrefix}/77429.svg`;
const imgBackground1 = `${assetPathPrefix}/8b7a5.svg`;
const imgGroup253 = `${assetPathPrefix}/eee56.svg`;
const imgGroup254 = `${assetPathPrefix}/39f93.svg`;
const imgGroup255 = `${assetPathPrefix}/e36ed.svg`;
const imgGroup256 = `${assetPathPrefix}/14d47.svg`;
const imgGroup257 = `${assetPathPrefix}/981b3.svg`;
const imgGroup258 = `${assetPathPrefix}/623c6.svg`;
const imgContainer4 = `${assetPathPrefix}/1fbe0.svg`;
const imgContainer5 = `${assetPathPrefix}/41dba.svg`;

type HomeIndicatorProps = {
  className?: string;
  dark?: "True";
};

function HomeIndicator({ className, dark = "True" }: HomeIndicatorProps) {
  return (
    <div className={className || "h-[34px] relative w-[375px]"} data-node-id="202:17140">
      <div className="-translate-x-1/2 absolute bg-[#181818] bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[135px]" data-node-id="202:17141" data-name="Line" />
    </div>
  );
}

export default function Decide2() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="242:19778" data-name="Decide 2">
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="242:19884" data-name="Navigation bar">
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I242:19884;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I242:19884;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I242:19884;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I242:19884;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I242:19884;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I242:19884;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[20px] pt-[4px] right-[12px] top-[58px]" data-node-id="258:20357" data-name="Heading 2:margin">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:20358" data-name="Heading 2">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[24px] tracking-[-0.65px] w-full" data-node-id="258:20359">
            <p className="leading-[32px]">How would you like to set your preferences?</p>
          </div>
        </div>
      </div>
      <a className="absolute block cursor-pointer h-[24px] left-[20px] top-[37px] w-[12px]" data-node-id="258:20361" data-name="weui:back-filled">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWeuiBackFilled} />
      </a>
      <div className="absolute bg-[#fff8f4] h-[710px] left-[20px] top-[134px] w-[350px]" data-node-id="258:20438" />
      <a className="absolute contents cursor-pointer left-[20px] top-[140px]" data-node-id="258:20500">
        <div className="absolute bg-white border border-[#e8ddd2] border-solid h-[302px] left-[20px] rounded-[21px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.08)] top-[140px] w-[350px]" data-node-id="258:20439" />
        <div className="[word-break:break-word] absolute contents leading-[0] left-[32px] text-[#251e14] top-[152px]" data-node-id="258:20498">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold h-[28.257px] justify-center left-[32px] text-[17px] top-[calc(50%-255.87px)] w-[249px]" data-node-id="258:20440">
            <p className="leading-[25.5px]">Use Saved Profile Preferences</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium h-[23.91px] justify-center left-[32px] text-[13px] top-[192.21px] w-[317px]" data-node-id="258:20442">
            <p className="leading-[21.13px]">Instantly use your existing default profile settings.</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute bg-white border-2 border-[#c99c00] border-solid left-[334px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[24px] top-[calc(50%-258px)]" data-node-id="258:20444" data-name="Radio Indicator (Selected)" />
        <div className="absolute contents left-[32px] top-[215px]" data-node-id="258:20499">
          <div className="absolute bg-[#fff1e5] border border-[#e8ddd2] border-solid h-[207.58px] left-[32px] rounded-[21px] top-[215px] w-[326px]" data-node-id="258:20446" />
          <div className="absolute contents left-[44px] right-[48px] top-[247.6px]" data-node-id="258:20497">
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[200px] right-[48.5px] rounded-[12px] top-[247.6px]" data-node-id="258:20481" data-name="Item 3: Favorites">
              <div className="-translate-y-1/2 absolute left-[10px] size-[28px] top-[calc(50%-1px)]" data-node-id="258:20482" data-name="Background">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackground} />
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="258:20485" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:20486" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="258:20487">
                    <p className="leading-[15px]">Dislike</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="258:20488" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#2d261e] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="258:20489">
                    <p className="leading-[18px]">Cilantro, Oli...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[44px] right-[204.5px] rounded-[12px] top-[247.62px]" data-node-id="258:20413" data-name="Item 3: Favorites">
              <div className="-translate-y-1/2 absolute bg-[#fff2b8] content-stretch flex items-center justify-center left-[10px] rounded-[8px] size-[28px] top-[calc(50%-1px)]" data-node-id="258:20414" data-name="Background">
                <div className="h-[13.333px] relative shrink-0 w-[10px]" data-node-id="258:20415" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="258:20417" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:20418" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="258:20419">
                    <p className="leading-[15px]">FAVORITES</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="258:20420" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#2d261e] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="258:20421">
                    <p className="leading-[18px]">Japanese, Ita...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[44px] right-[204.5px] rounded-[12px] top-[361.65px]" data-node-id="258:20404" data-name="Item 2: Budget">
              <div className="-translate-y-1/2 absolute bg-[#dee8ff] content-stretch flex items-center justify-center left-[10px] rounded-[8px] size-[28px] top-[calc(50%-1px)]" data-node-id="258:20405" data-name="Background">
                <div className="h-[10.667px] relative shrink-0 w-[14.667px]" data-node-id="258:20406" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="258:20408" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:20409" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="258:20410">
                    <p className="leading-[15px]">BUDGET</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="258:20411" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#2d261e] text-[12px] whitespace-nowrap" data-node-id="258:20412">
                    <p className="leading-[18px]">$15–30</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[200px] right-[48.5px] rounded-[12px] top-[361.63px]" data-node-id="258:20422" data-name="Item 4: Distance">
              <div className="-translate-y-1/2 absolute bg-[#eee0d4] content-stretch flex items-center justify-center left-[10px] rounded-[8px] size-[28px] top-[calc(50%-1px)]" data-node-id="258:20423" data-name="Background">
                <div className="relative shrink-0 size-[12px]" data-node-id="258:20424" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="258:20426" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:20427" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="258:20428">
                    <p className="leading-[15px]">DISTANCE</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="258:20429" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#2d261e] text-[12px] whitespace-nowrap" data-node-id="258:20430">
                    <p className="leading-[18px]">Within 5 miles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[200px] right-[48px] rounded-[12px] top-[304.62px]" data-node-id="258:20447" data-name="Item 1: Dietary">
              <div className="-translate-y-1/2 absolute bg-[#d6f5d6] content-stretch flex items-center justify-center left-[10px] rounded-[8px] size-[28px] top-[calc(50%-1px)]" data-node-id="258:20448" data-name="Background">
                <div className="h-[11.328px] relative shrink-0 w-[11.33px]" data-node-id="258:20449" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="258:20451" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:20452" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="258:20453">
                    <p className="leading-[15px]">DIETARY</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="258:20454" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#2d261e] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="258:20455">
                    <p className="leading-[18px]">Gluten-Free</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[44px] right-[204.5px] rounded-[12px] top-[304.64px]" data-node-id="258:20471" data-name="Item 3: Favorites">
              <div className="-translate-y-1/2 absolute left-[10px] size-[28px] top-[calc(50%-1px)]" data-node-id="258:20472" data-name="Background">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackground1} />
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="258:20475" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="258:20476" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="258:20477">
                    <p className="leading-[15px]">allergies</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="258:20478" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#2d261e] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="258:20479">
                    <p className="leading-[18px]">Peanuts, She...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold h-[16.302px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(107,94,82,0.8)] top-[231.85px] tracking-[0.5px] uppercase w-[47px]" data-node-id="258:20564">
            <p className="leading-[15px]">DEFAULT</p>
          </div>
        </div>
      </a>
      <a className="absolute contents cursor-pointer left-[20px] top-[456px]" data-node-id="258:20657">
        <div className="absolute contents left-[20px] top-[456px]" data-node-id="258:20501">
          <div className="absolute bg-white border border-[#e8ddd2] border-solid h-[258px] left-[20px] rounded-[21px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.08)] top-[456px] w-[350px]" data-node-id="258:20502" />
          <div className="[word-break:break-word] absolute contents leading-[0] left-[32px] text-[#251e14] top-[467px]" data-node-id="258:20503">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold h-[27.13px] justify-center left-[32px] text-[17px] top-[calc(50%+58.57px)] w-[239px]" data-node-id="258:20504">
              <p className="leading-[25.5px]">Customize for This Time Only</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium h-[44.87px] justify-center left-[32px] text-[13px] top-[516.57px] w-[317px]" data-node-id="258:20505">
              <p className="leading-[21.13px]">Tweak your preferences for this time without modifying your master profile.</p>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute bg-white border-2 border-[#c99c00] border-solid left-[334px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[24px] top-[calc(50%+57px)]" data-node-id="258:20506" data-name="Radio Indicator (Selected)" />
        </div>
        <div className="absolute contents left-[32px] top-[548px]" data-node-id="258:20656">
          <div className="absolute contents left-[32px] top-[548px]" data-node-id="258:20507">
            <div className="absolute bg-[#fff1e5] border border-[#e8ddd2] border-solid h-[147.13px] left-[32px] rounded-[21px] top-[548px] w-[326px]" data-node-id="258:20508" />
          </div>
          <div className="absolute contents left-[47px] top-[553.74px]" data-node-id="258:20655">
            <div className="absolute contents left-[47px] top-[553.74px]" data-node-id="258:20649">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[566.74px] whitespace-nowrap" data-node-id="258:20636">
                <p className="leading-[25.5px]">Choose the cuisines you enjoy most</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[558.74px]" data-node-id="258:20604">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup253} />
              </div>
            </div>
            <div className="absolute contents left-[47px] top-[575.74px]" data-node-id="258:20650">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[588.74px] whitespace-nowrap" data-node-id="258:20637">
                <p className="leading-[25.5px]">Mark foods or ingredients you prefer to avoid</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[580.74px]" data-node-id="258:20627">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup254} />
              </div>
            </div>
            <div className="absolute contents left-[47px] top-[597.74px]" data-node-id="258:20651">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[610.74px] whitespace-nowrap" data-node-id="258:20639">
                <p className="leading-[25.5px]">Add any food allergies or restrictions</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[602.74px]" data-node-id="258:20629">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup255} />
              </div>
            </div>
            <div className="absolute contents left-[47px] top-[619.74px]" data-node-id="258:20652">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[632.74px] whitespace-nowrap" data-node-id="258:20641">
                <p className="leading-[25.5px]">Set your dietary preferences or requirements</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[624.74px]" data-node-id="258:20631">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup256} />
              </div>
            </div>
            <div className="absolute contents left-[47px] top-[640.74px]" data-node-id="258:20653">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[653.74px] whitespace-nowrap" data-node-id="258:20643">
                <p className="leading-[25.5px]">Choose your preferred price range</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[646.74px]" data-node-id="258:20633">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup257} />
              </div>
            </div>
            <div className="absolute contents left-[47px] top-[662.74px]" data-node-id="258:20654">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[675.74px] whitespace-nowrap" data-node-id="258:20645">
                <p className="leading-[25.5px]">Set how far you’re willing to travel</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[668.74px]" data-node-id="258:20635">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup258} />
              </div>
            </div>
          </div>
        </div>
      </a>
      <div className="absolute bg-[#ffd43b] content-stretch flex h-[38px] items-center justify-center left-[44px] overflow-clip right-[44px] rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.12)] top-[733px]" data-node-id="258:20658" data-name="Primary Action CTA Button">
        <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-node-id="258:20659" data-name="Container">
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:20660" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="258:20661">
              <p className="leading-[20px]">{`Submit & Show Me Options`}</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[12px]" data-node-id="258:20662" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#a53b22] content-stretch flex h-[38px] items-center justify-center left-[44px] overflow-clip right-[44px] rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.12)] top-[785px]" data-node-id="258:20665" data-name="Primary Action CTA Button">
        <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-node-id="258:20666" data-name="Container">
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="258:20667" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-[color:var(----wf-white,white)] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="258:20668">
              <p className="leading-[20px]">{`Submit & Surprise Me`}</p>
            </div>
          </div>
          <div className="h-[18px] relative shrink-0 w-[17px]" data-node-id="258:20669" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="242:19886" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}
