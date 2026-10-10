import { DesignView, DesignText, DesignImage } from '../../native/Design';
import { asset } from '../../assets';
const imgWeuiBackFilled = asset("29250.svg");
const imgContainer = asset("1fbe0.svg");
const imgContainer1 = asset("fec63.svg");
const imgContainer2 = asset("64ad8.svg");
const imgContainer3 = asset("b34dc.svg");
const imgContainer4 = asset("9e0eb.svg");
const imgContainer5 = asset("f820a.svg");
const imgContainer6 = asset("b7d6c.svg");
const imgContainer7 = asset("baf78.svg");
const imgContainer8 = asset("12237.svg");
const imgBattery = asset("fe7dd.svg");
const imgWifi = asset("9ed76.svg");
const imgCellularConnection = asset("83135.svg");

type HomeIndicatorProps = {
  className?: string;
  dark?: "True";
};

function HomeIndicator({ className, dark = "True" }: HomeIndicatorProps) {
  return (
    <DesignView className={className || "v89"} data-node-id="202:17140">
      <DesignView className="v0" data-node-id="202:17141" data-name="Line" />
    </DesignView>
  );
}

export default function Decide8() {
  return (
    <DesignView className="v1" data-node-id="281:23049" data-name="Decide 8">
      <DesignView className="v187" data-node-id="281:23257" data-name="weui:back-filled">
        <DesignImage alt="" className="v8" src={imgWeuiBackFilled} />
      </DesignView>
      <DesignView className="v188" data-node-id="281:23290">
        <DesignText className="v185">Start group feast</DesignText>
      </DesignView>
      <DesignView className="v189" data-node-id="281:23397" data-name="Primary Action CTA Button">
        <DesignView className="v190" data-node-id="281:23398" data-name="Container">
          <DesignView className="v60" data-node-id="281:23399" data-name="Container">
            <DesignView className="v61" data-node-id="281:23400">
              <DesignText className="v44">Next: Set Dining Preferences</DesignText>
            </DesignView>
          </DesignView>
          <DesignView className="v191" data-node-id="281:23401" data-name="Container">
            <DesignImage alt="" className="v8" src={imgContainer} />
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v192" data-node-id="281:23260" data-name="1. Group Details Card">
        <DesignView className="v108" data-node-id="281:23261" data-name="Container">
          <DesignView className="v193" data-node-id="281:23262" data-name="Label">
            <DesignView className="v194" data-node-id="281:23263" data-name="Container">
              <DesignImage alt="" className="v8" src={imgContainer1} />
            </DesignView>
            <DesignView className="v195" data-node-id="281:23265">
              <DesignText className="v44">Group Name</DesignText>
            </DesignView>
          </DesignView>
        </DesignView>
        <DesignView className="v4" data-node-id="281:23268" data-name="Container">
          <DesignView className="v196" data-node-id="281:23269" data-name="Input">
            <DesignView className="v197" data-node-id="281:23270" data-name="Container">
              <DesignView className="v198" data-node-id="281:23271">
                <DesignText className="v176">Friday Dinner Squad</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
          <DesignView className="v199" data-node-id="281:23272" data-name="Button - Clear input">
            <DesignView className="v135" data-node-id="281:23273" data-name="Container">
              <DesignImage alt="" className="v8" src={imgContainer2} />
            </DesignView>
          </DesignView>
        </DesignView>
        <DesignView className="v200" data-node-id="281:23275" data-name="Schedule & Location Quick Pickers">
          <DesignView className="v4" data-node-id="281:23276" data-name="Container">
            <DesignView className="v201" data-node-id="281:23277">
              <DesignText className="v32">{`Date, Time & Scope`}</DesignText>
            </DesignView>
          </DesignView>
          <DesignView className="v202" data-node-id="281:23278" data-name="Container">
            <DesignView className="v203" data-node-id="281:23279" data-name="Button">
              <DesignView className="v204" data-node-id="281:23280" data-name="Container">
                <DesignImage alt="" className="v8" src={imgContainer3} />
              </DesignView>
              <DesignView className="v205" data-node-id="281:23282" data-name="Container">
                <DesignView className="v206" data-node-id="281:23283">
                  <DesignText className="v207">Today, 7:30 PM</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v208" data-node-id="281:23284" data-name="Button">
              <DesignView className="v209" data-node-id="281:23285" data-name="Container">
                <DesignImage alt="" className="v8" src={imgContainer4} />
              </DesignView>
              <DesignView className="v205" data-node-id="281:23287" data-name="Container">
                <DesignView className="v206" data-node-id="281:23288">
                  <DesignText className="v207">Downtown (5 mi)</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v210" data-node-id="281:23292" data-name="2. Invite Members Card">
        <DesignView className="v108" data-node-id="281:23293" data-name="Container">
          <DesignView className="v193" data-node-id="281:23294" data-name="Container">
            <DesignView className="v211" data-node-id="281:23295" data-name="Container">
              <DesignImage alt="" className="v8" src={imgContainer5} />
            </DesignView>
            <DesignView className="v30" data-node-id="281:23297" data-name="Container">
              <DesignView className="v212" data-node-id="281:23298">
                <DesignText className="v44">Share Group Invite</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
        <DesignView className="v213" data-node-id="281:23301" data-name="Code & Link Quick Copy Block">
          <DesignView className="v30" data-node-id="281:23302" data-name="Container">
            <DesignView className="v4" data-node-id="281:23303" data-name="Container">
              <DesignView className="v214" data-node-id="281:23304">
                <DesignText className="v32">Invite Code</DesignText>
              </DesignView>
            </DesignView>
            <DesignView className="v4" data-node-id="281:23305" data-name="Container">
              <DesignView className="v215" data-node-id="281:23306">
                <DesignText className="v216">EAT-404</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
          <DesignView className="v217" data-node-id="281:23307" data-name="Button">
            <DesignView className="v218" data-node-id="281:23308" data-name="Container">
              <DesignImage alt="" className="v8" src={imgContainer6} />
            </DesignView>
            <DesignView className="v60" data-node-id="281:23310" data-name="Container">
              <DesignView className="v219" data-node-id="281:23311">
                <DesignText className="v207">Copy Code</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
        <DesignView className="v220" data-node-id="281:23322" data-name="Quick Add Recent Squad Friends">
          <DesignView className="v108" data-node-id="281:23323" data-name="Container">
            <DesignView className="v30" data-node-id="281:23324" data-name="Container">
              <DesignView className="v221" data-node-id="281:23325">
                <DesignText className="v207">Quick Add Friends</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
          <DesignView className="v149" data-node-id="281:23328" data-name="Container">
            <DesignView className="v222" data-node-id="281:23329" data-name="Friend 1: Sarah (Already in group/invited)">
              <DesignView className="v223" data-node-id="281:23330" data-name="Container">
                <DesignView className="v224" data-node-id="281:23331" data-name="Background">
                  <DesignView className="v225" data-node-id="281:23332">
                    <DesignText className="v207">TM</DesignText>
                  </DesignView>
                  <DesignView className="v226" data-node-id="281:23333" data-name="Background">
                    <DesignView className="v227" data-node-id="281:23334" data-name="Overlay+Shadow" />
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="281:23335" data-name="Container">
                  <DesignView className="v174" data-node-id="281:23336" data-name="Container">
                    <DesignView className="v206" data-node-id="281:23337">
                      <DesignText className="v207">Taylor M.</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="281:23338" data-name="Container">
                    <DesignView className="v228" data-node-id="281:23339">
                      <DesignText className="v207">Active now</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v229" data-node-id="281:23340" data-name="Button">
                <DesignView className="v230" data-node-id="281:23341" data-name="Container">
                  <DesignImage alt="" className="v8" src={imgContainer7} />
                </DesignView>
                <DesignView className="v60" data-node-id="281:23343" data-name="Container">
                  <DesignView className="v231" data-node-id="281:23344">
                    <DesignText className="v32">Invited</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v222" data-node-id="281:23345" data-name="Friend 2: Daniel K. (Joined)">
              <DesignView className="v223" data-node-id="281:23346" data-name="Container">
                <DesignView className="v224" data-node-id="281:23347" data-name="Background">
                  <DesignView className="v225" data-node-id="281:23348">
                    <DesignText className="v207">AK</DesignText>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="281:23349" data-name="Container">
                  <DesignView className="v174" data-node-id="281:23350" data-name="Container">
                    <DesignView className="v206" data-node-id="281:23351">
                      <DesignText className="v207">Alex K.</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="281:23352" data-name="Container">
                    <DesignView className="v232" data-node-id="281:23353">
                      <DesignText className="v207">Last dined 3d ago</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v229" data-node-id="281:23354" data-name="Button">
                <DesignView className="v230" data-node-id="281:23355" data-name="Container">
                  <DesignImage alt="" className="v8" src={imgContainer7} />
                </DesignView>
                <DesignView className="v60" data-node-id="281:23357" data-name="Container">
                  <DesignView className="v231" data-node-id="281:23358">
                    <DesignText className="v32">Joined</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v222" data-node-id="281:23359" data-name="Friend 3: Emily C. (Joined)">
              <DesignView className="v223" data-node-id="281:23360" data-name="Container">
                <DesignView className="v224" data-node-id="281:23361" data-name="Background">
                  <DesignView className="v225" data-node-id="281:23362">
                    <DesignText className="v207">JC</DesignText>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="281:23363" data-name="Container">
                  <DesignView className="v174" data-node-id="281:23364" data-name="Container">
                    <DesignView className="v206" data-node-id="281:23365">
                      <DesignText className="v207">Jamie C.</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="281:23366" data-name="Container">
                    <DesignView className="v232" data-node-id="281:23367">
                      <DesignText className="v207">Vegetarian lover</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v229" data-node-id="281:23368" data-name="Button">
                <DesignView className="v230" data-node-id="281:23369" data-name="Container">
                  <DesignImage alt="" className="v8" src={imgContainer7} />
                </DesignView>
                <DesignView className="v60" data-node-id="281:23371" data-name="Container">
                  <DesignView className="v231" data-node-id="281:23372">
                    <DesignText className="v32">Joined</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v233" data-node-id="281:23373" data-name="Friend 4: Alex R. (Not yet invited)">
              <DesignView className="v223" data-node-id="281:23374" data-name="Container">
                <DesignView className="v224" data-node-id="281:23375" data-name="Background">
                  <DesignView className="v234" data-node-id="281:23376">
                    <DesignText className="v207">DR</DesignText>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="281:23377" data-name="Container">
                  <DesignView className="v174" data-node-id="281:23378" data-name="Container">
                    <DesignView className="v206" data-node-id="281:23379">
                      <DesignText className="v207">David R.</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="281:23380" data-name="Container">
                    <DesignView className="v232" data-node-id="281:23381">
                      <DesignText className="v207">Available tonight</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v235" data-node-id="281:23382" data-name="Button">
                <DesignView className="v236" data-node-id="281:23383" data-name="Container">
                  <DesignImage alt="" className="v8" src={imgContainer8} />
                </DesignView>
                <DesignView className="v60" data-node-id="281:23385" data-name="Container">
                  <DesignView className="v237" data-node-id="281:23386">
                    <DesignText className="v32">Invite</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v80" data-node-id="281:23058" data-name="Tabbar">
        <HomeIndicator className="v81" />
      </DesignView>
      <DesignView className="v82" data-node-id="281:23050" data-name="Navigation bar">
        <DesignView className="v83" data-node-id="I281:23050;9:2837" data-name="Status Bar">
          <DesignView className="v84" data-node-id="I281:23050;9:2837;7:2322" data-name="Battery">
            <DesignImage alt="" className="v8" src={imgBattery} />
          </DesignView>
          <DesignView className="v85" data-node-id="I281:23050;9:2837;7:2326" data-name="Wifi">
            <DesignImage alt="" className="v8" src={imgWifi} />
          </DesignView>
          <DesignView className="v86" data-node-id="I281:23050;9:2837;7:2330" data-name="Cellular Connection">
            <DesignImage alt="" className="v8" src={imgCellularConnection} />
          </DesignView>
          <DesignView className="v87" data-node-id="I281:23050;9:2837;7:2335" data-name="Time Style">
            <DesignText className="v238" data-node-id="I281:23050;9:2837;7:2336">
              9:41
            </DesignText>
          </DesignView>
        </DesignView>
      </DesignView>
    </DesignView>
  );
}
