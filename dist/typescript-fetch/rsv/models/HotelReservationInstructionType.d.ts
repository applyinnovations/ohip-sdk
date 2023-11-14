/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { AttachmentsType } from './AttachmentsType';
import type { AwardsType } from './AwardsType';
import type { CallHistoryType } from './CallHistoryType';
import type { CateringResInfoType } from './CateringResInfoType';
import type { ChangeInstructionType } from './ChangeInstructionType';
import type { CommentInfoType } from './CommentInfoType';
import type { CompAuthorizerInfoType } from './CompAuthorizerInfoType';
import type { ConfirmationsType } from './ConfirmationsType';
import type { CustomChargeExemptionsType } from './CustomChargeExemptionsType';
import type { ECouponsType } from './ECouponsType';
import type { ExternalReferencesType } from './ExternalReferencesType';
import type { FixedChargesType } from './FixedChargesType';
import type { FoliosShortInfoType } from './FoliosShortInfoType';
import type { GuestMessagesType } from './GuestMessagesType';
import type { HotelReservationInstructionTypeCancellation } from './HotelReservationInstructionTypeCancellation';
import type { HotelReservationInstructionTypeReservationProfiles } from './HotelReservationInstructionTypeReservationProfiles';
import type { HotelReservationInstructionTypeResponseInstructions } from './HotelReservationInstructionTypeResponseInstructions';
import type { HotelReservationInstructionTypeTransactionDiversions } from './HotelReservationInstructionTypeTransactionDiversions';
import type { HotelReservationTracesType } from './HotelReservationTracesType';
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
 * @interface HotelReservationInstructionType
 */
