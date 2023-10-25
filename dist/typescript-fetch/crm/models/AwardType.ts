/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AwardKindType } from './AwardKindType';
import {
    AwardKindTypeFromJSON,
    AwardKindTypeFromJSONTyped,
    AwardKindTypeToJSON,
} from './AwardKindType';
import type { AwardStatusType } from './AwardStatusType';
import {
    AwardStatusTypeFromJSON,
    AwardStatusTypeFromJSONTyped,
    AwardStatusTypeToJSON,
} from './AwardStatusType';
import type { FBAInfoType } from './FBAInfoType';
import {
    FBAInfoTypeFromJSON,
    FBAInfoTypeFromJSONTyped,
    FBAInfoTypeToJSON,
} from './FBAInfoType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { ReservationCertificateType } from './ReservationCertificateType';
import {
    ReservationCertificateTypeFromJSON,
    ReservationCertificateTypeFromJSONTyped,
    ReservationCertificateTypeToJSON,
} from './ReservationCertificateType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { RewardCertificateType } from './RewardCertificateType';
import {
    RewardCertificateTypeFromJSON,
    RewardCertificateTypeFromJSONTyped,
    RewardCertificateTypeToJSON,
} from './RewardCertificateType';

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
export function instanceOfAwardType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AwardTypeFromJSON(json: any): AwardType {
    return AwardTypeFromJSONTyped(json, false);
}

export function AwardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'awardCode': !exists(json, 'awardCode') ? undefined : json['awardCode'],
        'awardType': !exists(json, 'awardType') ? undefined : AwardKindTypeFromJSON(json['awardType']),
        'categoryValid': !exists(json, 'categoryValid') ? undefined : json['categoryValid'],
        'certificateNo': !exists(json, 'certificateNo') ? undefined : json['certificateNo'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'detailedCertificate': !exists(json, 'detailedCertificate') ? undefined : json['detailedCertificate'],
        'displaySequence': !exists(json, 'displaySequence') ? undefined : json['displaySequence'],
        'expirationDate': !exists(json, 'expirationDate') ? undefined : (new Date(json['expirationDate'])),
        'externalConfirmationNo': !exists(json, 'externalConfirmationNo') ? undefined : json['externalConfirmationNo'],
        'externalHotelCode': !exists(json, 'externalHotelCode') ? undefined : json['externalHotelCode'],
        'fBAInfo': !exists(json, 'fBAInfo') ? undefined : FBAInfoTypeFromJSON(json['fBAInfo']),
        'gift': !exists(json, 'gift') ? undefined : json['gift'],
        'hotelCategory': !exists(json, 'hotelCategory') ? undefined : json['hotelCategory'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'instantlyRedeemable': !exists(json, 'instantlyRedeemable') ? undefined : json['instantlyRedeemable'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'masterCertificiateNo': !exists(json, 'masterCertificiateNo') ? undefined : json['masterCertificiateNo'],
        'membershipNo': !exists(json, 'membershipNo') ? undefined : json['membershipNo'],
        'nights': !exists(json, 'nights') ? undefined : json['nights'],
        '_package': !exists(json, 'package') ? undefined : json['package'],
        'paidUpgrade': !exists(json, 'paidUpgrade') ? undefined : json['paidUpgrade'],
        'points': !exists(json, 'points') ? undefined : json['points'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'reservationCertificateType': !exists(json, 'reservationCertificateType') ? undefined : ReservationCertificateTypeFromJSON(json['reservationCertificateType']),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'rewardCertificateType': !exists(json, 'rewardCertificateType') ? undefined : RewardCertificateTypeFromJSON(json['rewardCertificateType']),
        'sourceType': !exists(json, 'sourceType') ? undefined : json['sourceType'],
        'status': !exists(json, 'status') ? undefined : AwardStatusTypeFromJSON(json['status']),
        'upgrade': !exists(json, 'upgrade') ? undefined : json['upgrade'],
    };
}

export function AwardTypeToJSON(value?: AwardType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'awardCode': value.awardCode,
        'awardType': AwardKindTypeToJSON(value.awardType),
        'categoryValid': value.categoryValid,
        'certificateNo': value.certificateNo,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'description': value.description,
        'detailedCertificate': value.detailedCertificate,
        'displaySequence': value.displaySequence,
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate.toISOString().substr(0,10)),
        'externalConfirmationNo': value.externalConfirmationNo,
        'externalHotelCode': value.externalHotelCode,
        'fBAInfo': FBAInfoTypeToJSON(value.fBAInfo),
        'gift': value.gift,
        'hotelCategory': value.hotelCategory,
        'hotelId': value.hotelId,
        'instantlyRedeemable': value.instantlyRedeemable,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'masterCertificiateNo': value.masterCertificiateNo,
        'membershipNo': value.membershipNo,
        'nights': value.nights,
        'package': value._package,
        'paidUpgrade': value.paidUpgrade,
        'points': value.points,
        'profileId': ProfileIdToJSON(value.profileId),
        'quantity': value.quantity,
        'reservationCertificateType': ReservationCertificateTypeToJSON(value.reservationCertificateType),
        'reservationId': ReservationIdToJSON(value.reservationId),
        'rewardCertificateType': RewardCertificateTypeToJSON(value.rewardCertificateType),
        'sourceType': value.sourceType,
        'status': AwardStatusTypeToJSON(value.status),
        'upgrade': value.upgrade,
    };
}

