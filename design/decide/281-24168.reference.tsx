const assetPathPrefix = "https://www.figma.com/api/mcp/asset/bd1d8e48-6e5b-46ac-90cb-ed248558ca63";
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;
const imgWeuiBackFilled = `${assetPathPrefix}/2db6a.svg`;
const imgBackground = `${assetPathPrefix}/3eb93.svg`;
const imgContainer = `${assetPathPrefix}/36920.svg`;
const imgContainer1 = `${assetPathPrefix}/61292.svg`;
const imgContainer2 = `${assetPathPrefix}/684da.svg`;
const imgContainer3 = `${assetPathPrefix}/77429.svg`;
const imgBackground1 = `${assetPathPrefix}/8b7a5.svg`;
const imgContainer4 = `${assetPathPrefix}/3c93a.svg`;
const imgGroup253 = `${assetPathPrefix}/eee56.svg`;
const imgGroup254 = `${assetPathPrefix}/39f93.svg`;
const imgGroup255 = `${assetPathPrefix}/e36ed.svg`;
const imgGroup256 = `${assetPathPrefix}/14d47.svg`;
const imgGroup257 = `${assetPathPrefix}/981b3.svg`;
const imgGroup258 = `${assetPathPrefix}/623c6.svg`;
const imgContainer5 = `${assetPathPrefix}/1fbe0.svg`;

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

