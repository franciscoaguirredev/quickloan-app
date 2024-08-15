import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { CreateLoanDto } from './create-loan.dto';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {

    constructor(
        private readonly loansServices:LoansService
    ){}

  @Post()
  createLoan(@Body() createLoan: CreateLoanDto ) {
    return 'Loan created';
  }

  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    return this.loansServices.LoanStatus(id)
  }

}
