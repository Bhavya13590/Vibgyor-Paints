import { Address } from '../../shared/services/address';
export interface UserProfile {
    id: number;
    name: string;
    username: string;
    mobileNo: number;
    address: Address;
}
