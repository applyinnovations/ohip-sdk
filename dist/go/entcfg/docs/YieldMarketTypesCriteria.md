# YieldMarketTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Yield Market Code. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for which the yield market type belong to. | [optional] 
**Description** | Pointer to **string** | Description for the yield market code. | [optional] 
**AlternativeCode** | Pointer to **string** | If the yield market code does not return a result, this alternative yield market code is used instead. | [optional] 
**Default** | Pointer to **bool** | Indicates the default yield market type. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewYieldMarketTypesCriteria

`func NewYieldMarketTypesCriteria() *YieldMarketTypesCriteria`

NewYieldMarketTypesCriteria instantiates a new YieldMarketTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewYieldMarketTypesCriteriaWithDefaults

`func NewYieldMarketTypesCriteriaWithDefaults() *YieldMarketTypesCriteria`

NewYieldMarketTypesCriteriaWithDefaults instantiates a new YieldMarketTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *YieldMarketTypesCriteria) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *YieldMarketTypesCriteria) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *YieldMarketTypesCriteria) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *YieldMarketTypesCriteria) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetHotelId

`func (o *YieldMarketTypesCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *YieldMarketTypesCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *YieldMarketTypesCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *YieldMarketTypesCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetDescription

`func (o *YieldMarketTypesCriteria) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *YieldMarketTypesCriteria) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *YieldMarketTypesCriteria) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *YieldMarketTypesCriteria) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAlternativeCode

`func (o *YieldMarketTypesCriteria) GetAlternativeCode() string`

GetAlternativeCode returns the AlternativeCode field if non-nil, zero value otherwise.

### GetAlternativeCodeOk

`func (o *YieldMarketTypesCriteria) GetAlternativeCodeOk() (*string, bool)`

GetAlternativeCodeOk returns a tuple with the AlternativeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternativeCode

`func (o *YieldMarketTypesCriteria) SetAlternativeCode(v string)`

SetAlternativeCode sets AlternativeCode field to given value.

### HasAlternativeCode

`func (o *YieldMarketTypesCriteria) HasAlternativeCode() bool`

HasAlternativeCode returns a boolean if a field has been set.

### GetDefault

`func (o *YieldMarketTypesCriteria) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *YieldMarketTypesCriteria) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *YieldMarketTypesCriteria) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *YieldMarketTypesCriteria) HasDefault() bool`

HasDefault returns a boolean if a field has been set.

### GetLinks

`func (o *YieldMarketTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *YieldMarketTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *YieldMarketTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *YieldMarketTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *YieldMarketTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *YieldMarketTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *YieldMarketTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *YieldMarketTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


