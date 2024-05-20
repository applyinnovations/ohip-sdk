# ForeignCurrencyCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddExchangeCommission** | Pointer to **bool** | Flag to add exchange commission in order to recalculate payment amount in billing. | [optional] 
**Exchange** | Pointer to [**[]ExchangeRateCalculationType**](ExchangeRateCalculationType.md) | A set of currencies that need to be converted. | [optional] 
**IncludeExchangeInformation** | Pointer to **bool** | Flag to include exchange information text in response. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewForeignCurrencyCriteria

`func NewForeignCurrencyCriteria() *ForeignCurrencyCriteria`

NewForeignCurrencyCriteria instantiates a new ForeignCurrencyCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForeignCurrencyCriteriaWithDefaults

`func NewForeignCurrencyCriteriaWithDefaults() *ForeignCurrencyCriteria`

NewForeignCurrencyCriteriaWithDefaults instantiates a new ForeignCurrencyCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddExchangeCommission

`func (o *ForeignCurrencyCriteria) GetAddExchangeCommission() bool`

GetAddExchangeCommission returns the AddExchangeCommission field if non-nil, zero value otherwise.

### GetAddExchangeCommissionOk

`func (o *ForeignCurrencyCriteria) GetAddExchangeCommissionOk() (*bool, bool)`

GetAddExchangeCommissionOk returns a tuple with the AddExchangeCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddExchangeCommission

`func (o *ForeignCurrencyCriteria) SetAddExchangeCommission(v bool)`

SetAddExchangeCommission sets AddExchangeCommission field to given value.

### HasAddExchangeCommission

`func (o *ForeignCurrencyCriteria) HasAddExchangeCommission() bool`

HasAddExchangeCommission returns a boolean if a field has been set.

### GetExchange

`func (o *ForeignCurrencyCriteria) GetExchange() []ExchangeRateCalculationType`

GetExchange returns the Exchange field if non-nil, zero value otherwise.

### GetExchangeOk

`func (o *ForeignCurrencyCriteria) GetExchangeOk() (*[]ExchangeRateCalculationType, bool)`

GetExchangeOk returns a tuple with the Exchange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchange

`func (o *ForeignCurrencyCriteria) SetExchange(v []ExchangeRateCalculationType)`

SetExchange sets Exchange field to given value.

### HasExchange

`func (o *ForeignCurrencyCriteria) HasExchange() bool`

HasExchange returns a boolean if a field has been set.

### GetIncludeExchangeInformation

`func (o *ForeignCurrencyCriteria) GetIncludeExchangeInformation() bool`

GetIncludeExchangeInformation returns the IncludeExchangeInformation field if non-nil, zero value otherwise.

### GetIncludeExchangeInformationOk

`func (o *ForeignCurrencyCriteria) GetIncludeExchangeInformationOk() (*bool, bool)`

GetIncludeExchangeInformationOk returns a tuple with the IncludeExchangeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeExchangeInformation

`func (o *ForeignCurrencyCriteria) SetIncludeExchangeInformation(v bool)`

SetIncludeExchangeInformation sets IncludeExchangeInformation field to given value.

### HasIncludeExchangeInformation

`func (o *ForeignCurrencyCriteria) HasIncludeExchangeInformation() bool`

HasIncludeExchangeInformation returns a boolean if a field has been set.

### GetLinks

`func (o *ForeignCurrencyCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ForeignCurrencyCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ForeignCurrencyCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ForeignCurrencyCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ForeignCurrencyCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ForeignCurrencyCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ForeignCurrencyCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ForeignCurrencyCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


