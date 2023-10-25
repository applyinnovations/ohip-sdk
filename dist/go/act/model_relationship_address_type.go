/*
OPERA Cloud Activity API

APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package act

import (
	"encoding/json"
)

// checks if the RelationshipAddressType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RelationshipAddressType{}

// RelationshipAddressType Provides address information for a Relationship.
type RelationshipAddressType struct {
	// When the address is unformatted (FormattedInd=\"false\") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence.
	AddressLine []string `json:"addressLine,omitempty"`
	// City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
	City *string `json:"city,omitempty"`
	// Country name (e.g., Ireland).
	Country *string `json:"country,omitempty"`
	// Post Office Code number.
	PostalCode *string `json:"postalCode,omitempty"`
	// State or Province name (e.g., Texas).
	State *string `json:"state,omitempty"`
}

// NewRelationshipAddressType instantiates a new RelationshipAddressType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRelationshipAddressType() *RelationshipAddressType {
	this := RelationshipAddressType{}
	return &this
}

// NewRelationshipAddressTypeWithDefaults instantiates a new RelationshipAddressType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRelationshipAddressTypeWithDefaults() *RelationshipAddressType {
	this := RelationshipAddressType{}
	return &this
}

// GetAddressLine returns the AddressLine field value if set, zero value otherwise.
func (o *RelationshipAddressType) GetAddressLine() []string {
	if o == nil || IsNil(o.AddressLine) {
		var ret []string
		return ret
	}
	return o.AddressLine
}

// GetAddressLineOk returns a tuple with the AddressLine field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipAddressType) GetAddressLineOk() ([]string, bool) {
	if o == nil || IsNil(o.AddressLine) {
		return nil, false
	}
	return o.AddressLine, true
}

// HasAddressLine returns a boolean if a field has been set.
func (o *RelationshipAddressType) HasAddressLine() bool {
	if o != nil && !IsNil(o.AddressLine) {
		return true
	}

	return false
}

// SetAddressLine gets a reference to the given []string and assigns it to the AddressLine field.
func (o *RelationshipAddressType) SetAddressLine(v []string) {
	o.AddressLine = v
}

// GetCity returns the City field value if set, zero value otherwise.
func (o *RelationshipAddressType) GetCity() string {
	if o == nil || IsNil(o.City) {
		var ret string
		return ret
	}
	return *o.City
}

// GetCityOk returns a tuple with the City field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipAddressType) GetCityOk() (*string, bool) {
	if o == nil || IsNil(o.City) {
		return nil, false
	}
	return o.City, true
}

// HasCity returns a boolean if a field has been set.
func (o *RelationshipAddressType) HasCity() bool {
	if o != nil && !IsNil(o.City) {
		return true
	}

	return false
}

// SetCity gets a reference to the given string and assigns it to the City field.
func (o *RelationshipAddressType) SetCity(v string) {
	o.City = &v
}

// GetCountry returns the Country field value if set, zero value otherwise.
func (o *RelationshipAddressType) GetCountry() string {
	if o == nil || IsNil(o.Country) {
		var ret string
		return ret
	}
	return *o.Country
}

// GetCountryOk returns a tuple with the Country field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipAddressType) GetCountryOk() (*string, bool) {
	if o == nil || IsNil(o.Country) {
		return nil, false
	}
	return o.Country, true
}

// HasCountry returns a boolean if a field has been set.
func (o *RelationshipAddressType) HasCountry() bool {
	if o != nil && !IsNil(o.Country) {
		return true
	}

	return false
}

// SetCountry gets a reference to the given string and assigns it to the Country field.
func (o *RelationshipAddressType) SetCountry(v string) {
	o.Country = &v
}

// GetPostalCode returns the PostalCode field value if set, zero value otherwise.
func (o *RelationshipAddressType) GetPostalCode() string {
	if o == nil || IsNil(o.PostalCode) {
		var ret string
		return ret
	}
	return *o.PostalCode
}

// GetPostalCodeOk returns a tuple with the PostalCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipAddressType) GetPostalCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PostalCode) {
		return nil, false
	}
	return o.PostalCode, true
}

// HasPostalCode returns a boolean if a field has been set.
func (o *RelationshipAddressType) HasPostalCode() bool {
	if o != nil && !IsNil(o.PostalCode) {
		return true
	}

	return false
}

// SetPostalCode gets a reference to the given string and assigns it to the PostalCode field.
func (o *RelationshipAddressType) SetPostalCode(v string) {
	o.PostalCode = &v
}

// GetState returns the State field value if set, zero value otherwise.
func (o *RelationshipAddressType) GetState() string {
	if o == nil || IsNil(o.State) {
		var ret string
		return ret
	}
	return *o.State
}

// GetStateOk returns a tuple with the State field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipAddressType) GetStateOk() (*string, bool) {
	if o == nil || IsNil(o.State) {
		return nil, false
	}
	return o.State, true
}

// HasState returns a boolean if a field has been set.
func (o *RelationshipAddressType) HasState() bool {
	if o != nil && !IsNil(o.State) {
		return true
	}

	return false
}

// SetState gets a reference to the given string and assigns it to the State field.
func (o *RelationshipAddressType) SetState(v string) {
	o.State = &v
}

func (o RelationshipAddressType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RelationshipAddressType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AddressLine) {
		toSerialize["addressLine"] = o.AddressLine
	}
	if !IsNil(o.City) {
		toSerialize["city"] = o.City
	}
	if !IsNil(o.Country) {
		toSerialize["country"] = o.Country
	}
	if !IsNil(o.PostalCode) {
		toSerialize["postalCode"] = o.PostalCode
	}
	if !IsNil(o.State) {
		toSerialize["state"] = o.State
	}
	return toSerialize, nil
}

type NullableRelationshipAddressType struct {
	value *RelationshipAddressType
	isSet bool
}

func (v NullableRelationshipAddressType) Get() *RelationshipAddressType {
	return v.value
}

func (v *NullableRelationshipAddressType) Set(val *RelationshipAddressType) {
	v.value = val
	v.isSet = true
}

func (v NullableRelationshipAddressType) IsSet() bool {
	return v.isSet
}

func (v *NullableRelationshipAddressType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRelationshipAddressType(val *RelationshipAddressType) *NullableRelationshipAddressType {
	return &NullableRelationshipAddressType{value: val, isSet: true}
}

func (v NullableRelationshipAddressType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRelationshipAddressType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


