/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the AirlineTransactionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AirlineTransactionType{}

// AirlineTransactionType Contains details of the membership transaction processing status, provided by the airline.
type AirlineTransactionType struct {
	// Property code provided by the airline
	AirlineHotelCode *string `json:"airlineHotelCode,omitempty"`
	AirlineStatus *AirlineTransactionStatusType `json:"airlineStatus,omitempty"`
	BatchId *UniqueIDType `json:"batchId,omitempty"`
	// Property code that this record corresponds to
	HotelId *string `json:"hotelId,omitempty"`
	ImportInfo *AirlineTransactionImportInfoType `json:"importInfo,omitempty"`
	MemberInfo *MemberInfoType `json:"memberInfo,omitempty"`
	MembershipTransactionId *MembershipTransactionId `json:"membershipTransactionId,omitempty"`
	// Miles earned through this membership transaction
	Miles *float32 `json:"miles,omitempty"`
	TransactionId *UniqueIDType `json:"transactionId,omitempty"`
	UserDefinedFields *UserDefinedFieldsType `json:"userDefinedFields,omitempty"`
}

// NewAirlineTransactionType instantiates a new AirlineTransactionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAirlineTransactionType() *AirlineTransactionType {
	this := AirlineTransactionType{}
	return &this
}

// NewAirlineTransactionTypeWithDefaults instantiates a new AirlineTransactionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAirlineTransactionTypeWithDefaults() *AirlineTransactionType {
	this := AirlineTransactionType{}
	return &this
}

// GetAirlineHotelCode returns the AirlineHotelCode field value if set, zero value otherwise.
func (o *AirlineTransactionType) GetAirlineHotelCode() string {
	if o == nil || IsNil(o.AirlineHotelCode) {
		var ret string
		return ret
	}
	return *o.AirlineHotelCode
}

// GetAirlineHotelCodeOk returns a tuple with the AirlineHotelCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionType) GetAirlineHotelCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AirlineHotelCode) {
		return nil, false
	}
	return o.AirlineHotelCode, true
}

// HasAirlineHotelCode returns a boolean if a field has been set.
func (o *AirlineTransactionType) HasAirlineHotelCode() bool {
	if o != nil && !IsNil(o.AirlineHotelCode) {
		return true
	}

	return false
}

// SetAirlineHotelCode gets a reference to the given string and assigns it to the AirlineHotelCode field.
func (o *AirlineTransactionType) SetAirlineHotelCode(v string) {
	o.AirlineHotelCode = &v
}

// GetAirlineStatus returns the AirlineStatus field value if set, zero value otherwise.
func (o *AirlineTransactionType) GetAirlineStatus() AirlineTransactionStatusType {
	if o == nil || IsNil(o.AirlineStatus) {
		var ret AirlineTransactionStatusType
		return ret
	}
	return *o.AirlineStatus
}

// GetAirlineStatusOk returns a tuple with the AirlineStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionType) GetAirlineStatusOk() (*AirlineTransactionStatusType, bool) {
	if o == nil || IsNil(o.AirlineStatus) {
		return nil, false
	}
	return o.AirlineStatus, true
}

// HasAirlineStatus returns a boolean if a field has been set.
func (o *AirlineTransactionType) HasAirlineStatus() bool {
	if o != nil && !IsNil(o.AirlineStatus) {
		return true
	}

	return false
}

// SetAirlineStatus gets a reference to the given AirlineTransactionStatusType and assigns it to the AirlineStatus field.
func (o *AirlineTransactionType) SetAirlineStatus(v AirlineTransactionStatusType) {
	o.AirlineStatus = &v
}

// GetBatchId returns the BatchId field value if set, zero value otherwise.
func (o *AirlineTransactionType) GetBatchId() UniqueIDType {
	if o == nil || IsNil(o.BatchId) {
		var ret UniqueIDType
		return ret
	}
	return *o.BatchId
}

// GetBatchIdOk returns a tuple with the BatchId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionType) GetBatchIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.BatchId) {
		return nil, false
	}
	return o.BatchId, true
}

