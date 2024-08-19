/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the CustomerTypeIdentifications type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CustomerTypeIdentifications{}

// CustomerTypeIdentifications List of identification of the customer.
type CustomerTypeIdentifications struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Collection of detailed information on the identification of the customer.
	IdentificationInfo []IdentificationInfoType `json:"identificationInfo,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewCustomerTypeIdentifications instantiates a new CustomerTypeIdentifications object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCustomerTypeIdentifications() *CustomerTypeIdentifications {
	this := CustomerTypeIdentifications{}
	return &this
}

// NewCustomerTypeIdentificationsWithDefaults instantiates a new CustomerTypeIdentifications object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCustomerTypeIdentificationsWithDefaults() *CustomerTypeIdentifications {
	this := CustomerTypeIdentifications{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *CustomerTypeIdentifications) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerTypeIdentifications) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *CustomerTypeIdentifications) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *CustomerTypeIdentifications) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *CustomerTypeIdentifications) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerTypeIdentifications) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *CustomerTypeIdentifications) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *CustomerTypeIdentifications) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetIdentificationInfo returns the IdentificationInfo field value if set, zero value otherwise.
func (o *CustomerTypeIdentifications) GetIdentificationInfo() []IdentificationInfoType {
	if o == nil || IsNil(o.IdentificationInfo) {
		var ret []IdentificationInfoType
		return ret
	}
	return o.IdentificationInfo
}

// GetIdentificationInfoOk returns a tuple with the IdentificationInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerTypeIdentifications) GetIdentificationInfoOk() ([]IdentificationInfoType, bool) {
	if o == nil || IsNil(o.IdentificationInfo) {
		return nil, false
	}
	return o.IdentificationInfo, true
}

// HasIdentificationInfo returns a boolean if a field has been set.
func (o *CustomerTypeIdentifications) HasIdentificationInfo() bool {
	if o != nil && !IsNil(o.IdentificationInfo) {
		return true
	}

	return false
}

// SetIdentificationInfo gets a reference to the given []IdentificationInfoType and assigns it to the IdentificationInfo field.
func (o *CustomerTypeIdentifications) SetIdentificationInfo(v []IdentificationInfoType) {
	o.IdentificationInfo = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *CustomerTypeIdentifications) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CustomerTypeIdentifications) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *CustomerTypeIdentifications) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *CustomerTypeIdentifications) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o CustomerTypeIdentifications) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CustomerTypeIdentifications) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.IdentificationInfo) {
		toSerialize["identificationInfo"] = o.IdentificationInfo
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableCustomerTypeIdentifications struct {
	value *CustomerTypeIdentifications
	isSet bool
}

func (v NullableCustomerTypeIdentifications) Get() *CustomerTypeIdentifications {
	return v.value
}

func (v *NullableCustomerTypeIdentifications) Set(val *CustomerTypeIdentifications) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomerTypeIdentifications) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomerTypeIdentifications) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomerTypeIdentifications(val *CustomerTypeIdentifications) *NullableCustomerTypeIdentifications {
	return &NullableCustomerTypeIdentifications{value: val, isSet: true}
}

func (v NullableCustomerTypeIdentifications) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomerTypeIdentifications) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