export default function Decide12() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="281:24168" data-name="Decide 12">
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="281:24169" data-name="Navigation bar">
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I281:24169;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I281:24169;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I281:24169;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I281:24169;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I281:24169;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I281:24169;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[20px] pt-[4px] right-[12px] top-[57px]" data-node-id="281:24175" data-name="Heading 2:margin">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24176" data-name="Heading 2">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[24px] tracking-[-0.65px] w-full" data-node-id="281:24177">
            <p className="leading-[32px]">How would you like to set your preferences?</p>
          </div>
        </div>
      </div>
      <a className="absolute block cursor-pointer h-[24px] left-[20px] top-[36px] w-[12px]" data-node-id="281:24178" data-name="weui:back-filled">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWeuiBackFilled} />
      </a>
      <div className="absolute bg-[#fff8f4] h-[710px] left-[20px] top-[134px] w-[350px]" data-node-id="281:24180" />
      <div className="absolute contents left-[20px] top-[139px]" data-node-id="281:24181">
        <div className="absolute bg-white border border-[#e8ddd2] border-solid h-[302px] left-[20px] rounded-[21px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.08)] top-[139px] w-[350px]" data-node-id="281:24182" />
        <div className="[word-break:break-word] absolute contents leading-[0] left-[32px] text-[#251e14] top-[151px]" data-node-id="281:24183">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold h-[28.257px] justify-center left-[32px] text-[17px] top-[calc(50%-256.87px)] w-[249px]" data-node-id="281:24184">
            <p className="leading-[25.5px]">Use Saved Profile Preferences</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium h-[23.91px] justify-center left-[32px] text-[13px] top-[191.21px] w-[317px]" data-node-id="281:24185">
            <p className="leading-[21.13px]">Instantly use your existing default profile settings.</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute bg-white border-2 border-[#c99c00] border-solid left-[334px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[24px] top-[calc(50%-259px)]" data-node-id="281:24186" data-name="Radio Indicator (Selected)" />
        <div className="absolute contents left-[32px] top-[214px]" data-node-id="281:24187">
          <div className="absolute bg-[#fff1e5] border border-[#e8ddd2] border-solid h-[207.58px] left-[32px] rounded-[21px] top-[214px] w-[326px]" data-node-id="281:24188" />
          <div className="absolute contents left-[44px] right-[48px] top-[246.6px]" data-node-id="281:24189">
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[200px] right-[48.5px] rounded-[12px] top-[246.6px]" data-node-id="281:24190" data-name="Item 3: Favorites">
              <div className="-translate-y-1/2 absolute left-[10px] size-[28px] top-[calc(50%-1px)]" data-node-id="281:24191" data-name="Background">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackground} />
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="281:24193" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24194" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="281:24195">
                    <p className="leading-[15px]">Dislike</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="281:24196" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#2d261e] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="281:24197">
                    <p className="leading-[18px]">Cilantro, Oli...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[44px] right-[204.5px] rounded-[12px] top-[246.62px]" data-node-id="281:24198" data-name="Item 3: Favorites">
              <div className="-translate-y-1/2 absolute bg-[#fff2b8] content-stretch flex items-center justify-center left-[10px] rounded-[8px] size-[28px] top-[calc(50%-1px)]" data-node-id="281:24199" data-name="Background">
                <div className="h-[13.333px] relative shrink-0 w-[10px]" data-node-id="281:24200" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="281:24202" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24203" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="281:24204">
                    <p className="leading-[15px]">FAVORITES</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="281:24205" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#2d261e] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="281:24206">
                    <p className="leading-[18px]">Japanese, Ita...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[44px] right-[204.5px] rounded-[12px] top-[360.65px]" data-node-id="281:24207" data-name="Item 2: Budget">
              <div className="-translate-y-1/2 absolute bg-[#dee8ff] content-stretch flex items-center justify-center left-[10px] rounded-[8px] size-[28px] top-[calc(50%-1px)]" data-node-id="281:24208" data-name="Background">
                <div className="h-[10.667px] relative shrink-0 w-[14.667px]" data-node-id="281:24209" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="281:24211" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24212" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="281:24213">
                    <p className="leading-[15px]">BUDGET</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="281:24214" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#2d261e] text-[12px] whitespace-nowrap" data-node-id="281:24215">
                    <p className="leading-[18px]">$15–30</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[200px] right-[48.5px] rounded-[12px] top-[360.63px]" data-node-id="281:24216" data-name="Item 4: Distance">
              <div className="-translate-y-1/2 absolute bg-[#eee0d4] content-stretch flex items-center justify-center left-[10px] rounded-[8px] size-[28px] top-[calc(50%-1px)]" data-node-id="281:24217" data-name="Background">
                <div className="relative shrink-0 size-[12px]" data-node-id="281:24218" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="281:24220" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24221" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="281:24222">
                    <p className="leading-[15px]">DISTANCE</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="281:24223" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#2d261e] text-[12px] whitespace-nowrap" data-node-id="281:24224">
                    <p className="leading-[18px]">Within 5 miles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[200px] right-[48px] rounded-[12px] top-[303.62px]" data-node-id="281:24225" data-name="Item 1: Dietary">
              <div className="-translate-y-1/2 absolute bg-[#d6f5d6] content-stretch flex items-center justify-center left-[10px] rounded-[8px] size-[28px] top-[calc(50%-1px)]" data-node-id="281:24226" data-name="Background">
                <div className="h-[11.328px] relative shrink-0 w-[11.33px]" data-node-id="281:24227" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                </div>
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="281:24229" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24230" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="281:24231">
                    <p className="leading-[15px]">DIETARY</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="281:24232" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#2d261e] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="281:24233">
                    <p className="leading-[18px]">Gluten-Free</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white border border-[#e8ddd2] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[48.996px] left-[44px] right-[204.5px] rounded-[12px] top-[303.64px]" data-node-id="281:24234" data-name="Item 3: Favorites">
              <div className="-translate-y-1/2 absolute left-[10px] size-[28px] top-[calc(50%-1px)]" data-node-id="281:24235" data-name="Background">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackground1} />
              </div>
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[48px] top-[calc(50%-1px)]" data-node-id="281:24237" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:24238" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#6b5e52] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="281:24239">
                    <p className="leading-[15px]">allergies</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="281:24240" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] overflow-hidden relative shrink-0 text-[#2d261e] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="281:24241">
                    <p className="leading-[18px]">Peanuts, She...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold h-[16.302px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(107,94,82,0.8)] top-[230.85px] tracking-[0.5px] uppercase w-[47px]" data-node-id="281:24242">
            <p className="leading-[15px]">DEFAULT</p>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[20px] top-[455px]" data-node-id="281:24243">
        <div className="absolute contents left-[20px] top-[455px]" data-node-id="281:24244">
          <div className="absolute bg-white border border-[#e8ddd2] border-solid h-[258px] left-[20px] rounded-[21px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.08)] top-[455px] w-[350px]" data-node-id="281:24245" />
          <div className="[word-break:break-word] absolute contents leading-[0] left-[32px] text-[#251e14] top-[466px]" data-node-id="281:24246">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold h-[27.13px] justify-center left-[32px] text-[17px] top-[calc(50%+57.57px)] w-[239px]" data-node-id="281:24247">
              <p className="leading-[25.5px]">Customize for This Time Only</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium h-[44.87px] justify-center left-[32px] text-[13px] top-[515.57px] w-[317px]" data-node-id="281:24248">
              <p className="leading-[21.13px]">Tweak your preferences for this time without modifying your master profile.</p>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute bg-white border-2 border-[#c99c00] border-solid drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] left-[334px] rounded-[9999px] size-[24px] top-[calc(50%+56px)]" data-node-id="281:24249" data-name="Radio Indicator (Selected)">
            <div className="-translate-y-1/2 absolute bg-[#ffd43b] border-2 border-[#c99c00] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center left-[-2px] p-[2px] rounded-[9999px] size-[24px] top-1/2" data-node-id="281:24250" data-name="Radio Indicator (Selected)">
              <div className="h-[8.531px] relative shrink-0 w-[11.188px]" data-node-id="281:24251" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[32px] top-[547px]" data-node-id="281:24253">
          <div className="absolute contents left-[32px] top-[547px]" data-node-id="281:24254">
            <div className="absolute bg-[#fff1e5] border border-[#e8ddd2] border-solid h-[147.13px] left-[32px] rounded-[21px] top-[547px] w-[326px]" data-node-id="281:24255" />
          </div>
          <div className="absolute contents left-[47px] top-[552.74px]" data-node-id="281:24256">
            <div className="absolute contents left-[47px] top-[552.74px]" data-node-id="281:24257">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[565.74px] whitespace-nowrap" data-node-id="281:24258">
                <p className="leading-[25.5px]">Choose the cuisines you enjoy most</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[557.74px]" data-node-id="281:24259">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup253} />
              </div>
            </div>
            <div className="absolute contents left-[47px] top-[574.74px]" data-node-id="281:24262">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[587.74px] whitespace-nowrap" data-node-id="281:24263">
                <p className="leading-[25.5px]">Mark foods or ingredients you prefer to avoid</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[579.74px]" data-node-id="281:24264">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup254} />
              </div>
            </div>
            <div className="absolute contents left-[47px] top-[596.74px]" data-node-id="281:24267">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[609.74px] whitespace-nowrap" data-node-id="281:24268">
                <p className="leading-[25.5px]">Add any food allergies or restrictions</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[601.74px]" data-node-id="281:24269">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup255} />
              </div>
            </div>
            <div className="absolute contents left-[47px] top-[618.74px]" data-node-id="281:24272">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[631.74px] whitespace-nowrap" data-node-id="281:24273">
                <p className="leading-[25.5px]">Set your dietary preferences or requirements</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[623.74px]" data-node-id="281:24274">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup256} />
              </div>
            </div>
            <div className="absolute contents left-[47px] top-[639.74px]" data-node-id="281:24277">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[652.74px] whitespace-nowrap" data-node-id="281:24278">
                <p className="leading-[25.5px]">Choose your preferred price range</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[645.74px]" data-node-id="281:24279">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup257} />
              </div>
            </div>
            <div className="absolute contents left-[47px] top-[661.74px]" data-node-id="281:24282">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] left-[73px] text-[#251e14] text-[12px] top-[674.74px] whitespace-nowrap" data-node-id="281:24283">
                <p className="leading-[25.5px]">Set how far you’re willing to travel</p>
              </div>
              <div className="absolute left-[47px] size-[16.423px] top-[667.74px]" data-node-id="281:24284">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup258} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="absolute bg-[#ffd43b] content-stretch cursor-pointer flex h-[50px] items-center justify-center left-[44px] overflow-clip right-[44px] rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.12)] top-[755px]" data-node-id="281:24287" data-name="Primary Action CTA Button">
        <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-node-id="281:24288" data-name="Container">
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:24289" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="281:24290">
              <p className="leading-[20px]">{`Submit & View Group Summary`}</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[12px]" data-node-id="281:24291" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
          </div>
        </div>
      </a>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="281:24299" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}
