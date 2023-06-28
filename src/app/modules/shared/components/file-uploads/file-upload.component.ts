import { Component, OnInit,Input, Output, EventEmitter } from "@angular/core";
import { FileUploadService } from "../../services/file-upload.service";
import { Observable } from "rxjs";
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { BaseStoreState, FileActions, FileSelectors } from "src/app/store";
import { Store } from "@ngrx/store";

@Component({
    selector:'abo-file-upload',
    templateUrl:'./file-upload.component.html',
    styleUrls:['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit{
    @Input() type: 'product' | 'profile' = 'product'
    @Input() id: string
    @Output() doneUploading: EventEmitter<any> = new EventEmitter()
    @Output() imageSelect: EventEmitter<any> = new EventEmitter()
    selectedFiles?: FileList;
    currentFile?: File;
    progress = 0;
    message = '';
    preview = '';
    files$ = this.store$.select(FileSelectors.selectFiles)
  
    imageInfos?: Observable<any>;
 
    constructor(private fileUploadService: FileUploadService, private store$:Store<BaseStoreState.State>) {} 

    ngOnInit():void{
        this.getAwsFiles()
    }
    
    getAwsFiles(){
        this.store$.dispatch(new FileActions.LoadRequestAction)
    }

    selectFile(event: any): void {
        this.message = '';
        this.preview = '';
        this.progress = 0;
        this.selectedFiles = event.target.files;
      
        if (this.selectedFiles) {
          const file: File | null = this.selectedFiles.item(0);
      
          if (file) {
            this.preview = '';
            this.currentFile = file;
      
            const reader = new FileReader();
      
            reader.onload = (e: any) => {
              console.log(e.target.result);
              this.preview = e.target.result;
            };
      
            reader.readAsDataURL(this.currentFile);
          }
        }
      }

      upload(): void {
        this.progress = 0;
      
        if (this.selectedFiles) {
          const file: File | null = this.selectedFiles.item(0);
      
          if (file) {
            this.currentFile = file;
      
            this.fileUploadService.upload(this.currentFile).subscribe({
              next: (event: any) => {
                console.log(event)
                if (event.type === HttpEventType.UploadProgress) {
                  this.progress = Math.round((100 * event.loaded) / event.total);
                } else if (event instanceof HttpResponse) {
                  this.message = event.body.message;
                  this.getAwsFiles()
                  this.doneUploading.emit(event.body.key)
                }
              },
              error: (err: any) => {
                console.log(err);
                this.progress = 0;
      
                if (err.error && err.error.message) {
                  this.message = err.error.message;
                } else {
                  this.message = 'Could not upload the image!';
                }
      
                this.currentFile = undefined;
              },
            });
          }
      
          this.selectedFiles = undefined;
        }
      }

      selectImage(key:string){
        this.imageSelect.emit(key)
      }

      deleteFile(key:string){
        this.fileUploadService.deleteFile(key).subscribe(data =>
            this.getAwsFiles()
        )
      }
}