# CashierClosureInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierClosureInfo** | Pointer to [**[]CashierClosureInfoType**](CashierClosureInfoType.md) | Information of the Cashier. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCashierClosureInformation

`func NewCashierClosureInformation() *CashierClosureInformation`

NewCashierClosureInformation instantiates a new CashierClosureInformation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierClosureInformationWithDefaults

`func NewCashierClosureInformationWithDefaults() *CashierClosureInformation`

NewCashierClosureInformationWithDefaults instantiates a new CashierClosureInformation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierClosureInfo

`func (o *CashierClosureInformation) GetCashierClosureInfo() []CashierClosureInfoType`

GetCashierClosureInfo returns the CashierClosureInfo field if non-nil, zero value otherwise.

### GetCashierClosureInfoOk

`func (o *CashierClosureInformation) GetCashierClosureInfoOk() (*[]CashierClosureInfoType, bool)`

GetCashierClosureInfoOk returns a tuple with the CashierClosureInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierClosureInfo

`func (o *CashierClosureInformation) SetCashierClosureInfo(v []CashierClosureInfoType)`

SetCashierClosureInfo sets CashierClosureInfo field to given value.

### HasCashierClosureInfo

`func (o *CashierClosureInformation) HasCashierClosureInfo() bool`

HasCashierClosureInfo returns a boolean if a field has been set.

### GetLinks

`func (o *CashierClosureInformation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CashierClosureInformation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CashierClosureInformation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CashierClosureInformation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CashierClosureInformation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CashierClosureInformation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CashierClosureInformation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CashierClosureInformation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


