import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivationEnd, ActivationStart, ChildActivationEnd, NavigationEnd, NavigationError, NavigationStart, ResolveStart, Router, RoutesRecognized } from '@angular/router';

@Component({
    selector: 'app-editor',
    templateUrl: 'editor.page.html',
    styleUrls: ['editor.page.scss']
})
export class EditorPageComponent implements OnInit {
    

    constructor (
        private activatedRoute: ActivatedRoute, 
        private router: Router, 
        private title: Title
    ) {}

    public ngOnInit() {
        console.log('loaded')
    }


}
