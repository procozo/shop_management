import { Component, OnInit } from "@angular/core";
import { Accordion } from "primeng/accordion";
import { MenuItem } from "primeng/api";
import { LogicHelperService } from "src/app/helpers/logic-helper.service";
import { Card } from "src/app/interfaces/project";
import { data } from "src/app/modules/card/data";
import { cardData } from "src/app/modules/card/file";

export interface PageConfig {
  isNotification: boolean;
  notificationsList?: Card[];
  stepNumber: number;
}

export interface CardDataObject {
  id?: string;
  card?: string;
  sub_cards?: {
    id?: string;
    card?: string;
    entities?: string[];
    include?: boolean;
    logic?: string;
    isEditable?: boolean;
  }[][];
  include?: boolean;
  logic?: string;
  entities?: string[];
  isEditable?: boolean;
}

@Component({
  selector: "LDIGITAL-card_module",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  providers: [Accordion],
})
export class CardComponentFeature implements OnInit {
  keywordText = "";

  allProgramAarray: Card[] = [];
  allProgramCardAarray!: Card[];
  tempProgramArray!: Card[];
  tempCardDataArray!: [];
  searchInput!: string;
  cardSearchInput!: string;
  public pageConfig!: PageConfig;
  public cardData!: [];
  public isAPICall = false;
  public isKeyWordListShow = false;
  showDescisionLogic = false;
  showCodeDetails = false;
  public canvasEl!: HTMLElement;
  public imagesArray!: [];
  public entities: string[] = [];
  isDetailedViewShow: boolean = false;
  currentScenarioCard!: CardDataObject;
  items!: MenuItem[];

  keyWordMenu!: MenuItem[];
  currentEntityObject: unknown;
  currentObjectModel: unknown;
  currentPatentObject: {}[] = [];
  constructor(public helper: LogicHelperService) {
    this.pageConfig = {
      isNotification: false,
      stepNumber: 1,
      notificationsList: [],
    };
  }

  ngOnInit(): void {
    this.imagesArray = data.data.img as [];
    console.log(data.data);
    console.log(cardData.data);
    this.cardData = cardData.data.cards as [];
    this.tempCardDataArray = [...(cardData.data.cards as [])];

    this.keyWordMenu = [
      {
        icon: "pi pi-plus",
      },
    ];

    this.items = [
      {
        icon: "pi pi-pencil",
        command: () => {
          (this.currentObjectModel as { isEditable: boolean }).isEditable =
            true;
          console.log(this.currentObjectModel);
        },
      },
      {
        icon: "pi pi-times",
      },
      {
        icon: "pi pi-plus",
        command: () => {
          (this.currentObjectModel as { isEditable: boolean }).isEditable =
            true;
          console.log(this.currentPatentObject);
          this.currentPatentObject.push(this.currentObjectModel as {});
        },
      },
      {
        icon: "pi pi-copy",
      },
      {
        icon: "pi pi-trash",
      },
    ];
  }

  sendDataEmmiterhandler(data: unknown) {
    console.log(data);
    this.isDetailedViewShow = true;
    console.log(data);
    this.currentScenarioCard = data as { card: string };
  }
  extract(data: CardDataObject) {
    console.log(data.sub_cards);
    let newDataCaptured = {};
    data.sub_cards?.map((res) => {
      newDataCaptured = {
        totalSubcards: (data.sub_cards as {}[]).length,
      };
    });

    console.log(newDataCaptured);
  }
  handleCards(data: {}[] | {}) {
    // console.log(data);
    return (data as []).length > 0
      ? (data as CardDataObject[])
      : [data as CardDataObject];
  }
  getEntities(data: unknown) {
    console.log(data);
    this.isKeyWordListShow = true;
    this.allProgramAarray = [];
    this.currentEntityObject = data;
    this.entities = (data as CardDataObject).entities as string[];
    this.entities.map((res) => {
      this.allProgramAarray.push({
        title: res,
        count_score: 30,
        description: "PG1234355 | 01/09/2022",
        apiData: {
          name: "cs_fmuInputSelectorTherm.fmu",
          id: "225385",
        },
        isMultiple: false,
        isDelete: false,
        // author: "Prad",
        type: "Models",
        isSingleCheckUI: true,
        deleteIcon: "assets/icons/delete.svg",
      });
    });
    this.tempProgramArray = [...this.allProgramAarray];
  }
  searchModalsEvent(searchText: string, type: number) {
    this.searchInput = searchText;
    console.log(searchText);
    try {
      this.allProgramAarray = this.tempProgramArray?.filter((el: Card) =>
        el.title.includes(searchText)
      );
    } catch (e: unknown) {
      console.error(e);
    }
  }

