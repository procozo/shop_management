export class staticData {
  static data1 = {
    "0": {
      id: 0,
      name: "card 1",
      data: {},
      class: "Audi_User_InputD",
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i> 1</div>\n</div>\n',
      typenode: false,
      inputs: {
        input_1: {
          name: "card_1",
          title: "input_1",
          connections: [],
        },
      },
      outputs: {
        output_1: {
          name: "",
          title: "output_1",
          connections: [
            {
              node: "1",
              output: "input_1",
              relation: "AND",
            },
            {
              node: "2",
              output: "input_1",
              relation: "",
            },
            {
              node: "3",
              output: "input_1",
              relation: "",
            },
            {
              node: "4",
              output: "input_1",
              relation: "",
            },
          ],
        },
      },
      pos_x: 0,
      pos_y: 20,
    },
    "1": {
      id: 1,
      name: "card 2",
      data: {},
      class: "Derating_V2",
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i> 2</div>\n</div>\n',
      typenode: false,
      inputs: {
        input_1: {
          name: "card2",
          title: "input_1",
          connections: [
            {
              node: "0",
              input: "output_1",
              relation: "OR",
            },
          ],
        },
      },
      outputs: {
        output_1: {
          name: "",
          title: "output_1",
          connections: [
            {
              node: "2",
              output: "input_1",
              relation: "AND",
            },
            {
              node: "6",
              output: "input_1",
              relation: "",
            },
          ],
        },
      },
      pos_x: 529,
      pos_y: 41,
    },
    "2": {
      id: 2,
      name: "card 3",
      data: {},
      class: "Mechanical_V2",
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i> 3</div>\n</div>\n',
      typenode: false,
      inputs: {
        input_1: {
          name: "card_3",
          title: "input_1",
          connections: [
            {
              node: "1",
              input: "output_1",
              relation: "AND",
            },
            {
              node: "0",
              input: "output_1",
              relation: "AND",
            },
          ],
        },
      },
      outputs: {
        output_1: {
          name: "",
          title: "output_1",
          connections: [
            {
              node: "3",
              output: "input_1",
              relation: "AND",
            },
          ],
        },
      },
      pos_x: 486,
      pos_y: 202,
    },
    "3": {
      id: 3,
      name: "card 4",
      data: {},
      class: "OilFlowManager_V2_2",
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i> 4</div>\n</div>\n',
      typenode: false,
      inputs: {
        input_1: {
          name: "card_4",
          title: "input_1",
          connections: [
            {
              node: "2",
              input: "output_1",
              relation: "AND",
            },
            {
              node: "0",
              input: "output_1",
              relation: "OR",
            },
          ],
        },
      },
      outputs: {
        output_1: {
          name: "",
          title: "output_1",
          connections: [
            {
              node: "4",
              output: "input_1",
              relation: "AND",
            },
          ],
        },
      },
      pos_x: 263,
      pos_y: 297,
    },
    "4": {
      id: 4,
      name: "card 5",
      data: {},
      class: "thermal_V2_1",
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i> 5</div>\n</div>\n',
      typenode: false,
      inputs: {
        input_1: {
          name: "card_5",
          title: "input_1",
          connections: [
            {
              node: "3",
              input: "output_1",
              relation: "OR",
            },
            {
              node: "0",
              input: "output_1",
              relation: "AND",
            },
            {
              node: "5",
              input: "output_1",
              relation: "OR",
            },
          ],
        },
      },
      outputs: {
        output_1: {
          name: " ",
          title: "output_1",
          relation: "AND",
          connections: [],
        },
      },
      pos_x: 500,
      pos_y: 400,
    },
  };

  static data2 = {
    "0": {
      id: 0,
      name: "Audi_User_InputD",
      data: {},
      class: "Audi_User_InputD",
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i>Audi_User_InputD</div>\n</div>\n',
      typenode: false,
      inputs: {
        input_1: {
          name: "input",
          connections: [
            {
              node: 1,
              input: "output_1",
            },
          ],
        },
      },
      outputs: {
        output_1: {
          name: "output",
          connections: [],
        },
      },
      pos_x: 100,
      pos_y: 0,
    },
    "1": {
      id: 1,
      name: "Derating_V2",
      data: {},
      class: "Derating_V2",
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i>Derating_V2</div>\n</div>\n',
      typenode: false,
      inputs: {
        input_1: {
          name: "input",
          connections: [
            {
              node: 2,
              input: "output_1",
            },
          ],
        },
      },
      outputs: {
        output_1: {
          name: "output",
          connections: [],
        },
      },
      pos_x: 200,
      pos_y: 100,
    },
    "2": {
      id: 2,
      name: "Mechanical_V2",
      data: {},
      class: "Mechanical_V2",
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i>Mechanical_V2</div>\n</div>\n',
      typenode: false,
      inputs: {
        input_1: {
          name: "input",
          connections: [
            {
              node: 3,
              input: "output_1",
            },
          ],
        },
      },
      outputs: {
        output_1: {
          name: "output",
          connections: [],
        },
      },
      pos_x: 300,
      pos_y: 200,
    },
    "3": {
      id: 3,
      name: "OilFlowManager_V2_2",
      data: {},
      class: "OilFlowManager_V2_2",
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i>OilFlowManager_V2_2</div>\n</div>\n',
      typenode: false,
      inputs: {
        input_1: {
          name: "input",
          connections: [
            {
              node: 4,
              input: "output_1",
            },
          ],
        },
      },
      outputs: {
        output_1: {
          name: "output",
          connections: [],
        },
      },
      pos_x: 400,
      pos_y: 300,
    },
    "4": {
      id: 4,
      name: "thermal_V2_1",
      data: {},
      class: "thermal_V2_1",
      html: '\n          <div>\n<div class="title-box"><i class="fab fa-slack"></i>thermal_V2_1</div>\n</div>\n',
      typenode: false,
      inputs: {
        input_1: {
          name: "input",
          connections: [
            {
              node: 4,
              input: "output_1",
            },
          ],
        },
      },
      outputs: {
        output_1: {
          name: "output",
          connections: [],
        },
      },
      pos_x: 500,
      pos_y: 400,
    },
  };
}
