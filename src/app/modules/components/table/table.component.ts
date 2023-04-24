import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { tap, catchError, throwError, finalize, merge } from 'rxjs';
import { Lesson, CoursesService, Course } from 'src/app/modules/admin/services/course.service';

@Component({
  selector: 'abo-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  course:Course;

  lessons: Lesson[] = [];

  loading = false;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  selection = new SelectionModel<Lesson>(true, []);


  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) {

  }

  displayedColumns = ['select', 'seqNo', "description", "duration"];

  expandedLesson: Lesson = null;

  ngOnInit() {

      this.course = this.route.snapshot.data["course"];

      this.loadLessonsPage();

  }

  onLessonToggled(lesson:Lesson) {

      this.selection.toggle(lesson);

      console.log(this.selection.selected);

  }

  loadLessonsPage() {

      this.loading = true;

      this.coursesService.findLessons(
)
          .pipe(
              tap(lessons => this.lessons = lessons),
              catchError(err => {
                  console.log("Error loading lessons", err);
                  alert("Error loading lessons.");
                  return throwError(err);

              }),
              finalize(() => this.loading = false)
          )
          .subscribe();

  }

  onToggleLesson(lesson:Lesson) {
      if (lesson == this.expandedLesson) {
          this.expandedLesson = null;
      }
      else {
          this.expandedLesson = lesson;
      }

  }

  ngAfterViewInit() {

      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

      merge(this.sort.sortChange, this.paginator.page)
          .pipe(
              tap(() => this.loadLessonsPage())
          )
          .subscribe();


  }

  isAllSelected() {
      return this.selection.selected?.length == this.lessons?.length;
  }

  toggleAll() {
      if (this.isAllSelected()) {
          this.selection.clear();
      }
      else {
          this.selection.select(...this.lessons);
      }
  }
}
