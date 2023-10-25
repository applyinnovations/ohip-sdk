/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EmailDeliveryConfigurationType } from './EmailDeliveryConfigurationType';
import {
    EmailDeliveryConfigurationTypeFromJSON,
    EmailDeliveryConfigurationTypeFromJSONTyped,
    EmailDeliveryConfigurationTypeToJSON,
} from './EmailDeliveryConfigurationType';
import type { FaxDeliveryConfigurationType } from './FaxDeliveryConfigurationType';
import {
    FaxDeliveryConfigurationTypeFromJSON,
    FaxDeliveryConfigurationTypeFromJSONTyped,
    FaxDeliveryConfigurationTypeToJSON,
} from './FaxDeliveryConfigurationType';

/**
 * Delivery Method configuration for Email and Fax Delivery for Other Folios
 * @export
 * @interface OtherFolioDeliveryMethodType
 */
export interface OtherFolioDeliveryMethodType {
    /**
     * 
     * @type {EmailDeliveryConfigurationType}
     * @memberof OtherFolioDeliveryMethodType
     */
    email?: EmailDeliveryConfigurationType;
    /**
     * 
     * @type {FaxDeliveryConfigurationType}
     * @memberof OtherFolioDeliveryMethodType
     */
    fax?: FaxDeliveryConfigurationType;
}

/**
 * Check if a given object implements the OtherFolioDeliveryMethodType interface.
 */
export function instanceOfOtherFolioDeliveryMethodType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OtherFolioDeliveryMethodTypeFromJSON(json: any): OtherFolioDeliveryMethodType {
    return OtherFolioDeliveryMethodTypeFromJSONTyped(json, false);
}

export function OtherFolioDeliveryMethodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OtherFolioDeliveryMethodType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : EmailDeliveryConfigurationTypeFromJSON(json['email']),
        'fax': !exists(json, 'fax') ? undefined : FaxDeliveryConfigurationTypeFromJSON(json['fax']),
    };
}

export function OtherFolioDeliveryMethodTypeToJSON(value?: OtherFolioDeliveryMethodType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': EmailDeliveryConfigurationTypeToJSON(value.email),
        'fax': FaxDeliveryConfigurationTypeToJSON(value.fax),
    };
}

