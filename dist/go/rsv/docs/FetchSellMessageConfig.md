# FetchSellMessageConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**SellMessageConfigs** | Pointer to [**FetchSellMessageConfigSellMessageConfigs**](FetchSellMessageConfigSellMessageConfigs.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchSellMessageConfig

`func NewFetchSellMessageConfig() *FetchSellMessageConfig`

NewFetchSellMessageConfig instantiates a new FetchSellMessageConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchSellMessageConfigWithDefaults

`func NewFetchSellMessageConfigWithDefaults() *FetchSellMessageConfig`

NewFetchSellMessageConfigWithDefaults instantiates a new FetchSellMessageConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *FetchSellMessageConfig) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchSellMessageConfig) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchSellMessageConfig) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchSellMessageConfig) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSellMessageConfigs

`func (o *FetchSellMessageConfig) GetSellMessageConfigs() FetchSellMessageConfigSellMessageConfigs`

GetSellMessageConfigs returns the SellMessageConfigs field if non-nil, zero value otherwise.

### GetSellMessageConfigsOk

`func (o *FetchSellMessageConfig) GetSellMessageConfigsOk() (*FetchSellMessageConfigSellMessageConfigs, bool)`

GetSellMessageConfigsOk returns a tuple with the SellMessageConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellMessageConfigs

`func (o *FetchSellMessageConfig) SetSellMessageConfigs(v FetchSellMessageConfigSellMessageConfigs)`

SetSellMessageConfigs sets SellMessageConfigs field to given value.

### HasSellMessageConfigs

`func (o *FetchSellMessageConfig) HasSellMessageConfigs() bool`

HasSellMessageConfigs returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchSellMessageConfig) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchSellMessageConfig) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchSellMessageConfig) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchSellMessageConfig) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


