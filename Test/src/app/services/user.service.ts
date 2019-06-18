import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {

    private users: User[] = [
        {
            firstName: 'James',
            lastName: 'Sith',
            email: 'james@smith.com',
            drinkPreference: 'Oasis',
            hobbies: [
                'coder',
                'jouer'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUser() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUser();
    }
}

