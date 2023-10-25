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
import type { ActivatePrepaidCardCriteria } from './ActivatePrepaidCardCriteria';
import {
    ActivatePrepaidCardCriteriaFromJSON,
    ActivatePrepaidCardCriteriaFromJSONTyped,
    ActivatePrepaidCardCriteriaToJSON,
} from './ActivatePrepaidCardCriteria';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request type for cashout prepaid card.
 * @export
 * @interface CashOutPrepaidCard
 */
export interface CashOutPrepaidCard {
    /**
     * 
     * @type {ActivatePrepaidCardCriteria}
     * @memberof CashOutPrepaidCard
     */
    criteria?: ActivatePrepaidCardCriteria;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CashOutPrepaidCard
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CashOutPrepaidCard interface.
 */
export function instanceOfCashOutPrepaidCard(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CashOutPrepaidCardFromJSON(json: any): CashOutPrepaidCard {
    return CashOutPrepaidCardFromJSONTyped(json, false);
}

export function CashOutPrepaidCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashOutPrepaidCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : ActivatePrepaidCardCriteriaFromJSON(json['criteria']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CashOutPrepaidCardToJSON(value?: CashOutPrepaidCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': ActivatePrepaidCardCriteriaToJSON(value.criteria),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

