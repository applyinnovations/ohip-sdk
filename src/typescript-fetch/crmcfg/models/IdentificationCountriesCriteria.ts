/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { IdentificationCountryType } from './IdentificationCountryType';
import {
    IdentificationCountryTypeFromJSON,
    IdentificationCountryTypeFromJSONTyped,
    IdentificationCountryTypeToJSON,
} from './IdentificationCountryType';
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
 * Request object for creating Identification Countries.
 * @export
 * @interface IdentificationCountriesCriteria
 */
export interface IdentificationCountriesCriteria {
    /**
     * List of Identification Countries.
     * @type {Array<IdentificationCountryType>}
     * @memberof IdentificationCountriesCriteria
     */
    identificationCountries?: Array<IdentificationCountryType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof IdentificationCountriesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof IdentificationCountriesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the IdentificationCountriesCriteria interface.
 */
export function instanceOfIdentificationCountriesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IdentificationCountriesCriteriaFromJSON(json: any): IdentificationCountriesCriteria {
    return IdentificationCountriesCriteriaFromJSONTyped(json, false);
}

export function IdentificationCountriesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentificationCountriesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identificationCountries': !exists(json, 'identificationCountries') ? undefined : ((json['identificationCountries'] as Array<any>).map(IdentificationCountryTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function IdentificationCountriesCriteriaToJSON(value?: IdentificationCountriesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identificationCountries': value.identificationCountries === undefined ? undefined : ((value.identificationCountries as Array<any>).map(IdentificationCountryTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

