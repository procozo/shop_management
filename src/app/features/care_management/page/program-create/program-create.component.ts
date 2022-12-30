import { Component, OnInit } from "@angular/core";
import {
  BreadCrumb,
  Card,
  Condition,
  PageConfig,
  TextForm,
} from "src/app/interfaces/project";
import { EChartsOption } from "echarts";
import { MenuItem, Message } from "primeng/api";
import { ProgramAdminService } from "src/app/services/program_admin/program-admin.service";
import { AppState } from "src/app/interfaces/store";
import { Store } from "@ngrx/store";
import { ProjectService } from "src/app/services/project/project.service";
@Component({
  selector: "LDIGITAL-program-create",
  templateUrl: "./program-create.component.html",
  styleUrls: ["./program-create.component.scss"],
})
export class ProgramCreateComponent implements OnInit {
  message!: Message[];
  isAPICall = false;
  public pageConfig!: PageConfig;
  formControlObject!: TextForm[];
  searchFormObject!: TextForm[];
  tanetFormControl!: TextForm[];
  agreementForm!: TextForm[];
  advancedAgreementForm!: TextForm[];
  shopNameArray: any = [];


  /** concition for LIPA & LERA */

  isLIPALERAInclude = true;
  basicPaloadData!: { Shop_tenant_details?: { tenant_name?: unknown; tenant_kyc_details: { adhar_no: number; other: null; }; tenant_contact_details: { mobile: number; email: string; address: string; adhar: string; }; }; };
  basicPaloadDataArray!: any;
  tanentDetailsData!: { Shop_tenant_details: { tenant_name: unknown; tenant_kyc_details: { adhar_no: number; other: null; }; tenant_contact_details: { mobile: number; email: string; address: string; }; }; };
  payloadDataAgreement!: any;
  payloadDataDeposit!: { deposit_details: { deposit_amount: unknown; deposit_received_date: unknown; deposit_credited_date: unknown; deposit_credited_bank: unknown; deposit_text: unknown; }; };
  shopCurrentId: any;
  riskProfileArray!: Card[];
  dummyData: any;
  constructor(
    private programService: ProjectService,
    private store: Store<AppState>
  ) { }

