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
/**
 * Package Consumption Information. Includes information on quantity of the package used, allowance consumption etc.
 * @export
 * @interface PackageConsumptionType
 */
export interface PackageConsumptionType {
    /**
     * Indicates if Allowance(for POS packages) has been consumed/posted for today.
     * @type {boolean}
     * @memberof PackageConsumptionType
     */
    allowanceConsumed?: boolean;
    /**
     * The default quantity attached in the package.
     * @type {number}
     * @memberof PackageConsumptionType
     */
    defaultQuantity?: number;
    /**
     * The quantity which has been excluded in the package.
     * @type {number}
     * @memberof PackageConsumptionType
     */
    excludedQuantity?: number;
    /**
     * The total quantity of the package, calculated based on the calculation rule as defined in the PackageHeaderType.
     * @type {number}
     * @memberof PackageConsumptionType
     */
    totalQuantity?: number;
}
/**
 * Check if a given object implements the PackageConsumptionType interface.
 */
export declare function instanceOfPackageConsumptionType(value: object): boolean;
export declare function PackageConsumptionTypeFromJSON(json: any): PackageConsumptionType;
export declare function PackageConsumptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageConsumptionType;
export declare function PackageConsumptionTypeToJSON(value?: PackageConsumptionType | null): any;
