/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CustomNumberConfigurationAreaType } from './CustomNumberConfigurationAreaType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Custom number configuration details.
 * @export
 * @interface CustomNumberConfigurationType
 */
export interface CustomNumberConfigurationType {
    /**
     *
     * @type {CustomNumberConfigurationAreaType}
     * @memberof CustomNumberConfigurationType
     */
    area?: CustomNumberConfigurationAreaType;
    /**
     * Custom number configuration code.
     * @type {string}
     * @memberof CustomNumberConfigurationType
     */
    code?: string;
    /**
     * The condition to be met to generate and apply the custom number.
     * @type {string}
     * @memberof CustomNumberConfigurationType
     */
    condition?: string;
    /**
     * The description of the custom number configuration code.
     * @type {string}
     * @memberof CustomNumberConfigurationType
     */
    description?: string;
    /**
     * The formula to generate the custom number.
     * @type {string}
     * @memberof CustomNumberConfigurationType
     */
    formula?: string;
    /**
     * Hotel context for the custom number configuration.
     * @type {string}
     * @memberof CustomNumberConfigurationType
     */
    hotelId?: string;
    /**
     * Indicator that tells whether the configuration is active or not.
     * @type {boolean}
     * @memberof CustomNumberConfigurationType
     */
    inActive?: boolean;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof CustomNumberConfigurationType
     */
    orderSequence?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof CustomNumberConfigurationType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the CustomNumberConfigurationType interface.
 */
export declare function instanceOfCustomNumberConfigurationType(value: object): boolean;
export declare function CustomNumberConfigurationTypeFromJSON(json: any): CustomNumberConfigurationType;
export declare function CustomNumberConfigurationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomNumberConfigurationType;
export declare function CustomNumberConfigurationTypeToJSON(value?: CustomNumberConfigurationType | null): any;