import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import {CheckoutService} from '../checkout.service'
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
 creditCard: any = {
    card_holder: '',
    type:'', 
    accountNumber: '',
    expiration_date: '',
    cvc:'', 
    address: ''
  };

  isEditMode=false;
  constructor(private checkoutService: CheckoutService, private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    this.route.data.subscribe((data:any)=>{
      if(data.creditCard){
      this.creditCard=data.creditCard;
      this.isEditMode = true;
      }
    });
  }

 handleSubmit(event: Event, creditCardFormGroup: NgForm){
    const creditCardFormModel=creditCardFormGroup.value
    /*if (this.isEditMode){
      this.checkoutService.updateCreditCard(creditCardFormModel)
      .subscribe(response =>{
        this.router.navigate(["app-checkout-form"])
      });
    }else
    this.checkoutService.saveCreditCard(creditCardFormModel)
    .subscribe(response =>{
      this.router.navigate(["app-checkout-form"])
    });*/
  }
 cancel=false;

 doCancel() {
   this.cancel=true;
   this.router.navigate(['checkout-form'])
 }




}