  ngAfterViewInit() {

  }
  ngOnInit(): void {


    this.pageConfig = {
      isNotification: false,
      stepNumber: 1,
      notificationsList: [],
    };

    try {

      this.programService.getAllShops().then((res: any) => {
        console.log(res)
        this.dummyData = res[20];
        console.log(this.dummyData)
        console.log(this.formControlObject);
        res.map((shop: any) => {
          this.shopNameArray.push({
            title: shop.title,
            code: shop._id,
            data: shop
          })
        })
        this.searchFormObject = [
          {
            title: "Select Name ",
            required: true,
            type: "text",
            isSearch: true,
            placeHolder: "Search",
            isClear: true,
            isMultiple: false,
            isText: false,
            autocomplete: true,
            key: 'title',
            dataList: this.shopNameArray

          },

          {
            title: "Search",
            required: true,
            type: "text",
            isSearch: true,
            placeHolder: "Search",
            isClear: true,
            isMultiple: false,
            isText: false,
            autocomplete: false,
            isButton: true

          }

        ];
        // (this.formControlObject.find((el) => (el as { key: string })?.key === 'title') as any).value = this.dummyData.title;
        // (this.formControlObject.find((el) => (el as { key: string })?.key === 'shop_facing') as any).value = this.dummyData.basic_details?.shop_facing;
        // (this.formControlObject.find((el) => (el as { key: string })?.key === 'floor_no') as any).value = this.dummyData?.basic_details?.floor_no[0];
        // (this.formControlObject.find((el) => (el as { key: string })?.key === 'shop_no') as any).value = this.dummyData?.basic_details?.shop_no[0];
        // (this.formControlObject.find((el) => (el as { key: string })?.key === 'status_of_shop') as any).value = this.dummyData?.status_of_shop;
        // (this.formControlObject.find((el) => (el as { key: string })?.key === 'width') as any).value = this.dummyData?.basic_details?.size_of_shop?.width;
        // (this.formControlObject.find((el) => (el as { key: string })?.key === 'height') as any).value = this.dummyData?.basic_details?.size_of_shop?.height;
        // (this.formControlObject.find((el) => (el as { key: string })?.key === 'type_of_business') as any).value = this.dummyData?.basic_details?.type_of_business;

      })
      this.riskProfileArray = [
        {
          title: "Basic details",
          count_score: 30,
          risk_type: "bad",
          description: "Basic + Layout",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",
          id: String(1),

          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Tanet details",
          count_score: 30,
          risk_type: "bad",
          description: "Basic",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          id: String(2),
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",


          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        {
          title: "Agreement details",
          count_score: 30,
          risk_type: "bad",
          description: "banking",
          apiData: {
            name: "cs_fmuInputSelectorTherm.fmu",
            id: "225385",
          },
          id: String(3),
          isMultiple: false,
          isDelete: false,
          // author: "Vinayaka",
          type: "Models",


          isSingleCheckUI: true,
          deleteIcon: "assets/icons/delete.svg",
        },
        // {
        //   title: "Deposit details",
        //   count_score: 30,
        //   risk_type: "bad",
        //   description: "Basic",
        //   apiData: {
        //     name: "cs_fmuInputSelectorTherm.fmu",
        //     id: "225385",
        //   },
        //   id: String(4),
        //   isMultiple: false,
        //   isDelete: false,
        //   // author: "Vinayaka",
        //   type: "Models",


        //   isSingleCheckUI: true,
        //   deleteIcon: "assets/icons/delete.svg",
        // },

      ];



      this.searchFormObject = [
        {
          title: "Select Name ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: false,
          autocomplete: true,
          key: 'title',
          dataList: [
            {
              title: "shop 1",
              code: 1
            }
          ],

        },

        {
          title: "Search",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: false,
          autocomplete: false,
          isButton: true

        }

      ];
      this.formControlObject = [
        {
          title: "Select Name ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          key: 'title',
          dataList: [
          ],
        }, {
          title: "Enter Shop Facing ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isSingleDrop: true,
          isText: false,
          autocomplete: false,
          dataList: [
            {
              title: "Choultry",
              code: 1
            }, {
              title: "Main road",
              code: 1
            }
          ],
          key: 'shop_facing',
        }, {
          title: "Enter Floor No ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isSingleDrop: true,
          isText: false,
          autocomplete: false,
          dataList: [
            {
              title: "Ground - 0",
              code: 1
            }, {
              title: "First - 1",
              code: 2
            },
          ],

          key: 'floor_no',
        }, {
          title: "Enter Shop Number  ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isSingleDrop: true,
          isText: false,
          autocomplete: false,
          dataList: [
            {
              title: "1A",
              code: 1
            }, {
              title: "1B",
              code: 2
            }
          ],

          key: 'shop_no',
        }, {
          title: "Select the status of the Shop",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isSingleDrop: true,
          isText: false,
          autocomplete: false,
          dataList: [
            {
              title: "Vacant",
              code: 1
            }, {
              title: "occupied",
              code: 2
            },
          ],
          key: 'status_of_shop',

        }, {
          title: "Enter Width Of the Shop ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],
          key: 'width',

        }, {
          title: "Enter Bredth Of the Shop ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],
          key: 'height',

        }
        // , {
        //   title: "Enter Total Area ",
        //   required: true,
        //   type: "text",
        //   isSearch: true,
        //   placeHolder: "Enter",
        //   isClear: true,
        //   isMultiple: false,
        //   isText: true,
        //   autocomplete: false,
        //   dataList: [
        //   ],
        //   value: '1200',
        //   key: 'totalArea'
        // }, 
        , {
          title: "Select Type Of Business ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isSingleDrop: false,
          isText: true,
          autocomplete: false,
          dataList: [

          ],
          key: 'type_of_business',

        },

        {
          title: "Create Shop",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: false,
          autocomplete: false,
          isButton: true

        }

      ];


      this.tanetFormControl = [
        {
          title: "Enter Tanent Name",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],
          key: 'tenant_name',
        }, {
          title: "Enter Tanent Address ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'address',
        }, {
          title: "Enter Phone Number ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'mobile',
        }, {
          title: "Enter Tanent Adhar ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'adhar_no',
        }, {
          title: "Enter Tanent Email ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'email',
        }, {
          title: "Add tanet Details",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: false,
          autocomplete: false,
          isButton: true

        }


      ];

      this.agreementForm = [
        {
          title: "Enter Deposit Amount",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'agreement_amount',
        }, {
          title: "Enter Rental Amount",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'rental_amount',
        }, {
          title: "Enter Rental % Change ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'contact_renewal_amount_percentage',
        }, {
          title: "Enter Agreement Effective date ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isText: false,
          autocomplete: false,
          isDate: true,
          dataList: [
          ],

          key: 'agreement_effective_date',
        }, {
          title: "Enter Agreement Term date ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isText: false,
          isDate: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'agreement_term_date',
        }, {
          title: "Enter Agreement Status",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isSingleDrop: true,
          isText: false,
          autocomplete: false,
          dataList: [
            {
              title: 'Open',
              code: 1
            },
            {
              title: 'In Active',
              code: 2
            },
            {
              title: 'Close',
              code: 3
            },
            {
              title: 'Term',
              code: 4
            }
          ],

          key: 'agreement_status',
        },
        {
          title: "Save And Next ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: false,
          autocomplete: false,
          isButton: true,

        }

      ];

      this.advancedAgreementForm = [
        {
          title: "Enter Deposit Amount",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'deposit_amount',
        }, {
          title: "Enter deposit received date ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isText: false,
          autocomplete: false,
          isDate: true,
          dataList: [
          ],

          key: 'deposit_received_date',
        },
        {
          title: "Enter Advance Amount Deposited",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'advance_amount_deposited',
        },
        {
          title: "Enter Deposit Amount return Date ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isText: false,
          isDate: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'deposit_received_date',
        }, {
          title: "Enter Deposit Text",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'deposit_text',
        }, {
          title: "Enter Desposit Bank",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isSingleDrop: true,
          isText: false,
          autocomplete: false,
          dataList: [
            {
              title: 'HDFC',
              code: 1
            },
            {
              title: 'ICICI',
              code: 2
            },
            {
              title: 'SBI',
              code: 3
            },
            {
              title: 'Others',
              code: 4
            }
          ],

          key: 'deposit_credited_bank',

        },
        {
          title: "Enter Deposit Credited Date ",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Enter",
          isClear: true,
          isMultiple: false,
          isText: false,
          isDate: true,
          autocomplete: false,
          dataList: [
          ],

          key: 'deposit_credited_date',
        },
        {
          title: "Submit",
          required: true,
          type: "text",
          isSearch: true,
          placeHolder: "Search",
          isClear: true,
          isMultiple: false,
          isText: false,
          autocomplete: false,
          isButton: true

        }


      ];



    } catch (error) { }
  }

