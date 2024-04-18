/*
OPERA Cloud Report Master Data Management API

APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package repcfg

import (
	"encoding/json"
)

// checks if the WatermarkType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &WatermarkType{}

// WatermarkType Details of the watermark to be used at the time of report generation.
type WatermarkType struct {
	Mode *WatermarkModeType `json:"mode,omitempty"`
	// Watermark Text.
	Text *string `json:"text,omitempty"`
	// Watermark font name.
	Font *string `json:"font,omitempty"`
	// Watermark font name.
	FontSize *float32 `json:"fontSize,omitempty"`
	// X position of watermark on page starting in lower left corner.
	XPosition *int32 `json:"xPosition,omitempty"`
	// Y position of watermark on page starting in lower left corner.
	YPosition *int32 `json:"yPosition,omitempty"`
	// Watermark angle in degrees.
	Angle *int32 `json:"angle,omitempty"`
	// Watermark color (red), value ranges from 0.0 to 1.0 ( Java API values ).
	Red *float32 `json:"red,omitempty"`
	// Watermark color (green), value ranges from 0.0 to 1.0 ( Java API values ).
	Green *float32 `json:"green,omitempty"`
	// Watermark color (blue), value ranges from 0.0 to 1.0 ( Java API values ).
	Blue *float32 `json:"blue,omitempty"`
}

// NewWatermarkType instantiates a new WatermarkType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewWatermarkType() *WatermarkType {
	this := WatermarkType{}
	return &this
}

// NewWatermarkTypeWithDefaults instantiates a new WatermarkType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewWatermarkTypeWithDefaults() *WatermarkType {
	this := WatermarkType{}
	return &this
}

// GetMode returns the Mode field value if set, zero value otherwise.
func (o *WatermarkType) GetMode() WatermarkModeType {
	if o == nil || IsNil(o.Mode) {
		var ret WatermarkModeType
		return ret
	}
	return *o.Mode
}

// GetModeOk returns a tuple with the Mode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatermarkType) GetModeOk() (*WatermarkModeType, bool) {
	if o == nil || IsNil(o.Mode) {
		return nil, false
	}
	return o.Mode, true
}

// HasMode returns a boolean if a field has been set.
func (o *WatermarkType) HasMode() bool {
	if o != nil && !IsNil(o.Mode) {
		return true
	}

	return false
}

// SetMode gets a reference to the given WatermarkModeType and assigns it to the Mode field.
func (o *WatermarkType) SetMode(v WatermarkModeType) {
	o.Mode = &v
}

// GetText returns the Text field value if set, zero value otherwise.
func (o *WatermarkType) GetText() string {
	if o == nil || IsNil(o.Text) {
		var ret string
		return ret
	}
	return *o.Text
}

// GetTextOk returns a tuple with the Text field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatermarkType) GetTextOk() (*string, bool) {
	if o == nil || IsNil(o.Text) {
		return nil, false
	}
	return o.Text, true
}

// HasText returns a boolean if a field has been set.
func (o *WatermarkType) HasText() bool {
	if o != nil && !IsNil(o.Text) {
		return true
	}

	return false
}

// SetText gets a reference to the given string and assigns it to the Text field.
func (o *WatermarkType) SetText(v string) {
	o.Text = &v
}

// GetFont returns the Font field value if set, zero value otherwise.
func (o *WatermarkType) GetFont() string {
	if o == nil || IsNil(o.Font) {
		var ret string
		return ret
	}
	return *o.Font
}

// GetFontOk returns a tuple with the Font field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatermarkType) GetFontOk() (*string, bool) {
	if o == nil || IsNil(o.Font) {
		return nil, false
	}
	return o.Font, true
}

// HasFont returns a boolean if a field has been set.
func (o *WatermarkType) HasFont() bool {
	if o != nil && !IsNil(o.Font) {
		return true
	}

	return false
}

// SetFont gets a reference to the given string and assigns it to the Font field.
func (o *WatermarkType) SetFont(v string) {
	o.Font = &v
}

// GetFontSize returns the FontSize field value if set, zero value otherwise.
func (o *WatermarkType) GetFontSize() float32 {
	if o == nil || IsNil(o.FontSize) {
		var ret float32
		return ret
	}
	return *o.FontSize
}

// GetFontSizeOk returns a tuple with the FontSize field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatermarkType) GetFontSizeOk() (*float32, bool) {
	if o == nil || IsNil(o.FontSize) {
		return nil, false
	}
	return o.FontSize, true
}

// HasFontSize returns a boolean if a field has been set.
func (o *WatermarkType) HasFontSize() bool {
	if o != nil && !IsNil(o.FontSize) {
		return true
	}

	return false
}

// SetFontSize gets a reference to the given float32 and assigns it to the FontSize field.
func (o *WatermarkType) SetFontSize(v float32) {
	o.FontSize = &v
}

// GetXPosition returns the XPosition field value if set, zero value otherwise.
func (o *WatermarkType) GetXPosition() int32 {
	if o == nil || IsNil(o.XPosition) {
		var ret int32
		return ret
	}
	return *o.XPosition
}

// GetXPositionOk returns a tuple with the XPosition field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatermarkType) GetXPositionOk() (*int32, bool) {
	if o == nil || IsNil(o.XPosition) {
		return nil, false
	}
	return o.XPosition, true
}

// HasXPosition returns a boolean if a field has been set.
func (o *WatermarkType) HasXPosition() bool {
	if o != nil && !IsNil(o.XPosition) {
		return true
	}

	return false
}

// SetXPosition gets a reference to the given int32 and assigns it to the XPosition field.
func (o *WatermarkType) SetXPosition(v int32) {
	o.XPosition = &v
}

// GetYPosition returns the YPosition field value if set, zero value otherwise.
func (o *WatermarkType) GetYPosition() int32 {
	if o == nil || IsNil(o.YPosition) {
		var ret int32
		return ret
	}
	return *o.YPosition
}

// GetYPositionOk returns a tuple with the YPosition field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatermarkType) GetYPositionOk() (*int32, bool) {
	if o == nil || IsNil(o.YPosition) {
		return nil, false
	}
	return o.YPosition, true
}

// HasYPosition returns a boolean if a field has been set.
func (o *WatermarkType) HasYPosition() bool {
	if o != nil && !IsNil(o.YPosition) {
		return true
	}

	return false
}

// SetYPosition gets a reference to the given int32 and assigns it to the YPosition field.
func (o *WatermarkType) SetYPosition(v int32) {
	o.YPosition = &v
}

// GetAngle returns the Angle field value if set, zero value otherwise.
func (o *WatermarkType) GetAngle() int32 {
	if o == nil || IsNil(o.Angle) {
		var ret int32
		return ret
	}
	return *o.Angle
}

// GetAngleOk returns a tuple with the Angle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatermarkType) GetAngleOk() (*int32, bool) {
	if o == nil || IsNil(o.Angle) {
		return nil, false
	}
	return o.Angle, true
}

// HasAngle returns a boolean if a field has been set.
func (o *WatermarkType) HasAngle() bool {
	if o != nil && !IsNil(o.Angle) {
		return true
	}

	return false
}

// SetAngle gets a reference to the given int32 and assigns it to the Angle field.
func (o *WatermarkType) SetAngle(v int32) {
	o.Angle = &v
}

// GetRed returns the Red field value if set, zero value otherwise.
func (o *WatermarkType) GetRed() float32 {
	if o == nil || IsNil(o.Red) {
		var ret float32
		return ret
	}
	return *o.Red
}

// GetRedOk returns a tuple with the Red field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatermarkType) GetRedOk() (*float32, bool) {
	if o == nil || IsNil(o.Red) {
		return nil, false
	}
	return o.Red, true
}

// HasRed returns a boolean if a field has been set.
func (o *WatermarkType) HasRed() bool {
	if o != nil && !IsNil(o.Red) {
		return true
	}

	return false
}

// SetRed gets a reference to the given float32 and assigns it to the Red field.
func (o *WatermarkType) SetRed(v float32) {
	o.Red = &v
}

// GetGreen returns the Green field value if set, zero value otherwise.
func (o *WatermarkType) GetGreen() float32 {
	if o == nil || IsNil(o.Green) {
		var ret float32
		return ret
	}
	return *o.Green
}

// GetGreenOk returns a tuple with the Green field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatermarkType) GetGreenOk() (*float32, bool) {
	if o == nil || IsNil(o.Green) {
		return nil, false
	}
	return o.Green, true
}

// HasGreen returns a boolean if a field has been set.
func (o *WatermarkType) HasGreen() bool {
	if o != nil && !IsNil(o.Green) {
		return true
	}

	return false
}

// SetGreen gets a reference to the given float32 and assigns it to the Green field.
func (o *WatermarkType) SetGreen(v float32) {
	o.Green = &v
}

// GetBlue returns the Blue field value if set, zero value otherwise.
func (o *WatermarkType) GetBlue() float32 {
	if o == nil || IsNil(o.Blue) {
		var ret float32
		return ret
	}
	return *o.Blue
}

// GetBlueOk returns a tuple with the Blue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatermarkType) GetBlueOk() (*float32, bool) {
	if o == nil || IsNil(o.Blue) {
		return nil, false
	}
	return o.Blue, true
}

// HasBlue returns a boolean if a field has been set.
func (o *WatermarkType) HasBlue() bool {
	if o != nil && !IsNil(o.Blue) {
		return true
	}

	return false
}

// SetBlue gets a reference to the given float32 and assigns it to the Blue field.
func (o *WatermarkType) SetBlue(v float32) {
	o.Blue = &v
}

func (o WatermarkType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o WatermarkType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Mode) {
		toSerialize["mode"] = o.Mode
	}
	if !IsNil(o.Text) {
		toSerialize["text"] = o.Text
	}
	if !IsNil(o.Font) {
		toSerialize["font"] = o.Font
	}
	if !IsNil(o.FontSize) {
		toSerialize["fontSize"] = o.FontSize
	}
	if !IsNil(o.XPosition) {
		toSerialize["xPosition"] = o.XPosition
	}
	if !IsNil(o.YPosition) {
		toSerialize["yPosition"] = o.YPosition
	}
	if !IsNil(o.Angle) {
		toSerialize["angle"] = o.Angle
	}
	if !IsNil(o.Red) {
		toSerialize["red"] = o.Red
	}
	if !IsNil(o.Green) {
		toSerialize["green"] = o.Green
	}
	if !IsNil(o.Blue) {
		toSerialize["blue"] = o.Blue
	}
	return toSerialize, nil
}

type NullableWatermarkType struct {
	value *WatermarkType
	isSet bool
}

func (v NullableWatermarkType) Get() *WatermarkType {
	return v.value
}

func (v *NullableWatermarkType) Set(val *WatermarkType) {
	v.value = val
	v.isSet = true
}

func (v NullableWatermarkType) IsSet() bool {
	return v.isSet
}

func (v *NullableWatermarkType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWatermarkType(val *WatermarkType) *NullableWatermarkType {
	return &NullableWatermarkType{value: val, isSet: true}
}

func (v NullableWatermarkType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWatermarkType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

