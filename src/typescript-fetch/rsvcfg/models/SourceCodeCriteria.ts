/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { SourceCodeType } from './SourceCodeType';
import {
    SourceCodeTypeFromJSON,
    SourceCodeTypeFromJSONTyped,
    SourceCodeTypeToJSON,
} from './SourceCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object that holds the details of Source Code to be created.
 * @export
 * @interface SourceCodeCriteria
 */
export interface SourceCodeCriteria {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof SourceCodeCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {SourceCodeType}
     * @memberof SourceCodeCriteria
     */
    sourceCode?: SourceCodeType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof SourceCodeCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the SourceCodeCriteria interface.
 */
export function instanceOfSourceCodeCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SourceCodeCriteriaFromJSON(json: any): SourceCodeCriteria {
    return SourceCodeCriteriaFromJSONTyped(json, false);
}

export function SourceCodeCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceCodeCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'sourceCode': !exists(json, 'sourceCode') ? undefined : SourceCodeTypeFromJSON(json['sourceCode']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function SourceCodeCriteriaToJSON(value?: SourceCodeCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'sourceCode': SourceCodeTypeToJSON(value.sourceCode),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