// HasBatchId returns a boolean if a field has been set.
func (o *AirlineTransactionType) HasBatchId() bool {
	if o != nil && !IsNil(o.BatchId) {
		return true
	}

	return false
}

// SetBatchId gets a reference to the given UniqueIDType and assigns it to the BatchId field.
func (o *AirlineTransactionType) SetBatchId(v UniqueIDType) {
	o.BatchId = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AirlineTransactionType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AirlineTransactionType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AirlineTransactionType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetImportInfo returns the ImportInfo field value if set, zero value otherwise.
func (o *AirlineTransactionType) GetImportInfo() AirlineTransactionImportInfoType {
	if o == nil || IsNil(o.ImportInfo) {
		var ret AirlineTransactionImportInfoType
		return ret
	}
	return *o.ImportInfo
}

// GetImportInfoOk returns a tuple with the ImportInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionType) GetImportInfoOk() (*AirlineTransactionImportInfoType, bool) {
	if o == nil || IsNil(o.ImportInfo) {
		return nil, false
	}
	return o.ImportInfo, true
}

// HasImportInfo returns a boolean if a field has been set.
func (o *AirlineTransactionType) HasImportInfo() bool {
	if o != nil && !IsNil(o.ImportInfo) {
		return true
	}

	return false
}

// SetImportInfo gets a reference to the given AirlineTransactionImportInfoType and assigns it to the ImportInfo field.
func (o *AirlineTransactionType) SetImportInfo(v AirlineTransactionImportInfoType) {
	o.ImportInfo = &v
}

// GetMemberInfo returns the MemberInfo field value if set, zero value otherwise.
func (o *AirlineTransactionType) GetMemberInfo() MemberInfoType {
	if o == nil || IsNil(o.MemberInfo) {
		var ret MemberInfoType
		return ret
	}
	return *o.MemberInfo
}

// GetMemberInfoOk returns a tuple with the MemberInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionType) GetMemberInfoOk() (*MemberInfoType, bool) {
	if o == nil || IsNil(o.MemberInfo) {
		return nil, false
	}
	return o.MemberInfo, true
}

// HasMemberInfo returns a boolean if a field has been set.
func (o *AirlineTransactionType) HasMemberInfo() bool {
	if o != nil && !IsNil(o.MemberInfo) {
		return true
	}

	return false
}

// SetMemberInfo gets a reference to the given MemberInfoType and assigns it to the MemberInfo field.
func (o *AirlineTransactionType) SetMemberInfo(v MemberInfoType) {
	o.MemberInfo = &v
}

// GetMembershipTransactionId returns the MembershipTransactionId field value if set, zero value otherwise.
func (o *AirlineTransactionType) GetMembershipTransactionId() MembershipTransactionId {
	if o == nil || IsNil(o.MembershipTransactionId) {
		var ret MembershipTransactionId
		return ret
	}
	return *o.MembershipTransactionId
}

// GetMembershipTransactionIdOk returns a tuple with the MembershipTransactionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionType) GetMembershipTransactionIdOk() (*MembershipTransactionId, bool) {
	if o == nil || IsNil(o.MembershipTransactionId) {
		return nil, false
	}
	return o.MembershipTransactionId, true
}

// HasMembershipTransactionId returns a boolean if a field has been set.
func (o *AirlineTransactionType) HasMembershipTransactionId() bool {
	if o != nil && !IsNil(o.MembershipTransactionId) {
		return true
	}

	return false
}

// SetMembershipTransactionId gets a reference to the given MembershipTransactionId and assigns it to the MembershipTransactionId field.
func (o *AirlineTransactionType) SetMembershipTransactionId(v MembershipTransactionId) {
	o.MembershipTransactionId = &v
}

// GetMiles returns the Miles field value if set, zero value otherwise.
func (o *AirlineTransactionType) GetMiles() float32 {
	if o == nil || IsNil(o.Miles) {
		var ret float32
		return ret
	}
	return *o.Miles
}

// GetMilesOk returns a tuple with the Miles field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionType) GetMilesOk() (*float32, bool) {
	if o == nil || IsNil(o.Miles) {
		return nil, false
	}
	return o.Miles, true
}

