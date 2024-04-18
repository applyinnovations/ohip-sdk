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
import type { BatchDepositType } from './BatchDepositType';
import {
    BatchDepositTypeFromJSON,
    BatchDepositTypeFromJSONTyped,
    BatchDepositTypeToJSON,
} from './BatchDepositType';
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
 * Request for submitting batch deposit for reservations.
 * @export
 * @interface BatchDeposit
 */
export interface BatchDeposit {
    /**
     * 
     * @type {BatchDepositType}
     * @memberof BatchDeposit
     */
    batchDeposit?: BatchDepositType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BatchDeposit
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BatchDeposit
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BatchDeposit interface.
 */
export function instanceOfBatchDeposit(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BatchDepositFromJSON(json: any): BatchDeposit {
    return BatchDepositFromJSONTyped(json, false);
}

export function BatchDepositFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchDeposit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'batchDeposit': !exists(json, 'batchDeposit') ? undefined : BatchDepositTypeFromJSON(json['batchDeposit']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BatchDepositToJSON(value?: BatchDeposit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'batchDeposit': BatchDepositTypeToJSON(value.batchDeposit),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
