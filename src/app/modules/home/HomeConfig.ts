import { Card } from 'src/app/interfaces/project';

export interface HomeConfigData {
    title?: string;
    description2: string;
    servicesTitle: string;
    numberOfServices: string;
    projectsTitle: string;
    microServicesTitle: string;
    numberOfMicroServices: string;
    sections: {
        title: string
    }[],
    description?: string,
    button?: string,
    overview: {
        title: string,
        count: string
    }[],
    section_what_are_we: {
        heading: string,
        title: string,
        description: string,
        button: string,
        overview: {
            title: string,
            count: string
        }[]
    },
    services: {
        title: string,
        cardsData: Card[],
    },
    you_are_almost_there: {
        title: string,
        description: string,
        description2: string,
        formOverview: {
            title: string,
            placeholderInfo: string
        }[],
        overview: {
            title: string,
            count: string,
        }[],
        buttonLabel: string,
    }


}
