# TransactionDiversionRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Transaction Diversion Code | [optional] 
**Description** | Pointer to **string** | User defined message for the Transaction Diversion Rule. | [optional] 
**DisplaySequence** | Pointer to **float32** | User configured Sequence number. | [optional] 
**HotelId** | Pointer to **string** | Hotel code with which Transaction Diversion Rule is associated. | [optional] 
**Inactive** | Pointer to **bool** | Indicator that tells whether the transaction diversion rule is active or not. | [optional] 
**Level** | Pointer to [**TransactionDiversionRuleLevelType**](TransactionDiversionRuleLevelType.md) |  | [optional] 
**Membership** | Pointer to [**MembershipTypeLevelType**](MembershipTypeLevelType.md) |  | [optional] 
**TargetRoom** | Pointer to **string** | Room number to receive all the diverted transactions configured for this instruction. | [optional] 
**Thresholds** | Pointer to [**ThresholdDetailsType**](ThresholdDetailsType.md) |  | [optional] 
**TransactionCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Collection of Transaction Code List | [optional] 
**Type** | Pointer to [**TransactionDiversionRuleTypeType**](TransactionDiversionRuleTypeType.md) |  | [optional] 
**VipCode** | Pointer to **string** | VIP code to consider while applying Diversion Instruction. | [optional] 

## Methods

### NewTransactionDiversionRuleType

`func NewTransactionDiversionRuleType() *TransactionDiversionRuleType`

NewTransactionDiversionRuleType instantiates a new TransactionDiversionRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionDiversionRuleTypeWithDefaults

`func NewTransactionDiversionRuleTypeWithDefaults() *TransactionDiversionRuleType`

NewTransactionDiversionRuleTypeWithDefaults instantiates a new TransactionDiversionRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *TransactionDiversionRuleType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TransactionDiversionRuleType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TransactionDiversionRuleType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TransactionDiversionRuleType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *TransactionDiversionRuleType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TransactionDiversionRuleType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TransactionDiversionRuleType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TransactionDiversionRuleType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *TransactionDiversionRuleType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *TransactionDiversionRuleType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *TransactionDiversionRuleType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *TransactionDiversionRuleType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetHotelId

`func (o *TransactionDiversionRuleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TransactionDiversionRuleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TransactionDiversionRuleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TransactionDiversionRuleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *TransactionDiversionRuleType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *TransactionDiversionRuleType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *TransactionDiversionRuleType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *TransactionDiversionRuleType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetLevel

`func (o *TransactionDiversionRuleType) GetLevel() TransactionDiversionRuleLevelType`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *TransactionDiversionRuleType) GetLevelOk() (*TransactionDiversionRuleLevelType, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *TransactionDiversionRuleType) SetLevel(v TransactionDiversionRuleLevelType)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *TransactionDiversionRuleType) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetMembership

`func (o *TransactionDiversionRuleType) GetMembership() MembershipTypeLevelType`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *TransactionDiversionRuleType) GetMembershipOk() (*MembershipTypeLevelType, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *TransactionDiversionRuleType) SetMembership(v MembershipTypeLevelType)`

SetMembership sets Membership field to given value.

### HasMembership

`func (o *TransactionDiversionRuleType) HasMembership() bool`

HasMembership returns a boolean if a field has been set.

### GetTargetRoom

`func (o *TransactionDiversionRuleType) GetTargetRoom() string`

GetTargetRoom returns the TargetRoom field if non-nil, zero value otherwise.

### GetTargetRoomOk

`func (o *TransactionDiversionRuleType) GetTargetRoomOk() (*string, bool)`

GetTargetRoomOk returns a tuple with the TargetRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRoom

`func (o *TransactionDiversionRuleType) SetTargetRoom(v string)`

SetTargetRoom sets TargetRoom field to given value.

### HasTargetRoom

`func (o *TransactionDiversionRuleType) HasTargetRoom() bool`

HasTargetRoom returns a boolean if a field has been set.

### GetThresholds

`func (o *TransactionDiversionRuleType) GetThresholds() ThresholdDetailsType`

GetThresholds returns the Thresholds field if non-nil, zero value otherwise.

### GetThresholdsOk

`func (o *TransactionDiversionRuleType) GetThresholdsOk() (*ThresholdDetailsType, bool)`

GetThresholdsOk returns a tuple with the Thresholds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThresholds

`func (o *TransactionDiversionRuleType) SetThresholds(v ThresholdDetailsType)`

SetThresholds sets Thresholds field to given value.

### HasThresholds

`func (o *TransactionDiversionRuleType) HasThresholds() bool`

HasThresholds returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *TransactionDiversionRuleType) GetTransactionCodes() []CodeDescriptionType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *TransactionDiversionRuleType) GetTransactionCodesOk() (*[]CodeDescriptionType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *TransactionDiversionRuleType) SetTransactionCodes(v []CodeDescriptionType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *TransactionDiversionRuleType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetType

`func (o *TransactionDiversionRuleType) GetType() TransactionDiversionRuleTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransactionDiversionRuleType) GetTypeOk() (*TransactionDiversionRuleTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransactionDiversionRuleType) SetType(v TransactionDiversionRuleTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *TransactionDiversionRuleType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVipCode

`func (o *TransactionDiversionRuleType) GetVipCode() string`

GetVipCode returns the VipCode field if non-nil, zero value otherwise.

### GetVipCodeOk

`func (o *TransactionDiversionRuleType) GetVipCodeOk() (*string, bool)`

GetVipCodeOk returns a tuple with the VipCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipCode

`func (o *TransactionDiversionRuleType) SetVipCode(v string)`

SetVipCode sets VipCode field to given value.

### HasVipCode

`func (o *TransactionDiversionRuleType) HasVipCode() bool`

HasVipCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


