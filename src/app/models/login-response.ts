import { Token } from './token';
import { User } from './user';

export interface LoginResponse {
    token:      Token;
    user:       User;
    model_type: string;
}