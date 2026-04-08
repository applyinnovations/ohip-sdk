# MembershipSourceGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code is used to identify a Membership Source Group. | [optional] 
**Description** | Pointer to **string** | Description of the Membership Source Group. | [optional] 
**DisplaySequence** | Pointer to **float32** | Membership Source Groups display sequence Number | [optional] 
**SourceCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Membership Source code and Description. | [optional] 

## Methods

### NewMembershipSourceGroupType

`func NewMembershipSourceGroupType() *MembershipSourceGroupType`

NewMembershipSourceGroupType instantiates a new MembershipSourceGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipSourceGroupTypeWithDefaults

`func NewMembershipSourceGroupTypeWithDefaults() *MembershipSourceGroupType`

NewMembershipSourceGroupTypeWithDefaults instantiates a new MembershipSourceGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *MembershipSourceGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MembershipSourceGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MembershipSourceGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MembershipSourceGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *MembershipSourceGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MembershipSourceGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MembershipSourceGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MembershipSourceGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *MembershipSourceGroupType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *MembershipSourceGroupType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *MembershipSourceGroupType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *MembershipSourceGroupType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetSourceCodes

`func (o *MembershipSourceGroupType) GetSourceCodes() []CodeDescriptionType`

GetSourceCodes returns the SourceCodes field if non-nil, zero value otherwise.

### GetSourceCodesOk

`func (o *MembershipSourceGroupType) GetSourceCodesOk() (*[]CodeDescriptionType, bool)`

GetSourceCodesOk returns a tuple with the SourceCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCodes

`func (o *MembershipSourceGroupType) SetSourceCodes(v []CodeDescriptionType)`

SetSourceCodes sets SourceCodes field to given value.

### HasSourceCodes

`func (o *MembershipSourceGroupType) HasSourceCodes() bool`

HasSourceCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


