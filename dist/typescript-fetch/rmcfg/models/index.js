"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint-disable */
__exportStar(require("./AddtionalCodeInfoTypeInner"), exports);
__exportStar(require("./BedTypeInfoType"), exports);
__exportStar(require("./BedTypeRequestType"), exports);
__exportStar(require("./BedTypeRequestsCriteria"), exports);
__exportStar(require("./BedTypeRequestsDetails"), exports);
__exportStar(require("./BedTypeRequestsToBeChanged"), exports);
__exportStar(require("./BedTypeType"), exports);
__exportStar(require("./BedTypesCriteria"), exports);
__exportStar(require("./BedTypesDetails"), exports);
__exportStar(require("./BedTypesToBeChanged"), exports);
__exportStar(require("./BookingChannelMappingType"), exports);
__exportStar(require("./BuildingFloorMappingIDType"), exports);
__exportStar(require("./BuildingFloorMappingType"), exports);
__exportStar(require("./BuildingFloorMappingsDetails"), exports);
__exportStar(require("./BuildingGroupType"), exports);
__exportStar(require("./BuildingGroupsCriteria"), exports);
__exportStar(require("./BuildingGroupsDetails"), exports);
__exportStar(require("./BuildingGroupsToBeChanged"), exports);
__exportStar(require("./BuildingType"), exports);
__exportStar(require("./BuildingsCriteria"), exports);
__exportStar(require("./BuildingsDetails"), exports);
__exportStar(require("./BuildingsToBeChanged"), exports);
__exportStar(require("./CodeDescriptionType"), exports);
__exportStar(require("./CodeInfoType"), exports);
__exportStar(require("./ColorType"), exports);
__exportStar(require("./ConfigHotelPreferenceType"), exports);
__exportStar(require("./ConfigHousekeepingRoomScheduleTaskSupplyType"), exports);
__exportStar(require("./ConfigHousekeepingRoomScheduleType"), exports);
__exportStar(require("./ConfigRoomSummaryType"), exports);
__exportStar(require("./ConfigRoomType"), exports);
__exportStar(require("./ConfigRoomsSummaryType"), exports);
__exportStar(require("./ConfigRoomsType"), exports);
__exportStar(require("./CopyBuildingGroups"), exports);
__exportStar(require("./CopyBuildings"), exports);
__exportStar(require("./CopyConfigurationCodeType"), exports);
__exportStar(require("./CopyHousekeepingCodes"), exports);
__exportStar(require("./CopyHousekeepingSectionGroups"), exports);
__exportStar(require("./CopyHousekeepingSections"), exports);
__exportStar(require("./CopyNewRoomType"), exports);
__exportStar(require("./CopyRoomHierarchies"), exports);
__exportStar(require("./CopyRoomHierarchiesCopyRoomHierarchies"), exports);
__exportStar(require("./CopyRoomType"), exports);
__exportStar(require("./CopyRooms"), exports);
__exportStar(require("./CreateRoomHierarchiesType"), exports);
__exportStar(require("./CurrencyAmountType"), exports);
__exportStar(require("./DaysOfWeekAttrType"), exports);
__exportStar(require("./ErrorInstance"), exports);
__exportStar(require("./ExceptionDetailType"), exports);
__exportStar(require("./FloorTypeType"), exports);
__exportStar(require("./FloorTypesCriteria"), exports);
__exportStar(require("./FloorTypesDetails"), exports);
__exportStar(require("./FloorTypesToBeChanged"), exports);
__exportStar(require("./FloorsCriteria"), exports);
__exportStar(require("./FloorsDetails"), exports);
__exportStar(require("./FloorsToBeChanged"), exports);
__exportStar(require("./FrequencyTypeType"), exports);
__exportStar(require("./HotelFloorType"), exports);
__exportStar(require("./HotelRoomMaintenanceReasonType"), exports);
__exportStar(require("./HotelRoomMaintenanceReasonsCriteria"), exports);
__exportStar(require("./HotelRoomMaintenanceReasonsDetails"), exports);
__exportStar(require("./HotelRoomMaintenanceReasonsToBeChanged"), exports);
__exportStar(require("./HousekeepingAttendantType"), exports);
__exportStar(require("./HousekeepingAttendantsCriteria"), exports);
__exportStar(require("./HousekeepingAttendantsDetails"), exports);
__exportStar(require("./HousekeepingAttendantsToBeChanged"), exports);
__exportStar(require("./HousekeepingCodeConfigType"), exports);
__exportStar(require("./HousekeepingCodesCriteria"), exports);
__exportStar(require("./HousekeepingCodesDetails"), exports);
__exportStar(require("./HousekeepingCodesToBeChanged"), exports);
__exportStar(require("./HousekeepingCreditRuleTravelTypeType"), exports);
__exportStar(require("./HousekeepingCreditRuleType"), exports);
__exportStar(require("./HousekeepingCreditRuleTypeFacilityTaskRule"), exports);
__exportStar(require("./HousekeepingCreditRuleTypeType"), exports);
__exportStar(require("./HousekeepingCreditRulesCriteria"), exports);
__exportStar(require("./HousekeepingCreditRulesDetails"), exports);
__exportStar(require("./HousekeepingCreditRulesToBeChanged"), exports);
__exportStar(require("./HousekeepingCreditsDefinitionType"), exports);
__exportStar(require("./HousekeepingCreditsType"), exports);
__exportStar(require("./HousekeepingRoomSchedulesCriteria"), exports);
__exportStar(require("./HousekeepingRoomSchedulesDetails"), exports);
__exportStar(require("./HousekeepingRoomSchedulesToBeChanged"), exports);
__exportStar(require("./HousekeepingSectionGroupCopyInfoType"), exports);
__exportStar(require("./HousekeepingSectionGroupCopyType"), exports);
__exportStar(require("./HousekeepingSectionGroupType"), exports);
__exportStar(require("./HousekeepingSectionGroupsCriteria"), exports);
__exportStar(require("./HousekeepingSectionGroupsDetails"), exports);
__exportStar(require("./HousekeepingSectionGroupsToBeChanged"), exports);
__exportStar(require("./HousekeepingSectionType"), exports);
__exportStar(require("./HousekeepingSectionsCriteria"), exports);
__exportStar(require("./HousekeepingSectionsDetails"), exports);
__exportStar(require("./HousekeepingSectionsToBeChanged"), exports);
__exportStar(require("./HousekeepingTaskConfigType"), exports);
__exportStar(require("./HousekeepingTaskSheetRoomType"), exports);
__exportStar(require("./HousekeepingTaskSheetRoomTypeRuleCredit"), exports);
__exportStar(require("./HousekeepingTaskSheetRoomsDetails"), exports);
__exportStar(require("./HousekeepingTasksCriteria"), exports);
__exportStar(require("./HousekeepingTasksDetails"), exports);
__exportStar(require("./HousekeepingTasksToBeChanged"), exports);
__exportStar(require("./InstanceLink"), exports);
__exportStar(require("./MasterInfoCodeDetailType"), exports);
__exportStar(require("./MasterInfoType"), exports);
__exportStar(require("./MasterType"), exports);
__exportStar(require("./OutOfOrderServiceReasonType"), exports);
__exportStar(require("./OutOfOrderServiceReasonsCriteria"), exports);
__exportStar(require("./OutOfOrderServiceReasonsDetails"), exports);
__exportStar(require("./OutOfOrderServiceReasonsToBeChanged"), exports);
__exportStar(require("./RatePlanRatingType"), exports);
__exportStar(require("./ResortRoomConditionCriteria"), exports);
__exportStar(require("./ResortRoomConditionToBeChanged"), exports);
__exportStar(require("./ResortRoomConditionsDetails"), exports);
__exportStar(require("./RoomClassCriteria"), exports);
__exportStar(require("./RoomClassTemplateCriteria"), exports);
__exportStar(require("./RoomClassTemplateToBeChanged"), exports);
__exportStar(require("./RoomClassTemplateType"), exports);
__exportStar(require("./RoomClassTemplatesDetails"), exports);
__exportStar(require("./RoomClassToBeChanged"), exports);
__exportStar(require("./RoomClassType"), exports);
__exportStar(require("./RoomClassesDetails"), exports);
__exportStar(require("./RoomComponentType"), exports);
__exportStar(require("./RoomConditionTemplateCriteria"), exports);
__exportStar(require("./RoomConditionTemplateToBeChanged"), exports);
__exportStar(require("./RoomConditionTemplatesDetails"), exports);
__exportStar(require("./RoomCondtionTemplateType"), exports);
__exportStar(require("./RoomCondtionType"), exports);
__exportStar(require("./RoomCriteria"), exports);
__exportStar(require("./RoomCriteriaRoom"), exports);
__exportStar(require("./RoomFeatureConfigType"), exports);
__exportStar(require("./RoomFeatureType"), exports);
__exportStar(require("./RoomFeaturesCriteria"), exports);
__exportStar(require("./RoomFeaturesDetails"), exports);
__exportStar(require("./RoomFeaturesToBeChanged"), exports);
__exportStar(require("./RoomGroupType"), exports);
__exportStar(require("./RoomGroupsCriteria"), exports);
__exportStar(require("./RoomGroupsDetails"), exports);
__exportStar(require("./RoomGroupsToBeChanged"), exports);
__exportStar(require("./RoomHierarchiesCriteria"), exports);
__exportStar(require("./RoomHierarchiesDetails"), exports);
__exportStar(require("./RoomHierarchiesToBeChanged"), exports);
__exportStar(require("./RoomHierarchiesToGenerate"), exports);
__exportStar(require("./RoomHierarchySearchType"), exports);
__exportStar(require("./RoomHierarchyType"), exports);
__exportStar(require("./RoomHierarchyTypeType"), exports);
__exportStar(require("./RoomMoveReasonType"), exports);
__exportStar(require("./RoomMoveReasonsCriteria"), exports);
__exportStar(require("./RoomMoveReasonsDetails"), exports);
__exportStar(require("./RoomMoveReasonsToBeChanged"), exports);
__exportStar(require("./RoomPotentialType"), exports);
__exportStar(require("./RoomPotentialsCriteria"), exports);
__exportStar(require("./RoomPotentialsDetails"), exports);
__exportStar(require("./RoomPotentialsToBeChanged"), exports);
__exportStar(require("./RoomPreferencePrioritiesCriteria"), exports);
__exportStar(require("./RoomPreferencePrioritiesDetails"), exports);
__exportStar(require("./RoomPreferencePrioritiesToBeChanged"), exports);
__exportStar(require("./RoomPreferencePriorityType"), exports);
__exportStar(require("./RoomRoomType"), exports);
__exportStar(require("./RoomSectionType"), exports);
__exportStar(require("./RoomToBeChanged"), exports);
__exportStar(require("./RoomToBeChangedRoom"), exports);
__exportStar(require("./RoomTypeAttributesType"), exports);
__exportStar(require("./RoomTypeComponentType"), exports);
__exportStar(require("./RoomTypeInfoDetails"), exports);
__exportStar(require("./RoomTypeInfoType"), exports);
__exportStar(require("./RoomTypeMasterInfoType"), exports);
__exportStar(require("./RoomTypeShortInfoType"), exports);
__exportStar(require("./RoomTypeSummaryType"), exports);
__exportStar(require("./RoomTypeTemplatesCriteria"), exports);
__exportStar(require("./RoomTypeTemplatesCriteriaRoomTypeTemplate"), exports);
__exportStar(require("./RoomTypeTemplatesDetails"), exports);
__exportStar(require("./RoomTypeTemplatesToBeChanged"), exports);
__exportStar(require("./RoomTypeTemplatesToBeChangedRoomTypeTemplate"), exports);
__exportStar(require("./RoomTypeType"), exports);
__exportStar(require("./RoomTypeTypeSuite"), exports);
__exportStar(require("./RoomTypeYieldableType"), exports);
__exportStar(require("./RoomTypesCriteria"), exports);
__exportStar(require("./RoomTypesCriteriaRoomType"), exports);
__exportStar(require("./RoomTypesDetails"), exports);
__exportStar(require("./RoomTypesSummaryType"), exports);
__exportStar(require("./RoomTypesToBeChanged"), exports);
__exportStar(require("./RoomTypesToBeChangedRoomType"), exports);
__exportStar(require("./RoomTypesType"), exports);
__exportStar(require("./RoomsDetails"), exports);
__exportStar(require("./RoomsSummaryDetails"), exports);
__exportStar(require("./RoomsSummaryDetailsRooms"), exports);
__exportStar(require("./SetBuildingFloorMappings"), exports);
__exportStar(require("./SetHousekeepingTaskSheetRooms"), exports);
__exportStar(require("./SmokingTypeType"), exports);
__exportStar(require("./SmokingTypesCriteria"), exports);
__exportStar(require("./SmokingTypesDetails"), exports);
__exportStar(require("./SmokingTypesToBeChanged"), exports);
__exportStar(require("./Status"), exports);
__exportStar(require("./TemplateFloorType"), exports);
__exportStar(require("./TemplateFloorsCriteria"), exports);
__exportStar(require("./TemplateFloorsDetails"), exports);
__exportStar(require("./TemplateFloorsToBeChanged"), exports);
__exportStar(require("./TemplateHousekeepingTaskConfigType"), exports);
__exportStar(require("./TemplateHousekeepingTaskToBeChanged"), exports);
__exportStar(require("./TemplateHousekeepingTasksCriteria"), exports);
__exportStar(require("./TemplateHousekeepingTasksDetails"), exports);
__exportStar(require("./TemplateOutOfOrderServiceReasonType"), exports);
__exportStar(require("./TemplateOutOfOrderServiceReasonsCriteria"), exports);
__exportStar(require("./TemplateOutOfOrderServiceReasonsDetails"), exports);
__exportStar(require("./TemplateOutOfOrderServiceReasonsToBeChanged"), exports);
__exportStar(require("./TemplateRoomFeatureConfigType"), exports);
__exportStar(require("./TemplateRoomFeaturesCriteria"), exports);
__exportStar(require("./TemplateRoomFeaturesDetails"), exports);
__exportStar(require("./TemplateRoomFeaturesToBeChanged"), exports);
__exportStar(require("./TemplateRoomMaintenanceReasonType"), exports);
__exportStar(require("./TemplateRoomMaintenanceReasonsCriteria"), exports);
__exportStar(require("./TemplateRoomMaintenanceReasonsDetails"), exports);
__exportStar(require("./TemplateRoomMaintenanceReasonsToBeChanged"), exports);
__exportStar(require("./TimeSpanDaysOfWeekType"), exports);
__exportStar(require("./TimeSpanType"), exports);
__exportStar(require("./TranslationTextType2000"), exports);
__exportStar(require("./TranslationTextType50"), exports);
__exportStar(require("./TranslationsTextTypeInner"), exports);
__exportStar(require("./ValidateRoomClassInUse"), exports);
__exportStar(require("./WarningType"), exports);
