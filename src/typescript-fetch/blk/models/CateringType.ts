/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ApplyEventAttendeesChangesToEventsType } from './ApplyEventAttendeesChangesToEventsType';
import {
    ApplyEventAttendeesChangesToEventsTypeFromJSON,
    ApplyEventAttendeesChangesToEventsTypeFromJSONTyped,
    ApplyEventAttendeesChangesToEventsTypeToJSON,
} from './ApplyEventAttendeesChangesToEventsType';
import type { BookingStatusDetailType } from './BookingStatusDetailType';
import {
    BookingStatusDetailTypeFromJSON,
    BookingStatusDetailTypeFromJSONTyped,
    BookingStatusDetailTypeToJSON,
} from './BookingStatusDetailType';
import type { BookingStatusHistoryType } from './BookingStatusHistoryType';
import {
    BookingStatusHistoryTypeFromJSON,
    BookingStatusHistoryTypeFromJSONTyped,
    BookingStatusHistoryTypeToJSON,
} from './BookingStatusHistoryType';
import type { CancellationDetailsType } from './CancellationDetailsType';
import {
    CancellationDetailsTypeFromJSON,
    CancellationDetailsTypeFromJSONTyped,
    CancellationDetailsTypeToJSON,
} from './CancellationDetailsType';
import type { CateringRevenueType } from './CateringRevenueType';
import {
    CateringRevenueTypeFromJSON,
    CateringRevenueTypeFromJSONTyped,
    CateringRevenueTypeToJSON,
} from './CateringRevenueType';
import type { EventAttendeesType } from './EventAttendeesType';
import {
    EventAttendeesTypeFromJSON,
    EventAttendeesTypeFromJSONTyped,
    EventAttendeesTypeToJSON,
} from './EventAttendeesType';
import type { EventOrderType } from './EventOrderType';
import {
    EventOrderTypeFromJSON,
    EventOrderTypeFromJSONTyped,
    EventOrderTypeToJSON,
} from './EventOrderType';
import type { ResourceDiscountTypeType } from './ResourceDiscountTypeType';
import {
    ResourceDiscountTypeTypeFromJSON,
    ResourceDiscountTypeTypeFromJSONTyped,
    ResourceDiscountTypeTypeToJSON,
} from './ResourceDiscountTypeType';

/**
 * Contains catering related information for the block.
 * @export
 * @interface CateringType
 */
