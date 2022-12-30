import { Component, OnInit } from "@angular/core";
import { Accordion } from "primeng/accordion";
import { MenuItem } from "primeng/api";
import { LogicHelperService } from "src/app/helpers/logic-helper.service";
import { Card } from "src/app/interfaces/project";
import { data } from "src/app/modules/card/data";
import { cardData } from "src/app/modules/card/file";
import { TreeNode } from "primeng/api";
import { DataService, treeData } from "./data";
import { Observable } from "rxjs";
import { AppState } from "src/app/interfaces/store";
import { Store } from "@ngrx/store";
declare var Mark: any;
import * as LDIGITALActions from "../../../../actions/lDigital.store.action";
import { HTMLData } from "./html";
import { any } from "codelyzer/util/function";
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
export interface Item {
  title: string;
  id: string | number;
  children?: Item[];
  parent?: string | number;
}

@Component({
  selector: "LDIGITAL-card_module",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  providers: [Accordion, DataService],
})
export class CardComponentFeaturePolicy implements OnInit {
  list$!: Observable<any[]>;
  public existingRectanglesArray: {}[] = [];

  public idCounter: number = 0;
  matcher = (term: any, item: any) =>
    item.title.toLowerCase().includes(term.toLowerCase()) ||
    `${item.id}` === `${term}`;

  currentScenario: string = "SCENARIO";
  keywordText = "";
  scenariosArray: any[] = [];
  mainCondition: string = "AND";
  currentScenarioClickedArray!: unknown;

  files1: TreeNode[] = treeData.data;

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
  parentScenarioArray: unknown;
  pageScenarioArray: any = {};
  searchTerm!: any;
  selectedText: any;
  constructor(
    public helper: LogicHelperService,
    private data: DataService,
    private store: Store<AppState>
  ) {
    this.pageConfig = {
      isNotification: false,
      stepNumber: 1,
      notificationsList: [],
    };
  }

