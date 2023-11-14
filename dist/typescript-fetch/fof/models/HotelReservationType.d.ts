/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ActivityLookUpList } from './ActivityLookUpList';
import type { AdvanceCheckInType } from './AdvanceCheckInType';
import type { AlertsType } from './AlertsType';
import type { AssociatedResType } from './AssociatedResType';
import type { AttachmentsType } from './AttachmentsType';
import type { AwardsType } from './AwardsType';
import type { CallHistoryType } from './CallHistoryType';
import type { CateringResInfoType } from './CateringResInfoType';
import type { CommentInfoType } from './CommentInfoType';
import type { CompAuthorizerInfoType } from './CompAuthorizerInfoType';
import type { ConfirmationsType } from './ConfirmationsType';
import type { CustomChargeExemptionsType } from './CustomChargeExemptionsType';
import type { ECouponsType } from './ECouponsType';
import type { ExternalReferencesType } from './ExternalReferencesType';
import type { FixedChargesType } from './FixedChargesType';
import type { FoliosShortInfoType } from './FoliosShortInfoType';
import type { GuestMessagesType } from './GuestMessagesType';
import type { HotelReservationTracesType } from './HotelReservationTracesType';
import type { HotelReservationTypeCancellation } from './HotelReservationTypeCancellation';
import type { HotelReservationTypeReservationProfiles } from './HotelReservationTypeReservationProfiles';
import type { HotelReservationTypeTransactionDiversions } from './HotelReservationTypeTransactionDiversions';
import type { HotelReservationsType } from './HotelReservationsType';
import type { IndicatorsType } from './IndicatorsType';
import type { LinkedReservationsInfoType } from './LinkedReservationsInfoType';
import type { MembershipType } from './MembershipType';
import type { NameValueDetailType } from './NameValueDetailType';
import type { OverrideInstructionsType } from './OverrideInstructionsType';
import type { PMSResStatusType } from './PMSResStatusType';
import type { PreferenceTypeType } from './PreferenceTypeType';
import type { PrepaidCardsType } from './PrepaidCardsType';
import type { ResAccessRestrictionType } from './ResAccessRestrictionType';
import type { ResCashieringType } from './ResCashieringType';
import type { ResCommunicationType } from './ResCommunicationType';
import type { ResGuestAdditionalInfoType } from './ResGuestAdditionalInfoType';
import type { ResGuestType } from './ResGuestType';
import type { ResHousekeepingType } from './ResHousekeepingType';
import type { ResInventoryItemsType } from './ResInventoryItemsType';
import type { ResSharedGuestListType } from './ResSharedGuestListType';
import type { ResStatClassificationType } from './ResStatClassificationType';
import type { ReservationAllowedActionsType } from './ReservationAllowedActionsType';
import type { ReservationDisplayColorInfoType } from './ReservationDisplayColorInfoType';
import type { ReservationECertificatesType } from './ReservationECertificatesType';
import type { ReservationIdList } from './ReservationIdList';
import type { ReservationLocatorsType } from './ReservationLocatorsType';
import type { ReservationMembershipType } from './ReservationMembershipType';
import type { ReservationPackageType } from './ReservationPackageType';
import type { ReservationPaymentMethodsType } from './ReservationPaymentMethodsType';
import type { ReservationPoliciesType } from './ReservationPoliciesType';
import type { ReservationQueueInformationType } from './ReservationQueueInformationType';
import type { RoomStayType } from './RoomStayType';
import type { RoutingInfoListType } from './RoutingInfoListType';
import type { ServiceRequests } from './ServiceRequests';
import type { SourceOfSaleType } from './SourceOfSaleType';
import type { TicketsType } from './TicketsType';
import type { TrackItItemsType } from './TrackItItemsType';
import type { UserDefinedFieldsType } from './UserDefinedFieldsType';
import type { WaitlistResType } from './WaitlistResType';
/**
 * The Reservation class contains the current reservation being created or altered.
 * @export
 * @interface HotelReservationType
 */
