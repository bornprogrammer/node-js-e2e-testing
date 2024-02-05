

class UserSession {

    loggedInUserData = {};

    setLoggedInUserData(data) {
        data = data[0];
        this.loggedInUserData.token = data.access_token;
        this.loggedInUserData.first_name = data.first_name;
        this.loggedInUserData.middle_name = data.middle_name;
        this.loggedInUserData.last_name = data.last_name;
        this.loggedInUserData.user_org_id = data.organisations[0].user_org_id;
        this.loggedInUserData.org_id = data.organisations[0].org_id;
        this.loggedInUserData.org_name = data.organisations[0].org_name;
    }

    getToken() {
        return this.loggedInUserData.token;
    }

    getLoggedInUserOrgId() {
        return this.loggedInUserData.user_org_id;
    }

    getLoggedInOrgId() {
        return this.loggedInUserData.org_id;
    }

    getLoggedInOrgName() {
        return this.loggedInUserData.org_name;
    }

    getLoggedInUserName() {
        return `${this.loggedInUserData.first_name} ${this.loggedInUserData.middle_name} ${this.loggedInUserData.last_name}`;
    }



}

export default new UserSession;