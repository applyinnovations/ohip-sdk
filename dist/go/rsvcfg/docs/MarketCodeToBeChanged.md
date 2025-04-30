# MarketCodeToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketCode** | Pointer to [**MarketCodeType**](MarketCodeType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMarketCodeToBeChanged

`func NewMarketCodeToBeChanged() *MarketCodeToBeChanged`

NewMarketCodeToBeChanged instantiates a new MarketCodeToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketCodeToBeChangedWithDefaults

`func NewMarketCodeToBeChangedWithDefaults() *MarketCodeToBeChanged`

NewMarketCodeToBeChangedWithDefaults instantiates a new MarketCodeToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMarketCode

`func (o *MarketCodeToBeChanged) GetMarketCode() MarketCodeType`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *MarketCodeToBeChanged) GetMarketCodeOk() (*MarketCodeType, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *MarketCodeToBeChanged) SetMarketCode(v MarketCodeType)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *MarketCodeToBeChanged) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetLinks

`func (o *MarketCodeToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MarketCodeToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MarketCodeToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MarketCodeToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MarketCodeToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MarketCodeToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MarketCodeToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MarketCodeToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


