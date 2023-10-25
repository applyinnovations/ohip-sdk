/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ECertificateUsageCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECertificateUsageCriteriaType{}

// ECertificateUsageCriteriaType E-Certificates details.
type ECertificateUsageCriteriaType struct {
	// Indicates to attach a rate code to the e-certificate as a benefit.
	Benefit *bool `json:"benefit,omitempty"`
	// Identify if cancel is allowed or not.
	CancelAllowed *bool `json:"cancelAllowed,omitempty"`
	// Identify if in lieu of certificate can be generated or not.
	GenerateInLieuCertificate *bool `json:"generateInLieuCertificate,omitempty"`
	// Indicates if web certificate can be consumed in hotel.
	Hotel *bool `json:"hotel,omitempty"`
	// Indicates if certificate is to be used against reservation or not.
	Reservation *bool `json:"reservation,omitempty"`
	// Specify if the certificate number verification is required at time of consumption or not.
	VerifyCertificateNo *bool `json:"verifyCertificateNo,omitempty"`
	// Indicates if web certificate can be consumed in OWS.
	Web *bool `json:"web,omitempty"`
	// Indicates if certificate consumption allowable on the web.
	WebAllowed *bool `json:"webAllowed,omitempty"`
}

// NewECertificateUsageCriteriaType instantiates a new ECertificateUsageCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewECertificateUsageCriteriaType() *ECertificateUsageCriteriaType {
	this := ECertificateUsageCriteriaType{}
	return &this
}

// NewECertificateUsageCriteriaTypeWithDefaults instantiates a new ECertificateUsageCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewECertificateUsageCriteriaTypeWithDefaults() *ECertificateUsageCriteriaType {
	this := ECertificateUsageCriteriaType{}
	return &this
}

// GetBenefit returns the Benefit field value if set, zero value otherwise.
func (o *ECertificateUsageCriteriaType) GetBenefit() bool {
	if o == nil || IsNil(o.Benefit) {
		var ret bool
		return ret
	}
	return *o.Benefit
}

// GetBenefitOk returns a tuple with the Benefit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateUsageCriteriaType) GetBenefitOk() (*bool, bool) {
	if o == nil || IsNil(o.Benefit) {
		return nil, false
	}
	return o.Benefit, true
}

// HasBenefit returns a boolean if a field has been set.
func (o *ECertificateUsageCriteriaType) HasBenefit() bool {
	if o != nil && !IsNil(o.Benefit) {
		return true
	}

	return false
}

// SetBenefit gets a reference to the given bool and assigns it to the Benefit field.
func (o *ECertificateUsageCriteriaType) SetBenefit(v bool) {
	o.Benefit = &v
}

// GetCancelAllowed returns the CancelAllowed field value if set, zero value otherwise.
func (o *ECertificateUsageCriteriaType) GetCancelAllowed() bool {
	if o == nil || IsNil(o.CancelAllowed) {
		var ret bool
		return ret
	}
	return *o.CancelAllowed
}

// GetCancelAllowedOk returns a tuple with the CancelAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateUsageCriteriaType) GetCancelAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.CancelAllowed) {
		return nil, false
	}
	return o.CancelAllowed, true
}

// HasCancelAllowed returns a boolean if a field has been set.
func (o *ECertificateUsageCriteriaType) HasCancelAllowed() bool {
	if o != nil && !IsNil(o.CancelAllowed) {
		return true
	}

	return false
}

// SetCancelAllowed gets a reference to the given bool and assigns it to the CancelAllowed field.
func (o *ECertificateUsageCriteriaType) SetCancelAllowed(v bool) {
	o.CancelAllowed = &v
}

// GetGenerateInLieuCertificate returns the GenerateInLieuCertificate field value if set, zero value otherwise.
func (o *ECertificateUsageCriteriaType) GetGenerateInLieuCertificate() bool {
	if o == nil || IsNil(o.GenerateInLieuCertificate) {
		var ret bool
		return ret
	}
	return *o.GenerateInLieuCertificate
}

// GetGenerateInLieuCertificateOk returns a tuple with the GenerateInLieuCertificate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateUsageCriteriaType) GetGenerateInLieuCertificateOk() (*bool, bool) {
	if o == nil || IsNil(o.GenerateInLieuCertificate) {
		return nil, false
	}
	return o.GenerateInLieuCertificate, true
}

// HasGenerateInLieuCertificate returns a boolean if a field has been set.
func (o *ECertificateUsageCriteriaType) HasGenerateInLieuCertificate() bool {
	if o != nil && !IsNil(o.GenerateInLieuCertificate) {
		return true
	}

	return false
}

// SetGenerateInLieuCertificate gets a reference to the given bool and assigns it to the GenerateInLieuCertificate field.
func (o *ECertificateUsageCriteriaType) SetGenerateInLieuCertificate(v bool) {
	o.GenerateInLieuCertificate = &v
}

// GetHotel returns the Hotel field value if set, zero value otherwise.
func (o *ECertificateUsageCriteriaType) GetHotel() bool {
	if o == nil || IsNil(o.Hotel) {
		var ret bool
		return ret
	}
	return *o.Hotel
}

// GetHotelOk returns a tuple with the Hotel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateUsageCriteriaType) GetHotelOk() (*bool, bool) {
	if o == nil || IsNil(o.Hotel) {
		return nil, false
	}
	return o.Hotel, true
}

// HasHotel returns a boolean if a field has been set.
func (o *ECertificateUsageCriteriaType) HasHotel() bool {
	if o != nil && !IsNil(o.Hotel) {
		return true
	}

	return false
}

