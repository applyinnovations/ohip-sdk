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
import type { BlockCateringPackageRevenueBaseType } from './BlockCateringPackageRevenueBaseType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Object containing revenue details of the associated catering package.
 * @export
 * @interface CateringPackageRevenue
 */
export interface CateringPackageRevenue {
    /**
     *
     * @type {BlockCateringPackageRevenueBaseType}
     * @memberof CateringPackageRevenue
     */
    cateringPackageRevenueDetails?: BlockCateringPackageRevenueBaseType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CateringPackageRevenue
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof CateringPackageRevenue
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CateringPackageRevenue interface.
 */
export declare function instanceOfCateringPackageRevenue(value: object): boolean;
export declare function CateringPackageRevenueFromJSON(json: any): CateringPackageRevenue;
export declare function CateringPackageRevenueFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringPackageRevenue;
export declare function CateringPackageRevenueToJSON(value?: CateringPackageRevenue | null): any;
