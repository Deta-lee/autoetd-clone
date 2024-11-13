import { ExerciseResponse } from "./ExerciseResponse";
import { PartId } from "./PartId";
import { genSwitcher } from "../util";
import { ActorSexualStatus } from "./ActorSexualStatus";
import { personPartT } from "./personPartT";
import { TR, getLang } from "../tHelper";

const lang = getLang();
const epSwitcher = genSwitcher(
    [100, TR("激しく感じてしまった")],
    [20, TR("大きく感じてしまった")],
    [5, TR("感じてしまった")],
    [0, TR("少し感じてしまったで")],
    [-1, ""],
);

const shakeSwitcher = genSwitcher(
    [100, TR("激しく揺れて")],
    [20, TR("大きく揺れて")],
    [5, TR("揺れて")],
    [0, TR("少し揺れただけで")],
    [-1, ""],
);

const rubSwitcher = genSwitcher(
    [100, TR("激しく擦れて")],
    [20, TR("大きく擦れて")],
    [5, TR("擦れて")],
    [0, TR("少し擦れただけで")],
    [-1, ""],
);

export function exerciseResponseT(partId: PartId, status: ActorSexualStatus, res: ExerciseResponse) {
    const ep = epSwitcher(res.ep);
    const rub = rubSwitcher(res.rub);
    const shake = shakeSwitcher(res.size);
    if(lang === "ja" ){
        if (rub) return `${personPartT(partId, status)}が${rub}${ep}`;
        if (shake) return `${personPartT(partId, status)}が${shake}${ep}`;
    }else if(lang === "zh"){
        if (rub) return `${personPartT(partId, status)} ${ep} ${rub}`;
        if (shake) return `${personPartT(partId, status)} ${ep} ${shake}`;
    }
    
    return "";
}
