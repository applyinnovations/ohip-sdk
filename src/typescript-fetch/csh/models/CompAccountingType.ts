/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DateRangeType } from './DateRangeType';
import {
    DateRangeTypeFromJSON,
    DateRangeTypeFromJSONTyped,
    DateRangeTypeToJSON,
} from './DateRangeType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Authorizer Information
 * @export
 * @interface CompAccountingType
 */
export interface CompAccountingType {
    /**
     * AR Account Number of the authorizer
     * @type {string}
     * @memberof CompAccountingType
     */
    aRNumber?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof CompAccountingType
     */
    authorizerId?: UniqueIDType;
    /**
     * Full name of the authorizer.
     * @type {string}
     * @memberof CompAccountingType
     */
    authorizerName?: string;
    /**
     * Rate code of the authorizer.
     * @type {string}
     * @memberof CompAccountingType
     */
    authorizerRateCode?: string;
    /**
     * Application user name of the authorizer
     * @type {string}
     * @memberof CompAccountingType
     */
    authorizerUserName?: string;
    /**
     * The Comp Type for this Account. Used when using the Comp types functionality
     * @type {string}
     * @memberof CompAccountingType
     */
    compTypeCode?: string;
    /**
     * The coupon or voucher number used by the external gaming system to track postings made to this routing.
     * @type {string}
     * @memberof CompAccountingType
     */
    compVoucherNo?: string;
    /**
     * 
     * @type {DateRangeType}
     * @memberof CompAccountingType
     */
    dateRange?: DateRangeType;
    /**
     * Indicates whether user has the choice to have reservation inherit rate code from the authorizer.
     * @type {boolean}
     * @memberof CompAccountingType
     */
    inheritAuthorizerRateCode?: boolean;
    /**
     * Membership number
     * @type {string}
     * @memberof CompAccountingType
     */
    membershipId?: string;
    /**
     * Unique Id of membership
     * @type {number}
     * @memberof CompAccountingType
     */
    membershipIdNo?: number;
    /**
     * Name displayed on the membership card
     * @type {string}
     * @memberof CompAccountingType
     */
    membershipNameOnCard?: string;
}

/**
 * Check if a given object implements the CompAccountingType interface.
 */
export function instanceOfCompAccountingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompAccountingTypeFromJSON(json: any): CompAccountingType {
    return CompAccountingTypeFromJSONTyped(json, false);
}

export function CompAccountingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompAccountingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aRNumber': !exists(json, 'aRNumber') ? undefined : json['aRNumber'],
        'authorizerId': !exists(json, 'authorizerId') ? undefined : UniqueIDTypeFromJSON(json['authorizerId']),
        'authorizerName': !exists(json, 'authorizerName') ? undefined : json['authorizerName'],
        'authorizerRateCode': !exists(json, 'authorizerRateCode') ? undefined : json['authorizerRateCode'],
        'authorizerUserName': !exists(json, 'authorizerUserName') ? undefined : json['authorizerUserName'],
        'compTypeCode': !exists(json, 'compTypeCode') ? undefined : json['compTypeCode'],
        'compVoucherNo': !exists(json, 'compVoucherNo') ? undefined : json['compVoucherNo'],
        'dateRange': !exists(json, 'dateRange') ? undefined : DateRangeTypeFromJSON(json['dateRange']),
        'inheritAuthorizerRateCode': !exists(json, 'inheritAuthorizerRateCode') ? undefined : json['inheritAuthorizerRateCode'],
        'membershipId': !exists(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipIdNo': !exists(json, 'membershipIdNo') ? undefined : json['membershipIdNo'],
        'membershipNameOnCard': !exists(json, 'membershipNameOnCard') ? undefined : json['membershipNameOnCard'],
    };
}

export function CompAccountingTypeToJSON(value?: CompAccountingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aRNumber': value.aRNumber,
        'authorizerId': UniqueIDTypeToJSON(value.authorizerId),
        'authorizerName': value.authorizerName,
        'authorizerRateCode': value.authorizerRateCode,
        'authorizerUserName': value.authorizerUserName,
        'compTypeCode': value.compTypeCode,
        'compVoucherNo': value.compVoucherNo,
        'dateRange': DateRangeTypeToJSON(value.dateRange),
        'inheritAuthorizerRateCode': value.inheritAuthorizerRateCode,
        'membershipId': value.membershipId,
        'membershipIdNo': value.membershipIdNo,
        'membershipNameOnCard': value.membershipNameOnCard,
    };
}

