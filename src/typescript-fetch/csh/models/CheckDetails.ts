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
 * Response object to Fetch the check details for a given posting posted through the POS.
 * @export
 * @interface CheckDetails
 */
export interface CheckDetails {
    /**
     * Indicates the Cheque date.
     * @type {string}
     * @memberof CheckDetails
     */
    checkDate?: string;
    /**
     * Used for Character Strings, length 0 to 32000.
     * @type {string}
     * @memberof CheckDetails
     */
    checkDetailsInfo?: string;
    /**
     * Response of guest check Image details in encoded format.
     * @type {string}
     * @memberof CheckDetails
     */
    checkImageInfo?: string;
    /**
     * Used for Character Strings, length 0 to 200.
     * @type {string}
     * @memberof CheckDetails
     */
    checkNumber?: string;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CheckDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CheckDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CheckDetails interface.
 */
export function instanceOfCheckDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckDetailsFromJSON(json: any): CheckDetails {
    return CheckDetailsFromJSONTyped(json, false);
}

export function CheckDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkDate': !exists(json, 'checkDate') ? undefined : json['checkDate'],
        'checkDetailsInfo': !exists(json, 'checkDetailsInfo') ? undefined : json['checkDetailsInfo'],
        'checkImageInfo': !exists(json, 'checkImageInfo') ? undefined : json['checkImageInfo'],
        'checkNumber': !exists(json, 'checkNumber') ? undefined : json['checkNumber'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CheckDetailsToJSON(value?: CheckDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checkDate': value.checkDate,
        'checkDetailsInfo': value.checkDetailsInfo,
        'checkImageInfo': value.checkImageInfo,
        'checkNumber': value.checkNumber,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

