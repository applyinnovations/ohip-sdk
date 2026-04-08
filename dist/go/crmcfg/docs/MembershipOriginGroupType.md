# MembershipOriginGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code is used to identify a Membership Origin Group. | [optional] 
**Description** | Pointer to **string** | Description of the Membership Origin Group. | [optional] 
**DisplaySequence** | Pointer to **float32** | Membership Origin Groups display sequence Number | [optional] 
**OriginCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Membership Origin code and Description. | [optional] 

## Methods

### NewMembershipOriginGroupType

`func NewMembershipOriginGroupType() *MembershipOriginGroupType`

NewMembershipOriginGroupType instantiates a new MembershipOriginGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipOriginGroupTypeWithDefaults

`func NewMembershipOriginGroupTypeWithDefaults() *MembershipOriginGroupType`

NewMembershipOriginGroupTypeWithDefaults instantiates a new MembershipOriginGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *MembershipOriginGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MembershipOriginGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MembershipOriginGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MembershipOriginGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *MembershipOriginGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MembershipOriginGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MembershipOriginGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MembershipOriginGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *MembershipOriginGroupType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *MembershipOriginGroupType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *MembershipOriginGroupType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *MembershipOriginGroupType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetOriginCodes

`func (o *MembershipOriginGroupType) GetOriginCodes() []CodeDescriptionType`

GetOriginCodes returns the OriginCodes field if non-nil, zero value otherwise.

### GetOriginCodesOk

`func (o *MembershipOriginGroupType) GetOriginCodesOk() (*[]CodeDescriptionType, bool)`

GetOriginCodesOk returns a tuple with the OriginCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginCodes

`func (o *MembershipOriginGroupType) SetOriginCodes(v []CodeDescriptionType)`

SetOriginCodes sets OriginCodes field to given value.

### HasOriginCodes

`func (o *MembershipOriginGroupType) HasOriginCodes() bool`

HasOriginCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


