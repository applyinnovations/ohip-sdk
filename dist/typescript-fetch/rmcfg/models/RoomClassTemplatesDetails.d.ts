/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { RoomClassTemplateType } from './RoomClassTemplateType';
import type { WarningType } from './WarningType';
/**
 * Response object for information regarding template room classes.
 * @export
 * @interface RoomClassTemplatesDetails
 */
export interface RoomClassTemplatesDetails {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RoomClassTemplatesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of template room classes.
     * @type {Array<RoomClassTemplateType>}
     * @memberof RoomClassTemplatesDetails
     */
    roomClassTemplates?: Array<RoomClassTemplateType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomClassTemplatesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RoomClassTemplatesDetails interface.
 */
export declare function instanceOfRoomClassTemplatesDetails(value: object): boolean;
export declare function RoomClassTemplatesDetailsFromJSON(json: any): RoomClassTemplatesDetails;
export declare function RoomClassTemplatesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomClassTemplatesDetails;
export declare function RoomClassTemplatesDetailsToJSON(value?: RoomClassTemplatesDetails | null): any;