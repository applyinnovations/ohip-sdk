# Cashiers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cashiers** | Pointer to [**[]CashierType**](CashierType.md) | Details about a cashier. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCashiers

`func NewCashiers() *Cashiers`

NewCashiers instantiates a new Cashiers object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashiersWithDefaults

`func NewCashiersWithDefaults() *Cashiers`

NewCashiersWithDefaults instantiates a new Cashiers object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashiers

`func (o *Cashiers) GetCashiers() []CashierType`

GetCashiers returns the Cashiers field if non-nil, zero value otherwise.

### GetCashiersOk

`func (o *Cashiers) GetCashiersOk() (*[]CashierType, bool)`

GetCashiersOk returns a tuple with the Cashiers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiers

`func (o *Cashiers) SetCashiers(v []CashierType)`

SetCashiers sets Cashiers field to given value.

### HasCashiers

`func (o *Cashiers) HasCashiers() bool`

HasCashiers returns a boolean if a field has been set.

### GetLinks

`func (o *Cashiers) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Cashiers) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Cashiers) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Cashiers) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Cashiers) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Cashiers) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Cashiers) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Cashiers) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


