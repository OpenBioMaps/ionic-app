export var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.description = options.description || '';
        this.default_value = options.default_value || '';
        this.column = options.column;
        this.short_name = options.short_name;
        this.list = options.list || '';
        this.length = options.length || '';
        this.count = options.count;
        this.obl = options.obl || '';
        this.type = options.type || '';
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
    }
    return QuestionBase;
}());
//# sourceMappingURL=question-base.js.map