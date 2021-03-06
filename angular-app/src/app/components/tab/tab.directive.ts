import {
    Directive,
    ContentChildren,
    forwardRef,
    Input,
    HostBinding,
    QueryList,
    ChangeDetectorRef
} from '@angular/core';

@Directive({
    selector: `*[appTabs]`,
    exportAs: 'appTabs'
})
export class TabsDirective {

    @ContentChildren(forwardRef(() => TabDirective)) tabs: QueryList<TabDirective>;

    constructor(private changeDetectorRef: ChangeDetectorRef) { }

    changeTab(tab: string) {
        this.tabs.forEach(e => {
            if (e.tab === tab) {
                e.setShow();
            } else {
                e.setHidden();
            }
        });
        this.changeDetectorRef.detectChanges();
    }
}

@Directive({
    selector: `*[appTab]`,
    exportAs: 'appTab'
})
export class TabDirective {

    @Input() tab: string;

    @HostBinding('style.display') dispaly: string;

    setHidden() {
        this.dispaly = 'none';
    }

    setShow() {
        this.dispaly = '';
    }

}
