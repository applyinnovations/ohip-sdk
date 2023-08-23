# FetchProfileMatchRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExchangeProfileMatchRules** | Pointer to [**[]ExchangeProfileMatchRuleType**](ExchangeProfileMatchRuleType.md) | Type that holds collection of exchange profile match rules. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchProfileMatchRules

`func NewFetchProfileMatchRules() *FetchProfileMatchRules`

NewFetchProfileMatchRules instantiates a new FetchProfileMatchRules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchProfileMatchRulesWithDefaults

`func NewFetchProfileMatchRulesWithDefaults() *FetchProfileMatchRules`

NewFetchProfileMatchRulesWithDefaults instantiates a new FetchProfileMatchRules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExchangeProfileMatchRules

`func (o *FetchProfileMatchRules) GetExchangeProfileMatchRules() []ExchangeProfileMatchRuleType`

GetExchangeProfileMatchRules returns the ExchangeProfileMatchRules field if non-nil, zero value otherwise.

### GetExchangeProfileMatchRulesOk

`func (o *FetchProfileMatchRules) GetExchangeProfileMatchRulesOk() (*[]ExchangeProfileMatchRuleType, bool)`

GetExchangeProfileMatchRulesOk returns a tuple with the ExchangeProfileMatchRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeProfileMatchRules

`func (o *FetchProfileMatchRules) SetExchangeProfileMatchRules(v []ExchangeProfileMatchRuleType)`

SetExchangeProfileMatchRules sets ExchangeProfileMatchRules field to given value.

### HasExchangeProfileMatchRules

`func (o *FetchProfileMatchRules) HasExchangeProfileMatchRules() bool`

HasExchangeProfileMatchRules returns a boolean if a field has been set.

### GetLinks

`func (o *FetchProfileMatchRules) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchProfileMatchRules) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchProfileMatchRules) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchProfileMatchRules) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchProfileMatchRules) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchProfileMatchRules) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchProfileMatchRules) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchProfileMatchRules) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


