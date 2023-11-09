# YieldMarketTypesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlternativeCode** | Pointer to **string** | If the yield market code does not return a result, this alternative yield market code is used instead. | [optional] 
**Code** | Pointer to **string** | Yield Market Code. | [optional] 
**Default** | Pointer to **bool** | Indicates the default yield market type. | [optional] 
**Description** | Pointer to **string** | Description for the yield market code. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for which the yield market type belong to. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewYieldMarketTypesToBeChanged

`func NewYieldMarketTypesToBeChanged() *YieldMarketTypesToBeChanged`

NewYieldMarketTypesToBeChanged instantiates a new YieldMarketTypesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewYieldMarketTypesToBeChangedWithDefaults

`func NewYieldMarketTypesToBeChangedWithDefaults() *YieldMarketTypesToBeChanged`

NewYieldMarketTypesToBeChangedWithDefaults instantiates a new YieldMarketTypesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternativeCode

`func (o *YieldMarketTypesToBeChanged) GetAlternativeCode() string`

GetAlternativeCode returns the AlternativeCode field if non-nil, zero value otherwise.

### GetAlternativeCodeOk

`func (o *YieldMarketTypesToBeChanged) GetAlternativeCodeOk() (*string, bool)`

GetAlternativeCodeOk returns a tuple with the AlternativeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternativeCode

`func (o *YieldMarketTypesToBeChanged) SetAlternativeCode(v string)`

SetAlternativeCode sets AlternativeCode field to given value.

### HasAlternativeCode

`func (o *YieldMarketTypesToBeChanged) HasAlternativeCode() bool`

HasAlternativeCode returns a boolean if a field has been set.

### GetCode

`func (o *YieldMarketTypesToBeChanged) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *YieldMarketTypesToBeChanged) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *YieldMarketTypesToBeChanged) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *YieldMarketTypesToBeChanged) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDefault

`func (o *YieldMarketTypesToBeChanged) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *YieldMarketTypesToBeChanged) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *YieldMarketTypesToBeChanged) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *YieldMarketTypesToBeChanged) HasDefault() bool`

HasDefault returns a boolean if a field has been set.

### GetDescription

`func (o *YieldMarketTypesToBeChanged) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *YieldMarketTypesToBeChanged) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *YieldMarketTypesToBeChanged) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *YieldMarketTypesToBeChanged) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *YieldMarketTypesToBeChanged) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *YieldMarketTypesToBeChanged) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *YieldMarketTypesToBeChanged) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *YieldMarketTypesToBeChanged) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *YieldMarketTypesToBeChanged) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *YieldMarketTypesToBeChanged) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *YieldMarketTypesToBeChanged) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *YieldMarketTypesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *YieldMarketTypesToBeChanged) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *YieldMarketTypesToBeChanged) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *YieldMarketTypesToBeChanged) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *YieldMarketTypesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


