# MembershipTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipTransactionDetails** | Pointer to [**MembershipTransactionType**](MembershipTransactionType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipTransaction

`func NewMembershipTransaction() *MembershipTransaction`

NewMembershipTransaction instantiates a new MembershipTransaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTransactionWithDefaults

`func NewMembershipTransactionWithDefaults() *MembershipTransaction`

NewMembershipTransactionWithDefaults instantiates a new MembershipTransaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipTransactionDetails

`func (o *MembershipTransaction) GetMembershipTransactionDetails() MembershipTransactionType`

GetMembershipTransactionDetails returns the MembershipTransactionDetails field if non-nil, zero value otherwise.

### GetMembershipTransactionDetailsOk

`func (o *MembershipTransaction) GetMembershipTransactionDetailsOk() (*MembershipTransactionType, bool)`

GetMembershipTransactionDetailsOk returns a tuple with the MembershipTransactionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTransactionDetails

`func (o *MembershipTransaction) SetMembershipTransactionDetails(v MembershipTransactionType)`

SetMembershipTransactionDetails sets MembershipTransactionDetails field to given value.

### HasMembershipTransactionDetails

`func (o *MembershipTransaction) HasMembershipTransactionDetails() bool`

HasMembershipTransactionDetails returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipTransaction) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipTransaction) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipTransaction) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipTransaction) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipTransaction) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipTransaction) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipTransaction) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipTransaction) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


