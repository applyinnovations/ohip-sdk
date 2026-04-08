# DepositRefundEligibleCheck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsDepositRefundValid** | Pointer to **bool** | Is reservation valid for deposit refund. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDepositRefundEligibleCheck

`func NewDepositRefundEligibleCheck() *DepositRefundEligibleCheck`

NewDepositRefundEligibleCheck instantiates a new DepositRefundEligibleCheck object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositRefundEligibleCheckWithDefaults

`func NewDepositRefundEligibleCheckWithDefaults() *DepositRefundEligibleCheck`

NewDepositRefundEligibleCheckWithDefaults instantiates a new DepositRefundEligibleCheck object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsDepositRefundValid

`func (o *DepositRefundEligibleCheck) GetIsDepositRefundValid() bool`

GetIsDepositRefundValid returns the IsDepositRefundValid field if non-nil, zero value otherwise.

### GetIsDepositRefundValidOk

`func (o *DepositRefundEligibleCheck) GetIsDepositRefundValidOk() (*bool, bool)`

GetIsDepositRefundValidOk returns a tuple with the IsDepositRefundValid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDepositRefundValid

`func (o *DepositRefundEligibleCheck) SetIsDepositRefundValid(v bool)`

SetIsDepositRefundValid sets IsDepositRefundValid field to given value.

### HasIsDepositRefundValid

`func (o *DepositRefundEligibleCheck) HasIsDepositRefundValid() bool`

HasIsDepositRefundValid returns a boolean if a field has been set.

### GetLinks

`func (o *DepositRefundEligibleCheck) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DepositRefundEligibleCheck) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DepositRefundEligibleCheck) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DepositRefundEligibleCheck) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DepositRefundEligibleCheck) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DepositRefundEligibleCheck) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DepositRefundEligibleCheck) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DepositRefundEligibleCheck) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