export interface HotelReservationInstructionType {
    /**
     *
     * @type {ResAccessRestrictionType}
     * @memberof HotelReservationInstructionType
     */
    accessRestriction?: ResAccessRestrictionType;
    /**
     * Configurable Access Restriction Message for Excluded Block or Rate Code.
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    accessRestrictionMessage?: string;
    /**
     *
     * @type {ResGuestAdditionalInfoType}
     * @memberof HotelReservationInstructionType
     */
    additionalGuestInfo?: ResGuestAdditionalInfoType;
    /**
     *
     * @type {AdvanceCheckInType}
     * @memberof HotelReservationInstructionType
     */
    advanceCheckIn?: AdvanceCheckInType;
    /**
     *
     * @type {AlertsType}
     * @memberof HotelReservationInstructionType
     */
    alerts?: AlertsType;
    /**
     * Flag to allow auto checkin
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    allowAutoCheckin?: boolean;
    /**
     * Flag containing true or false value for reservation to be eligible for self-checkout by guest using mobile device . Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile checkout yes / no. Upon fetch, the current state of the flag will show true or false.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    allowMobileCheckout?: boolean;
    /**
     * Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    allowMobileViewFolio?: boolean;
    /**
     * Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device . Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    allowPreRegistration?: boolean;
    /**
     *
     * @type {ReservationAllowedActionsType}
     * @memberof HotelReservationInstructionType
     */
    allowedActions?: ReservationAllowedActionsType;
    /**
     * Information regarding associated reservations to the reservation.
     * @type {object}
     * @memberof HotelReservationInstructionType
     */
    associatedReservations?: object;
    /**
     *
     * @type {AttachmentsType}
     * @memberof HotelReservationInstructionType
     */
    attachments?: AttachmentsType;
    /**
     * This flag will force to borrow from house if borrow required for number of rooms requested, this will only applicable when reservation is attached to a Block.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    autoBorrowFromHouse?: boolean;
    /**
     *
     * @type {CallHistoryType}
     * @memberof HotelReservationInstructionType
     */
    callHistory?: CallHistoryType;
    /**
     *
     * @type {HotelReservationInstructionTypeCancellation}
     * @memberof HotelReservationInstructionType
     */
    cancellation?: HotelReservationInstructionTypeCancellation;
    /**
     *
     * @type {ResCashieringType}
     * @memberof HotelReservationInstructionType
     */
    cashiering?: ResCashieringType;
    /**
     *
     * @type {CateringResInfoType}
     * @memberof HotelReservationInstructionType
     */
    catering?: CateringResInfoType;
    /**
     *
     * @type {ChangeInstructionType}
     * @memberof HotelReservationInstructionType
     */
    changeInstrunctions?: ChangeInstructionType;
    /**
     * This attribute represents Hotel charge card number. This number is generated automatically in OPERA when a reservation is created in OPERA. It is part of a functionality that provide the guest with the convenience of placing all their charges directly on their reservation folio.
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    chargeCardNumber?: string;
    /**
     * List of Notes for the Guest related to the reservation.
     * @type {Array<CommentInfoType>}
     * @memberof HotelReservationInstructionType
     */
    comments?: Array<CommentInfoType>;
    /**
     *
     * @type {CompAuthorizerInfoType}
     * @memberof HotelReservationInstructionType
     */
    compAuthorizer?: CompAuthorizerInfoType;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof HotelReservationInstructionType
     */
    computedReservationStatus?: PMSResStatusType;
    /**
     *
     * @type {ConfirmationsType}
     * @memberof HotelReservationInstructionType
     */
    confirmationLetters?: ConfirmationsType;
    /**
     * Business Date when the reservation was created.
     * @type {Date}
     * @memberof HotelReservationInstructionType
     */
    createBusinessDate?: Date;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    creatorId?: string;
    /**
     *
     * @type {CustomChargeExemptionsType}
     * @memberof HotelReservationInstructionType
     */
    customChargeExemptionDetails?: CustomChargeExemptionsType;
    /**
     *
     * @type {NameValueDetailType}
     * @memberof HotelReservationInstructionType
     */
    customNameValueDetail?: NameValueDetailType;
    /**
     * Custom Reference to identify reservation.
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    customReference?: string;
    /**
     * The color to display this reservation on room grid displays.
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    displayColor?: string;
    /**
     *
     * @type {ReservationECertificatesType}
     * @memberof HotelReservationInstructionType
     */
    eCertificates?: ReservationECertificatesType;
    /**
     *
     * @type {ECouponsType}
     * @memberof HotelReservationInstructionType
     */
    eCoupons?: ECouponsType;
    /**
     *
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    extSystemSync?: boolean;
    /**
     *
     * @type {ExternalReferencesType}
     * @memberof HotelReservationInstructionType
     */
    externalReferences?: ExternalReferencesType;
    /**
     *
     * @type {FixedChargesType}
     * @memberof HotelReservationInstructionType
     */
    fixedCharges?: FixedChargesType;
    /**
     *
     * @type {FoliosShortInfoType}
     * @memberof HotelReservationInstructionType
     */
    folios?: FoliosShortInfoType;
    /**
     * List of Notes for the Guest related to the profile.
     * @type {Array<CommentInfoType>}
     * @memberof HotelReservationInstructionType
     */
    guestComments?: Array<CommentInfoType>;
    /**
     * List of Memberships for the Guest related to the reservation.
     * @type {Array<MembershipType>}
     * @memberof HotelReservationInstructionType
     */
    guestMemberships?: Array<MembershipType>;
    /**
     *
     * @type {GuestMessagesType}
     * @memberof HotelReservationInstructionType
     */
    guestMessages?: GuestMessagesType;
    /**
     *
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    hasOpenFolio?: boolean;
    /**
     *
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    hotelId?: string;
    /**
     *
     * @type {ResHousekeepingType}
     * @memberof HotelReservationInstructionType
     */
    housekeeping?: ResHousekeepingType;
    /**
     *
     * @type {ResInventoryItemsType}
     * @memberof HotelReservationInstructionType
     */
    inventoryItems?: ResInventoryItemsType;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    lastModifyDateTime?: string;
    /**
     *
     * @type {LinkedReservationsInfoType}
     * @memberof HotelReservationInstructionType
     */
    linkedReservation?: LinkedReservationsInfoType;
    /**
     *
     * @type {ReservationLocatorsType}
     * @memberof HotelReservationInstructionType
     */
    locators?: ReservationLocatorsType;
    /**
     * An id representing the record lock for this reservation. When passed, update operation will verify that this lock is still valid.
     * @type {number}
     * @memberof HotelReservationInstructionType
     */
    lockHandle?: number;
    /**
     * Mark this reservation as recently accessed.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    markAsRecentlyAccessed?: boolean;
    /**
     * Flag containing true or false value to determine if the guest has opted for communications pertaining to this reservation.Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is marked for communication. Upon fetch, the current state of the flag will show true or false.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    optedForCommunication?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    overrideBlockRestriction?: boolean;
    /**
     * Forcefully override the create/update action on the Reservation. For real-time CRS interfaces, this element is used as force selling indicator in case of Create or Update Reservation
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    overrideExternalChecks?: boolean;
    /**
     *
     * @type {OverrideInstructionsType}
     * @memberof HotelReservationInstructionType
     */
    overrideInstructions?: OverrideInstructionsType;
    /**
     * Indicates to Override the Room Inventory Check if applicable.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    overrideInventoryCheck?: boolean;
    /**
     * Indicates to Override the Room Out Of Service Check if applicable.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    overrideOutOfServiceCheck?: boolean;
    /**
     * Override the room ownership of the room currently assigned to this reservation. This is applicable when Room Rotation OPERA Control is active.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    overrideRoomOwnership?: boolean;
    /**
     * Override the rotation room that is next in the sequence with the room currently assigned to this reservation. This is applicable when Room Rotation OPERA Control is active.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    overrideRotationRoom?: boolean;
    /**
     * Party/PartyCode when reservation is part of a party(a small group).
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    party?: string;
    /**
     * Is the reservation pre-registered.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    preRegistered?: boolean;
    /**
     * Collection of reservation preferences.
     * @type {Array<PreferenceTypeType>}
     * @memberof HotelReservationInstructionType
     */
    preferenceCollection?: Array<PreferenceTypeType>;
    /**
     *
     * @type {PrepaidCardsType}
     * @memberof HotelReservationInstructionType
     */
    prepaidCards?: PrepaidCardsType;
    /**
     * Name of the Chain for the primary enrollment
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    primaryEnrollmentChain?: string;
    /**
     * Name Of the Resort/Hotel for the primary enrollment
     * @type {string}
     * @memberof HotelReservationInstructionType
     */
    primaryEnrollmentResort?: string;
    /**
     * Indicates whether to show the rate or not on a printed document which includes the rate.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    printRate?: boolean;
    /**
     *
     * @type {AwardsType}
     * @memberof HotelReservationInstructionType
     */
    profileAwards?: AwardsType;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof HotelReservationInstructionType
     */
    purgeDate?: Date;
    /**
     *
     * @type {ReservationQueueInformationType}
     * @memberof HotelReservationInstructionType
     */
    queue?: ReservationQueueInformationType;
    /**
     * Business Date when the reservation was last reinstated.
     * @type {Date}
     * @memberof HotelReservationInstructionType
     */
    reinstateDate?: Date;
    /**
     *
     * @type {ActivityLookUpList}
     * @memberof HotelReservationInstructionType
     */
    reservationActivities?: ActivityLookUpList;
    /**
     *
     * @type {AwardsType}
     * @memberof HotelReservationInstructionType
     */
    reservationAwards?: AwardsType;
    /**
     *
     * @type {ResCommunicationType}
     * @memberof HotelReservationInstructionType
     */
    reservationCommunication?: ResCommunicationType;
    /**
     * Collection of guests associated with the reservation.
     * @type {Array<ResGuestType>}
     * @memberof HotelReservationInstructionType
     */
    reservationGuests?: Array<ResGuestType>;
    /**
     *
     * @type {ReservationIdList}
     * @memberof HotelReservationInstructionType
     */
    reservationIdList?: ReservationIdList;
    /**
     *
     * @type {IndicatorsType}
     * @memberof HotelReservationInstructionType
     */
    reservationIndicators?: IndicatorsType;
    /**
     * List of reservation memberships.
     * @type {Array<ReservationMembershipType>}
     * @memberof HotelReservationInstructionType
     */
    reservationMemberships?: Array<ReservationMembershipType>;
    /**
     * A Service object represents a non-room product provided to guests. Service products may have associated inventory and charges.
     * @type {Array<ReservationPackageType>}
     * @memberof HotelReservationInstructionType
     */
    reservationPackages?: Array<ReservationPackageType>;
    /**
     *
     * @type {ReservationPaymentMethodsType}
     * @memberof HotelReservationInstructionType
     */
    reservationPaymentMethods?: ReservationPaymentMethodsType;
    /**
     *
     * @type {ReservationPoliciesType}
     * @memberof HotelReservationInstructionType
     */
    reservationPolicies?: ReservationPoliciesType;
    /**
     *
     * @type {HotelReservationInstructionTypeReservationProfiles}
     * @memberof HotelReservationInstructionType
     */
    reservationProfiles?: HotelReservationInstructionTypeReservationProfiles;
    /**
     *
     * @type {PMSResStatusType}
     * @memberof HotelReservationInstructionType
     */
    reservationStatus?: PMSResStatusType;
    /**
     *
     * @type {HotelReservationInstructionTypeResponseInstructions}
     * @memberof HotelReservationInstructionType
     */
    responseInstructions?: HotelReservationInstructionTypeResponseInstructions;
    /**
     *
     * @type {RoomStayType}
     * @memberof HotelReservationInstructionType
     */
    roomStay?: RoomStayType;
    /**
     * Boolean True if this reservation is reserving rooms. False if it is only reserving services.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    roomStayReservation?: boolean;
    /**
     *
     * @type {RoutingInfoListType}
     * @memberof HotelReservationInstructionType
     */
    routingInstructions?: RoutingInfoListType;
    /**
     *
     * @type {ActivityLookUpList}
     * @memberof HotelReservationInstructionType
     */
    scheduledActivities?: ActivityLookUpList;
    /**
     *
     * @type {ServiceRequests}
     * @memberof HotelReservationInstructionType
     */
    serviceRequests?: ServiceRequests;
    /**
     *
     * @type {ResSharedGuestListType}
     * @memberof HotelReservationInstructionType
     */
    sharedGuests?: ResSharedGuestListType;
    /**
     *
     * @type {HotelReservationsType}
     * @memberof HotelReservationInstructionType
     */
    shares?: HotelReservationsType;
    /**
     *
     * @type {SourceOfSaleType}
     * @memberof HotelReservationInstructionType
     */
    sourceOfSale?: SourceOfSaleType;
    /**
     *
     * @type {ResStatClassificationType}
     * @memberof HotelReservationInstructionType
     */
    statisticalClassification?: ResStatClassificationType;
    /**
     *
     * @type {TicketsType}
     * @memberof HotelReservationInstructionType
     */
    tickets?: TicketsType;
    /**
     *
     * @type {HotelReservationTracesType}
     * @memberof HotelReservationInstructionType
     */
    traces?: HotelReservationTracesType;
    /**
     *
     * @type {TrackItItemsType}
     * @memberof HotelReservationInstructionType
     */
    trackItItems?: TrackItItemsType;
    /**
     *
     * @type {HotelReservationInstructionTypeTransactionDiversions}
     * @memberof HotelReservationInstructionType
     */
    transactionDiversions?: HotelReservationInstructionTypeTransactionDiversions;
    /**
     * Indicates whether the reservation is eligible for upgrade.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    upgradeEligible?: boolean;
    /**
     *
     * @type {UserDefinedFieldsType}
     * @memberof HotelReservationInstructionType
     */
    userDefinedFields?: UserDefinedFieldsType;
    /**
     *
     * @type {WaitlistResType}
     * @memberof HotelReservationInstructionType
     */
    waitlist?: WaitlistResType;
    /**
     * When true, indicates the reservation is for a guest that walks-in without a reservation. When false, the reservation is not a walk-in.
     * @type {boolean}
     * @memberof HotelReservationInstructionType
     */
    walkIn?: boolean;
    /**
     *
     * @type {AttachmentsType}
     * @memberof HotelReservationInstructionType
     */
    webRegistrationCards?: AttachmentsType;
}
/**
 * Check if a given object implements the HotelReservationInstructionType interface.
 */
export declare function instanceOfHotelReservationInstructionType(value: object): boolean;
export declare function HotelReservationInstructionTypeFromJSON(json: any): HotelReservationInstructionType;
export declare function HotelReservationInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelReservationInstructionType;
export declare function HotelReservationInstructionTypeToJSON(value?: HotelReservationInstructionType | null): any;