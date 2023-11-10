/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { IndicatorsType } from './IndicatorsType';
import type { RateAccessExclusionType } from './RateAccessExclusionType';
import type { RatePackagesType } from './RatePackagesType';
import type { RatePlanBasedOnRatesType } from './RatePlanBasedOnRatesType';
import type { RatePlanClassificationsType } from './RatePlanClassificationsType';
import type { RatePlanCommissionType } from './RatePlanCommissionType';
import type { RatePlanControlsType } from './RatePlanControlsType';
import type { RatePlanDepositType } from './RatePlanDepositType';
import type { RatePlanDescriptionsType } from './RatePlanDescriptionsType';
import type { RatePlanDistributionType } from './RatePlanDistributionType';
import type { RatePlanExternalAttributesType } from './RatePlanExternalAttributesType';
import type { RatePlanNotesType } from './RatePlanNotesType';
import type { RatePlanPrimaryDetailsType } from './RatePlanPrimaryDetailsType';
import type { RatePlanRoutingInstructionsType } from './RatePlanRoutingInstructionsType';
import type { RatePlanScheduleInfoType } from './RatePlanScheduleInfoType';
import type { RatePlanTransactionDetailsType } from './RatePlanTransactionDetailsType';
import type { RatePlanTypeNegotiatedRates } from './RatePlanTypeNegotiatedRates';
import type { RateRoomTypeListType } from './RateRoomTypeListType';
/**
 * The Rate plan code Details.
 * @export
 * @interface RatePlanType
 */
