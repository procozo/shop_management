export class Constant {
  static constats = {
    endpoints: {
      TOTAL_PROJECT_COUNT: "/totalProjects",
      MANAGE_PROJECTS: "/manageProject",
      CREATE_PROJECT: "/api/shop/shop",
      ASSIGN_ELEMENT: "/assignElements",
      DETAILS_PROJECT: "/details",
      SEARCH: "/search",
      SEARCH_META_DATA: "/metaData",
      TASK: "/task",
      ASSIGN_TO_TASK: "assignToTask",
      FMU_VALIDATE: "/validate",
      SMOKE_TEST: "/smokeTest",
      CISV_TEST: "/autoMatSimulation",
      CREATE_SHOP: "/api/shop/shop",
      GET_SHOP: "/api/shop/getShop",
      UPDATE_SHOP: '/api/shop/updateShop',
      GET_ALL_SHOP: '/api/shop/getAllShops'
    },
    marsEndpoints: {
      ASSIGN_ELEMENT: "/assignElements",
      DETAILS_PROJECT: "/details",
      SEARCH: "/models",
      SEARCH_META_DATA: "/metaData",
      TASK: "/task",
      ASSIGN_TO_TASK: "assignToTask",
      COMPATIBLE_CHECK: "/compatibilityCheck",
      JOB_STATUS: "/jobStatus",
      SIMULATE: "/simulate",
      JOBID_DATA: "/details",
    },
    IntelliauthEndPoints: {
      META_DATA: "/intelliauthexclusions/getmetadata",
      SEARCH_DATA:
        "/intelliauthexclusions/searchdata?PlanStateSold=N%2FA&LOB=CHIP",
      POLICY: "/nurse/get_policy_details",
    },
    auth: {
      policyUsername: "SRCesearchpublicuser",
      policyPassword: "7v1qbL9$",
      policyurl: "/getPulsePolicy/pulsecontentexternal/api/contents/",
    },
    cmStratificationEndPoints: {
      CM_CONFIG: "/caremanagement/cmprogramconf",
      CM_PROGRAM_DETAILS: "/caremanagement/cmprogramdetails",
      CM_PROGRAM: "/caremanagement/cmprogram",
    },
  };
}