  incrementStep() {
    this.pageConfig.stepNumber = Number(this.pageConfig?.stepNumber) + 1;
  }

  triggerFormDatahandlerBasic(data: {}[]) {
    console.log(data)
    try {
      // console.log((data.find((el) => (el as { title: string })?.title === 'title') as { value: string | unknown })?.value)
      this.basicPaloadDataArray = {
        "title": (data.find((el) => (el as { title: string })?.title === 'title') as { value: string | unknown })?.value,
        "basic_details": {
          "floor_no": (data.find((el) => (el as { title: string })?.title === 'floor_no') as { value: string | unknown })?.value,
          "size_of_shop": {
            "width": (data.find((el) => (el as { title: string })?.title === 'width') as { value: string | unknown })?.value,
            "height": (data.find((el) => (el as { title: string })?.title === 'height') as { value: string | unknown })?.value,
            "scale": "sqft"
          },
          "shop_no": (data.find((el) => (el as { title: string })?.title === 'shop_no') as { value: string | unknown })?.value,
          "type_of_business": (data.find((el) => (el as { title: string })?.title === 'type_of_business') as { value: string | unknown })?.value
        },
        "status_of_shop": (data.find((el) => (el as { title: string })?.title === 'status_of_shop') as { value: string | unknown })?.value,

      }


      console.log(this.basicPaloadDataArray)
      // this, this.pageConfig.stepNumber = 2
      // this, this.pageConfig.stepNumber = 3;
      console.log({ ...this.tanentDetailsData, ...this.basicPaloadDataArray })
      this.isShopHasVacent()
      if (this.shopCurrentId) {
        this.basicPaloadDataArray._id = this.shopCurrentId
        this.programService.updateProject(this.basicPaloadDataArray).then((res: any) => {
          console.log(res)
          alert(res.message)
          // this.shopCurrentId = res.result._id;
        })
      } else {
        this.programService.createProject(this.basicPaloadDataArray).then((res: any) => {
          console.log(res)
          alert(res.result._id)
          this.shopCurrentId = res.result._id;
        })

      }

    } catch (error) {
      console.log(error)
    }
  }


