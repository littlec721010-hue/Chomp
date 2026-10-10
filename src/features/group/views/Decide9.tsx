import { DesignView, DesignText, DesignImage } from '../../native/Design';
import { asset } from '../../assets';
const imgBattery = asset("fe7dd.svg");
const imgWifi = asset("9ed76.svg");
const imgCellularConnection = asset("83135.svg");
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

export default function Decide9() {
  return (
    <DesignView className="v1" data-node-id="281:23405" data-name="Decide 9">
      <DesignView className="v82" data-node-id="281:23406" data-name="Navigation bar">
        <DesignView className="v83" data-node-id="I281:23406;9:2837" data-name="Status Bar">
          <DesignView className="v84" data-node-id="I281:23406;9:2837;7:2322" data-name="Battery">
            <DesignImage alt="" className="v8" src={imgBattery} />
          </DesignView>
          <DesignView className="v85" data-node-id="I281:23406;9:2837;7:2326" data-name="Wifi">
            <DesignImage alt="" className="v8" src={imgWifi} />
          </DesignView>
          <DesignView className="v86" data-node-id="I281:23406;9:2837;7:2330" data-name="Cellular Connection">
            <DesignImage alt="" className="v8" src={imgCellularConnection} />
          </DesignView>
          <DesignView className="v87" data-node-id="I281:23406;9:2837;7:2335" data-name="Time Style">
            <DesignText className="v238" data-node-id="I281:23406;9:2837;7:2336">
              9:41
            </DesignText>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v187" data-node-id="281:23413" data-name="weui:back-filled">
        <DesignImage alt="" className="v8" src={imgWeuiBackFilled} />
      </DesignView>
      <DesignView className="v188" data-node-id="281:23415">
        <DesignText className="v185">Group information</DesignText>
      </DesignView>
      <DesignView className="v189" data-node-id="281:23416" data-name="Primary Action CTA Button">
        <DesignView className="v190" data-node-id="281:23417" data-name="Container">
          <DesignView className="v60" data-node-id="281:23418" data-name="Container">
            <DesignView className="v61" data-node-id="281:23419">
              <DesignText className="v44">Next: Set Dining Preferences</DesignText>
            </DesignView>
          </DesignView>
          <DesignView className="v191" data-node-id="281:23420" data-name="Container">
            <DesignImage alt="" className="v8" src={imgContainer} />
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v192" data-node-id="281:23422" data-name="1. Group Details Card">
        <DesignView className="v108" data-node-id="281:23423" data-name="Container">
          <DesignView className="v193" data-node-id="281:23424" data-name="Label">
            <DesignView className="v194" data-node-id="281:23425" data-name="Container">
              <DesignImage alt="" className="v8" src={imgContainer1} />
            </DesignView>
            <DesignView className="v195" data-node-id="281:23427">
              <DesignText className="v44">Group Name</DesignText>
            </DesignView>
          </DesignView>
        </DesignView>
        <DesignView className="v4" data-node-id="281:23428" data-name="Container">
          <DesignView className="v196" data-node-id="281:23429" data-name="Input">
            <DesignView className="v197" data-node-id="281:23430" data-name="Container">
              <DesignView className="v198" data-node-id="281:23431">
                <DesignText className="v176">Friday Dinner Squad</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
          <DesignView className="v199" data-node-id="281:23432" data-name="Button - Clear input">
            <DesignView className="v135" data-node-id="281:23433" data-name="Container">
              <DesignImage alt="" className="v8" src={imgContainer2} />
            </DesignView>
          </DesignView>
        </DesignView>
        <DesignView className="v200" data-node-id="281:23435" data-name="Schedule & Location Quick Pickers">
          <DesignView className="v4" data-node-id="281:23436" data-name="Container">
            <DesignView className="v201" data-node-id="281:23437">
              <DesignText className="v32">{`Date, Time & Scope`}</DesignText>
            </DesignView>
          </DesignView>
          <DesignView className="v202" data-node-id="281:23438" data-name="Container">
            <DesignView className="v203" data-node-id="281:23439" data-name="Button">
              <DesignView className="v204" data-node-id="281:23440" data-name="Container">
                <DesignImage alt="" className="v8" src={imgContainer3} />
              </DesignView>
              <DesignView className="v205" data-node-id="281:23442" data-name="Container">
                <DesignView className="v206" data-node-id="281:23443">
                  <DesignText className="v207">Today, 7:30 PM</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v208" data-node-id="281:23444" data-name="Button">
              <DesignView className="v209" data-node-id="281:23445" data-name="Container">
                <DesignImage alt="" className="v8" src={imgContainer4} />
              </DesignView>
              <DesignView className="v205" data-node-id="281:23447" data-name="Container">
                <DesignView className="v206" data-node-id="281:23448">
                  <DesignText className="v207">Downtown (5 mi)</DesignText>
                </DesignView>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v210" data-node-id="312:26606" data-name="2. Invite Members Card">
        <DesignView className="v108" data-node-id="312:26607" data-name="Container">
          <DesignView className="v193" data-node-id="312:26608" data-name="Container">
            <DesignView className="v211" data-node-id="312:26609" data-name="Container">
              <DesignImage alt="" className="v8" src={imgContainer5} />
            </DesignView>
            <DesignView className="v30" data-node-id="312:26611" data-name="Container">
              <DesignView className="v212" data-node-id="312:26612">
                <DesignText className="v44">Share Group Invite</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
        <DesignView className="v213" data-node-id="312:26613" data-name="Code & Link Quick Copy Block">
          <DesignView className="v30" data-node-id="312:26614" data-name="Container">
            <DesignView className="v4" data-node-id="312:26615" data-name="Container">
              <DesignView className="v214" data-node-id="312:26616">
                <DesignText className="v32">Invite Code</DesignText>
              </DesignView>
            </DesignView>
            <DesignView className="v4" data-node-id="312:26617" data-name="Container">
              <DesignView className="v215" data-node-id="312:26618">
                <DesignText className="v216">EAT-404</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
          <DesignView className="v217" data-node-id="312:26619" data-name="Button">
            <DesignView className="v218" data-node-id="312:26620" data-name="Container">
              <DesignImage alt="" className="v8" src={imgContainer6} />
            </DesignView>
            <DesignView className="v60" data-node-id="312:26622" data-name="Container">
              <DesignView className="v219" data-node-id="312:26623">
                <DesignText className="v207">Copy Code</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
        <DesignView className="v220" data-node-id="312:26624" data-name="Quick Add Recent Squad Friends">
          <DesignView className="v108" data-node-id="312:26625" data-name="Container">
            <DesignView className="v30" data-node-id="312:26626" data-name="Container">
              <DesignView className="v221" data-node-id="312:26627">
                <DesignText className="v207">Quick Add Friends</DesignText>
              </DesignView>
            </DesignView>
          </DesignView>
          <DesignView className="v149" data-node-id="312:26628" data-name="Container">
            <DesignView className="v222" data-node-id="312:26629" data-name="Friend 1: Sarah (Already in group/invited)">
              <DesignView className="v223" data-node-id="312:26630" data-name="Container">
                <DesignView className="v224" data-node-id="312:26631" data-name="Background">
                  <DesignView className="v225" data-node-id="312:26632">
                    <DesignText className="v207">TM</DesignText>
                  </DesignView>
                  <DesignView className="v226" data-node-id="312:26633" data-name="Background">
                    <DesignView className="v227" data-node-id="312:26634" data-name="Overlay+Shadow" />
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26635" data-name="Container">
                  <DesignView className="v174" data-node-id="312:26636" data-name="Container">
                    <DesignView className="v206" data-node-id="312:26637">
                      <DesignText className="v207">Taylor M.</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="312:26638" data-name="Container">
                    <DesignView className="v228" data-node-id="312:26639">
                      <DesignText className="v207">Active now</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v229" data-node-id="312:26640" data-name="Button">
                <DesignView className="v230" data-node-id="312:26641" data-name="Container">
                  <DesignImage alt="" className="v8" src={imgContainer7} />
                </DesignView>
                <DesignView className="v60" data-node-id="312:26643" data-name="Container">
                  <DesignView className="v231" data-node-id="312:26644">
                    <DesignText className="v32">Invited</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v222" data-node-id="312:26645" data-name="Friend 2: Daniel K. (Joined)">
              <DesignView className="v223" data-node-id="312:26646" data-name="Container">
                <DesignView className="v224" data-node-id="312:26647" data-name="Background">
                  <DesignView className="v225" data-node-id="312:26648">
                    <DesignText className="v207">AK</DesignText>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26649" data-name="Container">
                  <DesignView className="v174" data-node-id="312:26650" data-name="Container">
                    <DesignView className="v206" data-node-id="312:26651">
                      <DesignText className="v207">Alex K.</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="312:26652" data-name="Container">
                    <DesignView className="v232" data-node-id="312:26653">
                      <DesignText className="v207">Last dined 3d ago</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v229" data-node-id="312:26654" data-name="Button">
                <DesignView className="v230" data-node-id="312:26655" data-name="Container">
                  <DesignImage alt="" className="v8" src={imgContainer7} />
                </DesignView>
                <DesignView className="v60" data-node-id="312:26657" data-name="Container">
                  <DesignView className="v231" data-node-id="312:26658">
                    <DesignText className="v32">Joined</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v222" data-node-id="312:26659" data-name="Friend 3: Emily C. (Joined)">
              <DesignView className="v223" data-node-id="312:26660" data-name="Container">
                <DesignView className="v224" data-node-id="312:26661" data-name="Background">
                  <DesignView className="v225" data-node-id="312:26662">
                    <DesignText className="v207">JC</DesignText>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26663" data-name="Container">
                  <DesignView className="v174" data-node-id="312:26664" data-name="Container">
                    <DesignView className="v206" data-node-id="312:26665">
                      <DesignText className="v207">Jamie C.</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="312:26666" data-name="Container">
                    <DesignView className="v232" data-node-id="312:26667">
                      <DesignText className="v207">Vegetarian lover</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v229" data-node-id="312:26668" data-name="Button">
                <DesignView className="v230" data-node-id="312:26669" data-name="Container">
                  <DesignImage alt="" className="v8" src={imgContainer7} />
                </DesignView>
                <DesignView className="v60" data-node-id="312:26671" data-name="Container">
                  <DesignView className="v231" data-node-id="312:26672">
                    <DesignText className="v32">Joined</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
            <DesignView className="v233" data-node-id="312:26673" data-name="Friend 4: Alex R. (Not yet invited)">
              <DesignView className="v223" data-node-id="312:26674" data-name="Container">
                <DesignView className="v224" data-node-id="312:26675" data-name="Background">
                  <DesignView className="v234" data-node-id="312:26676">
                    <DesignText className="v207">DR</DesignText>
                  </DesignView>
                </DesignView>
                <DesignView className="v30" data-node-id="312:26677" data-name="Container">
                  <DesignView className="v174" data-node-id="312:26678" data-name="Container">
                    <DesignView className="v206" data-node-id="312:26679">
                      <DesignText className="v207">David R.</DesignText>
                    </DesignView>
                  </DesignView>
                  <DesignView className="v4" data-node-id="312:26680" data-name="Container">
                    <DesignView className="v232" data-node-id="312:26681">
                      <DesignText className="v207">Available tonight</DesignText>
                    </DesignView>
                  </DesignView>
                </DesignView>
              </DesignView>
              <DesignView className="v235" data-node-id="312:26682" data-name="Button">
                <DesignView className="v236" data-node-id="312:26683" data-name="Container">
                  <DesignImage alt="" className="v8" src={imgContainer8} />
                </DesignView>
                <DesignView className="v60" data-node-id="312:26685" data-name="Container">
                  <DesignView className="v237" data-node-id="312:26686">
                    <DesignText className="v32">Invite</DesignText>
                  </DesignView>
                </DesignView>
              </DesignView>
            </DesignView>
          </DesignView>
        </DesignView>
      </DesignView>
      <DesignView className="v80" data-node-id="281:23530" data-name="Tabbar">
        <HomeIndicator className="v81" />
      </DesignView>
    </DesignView>
  );
}
