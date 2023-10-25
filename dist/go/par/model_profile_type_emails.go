/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the ProfileTypeEmails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ProfileTypeEmails{}

// ProfileTypeEmails List of email address for the customer.
type ProfileTypeEmails struct {
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Collection of Detailed information on an eMail address for the customer.
	EmailInfo []EmailInfoType `json:"emailInfo,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewProfileTypeEmails instantiates a new ProfileTypeEmails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewProfileTypeEmails() *ProfileTypeEmails {
	this := ProfileTypeEmails{}
	return &this
}

// NewProfileTypeEmailsWithDefaults instantiates a new ProfileTypeEmails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewProfileTypeEmailsWithDefaults() *ProfileTypeEmails {
	this := ProfileTypeEmails{}
	return &this
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *ProfileTypeEmails) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeEmails) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *ProfileTypeEmails) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *ProfileTypeEmails) SetCount(v int32) {
	o.Count = &v
}

// GetEmailInfo returns the EmailInfo field value if set, zero value otherwise.
func (o *ProfileTypeEmails) GetEmailInfo() []EmailInfoType {
	if o == nil || IsNil(o.EmailInfo) {
		var ret []EmailInfoType
		return ret
	}
	return o.EmailInfo
}

// GetEmailInfoOk returns a tuple with the EmailInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeEmails) GetEmailInfoOk() ([]EmailInfoType, bool) {
	if o == nil || IsNil(o.EmailInfo) {
		return nil, false
	}
	return o.EmailInfo, true
}

// HasEmailInfo returns a boolean if a field has been set.
func (o *ProfileTypeEmails) HasEmailInfo() bool {
	if o != nil && !IsNil(o.EmailInfo) {
		return true
	}

	return false
}

// SetEmailInfo gets a reference to the given []EmailInfoType and assigns it to the EmailInfo field.
func (o *ProfileTypeEmails) SetEmailInfo(v []EmailInfoType) {
	o.EmailInfo = v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *ProfileTypeEmails) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeEmails) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *ProfileTypeEmails) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *ProfileTypeEmails) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *ProfileTypeEmails) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ProfileTypeEmails) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *ProfileTypeEmails) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *ProfileTypeEmails) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o ProfileTypeEmails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ProfileTypeEmails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.EmailInfo) {
		toSerialize["emailInfo"] = o.EmailInfo
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableProfileTypeEmails struct {
	value *ProfileTypeEmails
	isSet bool
}

func (v NullableProfileTypeEmails) Get() *ProfileTypeEmails {
	return v.value
}

func (v *NullableProfileTypeEmails) Set(val *ProfileTypeEmails) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileTypeEmails) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileTypeEmails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileTypeEmails(val *ProfileTypeEmails) *NullableProfileTypeEmails {
	return &NullableProfileTypeEmails{value: val, isSet: true}
}

func (v NullableProfileTypeEmails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileTypeEmails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


