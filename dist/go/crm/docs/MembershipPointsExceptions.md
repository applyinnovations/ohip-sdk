# MembershipPointsExceptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipPointsExceptions** | Pointer to [**MembershipPointsExceptionsType**](MembershipPointsExceptionsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipPointsExceptions

`func NewMembershipPointsExceptions() *MembershipPointsExceptions`

NewMembershipPointsExceptions instantiates a new MembershipPointsExceptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipPointsExceptionsWithDefaults

`func NewMembershipPointsExceptionsWithDefaults() *MembershipPointsExceptions`

NewMembershipPointsExceptionsWithDefaults instantiates a new MembershipPointsExceptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipPointsExceptions

`func (o *MembershipPointsExceptions) GetMembershipPointsExceptions() MembershipPointsExceptionsType`

GetMembershipPointsExceptions returns the MembershipPointsExceptions field if non-nil, zero value otherwise.

### GetMembershipPointsExceptionsOk

`func (o *MembershipPointsExceptions) GetMembershipPointsExceptionsOk() (*MembershipPointsExceptionsType, bool)`

GetMembershipPointsExceptionsOk returns a tuple with the MembershipPointsExceptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipPointsExceptions

`func (o *MembershipPointsExceptions) SetMembershipPointsExceptions(v MembershipPointsExceptionsType)`

SetMembershipPointsExceptions sets MembershipPointsExceptions field to given value.

### HasMembershipPointsExceptions

`func (o *MembershipPointsExceptions) HasMembershipPointsExceptions() bool`

HasMembershipPointsExceptions returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipPointsExceptions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipPointsExceptions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipPointsExceptions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipPointsExceptions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipPointsExceptions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipPointsExceptions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipPointsExceptions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipPointsExceptions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


