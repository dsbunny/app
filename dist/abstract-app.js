// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
export class AbstractApp extends EventTarget {
    params;
    constructor(params) {
        super();
        this.params = params;
        // Validate the parameters.
        if (!this.params.src || typeof this.params.src !== 'string') {
            throw new TypeError('Invalid src parameter');
        }
        if (typeof this.params.duration !== 'number' || this.params.duration < 0) {
            throw new TypeError('Invalid duration parameter');
        }
    }
}
//# sourceMappingURL=abstract-app.js.map