  triggerFormDatahandlerTanent(data: {}[]) {
    console.log(data)
    try {
      // console.log((data.find((el) => (el as { title: string })?.title === 'title') as { value: string | unknown })?.value)
      this.tanentDetailsData = {
        "_id": this.shopCurrentId,
        "Shop_tenant_details": {
          "tenant_name": (data.find((el) => (el as { title: string })?.title === 'tenant_name') as { value: string | unknown })?.value,
          "tenant_kyc_details": {
            "adhar_no": (data.find((el) => (el as { title: string })?.title === 'adhar_no') as { value: string | unknown })?.value as number,
            "other": null
          },
          "tenant_contact_details": {
            "mobile": (data.find((el) => (el as { title: string })?.title === 'mobile') as { value: string | unknown })?.value as number,
            "email": (data.find((el) => (el as { title: string })?.title === 'email') as { value: string | unknown })?.value as string,
            "address": (data.find((el) => (el as { title: string })?.title === 'address') as { value: string | unknown })?.value as string,
          },
        }
      } as any

      // this, this.pageConfig.stepNumber = 3;
      console.log({ ...this.tanentDetailsData, ...this.basicPaloadDataArray })
      this.programService.updateProject(this.tanentDetailsData).then((res: any) => {
        console.log(res)
        alert(res.message)
        // this.shopCurrentId = res.result._id;
      })
      this.isShopHasVacent()
    } catch (error) {
      console.log(error)
    }
  }

