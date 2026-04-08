# WatermarkType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Mode** | Pointer to [**WatermarkModeType**](WatermarkModeType.md) |  | [optional] 
**Text** | Pointer to **string** | Watermark Text. | [optional] 
**Font** | Pointer to **string** | Watermark font name. | [optional] 
**FontSize** | Pointer to **float32** | Watermark font name. | [optional] 
**XPosition** | Pointer to **int32** | X position of watermark on page starting in lower left corner. | [optional] 
**YPosition** | Pointer to **int32** | Y position of watermark on page starting in lower left corner. | [optional] 
**Angle** | Pointer to **int32** | Watermark angle in degrees. | [optional] 
**Red** | Pointer to **float32** | Watermark color (red), value ranges from 0.0 to 1.0 ( Java API values ). | [optional] 
**Green** | Pointer to **float32** | Watermark color (green), value ranges from 0.0 to 1.0 ( Java API values ). | [optional] 
**Blue** | Pointer to **float32** | Watermark color (blue), value ranges from 0.0 to 1.0 ( Java API values ). | [optional] 

## Methods

### NewWatermarkType

`func NewWatermarkType() *WatermarkType`

NewWatermarkType instantiates a new WatermarkType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWatermarkTypeWithDefaults

`func NewWatermarkTypeWithDefaults() *WatermarkType`

NewWatermarkTypeWithDefaults instantiates a new WatermarkType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMode

`func (o *WatermarkType) GetMode() WatermarkModeType`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *WatermarkType) GetModeOk() (*WatermarkModeType, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *WatermarkType) SetMode(v WatermarkModeType)`

SetMode sets Mode field to given value.

### HasMode

`func (o *WatermarkType) HasMode() bool`

HasMode returns a boolean if a field has been set.

### GetText

`func (o *WatermarkType) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *WatermarkType) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *WatermarkType) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *WatermarkType) HasText() bool`

HasText returns a boolean if a field has been set.

### GetFont

`func (o *WatermarkType) GetFont() string`

GetFont returns the Font field if non-nil, zero value otherwise.

### GetFontOk

`func (o *WatermarkType) GetFontOk() (*string, bool)`

GetFontOk returns a tuple with the Font field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFont

`func (o *WatermarkType) SetFont(v string)`

SetFont sets Font field to given value.

### HasFont

`func (o *WatermarkType) HasFont() bool`

HasFont returns a boolean if a field has been set.

### GetFontSize

`func (o *WatermarkType) GetFontSize() float32`

GetFontSize returns the FontSize field if non-nil, zero value otherwise.

### GetFontSizeOk

`func (o *WatermarkType) GetFontSizeOk() (*float32, bool)`

GetFontSizeOk returns a tuple with the FontSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFontSize

`func (o *WatermarkType) SetFontSize(v float32)`

SetFontSize sets FontSize field to given value.

### HasFontSize

`func (o *WatermarkType) HasFontSize() bool`

HasFontSize returns a boolean if a field has been set.

### GetXPosition

`func (o *WatermarkType) GetXPosition() int32`

GetXPosition returns the XPosition field if non-nil, zero value otherwise.

### GetXPositionOk

`func (o *WatermarkType) GetXPositionOk() (*int32, bool)`

GetXPositionOk returns a tuple with the XPosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXPosition

`func (o *WatermarkType) SetXPosition(v int32)`

SetXPosition sets XPosition field to given value.

### HasXPosition

`func (o *WatermarkType) HasXPosition() bool`

HasXPosition returns a boolean if a field has been set.

### GetYPosition

`func (o *WatermarkType) GetYPosition() int32`

GetYPosition returns the YPosition field if non-nil, zero value otherwise.

### GetYPositionOk

`func (o *WatermarkType) GetYPositionOk() (*int32, bool)`

GetYPositionOk returns a tuple with the YPosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYPosition

`func (o *WatermarkType) SetYPosition(v int32)`

SetYPosition sets YPosition field to given value.

### HasYPosition

`func (o *WatermarkType) HasYPosition() bool`

HasYPosition returns a boolean if a field has been set.

### GetAngle

`func (o *WatermarkType) GetAngle() int32`

GetAngle returns the Angle field if non-nil, zero value otherwise.

### GetAngleOk

`func (o *WatermarkType) GetAngleOk() (*int32, bool)`

GetAngleOk returns a tuple with the Angle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAngle

`func (o *WatermarkType) SetAngle(v int32)`

SetAngle sets Angle field to given value.

### HasAngle

`func (o *WatermarkType) HasAngle() bool`

HasAngle returns a boolean if a field has been set.

### GetRed

`func (o *WatermarkType) GetRed() float32`

GetRed returns the Red field if non-nil, zero value otherwise.

### GetRedOk

`func (o *WatermarkType) GetRedOk() (*float32, bool)`

GetRedOk returns a tuple with the Red field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRed

`func (o *WatermarkType) SetRed(v float32)`

SetRed sets Red field to given value.

### HasRed

`func (o *WatermarkType) HasRed() bool`

HasRed returns a boolean if a field has been set.

### GetGreen

`func (o *WatermarkType) GetGreen() float32`

GetGreen returns the Green field if non-nil, zero value otherwise.

### GetGreenOk

`func (o *WatermarkType) GetGreenOk() (*float32, bool)`

GetGreenOk returns a tuple with the Green field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGreen

`func (o *WatermarkType) SetGreen(v float32)`

SetGreen sets Green field to given value.

### HasGreen

`func (o *WatermarkType) HasGreen() bool`

HasGreen returns a boolean if a field has been set.

### GetBlue

`func (o *WatermarkType) GetBlue() float32`

GetBlue returns the Blue field if non-nil, zero value otherwise.

### GetBlueOk

`func (o *WatermarkType) GetBlueOk() (*float32, bool)`

GetBlueOk returns a tuple with the Blue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlue

`func (o *WatermarkType) SetBlue(v float32)`

SetBlue sets Blue field to given value.

### HasBlue

`func (o *WatermarkType) HasBlue() bool`

HasBlue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


