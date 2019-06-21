import { Membership } from './MemberShip';

export class User {
    id:Number
    username:String
    password:String
    name:String
    email:String
    reputation:Number
    membership:Membership
    User()
    {
        this.membership=new Membership();
        this.membership.id=1;
        this.reputation=0;
        this.id=null;
    }
}
