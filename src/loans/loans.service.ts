import { Injectable } from '@nestjs/common';

@Injectable()
export class LoansService {
    
    LoanStatus(userProfile: any): string {
        if (userProfile.creditScore > 700) {
            return 'Low Risk';
        } else {
            return 'High Risk';
        }
    }

}
