export interface DEService {
    title: string;
    description?: string;
    document: string;
    dataInput: DataInput[]

}

export interface DataInput {
    expect: string[];
    icon: string;
    isMultiple: boolean;
}

