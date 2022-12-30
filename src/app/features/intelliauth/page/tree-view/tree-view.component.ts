import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  NgZone,
  SimpleChange,
} from "@angular/core";
import {
  IActionMapping,
  KEYS,
  TreeModel,
  TreeNode,
  TREE_ACTIONS,
  ITreeOptions,
} from "@circlon/angular-tree-component";
import { Store } from "@ngrx/store";
import { MenuItem } from "primeng/api";
import { AppState } from "src/app/interfaces/store";
import * as LDIGITALActions from "../../../../actions/lDigital.store.action";
export interface Item {
  title: string;
  id: string | number;
  children?: Item[];
  parent?: string | number;
}

@Component({
  selector: "LDIGITAL-tree-view",
  templateUrl: "./tree-view.component.html",
  styleUrls: ["./tree-view.component.scss"],
})
export class TreeViewComponent implements OnInit {
  selectedNodeSet = new Set([6]);
  selectedNodeData!: {};
  items: MenuItem[] = [
    {
      icon: "pi pi-pencil",
      command: () => {
        (this.selectedNodeData as { isEditable: boolean }).isEditable = true;
      },
    },
    {
      icon: "pi pi-times",
    },
    {
      icon: "pi pi-plus",
      command: () => {},
    },
    {
      icon: "pi pi-copy",
    },
    {
      icon: "pi pi-eye",
      command: () => {
        // (this.selectedNodeData as { isEditable: boolean }).isEditable = true;
        console.log(this.nodes);
        console.log(this.selectedNodeData);
        this.highlightEmmiter.emit({
          start: (this.selectedNodeData as { cords: number[] }).cords[0],
          end: (this.selectedNodeData as { cords: number[] }).cords[1],
        });
      },
    },
    {
      icon: "pi pi-trash",
      command: () => {
        // (this.selectedNodeData as { isEditable: boolean }).isEditable = true;
        console.log(this.nodes);
        console.log(this.selectedNodeData);
        this.defaultEmmiter.emit({
          start: (this.selectedNodeData as { cords: number[] }).cords[0],
          end: (this.selectedNodeData as { cords: number[] }).cords[1],
        });
        this.nodes.splice(
          this.nodes.findIndex(
            (el: { id: number }) =>
              el.id === (this.selectedNodeData as { id: number }).id
          ),
          1
        );
      },
    },
  ];
  @Input() nodes: any;
  @Input() nodesList: any;
  @Output() emitNodeEvent = new EventEmitter();
  @Output() defaultEmmiter = new EventEmitter();
  @Output() highlightEmmiter = new EventEmitter();
  actionMapping!: IActionMapping;
  public treeOptions: ITreeOptions = {
    actionMapping: this.actionMapping,
    useCheckbox: true,
  };

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.select("store").subscribe((store) => {
      ////console.log("store subscribed on configurations", store);
      this.nodes = JSON.parse(JSON.stringify(store.tasksList as any));
      console.log(this.nodes);
      this.actionMapping = {
        mouse: {
          contextMenu: (tree, node, $event) => {
            $event.preventDefault();
          },
          checkboxClick: (tree, node: TreeNode, $event) => {
            $event.stopPropagation();
            node.toggleSelected();
            if (this.selectedNodeSet.has(node.id)) {
              ////console.log(this.selectedNodeSet);
            }
          },
          dblClick: (tree, node, $event) => {
            if (node.hasChildren) {
              TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
            }
          },
          click: (tree: TreeModel, node: TreeNode, $event) => {},
          expanderClick: (tree, node: TreeNode, $event) => {
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
          },
        },
        keys: {
          [KEYS.ENTER]: (tree, node, $event) =>
            alert(`This is ${node.data.name}`),
        },
      };
    });
  }
  // ngOnCha
  ngOnChanges(change: SimpleChange) {
    // this.update();
    this.nodes = this.nodesList;
    ////console.log(this.nodes);
  }

  update() {
    const temp = JSON.parse(JSON.stringify(this.nodes));
    temp[0].name = "after update root1";
    this.nodes = temp;
  }
  checkboxAction(node: any, $event: any) {
    $event.stopPropagation();
    $event.preventDefault();
    ////console.log(node);
    ////console.log($event);
    if ($event.target.checked) {
      this.emitNodeEvent.emit(node);
    }
    // if($event.)
  }
  setCurrentObjectModel(data: unknown) {
    this.selectedNodeData = data as {};
  }
}
