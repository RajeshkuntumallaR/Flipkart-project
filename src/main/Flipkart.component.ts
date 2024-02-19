import { Component } from "@angular/core";
import { SampleService } from "./services/sample.service";
import { SampleMember } from "./model/sample-member";

@Component({
    selector: "Flipkart",
    templateUrl: "./Flipkart.component.html"
})
export class 7776Component {
    members: SampleMember[];
    selectedMembers: SampleMember[] = [];
    membersLoading: boolean = false;

    constructor(private sampleService: SampleService) {}

    loadMembers() {
        this.membersLoading = true;
        this.members = this.sampleService.getSampleMembers();
        this.membersLoading = false;
    }

    openAddMembersForm() {

    }

    openRemoveMembersForm() {

    }

    ngOnInit() {
        this.loadMembers();
    }

    ngOnChanges() {
        this.loadMembers();
    }
}
