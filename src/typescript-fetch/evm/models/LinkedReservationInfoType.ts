/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { LinkedReservationType } from './LinkedReservationType';
import {
    LinkedReservationTypeFromJSON,
    LinkedReservationTypeFromJSONTyped,
    LinkedReservationTypeToJSON,
} from './LinkedReservationType';
import type { PMSResStatusType } from './PMSResStatusType';
import {
    PMSResStatusTypeFromJSON,
    PMSResStatusTypeFromJSONTyped,
    PMSResStatusTypeToJSON,
} from './PMSResStatusType';
import type { ResGuaranteeType } from './ResGuaranteeType';
import {
    ResGuaranteeTypeFromJSON,
    ResGuaranteeTypeFromJSONTyped,
    ResGuaranteeTypeToJSON,
} from './ResGuaranteeType';
import type { ReservationAllowedActionType } from './ReservationAllowedActionType';
import {
    ReservationAllowedActionTypeFromJSON,
    ReservationAllowedActionTypeFromJSONTyped,
    ReservationAllowedActionTypeToJSON,
} from './ReservationAllowedActionType';
import type { ReservationBlockType } from './ReservationBlockType';
import {
    ReservationBlockTypeFromJSON,
    ReservationBlockTypeFromJSONTyped,
    ReservationBlockTypeToJSON,
} from './ReservationBlockType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface LinkedReservationInfoType
 */
export interface LinkedReservationInfoType {
    /**
     * Allowed action.
     * @type {Array<ReservationAllowedActionType>}
     * @memberof LinkedReservationInfoType
     */
    allowedActions?: Array<ReservationAllowedActionType>;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof LinkedReservationInfoType
     */
    balance?: CurrencyAmountType;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof LinkedReservationInfoType
     */
    blockDates?: TimeSpanType;
    /**
     * 
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    displayColor?: string;
    /**
     * 
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    functionSpaceDetails?: string;
    /**
     * 
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    givenName?: string;
    /**
     * 
     * @type {ResGuaranteeType}
     * @memberof LinkedReservationInfoType
     */
    guarantee?: ResGuaranteeType;
    /**
     * 
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    hotelId?: string;
    /**
     * 
     * @type {LinkedReservationType}
     * @memberof LinkedReservationInfoType
     */
    linkReservationType?: LinkedReservationType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof LinkedReservationInfoType
     */
    rate?: CurrencyAmountType;
    /**
     * 
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    ratePlanCode?: string;
    /**
     * 
     * @type {ReservationBlockType}
     * @memberof LinkedReservationInfoType
     */
    reservationBlock?: ReservationBlockType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof LinkedReservationInfoType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {PMSResStatusType}
     * @memberof LinkedReservationInfoType
     */
    reservationStatus?: PMSResStatusType;
    /**
     * This attribute is to verify if reverse check-in is allowed for the reservation.
     * @type {boolean}
     * @memberof LinkedReservationInfoType
     */
    reverseCheckInAllowed?: boolean;
    /**
     * This attribute is to verify if functionSpaceDetails number is locked for the reservation. When true the functionSpaceDetails number cannot be changed
     * @type {boolean}
     * @memberof LinkedReservationInfoType
     */
    roomNumberLocked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    roomType?: string;
    /**
     * This attribute checks if rate is suppressed or not in order to properly show strike through.
     * @type {boolean}
     * @memberof LinkedReservationInfoType
     */
    suppressRate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    surname?: string;
    /**
     * 
     * @type {string}
     * @memberof LinkedReservationInfoType
     */
    title?: string;
}

/**
 * Check if a given object implements the LinkedReservationInfoType interface.
 */
export function instanceOfLinkedReservationInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LinkedReservationInfoTypeFromJSON(json: any): LinkedReservationInfoType {
    return LinkedReservationInfoTypeFromJSONTyped(json, false);
}

export function LinkedReservationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkedReservationInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowedActions': !exists(json, 'allowedActions') ? undefined : ((json['allowedActions'] as Array<any>).map(ReservationAllowedActionTypeFromJSON)),
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'blockDates': !exists(json, 'blockDates') ? undefined : TimeSpanTypeFromJSON(json['blockDates']),
        'displayColor': !exists(json, 'displayColor') ? undefined : json['displayColor'],
        'functionSpaceDetails': !exists(json, 'functionSpaceDetails') ? undefined : json['functionSpaceDetails'],
        'givenName': !exists(json, 'givenName') ? undefined : json['givenName'],
        'guarantee': !exists(json, 'guarantee') ? undefined : ResGuaranteeTypeFromJSON(json['guarantee']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'linkReservationType': !exists(json, 'linkReservationType') ? undefined : LinkedReservationTypeFromJSON(json['linkReservationType']),
        'rate': !exists(json, 'rate') ? undefined : CurrencyAmountTypeFromJSON(json['rate']),
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'reservationBlock': !exists(json, 'reservationBlock') ? undefined : ReservationBlockTypeFromJSON(json['reservationBlock']),
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'reservationStatus': !exists(json, 'reservationStatus') ? undefined : PMSResStatusTypeFromJSON(json['reservationStatus']),
        'reverseCheckInAllowed': !exists(json, 'reverseCheckInAllowed') ? undefined : json['reverseCheckInAllowed'],
        'roomNumberLocked': !exists(json, 'roomNumberLocked') ? undefined : json['roomNumberLocked'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'suppressRate': !exists(json, 'suppressRate') ? undefined : json['suppressRate'],
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function LinkedReservationInfoTypeToJSON(value?: LinkedReservationInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowedActions': value.allowedActions === undefined ? undefined : ((value.allowedActions as Array<any>).map(ReservationAllowedActionTypeToJSON)),
        'balance': CurrencyAmountTypeToJSON(value.balance),
        'blockDates': TimeSpanTypeToJSON(value.blockDates),
        'displayColor': value.displayColor,
        'functionSpaceDetails': value.functionSpaceDetails,
        'givenName': value.givenName,
        'guarantee': ResGuaranteeTypeToJSON(value.guarantee),
        'hotelId': value.hotelId,
        'linkReservationType': LinkedReservationTypeToJSON(value.linkReservationType),
        'rate': CurrencyAmountTypeToJSON(value.rate),
        'ratePlanCode': value.ratePlanCode,
        'reservationBlock': ReservationBlockTypeToJSON(value.reservationBlock),
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'reservationStatus': PMSResStatusTypeToJSON(value.reservationStatus),
        'reverseCheckInAllowed': value.reverseCheckInAllowed,
        'roomNumberLocked': value.roomNumberLocked,
        'roomType': value.roomType,
        'suppressRate': value.suppressRate,
        'surname': value.surname,
        'title': value.title,
    };
}

