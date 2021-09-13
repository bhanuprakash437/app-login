import {Selector} from 'testcafe'

class CreateAccountPage {
    constructor() {
        this.registrationFormTitle = Selector('.hl-5');
    }

}

export default new CreateAccountPage();
