# DepositMaturityDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepositMaturityInfo** | Pointer to [**DepositMaturityInfoType**](DepositMaturityInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDepositMaturityDetails

`func NewDepositMaturityDetails() *DepositMaturityDetails`

NewDepositMaturityDetails instantiates a new DepositMaturityDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositMaturityDetailsWithDefaults

`func NewDepositMaturityDetailsWithDefaults() *DepositMaturityDetails`

NewDepositMaturityDetailsWithDefaults instantiates a new DepositMaturityDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepositMaturityInfo

`func (o *DepositMaturityDetails) GetDepositMaturityInfo() DepositMaturityInfoType`

GetDepositMaturityInfo returns the DepositMaturityInfo field if non-nil, zero value otherwise.

### GetDepositMaturityInfoOk

`func (o *DepositMaturityDetails) GetDepositMaturityInfoOk() (*DepositMaturityInfoType, bool)`

GetDepositMaturityInfoOk returns a tuple with the DepositMaturityInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositMaturityInfo

`func (o *DepositMaturityDetails) SetDepositMaturityInfo(v DepositMaturityInfoType)`

SetDepositMaturityInfo sets DepositMaturityInfo field to given value.

### HasDepositMaturityInfo

`func (o *DepositMaturityDetails) HasDepositMaturityInfo() bool`

HasDepositMaturityInfo returns a boolean if a field has been set.

### GetLinks

`func (o *DepositMaturityDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DepositMaturityDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DepositMaturityDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DepositMaturityDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DepositMaturityDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DepositMaturityDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DepositMaturityDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DepositMaturityDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


