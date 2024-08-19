/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RatePlanShortInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanShortInfoType{}

// RatePlanShortInfoType The Rate plan code information.
type RatePlanShortInfoType struct {
	Classifications *RatePlanClassificationsType `json:"classifications,omitempty"`
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	Descriptions *RatePlanDescriptionsType `json:"descriptions,omitempty"`
	// Indicates whether the rate plan is allowed to be discounted.
	DiscountAllowed *bool `json:"discountAllowed,omitempty"`
	ExternalAttributes *RatePlanExternalAttributesType `json:"externalAttributes,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	PrimaryDetails *RatePlanPrimaryDetailsType `json:"primaryDetails,omitempty"`
	// Date an item will be purged from a database (e.g., from a live database to an archive).
	PurgeDate *string `json:"purgeDate,omitempty"`
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
}

// NewRatePlanShortInfoType instantiates a new RatePlanShortInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanShortInfoType() *RatePlanShortInfoType {
	this := RatePlanShortInfoType{}
	return &this
}

// NewRatePlanShortInfoTypeWithDefaults instantiates a new RatePlanShortInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanShortInfoTypeWithDefaults() *RatePlanShortInfoType {
	this := RatePlanShortInfoType{}
	return &this
}

// GetClassifications returns the Classifications field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetClassifications() RatePlanClassificationsType {
	if o == nil || IsNil(o.Classifications) {
		var ret RatePlanClassificationsType
		return ret
	}
	return *o.Classifications
}

// GetClassificationsOk returns a tuple with the Classifications field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetClassificationsOk() (*RatePlanClassificationsType, bool) {
	if o == nil || IsNil(o.Classifications) {
		return nil, false
	}
	return o.Classifications, true
}

// HasClassifications returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasClassifications() bool {
	if o != nil && !IsNil(o.Classifications) {
		return true
	}

	return false
}

// SetClassifications gets a reference to the given RatePlanClassificationsType and assigns it to the Classifications field.
func (o *RatePlanShortInfoType) SetClassifications(v RatePlanClassificationsType) {
	o.Classifications = &v
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *RatePlanShortInfoType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *RatePlanShortInfoType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetDescriptions returns the Descriptions field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetDescriptions() RatePlanDescriptionsType {
	if o == nil || IsNil(o.Descriptions) {
		var ret RatePlanDescriptionsType
		return ret
	}
	return *o.Descriptions
}

// GetDescriptionsOk returns a tuple with the Descriptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetDescriptionsOk() (*RatePlanDescriptionsType, bool) {
	if o == nil || IsNil(o.Descriptions) {
		return nil, false
	}
	return o.Descriptions, true
}

// HasDescriptions returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasDescriptions() bool {
	if o != nil && !IsNil(o.Descriptions) {
		return true
	}

	return false
}

// SetDescriptions gets a reference to the given RatePlanDescriptionsType and assigns it to the Descriptions field.
func (o *RatePlanShortInfoType) SetDescriptions(v RatePlanDescriptionsType) {
	o.Descriptions = &v
}

// GetDiscountAllowed returns the DiscountAllowed field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetDiscountAllowed() bool {
	if o == nil || IsNil(o.DiscountAllowed) {
		var ret bool
		return ret
	}
	return *o.DiscountAllowed
}

// GetDiscountAllowedOk returns a tuple with the DiscountAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetDiscountAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.DiscountAllowed) {
		return nil, false
	}
	return o.DiscountAllowed, true
}

// HasDiscountAllowed returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasDiscountAllowed() bool {
	if o != nil && !IsNil(o.DiscountAllowed) {
		return true
	}

	return false
}

// SetDiscountAllowed gets a reference to the given bool and assigns it to the DiscountAllowed field.
func (o *RatePlanShortInfoType) SetDiscountAllowed(v bool) {
	o.DiscountAllowed = &v
}

// GetExternalAttributes returns the ExternalAttributes field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetExternalAttributes() RatePlanExternalAttributesType {
	if o == nil || IsNil(o.ExternalAttributes) {
		var ret RatePlanExternalAttributesType
		return ret
	}
	return *o.ExternalAttributes
}

// GetExternalAttributesOk returns a tuple with the ExternalAttributes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetExternalAttributesOk() (*RatePlanExternalAttributesType, bool) {
	if o == nil || IsNil(o.ExternalAttributes) {
		return nil, false
	}
	return o.ExternalAttributes, true
}

// HasExternalAttributes returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasExternalAttributes() bool {
	if o != nil && !IsNil(o.ExternalAttributes) {
		return true
	}

	return false
}

// SetExternalAttributes gets a reference to the given RatePlanExternalAttributesType and assigns it to the ExternalAttributes field.
func (o *RatePlanShortInfoType) SetExternalAttributes(v RatePlanExternalAttributesType) {
	o.ExternalAttributes = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *RatePlanShortInfoType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *RatePlanShortInfoType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *RatePlanShortInfoType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetPrimaryDetails returns the PrimaryDetails field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetPrimaryDetails() RatePlanPrimaryDetailsType {
	if o == nil || IsNil(o.PrimaryDetails) {
		var ret RatePlanPrimaryDetailsType
		return ret
	}
	return *o.PrimaryDetails
}

// GetPrimaryDetailsOk returns a tuple with the PrimaryDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetPrimaryDetailsOk() (*RatePlanPrimaryDetailsType, bool) {
	if o == nil || IsNil(o.PrimaryDetails) {
		return nil, false
	}
	return o.PrimaryDetails, true
}

// HasPrimaryDetails returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasPrimaryDetails() bool {
	if o != nil && !IsNil(o.PrimaryDetails) {
		return true
	}

	return false
}

// SetPrimaryDetails gets a reference to the given RatePlanPrimaryDetailsType and assigns it to the PrimaryDetails field.
func (o *RatePlanShortInfoType) SetPrimaryDetails(v RatePlanPrimaryDetailsType) {
	o.PrimaryDetails = &v
}

// GetPurgeDate returns the PurgeDate field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetPurgeDate() string {
	if o == nil || IsNil(o.PurgeDate) {
		var ret string
		return ret
	}
	return *o.PurgeDate
}

// GetPurgeDateOk returns a tuple with the PurgeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetPurgeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PurgeDate) {
		return nil, false
	}
	return o.PurgeDate, true
}

// HasPurgeDate returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasPurgeDate() bool {
	if o != nil && !IsNil(o.PurgeDate) {
		return true
	}

	return false
}

// SetPurgeDate gets a reference to the given string and assigns it to the PurgeDate field.
func (o *RatePlanShortInfoType) SetPurgeDate(v string) {
	o.PurgeDate = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *RatePlanShortInfoType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanShortInfoType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *RatePlanShortInfoType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *RatePlanShortInfoType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

func (o RatePlanShortInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanShortInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Classifications) {
		toSerialize["classifications"] = o.Classifications
	}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.Descriptions) {
		toSerialize["descriptions"] = o.Descriptions
	}
	if !IsNil(o.DiscountAllowed) {
		toSerialize["discountAllowed"] = o.DiscountAllowed
	}
	if !IsNil(o.ExternalAttributes) {
		toSerialize["externalAttributes"] = o.ExternalAttributes
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.LastModifierId) {
		toSerialize["lastModifierId"] = o.LastModifierId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.PrimaryDetails) {
		toSerialize["primaryDetails"] = o.PrimaryDetails
	}
	if !IsNil(o.PurgeDate) {
		toSerialize["purgeDate"] = o.PurgeDate
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	return toSerialize, nil
}

type NullableRatePlanShortInfoType struct {
	value *RatePlanShortInfoType
	isSet bool
}

func (v NullableRatePlanShortInfoType) Get() *RatePlanShortInfoType {
	return v.value
}

func (v *NullableRatePlanShortInfoType) Set(val *RatePlanShortInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanShortInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanShortInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanShortInfoType(val *RatePlanShortInfoType) *NullableRatePlanShortInfoType {
	return &NullableRatePlanShortInfoType{value: val, isSet: true}
}

func (v NullableRatePlanShortInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanShortInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


