/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RestrictionStatusesType } from './RestrictionStatusesType';
/**
 * The RestrictionStatusType is used to indicate the type of restriction applied. An enumerated restriction type is defined in the attribute group.
 * @export
 * @interface RestrictionStatusType
 */
export interface RestrictionStatusType {
    /**
     *
     * @type {RestrictionStatusesType}
     * @memberof RestrictionStatusType
     */
    code?: RestrictionStatusesType;
    /**
     * Indicates Length of Stay 1 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
     * @type {boolean}
     * @memberof RestrictionStatusType
     */
    lOS1?: boolean;
    /**
     * Indicates Length of Stay 2 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
     * @type {boolean}
     * @memberof RestrictionStatusType
     */
    lOS2?: boolean;
    /**
     * Indicates Length of Stay 3 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
     * @type {boolean}
     * @memberof RestrictionStatusType
     */
    lOS3?: boolean;
    /**
     * Indicates Length of Stay 4 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
     * @type {boolean}
     * @memberof RestrictionStatusType
     */
    lOS4?: boolean;
    /**
     * Indicates Length of Stay 5 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
     * @type {boolean}
     * @memberof RestrictionStatusType
     */
    lOS5?: boolean;
    /**
     * Indicates Length of Stay 6 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
     * @type {boolean}
     * @memberof RestrictionStatusType
     */
    lOS6?: boolean;
    /**
     * Indicates Length of Stay 7 or more is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable.
     * @type {boolean}
     * @memberof RestrictionStatusType
     */
    lOS7?: boolean;
    /**
     * Defines restriction in conjunction with Restriction Code. Value must be specified for Restriction Codes MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking.
     * @type {number}
     * @memberof RestrictionStatusType
     */
    unit?: number;
}
/**
 * Check if a given object implements the RestrictionStatusType interface.
 */
export declare function instanceOfRestrictionStatusType(value: object): boolean;
export declare function RestrictionStatusTypeFromJSON(json: any): RestrictionStatusType;
export declare function RestrictionStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestrictionStatusType;
export declare function RestrictionStatusTypeToJSON(value?: RestrictionStatusType | null): any;
