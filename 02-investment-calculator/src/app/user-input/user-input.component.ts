import { Component ,EventEmitter, output, Output,signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { SIGNAL } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredReturnValue = signal('5');
  enteredDuration = signal('10');
 //@Output() calculate = new EventEmitter<InvestmentInput> ();
  calculate = output<InvestmentInput>();
  onSubmitMyForm() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredReturnValue(),
      duration: +this.enteredDuration()
    });
    this.enteredAnnualInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredReturnValue.set('5');
    this.enteredDuration.set('10');



  } 



}
