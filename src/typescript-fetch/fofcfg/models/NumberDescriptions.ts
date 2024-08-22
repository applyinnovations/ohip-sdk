/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { NumberDescriptionType } from './NumberDescriptionType';
import {
    NumberDescriptionTypeFromJSON,
    NumberDescriptionTypeFromJSONTyped,
    NumberDescriptionTypeToJSON,
} from './NumberDescriptionType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface NumberDescriptions
 */
export interface NumberDescriptions {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof NumberDescriptions
     */
    links?: Array<InstanceLink>;
    /**
     * Individual number and description.
     * @type {Array<NumberDescriptionType>}
     * @memberof NumberDescriptions
     */
    numberDescriptions?: Array<NumberDescriptionType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof NumberDescriptions
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the NumberDescriptions interface.
 */
export function instanceOfNumberDescriptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NumberDescriptionsFromJSON(json: any): NumberDescriptions {
    return NumberDescriptionsFromJSONTyped(json, false);
}

export function NumberDescriptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumberDescriptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'numberDescriptions': !exists(json, 'numberDescriptions') ? undefined : ((json['numberDescriptions'] as Array<any>).map(NumberDescriptionTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function NumberDescriptionsToJSON(value?: NumberDescriptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'numberDescriptions': value.numberDescriptions === undefined ? undefined : ((value.numberDescriptions as Array<any>).map(NumberDescriptionTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

