import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { LogicHelperService } from "src/app/helpers/logic-helper.service";
import { AppState } from "src/app/interfaces/store";
import * as LDIGITALActions from "../../../actions/lDigital.store.action";
declare let currentScenario: any;
@Component({
  selector: "LDIGITAL-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"],
})
export class CanvasComponent implements OnInit {
  returnRectangles: (() => any) | undefined;
  loadRectangles: ((rects: any) => this) | undefined;
  public offesetValue!: { width: number; h: number };
  constructor(
    public helper: LogicHelperService,
    private store: Store<AppState>
  ) {}
  ctx!: CanvasRenderingContext2D;
  public canvasEl!: HTMLElement;
  public cordsToSelect: number[] = [];
  @Input() selectedCoordinates!: number[];
  @Input() imageData!: { data: string; type: string; id: number };
  @Output() eventEmiterCanvas = new EventEmitter();
  @Output() selectionEmmiterCanvas = new EventEmitter();
  @Input() currentScenario!: string;
  public existingRectanglesArray: {}[] = [];
  ngOnInit(): void {
    this.store.select("store").subscribe((store) => {
      //////console.log(store.scenarios);
      // this.existingRectanglesArray = JSON.parse(
      //   JSON.stringify(store.scenarios as any)
      // );
      this.existingRectanglesArray = (store.pageScenarios as any)?.[
        this.imageData.id
      ]
        ? JSON.parse(
            JSON.stringify((store.pageScenarios as any)?.[this.imageData.id])
          )
        : [];
      // console.log(this.existingRectanglesArray);
      // this.createCanvasElement();
    });
  }
  ngOnChanges(change: SimpleChange) {}
  ngAfterViewInit() {
    this.createCanvasElement();
  }
  createCanvasElement() {
    // ////console.log(data.data);
    let imageName: string = "";

    const elem: any = document.getElementById(
        "policyCanvas" + this.imageData.id
      ) as any,
      elemLeft = elem.offsetLeft,
      elemTop = elem.offsetTop,
      context = elem.getContext("2d"),
      elements: any[] = [];
    elements.push(this.selectedCoordinates);

    function collides(rects: unknown, x: number, y: number) {
      var isCollision = false;

      // ////console.log(rects);
      for (var i = 0, len = (rects as {}[]).length; i < len; i++) {
        ////console.log((rects as [])[i]);
        var left = (
            rects as {
              x: any;
              y: any;
              w: any;
              h: any;
              type?: string;
            }[]
          )[i].x,
          right =
            (
              rects as {
                x: any;
                y: any;
                w: any;
                h: any;
                type?: string;
              }[]
            )[i].x +
            (
              rects as {
                x: any;
                y: any;
                w: any;
                h: any;
                type?: string;
              }[]
            )[i].w;
        var top = (
            rects as {
              x: any;
              y: any;
              w: any;
              h: any;
              type?: string;
            }[]
          )[i].y,
          bottom =
            (
              rects as {
                x: any;
                y: any;
                w: any;
                h: any;
                type?: string;
              }[]
            )[i].y +
            (
              rects as {
                x: any;
                y: any;
                w: any;
                h: any;
                type?: string;
              }[]
            )[i].h;
        ////console.log(right, x, left / 2.5, x, bottom / 2.5, y, top / 2.5, y);
        if (right >= x && left <= x && bottom >= y && top <= y) {
          isCollision = (rects as [])[i];
        }
      }
      return isCollision;
    }

    elem.addEventListener(
      "click",
      (event: {
        pageX: number;
        pageY: number;
        offsetX: number;
        offsetY: number;
      }) => {
        var xVal = event.pageX,
          yVal = event.pageY;
        ////console.log(event);

        //console.log("click: " + event.offsetX + "/" + event.offsetY);
        // //console.log(this);
        this.offesetValue = { width: event.offsetX, h: event.offsetY };
        this.cordsToSelect.push(event.offsetX as number);
        if (this.cordsToSelect.length > 3) {
          // this.drawCustom(this.cordsToSelect);
        }

        //console.log(this.existingRectanglesArray);
        var rect = collides(
          this.existingRectanglesArray,
          // [[10, 15, 60, 85]],
          event.offsetX,
          event.offsetY
        );
        if (rect) {
          // //console.log("collision: " + rect + "/" + rect);
          console.log("****************", rect);
        } else {
          console.log("no collision");
        }
      },
      false
    );

    function AnnotateImage(canvas: any, context: any) {
      const canvasContext = canvas.getContext("2d");
      const rectangleMaker: any = new (RectangleMaker as any)(
        canvasContext,
        context
      );
      // rectangleMaker?.drawRectangles([]);
      const mouseObj = { x: 0, y: 0 };
      let dragAction = false;
      const img1 = new Image();
      img1.src = canvas.toDataURL();
      let rectangles: any = [];

      // this.returnRectangles = () => {
      //   return rectangles;
      // };
      rectangleMaker.drawRectangles();
      function RectangleMaker(this: any, canvasContext: any, context: any) {
        let x1: number, y1: number, x2: number, y2: number;
        const finishedRectangle = {
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          type: context.currentScenario,
        };

        function makeFinishedRectangle() {
          finishedRectangle.x = Math.min(x1, x2);
          finishedRectangle.y = Math.min(y1, y2);
          finishedRectangle.w = Math.max(x1, x2) - Math.min(x1, x2);
          finishedRectangle.h = Math.max(y1, y2) - Math.min(y1, y2);
          finishedRectangle.type = context.currentScenario;
        }

        this.setFirstPoint = (point: { x: number; y: number }) => {
          return setFirstPoint(point);
        };

        function setFirstPoint(point: { x: number; y: number }) {
          x2 = x1 = point.x;
          y2 = y1 = point.y;
          makeFinishedRectangle();
        }

        this.setSecondPoint = (point: any) => {
          return setSecondPoint(point);
        };

        function setSecondPoint(point: { x: number; y: number }) {
          x2 = point.x;
          y2 = point.y;
          makeFinishedRectangle();
        }

        this.saveLocal = () => {
          const rect = Object.assign({}, finishedRectangle);
          rectangles.push(rect);
          if (rect.w > 0) context.existingRectanglesArray.push(rect);
        };

        this.getRectangleToSave = () => {
          return getRectangleToSave();
        };

        function getRectangleToSave() {
          return Object.assign({}, finishedRectangle);
        }

        this.drawRectangles = () => {
          return drawRectangles();
        };

        function drawRectangles(data?: any) {
          if (context.existingRectanglesArray) {
            canvasContext.strokeStyle = "red";
            canvasContext.fillRect = "yellow";
            if (
              context.existingRectanglesArray &&
              context.existingRectanglesArray.length > 0
            ) {
              context.existingRectanglesArray.forEach(
                (
                  rectangle: {
                    x: any;
                    y: any;
                    w: any;
                    h: any;
                    type?: string;
                  },
                  i: number
                ) => {
                  if (rectangle.h > 0 && rectangle.w > 0) {
                    canvasContext.strokeRect(
                      rectangle.x,
                      rectangle.y,
                      rectangle.w,
                      rectangle.h
                    );
                    canvasContext.fillStyle = "yellow";
                    canvasContext.font = "12px Arial";
                    canvasContext.fillRect = "yellow";
                    canvasContext.fillStyle = "red";
                    // ////console.log(i);
                    canvasContext.fillText(
                      rectangle.type,
                      rectangle.x,
                      rectangle.y - 10
                    );

                    var w = 16;
                    //  ? var x = event.pageX;
                    // var y = Math.floor(event.pageY - $(this).offset().top);
                    // canvasContext.fillStyle = "rgb(200,0,0)";
                    // canvasContext.arc(
                    //   rectangle.x,
                    //   rectangle.y,
                    //   10,
                    //   0,
                    //   2 * Math.PI,
                    //   false
                    // );
                    // canvasContext.fill();

                    // canvasContext = canvas.getContext("2d");
                    // canvasContext.font = "8pt Calibri";
                    // canvasContext.fillStyle = "white";
                    // canvasContext.textAlign = "center";
                    // canvasContext.fillText("0", rectangle.x, rectangle.y + 3);
                  }
                }
              );
            }
          }
        }
      }

      let attachEvents = (canvas: any) => {
        canvas.addEventListener("mousedown", (e: any) => {
          start(e);
        });

        canvas.addEventListener("touchstart", (e: any) => {
          start(e);
        });

        function start(e: any) {
          const bounds = canvas.getBoundingClientRect();
          ////console.log(e);
          ////console.log(mouseObj);
          mouseObj.x = e.type.includes("mouse")
            ? e.pageX - bounds.left - scrollX
            : e.targetTouches[0].pageX - bounds.left - scrollX;
          mouseObj.y = e.type.includes("mouse")
            ? e.pageY - bounds.top - scrollY
            : e.targetTouches[0].pageY - bounds.top - scrollY;
          rectangleMaker.setFirstPoint(mouseObj);
          dragAction = true;
        }

        canvas.addEventListener("mousemove", (e: any) => {
          move(e);
        });

        canvas.addEventListener("touchmove", (e: any) => {
          move(e);
        });

        let move = (e: any) => {
          e.preventDefault();
          if (dragAction) {
            // const prior = rectangleMaker.getRectangleToSave();
            // canvasContext.strokeRect(prior.x, prior.y, prior.w, prior.h);
            const bounds = canvas.getBoundingClientRect();
            mouseObj.x = e.type.includes("mouse")
              ? e.pageX - bounds.left - scrollX
              : e.targetTouches[0].pageX - bounds.left - scrollX;
            mouseObj.y = e.type.includes("mouse")
              ? e.pageY - bounds.top - scrollY
              : e.targetTouches[0].pageY - bounds.top - scrollY;
            rectangleMaker.setSecondPoint(mouseObj);
            const newRect = rectangleMaker.getRectangleToSave();
            window.requestAnimationFrame(() => {
              canvasContext.drawImage(img1, 0, 0);
              rectangleMaker.drawRectangles();
              // ////console.log(newRect);
              // var self = this;
              //  transport.on("data", () => alert(this.data));
              canvasContext.strokeRect(
                newRect.x,
                newRect.y,
                newRect.w,
                newRect.h
              );
            });
          }
        };

        canvas.addEventListener("mouseup", (e: any) => {
          stop(e);
        });

        canvas.addEventListener("touchend", (e: any) => {
          stop(e);
        });

        function stop(e: any) {
          dragAction = false;
          //console.log("*** stopped");
          const bounds = canvas.getBoundingClientRect();
          mouseObj.x = e.type.includes("mouse")
            ? e.pageX - bounds.left - scrollX
            : e.changedTouches[0].pageX - bounds.left - scrollX;
          mouseObj.y = e.type.includes("mouse")
            ? e.pageY - bounds.top - scrollY
            : e.changedTouches[0].pageY - bounds.top - scrollY;
          rectangleMaker.setSecondPoint(mouseObj);
          rectangleMaker.saveLocal();
          rectangleMaker.drawRectangles();
          if (rectangles[rectangles.length - 1].h > 0) {
            setTimeout(() => {
              context.selectionEmmiterCanvas.emit({
                data: rectangles[rectangles.length - 1],
                value: context.offesetValue,
                pageNo: context.imageData.id,
              });
            }, 100);
          }
        }
      };
      attachEvents(canvas);
    }

    // AnnotateImage.prototype.alert = function () {
    //   alert(this.name);
    // };

    /**
     * @description code to load the canvas and call the Annotate constructor
     */

    const loadImageFromlink = (canvas: any) => {
      const promise = new Promise((resolve, reject) => {
        this.imageData.type === "url"
          ? (imageName = this.imageData.data as string)
          : (imageName = ("data:image/jpeg;base64," +
              this.imageData.data) as string);
        ////console.log(canvas.dataset.src);
        let element: any = canvas;
        this.ctx = element.getContext("2d");

        this.helper.getImageDimensions(imageName).then((messurment: any) => {
          // ////console.log(messurment);
          element.width = messurment.w;
          element.height = messurment.h;
          // ctx = element.getContext("2d");
          var background = new Image();
          background.src = imageName;
          background.onload = () => {
            this.ctx.drawImage(background, 0, 0);
            resolve("loaded");
            // setTimeout(() => {
            //   this.drawOncanvasAIMData();
            // }, 10);
          };
        });
      });
      return promise;
    };

    const canvas = document.getElementById("policyCanvas" + this.imageData.id);
    loadImageFromlink(canvas).then(() => {
      // ////console.log(canvas);
      const annotate: any = new (AnnotateImage as any)(canvas, this);
    });
  }

