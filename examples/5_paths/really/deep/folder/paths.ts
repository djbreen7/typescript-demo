import { UsersService } from '../../../../../services'; 
// Not sexy. Breaks if file is moved

import { DragonsService } from '~services';

console.log(DragonsService);

class DragonComponent {
    constructor(
        private _dragonService: DragonsService,
        private _usersService: UsersService,
    ) { }
}