export interface HotelReservationType {
    /**
     *
     * @type {ResAccessRestrictionType}
     * @memberof HotelReservationType
     */
    accessRestriction?: ResAccessRestrictionType;
    /**
     * Configurable Access Restriction Message for Excluded Block or Rate Code.
     * @type {string}
     * @memberof HotelReservationType
     */
    accessRestrictionMessage?: string;
    /**
     *
     * @type {ResGuestAdditionalInfoType}
     * @memberof HotelReservationType
     */
    additionalGuestInfo?: ResGuestAdditionalInfoType;
    /**
     *
     * @type {AdvanceCheckInType}
     * @memberof HotelReservationType
     */
    advanceCheckIn?: AdvanceCheckInType;
    /**
     *
     * @type {AlertsType}
     * @memberof HotelReservationType
     */
    alerts?: AlertsType;
    /**
     * Flag to allow auto checkin
     * @type {boolean}
     * @memberof HotelReservationType
     */
    allowAutoCheckin?: boolean;
    /**
     * Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    allowMobileCheckout?: boolean;
    /**
     * Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    allowMobileViewFolio?: boolean;
    /**
     * Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device . Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    allowPreRegistration?: boolean;
    /**
     *
     * @type {ReservationAllowedActionsType}
     * @memberof HotelReservationType
     */
    allowedActions?: ReservationAllowedActionsType;
    /**
     *
     * @type {AssociatedResType}
     * @memberof HotelReservationType
     */
    associatedReservations?: AssociatedResType;
    /**
     *
     * @type {AttachmentsType}
     * @memberof HotelReservationType
     */
    attachments?: AttachmentsType;
    /**
     * This flag will force to borrow from house if borrow required for number of rooms requested, this will only applicable when reservation is attached to a Block.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    autoBorrowFromHouse?: boolean;
    /**
     *
     * @type {CallHistoryType}
     * @memberof HotelReservationType
     */
    callHistory?: CallHistoryType;
    /**
     *
     * @type {HotelReservationTypeCancellation}
     * @memberof HotelReservationType
     */
    cancellation?: HotelReservationTypeCancellation;
    /**
     *
     * @type {ResCashieringType}
     * @memberof HotelReservationType
     */
    cashiering?: ResCashieringType;
    /**
     *
     * @type {CateringResInfoType}
     * @memberof HotelReservationType
     */
    catering?: CateringResInfoType;
    /**
     * This attribute represents Hotel charge card number. This number is generated automatically in OPERA when a reservation is created in OPERA. It is part of a functionality that provide the guest with the convenience of placing all their charges directly on their reservation folio.
     * @type {string}
     * @memberof HotelReservationType
     */
    chargeCardNumber?: string;
    /**
     * List of Notes for the Guest related to the reservation.
     * @type {Array<CommentInfoType>}
     * @memberof HotelReservationType
     */
    comments?: Array<CommentInfoType>;
    /**
     *
     * @type {CompAuthorizerInfoType}
     * @memberof HotelReservationType
     */
    compAuthorizer?: CompAuthorizerInfoType;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof HotelReservationType
     */
    computedReservationStatus?: PMSResStatusType;
    /**
     *
     * @type {ConfirmationsType}
     * @memberof HotelReservationType
     */
    confirmationLetters?: ConfirmationsType;
    /**
     * Business Date when the reservation was created.
     * @type {Date}
     * @memberof HotelReservationType
     */
    createBusinessDate?: Date;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof HotelReservationType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof HotelReservationType
     */
    creatorId?: string;
    /**
     *
     * @type {CustomChargeExemptionsType}
     * @memberof HotelReservationType
     */
    customChargeExemptionDetails?: CustomChargeExemptionsType;
    /**
     *
     * @type {NameValueDetailType}
     * @memberof HotelReservationType
     */
    customNameValueDetail?: NameValueDetailType;
    /**
     * Custom Reference to identify reservation.
     * @type {string}
     * @memberof HotelReservationType
     */
    customReference?: string;
    /**
     * The color to display this reservation on room grid displays.
     * @type {string}
     * @memberof HotelReservationType
     */
    displayColor?: string;
    /**
     *
     * @type {ReservationDisplayColorInfoType}
     * @memberof HotelReservationType
     */
    displayColorDetails?: ReservationDisplayColorInfoType;
    /**
     *
     * @type {ReservationECertificatesType}
     * @memberof HotelReservationType
     */
    eCertificates?: ReservationECertificatesType;
    /**
     *
     * @type {ECouponsType}
     * @memberof HotelReservationType
     */
    eCoupons?: ECouponsType;
    /**
     *
     * @type {boolean}
     * @memberof HotelReservationType
     */
    extSystemSync?: boolean;
    /**
     *
     * @type {ExternalReferencesType}
     * @memberof HotelReservationType
     */
    externalReferences?: ExternalReferencesType;
    /**
     *
     * @type {FixedChargesType}
     * @memberof HotelReservationType
     */
    fixedCharges?: FixedChargesType;
    /**
     *
     * @type {FoliosShortInfoType}
     * @memberof HotelReservationType
     */
    folios?: FoliosShortInfoType;
    /**
     * List of Notes for the Guest related to the profile.
     * @type {Array<CommentInfoType>}
     * @memberof HotelReservationType
     */
    guestComments?: Array<CommentInfoType>;
    /**
     * List of Memberships for the Guest related to the reservation.
     * @type {Array<MembershipType>}
     * @memberof HotelReservationType
     */
    guestMemberships?: Array<MembershipType>;
    /**
     *
     * @type {GuestMessagesType}
     * @memberof HotelReservationType
     */
    guestMessages?: GuestMessagesType;
    /**
     *
     * @type {boolean}
     * @memberof HotelReservationType
     */
    hasOpenFolio?: boolean;
    /**
     *
     * @type {string}
     * @memberof HotelReservationType
     */
    hotelId?: string;
    /**
     *
     * @type {ResHousekeepingType}
     * @memberof HotelReservationType
     */
    housekeeping?: ResHousekeepingType;
    /**
     *
     * @type {ResInventoryItemsType}
     * @memberof HotelReservationType
     */
    inventoryItems?: ResInventoryItemsType;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof HotelReservationType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof HotelReservationType
     */
    lastModifyDateTime?: string;
    /**
     *
     * @type {LinkedReservationsInfoType}
     * @memberof HotelReservationType
     */
    linkedReservation?: LinkedReservationsInfoType;
    /**
     *
     * @type {ReservationLocatorsType}
     * @memberof HotelReservationType
     */
    locators?: ReservationLocatorsType;
    /**
     * An id representing the record lock for this reservation. When passed, update operation will verify that this lock is still valid.
     * @type {number}
     * @memberof HotelReservationType
     */
    lockHandle?: number;
    /**
     * Mark this reservation as recently accessed.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    markAsRecentlyAccessed?: boolean;
    /**
     * Flag containing true or false value to determine if the guest has opted for communications pertaining to this reservation.Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is marked for communication. Upon fetch, the current state of the flag will show true or false.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    optedForCommunication?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof HotelReservationType
     */
    overrideBlockRestriction?: boolean;
    /**
     * Forcefully override the create/update action on the Reservation. For real-time CRS interfaces, this element is used as force selling indicator in case of Create or Update Reservation
     * @type {boolean}
     * @memberof HotelReservationType
     */
    overrideExternalChecks?: boolean;
    /**
     *
     * @type {OverrideInstructionsType}
     * @memberof HotelReservationType
     */
    overrideInstructions?: OverrideInstructionsType;
    /**
     * Indicates to Override the Room Inventory Check if applicable.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    overrideInventoryCheck?: boolean;
    /**
     * Indicates to Override the Room Out Of Service Check if applicable.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    overrideOutOfServiceCheck?: boolean;
    /**
     * Party/PartyCode when reservation is part of a party(a small group).
     * @type {string}
     * @memberof HotelReservationType
     */
    party?: string;
    /**
     * Is the reservation pre-registered.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    preRegistered?: boolean;
    /**
     * Collection of reservation preferences.
     * @type {Array<PreferenceTypeType>}
     * @memberof HotelReservationType
     */
    preferenceCollection?: Array<PreferenceTypeType>;
    /**
     *
     * @type {PrepaidCardsType}
     * @memberof HotelReservationType
     */
    prepaidCards?: PrepaidCardsType;
    /**
     * Name of the Chain for the primary enrollment
     * @type {string}
     * @memberof HotelReservationType
     */
    primaryEnrollmentChain?: string;
    /**
     * Name Of the Resort/Hotel for the primary enrollment
     * @type {string}
     * @memberof HotelReservationType
     */
    primaryEnrollmentResort?: string;
    /**
     * Indicates whether to show the rate or not on a printed document which includes the rate.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    printRate?: boolean;
    /**
     *
     * @type {AwardsType}
     * @memberof HotelReservationType
     */
    profileAwards?: AwardsType;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof HotelReservationType
     */
    purgeDate?: Date;
    /**
     *
     * @type {ReservationQueueInformationType}
     * @memberof HotelReservationType
     */
    queue?: ReservationQueueInformationType;
    /**
     * Business Date when the reservation was last reinstated.
     * @type {Date}
     * @memberof HotelReservationType
     */
    reinstateDate?: Date;
    /**
     *
     * @type {ActivityLookUpList}
     * @memberof HotelReservationType
     */
    reservationActivities?: ActivityLookUpList;
    /**
     *
     * @type {AwardsType}
     * @memberof HotelReservationType
     */
    reservationAwards?: AwardsType;
    /**
     *
     * @type {ResCommunicationType}
     * @memberof HotelReservationType
     */
    reservationCommunication?: ResCommunicationType;
    /**
     * Collection of guests associated with the reservation.
     * @type {Array<ResGuestType>}
     * @memberof HotelReservationType
     */
    reservationGuests?: Array<ResGuestType>;
    /**
     *
     * @type {ReservationIdList}
     * @memberof HotelReservationType
     */
    reservationIdList?: ReservationIdList;
    /**
     *
     * @type {IndicatorsType}
     * @memberof HotelReservationType
     */
    reservationIndicators?: IndicatorsType;
    /**
     * List of reservation memberships.
     * @type {Array<ReservationMembershipType>}
     * @memberof HotelReservationType
     */
    reservationMemberships?: Array<ReservationMembershipType>;
    /**
     * A Service object represents a non-room product provided to guests. Service products may have associated inventory and charges.
     * @type {Array<ReservationPackageType>}
     * @memberof HotelReservationType
     */
    reservationPackages?: Array<ReservationPackageType>;
    /**
     *
     * @type {ReservationPaymentMethodsType}
     * @memberof HotelReservationType
     */
    reservationPaymentMethods?: ReservationPaymentMethodsType;
    /**
     *
     * @type {ReservationPoliciesType}
     * @memberof HotelReservationType
     */
    reservationPolicies?: ReservationPoliciesType;
    /**
     *
     * @type {HotelReservationTypeReservationProfiles}
     * @memberof HotelReservationType
     */
    reservationProfiles?: HotelReservationTypeReservationProfiles;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof HotelReservationType
     */
    reservationStatus?: PMSResStatusType;
    /**
     *
     * @type {RoomStayType}
     * @memberof HotelReservationType
     */
    roomStay?: RoomStayType;
    /**
     * Boolean True if this reservation is reserving rooms. False if it is only reserving services.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    roomStayReservation?: boolean;
    /**
     *
     * @type {RoutingInfoListType}
     * @memberof HotelReservationType
     */
    routingInstructions?: RoutingInfoListType;
    /**
     *
     * @type {ActivityLookUpList}
     * @memberof HotelReservationType
     */
    scheduledActivities?: ActivityLookUpList;
    /**
     *
     * @type {ServiceRequests}
     * @memberof HotelReservationType
     */
    serviceRequests?: ServiceRequests;
    /**
     *
     * @type {ResSharedGuestListType}
     * @memberof HotelReservationType
     */
    sharedGuests?: ResSharedGuestListType;
    /**
     *
     * @type {HotelReservationsType}
     * @memberof HotelReservationType
     */
    shares?: HotelReservationsType;
    /**
     *
     * @type {SourceOfSaleType}
     * @memberof HotelReservationType
     */
    sourceOfSale?: SourceOfSaleType;
    /**
     *
     * @type {ResStatClassificationType}
     * @memberof HotelReservationType
     */
    statisticalClassification?: ResStatClassificationType;
    /**
     *
     * @type {TicketsType}
     * @memberof HotelReservationType
     */
    tickets?: TicketsType;
    /**
     *
     * @type {HotelReservationTracesType}
     * @memberof HotelReservationType
     */
    traces?: HotelReservationTracesType;
    /**
     *
     * @type {TrackItItemsType}
     * @memberof HotelReservationType
     */
    trackItItems?: TrackItItemsType;
    /**
     *
     * @type {HotelReservationTypeTransactionDiversions}
     * @memberof HotelReservationType
     */
    transactionDiversions?: HotelReservationTypeTransactionDiversions;
    /**
     * Indicates whether the reservation is eligible for upgrade.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    upgradeEligible?: boolean;
    /**
     *
     * @type {UserDefinedFieldsType}
     * @memberof HotelReservationType
     */
    userDefinedFields?: UserDefinedFieldsType;
    /**
     *
     * @type {WaitlistResType}
     * @memberof HotelReservationType
     */
    waitlist?: WaitlistResType;
    /**
     * When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in.
     * @type {boolean}
     * @memberof HotelReservationType
     */
    walkIn?: boolean;
    /**
     *
     * @type {AttachmentsType}
     * @memberof HotelReservationType
     */
    webRegistrationCards?: AttachmentsType;
}
/**
 * Check if a given object implements the HotelReservationType interface.
 */
export declare function instanceOfHotelReservationType(value: object): boolean;
export declare function HotelReservationTypeFromJSON(json: any): HotelReservationType;
export declare function HotelReservationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelReservationType;
export declare function HotelReservationTypeToJSON(value?: HotelReservationType | null): any;