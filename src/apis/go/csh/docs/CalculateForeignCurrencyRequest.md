# CalculateForeignCurrencyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Exchange** | Pointer to [**[]ExchangeRateCalculationType**](ExchangeRateCalculationType.md) | A set of currencies that need to be converted. | [optional] 
**AddExchangeCommission** | Pointer to **bool** | Flag to add exchange commission in order to recalculate payment amount in billing. | [optional] 
**IncludeExchangeInformation** | Pointer to **bool** | Flag to include exchange information text in response. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCalculateForeignCurrencyRequest

`func NewCalculateForeignCurrencyRequest() *CalculateForeignCurrencyRequest`

NewCalculateForeignCurrencyRequest instantiates a new CalculateForeignCurrencyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalculateForeignCurrencyRequestWithDefaults

`func NewCalculateForeignCurrencyRequestWithDefaults() *CalculateForeignCurrencyRequest`

NewCalculateForeignCurrencyRequestWithDefaults instantiates a new CalculateForeignCurrencyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExchange

`func (o *CalculateForeignCurrencyRequest) GetExchange() []ExchangeRateCalculationType`

GetExchange returns the Exchange field if non-nil, zero value otherwise.

### GetExchangeOk

`func (o *CalculateForeignCurrencyRequest) GetExchangeOk() (*[]ExchangeRateCalculationType, bool)`

GetExchangeOk returns a tuple with the Exchange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchange

`func (o *CalculateForeignCurrencyRequest) SetExchange(v []ExchangeRateCalculationType)`

SetExchange sets Exchange field to given value.

### HasExchange

`func (o *CalculateForeignCurrencyRequest) HasExchange() bool`

HasExchange returns a boolean if a field has been set.

### GetAddExchangeCommission

`func (o *CalculateForeignCurrencyRequest) GetAddExchangeCommission() bool`

GetAddExchangeCommission returns the AddExchangeCommission field if non-nil, zero value otherwise.

### GetAddExchangeCommissionOk

`func (o *CalculateForeignCurrencyRequest) GetAddExchangeCommissionOk() (*bool, bool)`

GetAddExchangeCommissionOk returns a tuple with the AddExchangeCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddExchangeCommission

`func (o *CalculateForeignCurrencyRequest) SetAddExchangeCommission(v bool)`

SetAddExchangeCommission sets AddExchangeCommission field to given value.

### HasAddExchangeCommission

`func (o *CalculateForeignCurrencyRequest) HasAddExchangeCommission() bool`

HasAddExchangeCommission returns a boolean if a field has been set.

### GetIncludeExchangeInformation

`func (o *CalculateForeignCurrencyRequest) GetIncludeExchangeInformation() bool`

GetIncludeExchangeInformation returns the IncludeExchangeInformation field if non-nil, zero value otherwise.

### GetIncludeExchangeInformationOk

`func (o *CalculateForeignCurrencyRequest) GetIncludeExchangeInformationOk() (*bool, bool)`

GetIncludeExchangeInformationOk returns a tuple with the IncludeExchangeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeExchangeInformation

`func (o *CalculateForeignCurrencyRequest) SetIncludeExchangeInformation(v bool)`

SetIncludeExchangeInformation sets IncludeExchangeInformation field to given value.

### HasIncludeExchangeInformation

`func (o *CalculateForeignCurrencyRequest) HasIncludeExchangeInformation() bool`

HasIncludeExchangeInformation returns a boolean if a field has been set.

### GetLinks

`func (o *CalculateForeignCurrencyRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CalculateForeignCurrencyRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CalculateForeignCurrencyRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CalculateForeignCurrencyRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CalculateForeignCurrencyRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CalculateForeignCurrencyRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CalculateForeignCurrencyRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CalculateForeignCurrencyRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


