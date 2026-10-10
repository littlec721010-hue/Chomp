const assetPathPrefix = "/assets/figma";
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
    <div className={className || "v89"} data-node-id="202:17140">
      <div className="v0" data-node-id="202:17141" data-name="Line" />
    </div>
  );
}

export default function Decide9() {
  return (
    <div className="v1" data-node-id="281:23405" data-name="Decide 9">
      <div className="v82" data-node-id="281:23406" data-name="Navigation bar">
        <div className="v83" data-node-id="I281:23406;9:2837" data-name="Status Bar">
          <div className="v84" data-node-id="I281:23406;9:2837;7:2322" data-name="Battery">
            <img alt="" className="v8" src={imgBattery} />
          </div>
          <div className="v85" data-node-id="I281:23406;9:2837;7:2326" data-name="Wifi">
            <img alt="" className="v8" src={imgWifi} />
          </div>
          <div className="v86" data-node-id="I281:23406;9:2837;7:2330" data-name="Cellular Connection">
            <img alt="" className="v8" src={imgCellularConnection} />
          </div>
          <div className="v87" data-node-id="I281:23406;9:2837;7:2335" data-name="Time Style">
            <p className="v238" data-node-id="I281:23406;9:2837;7:2336">
              9:41
            </p>
          </div>
        </div>
      </div>
      <div className="v187" data-node-id="281:23413" data-name="weui:back-filled">
        <img alt="" className="v8" src={imgWeuiBackFilled} />
      </div>
      <div className="v188" data-node-id="281:23415">
        <p className="v185">Group information</p>
      </div>
      <a className="v189" data-node-id="281:23416" data-name="Primary Action CTA Button">
        <div className="v190" data-node-id="281:23417" data-name="Container">
          <div className="v60" data-node-id="281:23418" data-name="Container">
            <div className="v61" data-node-id="281:23419">
              <p className="v44">Next: Set Dining Preferences</p>
            </div>
          </div>
          <div className="v191" data-node-id="281:23420" data-name="Container">
            <img alt="" className="v8" src={imgContainer} />
          </div>
        </div>
      </a>
      <div className="v192" data-node-id="281:23422" data-name="1. Group Details Card">
        <div className="v108" data-node-id="281:23423" data-name="Container">
          <div className="v193" data-node-id="281:23424" data-name="Label">
            <div className="v194" data-node-id="281:23425" data-name="Container">
              <img alt="" className="v8" src={imgContainer1} />
            </div>
            <div className="v195" data-node-id="281:23427">
              <p className="v44">Group Name</p>
            </div>
          </div>
        </div>
        <div className="v4" data-node-id="281:23428" data-name="Container">
          <div className="v196" data-node-id="281:23429" data-name="Input">
            <div className="v197" data-node-id="281:23430" data-name="Container">
              <div className="v198" data-node-id="281:23431">
                <p className="v176">Friday Dinner Squad</p>
              </div>
            </div>
          </div>
          <div className="v199" data-node-id="281:23432" data-name="Button - Clear input">
            <div className="v135" data-node-id="281:23433" data-name="Container">
              <img alt="" className="v8" src={imgContainer2} />
            </div>
          </div>
        </div>
        <div className="v200" data-node-id="281:23435" data-name="Schedule & Location Quick Pickers">
          <div className="v4" data-node-id="281:23436" data-name="Container">
            <div className="v201" data-node-id="281:23437">
              <p className="v32">{`Date, Time & Scope`}</p>
            </div>
          </div>
          <div className="v202" data-node-id="281:23438" data-name="Container">
            <div className="v203" data-node-id="281:23439" data-name="Button">
              <div className="v204" data-node-id="281:23440" data-name="Container">
                <img alt="" className="v8" src={imgContainer3} />
              </div>
              <div className="v205" data-node-id="281:23442" data-name="Container">
                <div className="v206" data-node-id="281:23443">
                  <p className="v207">Today, 7:30 PM</p>
                </div>
              </div>
            </div>
            <div className="v208" data-node-id="281:23444" data-name="Button">
              <div className="v209" data-node-id="281:23445" data-name="Container">
                <img alt="" className="v8" src={imgContainer4} />
              </div>
              <div className="v205" data-node-id="281:23447" data-name="Container">
                <div className="v206" data-node-id="281:23448">
                  <p className="v207">Downtown (5 mi)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="v210" data-node-id="312:26606" data-name="2. Invite Members Card">
        <div className="v108" data-node-id="312:26607" data-name="Container">
          <div className="v193" data-node-id="312:26608" data-name="Container">
            <div className="v211" data-node-id="312:26609" data-name="Container">
              <img alt="" className="v8" src={imgContainer5} />
            </div>
            <div className="v30" data-node-id="312:26611" data-name="Container">
              <div className="v212" data-node-id="312:26612">
                <p className="v44">Share Group Invite</p>
              </div>
            </div>
          </div>
        </div>
        <div className="v213" data-node-id="312:26613" data-name="Code & Link Quick Copy Block">
          <div className="v30" data-node-id="312:26614" data-name="Container">
            <div className="v4" data-node-id="312:26615" data-name="Container">
              <div className="v214" data-node-id="312:26616">
                <p className="v32">Invite Code</p>
              </div>
            </div>
            <div className="v4" data-node-id="312:26617" data-name="Container">
              <div className="v215" data-node-id="312:26618">
                <p className="v216">EAT-404</p>
              </div>
            </div>
          </div>
          <div className="v217" data-node-id="312:26619" data-name="Button">
            <div className="v218" data-node-id="312:26620" data-name="Container">
              <img alt="" className="v8" src={imgContainer6} />
            </div>
            <div className="v60" data-node-id="312:26622" data-name="Container">
              <div className="v219" data-node-id="312:26623">
                <p className="v207">Copy Code</p>
              </div>
            </div>
          </div>
        </div>
        <div className="v220" data-node-id="312:26624" data-name="Quick Add Recent Squad Friends">
          <div className="v108" data-node-id="312:26625" data-name="Container">
            <div className="v30" data-node-id="312:26626" data-name="Container">
              <div className="v221" data-node-id="312:26627">
                <p className="v207">Quick Add Friends</p>
              </div>
            </div>
          </div>
          <div className="v149" data-node-id="312:26628" data-name="Container">
            <div className="v222" data-node-id="312:26629" data-name="Friend 1: Sarah (Already in group/invited)">
              <div className="v223" data-node-id="312:26630" data-name="Container">
                <div className="v224" data-node-id="312:26631" data-name="Background">
                  <div className="v225" data-node-id="312:26632">
                    <p className="v207">TM</p>
                  </div>
                  <div className="v226" data-node-id="312:26633" data-name="Background">
                    <div className="v227" data-node-id="312:26634" data-name="Overlay+Shadow" />
                  </div>
                </div>
                <div className="v30" data-node-id="312:26635" data-name="Container">
                  <div className="v174" data-node-id="312:26636" data-name="Container">
                    <div className="v206" data-node-id="312:26637">
                      <p className="v207">Taylor M.</p>
                    </div>
                  </div>
                  <div className="v4" data-node-id="312:26638" data-name="Container">
                    <div className="v228" data-node-id="312:26639">
                      <p className="v207">Active now</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v229" data-node-id="312:26640" data-name="Button">
                <div className="v230" data-node-id="312:26641" data-name="Container">
                  <img alt="" className="v8" src={imgContainer7} />
                </div>
                <div className="v60" data-node-id="312:26643" data-name="Container">
                  <div className="v231" data-node-id="312:26644">
                    <p className="v32">Invited</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="v222" data-node-id="312:26645" data-name="Friend 2: Daniel K. (Joined)">
              <div className="v223" data-node-id="312:26646" data-name="Container">
                <div className="v224" data-node-id="312:26647" data-name="Background">
                  <div className="v225" data-node-id="312:26648">
                    <p className="v207">AK</p>
                  </div>
                </div>
                <div className="v30" data-node-id="312:26649" data-name="Container">
                  <div className="v174" data-node-id="312:26650" data-name="Container">
                    <div className="v206" data-node-id="312:26651">
                      <p className="v207">Alex K.</p>
                    </div>
                  </div>
                  <div className="v4" data-node-id="312:26652" data-name="Container">
                    <div className="v232" data-node-id="312:26653">
                      <p className="v207">Last dined 3d ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v229" data-node-id="312:26654" data-name="Button">
                <div className="v230" data-node-id="312:26655" data-name="Container">
                  <img alt="" className="v8" src={imgContainer7} />
                </div>
                <div className="v60" data-node-id="312:26657" data-name="Container">
                  <div className="v231" data-node-id="312:26658">
                    <p className="v32">Joined</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="v222" data-node-id="312:26659" data-name="Friend 3: Emily C. (Joined)">
              <div className="v223" data-node-id="312:26660" data-name="Container">
                <div className="v224" data-node-id="312:26661" data-name="Background">
                  <div className="v225" data-node-id="312:26662">
                    <p className="v207">JC</p>
                  </div>
                </div>
                <div className="v30" data-node-id="312:26663" data-name="Container">
                  <div className="v174" data-node-id="312:26664" data-name="Container">
                    <div className="v206" data-node-id="312:26665">
                      <p className="v207">Jamie C.</p>
                    </div>
                  </div>
                  <div className="v4" data-node-id="312:26666" data-name="Container">
                    <div className="v232" data-node-id="312:26667">
                      <p className="v207">Vegetarian lover</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v229" data-node-id="312:26668" data-name="Button">
                <div className="v230" data-node-id="312:26669" data-name="Container">
                  <img alt="" className="v8" src={imgContainer7} />
                </div>
                <div className="v60" data-node-id="312:26671" data-name="Container">
                  <div className="v231" data-node-id="312:26672">
                    <p className="v32">Joined</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="v233" data-node-id="312:26673" data-name="Friend 4: Alex R. (Not yet invited)">
              <div className="v223" data-node-id="312:26674" data-name="Container">
                <div className="v224" data-node-id="312:26675" data-name="Background">
                  <div className="v234" data-node-id="312:26676">
                    <p className="v207">DR</p>
                  </div>
                </div>
                <div className="v30" data-node-id="312:26677" data-name="Container">
                  <div className="v174" data-node-id="312:26678" data-name="Container">
                    <div className="v206" data-node-id="312:26679">
                      <p className="v207">David R.</p>
                    </div>
                  </div>
                  <div className="v4" data-node-id="312:26680" data-name="Container">
                    <div className="v232" data-node-id="312:26681">
                      <p className="v207">Available tonight</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="v235" data-node-id="312:26682" data-name="Button">
                <div className="v236" data-node-id="312:26683" data-name="Container">
                  <img alt="" className="v8" src={imgContainer8} />
                </div>
                <div className="v60" data-node-id="312:26685" data-name="Container">
                  <div className="v237" data-node-id="312:26686">
                    <p className="v32">Invite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="v80" data-node-id="281:23530" data-name="Tabbar">
        <HomeIndicator className="v81" />
      </div>
    </div>
  );
}
