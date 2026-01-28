import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoffeeBeanService } from '../../services/coffee-bean.service';
import { CoffeeBean } from '../../models/coffee-bean.model';

@Component({
  selector: 'app-coffee-bean-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coffee-bean-form.component.html',
  styleUrl: './coffee-bean-form.component.css'
})
export class CoffeeBeanFormComponent implements OnChanges {
  @Input() coffeeBean: CoffeeBean | null = null;
  @Output() beanSaved = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  formData: CoffeeBean = {
    name: '',
    origin: '',
    roastLevel: 'Medium',
    rating: 3,
    description: ''
  };

  roastLevels = ['Light', 'Medium', 'Medium-Dark', 'Dark'];

  constructor(private coffeeBeanService: CoffeeBeanService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['coffeeBean'] && this.coffeeBean) {
      this.formData = { ...this.coffeeBean };
    } else if (changes['coffeeBean'] && !this.coffeeBean) {
      this.resetForm();
    }
  }

  onSubmit(): void {
    if (this.coffeeBean && this.coffeeBean.id) {
      // Update existing bean
      this.coffeeBeanService.updateCoffeeBean(this.coffeeBean.id, this.formData).subscribe({
        next: () => {
          this.beanSaved.emit();
          this.resetForm();
        },
        error: (error) => console.error('Error updating coffee bean:', error)
      });
    } else {
      // Create new bean
      this.coffeeBeanService.createCoffeeBean(this.formData).subscribe({
        next: () => {
          this.beanSaved.emit();
          this.resetForm();
        },
        error: (error) => console.error('Error creating coffee bean:', error)
      });
    }
  }

  onCancel(): void {
    this.cancelled.emit();
    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      name: '',
      origin: '',
      roastLevel: 'Medium',
      rating: 3,
      description: ''
    };
  }
}
