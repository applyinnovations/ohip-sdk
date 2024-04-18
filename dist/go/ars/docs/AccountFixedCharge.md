# AccountFixedCharge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FixedChargeInfo** | Pointer to [**ARAccountFixedChargeCriteriaType**](ARAccountFixedChargeCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAccountFixedCharge

`func NewAccountFixedCharge() *AccountFixedCharge`

NewAccountFixedCharge instantiates a new AccountFixedCharge object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountFixedChargeWithDefaults

`func NewAccountFixedChargeWithDefaults() *AccountFixedCharge`

NewAccountFixedChargeWithDefaults instantiates a new AccountFixedCharge object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFixedChargeInfo

`func (o *AccountFixedCharge) GetFixedChargeInfo() ARAccountFixedChargeCriteriaType`

GetFixedChargeInfo returns the FixedChargeInfo field if non-nil, zero value otherwise.

### GetFixedChargeInfoOk

`func (o *AccountFixedCharge) GetFixedChargeInfoOk() (*ARAccountFixedChargeCriteriaType, bool)`

GetFixedChargeInfoOk returns a tuple with the FixedChargeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedChargeInfo

`func (o *AccountFixedCharge) SetFixedChargeInfo(v ARAccountFixedChargeCriteriaType)`

SetFixedChargeInfo sets FixedChargeInfo field to given value.

### HasFixedChargeInfo

`func (o *AccountFixedCharge) HasFixedChargeInfo() bool`

HasFixedChargeInfo returns a boolean if a field has been set.

### GetLinks

`func (o *AccountFixedCharge) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AccountFixedCharge) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AccountFixedCharge) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AccountFixedCharge) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AccountFixedCharge) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountFixedCharge) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountFixedCharge) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountFixedCharge) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

