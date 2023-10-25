/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GuaranteeConfigType } from './GuaranteeConfigType';
import {
    GuaranteeConfigTypeFromJSON,
    GuaranteeConfigTypeFromJSONTyped,
    GuaranteeConfigTypeToJSON,
} from './GuaranteeConfigType';
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
 * Request object that holds the details of Guarantee Code to be changed.
 * @export
 * @interface GuaranteeCodeToBeChanged
 */
export interface GuaranteeCodeToBeChanged {
    /**
     * 
     * @type {GuaranteeConfigType}
     * @memberof GuaranteeCodeToBeChanged
     */
    guaranteeCode?: GuaranteeConfigType;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof GuaranteeCodeToBeChanged
     */
    hotelId?: string;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof GuaranteeCodeToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GuaranteeCodeToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the GuaranteeCodeToBeChanged interface.
 */
export function instanceOfGuaranteeCodeToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuaranteeCodeToBeChangedFromJSON(json: any): GuaranteeCodeToBeChanged {
    return GuaranteeCodeToBeChangedFromJSONTyped(json, false);
}

export function GuaranteeCodeToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteeCodeToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guaranteeCode': !exists(json, 'guaranteeCode') ? undefined : GuaranteeConfigTypeFromJSON(json['guaranteeCode']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function GuaranteeCodeToBeChangedToJSON(value?: GuaranteeCodeToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guaranteeCode': GuaranteeConfigTypeToJSON(value.guaranteeCode),
        'hotelId': value.hotelId,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

