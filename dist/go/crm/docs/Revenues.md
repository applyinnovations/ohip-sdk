# Revenues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Revenue** | Pointer to [**MembershipTransactionRevenuesType**](MembershipTransactionRevenuesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRevenues

`func NewRevenues() *Revenues`

NewRevenues instantiates a new Revenues object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenuesWithDefaults

`func NewRevenuesWithDefaults() *Revenues`

NewRevenuesWithDefaults instantiates a new Revenues object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenue

`func (o *Revenues) GetRevenue() MembershipTransactionRevenuesType`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *Revenues) GetRevenueOk() (*MembershipTransactionRevenuesType, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *Revenues) SetRevenue(v MembershipTransactionRevenuesType)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *Revenues) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetLinks

`func (o *Revenues) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Revenues) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Revenues) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Revenues) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Revenues) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Revenues) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Revenues) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Revenues) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


