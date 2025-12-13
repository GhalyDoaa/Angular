import { Component, input, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
// @Input() result?:{
//           year: number,
//           interest: number,
//           valueEndOfYear: number,
//           annualInvestment: number,
//           totalInterest: number,
//           totalAmountInvested: number,
//         }[];

// result =input<{
//           year: number,
//           interest: number,
//           valueEndOfYear: number,
//           annualInvestment: number,
//           totalInterest: number,
//           totalAmountInvested: number,
//         }[]|undefined>();
  constructor(private investmentService :InvestmentService) {}

   get result(){
    return this.investmentService.resultData.asReadonly();
  }
}
