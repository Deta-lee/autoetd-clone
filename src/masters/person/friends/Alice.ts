import produce from "immer";
import { createPerson, commonBattleStatus, commonSensitivity } from "../helper";
import { TR } from './../../../tHelper';

export const Alice = produce(createPerson(1, TR("アリス")), person => {
    person.characters.normal.battleStatus = commonBattleStatus;
    person.characters.normal.strategies = [
        {
            condition: { id: "always" },
            targetting: { id: "selectableEnemies", options: { op: "higher", variableKey: "hp" } },
            action: { id: "attack", targettingTypeIndex: 0 },
        },
    ];
    person.variable.hp = person.characters.normal.battleStatus.maxHp;
    person.sexualStatus.sensitivity = commonSensitivity;
    person.sexualStatus.size.bust = 20;
    person.sexualStatus.size.underBust = 60;
    person.stateLevels.base = 1;
    person.stateLevels.膨乳 = 1;
});
