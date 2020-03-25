module.exports = (app) => {
  // 导入路由
  const index = require('../routes/index')
  const users = require('../routes/user')
  // routes
  app.use(index.routes(), index.allowedMethods())
  app.use(users.routes(), users.allowedMethods())

  // 导入使用 SOP_File
  const SOPFile = require('../routes/table/SOP_File');
  app.use(SOPFile.routes(), SOPFile.allowedMethods())
    
  // 导入使用 base_enum_defn
  const baseEnumDefn = require('../routes/table/base_enum_defn');
  app.use(baseEnumDefn.routes(), baseEnumDefn.allowedMethods())
    
  // 导入使用 base_enum_value
  const baseEnumValue = require('../routes/table/base_enum_value');
  app.use(baseEnumValue.routes(), baseEnumValue.allowedMethods())
    
  // 导入使用 base_reason_code
  const baseReasonCode = require('../routes/table/base_reason_code');
  app.use(baseReasonCode.routes(), baseReasonCode.allowedMethods())
    
  // 导入使用 base_reason_defn
  const baseReasonDefn = require('../routes/table/base_reason_defn');
  app.use(baseReasonDefn.routes(), baseReasonDefn.allowedMethods())
    
  // 导入使用 check_model
  const checkModel = require('../routes/table/check_model');
  app.use(checkModel.routes(), checkModel.allowedMethods())
    
  // 导入使用 check_model_item
  const checkModelItem = require('../routes/table/check_model_item');
  app.use(checkModelItem.routes(), checkModelItem.allowedMethods())
    
  // 导入使用 check_sample_rules
  const checkSampleRules = require('../routes/table/check_sample_rules');
  app.use(checkSampleRules.routes(), checkSampleRules.allowedMethods())
    
  // 导入使用 check_sheet_defect
  const checkSheetDefect = require('../routes/table/check_sheet_defect');
  app.use(checkSheetDefect.routes(), checkSheetDefect.allowedMethods())
    
  // 导入使用 check_sheet
  const checkSheet = require('../routes/table/check_sheet');
  app.use(checkSheet.routes(), checkSheet.allowedMethods())
    
  // 导入使用 check_sheet_item
  const checkSheetItem = require('../routes/table/check_sheet_item');
  app.use(checkSheetItem.routes(), checkSheetItem.allowedMethods())
    
  // 导入使用 eqp_plan_list
  const eqpPlanList = require('../routes/table/eqp_plan_list');
  app.use(eqpPlanList.routes(), eqpPlanList.allowedMethods())
    
  // 导入使用 equipment
  const equipment = require('../routes/table/equipment');
  app.use(equipment.routes(), equipment.allowedMethods())
    
  // 导入使用 equipment_alarm
  const equipmentAlarm = require('../routes/table/equipment_alarm');
  app.use(equipmentAlarm.routes(), equipmentAlarm.allowedMethods())
    
  // 导入使用 equipment_check_item
  const equipmentCheckItem = require('../routes/table/equipment_check_item');
  app.use(equipmentCheckItem.routes(), equipmentCheckItem.allowedMethods())
    
  // 导入使用 equipment_exception
  const equipmentException = require('../routes/table/equipment_exception');
  app.use(equipmentException.routes(), equipmentException.allowedMethods())
    
  // 导入使用 equipment_file
  const equipmentFile = require('../routes/table/equipment_file');
  app.use(equipmentFile.routes(), equipmentFile.allowedMethods())
    
  // 导入使用 equipment_history
  const equipmentHistory = require('../routes/table/equipment_history');
  app.use(equipmentHistory.routes(), equipmentHistory.allowedMethods())
    
  // 导入使用 equipment_maintain_item
  const equipmentMaintainItem = require('../routes/table/equipment_maintain_item');
  app.use(equipmentMaintainItem.routes(), equipmentMaintainItem.allowedMethods())
    
  // 导入使用 equipment_parameter
  const equipmentParameter = require('../routes/table/equipment_parameter');
  app.use(equipmentParameter.routes(), equipmentParameter.allowedMethods())
    
  // 导入使用 equipment_plan
  const equipmentPlan = require('../routes/table/equipment_plan');
  app.use(equipmentPlan.routes(), equipmentPlan.allowedMethods())
    
  // 导入使用 equipment_spec
  const equipmentSpec = require('../routes/table/equipment_spec');
  app.use(equipmentSpec.routes(), equipmentSpec.allowedMethods())
    
  // 导入使用 equipment_spec_checkitem
  const equipmentSpecCheckitem = require('../routes/table/equipment_spec_checkitem');
  app.use(equipmentSpecCheckitem.routes(), equipmentSpecCheckitem.allowedMethods())
    
  // 导入使用 equipment_spec_maintain
  const equipmentSpecMaintain = require('../routes/table/equipment_spec_maintain');
  app.use(equipmentSpecMaintain.routes(), equipmentSpecMaintain.allowedMethods())
    
  // 导入使用 fac_area
  const facArea = require('../routes/table/fac_area');
  app.use(facArea.routes(), facArea.allowedMethods())
    
  // 导入使用 fac_bulletin
  const facBulletin = require('../routes/table/fac_bulletin');
  app.use(facBulletin.routes(), facBulletin.allowedMethods())
    
  // 导入使用 fac_calendar
  const facCalendar = require('../routes/table/fac_calendar');
  app.use(facCalendar.routes(), facCalendar.allowedMethods())
    
  // 导入使用 fac_calendar_item
  const facCalendarItem = require('../routes/table/fac_calendar_item');
  app.use(facCalendarItem.routes(), facCalendarItem.allowedMethods())
    
  // 导入使用 fac_department
  const facDepartment = require('../routes/table/fac_department');
  app.use(facDepartment.routes(), facDepartment.allowedMethods())
    
  // 导入使用 fac_emp_post
  const facEmpPost = require('../routes/table/fac_emp_post');
  app.use(facEmpPost.routes(), facEmpPost.allowedMethods())
    
  // 导入使用 fac_employee
  const facEmployee = require('../routes/table/fac_employee');
  app.use(facEmployee.routes(), facEmployee.allowedMethods())
    
  // 导入使用 fac_oper_cell
  const facOperCell = require('../routes/table/fac_oper_cell');
  app.use(facOperCell.routes(), facOperCell.allowedMethods())
    
  // 导入使用 fac_plan
  const facPlan = require('../routes/table/fac_plan');
  app.use(facPlan.routes(), facPlan.allowedMethods())
    
  // 导入使用 fac_plan_file
  const facPlanFile = require('../routes/table/fac_plan_file');
  app.use(facPlanFile.routes(), facPlanFile.allowedMethods())
    
  // 导入使用 fac_plan_history
  const facPlanHistory = require('../routes/table/fac_plan_history');
  app.use(facPlanHistory.routes(), facPlanHistory.allowedMethods())
    
  // 导入使用 fac_plan_item
  const facPlanItem = require('../routes/table/fac_plan_item');
  app.use(facPlanItem.routes(), facPlanItem.allowedMethods())
    
  // 导入使用 fac_post
  const facPost = require('../routes/table/fac_post');
  app.use(facPost.routes(), facPost.allowedMethods())
    
  // 导入使用 fac_production_line
  const facProductionLine = require('../routes/table/fac_production_line');
  app.use(facProductionLine.routes(), facProductionLine.allowedMethods())
    
  // 导入使用 fac_work_center
  const facWorkCenter = require('../routes/table/fac_work_center');
  app.use(facWorkCenter.routes(), facWorkCenter.allowedMethods())
    
  // 导入使用 fac_work_shift
  const facWorkShift = require('../routes/table/fac_work_shift');
  app.use(facWorkShift.routes(), facWorkShift.allowedMethods())
    
  // 导入使用 fac_workcell_material
  const facWorkcellMaterial = require('../routes/table/fac_workcell_material');
  app.use(facWorkcellMaterial.routes(), facWorkcellMaterial.allowedMethods())
    
  // 导入使用 fac_workstation
  const facWorkstation = require('../routes/table/fac_workstation');
  app.use(facWorkstation.routes(), facWorkstation.allowedMethods())
    
  // 导入使用 fac_workteam
  const facWorkteam = require('../routes/table/fac_workteam');
  app.use(facWorkteam.routes(), facWorkteam.allowedMethods())
    
  // 导入使用 fac_workteam_menber
  const facWorkteamMenber = require('../routes/table/fac_workteam_menber');
  app.use(facWorkteamMenber.routes(), facWorkteamMenber.allowedMethods())
    
  // 导入使用 flow_file
  const flowFile = require('../routes/table/flow_file');
  app.use(flowFile.routes(), flowFile.allowedMethods())
    
  // 导入使用 flow_operation
  const flowOperation = require('../routes/table/flow_operation');
  app.use(flowOperation.routes(), flowOperation.allowedMethods())
    
  // 导入使用 material
  const material = require('../routes/table/material');
  app.use(material.routes(), material.allowedMethods())
    
  // 导入使用 material_abnormal_list
  const materialAbnormalList = require('../routes/table/material_abnormal_list');
  app.use(materialAbnormalList.routes(), materialAbnormalList.allowedMethods())
    
  // 导入使用 material_delivery_item
  const materialDeliveryItem = require('../routes/table/material_delivery_item');
  app.use(materialDeliveryItem.routes(), materialDeliveryItem.allowedMethods())
    
  // 导入使用 material_delivery_list
  const materialDeliveryList = require('../routes/table/material_delivery_list');
  app.use(materialDeliveryList.routes(), materialDeliveryList.allowedMethods())
    
  // 导入使用 materiel_MRP_receive
  const materielMRPReceive = require('../routes/table/materiel_MRP_receive');
  app.use(materielMRPReceive.routes(), materielMRPReceive.allowedMethods())
    
  // 导入使用 materiel_MRP_sheet
  const materielMRPSheet = require('../routes/table/materiel_MRP_sheet');
  app.use(materielMRPSheet.routes(), materielMRPSheet.allowedMethods())
    
  // 导入使用 materiel_lot
  const materielLot = require('../routes/table/materiel_lot');
  app.use(materielLot.routes(), materielLot.allowedMethods())
    
  // 导入使用 process_flow
  const processFlow = require('../routes/table/process_flow');
  app.use(processFlow.routes(), processFlow.allowedMethods())
    
  // 导入使用 product_bom
  const productBom = require('../routes/table/product_bom');
  app.use(productBom.routes(), productBom.allowedMethods())
    
  // 导入使用 product_bom_node
  const productBomNode = require('../routes/table/product_bom_node');
  app.use(productBomNode.routes(), productBomNode.allowedMethods())
    
  // 导入使用 product_info
  const productInfo = require('../routes/table/product_info');
  app.use(productInfo.routes(), productInfo.allowedMethods())
    
  // 导入使用 product_parameter
  const productParameter = require('../routes/table/product_parameter');
  app.use(productParameter.routes(), productParameter.allowedMethods())
    
  // 导入使用 sys_group
  const sysGroup = require('../routes/table/sys_group');
  app.use(sysGroup.routes(), sysGroup.allowedMethods())
    
  // 导入使用 sys_group_role
  const sysGroupRole = require('../routes/table/sys_group_role');
  app.use(sysGroupRole.routes(), sysGroupRole.allowedMethods())
    
  // 导入使用 sys_right
  const sysRight = require('../routes/table/sys_right');
  app.use(sysRight.routes(), sysRight.allowedMethods())
    
  // 导入使用 sys_role
  const sysRole = require('../routes/table/sys_role');
  app.use(sysRole.routes(), sysRole.allowedMethods())
    
  // 导入使用 sys_role_right
  const sysRoleRight = require('../routes/table/sys_role_right');
  app.use(sysRoleRight.routes(), sysRoleRight.allowedMethods())
    
  // 导入使用 sys_user
  const sysUser = require('../routes/table/sys_user');
  app.use(sysUser.routes(), sysUser.allowedMethods())
    
  // 导入使用 sys_user_group
  const sysUserGroup = require('../routes/table/sys_user_group');
  app.use(sysUserGroup.routes(), sysUserGroup.allowedMethods())
    
  // 导入使用 sys_user_role
  const sysUserRole = require('../routes/table/sys_user_role');
  app.use(sysUserRole.routes(), sysUserRole.allowedMethods())
    
  // 导入使用 user
  const user = require('../routes/table/user');
  app.use(user.routes(), user.allowedMethods())
    
  // 导入使用 wip_lot
  const wipLot = require('../routes/table/wip_lot');
  app.use(wipLot.routes(), wipLot.allowedMethods())
    
  // 导入使用 wip_lot_history
  const wipLotHistory = require('../routes/table/wip_lot_history');
  app.use(wipLotHistory.routes(), wipLotHistory.allowedMethods())
    
  // 导入使用 wip_product
  const wipProduct = require('../routes/table/wip_product');
  app.use(wipProduct.routes(), wipProduct.allowedMethods())
    
  // 导入使用 wip_product_history
  const wipProductHistory = require('../routes/table/wip_product_history');
  app.use(wipProductHistory.routes(), wipProductHistory.allowedMethods())
    
  // 导入使用 wip_wo_item
  const wipWoItem = require('../routes/table/wip_wo_item');
  app.use(wipWoItem.routes(), wipWoItem.allowedMethods())
    
  // 导入使用 wip_work_order
  const wipWorkOrder = require('../routes/table/wip_work_order');
  app.use(wipWorkOrder.routes(), wipWorkOrder.allowedMethods())
}   