  isShopHasVacent() {
    try {
      if ((this.basicPaloadDataArray.status_of_shop as any).title === 'Vacant') {
        console.log(this.basicPaloadDataArray.status_of_shop)
        return true
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  }


  triggerFormDatahandlerAgreement(data: {}[]) {
    console.log(data)
    try {
      // console.log((data.find((el) => (el as { title: string })?.title === 'title') as { value: string | unknown })?.value)
      this.payloadDataAgreement = {
        "_id": this.shopCurrentId,
        "agrement_details": [
          {
            "agreement_amount": (data.find((el) => (el as { title: string })?.title === 'agreement_amount') as { value: string | unknown })?.value,
            "agreement_status": (data.find((el) => (el as { title: string })?.title === 'agreement_status') as { value: string | unknown })?.value,
            "agreement_effective_date": (data.find((el) => (el as { title: string })?.title === 'agreement_effective_date') as { value: string | unknown })?.value,
            "agreement_term_date": (data.find((el) => (el as { title: string })?.title === 'agreement_term_date') as { value: string | unknown })?.value,
            "contact_renewal_amount_percentage": (data.find((el) => (el as { title: string })?.title === 'contact_renewal_amount_percentage') as { value: string | unknown })?.value,
          }
        ],

      }
      // this.pageConfig.stepNumber = 4;
      console.log(this.payloadDataAgreement)
      this.programService.updateProject(this.payloadDataAgreement).then((res: any) => {
        console.log(res)
        alert(res.message)
        // this.shopCurrentId = res.result._id;
      })

      // console.log({ ...this.payloadDataAgreement, ...this.basicPaloadDataArray, ...this.tanentDetailsData })
    } catch (error) {
      console.log(error)
    }
  }



  triggerFormDatahandlerAgreementDesposit(data: {}[]) {
    console.log(data)
    try {

      let payloadDataAgreementnew: any = this.dummyData;
      payloadDataAgreementnew._id = this.shopCurrentId,
        console.log(payloadDataAgreementnew)
      // console.log((data.find((el) => (el as { title: string })?.title === 'title') as { value: string | unknown })?.value)
      this.payloadDataDeposit = {
        "deposit_details": {
          "deposit_amount": (data.find((el) => (el as { title: string })?.title === 'deposit_amount') as { value: string | unknown })?.value,
          "deposit_received_date": (data.find((el) => (el as { title: string })?.title === 'deposit_received_date') as { value: string | unknown })?.value,
          "deposit_credited_date": (data.find((el) => (el as { title: string })?.title === 'deposit_credited_date') as { value: string | unknown })?.value,
          "deposit_credited_bank": (data.find((el) => (el as { title: string })?.title === 'deposit_credited_bank') as { value: string | unknown })?.value,
          "deposit_text": (data.find((el) => (el as { title: string })?.title === 'deposit_text') as { value: string | unknown })?.value,

        }


      }

      Object.assign(payloadDataAgreementnew?.agrement_details?.[0] ? payloadDataAgreementnew?.agrement_details?.[0] : {}, this.payloadDataDeposit)



      console.log(payloadDataAgreementnew)


      this.programService.updateProject(payloadDataAgreementnew).then((res: any) => {
        console.log(res)
        alert(res.message)
        // this.shopCurrentId = res.result._id;
      })


    } catch (error) {
      console.log(error)
    }
  }
  backGo() {
    try {
      if (this.pageConfig.stepNumber as number > 0) {
        (this.pageConfig.stepNumber as number)--
      }
    } catch (error) {

    }
  }
  currentStepvalid() {
    try {
      if (this.pageConfig.stepNumber as number < 2) {
        return false
      } else {
        return true
      }
    } catch (error) {
      return false;
    }
  }

  searchShopDetails(data: any) {
    console.log(data[0].value.data)
    this.shopCurrentId = data[0].value.code

    this.dummyData = data[0].value.data;
    console.log(this.dummyData)
    console.log(this.formControlObject);


    this.riskProfileArray = [
      {
        title: "Basic details",
        count_score: 30,
        risk_type: this.dummyData.basic_details ? "good" : 'bad',
        description: "Basic + Layout",
        apiData: {
          name: "cs_fmuInputSelectorTherm.fmu",
          id: "225385",
        },
        id: String(1),
        isMultiple: false,
        isDelete: false,
        // author: "Vinayaka",
        type: "Models",


        isSingleCheckUI: true,
        deleteIcon: "assets/icons/delete.svg",
      },
      {
        title: "Tanet details",
        count_score: 30,
        risk_type: this.dummyData?.Shop_tenant_details ? "good" : 'bad',
        description: "Basic",
        apiData: {
          name: "cs_fmuInputSelectorTherm.fmu",
          id: "225385",
        },
        id: String(2),
        isMultiple: false,
        isDelete: false,
        // author: "Vinayaka",
        type: "Models",


        isSingleCheckUI: true,
        deleteIcon: "assets/icons/delete.svg",
      },
      {
        title: "Agreement details",
        count_score: 30,
        risk_type: this.dummyData?.agrement_details ? "good" : 'bad',
        description: "banking",
        apiData: {
          name: "cs_fmuInputSelectorTherm.fmu",
          id: "225385",
        },
        id: String(3),
        isMultiple: false,
        isDelete: false,
        // author: "Vinayaka",
        type: "Models",


        isSingleCheckUI: true,
        deleteIcon: "assets/icons/delete.svg",
      },
      // {
      //   title: "Deposit details",
      //   count_score: 30,
      //   risk_type: this.dummyData?.agrement_details[0]?.deposit_details
      //     ? "good" : 'bad',
      //   description: "Basic",
      //   apiData: {
      //     name: "cs_fmuInputSelectorTherm.fmu",
      //     id: "225385",
      //   },
      //   id: String(4),
      //   isMultiple: false,
      //   isDelete: false,
      //   // author: "Vinayaka",
      //   type: "Models",


      //   isSingleCheckUI: true,
      //   deleteIcon: "assets/icons/delete.svg",
      // },

    ];


    (this.formControlObject.find((el) => (el as { key: string })?.key === 'title') as any).value = this.dummyData.title;
    (this.formControlObject.find((el) => (el as { key: string })?.key === 'shop_facing') as any).value = this.dummyData.basic_details?.shop_facing;
    (this.formControlObject.find((el) => (el as { key: string })?.key === 'floor_no') as any).value = this.dummyData?.basic_details?.floor_no[0];
    (this.formControlObject.find((el) => (el as { key: string })?.key === 'shop_no') as any).value = this.dummyData?.basic_details?.shop_no[0];
    (this.formControlObject.find((el) => (el as { key: string })?.key === 'status_of_shop') as any).value = this.dummyData?.status_of_shop;
    (this.formControlObject.find((el) => (el as { key: string })?.key === 'width') as any).value = this.dummyData?.basic_details?.size_of_shop?.width;
    (this.formControlObject.find((el) => (el as { key: string })?.key === 'height') as any).value = this.dummyData?.basic_details?.size_of_shop?.height;
    (this.formControlObject.find((el) => (el as { key: string })?.key === 'type_of_business') as any).value = this.dummyData?.basic_details?.type_of_business;

    (this.tanetFormControl.find((el) => (el as { key: string })?.key === 'tenant_name') as any).value = this.dummyData.Shop_tenant_details.tenant_name;
    (this.tanetFormControl.find((el) => (el as { key: string })?.key === 'mobile') as any).value = this.dummyData.Shop_tenant_details.tenant_contact_details.mobile;
    (this.tanetFormControl.find((el) => (el as { key: string })?.key === 'address') as any).value = this.dummyData.Shop_tenant_details.tenant_contact_details.address;
    (this.tanetFormControl.find((el) => (el as { key: string })?.key === 'email') as any).value = this.dummyData.Shop_tenant_details.tenant_contact_details.email;
    (this.tanetFormControl.find((el) => (el as { key: string })?.key === 'adhar_no') as any).value = this.dummyData.Shop_tenant_details.tenant_kyc_details.adhar_no;

    this.dummyData.agrement_details.map((agreement: any) => {
      (this.agreementForm.find((el) => (el as { key: string })?.key === 'agreement_amount') as any).value = agreement?.agreement_amount;
      (this.agreementForm.find((el) => (el as { key: string })?.key === 'agreement_effective_date') as any).value = new Date(agreement?.agreement_effective_date);
      (this.agreementForm.find((el) => (el as { key: string })?.key === 'agreement_term_date') as any).value = new Date(agreement?.agreement_term_date);
      (this.agreementForm.find((el) => (el as { key: string })?.key === 'agreement_status') as any).value = agreement?.agreement_status;
      (this.agreementForm.find((el) => (el as { key: string })?.key === 'contact_renewal_amount_percentage') as any).value = agreement?.contact_renewal_amount_percentage;
      (this.advancedAgreementForm.find((el) => (el as { key: string })?.key === 'deposit_amount') as any).value = agreement.deposit_details.deposit_amount;
      (this.advancedAgreementForm.find((el) => (el as { key: string })?.key === 'deposit_amount') as any).value = agreement.deposit_details.deposit_amount;
      (this.advancedAgreementForm.find((el) => (el as { key: string })?.key === 'deposit_text') as any).value = agreement.deposit_details.deposit_text;
      (this.advancedAgreementForm.find((el) => (el as { key: string })?.key === 'deposit_received_date') as any).value = new Date(agreement.deposit_details.deposit_received_date);
      (this.advancedAgreementForm.find((el) => (el as { key: string })?.key === 'deposit_credited_date') as any).value = new Date(agreement.deposit_details.deposit_credited_date);
      (this.advancedAgreementForm.find((el) => (el as { key: string })?.key === 'deposit_credited_bank') as any).value = agreement.deposit_details.deposit_credited_bank;
      // (this.agreementForm.find((el) => (el as { key: string })?.key === 'agreement_amount') as any).value = agreement?.agreement_amount;
    });


  }

  getCarddetailsTriggerhandler(data: Card) {
    console.log(data)
    this.pageConfig.stepNumber = Number(data.id)
  }
}
