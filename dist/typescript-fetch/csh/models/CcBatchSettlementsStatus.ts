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
import type { CCBatchSettlementsStatusType } from './CCBatchSettlementsStatusType';
import {
    CCBatchSettlementsStatusTypeFromJSON,
    CCBatchSettlementsStatusTypeFromJSONTyped,
    CCBatchSettlementsStatusTypeToJSON,
} from './CCBatchSettlementsStatusType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for credit card settlements status.
 * @export
 * @interface CcBatchSettlementsStatus
 */
export interface CcBatchSettlementsStatus {
    /**
     * 
     * @type {CCBatchSettlementsStatusType}
     * @memberof CcBatchSettlementsStatus
     */
    batchSettlementsStatus?: CCBatchSettlementsStatusType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CcBatchSettlementsStatus
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CcBatchSettlementsStatus
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CcBatchSettlementsStatus interface.
 */
export function instanceOfCcBatchSettlementsStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CcBatchSettlementsStatusFromJSON(json: any): CcBatchSettlementsStatus {
    return CcBatchSettlementsStatusFromJSONTyped(json, false);
}

export function CcBatchSettlementsStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CcBatchSettlementsStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'batchSettlementsStatus': !exists(json, 'batchSettlementsStatus') ? undefined : CCBatchSettlementsStatusTypeFromJSON(json['batchSettlementsStatus']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CcBatchSettlementsStatusToJSON(value?: CcBatchSettlementsStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'batchSettlementsStatus': CCBatchSettlementsStatusTypeToJSON(value.batchSettlementsStatus),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

