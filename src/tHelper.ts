import { Lang } from "./Lang";

const lang: Lang = "zh";

export function tHelper<K extends string>(
    i18n: {
        [L in Lang]: {
            [k in K]: string;
        };
    },
) {
    return (key: K) => (i18n[lang][key] || "") as string;
}

// 定义每种语言的翻译
export const i18n = {
    zh: {
        "アリス": "爱丽丝",
        "スライム": "史莱姆",
        "はダメージを受けなかった": "没有受到伤害。",
        "の攻撃は効果が無い！": "的攻击无效！",
        "ターン": "回合",
        "の攻撃！": "发动攻击！",
        "は攻撃をかわしダメージを受けなかった。": "成功躲避了攻击，没有受到伤害。",
        "の攻撃は外れた！": "的攻击打偏了！",
        "は余裕の表情だ。": "面带从容的表情。",
        "は快感で集中できず攻撃失敗してしまった！": "由于快感中无法集中，攻击失败！",
        "人は周囲を探索したがなにもなかった": "人探索周围，但什么也没有找到",
        "バトル開始!": "战斗开始!",
        "おもらし": "失禁",
        "おもらし性感": "失禁快感",
        "射乳": "泌乳",
    },
};

// 翻译方法
export const TR = (key: string,TrObj?:any): string => {
    let i = TrObj || i18n;
    // 使用类型断言确保 lang 是 i18n 中的有效键
    return i[lang as keyof typeof i18n]?.[key as keyof typeof i18n["zh"]] || key;
};



