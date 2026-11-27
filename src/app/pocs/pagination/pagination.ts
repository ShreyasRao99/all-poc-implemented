import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pagination',
  styleUrl: './pagination.css',
  templateUrl: './pagination.html',
})
export class Pagination {
  totalCount = input.required<number>();
  pageSize = signal(5);
  pageNumber = signal(1);
  oAndP = output<{ limit: number; offset: number }>();
  totalPages = computed(() => Math.ceil(this.totalCount() / this.pageSize()));
  offset = computed(()=>{
    return (this.pageNumber() - 1) * this.pageSize();
  })

  pageSizeChange(event: Event) {
    const limit =  Number((event.target as HTMLSelectElement).value);
    this.pageSize.set(limit);
    this.pageNumber.set(1);
    this.oAndP.emit({ limit, offset: this.offset()});
  }

  changePage(type: 'prev' | 'next') {
    const nextPage = this.pageNumber() + (type === 'next' ? 1 : -1);

    if (nextPage < 1 || nextPage > this.totalPages()) return;

    this.pageNumber.set(nextPage);

    this.oAndP.emit({
      limit: this.pageSize(),
      offset: this.offset(),
    });
  }
}