  htmlContent: any;
  ngOnInit(): void {
    this.list$ = this.scenariosArray as any;
    // console.log(HTMLData.data);
    this.htmlContent = HTMLData.data;
    setTimeout(() => {
      this.highLightData();
      // this.selectAndHighlightRange("demoText", 1328, 1347);
    }, 200);

    this.store.select("store").subscribe((store) => {
      //console.log(store.scenarios);
      this.existingRectanglesArray = JSON.parse(
        JSON.stringify(store.scenarios as [])
      );
      this.pageScenarioArray = JSON.parse(
        JSON.stringify(store.pageScenarios as {})
      );
      console.log(this.pageScenarioArray);
      // this.createCanvasElement();
      // JSON.stringify(
      //   JSON.parse(store.scenarios)
      // ) as [];
    });
    this.imagesArray = data.data.img as [];
    //console.log(data.data);
    //console.log(cardData.data);
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
          //console.log(this.currentObjectModel);
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
          //console.log(this.currentPatentObject);
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
    //console.log(data);
    this.isDetailedViewShow = true;
    //console.log(data);
    this.currentScenarioCard = data as { card: string };
  }
  extract(data: CardDataObject) {
    //console.log(data.sub_cards);
    let newDataCaptured = {};
    data.sub_cards?.map((res) => {
      newDataCaptured = {
        totalSubcards: (data.sub_cards as {}[]).length,
      };
    });

    //console.log(newDataCaptured);
  }
  handleCards(data: {}[] | {}) {
    // //console.log(data);
    return (data as []).length > 0
      ? (data as CardDataObject[])
      : [data as CardDataObject];
  }
  getEntities(data: unknown) {
    //console.log(data);
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
    //console.log(searchText);
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
    //console.log(searchText, this.tempCardDataArray);
    try {
      // Object.assign(
      //   this.cardData,
      //   this.tempCardDataArray?.filter((el: { card?: string }) =>
      //     (el.card as string).includes(searchText as string)
      //   )
      // );
      //console.log(this.cardData);
      this.cardData = this.tempCardDataArray?.filter((el: { card?: string }) =>
        (el.card as string).includes(searchText as string)
      ) as [];
    } catch (e: unknown) {
      console.error(e);
    }
  }
  eventEmiterCanvasHandler(b: number[]) {
    //console.log(b);

    this.cardData.map((res: { para_coords: [] }) => {
      //console.log(res?.para_coords, b);
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
        //console.log(res);
        this.sendDataEmmiterhandler(res);
      }
      // if (res?.para_coords.equa) {
      //   //console.log(res);
      // }
    });
  }

  addKeyWord() {
    //console.log(this.keywordText);
    ((this.currentEntityObject as CardDataObject).entities as string[]).push(
      this.keywordText
    );
    this.keywordText = "";
    this.getEntities(this.currentEntityObject);
  }
  setCurrentObjectModel(data: unknown, parent?: unknown) {
    //console.log(data, parent);
    this.currentPatentObject = parent as {}[];
    this.currentObjectModel = data;
    // //console.log(this.currentObjectModel);
  }

  selectionEmmiterCanvasHandler(data: unknown) {
    console.log(
      data,
      this.pageScenarioArray[(data as any)?.pageNo]
        ? this.pageScenarioArray[(data as any)?.pageNo]
        : {}
    );
    let newDataRect = [
      ...this.existingRectanglesArray,
      (data as { data: unknown } as unknown as { data: unknown }).data,
    ];
    //console.log(newDataRect);
    this.store.dispatch(
      new LDIGITALActions.UpdateScenario({
        scenarios: newDataRect,
      })
    );
    let pageArray: {} = { ...this.pageScenarioArray };

    Object.assign(pageArray, {
      [(data as any).pageNo]: this.pageScenarioArray[(data as any)?.pageNo]
        ? [...this.pageScenarioArray[(data as any)?.pageNo], (data as any).data]
        : [],
    });

    this.store.dispatch(
      new LDIGITALActions.UpdatePageScenario({
        pageScenarios: { ...this.pageScenarioArray, ...pageArray },
      })
    );
    console.log({ ...this.pageScenarioArray, ...pageArray });
    let x = (
      (data as { data: unknown } as unknown as { data: unknown }).data as {
        x: number;
      }
    ).x;
    let y = (
      (data as { data: unknown } as unknown as { data: unknown }).data as {
        y: number;
      }
    ).y;
    let w = (
      (data as { data: unknown } as unknown as { value: unknown }).value as {
        width: number;
      }
    ).width;
    let h = (
      (data as { data: unknown } as unknown as { value: unknown }).value as {
        h: number;
      }
    ).h;
    ////console.log(x, y, w, h);
    switch (this.currentScenario) {
      case "SCENARIO":
        this.scenariosArray.push({
          id: this.idCounter++,
          title: (
            (data as { data: unknown } as unknown as { data: unknown })
              .data as {
              type: string;
            }
          ).type,
          cords: [x, y, w, h],
          condition: this.mainCondition,
          isChecked: false,
          children: [],
          class: "custom_scenario",
          isEditable: false,
        });

        Object.assign(this.list$, this.scenariosArray);
        ////console.log(this.list$);

        this.store.dispatch(
          new LDIGITALActions.AddTaskToStore({
            tasksList: JSON.parse(JSON.stringify(this.scenariosArray)),
          })
        );

        break;
      case "CARD":
        // let selectedCard: any = this.currentScenarioClickedArray;
        let selectedCard: any = this.scenariosArray.find(
          (el) =>
            el.id === (this.currentScenarioClickedArray as { id: number }).id
        );
        ////console.log(selectedCard);
        Object.assign(selectedCard, {
          children: [
            ...(selectedCard?.children || []),
            {
              id: this.idCounter++,
              title: (
                (data as { data: unknown } as unknown as { data: unknown })
                  .data as {
                  type: string;
                }
              ).type,
              cords: [x, y, w, h],
              condition: this.mainCondition,
              isChecked: false,
              class: "custom_card",
              isEditable: false,
            },
          ],
        });

        ////console.log(this.scenariosArray);
        Object.assign(this.list$, this.scenariosArray);
        this.store.dispatch(
          new LDIGITALActions.AddTaskToStore({
            tasksList: JSON.parse(JSON.stringify(this.scenariosArray)),
          })
        );

        break;
      case "SUB CARD":
        let selectedSubCard: any = (
          this.scenariosArray.find(
            (el) => el.id === (this.parentScenarioArray as { id: number }).id
          ) as { children: {}[] }
        ).children[
          (
            this.scenariosArray.find(
              (el) => el.id === (this.parentScenarioArray as { id: number }).id
            ) as { children: {}[] }
          ).children.findIndex(
            (data: unknown) =>
              (data as { id: number }).id ===
              (this.currentScenarioClickedArray as { id: number }).id
          )
        ];

        ////console.log(selectedSubCard);
        Object.assign(selectedSubCard, {
          children: [
            ...(selectedSubCard?.children || []),
            {
              id: this.idCounter++,
              title: (
                (data as { data: unknown } as unknown as { data: unknown })
                  .data as {
                  type: string;
                }
              ).type,
              cords: [x, y, w, h],
              condition: this.mainCondition,
              isChecked: false,
              class: "custom_tree",
              isEditable: false,
            },
          ],
        });
        this.store.dispatch(
          new LDIGITALActions.AddTaskToStore({
            tasksList: JSON.parse(JSON.stringify(this.scenariosArray)),
          })
        );
        break;
    }
  }

  addScenario(data: string) {
    this.currentScenario = data;
  }
  emitNodeEventHandler(data: { data: unknown; parent: { data: unknown } }) {
    //console.log(data.data);
    this.currentScenarioClickedArray = data.data;
    this.parentScenarioArray = data.parent.data;
  }
  highLightData() {
    let normalizedPositions: { from: number; to: number }[] = [];
    function getSelectionText() {
      var text = "";
      let removeArray = (document as any)?.querySelectorAll(".data_bind");

      var el: any = document.querySelector(".removable_class");
      console.log(el);
      if (el) {
        el.parentNode?.removeChild(el);
      }

      console.log(removeArray);
      for (var i = 0; i < removeArray.length; i++) {
        removeArray[i].removeAttribute("class", "data_bind");
      }

      var body: any = document.getElementById("demoText"); // Take all the body

      var string = body.textContent.toString().replace(/\n/g, String("/t")); // Set them to line of string

      // console.log(string.split("#$"));

      var selObj: any = window.getSelection(); // Get info from selected text
      var selectionBind = selObj.extentNode.parentElement; // find the nearest container to bind the flag
      // var nameBinding = "data_bind"; // Name of the flag that we want to find
      selectionBind.setAttribute("class", "data_bind"); // Set the flag on that selected element
      var textNew = selObj.anchorNode.data; // Get text from selected text
      // var selRange = selObj.getRangeAt(0);

      // var offsetEnd = selRange.endOffset; // How long selected text was

      // var selected = textNew.substring(0, offsetEnd); // Prepare only the selected text

      // var selectedBegin = string.search(nameBinding); // Find the text you selected on that string begin offset

      // (selectionBind as any).prepend("#");
      // console.log(
      //   textNew,
      //   selectionBind,
      //   document.getElementsByClassName("data_bind")
      // );
      // console.log(nameBinding);
      let element = (document as any).createElement("span");
      element.setAttribute("class", "removable_class");
      element.innerHTML = "#$";

      // (document.getElementsByClassName("data_bind") as any)[0].prepend(element);

      // (document.)
      // var selectedEnd = selectedBegin + offsetEnd - 1; // Value of the end of that selected text

      // var data = [selectedBegin, selectedEnd];
      // console.log(data);

      if ((window as any).getSelection) {
        text = (window as any).getSelection().toString();

        // console.log((window as any).getSelection().toString(), text);
        // console.log((window as any).getSelection());
      }
      return text;
    }

    document?.getElementById("demoText")?.addEventListener("mouseup", (e) => {
      // If there is already a share dialog, remove it
      if (document.contains(document.getElementById("share-snippet"))) {
        (document as any).getElementById("share-snippet").remove();
      }

      // Check if any text was selected
      if ((window as any).getSelection().toString().length > 0) {
        // Get selected text and encode it
        const selection = encodeURIComponent(
          (window as any).getSelection().toString()
        ).replace(/[!'()*]/g, escape);

        // Find out how much (if any) user has scrolled
        var scrollTop =
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop;

        // Get cursor position
        const posX = e.clientX - 110;
        const posY = e.clientY + 20 + scrollTop;

        // Create Twitter share URL
        const shareUrl = selection;

        // Append HTML to the body, create the "Tweet Selection" dialog
        let actionSection = document.getElementById("actionSection");

        console.log(posX, posY);
        document.body.insertAdjacentHTML(
          "beforeend",
          '<div id="share-snippet" style="position: absolute; top: ' +
            posY +
            "px; left: " +
            posX +
            'px;">' +
            '<div  class="speech-bubble"><div class="share-inside"><a id="ScenarioEvent" data-element="SCENARIO" href="javascript:void(0);"  >SCENARIO</a><a href="javascript:void(0);" id="CardListAction" data-element="CARD">CARD</a> <a id="SubCardListAction" data-element="SUB CARD" href="javascript:void(0);">SUB CARD</a></div></div></div>'
        );
        function createDataFor(data: string) {
          console.log(data);
        }
        document
          .getElementById("CardListAction")
          ?.addEventListener("click", (e: any) => {
            e.preventDefault();
            console.log(e.target.getAttribute("data-element"));
            this.currentScenario = e.target.getAttribute("data-element");
            this.selectAndHighlightRange(null, start, end);
          });
        document
          .getElementById("ScenarioEvent")
          ?.addEventListener("click", (e: any) => {
            e.preventDefault();
            console.log(e.target.getAttribute("data-element"));
            this.currentScenario = e.target.getAttribute("data-element");
            this.selectAndHighlightRange(null, start, end);
          });
        document
          .getElementById("SubCardListAction")
          ?.addEventListener("click", (e: any) => {
            e.preventDefault();
            console.log(e.target.getAttribute("data-element"));
            this.currentScenario = e.target.getAttribute("data-element");
            this.selectAndHighlightRange(null, start, end);
          });
      }

      var txt = (document.getElementById("demoText") as any)
        .textContent as string;

      var selectedText = getSelectionText()
        .toString()
        .replace(/\n/g, String("/t"));
      this.selectedText = selectedText;
      // console.log(txt);
      setTimeout(() => {
        // console.log(
        //   (document.getElementById("demoText") as any).textContent as string
        // );
      }, 100);
      console.log(selectedText);
      var start = txt.indexOf(selectedText);
      var end = start + selectedText.length;

      var str = txt;
      let regexText = new RegExp(selectedText, "gi");
      // var regex: any = regexText;
      var regex = regexText,
        result,
        indices = [];

      console.log(regex, selectedText.toString().length);
      if (selectedText.toString().length > 10) {
        while ((result = regex.exec(str))) {
          indices.push([result.index, result.index + selectedText.length]);
        }
        console.log(indices);
      }

      console.log(start, end);
      if (start >= 0 && end >= 0) {
        //console.log("start: " + start);
        //console.log("end: " + end);
        normalizedPositions.push({
          from: start,
          to: end,
        });
        //console.log(normalizedPositions);
        if (indices.length > 1) {
          // indices.forEach((el) => {
          //   this.selectAndHighlightRange("demoText", el[0], el[1]);
          // });
          alert(
            "more then one match found in the document with exact same text"
          );
        } else {
          // this.selectAndHighlightRange("demoText", start, end);
        }

        function createTextNode(str: any) {
          return document.createTextNode(str);
        }

        function createHighlighted(str: any) {
          //console.log(str);
          let span = document.createElement("span");
          span.classList.add("highlight");
          span.appendChild(createTextNode(str));
          return span;
        }
      } else {
      }
    });
  }

  selectAndHighlightRange(id: any, start: any, end: any) {
    console.log(start, end);
    setSelectionRange(document.getElementById("demoText"), start, end);

    switch (this.currentScenario) {
      case "SCENARIO":
        // selectionEmmiterCanvasHandler;
        console.log(this.currentScenario, this.selectedText);
        if (this.selectedText) {
          this.scenariosArray.push({
            id: this.idCounter++,
            title: this.selectedText,
            cords: [start, end],
            condition: this.mainCondition,
            isChecked: false,
            alias: "BEHAVIORAL",
            children: [],
            class: "custom_scenario",
            isEditable: false,
          });

          Object.assign(this.list$, this.scenariosArray);
          //////console.log(this.list$);

          this.store.dispatch(
            new LDIGITALActions.AddTaskToStore({
              tasksList: JSON.parse(JSON.stringify(this.scenariosArray)),
            })
          );
        }
        highlight("yellow");
        this.selectedText = null;
        break;
      case "CARD":
        highlight("#fbc02dcc");
        let selectedCard: any = this.scenariosArray.find(
          (el) =>
            el.id === (this.currentScenarioClickedArray as { id: number }).id
        );
        //////console.log(selectedCard);
        if (this.selectedText) {
          Object.assign(selectedCard, {
            children: [
              ...(selectedCard?.children || []),
              {
                id: this.idCounter++,
                title: this.selectedText,
                cords: [start, end],
                condition: this.mainCondition,
                isChecked: false,
                class: "custom_card",
                isEditable: false,
                alias: "BEHAVIORAL",
              },
            ],
          });

          //////console.log(this.scenariosArray);
          Object.assign(this.list$, this.scenariosArray);
          this.store.dispatch(
            new LDIGITALActions.AddTaskToStore({
              tasksList: JSON.parse(JSON.stringify(this.scenariosArray)),
            })
          );
        }
        this.selectedText = null;
        break;

      case "SUB CARD":
        highlight("#0288d191");
        if (this.selectedText) {
          let selectedSubCard: any = (
            this.scenariosArray.find(
              (el) => el.id === (this.parentScenarioArray as { id: number }).id
            ) as { children: {}[] }
          ).children[
            (
              this.scenariosArray.find(
                (el) =>
                  el.id === (this.parentScenarioArray as { id: number }).id
              ) as { children: {}[] }
            ).children.findIndex(
              (data: unknown) =>
                (data as { id: number }).id ===
                (this.currentScenarioClickedArray as { id: number }).id
            )
          ];

          //////console.log(selectedSubCard);
          Object.assign(selectedSubCard, {
            children: [
              ...(selectedSubCard?.children || []),
              {
                id: this.idCounter++,
                title: this.selectedText,
                cords: [start, end],
                condition: this.mainCondition,
                isChecked: false,
                class: "custom_tree",
                isEditable: false,
                alias: "BEHAVIORAL",
              },
            ],
          });
          // //////console.log(this.scenariosArray);
          // Object.assign(this.list$, this.scenariosArray);
          this.store.dispatch(
            new LDIGITALActions.AddTaskToStore({
              tasksList: JSON.parse(JSON.stringify(this.scenariosArray)),
            })
          );
        }
        this.selectedText = null;
        break;
      default:
      //console.log("");
    }

    function getTextNodesIn(node: { nodeType: number; childNodes: any }) {
      var textNodes: any[] = [];
      if (node.nodeType == 3) {
        textNodes.push(node);
      } else {
        var children = node.childNodes;
        for (var i = 0, len = children.length; i < len; ++i) {
          textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
        }
      }
      return textNodes;
    }

    function setSelectionRange(el: any, start: any, end: any) {
      if (document.createRange && window.getSelection) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var textNodes = getTextNodesIn(el);
        var foundStart = false;
        var charCount = 0,
          endCharCount;
        //console.log(textNodes);
        for (var i = 0, textNode; (textNode = textNodes[i++]); ) {
          endCharCount = charCount + textNode.textContent.length;
          //console.log(
          // textNode.textContent.trim().length,
          // textNode.textContent.trim(),
          //   charCount,
          //   textNode.textContent,
          //   textNode.textContent.length,
          //   endCharCount
          // );
          // //console.log(endCharCount);
          if (
            !foundStart &&
            start >= charCount &&
            (start < endCharCount ||
              (start == endCharCount && i <= textNodes.length))
          ) {
            range.setStart(textNode, start - charCount);

            foundStart = true;
          }
          if (foundStart && end <= endCharCount) {
            range.setEnd(textNode, end - charCount);
            break;
          }
          charCount = endCharCount;
          //console.log(charCount);
        }

        var sel: any = window.getSelection();
        // //console.log(range);
        //console.log(textNode, start, charCount);
        sel.removeAllRanges();
        sel.addRange(range);
        // //console.log(textRange, el);
      } else if (
        (document as any).selection &&
        (document as any).body.createTextRange
      ) {
        var textRange = (document as any).body.createTextRange();

        textRange.moveToElementText(el);
        textRange.collapse(true);
        textRange.moveEnd("character", end);
        textRange.moveStart("character", start);
        textRange.select();
      }
    }

    function makeEditableAndHighlight(colour: string | undefined) {
      let sel: any = window.getSelection();
      // //console.log(sel.textContent);
      if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
      }
      document.designMode = "on";
      if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
      // Use HiliteColor since some browsers apply BackColor to the whole block
      if (!document.execCommand("HiliteColor", false, colour)) {
        document.execCommand("BackColor", false, colour);
      }
      document.designMode = "off";
    }
    var range: any, sel;
    function highlight(colour: string | undefined) {
      if ((window as any).getSelection) {
        // IE9 and non-IE
        try {
          if (!document.execCommand("BackColor", false, colour)) {
            makeEditableAndHighlight(colour);
          }
        } catch (ex) {
          makeEditableAndHighlight(colour);
        }
      } else if (
        (document as any).selection &&
        (document as any).selection.createRange
      ) {
        // IE <= 8 case
        range = (document as any).selection.createRange();
        range.execCommand("BackColor", false, colour);
      }
    }
  }

  setTodefaultColor(event: { start: number; end: number }) {
    let start = event.start;
    let end = event.end;
    setSelectionRange(document.getElementById("demoText"), start, end);
    //console.log(this.currentScenario);

    highlight("#ffffff");

    function getTextNodesIn(node: { nodeType: number; childNodes: any }) {
      var textNodes: any[] = [];
      if (node.nodeType == 3) {
        textNodes.push(node);
      } else {
        var children = node.childNodes;
        for (var i = 0, len = children.length; i < len; ++i) {
          textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
        }
      }
      return textNodes;
    }

    function setSelectionRange(el: any, start: any, end: any) {
      if (document.createRange && window.getSelection) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var textNodes = getTextNodesIn(el);
        var foundStart = false;
        var charCount = 0,
          endCharCount;
        //console.log(textNodes);
        for (var i = 0, textNode; (textNode = textNodes[i++]); ) {
          endCharCount = charCount + textNode.textContent.length;
          //console.log(
          // textNode.textContent.trim().length,
          // textNode.textContent.trim(),
          //   charCount,
          //   textNode.textContent,
          //   textNode.textContent.length,
          //   endCharCount
          // );
          // //console.log(endCharCount);
          if (
            !foundStart &&
            start >= charCount &&
            (start < endCharCount ||
              (start == endCharCount && i <= textNodes.length))
          ) {
            range.setStart(textNode, start - charCount);

            foundStart = true;
          }
          if (foundStart && end <= endCharCount) {
            range.setEnd(textNode, end - charCount);
            break;
          }
          charCount = endCharCount;
          console.log(charCount);
        }

        var sel: any = window.getSelection();
        // console.log(range);
        console.log(textNode, start, charCount);
        sel.removeAllRanges();
        sel.addRange(range);
        // console.log(textRange, el);
      } else if (
        (document as any).selection &&
        (document as any).body.createTextRange
      ) {
        var textRange = (document as any).body.createTextRange();

        textRange.moveToElementText(el);
        textRange.collapse(true);
        textRange.moveEnd("character", end);
        textRange.moveStart("character", start);
        textRange.select();
      }
    }

    function makeEditableAndHighlight(colour: string | undefined) {
      let sel: any = window.getSelection();
      // console.log(sel.textContent);
      if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
      }
      document.designMode = "on";
      if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
      // Use HiliteColor since some browsers apply BackColor to the whole block
      if (!document.execCommand("HiliteColor", false, colour)) {
        document.execCommand("BackColor", false, colour);
      }
      document.designMode = "off";
    }
    var range: any, sel;
    function highlight(colour: string | undefined) {
      if ((window as any).getSelection) {
        // IE9 and non-IE
        try {
          if (!document.execCommand("BackColor", false, colour)) {
            makeEditableAndHighlight(colour);
          }
        } catch (ex) {
          makeEditableAndHighlight(colour);
        }
      } else if (
        (document as any).selection &&
        (document as any).selection.createRange
      ) {
        // IE <= 8 case
        range = (document as any).selection.createRange();
        range.execCommand("BackColor", false, colour);
      }
    }
  }

  highlightCustomSettings(event: { start: number; end: number }) {
    let start = event.start;
    let end = event.end;
    setSelectionRange(document.getElementById("demoText"), start, end);
    console.log(this.currentScenario);

    highlight("#acfb2d");

    function getTextNodesIn(node: { nodeType: number; childNodes: any }) {
      var textNodes: any[] = [];
      if (node.nodeType == 3) {
        textNodes.push(node);
      } else {
        var children = node.childNodes;
        for (var i = 0, len = children.length; i < len; ++i) {
          textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
        }
      }
      return textNodes;
    }

    function setSelectionRange(el: any, start: any, end: any) {
      if (document.createRange && window.getSelection) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var textNodes = getTextNodesIn(el);
        var foundStart = false;
        var charCount = 0,
          endCharCount;
        console.log(textNodes);
        for (var i = 0, textNode; (textNode = textNodes[i++]); ) {
          endCharCount = charCount + textNode.textContent.length;
          console.log(
            // textNode.textContent.trim().length,
            // textNode.textContent.trim(),
            charCount,
            textNode.textContent,
            textNode.textContent.length,
            endCharCount
          );
          // console.log(endCharCount);
          if (
            !foundStart &&
            start >= charCount &&
            (start < endCharCount ||
              (start == endCharCount && i <= textNodes.length))
          ) {
            range.setStart(textNode, start - charCount);

            foundStart = true;
          }
          if (foundStart && end <= endCharCount) {
            range.setEnd(textNode, end - charCount);
            break;
          }
          charCount = endCharCount;
          console.log(charCount);
        }

        var sel: any = window.getSelection();
        // console.log(range);
        console.log(textNode, start, charCount);
        sel.removeAllRanges();
        sel.addRange(range);
        // console.log(textRange, el);
      } else if (
        (document as any).selection &&
        (document as any).body.createTextRange
      ) {
        var textRange = (document as any).body.createTextRange();

        textRange.moveToElementText(el);
        textRange.collapse(true);
        textRange.moveEnd("character", end);
        textRange.moveStart("character", start);
        textRange.select();
      }
    }

    function makeEditableAndHighlight(colour: string | undefined) {
      let sel: any = window.getSelection();
      console.log(sel);
      // console.log(sel.textContent);
      if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
      }
      document.designMode = "on";
      if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
      // Use HiliteColor since some browsers apply BackColor to the whole block
      if (!document.execCommand("HiliteColor", false, colour)) {
        document.execCommand("BackColor", false, colour);
      }
      document.designMode = "off";
    }
    var range: any, sel;
    function highlight(colour: string | undefined) {
      if ((window as any).getSelection) {
        // IE9 and non-IE
        try {
          if (!document.execCommand("BackColor", false, colour)) {
            makeEditableAndHighlight(colour);
          }
        } catch (ex) {
          makeEditableAndHighlight(colour);
        }
      } else if (
        (document as any).selection &&
        (document as any).selection.createRange
      ) {
        // IE <= 8 case
        range = (document as any).selection.createRange();
        range.execCommand("BackColor", false, colour);
      }
    }
  }
}
