# MembershipEnrollmentGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code is used to identify a Membership Market/Resort Group. | [optional] 
**Description** | Pointer to **string** | Description of the Membership Market/Propety Group. | [optional] 
**DisplaySequence** | Pointer to **float32** | Membership Market/Property Groups display sequence Number | [optional] 
**EnrollmentCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Membership enrollment code code and description. | [optional] 

## Methods

### NewMembershipEnrollmentGroupType

`func NewMembershipEnrollmentGroupType() *MembershipEnrollmentGroupType`

NewMembershipEnrollmentGroupType instantiates a new MembershipEnrollmentGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipEnrollmentGroupTypeWithDefaults

`func NewMembershipEnrollmentGroupTypeWithDefaults() *MembershipEnrollmentGroupType`

NewMembershipEnrollmentGroupTypeWithDefaults instantiates a new MembershipEnrollmentGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *MembershipEnrollmentGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MembershipEnrollmentGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MembershipEnrollmentGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MembershipEnrollmentGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *MembershipEnrollmentGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MembershipEnrollmentGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MembershipEnrollmentGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MembershipEnrollmentGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *MembershipEnrollmentGroupType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *MembershipEnrollmentGroupType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *MembershipEnrollmentGroupType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *MembershipEnrollmentGroupType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetEnrollmentCodes

`func (o *MembershipEnrollmentGroupType) GetEnrollmentCodes() []CodeDescriptionType`

GetEnrollmentCodes returns the EnrollmentCodes field if non-nil, zero value otherwise.

### GetEnrollmentCodesOk

`func (o *MembershipEnrollmentGroupType) GetEnrollmentCodesOk() (*[]CodeDescriptionType, bool)`

GetEnrollmentCodesOk returns a tuple with the EnrollmentCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentCodes

`func (o *MembershipEnrollmentGroupType) SetEnrollmentCodes(v []CodeDescriptionType)`

SetEnrollmentCodes sets EnrollmentCodes field to given value.

### HasEnrollmentCodes

`func (o *MembershipEnrollmentGroupType) HasEnrollmentCodes() bool`

HasEnrollmentCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


