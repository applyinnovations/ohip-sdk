/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Reservation eCoupon Type Information.
 * @export
 * @interface ECouponType
 */
export interface ECouponType {
    /**
     * Determines whether the eCoupon is attached through the Rate Code or not.
     * @type {boolean}
     * @memberof ECouponType
     */
    autoAttached?: boolean;
    /**
     * Code to attach the eCoupon to Reservation.
     * @type {string}
     * @memberof ECouponType
     */
    code?: string;
    /**
     * Description of the eCoupon attached to the Reservation.
     * @type {string}
     * @memberof ECouponType
     */
    description?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ECouponType
     */
    eCouponId?: UniqueIDType;
    /**
     * Assigned Quantity for the eCoupon when attached to Reservation.
     * @type {number}
     * @memberof ECouponType
     */
    issuedQuantity?: number;
    /**
     * Rate plan of the attached eCoupon to Reservation.
     * @type {string}
     * @memberof ECouponType
     */
    ratePlanCode?: string;
    /**
     * Reason for attaching/modifing eCoupon.
     * @type {string}
     * @memberof ECouponType
     */
    reason?: string;
    /**
     * Used Quantity of the eCoupon for the Reservation.
     * @type {number}
     * @memberof ECouponType
     */
    usedQuantity?: number;
    /**
     * Determines whether this eCoupon is eligible for welcome offer or not.
     * @type {boolean}
     * @memberof ECouponType
     */
    welcomeOffer?: boolean;
}

/**
 * Check if a given object implements the ECouponType interface.
 */
export function instanceOfECouponType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECouponTypeFromJSON(json: any): ECouponType {
    return ECouponTypeFromJSONTyped(json, false);
}

export function ECouponTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECouponType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoAttached': !exists(json, 'autoAttached') ? undefined : json['autoAttached'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'eCouponId': !exists(json, 'eCouponId') ? undefined : UniqueIDTypeFromJSON(json['eCouponId']),
        'issuedQuantity': !exists(json, 'issuedQuantity') ? undefined : json['issuedQuantity'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'usedQuantity': !exists(json, 'usedQuantity') ? undefined : json['usedQuantity'],
        'welcomeOffer': !exists(json, 'welcomeOffer') ? undefined : json['welcomeOffer'],
    };
}

export function ECouponTypeToJSON(value?: ECouponType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoAttached': value.autoAttached,
        'code': value.code,
        'description': value.description,
        'eCouponId': UniqueIDTypeToJSON(value.eCouponId),
        'issuedQuantity': value.issuedQuantity,
        'ratePlanCode': value.ratePlanCode,
        'reason': value.reason,
        'usedQuantity': value.usedQuantity,
        'welcomeOffer': value.welcomeOffer,
    };
}

