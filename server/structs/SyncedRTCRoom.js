/*
    Synced
    Copyright (C) 2024  Atheesh Thirumalairajan
    Copyright (C) 2024  Tanish Anandababu

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const uuid = require("uuid");

const SyncedRTCRoom = class {
    /* Creator is a SyncedRTCUser */
    constructor(creator) {
        this.roomId = uuid.v4();
        this.hosts = [creator];
        this.online = [];
        this.lastModified = Date.now();
    }

    /* Online User Manipulation Functions */
    removeOnlineUser = (user) => {
        const userIndex = this.online.indexOf(user);
        if (userIndex > -1) this.online.splice(userIndex, 1);

        /* Update Last Modified */
        this.lastModified = Date.now();
    }

    addOnlineUser = (user) => {
        /* Push and Update Last Modified */
        this.online.push(user);
        this.lastModified = Date.now();
    }
}

module.exports = SyncedRTCRoom;