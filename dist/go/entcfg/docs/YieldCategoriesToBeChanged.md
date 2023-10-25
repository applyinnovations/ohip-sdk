# YieldCategoriesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code of the Yield Category. | [optional] 
**Description** | Pointer to **string** | Description of the Yield Category. | [optional] 
**HotelId** | Pointer to **string** | Code of the Hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewYieldCategoriesToBeChanged

`func NewYieldCategoriesToBeChanged() *YieldCategoriesToBeChanged`

NewYieldCategoriesToBeChanged instantiates a new YieldCategoriesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewYieldCategoriesToBeChangedWithDefaults

`func NewYieldCategoriesToBeChangedWithDefaults() *YieldCategoriesToBeChanged`

NewYieldCategoriesToBeChangedWithDefaults instantiates a new YieldCategoriesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *YieldCategoriesToBeChanged) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *YieldCategoriesToBeChanged) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *YieldCategoriesToBeChanged) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *YieldCategoriesToBeChanged) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *YieldCategoriesToBeChanged) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *YieldCategoriesToBeChanged) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *YieldCategoriesToBeChanged) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *YieldCategoriesToBeChanged) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *YieldCategoriesToBeChanged) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *YieldCategoriesToBeChanged) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *YieldCategoriesToBeChanged) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *YieldCategoriesToBeChanged) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *YieldCategoriesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *YieldCategoriesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *YieldCategoriesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *YieldCategoriesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *YieldCategoriesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *YieldCategoriesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *YieldCategoriesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *YieldCategoriesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


