/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the TransportInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TransportInfoType{}

// TransportInfoType struct for TransportInfoType
type TransportInfoType struct {
	CarrierCode *string `json:"carrierCode,omitempty"`
	Comments *string `json:"comments,omitempty"`
	DateTime *string `json:"dateTime,omitempty"`
	StationCode *string `json:"stationCode,omitempty"`
	TransportCode *string `json:"transportCode,omitempty"`
	TransportationReqd *bool `json:"transportationReqd,omitempty"`
	Type *string `json:"type,omitempty"`
}

// NewTransportInfoType instantiates a new TransportInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransportInfoType() *TransportInfoType {
	this := TransportInfoType{}
	return &this
}

// NewTransportInfoTypeWithDefaults instantiates a new TransportInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransportInfoTypeWithDefaults() *TransportInfoType {
	this := TransportInfoType{}
	return &this
}

// GetCarrierCode returns the CarrierCode field value if set, zero value otherwise.
func (o *TransportInfoType) GetCarrierCode() string {
	if o == nil || IsNil(o.CarrierCode) {
		var ret string
		return ret
	}
	return *o.CarrierCode
}

// GetCarrierCodeOk returns a tuple with the CarrierCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransportInfoType) GetCarrierCodeOk() (*string, bool) {
	if o == nil || IsNil(o.CarrierCode) {
		return nil, false
	}
	return o.CarrierCode, true
}

// HasCarrierCode returns a boolean if a field has been set.
func (o *TransportInfoType) HasCarrierCode() bool {
	if o != nil && !IsNil(o.CarrierCode) {
		return true
	}

	return false
}

// SetCarrierCode gets a reference to the given string and assigns it to the CarrierCode field.
func (o *TransportInfoType) SetCarrierCode(v string) {
	o.CarrierCode = &v
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *TransportInfoType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransportInfoType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *TransportInfoType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *TransportInfoType) SetComments(v string) {
	o.Comments = &v
}

// GetDateTime returns the DateTime field value if set, zero value otherwise.
func (o *TransportInfoType) GetDateTime() string {
	if o == nil || IsNil(o.DateTime) {
		var ret string
		return ret
	}
	return *o.DateTime
}

// GetDateTimeOk returns a tuple with the DateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransportInfoType) GetDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.DateTime) {
		return nil, false
	}
	return o.DateTime, true
}

// HasDateTime returns a boolean if a field has been set.
func (o *TransportInfoType) HasDateTime() bool {
	if o != nil && !IsNil(o.DateTime) {
		return true
	}

	return false
}

// SetDateTime gets a reference to the given string and assigns it to the DateTime field.
func (o *TransportInfoType) SetDateTime(v string) {
	o.DateTime = &v
}

// GetStationCode returns the StationCode field value if set, zero value otherwise.
func (o *TransportInfoType) GetStationCode() string {
	if o == nil || IsNil(o.StationCode) {
		var ret string
		return ret
	}
	return *o.StationCode
}

// GetStationCodeOk returns a tuple with the StationCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransportInfoType) GetStationCodeOk() (*string, bool) {
	if o == nil || IsNil(o.StationCode) {
		return nil, false
	}
	return o.StationCode, true
}

// HasStationCode returns a boolean if a field has been set.
func (o *TransportInfoType) HasStationCode() bool {
	if o != nil && !IsNil(o.StationCode) {
		return true
	}

	return false
}

// SetStationCode gets a reference to the given string and assigns it to the StationCode field.
func (o *TransportInfoType) SetStationCode(v string) {
	o.StationCode = &v
}

// GetTransportCode returns the TransportCode field value if set, zero value otherwise.
func (o *TransportInfoType) GetTransportCode() string {
	if o == nil || IsNil(o.TransportCode) {
		var ret string
		return ret
	}
	return *o.TransportCode
}

// GetTransportCodeOk returns a tuple with the TransportCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransportInfoType) GetTransportCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TransportCode) {
		return nil, false
	}
	return o.TransportCode, true
}

// HasTransportCode returns a boolean if a field has been set.
func (o *TransportInfoType) HasTransportCode() bool {
	if o != nil && !IsNil(o.TransportCode) {
		return true
	}

	return false
}

// SetTransportCode gets a reference to the given string and assigns it to the TransportCode field.
func (o *TransportInfoType) SetTransportCode(v string) {
	o.TransportCode = &v
}

// GetTransportationReqd returns the TransportationReqd field value if set, zero value otherwise.
func (o *TransportInfoType) GetTransportationReqd() bool {
	if o == nil || IsNil(o.TransportationReqd) {
		var ret bool
		return ret
	}
	return *o.TransportationReqd
}

// GetTransportationReqdOk returns a tuple with the TransportationReqd field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransportInfoType) GetTransportationReqdOk() (*bool, bool) {
	if o == nil || IsNil(o.TransportationReqd) {
		return nil, false
	}
	return o.TransportationReqd, true
}

// HasTransportationReqd returns a boolean if a field has been set.
func (o *TransportInfoType) HasTransportationReqd() bool {
	if o != nil && !IsNil(o.TransportationReqd) {
		return true
	}

	return false
}

// SetTransportationReqd gets a reference to the given bool and assigns it to the TransportationReqd field.
func (o *TransportInfoType) SetTransportationReqd(v bool) {
	o.TransportationReqd = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *TransportInfoType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TransportInfoType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *TransportInfoType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *TransportInfoType) SetType(v string) {
	o.Type = &v
}

func (o TransportInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TransportInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CarrierCode) {
		toSerialize["carrierCode"] = o.CarrierCode
	}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.DateTime) {
		toSerialize["dateTime"] = o.DateTime
	}
	if !IsNil(o.StationCode) {
		toSerialize["stationCode"] = o.StationCode
	}
	if !IsNil(o.TransportCode) {
		toSerialize["transportCode"] = o.TransportCode
	}
	if !IsNil(o.TransportationReqd) {
		toSerialize["transportationReqd"] = o.TransportationReqd
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableTransportInfoType struct {
	value *TransportInfoType
	isSet bool
}

func (v NullableTransportInfoType) Get() *TransportInfoType {
	return v.value
}

func (v *NullableTransportInfoType) Set(val *TransportInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableTransportInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableTransportInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransportInfoType(val *TransportInfoType) *NullableTransportInfoType {
	return &NullableTransportInfoType{value: val, isSet: true}
}

func (v NullableTransportInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransportInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

