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
import type { AutoSettleCompFoliosCriteriaType } from './AutoSettleCompFoliosCriteriaType';
import {
    AutoSettleCompFoliosCriteriaTypeFromJSON,
    AutoSettleCompFoliosCriteriaTypeFromJSONTyped,
    AutoSettleCompFoliosCriteriaTypeToJSON,
} from './AutoSettleCompFoliosCriteriaType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request to auto settle comp folios. OPERA will reference the 'Default Comp Payment Method' setting to settle the folio if no authorizer AR account is associated with the folio.
 * @export
 * @interface AutoSettleCompFolios
 */
export interface AutoSettleCompFolios {
    /**
     * 
     * @type {AutoSettleCompFoliosCriteriaType}
     * @memberof AutoSettleCompFolios
     */
    criteria?: AutoSettleCompFoliosCriteriaType;
    /**
     * 
     * @type {WarningsType}
     * @memberof AutoSettleCompFolios
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the AutoSettleCompFolios interface.
 */
export function instanceOfAutoSettleCompFolios(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoSettleCompFoliosFromJSON(json: any): AutoSettleCompFolios {
    return AutoSettleCompFoliosFromJSONTyped(json, false);
}

export function AutoSettleCompFoliosFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoSettleCompFolios {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : AutoSettleCompFoliosCriteriaTypeFromJSON(json['criteria']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function AutoSettleCompFoliosToJSON(value?: AutoSettleCompFolios | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': AutoSettleCompFoliosCriteriaTypeToJSON(value.criteria),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