  serachCardEvent(searchText: string, type: number) {
    this.cardSearchInput = searchText;
    console.log(searchText, this.tempCardDataArray);
    try {
      // Object.assign(
      //   this.cardData,
      //   this.tempCardDataArray?.filter((el: { card?: string }) =>
      //     (el.card as string).includes(searchText as string)
      //   )
      // );
      console.log(this.cardData);
      this.cardData = this.tempCardDataArray?.filter((el: { card?: string }) =>
        (el.card as string).includes(searchText as string)
      ) as [];
    } catch (e: unknown) {
      console.error(e);
    }
  }
  eventEmiterCanvasHandler(b: number[]) {
    console.log(b);

    this.cardData.map((res: { para_coords: [] }) => {
      console.log(res?.para_coords, b);
      const array2Sorted = b.slice().sort();
      if (
        res?.para_coords?.length === b?.length &&
        res?.para_coords
          .slice()
          .sort()
          .every(function (value, index) {
            return value === array2Sorted[index];
          })
      ) {
        console.log(res);
        this.sendDataEmmiterhandler(res);
      }
      // if (res?.para_coords.equa) {
      //   console.log(res);
      // }
    });
    // this.sendDataEmmiterhandler({
    //   id: "card_1",
    //   card: "an evaluation* to confirm a suspected diagnosis of pediatric feeding disorder† is considered medically necessary",
    //   sub_cards: [
    //     [
    //       {
    //         id: "card_1_1.1",
    //         card: "evaluation * to confirm a suspected diagnosis of pediatric feeding disorder†",
    //         entities: ["pediatric feeding disorder"],
    //         include: true,
    //         logic: "and",
    //         para_coords: [125, 813, 1042, 858],
    //         para_coords_ori: [125, 813, 1042, 858],
    //         para_pointsize: 0,
    //       },
    //     ],
    //     [
    //       {
    //         id: "card_1_2.1",
    //         card: "children whose difficulties began under five ( 5 ) years of age who meet either of following criteria",
    //         entities: [],
    //         include: true,
    //         logic: "and",
    //       },
    //     ],
    //     [
    //       [
    //         {
    //           id: "card_1_3_1.1",
    //           card: "failure to meet developmental milestones of growth and development",
    //           entities: ["failure"],
    //           include: true,
    //           logic: "or",
    //         },
    //       ],
    //       [
    //         {
    //           id: "card_1_3_2.1",
    //           card: "significant weight loss",
    //           entities: ["significant weight loss"],
    //           include: true,
    //           logic: "and",
    //         },
    //         {
    //           id: "card_1_3_2.2",
    //           card: "reduction or cessation of weight gain",
    //           entities: ["reduction", "weight gain"],
    //           include: true,
    //           logic: "and",
    //         },
    //         {
    //           id: "card_1_3_2.3",
    //           card: "previous 2 months",
    //           entities: [],
    //           include: true,
    //           logic: "or",
    //         },
    //       ],
    //       [
    //         {
    //           id: "card_1_3_3.1",
    //           card: "growth and development milestones have been met , but only via nutritional support consisting of high-calorie foods , nutritionally deficient foods , or both ,",
    //           entities: ["nutritional support"],
    //           include: true,
    //           logic: "and",
    //         },
    //         {
    //           id: "card_1_3_3.2",
    //           card: "transition to nutritionally and calorically appropriate foods is warranted",
    //           entities: ["nutritionally and calorically appropriate foods"],
    //           include: true,
    //           logic: "or",
    //         },
    //       ],
    //     ],
    //   ],
    //   include: true,
    // });
  }

  addKeyWord() {
    console.log(this.keywordText);
    ((this.currentEntityObject as CardDataObject).entities as string[]).push(
      this.keywordText
    );
    this.keywordText = "";
    this.getEntities(this.currentEntityObject);
  }
  setCurrentObjectModel(data: unknown, parent?: unknown) {
    console.log(data, parent);
    this.currentPatentObject = parent as {}[];
    this.currentObjectModel = data;
    // console.log(this.currentObjectModel);
  }
}
