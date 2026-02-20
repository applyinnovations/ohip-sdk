# ProfileCommissionAccountCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileCommissionAccountsInfo** | Pointer to [**CopyProfileCommissionInfoType**](CopyProfileCommissionInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileCommissionAccountCopy

`func NewProfileCommissionAccountCopy() *ProfileCommissionAccountCopy`

NewProfileCommissionAccountCopy instantiates a new ProfileCommissionAccountCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileCommissionAccountCopyWithDefaults

`func NewProfileCommissionAccountCopyWithDefaults() *ProfileCommissionAccountCopy`

NewProfileCommissionAccountCopyWithDefaults instantiates a new ProfileCommissionAccountCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileCommissionAccountsInfo

`func (o *ProfileCommissionAccountCopy) GetProfileCommissionAccountsInfo() CopyProfileCommissionInfoType`

GetProfileCommissionAccountsInfo returns the ProfileCommissionAccountsInfo field if non-nil, zero value otherwise.

### GetProfileCommissionAccountsInfoOk

`func (o *ProfileCommissionAccountCopy) GetProfileCommissionAccountsInfoOk() (*CopyProfileCommissionInfoType, bool)`

GetProfileCommissionAccountsInfoOk returns a tuple with the ProfileCommissionAccountsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCommissionAccountsInfo

`func (o *ProfileCommissionAccountCopy) SetProfileCommissionAccountsInfo(v CopyProfileCommissionInfoType)`

SetProfileCommissionAccountsInfo sets ProfileCommissionAccountsInfo field to given value.

### HasProfileCommissionAccountsInfo

`func (o *ProfileCommissionAccountCopy) HasProfileCommissionAccountsInfo() bool`

HasProfileCommissionAccountsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileCommissionAccountCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileCommissionAccountCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileCommissionAccountCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileCommissionAccountCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileCommissionAccountCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileCommissionAccountCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileCommissionAccountCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileCommissionAccountCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


