import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { CreateLoanDto } from './create-loan.dto';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {

    constructor(
        private readonly loansServices:LoansService
    ){}

  @Post()
  createLoan(@Body() createLoan: any ) {
    return `Loan created for ${createLoan.userId}`
  }

  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    return this.loansServices.LoanStatus(id)
  }

}
