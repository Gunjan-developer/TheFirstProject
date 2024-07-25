export class Tag {

    static readonly ANGULAR = new Tag('Angular' , 'red');
    static readonly TYPESCRIPT = new Tag('Typescript' , 'darkred');
    static readonly JAVASCRIPT = new Tag('Javascript' , 'orange');
    static readonly NODEJS = new Tag('Node.JS' , 'brown');

    private constructor(private readonly key : string, public readonly color : string) {

    }

    toString() {
        return this.key;
    }
}