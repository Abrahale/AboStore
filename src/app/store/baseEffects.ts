import { Injectable } from "@angular/core";
import { MessageService } from "../modules/shared/services/message.service";

@Injectable()
export class baseEffects{
    constructor(private messageService: MessageService){}

     showErrorMessage(e: any, message: string) {
        this.messageService.showError(
          `${message} - server returned code ${e.status}`
        );
    }

    showMessage(message:string) {
        this.messageService.showSuccess(message,false)
    }
}