export interface CateringType {
    /**
     * Indicates whether BoardInfo changes can be applied to all events of the block.
     * @type {boolean}
     * @memberof CateringType
     */
    applyBoardInfoToAllEvents?: boolean;
    /**
     * 
     * @type {ApplyEventAttendeesChangesToEventsType}
     * @memberof CateringType
     */
    applyEventAttendeesChangesToEvents?: ApplyEventAttendeesChangesToEventsType;
    /**
     * Indicates whether Guarantee changes can be applied to all events of the block.
     * @type {boolean}
     * @memberof CateringType
     */
    applyEventsGuaranteeToAllEvents?: boolean;
    /**
     * The name by which the group wishes to be identified in the hotel.
     * @type {string}
     * @memberof CateringType
     */
    boardInfo?: string;
    /**
     * 
     * @type {CancellationDetailsType}
     * @memberof CateringType
     */
    cancellationDetails?: CancellationDetailsType;
    /**
     * Internal status for the catering.
     * @type {string}
     * @memberof CateringType
     */
    cateringInternalStatus?: string;
    /**
     * Next catering status of the business block.
     * @type {Array<BookingStatusDetailType>}
     * @memberof CateringType
     */
    cateringNextStatusList?: Array<BookingStatusDetailType>;
    /**
     * Catering Owner of the block.
     * @type {string}
     * @memberof CateringType
     */
    cateringOwner?: string;
    /**
     * 
     * @type {CateringRevenueType}
     * @memberof CateringType
     */
    cateringRevenue?: CateringRevenueType;
    /**
     * 
     * @type {BookingStatusDetailType}
     * @memberof CateringType
     */
    cateringStatus?: BookingStatusDetailType;
    /**
     * Collection of catering status history.
     * @type {Array<BookingStatusHistoryType>}
     * @memberof CateringType
     */
    cateringStatusChangeHistory?: Array<BookingStatusHistoryType>;
    /**
     * Catering contract number for the block.
     * @type {string}
     * @memberof CateringType
     */
    contractNumber?: string;
    /**
     * Date by which event group must make a decision on the booking.
     * @type {string}
     * @memberof CateringType
     */
    decisionDate?: string;
    /**
     * 
     * @type {EventAttendeesType}
     * @memberof CateringType
     */
    eventAttendees?: EventAttendeesType;
    /**
     * 
     * @type {EventOrderType}
     * @memberof CateringType
     */
    eventOrder?: EventOrderType;
    /**
     * Date used by catering manager or coordinator to follow up on the event.
     * @type {string}
     * @memberof CateringType
     */
    followUpDate?: string;
    /**
     * This provides more detail the type of function for which the event is held. For example, Trade Show, Meeting, or Annual Convention.
     * @type {string}
     * @memberof CateringType
     */
    functionInfo?: string;
    /**
     * Indicates if the block has any package events.
     * @type {boolean}
     * @memberof CateringType
     */
    hasPackageEvents?: boolean;
    /**
     * The name of the customer's in-house representative or contact on the day of the catering event.
     * @type {string}
     * @memberof CateringType
     */
    onSiteName?: string;
    /**
     * Indicates whether to ignore any warning during applying the changes to the events associated with the current block.
     * @type {boolean}
     * @memberof CateringType
     */
    overrideEventsProcessingWarnings?: boolean;
    /**
     * Indicates whether event packages or templates can be applied to the block.
     * @type {boolean}
     * @memberof CateringType
     */
    pkgsTmplt?: boolean;
    /**
     * Indicates the resource discount percentage to be applied to resource items associated with the catering event.
     * @type {number}
     * @memberof CateringType
     */
    resourceDiscountPercentage?: number;
    /**
     * 
     * @type {ResourceDiscountTypeType}
     * @memberof CateringType
     */
    resourceDiscountType?: ResourceDiscountTypeType;
    /**
     * Indicates whether the catering change logging for the booking is active or not. Any change made to catering events and resources will be logged when this is true.
     * @type {boolean}
     * @memberof CateringType
     */
    trackChanges?: boolean;
}

/**
 * Check if a given object implements the CateringType interface.
 */
export function instanceOfCateringType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringTypeFromJSON(json: any): CateringType {
    return CateringTypeFromJSONTyped(json, false);
}

