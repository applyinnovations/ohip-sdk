/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the AddressType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AddressType{}

// AddressType Provides address information.
type AddressType struct {
	// When the address is unformatted (FormattedInd=\"false\") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence.
	AddressLine []string `json:"addressLine,omitempty"`
	// The postal barcode for the address.
	BarCode *string `json:"barCode,omitempty"`
	// Post Office City Extension Code number. City Extension mainly used for UK addresses.
	CityExtension *string `json:"cityExtension,omitempty"`
	// City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
	CityName *string `json:"cityName,omitempty"`
	Country *CountryNameType `json:"country,omitempty"`
	// County or District Name (e.g., Fairfax). This is read only.
	County *string `json:"county,omitempty"`
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	// Indicator to define if the Address is validated by the Address Validation System.
	IsValidated *bool `json:"isValidated,omitempty"`
	// Language identification.
	Language *string `json:"language,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Post Office Code number.
	PostalCode *string `json:"postalCode,omitempty"`
	// When true, indicates a primary information.
	PrimaryInd *bool `json:"primaryInd,omitempty"`
	// Date an item will be purged from a database (e.g., from a live database to an archive).
	PurgeDate *string `json:"purgeDate,omitempty"`
	// State or Province name (e.g., Texas).
	State *string `json:"state,omitempty"`
	// Defines the type of address (e.g. home, business, other).
	Type *string `json:"type,omitempty"`
	// Describes the type code
	TypeDescription *string `json:"typeDescription,omitempty"`
	// Indicates whether to update the reservations or not. If true and the address is primary, then all associated active reservations will be updated with the new primary address.
	UpdateReservations *bool `json:"updateReservations,omitempty"`
}

// NewAddressType instantiates a new AddressType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAddressType() *AddressType {
	this := AddressType{}
	return &this
}

// NewAddressTypeWithDefaults instantiates a new AddressType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAddressTypeWithDefaults() *AddressType {
	this := AddressType{}
	return &this
}

// GetAddressLine returns the AddressLine field value if set, zero value otherwise.
func (o *AddressType) GetAddressLine() []string {
	if o == nil || IsNil(o.AddressLine) {
		var ret []string
		return ret
	}
	return o.AddressLine
}

// GetAddressLineOk returns a tuple with the AddressLine field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetAddressLineOk() ([]string, bool) {
	if o == nil || IsNil(o.AddressLine) {
		return nil, false
	}
	return o.AddressLine, true
}

// HasAddressLine returns a boolean if a field has been set.
func (o *AddressType) HasAddressLine() bool {
	if o != nil && !IsNil(o.AddressLine) {
		return true
	}

	return false
}

// SetAddressLine gets a reference to the given []string and assigns it to the AddressLine field.
func (o *AddressType) SetAddressLine(v []string) {
	o.AddressLine = v
}

// GetBarCode returns the BarCode field value if set, zero value otherwise.
func (o *AddressType) GetBarCode() string {
	if o == nil || IsNil(o.BarCode) {
		var ret string
		return ret
	}
	return *o.BarCode
}

// GetBarCodeOk returns a tuple with the BarCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetBarCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BarCode) {
		return nil, false
	}
	return o.BarCode, true
}

// HasBarCode returns a boolean if a field has been set.
func (o *AddressType) HasBarCode() bool {
	if o != nil && !IsNil(o.BarCode) {
		return true
	}

	return false
}

// SetBarCode gets a reference to the given string and assigns it to the BarCode field.
func (o *AddressType) SetBarCode(v string) {
	o.BarCode = &v
}

// GetCityExtension returns the CityExtension field value if set, zero value otherwise.
func (o *AddressType) GetCityExtension() string {
	if o == nil || IsNil(o.CityExtension) {
		var ret string
		return ret
	}
	return *o.CityExtension
}

// GetCityExtensionOk returns a tuple with the CityExtension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetCityExtensionOk() (*string, bool) {
	if o == nil || IsNil(o.CityExtension) {
		return nil, false
	}
	return o.CityExtension, true
}

// HasCityExtension returns a boolean if a field has been set.
func (o *AddressType) HasCityExtension() bool {
	if o != nil && !IsNil(o.CityExtension) {
		return true
	}

	return false
}

// SetCityExtension gets a reference to the given string and assigns it to the CityExtension field.
func (o *AddressType) SetCityExtension(v string) {
	o.CityExtension = &v
}

// GetCityName returns the CityName field value if set, zero value otherwise.
func (o *AddressType) GetCityName() string {
	if o == nil || IsNil(o.CityName) {
		var ret string
		return ret
	}
	return *o.CityName
}

// GetCityNameOk returns a tuple with the CityName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetCityNameOk() (*string, bool) {
	if o == nil || IsNil(o.CityName) {
		return nil, false
	}
	return o.CityName, true
}

// HasCityName returns a boolean if a field has been set.
func (o *AddressType) HasCityName() bool {
	if o != nil && !IsNil(o.CityName) {
		return true
	}

	return false
}

// SetCityName gets a reference to the given string and assigns it to the CityName field.
func (o *AddressType) SetCityName(v string) {
	o.CityName = &v
}

// GetCountry returns the Country field value if set, zero value otherwise.
func (o *AddressType) GetCountry() CountryNameType {
	if o == nil || IsNil(o.Country) {
		var ret CountryNameType
		return ret
	}
	return *o.Country
}

// GetCountryOk returns a tuple with the Country field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetCountryOk() (*CountryNameType, bool) {
	if o == nil || IsNil(o.Country) {
		return nil, false
	}
	return o.Country, true
}

// HasCountry returns a boolean if a field has been set.
func (o *AddressType) HasCountry() bool {
	if o != nil && !IsNil(o.Country) {
		return true
	}

	return false
}

// SetCountry gets a reference to the given CountryNameType and assigns it to the Country field.
func (o *AddressType) SetCountry(v CountryNameType) {
	o.Country = &v
}

// GetCounty returns the County field value if set, zero value otherwise.
func (o *AddressType) GetCounty() string {
	if o == nil || IsNil(o.County) {
		var ret string
		return ret
	}
	return *o.County
}

// GetCountyOk returns a tuple with the County field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetCountyOk() (*string, bool) {
	if o == nil || IsNil(o.County) {
		return nil, false
	}
	return o.County, true
}

// HasCounty returns a boolean if a field has been set.
func (o *AddressType) HasCounty() bool {
	if o != nil && !IsNil(o.County) {
		return true
	}

	return false
}

// SetCounty gets a reference to the given string and assigns it to the County field.
func (o *AddressType) SetCounty(v string) {
	o.County = &v
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *AddressType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *AddressType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *AddressType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *AddressType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *AddressType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *AddressType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetIsValidated returns the IsValidated field value if set, zero value otherwise.
func (o *AddressType) GetIsValidated() bool {
	if o == nil || IsNil(o.IsValidated) {
		var ret bool
		return ret
	}
	return *o.IsValidated
}

// GetIsValidatedOk returns a tuple with the IsValidated field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetIsValidatedOk() (*bool, bool) {
	if o == nil || IsNil(o.IsValidated) {
		return nil, false
	}
	return o.IsValidated, true
}

// HasIsValidated returns a boolean if a field has been set.
func (o *AddressType) HasIsValidated() bool {
	if o != nil && !IsNil(o.IsValidated) {
		return true
	}

	return false
}

// SetIsValidated gets a reference to the given bool and assigns it to the IsValidated field.
func (o *AddressType) SetIsValidated(v bool) {
	o.IsValidated = &v
}

// GetLanguage returns the Language field value if set, zero value otherwise.
func (o *AddressType) GetLanguage() string {
	if o == nil || IsNil(o.Language) {
		var ret string
		return ret
	}
	return *o.Language
}

// GetLanguageOk returns a tuple with the Language field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.Language) {
		return nil, false
	}
	return o.Language, true
}

// HasLanguage returns a boolean if a field has been set.
func (o *AddressType) HasLanguage() bool {
	if o != nil && !IsNil(o.Language) {
		return true
	}

	return false
}

// SetLanguage gets a reference to the given string and assigns it to the Language field.
func (o *AddressType) SetLanguage(v string) {
	o.Language = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *AddressType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *AddressType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *AddressType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *AddressType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *AddressType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *AddressType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetPostalCode returns the PostalCode field value if set, zero value otherwise.
func (o *AddressType) GetPostalCode() string {
	if o == nil || IsNil(o.PostalCode) {
		var ret string
		return ret
	}
	return *o.PostalCode
}

// GetPostalCodeOk returns a tuple with the PostalCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetPostalCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PostalCode) {
		return nil, false
	}
	return o.PostalCode, true
}

// HasPostalCode returns a boolean if a field has been set.
func (o *AddressType) HasPostalCode() bool {
	if o != nil && !IsNil(o.PostalCode) {
		return true
	}

	return false
}

// SetPostalCode gets a reference to the given string and assigns it to the PostalCode field.
func (o *AddressType) SetPostalCode(v string) {
	o.PostalCode = &v
}

// GetPrimaryInd returns the PrimaryInd field value if set, zero value otherwise.
func (o *AddressType) GetPrimaryInd() bool {
	if o == nil || IsNil(o.PrimaryInd) {
		var ret bool
		return ret
	}
	return *o.PrimaryInd
}

// GetPrimaryIndOk returns a tuple with the PrimaryInd field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetPrimaryIndOk() (*bool, bool) {
	if o == nil || IsNil(o.PrimaryInd) {
		return nil, false
	}
	return o.PrimaryInd, true
}

// HasPrimaryInd returns a boolean if a field has been set.
func (o *AddressType) HasPrimaryInd() bool {
	if o != nil && !IsNil(o.PrimaryInd) {
		return true
	}

	return false
}

// SetPrimaryInd gets a reference to the given bool and assigns it to the PrimaryInd field.
func (o *AddressType) SetPrimaryInd(v bool) {
	o.PrimaryInd = &v
}

// GetPurgeDate returns the PurgeDate field value if set, zero value otherwise.
func (o *AddressType) GetPurgeDate() string {
	if o == nil || IsNil(o.PurgeDate) {
		var ret string
		return ret
	}
	return *o.PurgeDate
}

// GetPurgeDateOk returns a tuple with the PurgeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetPurgeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PurgeDate) {
		return nil, false
	}
	return o.PurgeDate, true
}

// HasPurgeDate returns a boolean if a field has been set.
func (o *AddressType) HasPurgeDate() bool {
	if o != nil && !IsNil(o.PurgeDate) {
		return true
	}

	return false
}

// SetPurgeDate gets a reference to the given string and assigns it to the PurgeDate field.
func (o *AddressType) SetPurgeDate(v string) {
	o.PurgeDate = &v
}

// GetState returns the State field value if set, zero value otherwise.
func (o *AddressType) GetState() string {
	if o == nil || IsNil(o.State) {
		var ret string
		return ret
	}
	return *o.State
}

// GetStateOk returns a tuple with the State field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetStateOk() (*string, bool) {
	if o == nil || IsNil(o.State) {
		return nil, false
	}
	return o.State, true
}

// HasState returns a boolean if a field has been set.
func (o *AddressType) HasState() bool {
	if o != nil && !IsNil(o.State) {
		return true
	}

	return false
}

// SetState gets a reference to the given string and assigns it to the State field.
func (o *AddressType) SetState(v string) {
	o.State = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *AddressType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *AddressType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *AddressType) SetType(v string) {
	o.Type = &v
}

// GetTypeDescription returns the TypeDescription field value if set, zero value otherwise.
func (o *AddressType) GetTypeDescription() string {
	if o == nil || IsNil(o.TypeDescription) {
		var ret string
		return ret
	}
	return *o.TypeDescription
}

// GetTypeDescriptionOk returns a tuple with the TypeDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetTypeDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.TypeDescription) {
		return nil, false
	}
	return o.TypeDescription, true
}

// HasTypeDescription returns a boolean if a field has been set.
func (o *AddressType) HasTypeDescription() bool {
	if o != nil && !IsNil(o.TypeDescription) {
		return true
	}

	return false
}

// SetTypeDescription gets a reference to the given string and assigns it to the TypeDescription field.
func (o *AddressType) SetTypeDescription(v string) {
	o.TypeDescription = &v
}

// GetUpdateReservations returns the UpdateReservations field value if set, zero value otherwise.
func (o *AddressType) GetUpdateReservations() bool {
	if o == nil || IsNil(o.UpdateReservations) {
		var ret bool
		return ret
	}
	return *o.UpdateReservations
}

// GetUpdateReservationsOk returns a tuple with the UpdateReservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AddressType) GetUpdateReservationsOk() (*bool, bool) {
	if o == nil || IsNil(o.UpdateReservations) {
		return nil, false
	}
	return o.UpdateReservations, true
}

// HasUpdateReservations returns a boolean if a field has been set.
func (o *AddressType) HasUpdateReservations() bool {
	if o != nil && !IsNil(o.UpdateReservations) {
		return true
	}

	return false
}

// SetUpdateReservations gets a reference to the given bool and assigns it to the UpdateReservations field.
func (o *AddressType) SetUpdateReservations(v bool) {
	o.UpdateReservations = &v
}

func (o AddressType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AddressType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AddressLine) {
		toSerialize["addressLine"] = o.AddressLine
	}
	if !IsNil(o.BarCode) {
		toSerialize["barCode"] = o.BarCode
	}
	if !IsNil(o.CityExtension) {
		toSerialize["cityExtension"] = o.CityExtension
	}
	if !IsNil(o.CityName) {
		toSerialize["cityName"] = o.CityName
	}
	if !IsNil(o.Country) {
		toSerialize["country"] = o.Country
	}
	if !IsNil(o.County) {
		toSerialize["county"] = o.County
	}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.IsValidated) {
		toSerialize["isValidated"] = o.IsValidated
	}
	if !IsNil(o.Language) {
		toSerialize["language"] = o.Language
	}
	if !IsNil(o.LastModifierId) {
		toSerialize["lastModifierId"] = o.LastModifierId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.PostalCode) {
		toSerialize["postalCode"] = o.PostalCode
	}
	if !IsNil(o.PrimaryInd) {
		toSerialize["primaryInd"] = o.PrimaryInd
	}
	if !IsNil(o.PurgeDate) {
		toSerialize["purgeDate"] = o.PurgeDate
	}
	if !IsNil(o.State) {
		toSerialize["state"] = o.State
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.TypeDescription) {
		toSerialize["typeDescription"] = o.TypeDescription
	}
	if !IsNil(o.UpdateReservations) {
		toSerialize["updateReservations"] = o.UpdateReservations
	}
	return toSerialize, nil
}

type NullableAddressType struct {
	value *AddressType
	isSet bool
}

func (v NullableAddressType) Get() *AddressType {
	return v.value
}

func (v *NullableAddressType) Set(val *AddressType) {
	v.value = val
	v.isSet = true
}

func (v NullableAddressType) IsSet() bool {
	return v.isSet
}

func (v *NullableAddressType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAddressType(val *AddressType) *NullableAddressType {
	return &NullableAddressType{value: val, isSet: true}
}

func (v NullableAddressType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAddressType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