  drawOncanvasAIMData() {
    try {
      // this.ctx.fillStyle = "#fa4b2a"; // color of fill
      // this.ctx.fillRect(10, 40, 140, 160); // create rectangle

      // var datapointsPara = this.selectedCoordinates;
      var val = this.selectedCoordinates;
      // ////console.log(datapointsPara);
      // datapointsPara.map((val: any) => {
      this.ctx.beginPath();
      this.ctx.fillStyle = "#f5e84b75";
      this.ctx.fillRect(
        Number(val[0]),
        val[1],
        Number(val[2]) - Number(val[0]),
        Number(val[3]) - Number(val[1])
      );
      this.ctx.stroke();
      // });
      // this.pageNumberHistoryForParagraph = [];
    } catch (error) {
      // this.error(null);
    }
  }

  drawCustom(cords: number[]) {
    try {
      // this.ctx.fillStyle = "#fa4b2a"; // color of fill
      // this.ctx.fillRect(10, 40, 140, 160); // create rectangle

      // var datapointsPara = this.selectedCoordinates;
      var val = cords;
      // ////console.log(datapointsPara);
      // datapointsPara.map((val: any) => {
      this.ctx.beginPath();
      this.ctx.fillStyle = "#f5e84b75";
      this.ctx.fillRect(
        Number(val[0]),
        val[1],
        Number(val[2]) - Number(val[0]),
        Number(val[3]) - Number(val[1])
      );
      this.ctx.stroke();
      this.cordsToSelect = [];
      // });
      // this.pageNumberHistoryForParagraph = [];
    } catch (error) {
      // this.error(null);
    }
  }

