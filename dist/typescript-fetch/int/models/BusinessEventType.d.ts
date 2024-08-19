/**
 * OPERA Cloud Integration Processor API
 * APIs to get Business Events generated in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BusinessEventDetailType } from './BusinessEventDetailType';
import type { BusinessEventHeaderType } from './BusinessEventHeaderType';
/**
 *
 * @export
 * @interface BusinessEventType
 */
export interface BusinessEventType {
    /**
     *
     * @type {Array<BusinessEventDetailType>}
     * @memberof BusinessEventType
     */
    details?: Array<BusinessEventDetailType>;
    /**
     *
     * @type {BusinessEventHeaderType}
     * @memberof BusinessEventType
     */
    header?: BusinessEventHeaderType;
}
/**
 * Check if a given object implements the BusinessEventType interface.
 */
export declare function instanceOfBusinessEventType(value: object): boolean;
export declare function BusinessEventTypeFromJSON(json: any): BusinessEventType;
export declare function BusinessEventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessEventType;
export declare function BusinessEventTypeToJSON(value?: BusinessEventType | null): any;
