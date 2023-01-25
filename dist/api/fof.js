"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryShareTypeType = exports.OwnerResTypeType = exports.RoomRateAvailReasonType = exports.ECertificateIssueType = exports.ECertificateIssueSourceType = exports.ECertificateStatusType = exports.ECertificateConsumeSourceType = exports.ECertificateScopeType = exports.CommissionPaymentMethods = exports.ProfileSharedLevelType = exports.ProfileTypeType = exports.ProfileStatusType = exports.CardReIssueType = exports.DowngradeType = exports.TierAdministrationType = exports.MembershipEarningPreferenceType = exports.ProfileDeliveryModuleType = exports.ImageStyleType = exports.ShareDistributionInstructionType = exports.AmountDeterminationType = exports.CheckedInReservationInstructionType = exports.MasterType = exports.MasterInfoCodeDetailType = exports.CommissionPayoutToType = exports.ResAccessRestrictionType = exports.PMSResStatusType = exports.CommunicationStatusType = exports.HotelInterfaceStatusType = exports.HotelInterfaceTypeType = exports.ReservationAllowedActionType = exports.CardNumberTypeType = exports.CardProcessingType = exports.CardTypeType = exports.ResProfileTypeType = exports.NameTypeType = exports.AnonymizationStatusType = exports.TurndownStatusType = exports.ServicingAttendantStatusType = exports.PersonNameTypeType = exports.RoomDiscrepancyType = exports.RoomConditionAssigmentType = exports.GuestHousekeepingServiceRequestType = exports.FrontOfficeRoomStatusType = exports.HousekeepingRoomStatusType = exports.HousekeepingRoomReservationStatusType = exports.RatePlanRatingType = exports.TaskSheetType = exports.HSKStatCodeType = exports.StatUnitCategoryType = exports.HSKStatReportCodeType = void 0;
exports.Api = exports.HttpClient = exports.ContentType = exports.KeyCardType = exports.RoomKeyType = exports.ExclusionReasonType = exports.NameValueModuleType = exports.NameValueDataTypeType = exports.ECertificateClassficationType = exports.RequestActionType = exports.TransactionDiversionRuleTypeType = exports.ScopeType = exports.EntityType = exports.TransactionDiversionRuleLevelType = exports.MessageStatusType = exports.TypeOfMessageType = exports.FixedChargeFrequencyType = exports.SentConfirmationStatus = exports.ConfDeliveryMethod = exports.WelcomeOfferOptionsType = exports.AlertAreaType = exports.LinkedReservationType = exports.OffsetUnitType = exports.PolicyBasisTypeType = exports.DepositCancelRevenueType = exports.CompRoutingStatusType = exports.ProductSourceType = exports.PackageCalculationRuleType = exports.PostingRhythmType = exports.PrepaidCardTrxTypeType = exports.ServiceRequestStatusType = exports.ActionStatusType = exports.TrackItGroup = exports.FBAStatusType = exports.AwardStatusType = exports.RewardCertificateType = exports.ReservationCertificateType = exports.AwardKindType = exports.ColorType = void 0;
/** Supported Housekeeping report codes. */
var HSKStatReportCodeType;
(function (HSKStatReportCodeType) {
    HSKStatReportCodeType["HouseSummary"] = "HouseSummary";
    HSKStatReportCodeType["HouseSummaryMonthToDate"] = "HouseSummaryMonthToDate";
    HSKStatReportCodeType["HouseSummaryYearToDate"] = "HouseSummaryYearToDate";
    HSKStatReportCodeType["ReservationActivity"] = "ReservationActivity";
    HSKStatReportCodeType["ReservationActivityDaily"] = "ReservationActivityDaily";
    HSKStatReportCodeType["ReservationActivityMonthToDate"] = "ReservationActivityMonthToDate";
    HSKStatReportCodeType["ReservationActivityYearToDate"] = "ReservationActivityYearToDate";
    HSKStatReportCodeType["ComplimentaryOrHouseUse"] = "ComplimentaryOrHouseUse";
    HSKStatReportCodeType["DailyProjection"] = "DailyProjection";
    HSKStatReportCodeType["RoomStatus"] = "RoomStatus";
    HSKStatReportCodeType["LastHourStatus"] = "LastHourStatus";
    HSKStatReportCodeType["Turndown"] = "Turndown";
    HSKStatReportCodeType["InHouse"] = "InHouse";
    HSKStatReportCodeType["CheckIns"] = "CheckIns";
    HSKStatReportCodeType["CheckOuts"] = "CheckOuts";
    HSKStatReportCodeType["AvailableRooms"] = "AvailableRooms";
    HSKStatReportCodeType["RoomMaintenance"] = "RoomMaintenance";
    HSKStatReportCodeType["ReservationStatistics"] = "ReservationStatistics";
    HSKStatReportCodeType["VIPGuests"] = "VIPGuests";
    HSKStatReportCodeType["AdvanceCheckIn"] = "AdvanceCheckIn";
    HSKStatReportCodeType["BlockArrivals"] = "BlockArrivals";
    HSKStatReportCodeType["ReservationsCancellationsToday"] = "ReservationsCancellationsToday";
    HSKStatReportCodeType["AIRoomAssignment"] = "AIRoomAssignment";
    HSKStatReportCodeType["CompRouting"] = "CompRouting";
})(HSKStatReportCodeType = exports.HSKStatReportCodeType || (exports.HSKStatReportCodeType = {}));
/** Supported statistical units. */
var StatUnitCategoryType;
(function (StatUnitCategoryType) {
    StatUnitCategoryType["Numeric"] = "Numeric";
    StatUnitCategoryType["Amount"] = "Amount";
})(StatUnitCategoryType = exports.StatUnitCategoryType || (exports.StatUnitCategoryType = {}));
/** Supported housekeeping statistical codes. */
var HSKStatCodeType;
(function (HSKStatCodeType) {
    HSKStatCodeType["ApprovedCompPostings"] = "ApprovedCompPostings";
    HSKStatCodeType["StagedCompPostings"] = "StagedCompPostings";
    HSKStatCodeType["DeclinedCompPostings"] = "DeclinedCompPostings";
    HSKStatCodeType["CompRoutingInstructionsRequests"] = "CompRoutingInstructionsRequests";
    HSKStatCodeType["TotalPhysicalRooms"] = "TotalPhysicalRooms";
    HSKStatCodeType["TotalRoomsToSell"] = "TotalRoomsToSell";
    HSKStatCodeType["TotalOutOfOrder"] = "TotalOutOfOrder";
    HSKStatCodeType["TotalOutOfService"] = "TotalOutOfService";
    HSKStatCodeType["TotalRevenue"] = "TotalRevenue";
    HSKStatCodeType["PercentRoomsOccupied"] = "PercentRoomsOccupied";
    HSKStatCodeType["StayoverRooms"] = "StayoverRooms";
    HSKStatCodeType["StayoverPersons"] = "StayoverPersons";
    HSKStatCodeType["StayoverVIP"] = "StayoverVIP";
    HSKStatCodeType["DeparturesExpectedRooms"] = "DeparturesExpectedRooms";
    HSKStatCodeType["DeparturesExpectedPersons"] = "DeparturesExpectedPersons";
    HSKStatCodeType["DeparturesExpectedVIP"] = "DeparturesExpectedVIP";
    HSKStatCodeType["DeparturesActualRooms"] = "DeparturesActualRooms";
    HSKStatCodeType["DeparturesActualPersons"] = "DeparturesActualPersons";
    HSKStatCodeType["DeparturesActualVIP"] = "DeparturesActualVIP";
    HSKStatCodeType["DeparturesInLastHour"] = "DeparturesInLastHour";
    HSKStatCodeType["ArrivalsInLastHour"] = "ArrivalsInLastHour";
    HSKStatCodeType["ArrivalsTotal"] = "ArrivalsTotal";
    HSKStatCodeType["ArrivalsExpectedRooms"] = "ArrivalsExpectedRooms";
    HSKStatCodeType["ArrivalsExpectedPersons"] = "ArrivalsExpectedPersons";
    HSKStatCodeType["ArrivalsExpectedVIP"] = "ArrivalsExpectedVIP";
    HSKStatCodeType["ArrivalsExpectedRoomsMadeToday"] = "ArrivalsExpectedRoomsMadeToday";
    HSKStatCodeType["ArrivalsExpectedPersonsMadeToday"] = "ArrivalsExpectedPersonsMadeToday";
    HSKStatCodeType["ArrivalsExpectedVIPMadeToday"] = "ArrivalsExpectedVIPMadeToday";
    HSKStatCodeType["ArrivalsActualRooms"] = "ArrivalsActualRooms";
    HSKStatCodeType["ArrivalsActualPersons"] = "ArrivalsActualPersons";
    HSKStatCodeType["ArrivalsActualVIP"] = "ArrivalsActualVIP";
    HSKStatCodeType["ExtendedStaysRooms"] = "ExtendedStaysRooms";
    HSKStatCodeType["ExtendedStaysPersons"] = "ExtendedStaysPersons";
    HSKStatCodeType["ExtendedStaysVIP"] = "ExtendedStaysVIP";
    HSKStatCodeType["DeparturesTotal"] = "DeparturesTotal";
    HSKStatCodeType["EarlyDeparturesRooms"] = "EarlyDeparturesRooms";
    HSKStatCodeType["EarlyDeparturesPersons"] = "EarlyDeparturesPersons";
    HSKStatCodeType["EarlyDeparturesVIP"] = "EarlyDeparturesVIP";
    HSKStatCodeType["DayUseRooms"] = "DayUseRooms";
    HSKStatCodeType["DayUsePersons"] = "DayUsePersons";
    HSKStatCodeType["DayUseVIP"] = "DayUseVIP";
    HSKStatCodeType["WalkInRooms"] = "WalkInRooms";
    HSKStatCodeType["WalkInPersons"] = "WalkInPersons";
    HSKStatCodeType["WalkInVIP"] = "WalkInVIP";
    HSKStatCodeType["CanceledOnArrivalRooms"] = "CanceledOnArrivalRooms";
    HSKStatCodeType["CanceledOnArrivalPersons"] = "CanceledOnArrivalPersons";
    HSKStatCodeType["CanceledOnArrivalVIP"] = "CanceledOnArrivalVIP";
    HSKStatCodeType["ComplimentaryArrivalRooms"] = "ComplimentaryArrivalRooms";
    HSKStatCodeType["ComplimentaryArrivalPersons"] = "ComplimentaryArrivalPersons";
    HSKStatCodeType["ComplimentaryArrivalVIP"] = "ComplimentaryArrivalVIP";
    HSKStatCodeType["ComplimentaryStayoverRooms"] = "ComplimentaryStayoverRooms";
    HSKStatCodeType["ComplimentaryStayoverPersons"] = "ComplimentaryStayoverPersons";
    HSKStatCodeType["ComplimentaryStayoverVIP"] = "ComplimentaryStayoverVIP";
    HSKStatCodeType["ComplimentaryDepartureRooms"] = "ComplimentaryDepartureRooms";
    HSKStatCodeType["ComplimentaryDeparturePersons"] = "ComplimentaryDeparturePersons";
    HSKStatCodeType["ComplimentaryDepartureVIP"] = "ComplimentaryDepartureVIP";
    HSKStatCodeType["HouseUseArrivalVIP"] = "HouseUseArrivalVIP";
    HSKStatCodeType["HouseUseStayoverRooms"] = "HouseUseStayoverRooms";
    HSKStatCodeType["HouseUseStayoverPersons"] = "HouseUseStayoverPersons";
    HSKStatCodeType["HouseUseStayoverVIP"] = "HouseUseStayoverVIP";
    HSKStatCodeType["HouseUseDepartureRooms"] = "HouseUseDepartureRooms";
    HSKStatCodeType["HouseUseDeparturePersons"] = "HouseUseDeparturePersons";
    HSKStatCodeType["HouseUseDepartureVIP"] = "HouseUseDepartureVIP";
    HSKStatCodeType["MinAvailableTonightRooms"] = "MinAvailableTonightRooms";
    HSKStatCodeType["MaxOccupiedTonightRooms"] = "MaxOccupiedTonightRooms";
    HSKStatCodeType["MaxOccupiedTonightPersons"] = "MaxOccupiedTonightPersons";
    HSKStatCodeType["MaxOccupiedTonightVIP"] = "MaxOccupiedTonightVIP";
    HSKStatCodeType["MaxPercentageOccupiedTonightRooms"] = "MaxPercentageOccupiedTonightRooms";
    HSKStatCodeType["BlocksNotPickedUp"] = "BlocksNotPickedUp";
    HSKStatCodeType["IndividualRooms"] = "IndividualRooms";
    HSKStatCodeType["IndividualPersons"] = "IndividualPersons";
    HSKStatCodeType["IndividualVIP"] = "IndividualVIP";
    HSKStatCodeType["GroupAndBlockRooms"] = "GroupAndBlockRooms";
    HSKStatCodeType["GroupAndBlockPersons"] = "GroupAndBlockPersons";
    HSKStatCodeType["GroupAndBlockVIP"] = "GroupAndBlockVIP";
    HSKStatCodeType["RoomRevenue"] = "RoomRevenue";
    HSKStatCodeType["AverageRoomRevenue"] = "AverageRoomRevenue";
    HSKStatCodeType["InspectedRooms"] = "InspectedRooms";
    HSKStatCodeType["InspectedVacant"] = "InspectedVacant";
    HSKStatCodeType["InspectedAssigned"] = "InspectedAssigned";
    HSKStatCodeType["InspectedOccupied"] = "InspectedOccupied";
    HSKStatCodeType["CleanedRooms"] = "CleanedRooms";
    HSKStatCodeType["CleanVacant"] = "CleanVacant";
    HSKStatCodeType["CleanAssigned"] = "CleanAssigned";
    HSKStatCodeType["CleanOccupied"] = "CleanOccupied";
    HSKStatCodeType["DirtyVacant"] = "DirtyVacant";
    HSKStatCodeType["DirtyAssigned"] = "DirtyAssigned";
    HSKStatCodeType["DirtyOccupied"] = "DirtyOccupied";
    HSKStatCodeType["PickupVacant"] = "PickupVacant";
    HSKStatCodeType["PickupAssigned"] = "PickupAssigned";
    HSKStatCodeType["PickupOccupied"] = "PickupOccupied";
    HSKStatCodeType["OutOfOrderVacant"] = "OutOfOrderVacant";
    HSKStatCodeType["OutOfOrderAssigned"] = "OutOfOrderAssigned";
    HSKStatCodeType["OutOfOrderOccupied"] = "OutOfOrderOccupied";
    HSKStatCodeType["OutOfServiceVacant"] = "OutOfServiceVacant";
    HSKStatCodeType["OutOfServiceAssigned"] = "OutOfServiceAssigned";
    HSKStatCodeType["OutOfServiceOccupied"] = "OutOfServiceOccupied";
    HSKStatCodeType["QueueRooms"] = "QueueRooms";
    HSKStatCodeType["TurndownRequired"] = "TurndownRequired";
    HSKStatCodeType["TurndownNotRequired"] = "TurndownNotRequired";
    HSKStatCodeType["TurndownCompletedRequired"] = "TurndownCompletedRequired";
    HSKStatCodeType["AdultsInHouse"] = "AdultsInHouse";
    HSKStatCodeType["ChildrenInHouse"] = "ChildrenInHouse";
    HSKStatCodeType["AdultsExpectedCheckedOut"] = "AdultsExpectedCheckedOut";
    HSKStatCodeType["ChildrenExpectedCheckedOut"] = "ChildrenExpectedCheckedOut";
    HSKStatCodeType["AdultsDeparted"] = "AdultsDeparted";
    HSKStatCodeType["ChildrenDeparted"] = "ChildrenDeparted";
    HSKStatCodeType["InHouseRooms"] = "InHouseRooms";
    HSKStatCodeType["InHouse"] = "InHouse";
    HSKStatCodeType["MaxOccupancyPercentage"] = "MaxOccupancyPercentage";
    HSKStatCodeType["Stayover"] = "Stayover";
    HSKStatCodeType["TotalRoomsReserved"] = "TotalRoomsReserved";
    HSKStatCodeType["RevPar"] = "RevPar";
    HSKStatCodeType["SkipRooms"] = "SkipRooms";
    HSKStatCodeType["SleepRooms"] = "SleepRooms";
    HSKStatCodeType["HouseUseArrivalRooms"] = "HouseUseArrivalRooms";
    HSKStatCodeType["HouseUseArrivalPersons"] = "HouseUseArrivalPersons";
    HSKStatCodeType["AverageCheckInTime"] = "AverageCheckInTime";
    HSKStatCodeType["CurrentAveWaitTime"] = "CurrentAveWaitTime";
    HSKStatCodeType["CheckedInsTotal"] = "CheckedInsTotal";
    HSKStatCodeType["ExpectedCheckInsTotal"] = "ExpectedCheckInsTotal";
    HSKStatCodeType["CheckedOutsTotal"] = "CheckedOutsTotal";
    HSKStatCodeType["ExpectedCheckOutsTotal"] = "ExpectedCheckOutsTotal";
    HSKStatCodeType["ScheduledCheckOutsTotal"] = "ScheduledCheckOutsTotal";
    HSKStatCodeType["RoomMaintenanceResolvedTotal"] = "RoomMaintenanceResolvedTotal";
    HSKStatCodeType["RoomMaintenanceUnResolvedTotal"] = "RoomMaintenanceUnResolvedTotal";
    HSKStatCodeType["PreRegisteredTotal"] = "PreRegisteredTotal";
    HSKStatCodeType["VIPPreRegisteredTotal"] = "VIPPreRegisteredTotal";
    HSKStatCodeType["OpenFolioTotal"] = "OpenFolioTotal";
    HSKStatCodeType["TurndownTotal"] = "TurndownTotal";
    HSKStatCodeType["VIPTurndownTotal"] = "VIPTurndownTotal";
    HSKStatCodeType["VIPGuestsArriving"] = "VIPGuestsArriving";
    HSKStatCodeType["VIPGuestsDeparting"] = "VIPGuestsDeparting";
    HSKStatCodeType["VIPGuestsTotal"] = "VIPGuestsTotal";
    HSKStatCodeType["IndividualAdvanceCheckedInCurrent"] = "IndividualAdvanceCheckedInCurrent";
    HSKStatCodeType["BlockAdvanceCheckedInCurrent"] = "BlockAdvanceCheckedInCurrent";
    HSKStatCodeType["IndividualAdvanceCheckedInInhouse"] = "IndividualAdvanceCheckedInInhouse";
    HSKStatCodeType["BlockAdvanceCheckedInInhouse"] = "BlockAdvanceCheckedInInhouse";
    HSKStatCodeType["IndividualAdvanceCheckedInTotal"] = "IndividualAdvanceCheckedInTotal";
    HSKStatCodeType["BlockAdvanceCheckedInTotal"] = "BlockAdvanceCheckedInTotal";
    HSKStatCodeType["InHouseBlocksTotal"] = "InHouseBlocksTotal";
    HSKStatCodeType["CancellationsTotal"] = "CancellationsTotal";
    HSKStatCodeType["NewReservationsTotal"] = "NewReservationsTotal";
    HSKStatCodeType["ArrivalResvs"] = "ArrivalResvs";
    HSKStatCodeType["ArrivalVIPResvs"] = "ArrivalVIPResvs";
    HSKStatCodeType["ArrivalMemberResvs"] = "ArrivalMemberResvs";
    HSKStatCodeType["ArrivalUnallocResvs"] = "ArrivalUnallocResvs";
    HSKStatCodeType["ArrivalManualAssgnResvs"] = "ArrivalManualAssgnResvs";
    HSKStatCodeType["ArrivalAIAssgnResvs"] = "ArrivalAIAssgnResvs";
    HSKStatCodeType["ArrivalAIUpgResvs"] = "ArrivalAIUpgResvs";
    HSKStatCodeType["ArrivalAIAssgnVIPResvs"] = "ArrivalAIAssgnVIPResvs";
    HSKStatCodeType["ArrivalAIAssgnMemberResvs"] = "ArrivalAIAssgnMemberResvs";
    HSKStatCodeType["ArrivalAIAssgnOverridden"] = "ArrivalAIAssgnOverridden";
})(HSKStatCodeType = exports.HSKStatCodeType || (exports.HSKStatCodeType = {}));
/** Task Sheet classification. */
var TaskSheetType;
(function (TaskSheetType) {
    TaskSheetType["NoServiceRequired"] = "NoServiceRequired";
    TaskSheetType["DoNotDisturb"] = "DoNotDisturb";
    TaskSheetType["ManuallyCreated"] = "ManuallyCreated";
    TaskSheetType["AutomaticGeneration"] = "AutomaticGeneration";
    TaskSheetType["Isolated"] = "Isolated";
    TaskSheetType["ExtraRooms"] = "ExtraRooms";
})(TaskSheetType = exports.TaskSheetType || (exports.TaskSheetType = {}));
/** Possible Rate plan rating values. */
var RatePlanRatingType;
(function (RatePlanRatingType) {
    RatePlanRatingType["MostImportant"] = "MostImportant";
    RatePlanRatingType["Important"] = "Important";
    RatePlanRatingType["SomewhatImportant"] = "SomewhatImportant";
    RatePlanRatingType["LessImportant"] = "LessImportant";
    RatePlanRatingType["LeastImportant"] = "LeastImportant";
    RatePlanRatingType["NoValueSet"] = "NoValueSet";
})(RatePlanRatingType = exports.RatePlanRatingType || (exports.RatePlanRatingType = {}));
/** Room Reservation status types used in housekeeping. These may be different from the actual reservation statuses as these relate to the current reservation for the room. */
var HousekeepingRoomReservationStatusType;
(function (HousekeepingRoomReservationStatusType) {
    HousekeepingRoomReservationStatusType["Arrival"] = "Arrival";
    HousekeepingRoomReservationStatusType["Arrived"] = "Arrived";
    HousekeepingRoomReservationStatusType["DayUse"] = "DayUse";
    HousekeepingRoomReservationStatusType["DueOut"] = "DueOut";
    HousekeepingRoomReservationStatusType["Departed"] = "Departed";
    HousekeepingRoomReservationStatusType["NotReserved"] = "NotReserved";
    HousekeepingRoomReservationStatusType["StayOver"] = "StayOver";
})(HousekeepingRoomReservationStatusType = exports.HousekeepingRoomReservationStatusType || (exports.HousekeepingRoomReservationStatusType = {}));
/** Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. */
var HousekeepingRoomStatusType;
(function (HousekeepingRoomStatusType) {
    HousekeepingRoomStatusType["Clean"] = "Clean";
    HousekeepingRoomStatusType["Dirty"] = "Dirty";
    HousekeepingRoomStatusType["Pickup"] = "Pickup";
    HousekeepingRoomStatusType["Inspected"] = "Inspected";
    HousekeepingRoomStatusType["OutOfOrder"] = "OutOfOrder";
    HousekeepingRoomStatusType["OutOfService"] = "OutOfService";
})(HousekeepingRoomStatusType = exports.HousekeepingRoomStatusType || (exports.HousekeepingRoomStatusType = {}));
/** Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. */
var FrontOfficeRoomStatusType;
(function (FrontOfficeRoomStatusType) {
    FrontOfficeRoomStatusType["Vacant"] = "Vacant";
    FrontOfficeRoomStatusType["Occupied"] = "Occupied";
})(FrontOfficeRoomStatusType = exports.FrontOfficeRoomStatusType || (exports.FrontOfficeRoomStatusType = {}));
/** Possible values for the Guest Service Status. */
var GuestHousekeepingServiceRequestType;
(function (GuestHousekeepingServiceRequestType) {
    GuestHousekeepingServiceRequestType["DoNotDisturb"] = "DoNotDisturb";
    GuestHousekeepingServiceRequestType["MakeUpRoom"] = "MakeUpRoom";
    GuestHousekeepingServiceRequestType["NoStatusSelected"] = "NoStatusSelected";
})(GuestHousekeepingServiceRequestType = exports.GuestHousekeepingServiceRequestType || (exports.GuestHousekeepingServiceRequestType = {}));
/** Simple type for Room Condition assignment type. Valid values are Available and NotAvailable Only. */
var RoomConditionAssigmentType;
(function (RoomConditionAssigmentType) {
    RoomConditionAssigmentType["Available"] = "Available";
    RoomConditionAssigmentType["NotAvailable"] = "NotAvailable";
})(RoomConditionAssigmentType = exports.RoomConditionAssigmentType || (exports.RoomConditionAssigmentType = {}));
/** Simple type for discrepant room status instructions to be used in requests for fetching housekeeping and front office room discrepancy. Valid values are Sleep, Skip, Person Discrepancy, Due Out Only. */
var RoomDiscrepancyType;
(function (RoomDiscrepancyType) {
    RoomDiscrepancyType["Sleep"] = "Sleep";
    RoomDiscrepancyType["Skip"] = "Skip";
    RoomDiscrepancyType["PersonDiscrepancy"] = "PersonDiscrepancy";
})(RoomDiscrepancyType = exports.RoomDiscrepancyType || (exports.RoomDiscrepancyType = {}));
/** Person's name in an external system. */
var PersonNameTypeType;
(function (PersonNameTypeType) {
    PersonNameTypeType["Primary"] = "Primary";
    PersonNameTypeType["Alternate"] = "Alternate";
    PersonNameTypeType["Incognito"] = "Incognito";
    PersonNameTypeType["External"] = "External";
    PersonNameTypeType["Phonetic"] = "Phonetic";
})(PersonNameTypeType = exports.PersonNameTypeType || (exports.PersonNameTypeType = {}));
/** Possible values for the Status of a Servicing Attendant. */
var ServicingAttendantStatusType;
(function (ServicingAttendantStatusType) {
    ServicingAttendantStatusType["Standby"] = "Standby";
    ServicingAttendantStatusType["Break"] = "Break";
    ServicingAttendantStatusType["Working"] = "Working";
    ServicingAttendantStatusType["Completed"] = "Completed";
})(ServicingAttendantStatusType = exports.ServicingAttendantStatusType || (exports.ServicingAttendantStatusType = {}));
/** Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. */
var TurndownStatusType;
(function (TurndownStatusType) {
    TurndownStatusType["Required"] = "Required";
    TurndownStatusType["NotRequired"] = "NotRequired";
    TurndownStatusType["Compeleted"] = "Compeleted";
})(TurndownStatusType = exports.TurndownStatusType || (exports.TurndownStatusType = {}));
/** Guest has been anonymized. */
var AnonymizationStatusType;
(function (AnonymizationStatusType) {
    AnonymizationStatusType["Requested"] = "Requested";
    AnonymizationStatusType["Anonymized"] = "Anonymized";
})(AnonymizationStatusType = exports.AnonymizationStatusType || (exports.AnonymizationStatusType = {}));
var NameTypeType;
(function (NameTypeType) {
    NameTypeType["Guest"] = "Guest";
    NameTypeType["Company"] = "Company";
    NameTypeType["Agent"] = "Agent";
    NameTypeType["Contact"] = "Contact";
    NameTypeType["Source"] = "Source";
    NameTypeType["Group"] = "Group";
    NameTypeType["Employee"] = "Employee";
    NameTypeType["Hotel"] = "Hotel";
    NameTypeType["Purge"] = "Purge";
})(NameTypeType = exports.NameTypeType || (exports.NameTypeType = {}));
var ResProfileTypeType;
(function (ResProfileTypeType) {
    ResProfileTypeType["Guest"] = "Guest";
    ResProfileTypeType["Company"] = "Company";
    ResProfileTypeType["Group"] = "Group";
    ResProfileTypeType["TravelAgent"] = "TravelAgent";
    ResProfileTypeType["Source"] = "Source";
    ResProfileTypeType["ReservationContact"] = "ReservationContact";
    ResProfileTypeType["BillingContact"] = "BillingContact";
    ResProfileTypeType["Addressee"] = "Addressee";
})(ResProfileTypeType = exports.ResProfileTypeType || (exports.ResProfileTypeType = {}));
/** This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. */
var CardTypeType;
(function (CardTypeType) {
    CardTypeType["Ab"] = "Ab";
    CardTypeType["Am"] = "Am";
    CardTypeType["Ax"] = "Ax";
    CardTypeType["Cb"] = "Cb";
    CardTypeType["Dc"] = "Dc";
    CardTypeType["Ds"] = "Ds";
    CardTypeType["Dt"] = "Dt";
    CardTypeType["Ec"] = "Ec";
    CardTypeType["Er"] = "Er";
    CardTypeType["Jc"] = "Jc";
    CardTypeType["Jl"] = "Jl";
    CardTypeType["Mc"] = "Mc";
    CardTypeType["Nb"] = "Nb";
    CardTypeType["So"] = "So";
    CardTypeType["St"] = "St";
    CardTypeType["Sw"] = "Sw";
    CardTypeType["Va"] = "Va";
    CardTypeType["Xy"] = "Xy";
    CardTypeType["Zz"] = "Zz";
    CardTypeType["Cp"] = "Cp";
    CardTypeType["Cu"] = "Cu";
})(CardTypeType = exports.CardTypeType || (exports.CardTypeType = {}));
var CardProcessingType;
(function (CardProcessingType) {
    CardProcessingType["Eft"] = "Eft";
    CardProcessingType["Manual"] = "Manual";
})(CardProcessingType = exports.CardProcessingType || (exports.CardProcessingType = {}));
/** Simple type for indicating if credit card number is tokenized. */
var CardNumberTypeType;
(function (CardNumberTypeType) {
    CardNumberTypeType["CardNumber"] = "CardNumber";
    CardNumberTypeType["Token"] = "Token";
})(CardNumberTypeType = exports.CardNumberTypeType || (exports.CardNumberTypeType = {}));
/** Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. */
var ReservationAllowedActionType;
(function (ReservationAllowedActionType) {
    ReservationAllowedActionType["Cancel"] = "Cancel";
    ReservationAllowedActionType["Move"] = "Move";
    ReservationAllowedActionType["PreCharge"] = "PreCharge";
    ReservationAllowedActionType["PostCharge"] = "PostCharge";
    ReservationAllowedActionType["FacilitySchedule"] = "FacilitySchedule";
    ReservationAllowedActionType["Upsell"] = "Upsell";
    ReservationAllowedActionType["PreCheckIn"] = "PreCheckIn";
    ReservationAllowedActionType["PostToNoShowCancel"] = "PostToNoShowCancel";
    ReservationAllowedActionType["NoShow"] = "NoShow";
    ReservationAllowedActionType["NameChange"] = "NameChange";
    ReservationAllowedActionType["Discount"] = "Discount";
    ReservationAllowedActionType["EnrollToPrimaryMembership"] = "EnrollToPrimaryMembership";
    ReservationAllowedActionType["EnrollInProgress"] = "EnrollInProgress";
})(ReservationAllowedActionType = exports.ReservationAllowedActionType || (exports.ReservationAllowedActionType = {}));
/** XML Posting Interface */
var HotelInterfaceTypeType;
(function (HotelInterfaceTypeType) {
    HotelInterfaceTypeType["Bms"] = "Bms";
    HotelInterfaceTypeType["Cas"] = "Cas";
    HotelInterfaceTypeType["Ccw"] = "Ccw";
    HotelInterfaceTypeType["Dls"] = "Dls";
    HotelInterfaceTypeType["Eft"] = "Eft";
    HotelInterfaceTypeType["Exp"] = "Exp";
    HotelInterfaceTypeType["Mak"] = "Mak";
    HotelInterfaceTypeType["Mbs"] = "Mbs";
    HotelInterfaceTypeType["Msc"] = "Msc";
    HotelInterfaceTypeType["Pbx"] = "Pbx";
    HotelInterfaceTypeType["Pos"] = "Pos";
    HotelInterfaceTypeType["Svs"] = "Svs";
    HotelInterfaceTypeType["Tik"] = "Tik";
    HotelInterfaceTypeType["Vid"] = "Vid";
    HotelInterfaceTypeType["Vms"] = "Vms";
    HotelInterfaceTypeType["Www"] = "Www";
    HotelInterfaceTypeType["Xml"] = "Xml";
})(HotelInterfaceTypeType = exports.HotelInterfaceTypeType || (exports.HotelInterfaceTypeType = {}));
/** Status of the Hotel Interface either STOPPED or RUNNING. */
var HotelInterfaceStatusType;
(function (HotelInterfaceStatusType) {
    HotelInterfaceStatusType["Stopped"] = "Stopped";
    HotelInterfaceStatusType["Running"] = "Running";
    HotelInterfaceStatusType["Waiting"] = "Waiting";
    HotelInterfaceStatusType["StopInitiated"] = "StopInitiated";
    HotelInterfaceStatusType["StartInitiated"] = "StartInitiated";
    HotelInterfaceStatusType["RebootInitiated"] = "RebootInitiated";
    HotelInterfaceStatusType["Other"] = "Other";
})(HotelInterfaceStatusType = exports.HotelInterfaceStatusType || (exports.HotelInterfaceStatusType = {}));
/** Enum to denote the Status of Readiness messages sent to Guest Devices. */
var CommunicationStatusType;
(function (CommunicationStatusType) {
    CommunicationStatusType["Pending"] = "Pending";
    CommunicationStatusType["Completed"] = "Completed";
    CommunicationStatusType["Failed"] = "Failed";
    CommunicationStatusType["Sent"] = "Sent";
    CommunicationStatusType["Received"] = "Received";
    CommunicationStatusType["Cancelled"] = "Cancelled";
    CommunicationStatusType["PendingAvailability"] = "PendingAvailability";
})(CommunicationStatusType = exports.CommunicationStatusType || (exports.CommunicationStatusType = {}));
/** This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. */
var PMSResStatusType;
(function (PMSResStatusType) {
    PMSResStatusType["Reserved"] = "Reserved";
    PMSResStatusType["Requested"] = "Requested";
    PMSResStatusType["NoShow"] = "NoShow";
    PMSResStatusType["Cancelled"] = "Cancelled";
    PMSResStatusType["InHouse"] = "InHouse";
    PMSResStatusType["CheckedOut"] = "CheckedOut";
    PMSResStatusType["Waitlisted"] = "Waitlisted";
    PMSResStatusType["DueIn"] = "DueIn";
    PMSResStatusType["DueOut"] = "DueOut";
    PMSResStatusType["Walkin"] = "Walkin";
    PMSResStatusType["PendingCheckout"] = "PendingCheckout";
})(PMSResStatusType = exports.PMSResStatusType || (exports.PMSResStatusType = {}));
/** Indicates any Updates/Changes on the reservation as well as Reservation Cancellation are not allowed. */
var ResAccessRestrictionType;
(function (ResAccessRestrictionType) {
    ResAccessRestrictionType["Change"] = "Change";
    ResAccessRestrictionType["Cancel"] = "Cancel";
    ResAccessRestrictionType["ChangeOrCancel"] = "ChangeOrCancel";
})(ResAccessRestrictionType = exports.ResAccessRestrictionType || (exports.ResAccessRestrictionType = {}));
var CommissionPayoutToType;
(function (CommissionPayoutToType) {
    CommissionPayoutToType["TravelAgent"] = "TravelAgent";
    CommissionPayoutToType["Source"] = "Source";
    CommissionPayoutToType["TravelAgentSource"] = "TravelAgentSource";
    CommissionPayoutToType["None"] = "None";
})(CommissionPayoutToType = exports.CommissionPayoutToType || (exports.CommissionPayoutToType = {}));
var MasterInfoCodeDetailType;
(function (MasterInfoCodeDetailType) {
    MasterInfoCodeDetailType["LongDescription"] = "LongDescription";
    MasterInfoCodeDetailType["ShortDescription"] = "ShortDescription";
})(MasterInfoCodeDetailType = exports.MasterInfoCodeDetailType || (exports.MasterInfoCodeDetailType = {}));
var MasterType;
(function (MasterType) {
    MasterType["Country"] = "Country";
    MasterType["State"] = "State";
    MasterType["AddressType"] = "AddressType";
    MasterType["PhoneType"] = "PhoneType";
    MasterType["RateCategory"] = "RateCategory";
    MasterType["CalculationRule"] = "CalculationRule";
    MasterType["PostingRythym"] = "PostingRythym";
    MasterType["BillingInstruction"] = "BillingInstruction";
    MasterType["TransactionCode"] = "TransactionCode";
    MasterType["DisplaySet"] = "DisplaySet";
    MasterType["MailingActions"] = "MailingActions";
    MasterType["DistanceType"] = "DistanceType";
    MasterType["District"] = "District";
    MasterType["Territory"] = "Territory";
    MasterType["FiscalRegion"] = "FiscalRegion";
    MasterType["InventoryItem"] = "InventoryItem";
    MasterType["Package"] = "Package";
    MasterType["RoomFeaturePreference"] = "RoomFeaturePreference";
    MasterType["SpecialPreference"] = "SpecialPreference";
    MasterType["Promotion"] = "Promotion";
    MasterType["Department"] = "Department";
    MasterType["ReservationPreference"] = "ReservationPreference";
    MasterType["FacilityTask"] = "FacilityTask";
    MasterType["RoomType"] = "RoomType";
    MasterType["RateCode"] = "RateCode";
    MasterType["OutOfOrderReason"] = "OutOfOrderReason";
    MasterType["Block"] = "Block";
})(MasterType = exports.MasterType || (exports.MasterType = {}));
/** Simple type for fetch checked in reservation instructions that can be used in requests for partial operations. */
var CheckedInReservationInstructionType;
(function (CheckedInReservationInstructionType) {
    CheckedInReservationInstructionType["ReservationDetail"] = "ReservationDetail";
})(CheckedInReservationInstructionType = exports.CheckedInReservationInstructionType || (exports.CheckedInReservationInstructionType = {}));
/** Used to indicate if an amount is inclusive or exclusive of other charges, such as taxes. */
var AmountDeterminationType;
(function (AmountDeterminationType) {
    AmountDeterminationType["Inclusive"] = "Inclusive";
    AmountDeterminationType["Exclusive"] = "Exclusive";
})(AmountDeterminationType = exports.AmountDeterminationType || (exports.AmountDeterminationType = {}));
/** The type of Rate Amount Change to be done on the Sharer reservation. This can be FULL -> Full Rate for each Sharer. SPLIT-> Split the Rate amount between Sharer Reservations. ENTIRE -> This Sharer will get the total amount of the rate code for all the Sharer Reservations. */
var ShareDistributionInstructionType;
(function (ShareDistributionInstructionType) {
    ShareDistributionInstructionType["Full"] = "Full";
    ShareDistributionInstructionType["Entire"] = "Entire";
    ShareDistributionInstructionType["Split"] = "Split";
    ShareDistributionInstructionType["CustomSplit"] = "CustomSplit";
})(ShareDistributionInstructionType = exports.ShareDistributionInstructionType || (exports.ShareDistributionInstructionType = {}));
/** An enumeration of image styles. */
var ImageStyleType;
(function (ImageStyleType) {
    ImageStyleType["Full"] = "Full";
    ImageStyleType["Thumbnail"] = "Thumbnail";
    ImageStyleType["Icon"] = "Icon";
    ImageStyleType["Square"] = "Square";
    ImageStyleType["Banner"] = "Banner";
    ImageStyleType["Button"] = "Button";
    ImageStyleType["Lowres"] = "Lowres";
    ImageStyleType["Highres"] = "Highres";
})(ImageStyleType = exports.ImageStyleType || (exports.ImageStyleType = {}));
/** Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc.. */
var ProfileDeliveryModuleType;
(function (ProfileDeliveryModuleType) {
    ProfileDeliveryModuleType["EfolioExport"] = "EfolioExport";
})(ProfileDeliveryModuleType = exports.ProfileDeliveryModuleType || (exports.ProfileDeliveryModuleType = {}));
/** The earning preference of a membership, it depends on the type of property. eg. when the property is a airline it should be Miles, other than Points. */
var MembershipEarningPreferenceType;
(function (MembershipEarningPreferenceType) {
    MembershipEarningPreferenceType["Points"] = "Points";
    MembershipEarningPreferenceType["Miles"] = "Miles";
})(MembershipEarningPreferenceType = exports.MembershipEarningPreferenceType || (exports.MembershipEarningPreferenceType = {}));
/** Do not upgrade membership. The membership may be downgraded. */
var TierAdministrationType;
(function (TierAdministrationType) {
    TierAdministrationType["Disabled"] = "Disabled";
    TierAdministrationType["NoUpgrade"] = "NoUpgrade";
})(TierAdministrationType = exports.TierAdministrationType || (exports.TierAdministrationType = {}));
/** Do not downgrade membership when the next downgrade process runs. When the downgrade process runs, the membership will be automatically set to Grace. */
var DowngradeType;
(function (DowngradeType) {
    DowngradeType["Grace"] = "Grace";
    DowngradeType["Never"] = "Never";
    DowngradeType["Period"] = "Period";
})(DowngradeType = exports.DowngradeType || (exports.DowngradeType = {}));
/** Request to re issue a new card. */
var CardReIssueType;
(function (CardReIssueType) {
    CardReIssueType["Pending"] = "Pending";
    CardReIssueType["NotApplicable"] = "NotApplicable";
    CardReIssueType["Requested"] = "Requested";
})(CardReIssueType = exports.CardReIssueType || (exports.CardReIssueType = {}));
var ProfileStatusType;
(function (ProfileStatusType) {
    ProfileStatusType["Active"] = "Active";
    ProfileStatusType["Inactive"] = "Inactive";
})(ProfileStatusType = exports.ProfileStatusType || (exports.ProfileStatusType = {}));
/** The types of Profile handled by the web service. */
var ProfileTypeType;
(function (ProfileTypeType) {
    ProfileTypeType["Guest"] = "Guest";
    ProfileTypeType["Agent"] = "Agent";
    ProfileTypeType["Company"] = "Company";
    ProfileTypeType["Group"] = "Group";
    ProfileTypeType["Source"] = "Source";
    ProfileTypeType["Employee"] = "Employee";
    ProfileTypeType["Hotel"] = "Hotel";
    ProfileTypeType["Vendor"] = "Vendor";
    ProfileTypeType["Contact"] = "Contact";
    ProfileTypeType["Purge"] = "Purge";
    ProfileTypeType["BusinessHeader"] = "BusinessHeader";
    ProfileTypeType["BillingAccount"] = "BillingAccount";
    ProfileTypeType["Activity"] = "Activity";
    ProfileTypeType["Potential"] = "Potential";
    ProfileTypeType["Account"] = "Account";
})(ProfileTypeType = exports.ProfileTypeType || (exports.ProfileTypeType = {}));
/** Simple types for Shared level. */
var ProfileSharedLevelType;
(function (ProfileSharedLevelType) {
    ProfileSharedLevelType["Global"] = "Global";
    ProfileSharedLevelType["Property"] = "Property";
    ProfileSharedLevelType["Cro"] = "Cro";
})(ProfileSharedLevelType = exports.ProfileSharedLevelType || (exports.ProfileSharedLevelType = {}));
/** Check */
var CommissionPaymentMethods;
(function (CommissionPaymentMethods) {
    CommissionPaymentMethods["Cent"] = "Cent";
    CommissionPaymentMethods["Eft"] = "Eft";
    CommissionPaymentMethods["Chk"] = "Chk";
})(CommissionPaymentMethods = exports.CommissionPaymentMethods || (exports.CommissionPaymentMethods = {}));
/** Indicates that OPERA E-Certificate is available for a specific list of hotels. */
var ECertificateScopeType;
(function (ECertificateScopeType) {
    ECertificateScopeType["Global"] = "Global";
    ECertificateScopeType["Hotel"] = "Hotel";
    ECertificateScopeType["MultiHotel"] = "MultiHotel";
})(ECertificateScopeType = exports.ECertificateScopeType || (exports.ECertificateScopeType = {}));
/** Indicates that OPERA E-Certificate is consumed by hotelPMS. */
var ECertificateConsumeSourceType;
(function (ECertificateConsumeSourceType) {
    ECertificateConsumeSourceType["Central"] = "Central";
    ECertificateConsumeSourceType["Web"] = "Web";
    ECertificateConsumeSourceType["Hotel"] = "Hotel";
})(ECertificateConsumeSourceType = exports.ECertificateConsumeSourceType || (exports.ECertificateConsumeSourceType = {}));
/** Indicates that OPERA E-Certificate is reserved. */
var ECertificateStatusType;
(function (ECertificateStatusType) {
    ECertificateStatusType["Cancelled"] = "Cancelled";
    ECertificateStatusType["Consumed"] = "Consumed";
    ECertificateStatusType["Deleted"] = "Deleted";
    ECertificateStatusType["Expired"] = "Expired";
    ECertificateStatusType["Issued"] = "Issued";
    ECertificateStatusType["Reserved"] = "Reserved";
})(ECertificateStatusType = exports.ECertificateStatusType || (exports.ECertificateStatusType = {}));
/** Indicates that OPERA E-Certificate is issued by external system. */
var ECertificateIssueSourceType;
(function (ECertificateIssueSourceType) {
    ECertificateIssueSourceType["Opera"] = "Opera";
    ECertificateIssueSourceType["Web"] = "Web";
    ECertificateIssueSourceType["Interface"] = "Interface";
})(ECertificateIssueSourceType = exports.ECertificateIssueSourceType || (exports.ECertificateIssueSourceType = {}));
/** Indicates that guest purchased OPERA E-Certificate. */
var ECertificateIssueType;
(function (ECertificateIssueType) {
    ECertificateIssueType["Assigned"] = "Assigned";
    ECertificateIssueType["OptedIn"] = "OptedIn";
    ECertificateIssueType["Purchased"] = "Purchased";
})(ECertificateIssueType = exports.ECertificateIssueType || (exports.ECertificateIssueType = {}));
/** Indicates the Room Rate is not available due to unavailability of enough items for the rate code. */
var RoomRateAvailReasonType;
(function (RoomRateAvailReasonType) {
    RoomRateAvailReasonType["Available"] = "Available";
    RoomRateAvailReasonType["Restricted"] = "Restricted";
    RoomRateAvailReasonType["RestrictedDueToInventory"] = "RestrictedDueToInventory";
    RoomRateAvailReasonType["RestrictedDueToOccupancy"] = "RestrictedDueToOccupancy";
    RoomRateAvailReasonType["RestrictedDueToItemInventory"] = "RestrictedDueToItemInventory";
})(RoomRateAvailReasonType = exports.RoomRateAvailReasonType || (exports.RoomRateAvailReasonType = {}));
var OwnerResTypeType;
(function (OwnerResTypeType) {
    OwnerResTypeType["Owner"] = "Owner";
    OwnerResTypeType["AuthorizedUser"] = "AuthorizedUser";
})(OwnerResTypeType = exports.OwnerResTypeType || (exports.OwnerResTypeType = {}));
var PrimaryShareTypeType;
(function (PrimaryShareTypeType) {
    PrimaryShareTypeType["Primary"] = "Primary";
    PrimaryShareTypeType["NonPrimary"] = "NonPrimary";
})(PrimaryShareTypeType = exports.PrimaryShareTypeType || (exports.PrimaryShareTypeType = {}));
/** Color configuration type. This color configuration provides a visual category of entities. */
var ColorType;
(function (ColorType) {
    ColorType["Red"] = "Red";
    ColorType["DarkRed"] = "DarkRed";
    ColorType["Green"] = "Green";
    ColorType["DarkGreen"] = "DarkGreen";
    ColorType["LightGreen"] = "LightGreen";
    ColorType["Orange"] = "Orange";
    ColorType["White"] = "White";
    ColorType["Yellow"] = "Yellow";
    ColorType["DarkYellow"] = "DarkYellow";
    ColorType["Purple"] = "Purple";
    ColorType["Brown"] = "Brown";
    ColorType["Gray"] = "Gray";
    ColorType["Aqua"] = "Aqua";
    ColorType["Chocolate"] = "Chocolate";
    ColorType["Blue"] = "Blue";
    ColorType["LightBlue"] = "LightBlue";
    ColorType["DarkBlue"] = "DarkBlue";
    ColorType["Cyan"] = "Cyan";
    ColorType["DarkCyan"] = "DarkCyan";
    ColorType["Magenta"] = "Magenta";
    ColorType["DarkMagenta"] = "DarkMagenta";
    ColorType["Black"] = "Black";
})(ColorType = exports.ColorType || (exports.ColorType = {}));
/** Indicates that this is electronic certificate. */
var AwardKindType;
(function (AwardKindType) {
    AwardKindType["Paper"] = "Paper";
    AwardKindType["ECertificate"] = "ECertificate";
})(AwardKindType = exports.AwardKindType || (exports.AwardKindType = {}));
/** Certificate is incentive. */
var ReservationCertificateType;
(function (ReservationCertificateType) {
    ReservationCertificateType["Reward"] = "Reward";
    ReservationCertificateType["Incentive"] = "Incentive";
})(ReservationCertificateType = exports.ReservationCertificateType || (exports.ReservationCertificateType = {}));
/** Point Saver reward. */
var RewardCertificateType;
(function (RewardCertificateType) {
    RewardCertificateType["Regular"] = "Regular";
    RewardCertificateType["StayAnytime"] = "StayAnytime";
    RewardCertificateType["PointSaver"] = "PointSaver";
})(RewardCertificateType = exports.RewardCertificateType || (exports.RewardCertificateType = {}));
/** Indicates that certificate is in use. */
var AwardStatusType;
(function (AwardStatusType) {
    AwardStatusType["Available"] = "Available";
    AwardStatusType["NotAvailable"] = "NotAvailable";
    AwardStatusType["InUse"] = "InUse";
})(AwardStatusType = exports.AwardStatusType || (exports.AwardStatusType = {}));
/** Flexible benefit award has been reimbursed. */
var FBAStatusType;
(function (FBAStatusType) {
    FBAStatusType["Ordered"] = "Ordered";
    FBAStatusType["Attached"] = "Attached";
    FBAStatusType["Posted"] = "Posted";
    FBAStatusType["Settled"] = "Settled";
    FBAStatusType["Reimbursed"] = "Reimbursed";
})(FBAStatusType = exports.FBAStatusType || (exports.FBAStatusType = {}));
/** Group to which the Track It items belong. */
var TrackItGroup;
(function (TrackItGroup) {
    TrackItGroup["Parcel"] = "Parcel";
    TrackItGroup["Valet"] = "Valet";
    TrackItGroup["Baggage"] = "Baggage";
    TrackItGroup["Lost"] = "Lost";
})(TrackItGroup = exports.TrackItGroup || (exports.TrackItGroup = {}));
/** Action status of the Track It item(Open, Closed). */
var ActionStatusType;
(function (ActionStatusType) {
    ActionStatusType["Open"] = "Open";
    ActionStatusType["Closed"] = "Closed";
})(ActionStatusType = exports.ActionStatusType || (exports.ActionStatusType = {}));
var ServiceRequestStatusType;
(function (ServiceRequestStatusType) {
    ServiceRequestStatusType["Open"] = "Open";
    ServiceRequestStatusType["PendingFollowUp"] = "PendingFollowUp";
    ServiceRequestStatusType["Closed"] = "Closed";
    ServiceRequestStatusType["DoNotDisturb"] = "DoNotDisturb";
    ServiceRequestStatusType["MakeUpRoom"] = "MakeUpRoom";
})(ServiceRequestStatusType = exports.ServiceRequestStatusType || (exports.ServiceRequestStatusType = {}));
/** Reload transaction. */
var PrepaidCardTrxTypeType;
(function (PrepaidCardTrxTypeType) {
    PrepaidCardTrxTypeType["Activate"] = "Activate";
    PrepaidCardTrxTypeType["Cancel"] = "Cancel";
    PrepaidCardTrxTypeType["Cashout"] = "Cashout";
    PrepaidCardTrxTypeType["Inquiry"] = "Inquiry";
    PrepaidCardTrxTypeType["Issue"] = "Issue";
    PrepaidCardTrxTypeType["Redeem"] = "Redeem";
    PrepaidCardTrxTypeType["Reload"] = "Reload";
})(PrepaidCardTrxTypeType = exports.PrepaidCardTrxTypeType || (exports.PrepaidCardTrxTypeType = {}));
/** Simple type for posting Rhythm types. */
var PostingRhythmType;
(function (PostingRhythmType) {
    PostingRhythmType["EveryNight"] = "EveryNight";
    PostingRhythmType["ArrivalNight"] = "ArrivalNight";
    PostingRhythmType["EveryXNightsStartingNightY"] = "EveryXNightsStartingNightY";
    PostingRhythmType["CertainNightsOfTheWeek"] = "CertainNightsOfTheWeek";
    PostingRhythmType["LastNight"] = "LastNight";
    PostingRhythmType["EveryNightExceptArrivalNight"] = "EveryNightExceptArrivalNight";
    PostingRhythmType["EveryNightExceptLast"] = "EveryNightExceptLast";
    PostingRhythmType["EveryNightExceptFirstAndLast"] = "EveryNightExceptFirstAndLast";
    PostingRhythmType["CustomStaySchedule"] = "CustomStaySchedule";
    PostingRhythmType["CustomNightSchedule"] = "CustomNightSchedule";
    PostingRhythmType["FloatingAllowancePerStay"] = "FloatingAllowancePerStay";
    PostingRhythmType["TicketPosting"] = "TicketPosting";
})(PostingRhythmType = exports.PostingRhythmType || (exports.PostingRhythmType = {}));
/** Simple type for package caluculation rules. */
var PackageCalculationRuleType;
(function (PackageCalculationRuleType) {
    PackageCalculationRuleType["FlatRate"] = "FlatRate";
    PackageCalculationRuleType["PerPerson"] = "PerPerson";
    PackageCalculationRuleType["PerAdult"] = "PerAdult";
    PackageCalculationRuleType["PerChild"] = "PerChild";
    PackageCalculationRuleType["PerRoom"] = "PerRoom";
})(PackageCalculationRuleType = exports.PackageCalculationRuleType || (exports.PackageCalculationRuleType = {}));
/** Sources of Products */
var ProductSourceType;
(function (ProductSourceType) {
    ProductSourceType["Reservation"] = "Reservation";
    ProductSourceType["RateHeader"] = "RateHeader";
    ProductSourceType["RateDetail"] = "RateDetail";
})(ProductSourceType = exports.ProductSourceType || (exports.ProductSourceType = {}));
/** Status which indicates that the Request of Comp Routing was declined */
var CompRoutingStatusType;
(function (CompRoutingStatusType) {
    CompRoutingStatusType["Request"] = "Request";
    CompRoutingStatusType["Comp"] = "Comp";
    CompRoutingStatusType["Declined"] = "Declined";
})(CompRoutingStatusType = exports.CompRoutingStatusType || (exports.CompRoutingStatusType = {}));
/** The type to indicate what revenue is to be used for calculating deposit/cancellation amounts. */
var DepositCancelRevenueType;
(function (DepositCancelRevenueType) {
    DepositCancelRevenueType["Rooms"] = "Rooms";
    DepositCancelRevenueType["Catering"] = "Catering";
    DepositCancelRevenueType["All"] = "All";
})(DepositCancelRevenueType = exports.DepositCancelRevenueType || (exports.DepositCancelRevenueType = {}));
/** Full Amount. */
var PolicyBasisTypeType;
(function (PolicyBasisTypeType) {
    PolicyBasisTypeType["FlatAmount"] = "FlatAmount";
    PolicyBasisTypeType["Percentage"] = "Percentage";
    PolicyBasisTypeType["Nights"] = "Nights";
    PolicyBasisTypeType["NightPercentage"] = "NightPercentage";
    PolicyBasisTypeType["FullAmount"] = "FullAmount";
})(PolicyBasisTypeType = exports.PolicyBasisTypeType || (exports.PolicyBasisTypeType = {}));
/** Indicates deadline offset unit type. */
var OffsetUnitType;
(function (OffsetUnitType) {
    OffsetUnitType["Year"] = "Year";
    OffsetUnitType["Month"] = "Month";
    OffsetUnitType["Day"] = "Day";
    OffsetUnitType["Hour"] = "Hour";
})(OffsetUnitType = exports.OffsetUnitType || (exports.OffsetUnitType = {}));
/** Enumeration of the different Linked Reservation Types. */
var LinkedReservationType;
(function (LinkedReservationType) {
    LinkedReservationType["Linked"] = "Linked";
    LinkedReservationType["Shared"] = "Shared";
    LinkedReservationType["Default"] = "Default";
})(LinkedReservationType = exports.LinkedReservationType || (exports.LinkedReservationType = {}));
var AlertAreaType;
(function (AlertAreaType) {
    AlertAreaType["CheckIn"] = "CheckIn";
    AlertAreaType["CheckOut"] = "CheckOut";
    AlertAreaType["Reservation"] = "Reservation";
    AlertAreaType["Billing"] = "Billing";
    AlertAreaType["InHouse"] = "InHouse";
})(AlertAreaType = exports.AlertAreaType || (exports.AlertAreaType = {}));
/** None of the Welcome Offer option is selected. */
var WelcomeOfferOptionsType;
(function (WelcomeOfferOptionsType) {
    WelcomeOfferOptionsType["BonusPoints"] = "BonusPoints";
    WelcomeOfferOptionsType["Ecoupons"] = "Ecoupons";
    WelcomeOfferOptionsType["Items"] = "Items";
    WelcomeOfferOptionsType["PostIt"] = "PostIt";
    WelcomeOfferOptionsType["NotSelected"] = "NotSelected";
})(WelcomeOfferOptionsType = exports.WelcomeOfferOptionsType || (exports.WelcomeOfferOptionsType = {}));
var ConfDeliveryMethod;
(function (ConfDeliveryMethod) {
    ConfDeliveryMethod["Print"] = "Print";
    ConfDeliveryMethod["Email"] = "Email";
    ConfDeliveryMethod["Fax"] = "Fax";
    ConfDeliveryMethod["Text"] = "Text";
    ConfDeliveryMethod["NotConfigured"] = "NotConfigured";
})(ConfDeliveryMethod = exports.ConfDeliveryMethod || (exports.ConfDeliveryMethod = {}));
var SentConfirmationStatus;
(function (SentConfirmationStatus) {
    SentConfirmationStatus["Pending"] = "Pending";
    SentConfirmationStatus["Succeeded"] = "Succeeded";
    SentConfirmationStatus["Failed"] = "Failed";
})(SentConfirmationStatus = exports.SentConfirmationStatus || (exports.SentConfirmationStatus = {}));
/** Yearly. */
var FixedChargeFrequencyType;
(function (FixedChargeFrequencyType) {
    FixedChargeFrequencyType["O"] = "O";
    FixedChargeFrequencyType["D"] = "D";
    FixedChargeFrequencyType["W"] = "W";
    FixedChargeFrequencyType["M"] = "M";
    FixedChargeFrequencyType["Q"] = "Q";
    FixedChargeFrequencyType["Y"] = "Y";
})(FixedChargeFrequencyType = exports.FixedChargeFrequencyType || (exports.FixedChargeFrequencyType = {}));
/** The type of Message for Guest Messages. */
var TypeOfMessageType;
(function (TypeOfMessageType) {
    TypeOfMessageType["Tm"] = "Tm";
    TypeOfMessageType["Vm"] = "Vm";
})(TypeOfMessageType = exports.TypeOfMessageType || (exports.TypeOfMessageType = {}));
/** Status of the Message. */
var MessageStatusType;
(function (MessageStatusType) {
    MessageStatusType["Mr"] = "Mr";
    MessageStatusType["Nr"] = "Nr";
})(MessageStatusType = exports.MessageStatusType || (exports.MessageStatusType = {}));
/** Reservation level. */
var TransactionDiversionRuleLevelType;
(function (TransactionDiversionRuleLevelType) {
    TransactionDiversionRuleLevelType["Property"] = "Property";
    TransactionDiversionRuleLevelType["Reservation"] = "Reservation";
})(TransactionDiversionRuleLevelType = exports.TransactionDiversionRuleLevelType || (exports.TransactionDiversionRuleLevelType = {}));
/** Indicates the rule is based on Minutes associated with the charge. */
var EntityType;
(function (EntityType) {
    EntityType["ThresholdCount"] = "ThresholdCount";
    EntityType["ThresholdQuantity"] = "ThresholdQuantity";
    EntityType["ThresholdMinutes"] = "ThresholdMinutes";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
/** Minimum required and complimentary values are applicable Per Stay. */
var ScopeType;
(function (ScopeType) {
    ScopeType["PerDay"] = "PerDay";
    ScopeType["PerStay"] = "PerStay";
})(ScopeType = exports.ScopeType || (exports.ScopeType = {}));
/** The rule type on which the Transaction Diversion Rule is based. If a reservation has any of the following code, Transaction Diversion rule gets active for that reservation */
var TransactionDiversionRuleTypeType;
(function (TransactionDiversionRuleTypeType) {
    TransactionDiversionRuleTypeType["Vip"] = "Vip";
    TransactionDiversionRuleTypeType["Membership"] = "Membership";
})(TransactionDiversionRuleTypeType = exports.TransactionDiversionRuleTypeType || (exports.TransactionDiversionRuleTypeType = {}));
var RequestActionType;
(function (RequestActionType) {
    RequestActionType["Create"] = "Create";
    RequestActionType["Remove"] = "Remove";
    RequestActionType["Query"] = "Query";
})(RequestActionType = exports.RequestActionType || (exports.RequestActionType = {}));
/** Enumeration of the different type of Ecertificate. */
var ECertificateClassficationType;
(function (ECertificateClassficationType) {
    ECertificateClassficationType["Promotion"] = "Promotion";
    ECertificateClassficationType["Award"] = "Award";
    ECertificateClassficationType["Benefit"] = "Benefit";
    ECertificateClassficationType["Other"] = "Other";
})(ECertificateClassficationType = exports.ECertificateClassficationType || (exports.ECertificateClassficationType = {}));
var NameValueDataTypeType;
(function (NameValueDataTypeType) {
    NameValueDataTypeType["String"] = "String";
    NameValueDataTypeType["Number"] = "Number";
    NameValueDataTypeType["Date"] = "Date";
    NameValueDataTypeType["Datetime"] = "Datetime";
    NameValueDataTypeType["Time"] = "Time";
    NameValueDataTypeType["Integer"] = "Integer";
})(NameValueDataTypeType = exports.NameValueDataTypeType || (exports.NameValueDataTypeType = {}));
var NameValueModuleType;
(function (NameValueModuleType) {
    NameValueModuleType["Reservation"] = "Reservation";
    NameValueModuleType["Folio"] = "Folio";
    NameValueModuleType["Profile"] = "Profile";
    NameValueModuleType["Fintrix"] = "Fintrix";
})(NameValueModuleType = exports.NameValueModuleType || (exports.NameValueModuleType = {}));
/** Custom Charge has already been Processed for this date within the reservation stay. */
var ExclusionReasonType;
(function (ExclusionReasonType) {
    ExclusionReasonType["NotConfigured"] = "NotConfigured";
    ExclusionReasonType["CustomChargeProcessed"] = "CustomChargeProcessed";
})(ExclusionReasonType = exports.ExclusionReasonType || (exports.ExclusionReasonType = {}));
/** Simple type for representing room key type. */
var RoomKeyType;
(function (RoomKeyType) {
    RoomKeyType["New"] = "New";
    RoomKeyType["Duplicate"] = "Duplicate";
    RoomKeyType["Lost"] = "Lost";
    RoomKeyType["OneShot"] = "OneShot";
    RoomKeyType["RoomMove"] = "RoomMove";
    RoomKeyType["ReEncode"] = "ReEncode";
    RoomKeyType["Remove"] = "Remove";
    RoomKeyType["ModifyStay"] = "ModifyStay";
})(RoomKeyType = exports.RoomKeyType || (exports.RoomKeyType = {}));
/** Key card types. */
var KeyCardType;
(function (KeyCardType) {
    KeyCardType["Mifare1K"] = "Mifare1K";
    KeyCardType["Mifare4K"] = "Mifare4K";
    KeyCardType["MifareUltralight"] = "MifareUltralight";
})(KeyCardType = exports.KeyCardType || (exports.KeyCardType = {}));
const axios_1 = __importDefault(require("axios"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
class HttpClient {
    constructor(_a = {}) {
        var { securityWorker, secure, format } = _a, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async (_a) => {
            var { secure, path, type, query, format, body } = _a, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
            const secureParams = ((typeof secure === 'boolean' ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = format || this.format || undefined;
            if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
                body = JSON.stringify(body);
            }
            return this.instance.request(Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (requestParams.headers || {})), (type && type !== ContentType.FormData ? { 'Content-Type': type } : {})), params: query, responseType: responseFormat, data: body, url: path }));
        };
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/fof/v1', axiosConfig.baseURL).toString() }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.instance.defaults), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, ((method && this.instance.defaults.headers[method.toLowerCase()]) || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === 'object' && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
}
exports.HttpClient = HttpClient;
/**
 * @title OPERA Cloud Front Desk Operations Service
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /fof/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.hotels = {
            /**
             * @description Use this API to return front office statistics for a specific hotel based on search criteria such as statisticsCode, hotelId, date, parameterNames, parameterValues, room Classes.<p><strong>OperationId:</strong>getFrontOfficeStatistics</p>
             *
             * @tags FOFStats
             * @name GetFrontOfficeStatistics
             * @summary Get front office statistics
             * @request GET:/hotels/{hotelId}/frontOfficeStatistics/{statisticsCode}
             */
            getFrontOfficeStatistics: (statisticsCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/frontOfficeStatistics/${statisticsCode}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This API is useful to retrieve statistics regarding front office operations <p><strong>OperationId:</strong>getFrontOfficeStatisticsWithDateRange</p>
             *
             * @tags FOFStats
             * @name GetFrontOfficeStatisticsWithDateRange
             * @summary Get front office Statistics
             * @request GET:/hotels/{hotelId}/frontOfficeStatisticsRange/{statisticsCode}
             */
            getFrontOfficeStatisticsWithDateRange: (statisticsCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/frontOfficeStatisticsRange/${statisticsCode}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description This Api will get the housekeeping statistics for your property. <p><strong>OperationId:</strong>getTaskSheetStatistics</p>
             *
             * @tags FOFStats
             * @name GetTaskSheetStatistics
             * @summary Get housekeeping statistics
             * @request GET:/hotels/{hotelId}/houseKeepingStatistics
             */
            getTaskSheetStatistics: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/houseKeepingStatistics`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to return reservation queue statistics for a specific property.<p><strong>OperationId:</strong>getReservationQueueStatistics</p>
             *
             * @tags FOFStats
             * @name GetReservationQueueStatistics
             * @summary Get hotel reservation queue statistics
             * @request GET:/hotels/{hotelId}/queueReservationsStatistics
             */
            getReservationQueueStatistics: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/queueReservationsStatistics`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to check in a guest reservation.  The reservation needs to be 'due in' status.  The API also provides an option to select an available room. <p><strong>OperationId:</strong>postCheckIn</p>
             *
             * @tags FrontDeskOperations
             * @name PostCheckIn
             * @summary Checks in a guest
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/checkIns
             */
            postCheckIn: (reservationId, hotelId, reservation, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/checkIns`, method: 'POST', body: reservation, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to retrieve any existing room key information for a reservation. <p><strong>OperationId:</strong>getRoomKeys</p>
             *
             * @tags FrontDeskOperations
             * @name GetRoomKeys
             * @summary Fetch the room keys
             * @request GET:/hotels/{hotelId}/reservations/{reservationId}/roomKeys
             */
            getRoomKeys: (reservationId, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/roomKeys`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description You can use this API to create a room key request for a reservation to the active Door Locking System Property Interface. <p><strong>OperationId:</strong>postRoomKey</p>
             *
             * @tags FrontDeskOperations
             * @name PostRoomKey
             * @summary Requests room key(s)
             * @request POST:/hotels/{hotelId}/reservations/{reservationId}/roomKeys
             */
            postRoomKey: (reservationId, hotelId, roomKey, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/reservations/${reservationId}/roomKeys`, method: 'POST', body: roomKey, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to return available rooms based on search criteria such as hotelId, hotelRoomStatus, roomType, roomFeatureCode,etc.<p><strong>OperationId:</strong>getHotelRooms</p>
             *
             * @tags FrontDeskOperations
             * @name GetHotelRooms
             * @summary Get hotel available rooms
             * @request GET:/hotels/{hotelId}/rooms
             */
            getHotelRooms: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/rooms`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
