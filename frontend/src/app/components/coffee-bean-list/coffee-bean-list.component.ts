import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeBeanService } from '../../services/coffee-bean.service';
import { CoffeeBean } from '../../models/coffee-bean.model';
import { CoffeeBeanFormComponent } from '../coffee-bean-form/coffee-bean-form.component';

@Component({
  selector: 'app-coffee-bean-list',
  standalone: true,
  imports: [CommonModule, CoffeeBeanFormComponent],
  templateUrl: './coffee-bean-list.component.html',
  styleUrl: './coffee-bean-list.component.css'
})
export class CoffeeBeanListComponent implements OnInit {
  coffeeBeans: CoffeeBean[] = [];
  selectedBean: CoffeeBean | null = null;

  constructor(private coffeeBeanService: CoffeeBeanService) { }

  ngOnInit(): void {
    this.loadCoffeeBeans();
  }

  loadCoffeeBeans(): void {
    this.coffeeBeanService.getAllCoffeeBeans().subscribe({
      next: (beans) => this.coffeeBeans = beans,
      error: (error) => console.error('Error loading coffee beans:', error)
    });
  }

  deleteCoffeeBean(id: number | undefined): void {
    if (!id) return;
    
    if (confirm('Are you sure you want to delete this coffee bean?')) {
      this.coffeeBeanService.deleteCoffeeBean(id).subscribe({
        next: () => this.loadCoffeeBeans(),
        error: (error) => console.error('Error deleting coffee bean:', error)
      });
    }
  }

  updateRating(bean: CoffeeBean, newRating: number): void {
    if (!bean.id) return;
    
    this.coffeeBeanService.updateRating(bean.id, newRating).subscribe({
      next: () => this.loadCoffeeBeans(),
      error: (error) => console.error('Error updating rating:', error)
    });
  }

  selectBean(bean: CoffeeBean): void {
    this.selectedBean = bean;
  }

  onBeanSaved(): void {
    this.selectedBean = null;
    this.loadCoffeeBeans();
  }

  cancelEdit(): void {
    this.selectedBean = null;
  }
}
