# WashCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the Wash Code. | [optional] 
**WashCodeDetails** | Pointer to [**[]WashCodeDetailType**](WashCodeDetailType.md) | Wash Code Detail for a single entry. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code to which the Wash Code belongs to. | [optional] 
**Code** | Pointer to **string** | Wash Code. | [optional] 

## Methods

### NewWashCodeType

`func NewWashCodeType() *WashCodeType`

NewWashCodeType instantiates a new WashCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWashCodeTypeWithDefaults

`func NewWashCodeTypeWithDefaults() *WashCodeType`

NewWashCodeTypeWithDefaults instantiates a new WashCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *WashCodeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WashCodeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WashCodeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WashCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetWashCodeDetails

`func (o *WashCodeType) GetWashCodeDetails() []WashCodeDetailType`

GetWashCodeDetails returns the WashCodeDetails field if non-nil, zero value otherwise.

### GetWashCodeDetailsOk

`func (o *WashCodeType) GetWashCodeDetailsOk() (*[]WashCodeDetailType, bool)`

GetWashCodeDetailsOk returns a tuple with the WashCodeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWashCodeDetails

`func (o *WashCodeType) SetWashCodeDetails(v []WashCodeDetailType)`

SetWashCodeDetails sets WashCodeDetails field to given value.

### HasWashCodeDetails

`func (o *WashCodeType) HasWashCodeDetails() bool`

HasWashCodeDetails returns a boolean if a field has been set.

### GetHotelId

`func (o *WashCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *WashCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *WashCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *WashCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *WashCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *WashCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *WashCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *WashCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


