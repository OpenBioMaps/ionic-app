export class QuestionBase<T>{
  description: string;
  default_value: string;
  column: string;
  short_name: string;
  list: string;
  length: string;
  count: string;
  type: string;
  obl: string;
  //api_params missing
  //genlist missing

  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  constructor(options: {
      description?: string,
      default_value?: string,
      column?: string,
      short_name?: string,
      list?: string,
      length?: string,
      count?: string,
      type?: string,
      obl?: string,

      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string
    } = {}) {
    this.description = options.description || '';
    this.default_value = options.default_value || '';
    this.column = options.column;
    this.short_name = options.short_name;
    this.list = options.list || '';
    this.length = options.length || '';
    this.count = options.count;
    this.type = options.type;
    this.obl = options.obl || '';

    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  
  }
}
