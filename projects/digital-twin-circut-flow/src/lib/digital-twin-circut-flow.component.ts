import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { HelperData } from "src/app/config/constant.data.config";
import { SearchData } from "src/app/features/reusable/search/SearchConfig";
import { staticData } from "./file";
import { Card, CheckBoxInterface, TasksDropDown } from "./Interface";
declare var Drawflow: any;
@Component({
  selector: "LDIGITAL-condition-flow",
  templateUrl: "digital-twin-circut-component.html",
  styleUrls: ["lib.digital.twin.component.scss"],
})
export class DigitalTwinCircutFlowComponent implements OnInit {
  @Input() data!: {};
  @Input() options!: object[];
  showAvailablePorts = false;
  currentNodeUpdate: {} = {};
  @Input() value!: string;
  @Output() seachEventEmmiter = new EventEmitter();
  fileData: any = ({} = staticData.data1);
  portsDataList: Card[] = ([] = [
    {
      title: "AND",
      description: "input_5",
      apiData: {
        node: 4,
        input: "input_5",
      },
      isMultiple: true,
      isDelete: false,
      isChecked: false,
      type: "Models",
      isSingleCheckUI: true,
      deleteIcon: "assets/icons/delete.svg",
    },
    {
      title: "OR",
      description: "input_6",
      apiData: {
        node: 4,
        input: "input_6",
      },
      isMultiple: true,
      isChecked: false,
      isDelete: false,
      type: "Models",
      isSingleCheckUI: true,
      deleteIcon: "assets/icons/delete.svg",
    },
  ]);
  @ViewChild("drawflowDiv", { static: true })
  public drawflowDiv!: ElementRef;
  drawflow!: typeof Drawflow;
  editor!: typeof Drawflow;
  portsDataListAll!: Card[];
  selectedNodes: any = [];
  cacheFileData: any;
  currentConnection: any;
  nodeSelected!: string;
  showAvailablePortsForNodes!: boolean;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    this.portsDataListAll = [...this.portsDataList];
    this.cacheFileData = { ...this.fileData };
  }
  create(data: any) {
    console.log(data);
    this.editor.editor_mode = "edit";
    this.editor.reroute = false;
    this.editor.force_first_input = true;
    this.editor.reroute_curvature_start_end = 0.5;
    this.editor.draggable_inputs = true;
    this.editor.drawflow = {
      drawflow: {
        Home: {
          data: data,
        },
        Other: {
          data: {},
        },
      },
    };

    this.editor._take("connectionStart", (id: any) => {
      console.log(id);
      console.log(this.portsDataList);
      Object.assign(this.currentNodeUpdate, id);
      console.log(this.currentNodeUpdate);
      console.log(this.editor.getUuid());
      this.portsDataList = [...this.portsDataListAll];
      console.log(this.portsDataList, this.portsDataListAll);
    });

    this.editor.on("clickNode", (id: any) => {
      console.log(id);
    });

    this.editor.on("nodeSelected", (id: any) => {
      console.log("Node selected " + id.output_id);
      this.showAvailablePortsForNodes = true;
      this.currentNodeUpdate = id;
      // this.selectedNodes.map((res) => {
      // if (this.selectedNodes.includes(id)) {
      //   // console.log('unselect', id);
      //   let index = this.selectedNodes.findIndex((el: any) => el == id);
      //   // console.log(index);
      //   this.selectedNodes.splice(0, index);
      //   // this.selectedNodes.findIndex((el: any) => el == id).splice(0,)
      // } else {
      //   this.selectedNodes.push(id);
      // }
      // console.log(this.selectedNodes);
      // })
    });
    this.editor.on("nodeUnselected", (id: any) => {
      console.log("Node unselect " + id);
    });
    // this.editor.on('connectionCreated', (connection: any) => {
    //   console.log('Connection created');
    //   console.log(connection);
    // })

    this.editor.on("connectionCreated", (connection: any) => {
      console.log("Connection created");
      console.log(connection);
      this.showAvailablePorts = true;
      this.currentConnection = connection;
    });
    this.editor._take(
      "connectionStart",
      (id: { output_id: number | string }) => {
        console.log(id);
        this.nodeSelected = "node-" + id.output_id;
      }
    );
    setTimeout(() => {
      console.log("deleting", this.editor);
      // this.editor.removeNodeId('node-1');
      // this.editor.removeNodeId('node-0');
      // // this.editor.removeNodeId('node-2')
      // this.editor.removeNodeId('node-4');
    }, 100);
  }
  ngAfterViewInit() {
    this.editor = new Drawflow(this.drawflowDiv?.nativeElement as HTMLElement);
    this.create(this.fileData);
    this.editor.start();
  }

  export() {
    const exportdata = this.editor.export();
    console.log(exportdata);
  }

  selectCardEventHandlerForNodes(e: CheckBoxInterface) {
    console.log("clicked", e, this.currentNodeUpdate);
    if (this.selectedNodes.includes(this.currentNodeUpdate)) {
      // console.log('unselect', id);
      let index = this.selectedNodes.findIndex(
        (el: any) => el.id == this.currentNodeUpdate
      );
      // console.log(index);
      this.selectedNodes.splice(0, index);
      // this.selectedNodes.findIndex((el: any) => el == id).splice(0,)
    } else {
      this.selectedNodes.push({
        id: this.currentNodeUpdate,
        relation: e.data.title,
      });
    }
    this.showAvailablePortsForNodes = false;
  }

  selectCardEventHandler(e: CheckBoxInterface) {
    console.log("clicked", e);
    let label1: any = document.querySelector(
      ".connection.node_in_node-" +
        this.currentConnection.input_id +
        ".node_out_node-" +
        this.currentConnection.output_id +
        "." +
        this.currentConnection.output_class +
        "." +
        this.currentConnection.input_class +
        ""
    );
    console.log(label1);
    label1.id = e.data.title;
    this.editor.addLabelText(label1, e.data.title);
    this.editor.updateConnectionNodes(this.nodeSelected);
    this.showAvailablePorts = false;
  }

  inputDebounce(event: KeyboardEvent) {
    this.saveInput((event.target as HTMLInputElement)?.value);
  }

  propogation(e: MouseEvent) {
    e.stopPropagation();
  }

  saveInput(value: string) {
    console.log(value);
    this.seachEventEmmiter.emit(value);
    this.portsDataList = this.portsDataListAll?.filter((el: Card) =>
      el.title.includes(value)
    );
  }
  group() {
    console.log(this.selectedNodes);
    let node = {
      id: 0,
      name: "card 1",
      data: {},
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i> Group 1</div>\n</div>\n',
      typenode: false,
      inputs: {},
      outputs: {},
      pos_x: 0,
      pos_y: 20,
    };
    this.selectedNodes.map((res: any) => {
      // this.editor.removeNodeId('node-' + res);
    });

    // console.log(inports)
    let inportsObject = {};
    let outportsObject = {};
    this.selectedNodes.map((res: any, index: any) => {
      let inports = {};
      let outports = {};
      res.id = Number(res.id);
      console.log(res);
      inports = {
        ["input_" + parseInt(index + 1)]: {
          name: "card_" + Number(res.id + 1),
          title: "input_" + parseInt(index + 1),
          relation: res.relation,
          // connections: getConnectionsInports(res.target_ports)
          connections: [],
        },
      };
      outports = {
        ["output_" + parseInt(index + 1)]: {
          name: "",
          title: "output_" + parseInt(index + 1),
          // connections: getConnectionsInports(res.target_ports)
          connections: [],
        },
      };
      Object.assign(inportsObject, inports);
      Object.assign(outportsObject, outports);
      Object.assign(node, {
        inputs: inportsObject,
        outputs: outportsObject,
        id: Object.keys(this.cacheFileData).length,
        name: "group" + Object.keys(this.cacheFileData).length,
        pos_x: 100,
        pos_y: 50,
        class: "group5",
        typeData: "group",
        html:
          '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i> group' +
          Object.keys(this.cacheFileData).length +
          "</div>\n</div>\n",
      });
    });

    this.cacheFileData[Object.keys(this.cacheFileData).length] = node;
    console.log({ 5: node }, this.cacheFileData);
    console.log(this.cacheFileData);
    this.selectedNodes = [];
    this.editor.addNodeImport(node, null);
    console.log(node);
  }
}