// SetHotel gets a reference to the given bool and assigns it to the Hotel field.
func (o *ECertificateUsageCriteriaType) SetHotel(v bool) {
	o.Hotel = &v
}

// GetReservation returns the Reservation field value if set, zero value otherwise.
func (o *ECertificateUsageCriteriaType) GetReservation() bool {
	if o == nil || IsNil(o.Reservation) {
		var ret bool
		return ret
	}
	return *o.Reservation
}

// GetReservationOk returns a tuple with the Reservation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateUsageCriteriaType) GetReservationOk() (*bool, bool) {
	if o == nil || IsNil(o.Reservation) {
		return nil, false
	}
	return o.Reservation, true
}

// HasReservation returns a boolean if a field has been set.
func (o *ECertificateUsageCriteriaType) HasReservation() bool {
	if o != nil && !IsNil(o.Reservation) {
		return true
	}

	return false
}

// SetReservation gets a reference to the given bool and assigns it to the Reservation field.
func (o *ECertificateUsageCriteriaType) SetReservation(v bool) {
	o.Reservation = &v
}

// GetVerifyCertificateNo returns the VerifyCertificateNo field value if set, zero value otherwise.
func (o *ECertificateUsageCriteriaType) GetVerifyCertificateNo() bool {
	if o == nil || IsNil(o.VerifyCertificateNo) {
		var ret bool
		return ret
	}
	return *o.VerifyCertificateNo
}

// GetVerifyCertificateNoOk returns a tuple with the VerifyCertificateNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateUsageCriteriaType) GetVerifyCertificateNoOk() (*bool, bool) {
	if o == nil || IsNil(o.VerifyCertificateNo) {
		return nil, false
	}
	return o.VerifyCertificateNo, true
}

// HasVerifyCertificateNo returns a boolean if a field has been set.
func (o *ECertificateUsageCriteriaType) HasVerifyCertificateNo() bool {
	if o != nil && !IsNil(o.VerifyCertificateNo) {
		return true
	}

	return false
}

// SetVerifyCertificateNo gets a reference to the given bool and assigns it to the VerifyCertificateNo field.
func (o *ECertificateUsageCriteriaType) SetVerifyCertificateNo(v bool) {
	o.VerifyCertificateNo = &v
}

// GetWeb returns the Web field value if set, zero value otherwise.
func (o *ECertificateUsageCriteriaType) GetWeb() bool {
	if o == nil || IsNil(o.Web) {
		var ret bool
		return ret
	}
	return *o.Web
}

// GetWebOk returns a tuple with the Web field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateUsageCriteriaType) GetWebOk() (*bool, bool) {
	if o == nil || IsNil(o.Web) {
		return nil, false
	}
	return o.Web, true
}

// HasWeb returns a boolean if a field has been set.
func (o *ECertificateUsageCriteriaType) HasWeb() bool {
	if o != nil && !IsNil(o.Web) {
		return true
	}

	return false
}

// SetWeb gets a reference to the given bool and assigns it to the Web field.
func (o *ECertificateUsageCriteriaType) SetWeb(v bool) {
	o.Web = &v
}

// GetWebAllowed returns the WebAllowed field value if set, zero value otherwise.
func (o *ECertificateUsageCriteriaType) GetWebAllowed() bool {
	if o == nil || IsNil(o.WebAllowed) {
		var ret bool
		return ret
	}
	return *o.WebAllowed
}

// GetWebAllowedOk returns a tuple with the WebAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateUsageCriteriaType) GetWebAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.WebAllowed) {
		return nil, false
	}
	return o.WebAllowed, true
}

// HasWebAllowed returns a boolean if a field has been set.
func (o *ECertificateUsageCriteriaType) HasWebAllowed() bool {
	if o != nil && !IsNil(o.WebAllowed) {
		return true
	}

	return false
}

// SetWebAllowed gets a reference to the given bool and assigns it to the WebAllowed field.
func (o *ECertificateUsageCriteriaType) SetWebAllowed(v bool) {
	o.WebAllowed = &v
}

func (o ECertificateUsageCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ECertificateUsageCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Benefit) {
		toSerialize["benefit"] = o.Benefit
	}
	if !IsNil(o.CancelAllowed) {
		toSerialize["cancelAllowed"] = o.CancelAllowed
	}
	if !IsNil(o.GenerateInLieuCertificate) {
		toSerialize["generateInLieuCertificate"] = o.GenerateInLieuCertificate
	}
	if !IsNil(o.Hotel) {
		toSerialize["hotel"] = o.Hotel
	}
	if !IsNil(o.Reservation) {
		toSerialize["reservation"] = o.Reservation
	}
	if !IsNil(o.VerifyCertificateNo) {
		toSerialize["verifyCertificateNo"] = o.VerifyCertificateNo
	}
	if !IsNil(o.Web) {
		toSerialize["web"] = o.Web
	}
	if !IsNil(o.WebAllowed) {
		toSerialize["webAllowed"] = o.WebAllowed
	}
	return toSerialize, nil
}

type NullableECertificateUsageCriteriaType struct {
	value *ECertificateUsageCriteriaType
	isSet bool
}

func (v NullableECertificateUsageCriteriaType) Get() *ECertificateUsageCriteriaType {
	return v.value
}

func (v *NullableECertificateUsageCriteriaType) Set(val *ECertificateUsageCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateUsageCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateUsageCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateUsageCriteriaType(val *ECertificateUsageCriteriaType) *NullableECertificateUsageCriteriaType {
	return &NullableECertificateUsageCriteriaType{value: val, isSet: true}
}

func (v NullableECertificateUsageCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateUsageCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


