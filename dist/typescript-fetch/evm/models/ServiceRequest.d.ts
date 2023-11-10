/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { ProfileId } from './ProfileId';
import type { ReservationIdList } from './ReservationIdList';
import type { ServiceRequestStatusType } from './ServiceRequestStatusType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Service request.
 * @export
 * @interface ServiceRequest
 */
export interface ServiceRequest {
    /**
     * Description of the action taken to complete the request.
     * @type {string}
     * @memberof ServiceRequest
     */
    action?: string;
    /**
     * The follow up description.
     * @type {string}
     * @memberof ServiceRequest
     */
    closeDescription?: string;
    /**
     * The user who closed the service request.
     * @type {string}
     * @memberof ServiceRequest
     */
    closedBy?: string;
    /**
     * The date-time in which the service request was closed.
     * @type {string}
     * @memberof ServiceRequest
     */
    closedDate?: string;
    /**
     * Service request code.
     * @type {string}
     * @memberof ServiceRequest
     */
    code?: string;
    /**
     * Description of the service request.
     * @type {string}
     * @memberof ServiceRequest
     */
    comment?: string;
    /**
     * The date-time in which the service request was completed.
     * @type {string}
     * @memberof ServiceRequest
     */
    completionDate?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof ServiceRequest
     */
    department?: CodeDescriptionType;
    /**
     * The functionSpaceDetails number in which the service request was created.
     * @type {string}
     * @memberof ServiceRequest
     */
    functionSpaceDetails?: string;
    /**
     * The user who guaranteed the completion of the service request.
     * @type {string}
     * @memberof ServiceRequest
     */
    guaranteedBy?: string;
    /**
     * Communication method picked from guest profile.
     * @type {string}
     * @memberof ServiceRequest
     */
    guestContactMethod?: string;
    /**
     * The guest name.
     * @type {string}
     * @memberof ServiceRequest
     */
    guestName?: string;
    /**
     * Hotel Code of the service request.
     * @type {string}
     * @memberof ServiceRequest
     */
    hotelId?: string;
    /**
     * The date-time in which the service request was opened.
     * @type {string}
     * @memberof ServiceRequest
     */
    openDate?: string;
    /**
     * The priority level of the service request.
     * @type {string}
     * @memberof ServiceRequest
     */
    priority?: string;
    /**
     *
     * @type {ProfileId}
     * @memberof ServiceRequest
     */
    profileId?: ProfileId;
    /**
     *
     * @type {ReservationIdList}
     * @memberof ServiceRequest
     */
    reservationIdList?: ReservationIdList;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ServiceRequest
     */
    serviceRequestId?: UniqueIDType;
    /**
     *
     * @type {ServiceRequestStatusType}
     * @memberof ServiceRequest
     */
    status?: ServiceRequestStatusType;
}
/**
 * Check if a given object implements the ServiceRequest interface.
 */
export declare function instanceOfServiceRequest(value: object): boolean;
export declare function ServiceRequestFromJSON(json: any): ServiceRequest;
export declare function ServiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceRequest;
export declare function ServiceRequestToJSON(value?: ServiceRequest | null): any;
