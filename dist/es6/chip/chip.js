import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-chip')
@inject(Element)
export class MdChip {
  @bindable() mdClose = false;

  attached() {
    this.mdClose = getBooleanFromAttributeValue(this.mdClose);
  }
}