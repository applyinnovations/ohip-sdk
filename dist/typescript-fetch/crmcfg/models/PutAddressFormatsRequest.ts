/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressFormatType } from './AddressFormatType';
import {
    AddressFormatTypeFromJSON,
    AddressFormatTypeFromJSONTyped,
    AddressFormatTypeToJSON,
} from './AddressFormatType';
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
 * 
 * @export
 * @interface PutAddressFormatsRequest
 */
export interface PutAddressFormatsRequest {
    /**
     * An Address formats.
     * @type {Array<AddressFormatType>}
     * @memberof PutAddressFormatsRequest
     */
    formats?: Array<AddressFormatType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutAddressFormatsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutAddressFormatsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutAddressFormatsRequest interface.
 */
export function instanceOfPutAddressFormatsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutAddressFormatsRequestFromJSON(json: any): PutAddressFormatsRequest {
    return PutAddressFormatsRequestFromJSONTyped(json, false);
}

export function PutAddressFormatsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutAddressFormatsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'formats': !exists(json, 'formats') ? undefined : ((json['formats'] as Array<any>).map(AddressFormatTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutAddressFormatsRequestToJSON(value?: PutAddressFormatsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'formats': value.formats === undefined ? undefined : ((value.formats as Array<any>).map(AddressFormatTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

