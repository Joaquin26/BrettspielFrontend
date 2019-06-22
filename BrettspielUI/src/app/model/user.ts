import { Membership } from './MemberShip';

export class User {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    reputation: number;
    membershipId: number;
    membership: Membership;
    User() {
        this.membership = new Membership();
        this.email="";
        this.name="";
        this.membership.name="";    
        this.membership.id = 1;
        this.reputation = 0;
        this.id = null;
    }
}
