# SellMessageConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellMessageConfigs** | Pointer to [**SellMessageConfigsType**](SellMessageConfigsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSellMessageConfig

`func NewSellMessageConfig() *SellMessageConfig`

NewSellMessageConfig instantiates a new SellMessageConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSellMessageConfigWithDefaults

`func NewSellMessageConfigWithDefaults() *SellMessageConfig`

NewSellMessageConfigWithDefaults instantiates a new SellMessageConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSellMessageConfigs

`func (o *SellMessageConfig) GetSellMessageConfigs() SellMessageConfigsType`

GetSellMessageConfigs returns the SellMessageConfigs field if non-nil, zero value otherwise.

### GetSellMessageConfigsOk

`func (o *SellMessageConfig) GetSellMessageConfigsOk() (*SellMessageConfigsType, bool)`

GetSellMessageConfigsOk returns a tuple with the SellMessageConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessageConfigs

`func (o *SellMessageConfig) SetSellMessageConfigs(v SellMessageConfigsType)`

SetSellMessageConfigs sets SellMessageConfigs field to given value.

### HasSellMessageConfigs

`func (o *SellMessageConfig) HasSellMessageConfigs() bool`

HasSellMessageConfigs returns a boolean if a field has been set.

### GetLinks

`func (o *SellMessageConfig) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SellMessageConfig) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SellMessageConfig) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SellMessageConfig) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SellMessageConfig) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SellMessageConfig) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SellMessageConfig) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SellMessageConfig) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


