import { tHelper } from "../tHelper";
import { array, allKeys } from "./types";

export type SortOperator = "higher" | "lower";

export const sortOperators = array(allKeys<SortOperator>()(["higher", "lower"]));

export const sortOperatorT = tHelper<SortOperator>({
    ja: {
        higher: "高い",
        lower: "低い",
    },
    zh: {
        higher: "高",
        lower: "低",
    },
});

export function opSort<T>(op: SortOperator, by: (item: T) => number) {
    return (aItem: T, bItem: T) => {
        const a = by(aItem);
        const b = by(bItem);
        return op === "higher" ? b - a : a - b;
    };
}