// HasMiles returns a boolean if a field has been set.
func (o *AirlineTransactionType) HasMiles() bool {
	if o != nil && !IsNil(o.Miles) {
		return true
	}

	return false
}

// SetMiles gets a reference to the given float32 and assigns it to the Miles field.
func (o *AirlineTransactionType) SetMiles(v float32) {
	o.Miles = &v
}

// GetTransactionId returns the TransactionId field value if set, zero value otherwise.
func (o *AirlineTransactionType) GetTransactionId() UniqueIDType {
	if o == nil || IsNil(o.TransactionId) {
		var ret UniqueIDType
		return ret
	}
	return *o.TransactionId
}

// GetTransactionIdOk returns a tuple with the TransactionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionType) GetTransactionIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.TransactionId) {
		return nil, false
	}
	return o.TransactionId, true
}

// HasTransactionId returns a boolean if a field has been set.
func (o *AirlineTransactionType) HasTransactionId() bool {
	if o != nil && !IsNil(o.TransactionId) {
		return true
	}

	return false
}

// SetTransactionId gets a reference to the given UniqueIDType and assigns it to the TransactionId field.
func (o *AirlineTransactionType) SetTransactionId(v UniqueIDType) {
	o.TransactionId = &v
}

// GetUserDefinedFields returns the UserDefinedFields field value if set, zero value otherwise.
func (o *AirlineTransactionType) GetUserDefinedFields() UserDefinedFieldsType {
	if o == nil || IsNil(o.UserDefinedFields) {
		var ret UserDefinedFieldsType
		return ret
	}
	return *o.UserDefinedFields
}

// GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AirlineTransactionType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool) {
	if o == nil || IsNil(o.UserDefinedFields) {
		return nil, false
	}
	return o.UserDefinedFields, true
}

// HasUserDefinedFields returns a boolean if a field has been set.
func (o *AirlineTransactionType) HasUserDefinedFields() bool {
	if o != nil && !IsNil(o.UserDefinedFields) {
		return true
	}

	return false
}

// SetUserDefinedFields gets a reference to the given UserDefinedFieldsType and assigns it to the UserDefinedFields field.
func (o *AirlineTransactionType) SetUserDefinedFields(v UserDefinedFieldsType) {
	o.UserDefinedFields = &v
}

func (o AirlineTransactionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AirlineTransactionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AirlineHotelCode) {
		toSerialize["airlineHotelCode"] = o.AirlineHotelCode
	}
	if !IsNil(o.AirlineStatus) {
		toSerialize["airlineStatus"] = o.AirlineStatus
	}
	if !IsNil(o.BatchId) {
		toSerialize["batchId"] = o.BatchId
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ImportInfo) {
		toSerialize["importInfo"] = o.ImportInfo
	}
	if !IsNil(o.MemberInfo) {
		toSerialize["memberInfo"] = o.MemberInfo
	}
	if !IsNil(o.MembershipTransactionId) {
		toSerialize["membershipTransactionId"] = o.MembershipTransactionId
	}
	if !IsNil(o.Miles) {
		toSerialize["miles"] = o.Miles
	}
	if !IsNil(o.TransactionId) {
		toSerialize["transactionId"] = o.TransactionId
	}
	if !IsNil(o.UserDefinedFields) {
		toSerialize["userDefinedFields"] = o.UserDefinedFields
	}
	return toSerialize, nil
}

type NullableAirlineTransactionType struct {
	value *AirlineTransactionType
	isSet bool
}

func (v NullableAirlineTransactionType) Get() *AirlineTransactionType {
	return v.value
}

func (v *NullableAirlineTransactionType) Set(val *AirlineTransactionType) {
	v.value = val
	v.isSet = true
}

func (v NullableAirlineTransactionType) IsSet() bool {
	return v.isSet
}

func (v *NullableAirlineTransactionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAirlineTransactionType(val *AirlineTransactionType) *NullableAirlineTransactionType {
	return &NullableAirlineTransactionType{value: val, isSet: true}
}

func (v NullableAirlineTransactionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAirlineTransactionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


