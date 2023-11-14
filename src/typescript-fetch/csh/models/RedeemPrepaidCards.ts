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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { RedeemPrepaidCardCriteriaType } from './RedeemPrepaidCardCriteriaType';
import {
    RedeemPrepaidCardCriteriaTypeFromJSON,
    RedeemPrepaidCardCriteriaTypeFromJSONTyped,
    RedeemPrepaidCardCriteriaTypeToJSON,
} from './RedeemPrepaidCardCriteriaType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request type for Prepaid card redeem amount request
 * @export
 * @interface RedeemPrepaidCards
 */
export interface RedeemPrepaidCards {
    /**
     * 
     * @type {RedeemPrepaidCardCriteriaType}
     * @memberof RedeemPrepaidCards
     */
    criteria?: RedeemPrepaidCardCriteriaType;
    /**
     * 
     * @type {Links}
     * @memberof RedeemPrepaidCards
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof RedeemPrepaidCards
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the RedeemPrepaidCards interface.
 */
export function instanceOfRedeemPrepaidCards(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RedeemPrepaidCardsFromJSON(json: any): RedeemPrepaidCards {
    return RedeemPrepaidCardsFromJSONTyped(json, false);
}

export function RedeemPrepaidCardsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedeemPrepaidCards {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : RedeemPrepaidCardCriteriaTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function RedeemPrepaidCardsToJSON(value?: RedeemPrepaidCards | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': RedeemPrepaidCardCriteriaTypeToJSON(value.criteria),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
