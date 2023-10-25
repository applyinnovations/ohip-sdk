/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PrepaidCardInfoType } from './PrepaidCardInfoType';
import {
    PrepaidCardInfoTypeFromJSON,
    PrepaidCardInfoTypeFromJSONTyped,
    PrepaidCardInfoTypeToJSON,
} from './PrepaidCardInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for redeem Prepaid cards request.
 * @export
 * @interface RedeemPrepaidCardsStatus
 */
export interface RedeemPrepaidCardsStatus {
    /**
     * Prepaid card info object.
     * @type {Array<PrepaidCardInfoType>}
     * @memberof RedeemPrepaidCardsStatus
     */
    prepaidCards?: Array<PrepaidCardInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RedeemPrepaidCardsStatus
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RedeemPrepaidCardsStatus interface.
 */
export function instanceOfRedeemPrepaidCardsStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RedeemPrepaidCardsStatusFromJSON(json: any): RedeemPrepaidCardsStatus {
    return RedeemPrepaidCardsStatusFromJSONTyped(json, false);
}

export function RedeemPrepaidCardsStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedeemPrepaidCardsStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'prepaidCards': !exists(json, 'prepaidCards') ? undefined : ((json['prepaidCards'] as Array<any>).map(PrepaidCardInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RedeemPrepaidCardsStatusToJSON(value?: RedeemPrepaidCardsStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prepaidCards': value.prepaidCards === undefined ? undefined : ((value.prepaidCards as Array<any>).map(PrepaidCardInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

