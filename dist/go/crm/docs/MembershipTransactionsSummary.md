# MembershipTransactionsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipDetails** | Pointer to [**MembershipDetailsType**](MembershipDetailsType.md) |  | [optional] 
**PointsSummary** | Pointer to [**MemberPointsSummaryType**](MemberPointsSummaryType.md) |  | [optional] 
**RecentTransactionsSummary** | Pointer to [**MemberTransactionRecentSummaryType**](MemberTransactionRecentSummaryType.md) |  | [optional] 
**TransactionsSummary** | Pointer to [**MemberTransactionSummaryType**](MemberTransactionSummaryType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipTransactionsSummary

`func NewMembershipTransactionsSummary() *MembershipTransactionsSummary`

NewMembershipTransactionsSummary instantiates a new MembershipTransactionsSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTransactionsSummaryWithDefaults

`func NewMembershipTransactionsSummaryWithDefaults() *MembershipTransactionsSummary`

NewMembershipTransactionsSummaryWithDefaults instantiates a new MembershipTransactionsSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipTransactionsSummary) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipTransactionsSummary) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipTransactionsSummary) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipTransactionsSummary) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipDetails

`func (o *MembershipTransactionsSummary) GetMembershipDetails() MembershipDetailsType`

GetMembershipDetails returns the MembershipDetails field if non-nil, zero value otherwise.

### GetMembershipDetailsOk

`func (o *MembershipTransactionsSummary) GetMembershipDetailsOk() (*MembershipDetailsType, bool)`

GetMembershipDetailsOk returns a tuple with the MembershipDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipDetails

`func (o *MembershipTransactionsSummary) SetMembershipDetails(v MembershipDetailsType)`

SetMembershipDetails sets MembershipDetails field to given value.

### HasMembershipDetails

`func (o *MembershipTransactionsSummary) HasMembershipDetails() bool`

HasMembershipDetails returns a boolean if a field has been set.

### GetPointsSummary

`func (o *MembershipTransactionsSummary) GetPointsSummary() MemberPointsSummaryType`

GetPointsSummary returns the PointsSummary field if non-nil, zero value otherwise.

### GetPointsSummaryOk

`func (o *MembershipTransactionsSummary) GetPointsSummaryOk() (*MemberPointsSummaryType, bool)`

GetPointsSummaryOk returns a tuple with the PointsSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsSummary

`func (o *MembershipTransactionsSummary) SetPointsSummary(v MemberPointsSummaryType)`

SetPointsSummary sets PointsSummary field to given value.

### HasPointsSummary

`func (o *MembershipTransactionsSummary) HasPointsSummary() bool`

HasPointsSummary returns a boolean if a field has been set.

### GetRecentTransactionsSummary

`func (o *MembershipTransactionsSummary) GetRecentTransactionsSummary() MemberTransactionRecentSummaryType`

GetRecentTransactionsSummary returns the RecentTransactionsSummary field if non-nil, zero value otherwise.

### GetRecentTransactionsSummaryOk

`func (o *MembershipTransactionsSummary) GetRecentTransactionsSummaryOk() (*MemberTransactionRecentSummaryType, bool)`

GetRecentTransactionsSummaryOk returns a tuple with the RecentTransactionsSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecentTransactionsSummary

`func (o *MembershipTransactionsSummary) SetRecentTransactionsSummary(v MemberTransactionRecentSummaryType)`

SetRecentTransactionsSummary sets RecentTransactionsSummary field to given value.

### HasRecentTransactionsSummary

`func (o *MembershipTransactionsSummary) HasRecentTransactionsSummary() bool`

HasRecentTransactionsSummary returns a boolean if a field has been set.

### GetTransactionsSummary

`func (o *MembershipTransactionsSummary) GetTransactionsSummary() MemberTransactionSummaryType`

GetTransactionsSummary returns the TransactionsSummary field if non-nil, zero value otherwise.

### GetTransactionsSummaryOk

`func (o *MembershipTransactionsSummary) GetTransactionsSummaryOk() (*MemberTransactionSummaryType, bool)`

GetTransactionsSummaryOk returns a tuple with the TransactionsSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionsSummary

`func (o *MembershipTransactionsSummary) SetTransactionsSummary(v MemberTransactionSummaryType)`

SetTransactionsSummary sets TransactionsSummary field to given value.

### HasTransactionsSummary

`func (o *MembershipTransactionsSummary) HasTransactionsSummary() bool`

HasTransactionsSummary returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipTransactionsSummary) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipTransactionsSummary) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipTransactionsSummary) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipTransactionsSummary) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


