import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')])
    ])
  ]
})
export class SliderComponent {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;

  readonly imagesSizes = IMAGES_SIZES;

  currentSlideIndex: number = 0;

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
