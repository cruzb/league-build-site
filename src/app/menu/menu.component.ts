import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivationEnd, ActivationStart, ChildActivationEnd, NavigationEnd, NavigationError, NavigationStart, ResolveStart, Router, RoutesRecognized } from '@angular/router';

import { filter, map, mergeMap, take } from 'rxjs/operators';

import { ICategory } from './category.model';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit {
    public pageTitle = '';
    public categories: ICategory[] = [];
    public show = { search: false };

    constructor (
        private activatedRoute: ActivatedRoute, 
        private router: Router, 
        private title: Title
    ) {}

    public ngOnInit() {
        const menu: ICategory[] = [
            {
                id: '1',
                sort: 1,
                name: 'Test',
                items: [
                    {
                        id: '1',
                        sort: 1,
                        name: 'stuff item',
                        url: '/stuff'
                    }
                ],
                expanded: true
            }
        ]

        if (menu) {
            this.categories = menu;
        }

        this.router.events.pipe(
            filter((event) => event instanceof ActivationEnd && event.snapshot.component !== undefined),
            map((event) => (event as ActivationEnd).snapshot),
            map((route) => {
                while (route.firstChild) { route = route.firstChild; }
                return route;
            }),
            filter((route) => route.outlet === 'primary'),
            map((route) => route.data)
        ).subscribe((routeData) => {
            this.routeDataChanged(routeData)
        });
    }

    public toggleDropdown = (category?: ICategory) => {
        this.categories.forEach((c) => {
            if (!category || c.id !== category.id) {
                c.expanded = false;
            }
        });

        if (category) {
            category.expanded = !category.expanded;
        }
    }

    private routeDataChanged(routeData: { [key: string]: string }) {
        this.toggleDropdown();

        if (!routeData['pageTitle']) {
            return;
        }

        this.pageTitle = routeData['pageTitle'];

        let browserTitle = routeData['pageTitle'];

        if (browserTitle.substring(0, 12) === 'Marketplace ') {
            browserTitle = browserTitle.substring(12, browserTitle.length);
        }

        this.title.setTitle(browserTitle + ' - MOPAR Marketplace');
    }

    @HostListener('document:click', ['$event.target'])
    private documentClick = (target: HTMLElement) => {
        if (!target.classList.contains('app-menu--category') && !target.classList.contains('app-menu--item')) {
            this.toggleDropdown();
        }        
    }
}
