# ChangeYieldMarketTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlternativeCode** | Pointer to **string** | If the yield market code does not return a result, this alternative yield market code is used instead. | [optional] 
**Code** | Pointer to **string** | Yield Market Code. | [optional] 
**Default** | Pointer to **bool** | Indicates the default yield market type. | [optional] 
**Description** | Pointer to **string** | Description for the yield market code. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for which the yield market type belong to. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeYieldMarketTypesRequest

`func NewChangeYieldMarketTypesRequest() *ChangeYieldMarketTypesRequest`

NewChangeYieldMarketTypesRequest instantiates a new ChangeYieldMarketTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeYieldMarketTypesRequestWithDefaults

`func NewChangeYieldMarketTypesRequestWithDefaults() *ChangeYieldMarketTypesRequest`

NewChangeYieldMarketTypesRequestWithDefaults instantiates a new ChangeYieldMarketTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternativeCode

`func (o *ChangeYieldMarketTypesRequest) GetAlternativeCode() string`

GetAlternativeCode returns the AlternativeCode field if non-nil, zero value otherwise.

### GetAlternativeCodeOk

`func (o *ChangeYieldMarketTypesRequest) GetAlternativeCodeOk() (*string, bool)`

GetAlternativeCodeOk returns a tuple with the AlternativeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternativeCode

`func (o *ChangeYieldMarketTypesRequest) SetAlternativeCode(v string)`

SetAlternativeCode sets AlternativeCode field to given value.

### HasAlternativeCode

`func (o *ChangeYieldMarketTypesRequest) HasAlternativeCode() bool`

HasAlternativeCode returns a boolean if a field has been set.

### GetCode

`func (o *ChangeYieldMarketTypesRequest) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ChangeYieldMarketTypesRequest) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ChangeYieldMarketTypesRequest) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ChangeYieldMarketTypesRequest) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDefault

`func (o *ChangeYieldMarketTypesRequest) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *ChangeYieldMarketTypesRequest) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *ChangeYieldMarketTypesRequest) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *ChangeYieldMarketTypesRequest) HasDefault() bool`

HasDefault returns a boolean if a field has been set.

### GetDescription

`func (o *ChangeYieldMarketTypesRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ChangeYieldMarketTypesRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ChangeYieldMarketTypesRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ChangeYieldMarketTypesRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *ChangeYieldMarketTypesRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangeYieldMarketTypesRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangeYieldMarketTypesRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangeYieldMarketTypesRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeYieldMarketTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeYieldMarketTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeYieldMarketTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeYieldMarketTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeYieldMarketTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeYieldMarketTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeYieldMarketTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeYieldMarketTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


