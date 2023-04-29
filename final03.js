import { LightningElement, api } from 'lwc';
import opportunityObject from '@salesforce/schema/Opportunity'
import Nome from '@salesforce/schema/Opportunity.Name';
import CloseDate from '@salesforce/schema/Opportunity.CloseDate';
import StageName from '@salesforce/schema/Opportunity.StageName';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


/**
 * Creates Account records.
 */
export default class OpportunityCreator extends LightningElement {
    
    opportunityObject = opportunityObject;
    nameField = Nome;
    CloseDateField = CloseDate;
    StageNameField = StageName;    

    @api recordId

    handleOpportunityCreated(event){

        

        console.log(event.detail);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Registro criado com sucesso',
                message: event.detail.message,
                variant: 'success',
            }))

        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
       
    }
    
    handleError(event){
        console.log(event.detail);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating record',
                message: event.detail.message,
                variant: 'error',
            }),
        );
    }
}
