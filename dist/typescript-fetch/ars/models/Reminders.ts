/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ARReminderType } from './ARReminderType';
import {
    ARReminderTypeFromJSON,
    ARReminderTypeFromJSONTyped,
    ARReminderTypeToJSON,
} from './ARReminderType';
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
 * Response to the request to fetch pending Reminders for Accounts.
 * @export
 * @interface Reminders
 */
export interface Reminders {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof Reminders
     */
    links?: Array<InstanceLink>;
    /**
     * Information about a Reminder.
     * @type {Array<ARReminderType>}
     * @memberof Reminders
     */
    remindersDetails?: Array<ARReminderType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof Reminders
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the Reminders interface.
 */
export function instanceOfReminders(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RemindersFromJSON(json: any): Reminders {
    return RemindersFromJSONTyped(json, false);
}

export function RemindersFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reminders {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'remindersDetails': !exists(json, 'remindersDetails') ? undefined : ((json['remindersDetails'] as Array<any>).map(ARReminderTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RemindersToJSON(value?: Reminders | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'remindersDetails': value.remindersDetails === undefined ? undefined : ((value.remindersDetails as Array<any>).map(ARReminderTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

