import { Component, Input } from '@angular/core';
import { PopoverController, ViewController } from 'ionic-angular';

/**
 * Generated class for the IsviHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'isvi-header',
  templateUrl: 'isvi-header.html',
  styleUrls: ['isvi-header.scss'],
})
export class IsviHeaderComponent {

  @Input() title: string = "default title"
  @Input() isRoot: boolean = false
  @Input() popover: Component = null
  @Input() viewCtrl: ViewController = null
  @Input() img: string = null

  constructor(
    public popoverCtrl: PopoverController
  ) {
  }

  optionsPopover(event) {
    let p = this.popoverCtrl.create(this.popover)
    p.present({
      ev: event
    });
  }

  cerrarModal() {
    this.viewCtrl.dismiss()
  }
}
