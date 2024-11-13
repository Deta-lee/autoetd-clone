import { PartId } from "./PartId";
import { ActorSexualStatus } from "./ActorSexualStatus";
import { partIdT } from "./partIdT";
import { genSwitcher } from "../util";
import { TR } from "../tHelper";

const sensitivitySwitcher = genSwitcher(
    [200, TR("過敏すぎて生活もままならない")],
    [100, TR("過敏で感じすぎる")],
    [50, TR("とても敏感な")],
    [20, TR("敏感な")],
    [10, TR("感じやすい")],
    [4, TR("開発された")],
    [-1, ""],
);

const bustSizeSwitcher = genSwitcher(
    // P下
    [46.5, TR("戦えない爆乳")],
    // N下
    [41.5, TR("生活に困るレベルの爆乳")],
    // L下
    [36.5, TR("規格外爆乳")],
    // J下
    [31.5, TR("はちきれんばかりの爆乳")],
    // H下
    [26.5, TR("爆乳")],
    // F下
    [21.5, TR("豊満な")],
    // D中
    [17, TR("大きな")],
    // B下
    [11.5, ""],
    // A下
    [9, TR("ふくらみかけの")],
    [-1, TR("ぺったんこな")],
);

export function personPartT(partId: PartId, status: ActorSexualStatus) {
    const part = partIdT(partId);
    const sensitivity = sensitivitySwitcher(status.sensitivity[partId]);
    if (partId === "bust") {
        const bustSize = bustSizeSwitcher(status.size.bust);
        return `${sensitivity} ${bustSize} ${part}`;
    }
    return `${sensitivity} ${part}`;
}
