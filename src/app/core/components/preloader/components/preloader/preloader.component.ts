import { Component, OnInit } from '@angular/core';
import { PreloaderService } from '../../services';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
})
export class PreloaderComponent implements OnInit {
  constructor(public preloaderService: PreloaderService) {}

  ngOnInit(): void {}
}
