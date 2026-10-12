const assetPathPrefix = "https://www.figma.com/api/mcp/asset/6ef6902b-20a9-4a80-b117-9bb0ef001198";
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;
const imgWeuiBackFilled = `${assetPathPrefix}/29250.svg`;
const imgContainer = `${assetPathPrefix}/1fbe0.svg`;
const imgContainer1 = `${assetPathPrefix}/fec63.svg`;
const imgContainer2 = `${assetPathPrefix}/64ad8.svg`;
const imgContainer3 = `${assetPathPrefix}/b34dc.svg`;
const imgContainer4 = `${assetPathPrefix}/9e0eb.svg`;
const imgContainer5 = `${assetPathPrefix}/f820a.svg`;
const imgContainer6 = `${assetPathPrefix}/b7d6c.svg`;
const imgContainer7 = `${assetPathPrefix}/baf78.svg`;
const imgContainer8 = `${assetPathPrefix}/12237.svg`;

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

export default function Decide9() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="281:23405" data-name="Decide 9">
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="281:23406" data-name="Navigation bar">
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I281:23406;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I281:23406;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I281:23406;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I281:23406;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I281:23406;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I281:23406;9:2837;7:2336">
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[24px] left-[20px] top-[36px] w-[12px]" data-node-id="281:23413" data-name="weui:back-filled">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWeuiBackFilled} />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] left-[20px] text-[#251e14] text-[24px] top-[76px] tracking-[-0.8px] w-[350px]" data-node-id="281:23415">
        <p className="leading-[40px]">Group information</p>
      </div>
      <a className="absolute bg-[#ffd43b] content-stretch cursor-pointer flex h-[56px] items-center justify-center left-[20px] overflow-clip right-[20px] rounded-[9999px] shadow-[0px_8px_24px_-4px_rgba(62,45,18,0.12)] top-[755px]" data-node-id="281:23416" data-name="Primary Action CTA Button">
        <div className="content-stretch flex gap-[8.01px] items-center relative shrink-0" data-node-id="281:23417" data-name="Container">
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="281:23418" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#725b00] text-[15px] text-center tracking-[0.15px] whitespace-nowrap" data-node-id="281:23419">
              <p className="leading-[20px]">Next: Set Dining Preferences</p>
            </div>
          </div>
          <div className="relative shrink-0 size-[12px]" data-node-id="281:23420" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
          </div>
        </div>
      </a>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start left-[20px] p-[16px] right-[20px] rounded-[12px] top-[107px]" data-node-id="281:23422" data-name="1. Group Details Card">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="281:23423" data-name="Container">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="281:23424" data-name="Label">
            <div className="h-[13.333px] relative shrink-0 w-[15px]" data-node-id="281:23425" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[14px] whitespace-nowrap" data-node-id="281:23427">
              <p className="leading-[20px]">Group Name</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:23428" data-name="Container">
          <div className="bg-[#fff2c4] content-stretch flex h-[44px] items-start justify-center overflow-clip px-[12px] py-[13.5px] relative rounded-[8px] shrink-0 w-full" data-node-id="281:23429" data-name="Input">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-auto relative" data-node-id="281:23430" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[14px] w-full" data-node-id="281:23431">
                <p className="leading-[normal]">Friday Dinner Squad</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[18.18%] content-stretch flex flex-col items-center justify-center pb-[6px] right-[12px] top-[40.91%]" data-node-id="281:23432" data-name="Button - Clear input">
            <div className="relative shrink-0 size-[15px]" data-node-id="281:23433" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="281:23435" data-name="Schedule & Location Quick Pickers">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="281:23436" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#464555] text-[11px] tracking-[0.22px] w-full" data-node-id="281:23437">
              <p className="leading-[14px]">{`Date, Time & Scope`}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="281:23438" data-name="Container">
            <div className="bg-[#fff2c4] content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip pl-[24.23px] pr-[24.25px] relative rounded-[8px] shrink-0" data-node-id="281:23439" data-name="Button">
              <div className="h-[15px] relative shrink-0 w-[13.5px]" data-node-id="281:23440" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="281:23442" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[12px] whitespace-nowrap" data-node-id="281:23443">
                  <p className="leading-[16px]">Today, 7:30 PM</p>
                </div>
              </div>
            </div>
            <div className="bg-[#fff2c4] content-stretch flex gap-[4px] h-[40px] items-center justify-center overflow-clip pl-[19.8px] pr-[19.81px] relative rounded-[8px] shrink-0" data-node-id="281:23444" data-name="Button">
              <div className="relative shrink-0 size-[13.5px]" data-node-id="281:23445" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="281:23447" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[12px] whitespace-nowrap" data-node-id="281:23448">
                  <p className="leading-[16px]">Downtown (5 mi)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start left-[19px] p-[16px] right-[21px] rounded-[12px] top-[304px]" data-node-id="312:26606" data-name="2. Invite Members Card">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="312:26607" data-name="Container">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="312:26608" data-name="Container">
            <div className="h-[16.667px] relative shrink-0 w-[15px]" data-node-id="312:26609" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26611" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[14px] whitespace-nowrap" data-node-id="312:26612">
                <p className="leading-[20px]">Share Group Invite</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,242,196,0.5)] content-stretch flex items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="312:26613" data-name="Code & Link Quick Copy Block">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26614" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26615" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#464555] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="312:26616">
                <p className="leading-[14px]">Invite Code</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26617" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#ffd43b] text-[16px] tracking-[0.8px] whitespace-nowrap" data-node-id="312:26618">
                <p className="leading-[24px]">EAT-404</p>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(255,212,59,0.7)] content-stretch flex gap-[4px] h-[36px] items-center px-[12px] relative rounded-[8px] shrink-0" data-node-id="312:26619" data-name="Button">
            <div className="h-[13.333px] relative shrink-0 w-[11.333px]" data-node-id="312:26620" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26622" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] text-center whitespace-nowrap" data-node-id="312:26623">
                <p className="leading-[16px]">Copy Code</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="312:26624" data-name="Quick Add Recent Squad Friends">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="312:26625" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26626" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#251e14] text-[12px] whitespace-nowrap" data-node-id="312:26627">
                <p className="leading-[16px]">Quick Add Friends</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="312:26628" data-name="Container">
            <div className="content-stretch flex items-center justify-between pl-[8px] pr-[7.99px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="312:26629" data-name="Friend 1: Sarah (Already in group/invited)">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="312:26630" data-name="Container">
                <div className="bg-[#fff2c4] content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26631" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[12px] text-center whitespace-nowrap" data-node-id="312:26632">
                    <p className="leading-[16px]">TM</p>
                  </div>
                  <div className="absolute bg-[#005338] bottom-0 content-stretch flex flex-col items-end justify-end right-0 rounded-[9999px] size-[10px]" data-node-id="312:26633" data-name="Background">
                    <div className="bg-[rgba(255,255,255,0)] relative rounded-[9999px] shadow-[0px_0px_0px_2px_white] shrink-0 size-[10px]" data-node-id="312:26634" data-name="Overlay+Shadow" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26635" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26636" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[12px] whitespace-nowrap" data-node-id="312:26637">
                      <p className="leading-[16px]">Taylor M.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26638" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#005338] text-[12px] whitespace-nowrap" data-node-id="312:26639">
                      <p className="leading-[16px]">Active now</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff2c4] content-stretch flex gap-[4px] h-[32px] items-center px-[12px] relative rounded-[9999px] shrink-0" data-node-id="312:26640" data-name="Button">
                <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="312:26641" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26643" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#464555] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="312:26644">
                    <p className="leading-[14px]">Invited</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between pl-[8px] pr-[7.99px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="312:26645" data-name="Friend 2: Daniel K. (Joined)">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="312:26646" data-name="Container">
                <div className="bg-[#fff2c4] content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26647" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[12px] text-center whitespace-nowrap" data-node-id="312:26648">
                    <p className="leading-[16px]">AK</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26649" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26650" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[12px] whitespace-nowrap" data-node-id="312:26651">
                      <p className="leading-[16px]">Alex K.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26652" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#464555] text-[12px] whitespace-nowrap" data-node-id="312:26653">
                      <p className="leading-[16px]">Last dined 3d ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff2c4] content-stretch flex gap-[4px] h-[32px] items-center px-[12px] relative rounded-[9999px] shrink-0" data-node-id="312:26654" data-name="Button">
                <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="312:26655" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26657" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#464555] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="312:26658">
                    <p className="leading-[14px]">Joined</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between pl-[8px] pr-[7.99px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="312:26659" data-name="Friend 3: Emily C. (Joined)">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="312:26660" data-name="Container">
                <div className="bg-[#fff2c4] content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26661" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[12px] text-center whitespace-nowrap" data-node-id="312:26662">
                    <p className="leading-[16px]">JC</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26663" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26664" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[12px] whitespace-nowrap" data-node-id="312:26665">
                      <p className="leading-[16px]">Jamie C.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26666" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#464555] text-[12px] whitespace-nowrap" data-node-id="312:26667">
                      <p className="leading-[16px]">Vegetarian lover</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fff2c4] content-stretch flex gap-[4px] h-[32px] items-center px-[12px] relative rounded-[9999px] shrink-0" data-node-id="312:26668" data-name="Button">
                <div className="h-[8.017px] relative shrink-0 w-[10.867px]" data-node-id="312:26669" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26671" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#464555] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="312:26672">
                    <p className="leading-[14px]">Joined</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="312:26673" data-name="Friend 4: Alex R. (Not yet invited)">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="312:26674" data-name="Container">
                <div className="bg-[#fff2c4] content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[9999px] shrink-0 size-[36px]" data-node-id="312:26675" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#0b1c30] text-[12px] text-center whitespace-nowrap" data-node-id="312:26676">
                    <p className="leading-[16px]">DR</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:26677" data-name="Container">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="312:26678" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#111c2d] text-[12px] whitespace-nowrap" data-node-id="312:26679">
                      <p className="leading-[16px]">David R.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:26680" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#464555] text-[12px] whitespace-nowrap" data-node-id="312:26681">
                      <p className="leading-[16px]">Available tonight</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffdf6d] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[4px] h-[32px] items-center px-[12px] relative rounded-[9999px] shrink-0" data-node-id="312:26682" data-name="Button">
                <div className="relative shrink-0 size-[9.333px]" data-node-id="312:26683" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="312:26685" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white tracking-[0.22px] whitespace-nowrap" data-node-id="312:26686">
                    <p className="leading-[14px]">Invite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="281:23530" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
    </div>
  );
}
