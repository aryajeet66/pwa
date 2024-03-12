import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //var dec.
  public showMyMessage = false
  public msg:string = "Hello...."
  public infoHeadingOne:string = "UPI, Wallet & Bill Payments"
  public infoDetailOne:string = "Pay on the Bajaj Finserv app and get exciting rewards"
  public title:string = 'Bajaj Pay';
  public quickTitle:string = 'Quick Actions'
  public upiCopyBtnText = "Copy UPI ID"
  public scanQrText:string = 'Scan any QR'
  public inames:string[] = ['Scan any QR','Pay to contacts','Refer & Earn','User Passbook','Add Card','To Bank/UPI']
  public upiLite:string = 'Superfast UPI Payment'
  public bpayWalletNames:string[] = ['Bajaj Pay','Use wallet','Manage FASTag','Gift Card','Topup Wallet']
  public bpayWalletIcons:string[] = ['wallet2','check-lg','fast-forward-btn','gift','currency-rupee']
  public billsBanner:string[] = ['Mobile Recharge','Electricity','Credit Card Bill Payment','Loan Repayment','DTH','FASTag Recharge','Piped Gas','Broadband','LIC/Insurance']
  public imgSrc:string[] = ['phone','lightbulb-fill','credit-card-2-back-fill','arrow-repeat','broadcast','fast-forward-btn','fuel-pump','broadcast-pin','bag-heart']
  public ourOfferingsIcons:string[] = ['gift','plus','layers','fast-forward-btn']
  public ourOfferingsTitle:string[] = ['Buy Giftcard','Add Giftcard','My Giftcards','FASTag']
  public quickActionsIcons:string[] = ['qr-code-scan','currency-rupee','megaphone','credit-card','bank']
  public quickActionsTitle:string[] = ['Scan any QR','Pay to contacts','Refer & Earn','Add Credit Card','To Bank/UPI ID']
  //fun dec.
  callMsg(){
    console.log("clicked")
    setTimeout(() => {
      this.showMyMessage = true;
  }, 1000);
  }
  
  sendMessageToApp() {
    console.log("i was clicked")
    if (window.postMessage) {
      window.postMessage({ message: "Show toast notification" }, "*"); // "*" indicates all origins
    } else {
      alert("Your browser doesn't support message passing.");
    }
  }

  public isDesktopLayout = false;
  public isMobileLayout = false;
  ngOnInit() {
    window.onresize = () => this.isDesktopLayout = window.innerWidth >= 991;
  }
}