export interface RatePlanType {
    /**
     * List of access exclusions.
     * @type {Array<RateAccessExclusionType>}
     * @memberof RatePlanType
     */
    accessExclusions?: Array<RateAccessExclusionType>;
    /**
     * Flag to identify if Rate Code is Advanced Daily Base Rate Code
     * @type {boolean}
     * @memberof RatePlanType
     */
    advancedDailyBase?: boolean;
    /**
     * Flag to identify if Rate Code is Advanced Daily Rate
     * @type {boolean}
     * @memberof RatePlanType
     */
    advancedDailyRate?: boolean;
    /**
     *
     * @type {RatePlanNotesType}
     * @memberof RatePlanType
     */
    approvalNotes?: RatePlanNotesType;
    /**
     * Is rate plan code of BAR Rate type?
     * @type {boolean}
     * @memberof RatePlanType
     */
    bARRate?: boolean;
    /**
     *
     * @type {RatePlanClassificationsType}
     * @memberof RatePlanType
     */
    classifications?: RatePlanClassificationsType;
    /**
     * Is rate plan code complimentary?
     * @type {boolean}
     * @memberof RatePlanType
     */
    complimentary?: boolean;
    /**
     *
     * @type {RatePlanControlsType}
     * @memberof RatePlanType
     */
    controls?: RatePlanControlsType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof RatePlanType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof RatePlanType
     */
    creatorId?: string;
    /**
     * Is rate plan code a daily rate?
     * @type {boolean}
     * @memberof RatePlanType
     */
    daily?: boolean;
    /**
     * Indicates if rate Calendar factors such as adder/multiplier should be used for price calculation.
     * @type {boolean}
     * @memberof RatePlanType
     */
    dayType?: boolean;
    /**
     * Is rate plan code for day use?
     * @type {boolean}
     * @memberof RatePlanType
     */
    dayUse?: boolean;
    /**
     *
     * @type {RatePlanDescriptionsType}
     * @memberof RatePlanType
     */
    descriptions?: RatePlanDescriptionsType;
    /**
     * Is rate plan code discounted?
     * @type {boolean}
     * @memberof RatePlanType
     */
    discountAllowed?: boolean;
    /**
     *
     * @type {RatePlanDistributionType}
     * @memberof RatePlanType
     */
    distribution?: RatePlanDistributionType;
    /**
     *
     * @type {RatePlanExternalAttributesType}
     * @memberof RatePlanType
     */
    externalAttributes?: RatePlanExternalAttributesType;
    /**
     * Is rate plan code externally controlled?
     * @type {boolean}
     * @memberof RatePlanType
     */
    externallyControlled?: boolean;
    /**
     * An amount that act as Floor value for Rate Plan.
     * @type {number}
     * @memberof RatePlanType
     */
    floorAmount?: number;
    /**
     * Hotel Code
     * @type {string}
     * @memberof RatePlanType
     */
    hotelId?: string;
    /**
     * Is rate plan code for house use?
     * @type {boolean}
     * @memberof RatePlanType
     */
    houseUse?: boolean;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof RatePlanType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof RatePlanType
     */
    lastModifyDateTime?: string;
    /**
     * Is rate plan code flagged as eligible for memberships? This flag controls whether the guest stay, which this rate plan is attached to, qualifies for point calculations for Frequent Flyer or Frequent Guest programs. If the rate plan associated to the reservation has not been flagged for Membership then the guest will not earn any points/miles for their stay.
     * @type {boolean}
     * @memberof RatePlanType
     */
    membershipEligible?: boolean;
    /**
     * This is a placeholder element for future use. Functionality may not be available for the current implementation.
     * @type {boolean}
     * @memberof RatePlanType
     */
    mobileCheckinAllowed?: boolean;
    /**
     * This is a placeholder element for future use. Functionality may not be available for the current implementation.
     * @type {boolean}
     * @memberof RatePlanType
     */
    mobileCheckoutAllowed?: boolean;
    /**
     * Is rate plan code only available as a negotiated rate that must be associated with a guest, company, or travel agent profile ?
     * @type {boolean}
     * @memberof RatePlanType
     */
    negotiated?: boolean;
    /**
     *
     * @type {RatePlanTypeNegotiatedRates}
     * @memberof RatePlanType
     */
    negotiatedRates?: RatePlanTypeNegotiatedRates;
    /**
     * Is rate plan code flagged as an owner rate plan? Owner rate plans have special functionality for no-shows depending on the Rolling Noshow Preference application setting.
     * @type {boolean}
     * @memberof RatePlanType
     */
    ownerRate?: boolean;
    /**
     *
     * @type {RatePlanPrimaryDetailsType}
     * @memberof RatePlanType
     */
    primaryDetails?: RatePlanPrimaryDetailsType;
    /**
     * Is Rate amount printed on the reports for the rate plan?
     * @type {boolean}
     * @memberof RatePlanType
     */
    printRate?: boolean;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof RatePlanType
     */
    purgeDate?: Date;
    /**
     *
     * @type {RatePlanCommissionType}
     * @memberof RatePlanType
     */
    rateCommission?: RatePlanCommissionType;
    /**
     *
     * @type {RatePlanDepositType}
     * @memberof RatePlanType
     */
    rateDeposit?: RatePlanDepositType;
    /**
     *
     * @type {RatePackagesType}
     * @memberof RatePlanType
     */
    ratePackages?: RatePackagesType;
    /**
     *
     * @type {RatePlanBasedOnRatesType}
     * @memberof RatePlanType
     */
    ratePlanBasedOnRates?: RatePlanBasedOnRatesType;
    /**
     * Rate plan Code
     * @type {string}
     * @memberof RatePlanType
     */
    ratePlanCode?: string;
    /**
     *
     * @type {IndicatorsType}
     * @memberof RatePlanType
     */
    ratePlanCodeIndicators?: IndicatorsType;
    /**
     *
     * @type {RatePlanScheduleInfoType}
     * @memberof RatePlanType
     */
    ratePlanScheduleInfo?: RatePlanScheduleInfoType;
    /**
     * Is redemption allowed on the rate code?
     * @type {boolean}
     * @memberof RatePlanType
     */
    redemption?: boolean;
    /**
     *
     * @type {RateRoomTypeListType}
     * @memberof RatePlanType
     */
    roomTypeList?: RateRoomTypeListType;
    /**
     *
     * @type {RatePlanRoutingInstructionsType}
     * @memberof RatePlanType
     */
    routingInstructions?: RatePlanRoutingInstructionsType;
    /**
     * Is rate amount suppressed for the rate plan?
     * @type {boolean}
     * @memberof RatePlanType
     */
    supressRate?: boolean;
    /**
     * Is rate plan code a tiered rate?
     * @type {boolean}
     * @memberof RatePlanType
     */
    tiered?: boolean;
    /**
     *
     * @type {RatePlanTransactionDetailsType}
     * @memberof RatePlanType
     */
    transactionDetails?: RatePlanTransactionDetailsType;
}
/**
 * Check if a given object implements the RatePlanType interface.
 */
export declare function instanceOfRatePlanType(value: object): boolean;
export declare function RatePlanTypeFromJSON(json: any): RatePlanType;
export declare function RatePlanTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanType;
export declare function RatePlanTypeToJSON(value?: RatePlanType | null): any;
