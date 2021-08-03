import { HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

export class RequestUtil {
  static getRequestParams = (datatable: MatTableDataSource<any>): HttpParams => {
    let params: HttpParams = new HttpParams();
    if (datatable == null) {
      return params;
    }

    params = params.append('page', datatable.paginator.pageIndex.toString());
    params = params.append('size', datatable.paginator.pageSize.toString());

    /*if (datatable.multiSortMeta) {
      datatable.multiSortMeta.forEach(value => {
        params = RequestUtil.getSort(value.field, value.order, params);
      });
    } else {
      params = RequestUtil.getSort(datatable.sortField, datatable.sortOrder, params);
    }*/

    return params;
  };

  private static getSort(field: string, order: number, params: HttpParams) {
    const direction = order === 1 ? 'ASC' : 'DESC';
    return params.append('sort', field == null ? '' : field + ',' + direction);
  }
}
