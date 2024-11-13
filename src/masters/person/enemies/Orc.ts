import produce from "immer";
import { createPerson, commonBattleStatus } from "../helper";
import { TR } from "../../../tHelper";

export const Orc = produce(createPerson(1001, TR("Orc")), person => {
    person.characters.normal.battleStatus = commonBattleStatus;
    person.characters.normal.strategies = [
        {
            condition: { id: "always" },
            targetting: { id: "selectableEnemies", options: { op: "lower", variableKey: "hp" } },
            action: { id: "attack", targettingTypeIndex: 0 },
        },
    ];
    person.variable.hp = person.characters.normal.battleStatus.maxHp;
});
