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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MailingActionCodeType } from './MailingActionCodeType';
import {
    MailingActionCodeTypeFromJSON,
    MailingActionCodeTypeFromJSONTyped,
    MailingActionCodeTypeToJSON,
} from './MailingActionCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating Mailing Action Codes.
 * @export
 * @interface MailingActionCodesCriteria
 */
export interface MailingActionCodesCriteria {
    /**
     * List of Mailing Action Codes.
     * @type {Array<MailingActionCodeType>}
     * @memberof MailingActionCodesCriteria
     */
    mailingActionCodes?: Array<MailingActionCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MailingActionCodesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MailingActionCodesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MailingActionCodesCriteria interface.
 */
export function instanceOfMailingActionCodesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MailingActionCodesCriteriaFromJSON(json: any): MailingActionCodesCriteria {
    return MailingActionCodesCriteriaFromJSONTyped(json, false);
}

export function MailingActionCodesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MailingActionCodesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mailingActionCodes': !exists(json, 'mailingActionCodes') ? undefined : ((json['mailingActionCodes'] as Array<any>).map(MailingActionCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MailingActionCodesCriteriaToJSON(value?: MailingActionCodesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mailingActionCodes': value.mailingActionCodes === undefined ? undefined : ((value.mailingActionCodes as Array<any>).map(MailingActionCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