export function CateringTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applyBoardInfoToAllEvents': !exists(json, 'applyBoardInfoToAllEvents') ? undefined : json['applyBoardInfoToAllEvents'],
        'applyEventAttendeesChangesToEvents': !exists(json, 'applyEventAttendeesChangesToEvents') ? undefined : ApplyEventAttendeesChangesToEventsTypeFromJSON(json['applyEventAttendeesChangesToEvents']),
        'applyEventsGuaranteeToAllEvents': !exists(json, 'applyEventsGuaranteeToAllEvents') ? undefined : json['applyEventsGuaranteeToAllEvents'],
        'boardInfo': !exists(json, 'boardInfo') ? undefined : json['boardInfo'],
        'cancellationDetails': !exists(json, 'cancellationDetails') ? undefined : CancellationDetailsTypeFromJSON(json['cancellationDetails']),
        'cateringInternalStatus': !exists(json, 'cateringInternalStatus') ? undefined : json['cateringInternalStatus'],
        'cateringNextStatusList': !exists(json, 'cateringNextStatusList') ? undefined : ((json['cateringNextStatusList'] as Array<any>).map(BookingStatusDetailTypeFromJSON)),
        'cateringOwner': !exists(json, 'cateringOwner') ? undefined : json['cateringOwner'],
        'cateringRevenue': !exists(json, 'cateringRevenue') ? undefined : CateringRevenueTypeFromJSON(json['cateringRevenue']),
        'cateringStatus': !exists(json, 'cateringStatus') ? undefined : BookingStatusDetailTypeFromJSON(json['cateringStatus']),
        'cateringStatusChangeHistory': !exists(json, 'cateringStatusChangeHistory') ? undefined : ((json['cateringStatusChangeHistory'] as Array<any>).map(BookingStatusHistoryTypeFromJSON)),
        'contractNumber': !exists(json, 'contractNumber') ? undefined : json['contractNumber'],
        'decisionDate': !exists(json, 'decisionDate') ? undefined : json['decisionDate'],
        'eventAttendees': !exists(json, 'eventAttendees') ? undefined : EventAttendeesTypeFromJSON(json['eventAttendees']),
        'eventOrder': !exists(json, 'eventOrder') ? undefined : EventOrderTypeFromJSON(json['eventOrder']),
        'followUpDate': !exists(json, 'followUpDate') ? undefined : json['followUpDate'],
        'functionInfo': !exists(json, 'functionInfo') ? undefined : json['functionInfo'],
        'hasPackageEvents': !exists(json, 'hasPackageEvents') ? undefined : json['hasPackageEvents'],
        'onSiteName': !exists(json, 'onSiteName') ? undefined : json['onSiteName'],
        'overrideEventsProcessingWarnings': !exists(json, 'overrideEventsProcessingWarnings') ? undefined : json['overrideEventsProcessingWarnings'],
        'pkgsTmplt': !exists(json, 'pkgsTmplt') ? undefined : json['pkgsTmplt'],
        'resourceDiscountPercentage': !exists(json, 'resourceDiscountPercentage') ? undefined : json['resourceDiscountPercentage'],
        'resourceDiscountType': !exists(json, 'resourceDiscountType') ? undefined : ResourceDiscountTypeTypeFromJSON(json['resourceDiscountType']),
        'trackChanges': !exists(json, 'trackChanges') ? undefined : json['trackChanges'],
    };
}

export function CateringTypeToJSON(value?: CateringType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applyBoardInfoToAllEvents': value.applyBoardInfoToAllEvents,
        'applyEventAttendeesChangesToEvents': ApplyEventAttendeesChangesToEventsTypeToJSON(value.applyEventAttendeesChangesToEvents),
        'applyEventsGuaranteeToAllEvents': value.applyEventsGuaranteeToAllEvents,
        'boardInfo': value.boardInfo,
        'cancellationDetails': CancellationDetailsTypeToJSON(value.cancellationDetails),
        'cateringInternalStatus': value.cateringInternalStatus,
        'cateringNextStatusList': value.cateringNextStatusList === undefined ? undefined : ((value.cateringNextStatusList as Array<any>).map(BookingStatusDetailTypeToJSON)),
        'cateringOwner': value.cateringOwner,
        'cateringRevenue': CateringRevenueTypeToJSON(value.cateringRevenue),
        'cateringStatus': BookingStatusDetailTypeToJSON(value.cateringStatus),
        'cateringStatusChangeHistory': value.cateringStatusChangeHistory === undefined ? undefined : ((value.cateringStatusChangeHistory as Array<any>).map(BookingStatusHistoryTypeToJSON)),
        'contractNumber': value.contractNumber,
        'decisionDate': value.decisionDate,
        'eventAttendees': EventAttendeesTypeToJSON(value.eventAttendees),
        'eventOrder': EventOrderTypeToJSON(value.eventOrder),
        'followUpDate': value.followUpDate,
        'functionInfo': value.functionInfo,
        'hasPackageEvents': value.hasPackageEvents,
        'onSiteName': value.onSiteName,
        'overrideEventsProcessingWarnings': value.overrideEventsProcessingWarnings,
        'pkgsTmplt': value.pkgsTmplt,
        'resourceDiscountPercentage': value.resourceDiscountPercentage,
        'resourceDiscountType': ResourceDiscountTypeTypeToJSON(value.resourceDiscountType),
        'trackChanges': value.trackChanges,
    };
}
