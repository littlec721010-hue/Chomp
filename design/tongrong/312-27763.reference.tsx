const assetPathPrefix = "https://www.figma.com/api/mcp/asset/52caad57-57ea-4f89-92ef-6c99f450b26b";
const img716Fa84923104Db3Ba2975Ac0643D8101 = `${assetPathPrefix}/f04dd.png`;
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;
const imgWeuiBackFilled = `${assetPathPrefix}/1f61f.svg`;
const imgContainer = `${assetPathPrefix}/4a5bf.svg`;
const imgScan = `${assetPathPrefix}/c3379.svg`;

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

export default function Split3() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="312:27763" data-name="Split 3">
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="312:27764" data-name="Navigation bar">
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I312:27764;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I312:27764;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I312:27764;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I312:27764;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I312:27764;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I312:27764;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="312:27765" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[20px] pt-[4px] right-[12px] top-[57px]" data-node-id="312:27772" data-name="Heading 2:margin">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:27773" data-name="Heading 2">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#251e14] text-[24px] tracking-[-0.65px] w-full" data-node-id="312:27774">
            <p className="leading-[32px]">Scan Paper Receipt</p>
          </div>
        </div>
      </div>
      <a className="absolute block cursor-pointer h-[24px] left-[20px] top-[36px] w-[12px]" data-node-id="312:27775" data-name="weui:back-filled">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWeuiBackFilled} />
      </a>
      <div className="absolute content-stretch flex flex-col items-start left-[20px] py-[8px] right-[20px] top-[108px]" data-node-id="312:27777" data-name="Top Instructional Tip Card">
        <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="312:27778" data-name="Background+Shadow">
          <div className="content-stretch flex flex-col h-[34px] items-start pt-[2px] relative shrink-0 w-[32px]" data-node-id="312:27779" data-name="Margin">
            <div className="bg-[#f9eaba] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="312:27780" data-name="Background+Shadow">
              <div className="h-[16.5px] relative shrink-0 w-[15px]" data-node-id="312:27781" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="312:27783" data-name="Container">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="312:27784" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="312:27785" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[16px] whitespace-nowrap" data-node-id="312:27786">
                  <p className="leading-[24px]">Position receipt in frame</p>
                </div>
              </div>
              <div className="bg-[#f9eaba] content-stretch flex items-center px-[4px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="312:27787" data-name="Background">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#725c00] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="312:27788">
                  <p className="leading-[14px]">Auto OCR</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="312:27789" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#251e14] text-[12px] whitespace-nowrap" data-node-id="312:27790">
                <p className="leading-[16px] mb-0">{`Make sure all items, prices, tax, and tip are visible &`}</p>
                <p className="leading-[16px]">glare-free.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[476px] left-[44px] top-[230px] w-[305px]" data-node-id="312:27791" data-name="716fa849-2310-4db3-ba29-75ac0643d810 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img716Fa84923104Db3Ba2975Ac0643D8101} />
      </div>
      <div className="absolute h-[490px] left-[30px] top-[223px] w-[334px]" data-node-id="312:27757" data-name="Scan">
        <div className="absolute inset-[-0.41%_-0.6%]">
          <img alt="" className="block max-w-none size-full" src={imgScan} />
        </div>
      </div>
    </div>
  );
}
