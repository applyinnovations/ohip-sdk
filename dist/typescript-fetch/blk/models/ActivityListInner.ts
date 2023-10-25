/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ActivityListInnerDeposit } from './ActivityListInnerDeposit';
import {
    ActivityListInnerDepositFromJSON,
    ActivityListInnerDepositFromJSONTyped,
    ActivityListInnerDepositToJSON,
} from './ActivityListInnerDeposit';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { DateTimeSpanType } from './DateTimeSpanType';
import {
    DateTimeSpanTypeFromJSON,
    DateTimeSpanTypeFromJSONTyped,
    DateTimeSpanTypeToJSON,
} from './DateTimeSpanType';
import type { PersonNameType } from './PersonNameType';
import {
    PersonNameTypeFromJSON,
    PersonNameTypeFromJSONTyped,
    PersonNameTypeToJSON,
} from './PersonNameType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Represents a single instance of a scheduled activity.
 * @export
 * @interface ActivityListInner
 */
export interface ActivityListInner {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ActivityListInner
     */
    activityIds?: Array<UniqueIDType>;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ActivityListInner
     */
    amount?: CurrencyAmountType;
    /**
     * 
     * @type {ActivityListInnerDeposit}
     * @memberof ActivityListInner
     */
    deposit?: ActivityListInnerDeposit;
    /**
     * Description of the activity
     * @type {Array<string>}
     * @memberof ActivityListInner
     */
    description?: Array<string>;
    /**
     * 
     * @type {DateTimeSpanType}
     * @memberof ActivityListInner
     */
    duration?: DateTimeSpanType;
    /**
     * Vendor extensions to the activity record.
     * @type {Array<string>}
     * @memberof ActivityListInner
     */
    extensions?: Array<string>;
    /**
     * Any Block code associated with the activity if its a Group booking.
     * @type {string}
     * @memberof ActivityListInner
     */
    groupCode?: string;
    /**
     * The Date by which the activity is deemed Cancelled/Deleted.
     * @type {string}
     * @memberof ActivityListInner
     */
    inactiveDate?: string;
    /**
     * When true indicates that activity link only needs to be inserted or deleted for this record.
     * @type {boolean}
     * @memberof ActivityListInner
     */
    link?: boolean;
    /**
     * The Location where the activity takes place. Eg: Salon
     * @type {string}
     * @memberof ActivityListInner
     */
    location?: string;
    /**
     * Name of the people for whom the activity is scheduled. Can be more than one but should be equal to the number of persons
     * @type {Array<string>}
     * @memberof ActivityListInner
     */
    name?: Array<string>;
    /**
     * Any additional notes or comments regarding the scheduled activity.
     * @type {Array<string>}
     * @memberof ActivityListInner
     */
    note?: Array<string>;
    /**
     * The total number of the people for whom the activity is scheduled. Can be more than one but should be equal to the number of persons
     * @type {number}
     * @memberof ActivityListInner
     */
    numberOfPersons?: number;
    /**
     * The names of the participants.
     * @type {Array<PersonNameType>}
     * @memberof ActivityListInner
     */
    participants?: Array<PersonNameType>;
    /**
     * Activity reservation status. Typical examples are RESERVED, BOOKED, CANCELLED, and TENTATIVE.
     * @type {string}
     * @memberof ActivityListInner
     */
    status?: string;
    /**
     * Activity reservation status description. Typical examples are RESERVED, BOOKED, CANCELLED, and TENTATIVE.
     * @type {string}
     * @memberof ActivityListInner
     */
    statusDescription?: string;
    /**
     * 
     * @type {DateTimeSpanType}
     * @memberof ActivityListInner
     */
    timeSpan?: DateTimeSpanType;
    /**
     * The Type of the activity. Eg: SPA, Golf etc.
     * @type {string}
     * @memberof ActivityListInner
     */
    type?: string;
    /**
     * The URL link to launch the Activity Reservation System to view or edit full details of this activity.
     * @type {string}
     * @memberof ActivityListInner
     */
    uRLLink?: string;
}

/**
 * Check if a given object implements the ActivityListInner interface.
 */
export function instanceOfActivityListInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityListInnerFromJSON(json: any): ActivityListInner {
    return ActivityListInnerFromJSONTyped(json, false);
}

export function ActivityListInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityListInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activityIds': !exists(json, 'activityIds') ? undefined : ((json['activityIds'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'deposit': !exists(json, 'deposit') ? undefined : ActivityListInnerDepositFromJSON(json['deposit']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'duration': !exists(json, 'duration') ? undefined : DateTimeSpanTypeFromJSON(json['duration']),
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'groupCode': !exists(json, 'groupCode') ? undefined : json['groupCode'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'link': !exists(json, 'link') ? undefined : json['link'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'numberOfPersons': !exists(json, 'numberOfPersons') ? undefined : json['numberOfPersons'],
        'participants': !exists(json, 'participants') ? undefined : ((json['participants'] as Array<any>).map(PersonNameTypeFromJSON)),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'statusDescription': !exists(json, 'statusDescription') ? undefined : json['statusDescription'],
        'timeSpan': !exists(json, 'timeSpan') ? undefined : DateTimeSpanTypeFromJSON(json['timeSpan']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'uRLLink': !exists(json, 'uRLLink') ? undefined : json['uRLLink'],
    };
}

export function ActivityListInnerToJSON(value?: ActivityListInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activityIds': value.activityIds === undefined ? undefined : ((value.activityIds as Array<any>).map(UniqueIDTypeToJSON)),
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'deposit': ActivityListInnerDepositToJSON(value.deposit),
        'description': value.description,
        'duration': DateTimeSpanTypeToJSON(value.duration),
        'extensions': value.extensions,
        'groupCode': value.groupCode,
        'inactiveDate': value.inactiveDate,
        'link': value.link,
        'location': value.location,
        'name': value.name,
        'note': value.note,
        'numberOfPersons': value.numberOfPersons,
        'participants': value.participants === undefined ? undefined : ((value.participants as Array<any>).map(PersonNameTypeToJSON)),
        'status': value.status,
        'statusDescription': value.statusDescription,
        'timeSpan': DateTimeSpanTypeToJSON(value.timeSpan),
        'type': value.type,
        'uRLLink': value.uRLLink,
    };
}

