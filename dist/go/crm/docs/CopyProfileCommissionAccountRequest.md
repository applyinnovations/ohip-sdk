# CopyProfileCommissionAccountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ProfileCommissionAccountsInfo** | Pointer to [**CopyProfileCommissionInfoType**](CopyProfileCommissionInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyProfileCommissionAccountRequest

`func NewCopyProfileCommissionAccountRequest() *CopyProfileCommissionAccountRequest`

NewCopyProfileCommissionAccountRequest instantiates a new CopyProfileCommissionAccountRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyProfileCommissionAccountRequestWithDefaults

`func NewCopyProfileCommissionAccountRequestWithDefaults() *CopyProfileCommissionAccountRequest`

NewCopyProfileCommissionAccountRequestWithDefaults instantiates a new CopyProfileCommissionAccountRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyProfileCommissionAccountRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyProfileCommissionAccountRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyProfileCommissionAccountRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyProfileCommissionAccountRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileCommissionAccountsInfo

`func (o *CopyProfileCommissionAccountRequest) GetProfileCommissionAccountsInfo() CopyProfileCommissionInfoType`

GetProfileCommissionAccountsInfo returns the ProfileCommissionAccountsInfo field if non-nil, zero value otherwise.

### GetProfileCommissionAccountsInfoOk

`func (o *CopyProfileCommissionAccountRequest) GetProfileCommissionAccountsInfoOk() (*CopyProfileCommissionInfoType, bool)`

GetProfileCommissionAccountsInfoOk returns a tuple with the ProfileCommissionAccountsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCommissionAccountsInfo

`func (o *CopyProfileCommissionAccountRequest) SetProfileCommissionAccountsInfo(v CopyProfileCommissionInfoType)`

SetProfileCommissionAccountsInfo sets ProfileCommissionAccountsInfo field to given value.

### HasProfileCommissionAccountsInfo

`func (o *CopyProfileCommissionAccountRequest) HasProfileCommissionAccountsInfo() bool`

HasProfileCommissionAccountsInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyProfileCommissionAccountRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyProfileCommissionAccountRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyProfileCommissionAccountRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyProfileCommissionAccountRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


