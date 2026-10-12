const assetPathPrefix = "https://www.figma.com/api/mcp/asset/fca70003-05d4-433a-b15b-fd99a7ea611a";
const imgBattery = `${assetPathPrefix}/fe7dd.svg`;
const imgWifi = `${assetPathPrefix}/9ed76.svg`;
const imgCellularConnection = `${assetPathPrefix}/83135.svg`;
const imgGroup112 = `${assetPathPrefix}/f7bd5.svg`;
const imgVector = `${assetPathPrefix}/11129.svg`;
const imgVector1 = `${assetPathPrefix}/afe8d.svg`;
const imgUnion = `${assetPathPrefix}/631ba.svg`;
const imgWeuiBackFilled = `${assetPathPrefix}/06964.svg`;

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

export default function SignUp() {
  return (
    <div className="bg-[#fff8f4] relative size-full" data-node-id="202:18017" data-name="Sign up">
      <div className="absolute contents left-0 top-0" data-node-id="226:19236" />
      <div className="absolute backdrop-blur-[16px] h-[98px] left-0 overflow-clip top-[-6px] w-[390px]" data-node-id="202:18028" data-name="Navigation bar">
        <div className="absolute bottom-[12px] content-stretch flex gap-[12px] h-[24px] items-center left-[16px] w-[21px]" data-node-id="I202:18028;9:2834" data-name="LeftNavBar" />
        <div className="absolute bottom-[12px] content-stretch flex gap-[8px] h-[24px] items-center right-[16px] w-[28px]" data-node-id="I202:18028;9:2835" data-name="RightNavBar" />
        <div className="absolute h-[53px] left-[-2px] right-[-1px] top-0" data-node-id="I202:18028;9:2837" data-name="Status Bar">
          <div className="absolute h-[13px] right-[32.57px] top-[22.6px] w-[27.228px]" data-node-id="I202:18028;9:2837;7:2322" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-node-id="I202:18028;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-node-id="I202:18028;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="absolute h-[22px] left-[43px] overflow-clip top-[18px] w-[54px]" data-node-id="I202:18028;9:2837;7:2335" data-name="Time Style">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[22px] left-[27px] text-[#181818] text-[17px] text-center top-[calc(50%-11px)] w-[54px]" data-node-id="I202:18028;9:2837;7:2336" style={{ fontVariationSettings: '"wdth" 100' }}>
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[16px] content-stretch flex flex-col gap-[2px] items-start left-0 pt-[5px] top-[805px] w-[390px]" data-node-id="202:18022" data-name="Tabbar">
        <HomeIndicator className="h-[34px] relative shrink-0 w-full" />
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[49.849px] left-[calc(50%-59px)] text-[#251d14] text-[16px] top-[612px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:18029">
        or sign up with
      </p>
      <a className="-translate-x-1/2 absolute contents cursor-pointer left-[calc(50%+1px)] top-[543px]" data-node-id="202:18030">
        <div className="-translate-x-1/2 absolute bg-[#ffd43b] h-[42px] left-[calc(50%+1px)] rounded-[21px] top-[543px] w-[288px]" data-node-id="202:18031" />
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[49.849px] left-[calc(50%-33px)] text-[#725b00] text-[16px] top-[559px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:18032">
          Sign up
        </p>
      </a>
      <div className="absolute contents inset-[77.13%_32.82%_20.97%_33.08%]" data-node-id="202:18033">
        <div className="absolute inset-[77.13%_32.82%_20.97%_33.08%]" data-node-id="202:18034">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup112} />
        </div>
      </div>
      <a className="-translate-x-1/2 [word-break:break-word] absolute contents cursor-pointer font-['Inter:Regular'] font-normal leading-[49.849px] left-1/2 not-italic text-[16px] top-[698px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:18043">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] absolute left-[calc(50%-104px)] text-[#251d14] top-[698px]" data-node-id="202:18044">{`Have an account? `}</p>
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] absolute left-[calc(50%+42px)] text-[#ffd43b] top-[698px]" data-node-id="202:18045">
          SIGN IN
        </p>
      </a>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[111.58px] left-[51px] text-[#251e14] text-[24px] top-[144px] tracking-[0.48px] whitespace-nowrap" data-node-id="202:18046">
        Create your account
      </p>
      <div className="absolute contents left-[52px] top-[194px]" data-node-id="202:18050">
        <div className="absolute contents left-[52px] top-[194px]" data-node-id="226:18490">
          <div className="-translate-x-1/2 absolute bg-white h-[42px] left-[calc(50%+0.5px)] rounded-[21px] shadow-[3px_4px_7.1px_0px_#d9d9d9] top-[198px] w-[287px]" data-node-id="202:18051" />
          <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[49.849px] left-[84px] not-italic text-[#c1c1c1] text-[16px] top-[194px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:18052">
            Username
          </p>
          <div className="absolute inset-[25.12%_80.26%_73.22%_16.15%]" data-node-id="202:18053" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[52px] top-[360px]" data-node-id="226:18492">
        <div className="-translate-x-1/2 absolute bg-white h-[42px] left-[calc(50%+0.5px)] rounded-[21px] shadow-[3px_4px_7.1px_0px_#d9d9d9] top-[364px] w-[287px]" data-node-id="202:18058" />
        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[49.849px] left-[84px] not-italic text-[#c1c1c1] text-[16px] top-[360px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:18059">
          Password
        </p>
        <div className="absolute inset-[44.55%_80%_53.32%_15.9%]" data-node-id="202:18060" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
        </div>
      </div>
      <div className="absolute contents left-[52px] top-[443px]" data-node-id="226:18493">
        <div className="-translate-x-1/2 absolute bg-white h-[42px] left-[calc(50%+1px)] rounded-[21px] shadow-[3px_4px_7.1px_0px_#d9d9d9] top-[447px] w-[288px]" data-node-id="202:18055" />
        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[49.849px] left-[84px] not-italic text-[#c1c1c1] text-[16px] top-[443px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:18056">
          Confirm Password
        </p>
        <div className="absolute inset-[54.38%_80.26%_43.48%_15.64%]" data-node-id="202:18061" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
        </div>
      </div>
      <div className="absolute contents left-[52px] top-[277px]" data-node-id="226:18491">
        <div className="-translate-x-1/2 absolute bg-white h-[42px] left-[calc(50%+0.5px)] rounded-[21px] shadow-[3px_4px_7.1px_0px_#d9d9d9] top-[281px] w-[287px]" data-node-id="202:18048" />
        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[49.849px] left-[84px] not-italic text-[#c1c1c1] text-[16px] top-[277px] tracking-[0.32px] whitespace-nowrap" data-node-id="202:18049">
          Email
        </p>
        <div className="absolute inset-[35.07%_79.74%_63.39%_16.15%]" data-node-id="202:18062" data-name="Union">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion} />
        </div>
      </div>
      <div className="absolute border border-[#ffd43b] border-solid left-[52px] rounded-[1px] size-[13px] top-[514px]" data-node-id="202:18064" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Poppins:Regular'] leading-[0] left-[77px] not-italic text-[12px] text-black top-[516px] whitespace-nowrap" data-node-id="202:18065">
        <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[49.849px] text-[#251e14]">I understood the</span>
        <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[49.849px]">{` `}</span>
        <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[49.849px] text-[#ffd43b]">{`terms & policy`}</span>
        <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[49.849px] text-[#888]">.</span>
      </p>
      <a className="absolute block cursor-pointer h-[24px] left-[52px] top-[87px] w-[12px]" data-node-id="202:18066" data-name="weui:back-filled">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWeuiBackFilled} />
      </a>
    </div>
  );
}
