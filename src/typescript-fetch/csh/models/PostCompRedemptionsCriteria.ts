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
import type { RedemptionType } from './RedemptionType';
import {
    RedemptionTypeFromJSON,
    RedemptionTypeFromJSONTyped,
    RedemptionTypeToJSON,
} from './RedemptionType';

/**
 * Criteria to post complimentary bucket redemptions request.
 * @export
 * @interface PostCompRedemptionsCriteria
 */
export interface PostCompRedemptionsCriteria {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof PostCompRedemptionsCriteria
     */
    cashierId?: number;
    /**
     * Information regarding Complimentary Bucket Redemption object.
     * @type {Array<RedemptionType>}
     * @memberof PostCompRedemptionsCriteria
     */
    compRedemptions?: Array<RedemptionType>;
    /**
     * Folio Window.
     * @type {number}
     * @memberof PostCompRedemptionsCriteria
     */
    folioView?: number;
    /**
     * Membership number.
     * @type {string}
     * @memberof PostCompRedemptionsCriteria
     */
    membershipId?: string;
}

/**
 * Check if a given object implements the PostCompRedemptionsCriteria interface.
 */
export function instanceOfPostCompRedemptionsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostCompRedemptionsCriteriaFromJSON(json: any): PostCompRedemptionsCriteria {
    return PostCompRedemptionsCriteriaFromJSONTyped(json, false);
}

export function PostCompRedemptionsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCompRedemptionsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'compRedemptions': !exists(json, 'compRedemptions') ? undefined : ((json['compRedemptions'] as Array<any>).map(RedemptionTypeFromJSON)),
        'folioView': !exists(json, 'folioView') ? undefined : json['folioView'],
        'membershipId': !exists(json, 'membershipId') ? undefined : json['membershipId'],
    };
}

export function PostCompRedemptionsCriteriaToJSON(value?: PostCompRedemptionsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierId': value.cashierId,
        'compRedemptions': value.compRedemptions === undefined ? undefined : ((value.compRedemptions as Array<any>).map(RedemptionTypeToJSON)),
        'folioView': value.folioView,
        'membershipId': value.membershipId,
    };
}

