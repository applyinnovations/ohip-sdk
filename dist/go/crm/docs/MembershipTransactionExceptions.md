# MembershipTransactionExceptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MemberTransactionExceptions** | Pointer to [**[]MembershipTransactionExceptionType**](MembershipTransactionExceptionType.md) | Contains Membership transaction exception information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipTransactionExceptions

`func NewMembershipTransactionExceptions() *MembershipTransactionExceptions`

NewMembershipTransactionExceptions instantiates a new MembershipTransactionExceptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTransactionExceptionsWithDefaults

`func NewMembershipTransactionExceptionsWithDefaults() *MembershipTransactionExceptions`

NewMembershipTransactionExceptionsWithDefaults instantiates a new MembershipTransactionExceptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipTransactionExceptions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipTransactionExceptions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipTransactionExceptions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipTransactionExceptions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMemberTransactionExceptions

`func (o *MembershipTransactionExceptions) GetMemberTransactionExceptions() []MembershipTransactionExceptionType`

GetMemberTransactionExceptions returns the MemberTransactionExceptions field if non-nil, zero value otherwise.

### GetMemberTransactionExceptionsOk

`func (o *MembershipTransactionExceptions) GetMemberTransactionExceptionsOk() (*[]MembershipTransactionExceptionType, bool)`

GetMemberTransactionExceptionsOk returns a tuple with the MemberTransactionExceptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberTransactionExceptions

`func (o *MembershipTransactionExceptions) SetMemberTransactionExceptions(v []MembershipTransactionExceptionType)`

SetMemberTransactionExceptions sets MemberTransactionExceptions field to given value.

### HasMemberTransactionExceptions

`func (o *MembershipTransactionExceptions) HasMemberTransactionExceptions() bool`

HasMemberTransactionExceptions returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipTransactionExceptions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipTransactionExceptions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipTransactionExceptions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipTransactionExceptions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


