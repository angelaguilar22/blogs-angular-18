import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirDialogComponent } from '@components/comun/confir-dialog/confir-dialog.component';
import { Tag } from '../../models';
import { TagService } from '../../services/tag.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.scss',
})
export class BuscarComponent implements OnInit {
  tags: Array<any> = [];

  private dialog = inject(MatDialog);
  private tagService = inject(TagService);

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.tags.push({
        id: i,
        title: `Title ${i}`,
        image: '',
      });
    }

    console.log(this.tags);
  }

  showConfirmationDialog(tag: Tag) {
    const dialogRef = this.dialog.open(ConfirDialogComponent, {
      data: {
        title: 'Eliminar',
        content: `¿Está seguro de que desea eliminar el tag ${tag.id}?`,
      },
    });

    dialogRef.componentInstance.confirm.subscribe(() => {
      dialogRef.close();
      this.deleteTag(tag);
    });

    dialogRef.componentInstance.cancel.subscribe(() => {
      dialogRef.close();
    });
  }

  deleteTag(tag: Tag) {
    this.tagService.createTag(tag);
  }
}
