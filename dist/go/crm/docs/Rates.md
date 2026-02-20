# Rates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rate** | Pointer to [**MembershipTransactionRatesType**](MembershipTransactionRatesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRates

`func NewRates() *Rates`

NewRates instantiates a new Rates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatesWithDefaults

`func NewRatesWithDefaults() *Rates`

NewRatesWithDefaults instantiates a new Rates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRate

`func (o *Rates) GetRate() MembershipTransactionRatesType`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *Rates) GetRateOk() (*MembershipTransactionRatesType, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *Rates) SetRate(v MembershipTransactionRatesType)`

SetRate sets Rate field to given value.

### HasRate

`func (o *Rates) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetLinks

`func (o *Rates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Rates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Rates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Rates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Rates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Rates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Rates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Rates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


