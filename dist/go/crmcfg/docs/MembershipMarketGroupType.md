# MembershipMarketGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code is used to identify a Membership Market/Resort Group. | [optional] 
**Description** | Pointer to **string** | Description of the Membership Market/Propety Group. | [optional] 
**DisplaySequence** | Pointer to **float32** | Membership Market/Property Groups display sequence Number | [optional] 
**MarketCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Membership Markets code and Description. | [optional] 

## Methods

### NewMembershipMarketGroupType

`func NewMembershipMarketGroupType() *MembershipMarketGroupType`

NewMembershipMarketGroupType instantiates a new MembershipMarketGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipMarketGroupTypeWithDefaults

`func NewMembershipMarketGroupTypeWithDefaults() *MembershipMarketGroupType`

NewMembershipMarketGroupTypeWithDefaults instantiates a new MembershipMarketGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *MembershipMarketGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MembershipMarketGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MembershipMarketGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MembershipMarketGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *MembershipMarketGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MembershipMarketGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MembershipMarketGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MembershipMarketGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *MembershipMarketGroupType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *MembershipMarketGroupType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *MembershipMarketGroupType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *MembershipMarketGroupType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetMarketCodes

`func (o *MembershipMarketGroupType) GetMarketCodes() []CodeDescriptionType`

GetMarketCodes returns the MarketCodes field if non-nil, zero value otherwise.

### GetMarketCodesOk

`func (o *MembershipMarketGroupType) GetMarketCodesOk() (*[]CodeDescriptionType, bool)`

GetMarketCodesOk returns a tuple with the MarketCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCodes

`func (o *MembershipMarketGroupType) SetMarketCodes(v []CodeDescriptionType)`

SetMarketCodes sets MarketCodes field to given value.

### HasMarketCodes

`func (o *MembershipMarketGroupType) HasMarketCodes() bool`

HasMarketCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