  undo() {
    this.existingRectanglesArray.reverse();
    this.existingRectanglesArray.splice(0, 1);
    ////console.log(this.ctx.canvas.width);
    // this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    ////console.log(this.existingRectanglesArray);
    // this.createCanvasElement();
    this.store.dispatch(
      new LDIGITALActions.UpdateScenario({
        scenarios: this.existingRectanglesArray,
      })
    );
  }

  drawRectangles(data?: any) {
    if (data) {
      ////console.log(data);
      this.ctx.strokeStyle = "red";
      if (data && data.length > 0) {
        data.forEach(
          (
            rectangle: {
              x: any;
              y: any;
              w: any;
              h: any;
              type: string;
            },
            i: number
          ) => {
            if (rectangle.h > 0 && rectangle.w > 0) {
              this.ctx.strokeRect(
                rectangle.x,
                rectangle.y,
                rectangle.w,
                rectangle.h
              );
              this.ctx.font = "12px Arial";
              this.ctx.fillStyle = "red";
              // ////console.log(i);
              this.ctx.fillText(rectangle.type, rectangle.x, rectangle.y - 10);
            }
          }
        );
      }
    }
    // else {
    // ////console.log(context.existingRectanglesArray);
    // canvasContext.strokeStyle = "red";
    // // ////console.log(rectangles);
    // if (rectangles && rectangles.length > 0) {
    //   // ////console.log(rectangles);
    //   rectangles.forEach(
    //     (
    //       rectangle: {
    //         x: any;
    //         y: any;
    //         w: any;
    //         h: any;
    //         type?: string;
    //       },
    //       i: number
    //     ) => {
    //       if (rectangle.h > 0) {
    //         canvasContext.strokeRect(
    //           rectangle.x,
    //           rectangle.y,
    //           rectangle.w,
    //           rectangle.h
    //         );
    //         canvasContext.font = "12px Arial";
    //         canvasContext.fillStyle = "red";
    //         // ////console.log(i);
    //         canvasContext.fillText(
    //           // i == rectangles.length - 1
    //           //   ? rectangle.type
    //           //   : context.currentScenario,
    //           rectangle.type,
    //           rectangle.x,
    //           rectangle.y - 10
    //         );
    //       }
    //     }
    //   );
    // }
    // }
  }
}
