import { array, allKeys } from "../../util";

// export interface Behavior {
//     readonly おもらし: number;
//     readonly おもらし性感: number;
//     readonly 射乳: number;
//     readonly 射乳性感: number;
//     readonly 食性感: number;
//     readonly 排泄性感: number;
//     readonly オナニー: number;
//     readonly 精液: number;
//     readonly 媚薬媚毒: number;
//     readonly 発情: number;
//     readonly 痴態: number;
//     readonly 被虐: number;
//     readonly 淫封: number;
//     readonly 淫罰: number;
//     readonly 露出性感: number;
//     readonly 性具: number;
//     readonly 射精: number;
//     readonly 発作: number;
//     readonly 性感共有: number;
// }

// export type BehaviorKey = keyof Behavior;

// export const behaviorKeys = array(
//     allKeys<BehaviorKey>()([
//         "おもらし",
//         "おもらし性感",
//         "射乳",
//         "射乳性感",
//         "食性感",
//         "排泄性感",
//         "オナニー",
//         "精液",
//         "媚薬媚毒",
//         "発情",
//         "痴態",
//         "被虐",
//         "淫封",
//         "淫罰",
//         "露出性感",
//         "性具",
//         "射精",
//         "発作",
//         "性感共有",
//     ]),
// );

// export const zeroBehavior: Behavior = {
//     おもらし: 0,
//     おもらし性感: 0,
//     射乳: 0,
//     射乳性感: 0,
//     食性感: 0,
//     排泄性感: 0,
//     オナニー: 0,
//     精液: 0,
//     媚薬媚毒: 0,
//     発情: 0,
//     痴態: 0,
//     被虐: 0,
//     淫封: 0,
//     淫罰: 0,
//     露出性感: 0,
//     性具: 0,
//     射精: 0,
//     発作: 0,
//     性感共有: 0,
// };

export interface Behavior {
    readonly omorashi: number;
    readonly omorashiSensation: number;
    readonly lactation: number;
    readonly lactationSensation: number;
    readonly foodSensation: number;
    readonly excretionSensation: number;
    readonly masturbation: number;
    readonly semen: number;
    readonly aphrodisiac: number;
    readonly arousal: number;
    readonly shame: number;
    readonly masochism: number;
    readonly seal: number;
    readonly punishment: number;
    readonly exposureSensation: number;
    readonly sexToy: number;
    readonly ejaculation: number;
    readonly seizure: number;
    readonly sharedSensation: number;
}

export type BehaviorKey = keyof Behavior;

export const behaviorKeys = array(
    allKeys<BehaviorKey>()([
        "omorashi",
        "omorashiSensation",
        "lactation",
        "lactationSensation",
        "foodSensation",
        "excretionSensation",
        "masturbation",
        "semen",
        "aphrodisiac",
        "arousal",
        "shame",
        "masochism",
        "seal",
        "punishment",
        "exposureSensation",
        "sexToy",
        "ejaculation",
        "seizure",
        "sharedSensation",
    ]),
);

// 行为标签，根据语言选择
export const behaviorLabels = {
    ja: {
        omorashi: "おもらし",
        omorashiSensation: "おもらし性感",
        lactation: "射乳",
        lactationSensation: "射乳性感",
        foodSensation: "食性感",
        excretionSensation: "排泄性感",
        masturbation: "オナニー",
        semen: "精液",
        aphrodisiac: "媚薬媚毒",
        arousal: "発情",
        shame: "痴態",
        masochism: "被虐",
        seal: "淫封",
        punishment: "淫罰",
        exposureSensation: "露出性感",
        sexToy: "性具",
        ejaculation: "射精",
        seizure: "発作",
        sharedSensation: "性感共有",
    },
    zh: {
        omorashi: "失禁",
        omorashiSensation: "失禁快感",
        lactation: "泌乳",
        lactationSensation: "泌乳快感",
        foodSensation: "食物快感",
        excretionSensation: "排泄快感",
        masturbation: "自慰",
        semen: "精液",
        aphrodisiac: "媚药",
        arousal: "发情",
        shame: "羞耻",
        masochism: "受虐",
        seal: "淫封",
        punishment: "淫罚",
        exposureSensation: "露出快感",
        sexToy: "性玩具",
        ejaculation: "射精",
        seizure: "发作",
        sharedSensation: "快感共享",
    },
};

// 初始化所有行为值为 0 的对象
export const zeroBehavior: Behavior = {
    omorashi: 0,
    omorashiSensation: 0,
    lactation: 0,
    lactationSensation: 0,
    foodSensation: 0,
    excretionSensation: 0,
    masturbation: 0,
    semen: 0,
    aphrodisiac: 0,
    arousal: 0,
    shame: 0,
    masochism: 0,
    seal: 0,
    punishment: 0,
    exposureSensation: 0,
    sexToy: 0,
    ejaculation: 0,
    seizure: 0,
    sharedSensation: 0,
};
