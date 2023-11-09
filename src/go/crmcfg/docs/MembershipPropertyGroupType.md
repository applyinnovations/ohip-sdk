# MembershipPropertyGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code is used to identify a Membership Market/Resort Group. | [optional] 
**Description** | Pointer to **string** | Description of the Membership Market/Propety Group. | [optional] 
**DisplaySequence** | Pointer to **float32** | Membership Market/Property Groups display sequence Number | [optional] 
**Hotels** | Pointer to [**MembershipPropertyCodesType**](MembershipPropertyCodesType.md) |  | [optional] 

## Methods

### NewMembershipPropertyGroupType

`func NewMembershipPropertyGroupType() *MembershipPropertyGroupType`

NewMembershipPropertyGroupType instantiates a new MembershipPropertyGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipPropertyGroupTypeWithDefaults

`func NewMembershipPropertyGroupTypeWithDefaults() *MembershipPropertyGroupType`

NewMembershipPropertyGroupTypeWithDefaults instantiates a new MembershipPropertyGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *MembershipPropertyGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MembershipPropertyGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MembershipPropertyGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MembershipPropertyGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *MembershipPropertyGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MembershipPropertyGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MembershipPropertyGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MembershipPropertyGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *MembershipPropertyGroupType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *MembershipPropertyGroupType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *MembershipPropertyGroupType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *MembershipPropertyGroupType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetHotels

`func (o *MembershipPropertyGroupType) GetHotels() MembershipPropertyCodesType`

GetHotels returns the Hotels field if non-nil, zero value otherwise.

### GetHotelsOk

`func (o *MembershipPropertyGroupType) GetHotelsOk() (*MembershipPropertyCodesType, bool)`

GetHotelsOk returns a tuple with the Hotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotels

`func (o *MembershipPropertyGroupType) SetHotels(v MembershipPropertyCodesType)`

SetHotels sets Hotels field to given value.

### HasHotels

`func (o *MembershipPropertyGroupType) HasHotels() bool`

HasHotels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


