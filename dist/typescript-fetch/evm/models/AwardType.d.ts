/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AwardKindType } from './AwardKindType';
import type { AwardStatusType } from './AwardStatusType';
import type { FBAInfoType } from './FBAInfoType';
import type { ProfileId } from './ProfileId';
import type { ReservationCertificateType } from './ReservationCertificateType';
import type { ReservationId } from './ReservationId';
import type { RewardCertificateType } from './RewardCertificateType';
/**
 * Detailed information of the awards.
 * @export
 * @interface AwardType
 */
export interface AwardType {
    /**
     * Award category.
     * @type {string}
     * @memberof AwardType
     */
    awardCode?: string;
    /**
     *
     * @type {AwardKindType}
     * @memberof AwardType
     */
    awardType?: AwardKindType;
    /**
     * Indicates whether the category of certificate is valid or not for this resort.
     * @type {boolean}
     * @memberof AwardType
     */
    categoryValid?: boolean;
    /**
     * Certificate No.
     * @type {string}
     * @memberof AwardType
     */
    certificateNo?: string;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof AwardType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof AwardType
     */
    creatorId?: string;
    /**
     * Description of the award/certificate.
     * @type {string}
     * @memberof AwardType
     */
    description?: string;
    /**
     * Indicates if this certificate is detailed or not.
     * @type {boolean}
     * @memberof AwardType
     */
    detailedCertificate?: boolean;
    /**
     * Indicates the order in which the certificates received from MRW.
     * @type {number}
     * @memberof AwardType
     */
    displaySequence?: number;
    /**
     * Expiration Date.
     * @type {Date}
     * @memberof AwardType
     */
    expirationDate?: Date;
    /**
     * Confirmation Number given by a CRS application for this reservation.
     * @type {string}
     * @memberof AwardType
     */
    externalConfirmationNo?: string;
    /**
     * Hotel Code of the CRS application that this certificate belongs to.
     * @type {string}
     * @memberof AwardType
     */
    externalHotelCode?: string;
    /**
     *
     * @type {FBAInfoType}
     * @memberof AwardType
     */
    fBAInfo?: FBAInfoType;
    /**
     * Signifies whether award is gift or not.
     * @type {boolean}
     * @memberof AwardType
     */
    gift?: boolean;
    /**
     * Indicates the lowest hotel category for which the certificate is valid.
     * @type {string}
     * @memberof AwardType
     */
    hotelCategory?: string;
    /**
     * Hotel Code for which the routing instructions are provided for a profile.
     * @type {string}
     * @memberof AwardType
     */
    hotelId?: string;
    /**
     * Indicates if the award is an Instant Redemption award.
     * @type {boolean}
     * @memberof AwardType
     */
    instantlyRedeemable?: boolean;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof AwardType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof AwardType
     */
    lastModifyDateTime?: string;
    /**
     * Master Certificate No.
     * @type {string}
     * @memberof AwardType
     */
    masterCertificiateNo?: string;
    /**
     * Membership No.
     * @type {string}
     * @memberof AwardType
     */
    membershipNo?: string;
    /**
     * Award Nights.
     * @type {number}
     * @memberof AwardType
     */
    nights?: number;
    /**
     * Signifies whether upgrade is package or not.
     * @type {boolean}
     * @memberof AwardType
     */
    _package?: boolean;
    /**
     * Indicates if this certificate was ordered using the "Paid Upgrade" option in the E-Certs screen.
     * @type {boolean}
     * @memberof AwardType
     */
    paidUpgrade?: boolean;
    /**
     * No. of points used to order this award.
     * @type {number}
     * @memberof AwardType
     */
    points?: number;
    /**
     *
     * @type {ProfileId}
     * @memberof AwardType
     */
    profileId?: ProfileId;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof AwardType
     */
    purgeDate?: Date;
    /**
     * Quantity of such awards needed to be ordered.
     * @type {number}
     * @memberof AwardType
     */
    quantity?: number;
    /**
     *
     * @type {ReservationCertificateType}
     * @memberof AwardType
     */
    reservationCertificateType?: ReservationCertificateType;
    /**
     *
     * @type {ReservationId}
     * @memberof AwardType
     */
    reservationId?: ReservationId;
    /**
     *
     * @type {RewardCertificateType}
     * @memberof AwardType
     */
    rewardCertificateType?: RewardCertificateType;
    /**
     * MRW : From MRW MAN:Entered manually.
     * @type {string}
     * @memberof AwardType
     */
    sourceType?: string;
    /**
     *
     * @type {AwardStatusType}
     * @memberof AwardType
     */
    status?: AwardStatusType;
    /**
     * Signifies whether upgrade award or not.
     * @type {boolean}
     * @memberof AwardType
     */
    upgrade?: boolean;
}
/**
 * Check if a given object implements the AwardType interface.
 */
export declare function instanceOfAwardType(value: object): boolean;
export declare function AwardTypeFromJSON(json: any): AwardType;
export declare function AwardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardType;
export declare function AwardTypeToJSON(value?: AwardType | null): any;
