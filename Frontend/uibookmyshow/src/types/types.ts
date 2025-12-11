export interface SignupProps {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface LoginData {
    email: string,
    password: string
}
interface IAdress {
    buildingNumber: string;
    buildingName: string;
    floorNumber: number;
    landMark: string;
    street: string;
    district: string;
    zipcode: number;
    state: string;
    country: string;

}
export interface ITheater {
    _id: string
    name: string;
    ownerId: string;
    address: IAdress
}