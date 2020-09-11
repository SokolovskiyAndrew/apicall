import {Component, OnInit, Input, SimpleChange} from '@angular/core';
import {PreloaderService} from '../../preloader.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
})
export class PreloaderComponent implements OnInit {
  @Input() loading = false;
  @Input() httploading = false;

  constructor(public preloaderService: PreloaderService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange): void {
    console.log(changes);
  }
}
