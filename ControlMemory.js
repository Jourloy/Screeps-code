function amountCreeps() {
    for (let z in Game.rooms) {
        let room = Game.rooms[z];

        for (let i in Memory.rolies) {
            if ("Drone" == Memory.rolies[i]) {
                switch (room.controller && room.controller.my && room.controller.level) {
                    case 1:
                        Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
                        break;
                    case 2:
                        Memory.room[room.name + ".amount." + Memory.rolies[i]] = 2;
                        break;
                    case 3:
                        Memory.room[room.name + ".amount." + Memory.rolies[i]] = 2;
                        break;
                    case 4:
                        Memory.room[room.name + ".amount." + Memory.rolies[i]] = 2;
                        break;
                    case 5:
                        let Nydus = room.find(FIND_MY_STRUCTURES, { filter: { structureType: STRUCTURE_LINK } });
                        if (Nydus.length > 1) {
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 3;
                        } else {
                            Memory.room[room.name + ".amount." + Memory.rolies[i]] = 2;
                        }
                        break;
                    case 6:
                        Memory.room[room.name + ".amount." + Memory.rolies[i]] = 2;
                        break;
                    case 6:
                        Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
                        break;
                    case 7:
                        Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
                        break;
                    case 8:
                        Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
                        break;
                }

            }

            if ("DroneMiner" == Memory.rolies[i]) {
                Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
            }

            if ("Zergling" == Memory.rolies[i]) {
                if (Game.flags.attack) {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 0;
                } else if (Game.flags.power) {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
                } else {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 0;
                }
            }

            if ("Overseer" == Memory.rolies[i]) {
                if (Game.flags.claim) {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
                } else {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 0;
                }
            }

            if ("DroneRemoute" == Memory.rolies[i]) {
                if (Game.flags.claim) {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 1;
                } else {
                    Memory.room[room.name + ".amount." + Memory.rolies[i]] = 0;
                }
            }

        }

    }
}

let ControlMemory = {
    setting(memory) {
        Memory.rolies = ["Drone", "Zergling", "Overseer", "DroneRemoute", "DroneMiner"];

        for (let name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }

        amountCreeps();

    }
};
module.exports = ControlMemory;